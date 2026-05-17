// 360 Asset Viewer for MkDocs Material
// Usage: Add data-360-viewer attribute to images with horizontal spritesheets

// Global registry for synced viewer groups
const syncGroups = {};

class AssetViewer360 {
  constructor(container) {
    this.container = container;
    this.img = container.querySelector('img');
    this.frameCount = parseInt(container.dataset.frames) || 36;
    this.currentFrame = 0;
    this.isDragging = false;
    this.startX = 0;
    this.startFrame = 0;
    this.accumulatedDelta = 0;
    this.isInitialized = false;
    this.isFullscreen = false;
    this.syncGroup = this.container.dataset.syncGroup || null;

    this.init();
  }

  init() {
    // Register with sync group if specified
    if (this.syncGroup) {
      if (!syncGroups[this.syncGroup]) {
        syncGroups[this.syncGroup] = [];
      }
      syncGroups[this.syncGroup].push(this);
    }

    // Wait for image to load to get dimensions
    if (this.img.complete) {
      this.setup();
    } else {
      this.img.addEventListener('load', () => this.setup());
    }

    // Setup observer to detect when container becomes visible
    this.setupVisibilityObserver();
  }

  setupVisibilityObserver() {
    // Use IntersectionObserver to detect when the element becomes visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isInitialized) {
          // Element is now visible, try to initialize if image is loaded
          if (this.img.complete) {
            this.setup();
          }
        }
      });
    }, { threshold: 0.01 });

    observer.observe(this.container);
    this.observer = observer;
  }

  setup() {
    // Prevent double initialization
    if (this.isInitialized) return;

    // Check if container is visible (has dimensions)
    if (this.container.offsetWidth === 0 || this.container.offsetHeight === 0) {
      // Not visible yet, observer will retry when it becomes visible
      return;
    }

    this.isInitialized = true;

    // Determine layout: 'horizontal' or 'grid'
    this.layout = this.container.dataset.layout || 'horizontal';

    // Calculate frame dimensions based on layout
    if (this.layout === 'grid') {
      // Grid layout - calculate columns and rows
      // Can be specified manually or auto-calculated
      const manualCols = parseInt(this.container.dataset.gridCols);
      const manualRows = parseInt(this.container.dataset.gridRows);

      if (manualCols && manualRows) {
        this.gridCols = manualCols;
        this.gridRows = manualRows;
      } else {
        // Auto-calculate: try to make grid as square as possible
        this.gridCols = Math.ceil(Math.sqrt(this.frameCount));
        this.gridRows = Math.ceil(this.frameCount / this.gridCols);
      }

      this.frameWidth = this.img.naturalWidth / this.gridCols;
      this.frameHeight = this.img.naturalHeight / this.gridRows;
    } else {
      // Horizontal layout (default)
      this.frameWidth = this.img.naturalWidth / this.frameCount;
      this.frameHeight = this.img.naturalHeight;
    }

    // Calculate scale to fit container width
    const containerWidth = this.container.parentElement.offsetWidth;
    const maxWidth = parseFloat(this.container.dataset.maxWidth) || containerWidth;
    this.scale = Math.min(1, maxWidth / this.frameWidth);

    // Actual displayed dimensions
    this.displayWidth = this.frameWidth * this.scale;
    this.displayHeight = this.frameHeight * this.scale;

    // Style the container
    this.container.style.cursor = 'grab';
    this.container.style.overflow = 'hidden';
    this.container.style.position = 'relative';
    this.container.style.userSelect = 'none';
    this.container.style.display = 'inline-block';
    this.container.style.width = `${this.displayWidth}px`;
    this.container.style.height = `${this.displayHeight}px`;

    // Style the image
    this.img.style.display = 'block';
    this.img.style.maxWidth = 'none';
    this.img.style.position = 'relative';
    this.img.draggable = false;

    if (this.layout === 'grid') {
      // For grid layout, scale the entire grid
      this.img.style.width = `${this.img.naturalWidth * this.scale}px`;
      this.img.style.height = `${this.img.naturalHeight * this.scale}px`;
      this.img.style.left = '0px';
      this.img.style.top = '0px';
    } else {
      // For horizontal layout
      this.img.style.height = `${this.displayHeight}px`;
      this.img.style.width = 'auto';
      this.img.style.left = '0px';
    }

    // Add 360 indicator icon
    this.addIndicator();

    // Add fullscreen button
    this.addFullscreenButton();

    // Add event listeners
    this.addEventListeners();

    // Show first frame
    this.updateFrame(0);

    // Sync with group if this viewer was initialized late
    if (this.syncGroup && syncGroups[this.syncGroup]) {
      const otherViewer = syncGroups[this.syncGroup].find(v => v !== this && v.isInitialized);
      if (otherViewer) {
        this.updateFrame(otherViewer.currentFrame, false); // false = don't sync back
      }
    }
  }

  addIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'viewer-360-indicator';
    indicator.innerHTML = `
      <svg height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M12 7C6.5 7 2 9.2 2 12C2 14.2 4.9 16.1 9 16.8V20L13 16L9 12V14.7C5.8 14.1 4 12.8 4 12C4 10.9 7 9 12 9S20 10.9 20 12C20 12.7 18.5 13.9 16 14.5V16.6C19.5 15.8 22 14.1 22 12C22 9.2 17.5 7 12 7Z" fill="rgba(255, 255, 255, 0.9)" />
      </svg>
      <span>360°</span>
    `;

    indicator.style.cssText = `
      position: absolute;
      bottom: 8px;
      left: 8px;
      display: flex;
      align-items: center;
      gap: 4px;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      pointer-events: none;
      z-index: 3;
      backdrop-filter: blur(4px);
    `;

    this.container.appendChild(indicator);
    this.indicator = indicator;
  }

  addFullscreenButton() {
    const button = document.createElement('button');
    button.className = 'viewer-360-fullscreen-btn';
    button.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="white"/>
      </svg>
    `;
    button.title = "Maximize / Fullscreen";

    button.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border: none;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      z-index: 3;
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
      pointer-events: auto;
    `;

    button.addEventListener('mouseenter', () => {
      button.style.background = 'rgba(0, 0, 0, 0.8)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.background = 'rgba(0, 0, 0, 0.6)';
    });

    // Handle both click and touch events
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.openFullscreen();
    });

    button.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.openFullscreen();
    }, { passive: false });

    this.container.appendChild(button);
    this.fullscreenButton = button;
  }

  openFullscreen() {
    this.isFullscreen = true;

    // Create fullscreen overlay
    const overlay = document.createElement('div');
    overlay.className = 'viewer-360-fullscreen-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(19, 19, 19, 1.0);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.2s;
    `;

    // Add fullscreen title if data-title exists
    const titleText = this.container.dataset.title;
    if (titleText) {
      const titleEl = document.createElement('div');
      titleEl.className = 'viewer-360-fullscreen-title';
      titleEl.innerText = titleText;
      titleEl.style.cssText = `
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 20px;
        font-weight: bold;
        z-index: 10000;
        pointer-events: none;
      `;
      overlay.appendChild(titleEl);
    }

    // Create fullscreen viewer container
    const fsContainer = document.createElement('div');
    fsContainer.style.cssText = `
      position: relative;
      cursor: grab;
      overflow: hidden;
      user-select: none;
    `;

    // Calculate dimensions for fullscreen (maintain aspect ratio)
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const aspectRatio = this.frameWidth / this.frameHeight;

    let fsWidth, fsHeight;
    if (windowWidth / windowHeight > aspectRatio) {
      // Window is wider, fit to height
      fsHeight = Math.min(windowHeight * 0.9, this.frameHeight);
      fsWidth = fsHeight * aspectRatio;
    } else {
      // Window is taller, fit to width
      fsWidth = Math.min(windowWidth * 0.9, this.frameWidth);
      fsHeight = fsWidth / aspectRatio;
    }

    fsContainer.style.width = `${fsWidth}px`;
    fsContainer.style.height = `${fsHeight}px`;

    // Clone and setup image for fullscreen
    const fsImg = this.img.cloneNode(true);
    fsImg.style.display = 'block';
    fsImg.style.maxWidth = 'none';
    fsImg.style.position = 'relative';
    fsImg.draggable = false;

    if (this.layout === 'grid') {
      fsImg.style.width = `${this.img.naturalWidth * (fsHeight / this.frameHeight)}px`;
      fsImg.style.height = `${this.img.naturalHeight * (fsHeight / this.frameHeight)}px`;

      // Calculate current frame position
      const col = this.currentFrame % this.gridCols;
      const row = Math.floor(this.currentFrame / this.gridCols);
      fsImg.style.left = `${-col * fsWidth}px`;
      fsImg.style.top = `${-row * fsHeight}px`;
    } else {
      fsImg.style.height = `${fsHeight}px`;
      fsImg.style.width = 'auto';
      fsImg.style.left = `${-this.currentFrame * fsWidth}px`;
    }

    fsContainer.appendChild(fsImg);

    // Add 360 indicator to fullscreen
    const fsIndicator = this.indicator.cloneNode(true);
    fsContainer.appendChild(fsIndicator);

    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="white"/>
      </svg>
    `;
    closeBtn.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border: none;
      padding: 12px;
      border-radius: 4px;
      cursor: pointer;
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    `;

    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.background = 'rgba(0, 0, 0, 0.8)';
    });

    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.background = 'rgba(0, 0, 0, 0.6)';
    });

    overlay.appendChild(fsContainer);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    // Store fullscreen elements
    this.fsOverlay = overlay;
    this.fsContainer = fsContainer;
    this.fsImg = fsImg;
    this.fsWidth = fsWidth;
    this.fsHeight = fsHeight;

    // Setup fullscreen event listeners
    this.setupFullscreenListeners(fsContainer, fsImg, closeBtn, overlay);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  setupFullscreenListeners(fsContainer, fsImg, closeBtn, overlay) {
    let fsDragging = false;
    let fsStartX = 0;
    let fsStartFrame = this.currentFrame;
    let fsAccumulatedDelta = 0;

    const onFsStart = (e) => {
      fsDragging = true;
      fsStartX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      fsStartFrame = this.currentFrame;
      fsAccumulatedDelta = 0;
      fsContainer.style.cursor = 'grabbing';
      if (e.type.includes('touch')) e.preventDefault();
    };

    const onFsMove = (e) => {
      if (!fsDragging) return;

      const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      const deltaX = currentX - fsStartX;

      const baseSensitivity = parseFloat(this.container.dataset.sensitivity) || 10;
      const scaledSensitivity = baseSensitivity * (this.fsWidth / 400);

      fsAccumulatedDelta = deltaX;
      const frameDelta = Math.floor(fsAccumulatedDelta / scaledSensitivity);

      let newFrame = (fsStartFrame + frameDelta) % this.frameCount;
      if (newFrame < 0) newFrame += this.frameCount;

      if (newFrame !== this.currentFrame) {
        this.currentFrame = newFrame;

        if (this.layout === 'grid') {
          const col = newFrame % this.gridCols;
          const row = Math.floor(newFrame / this.gridCols);
          const offsetX = -col * this.fsWidth;
          const offsetY = -row * this.fsHeight;
          fsImg.style.left = `${offsetX}px`;
          fsImg.style.top = `${offsetY}px`;
        } else {
          const offset = -newFrame * this.fsWidth;
          fsImg.style.left = `${offset}px`;
        }

        // Update original viewer too (with syncing)
        this.updateFrame(newFrame);
      }

      if (e.type.includes('touch')) e.preventDefault();
    };

    const onFsEnd = () => {
      if (fsDragging) {
        fsDragging = false;
        fsAccumulatedDelta = 0;
        fsContainer.style.cursor = 'grab';
      }
    };

    const closeFullscreen = () => {
      this.isFullscreen = false;
      document.body.removeChild(overlay);
      document.body.style.overflow = '';

      // Remove event listeners
      fsContainer.removeEventListener('mousedown', onFsStart);
      document.removeEventListener('mousemove', onFsMove);
      document.removeEventListener('mouseup', onFsEnd);
      fsContainer.removeEventListener('touchstart', onFsStart);
      document.removeEventListener('touchmove', onFsMove);
      document.removeEventListener('touchend', onFsEnd);
    };

    // Add event listeners
    fsContainer.addEventListener('mousedown', onFsStart);
    document.addEventListener('mousemove', onFsMove);
    document.addEventListener('mouseup', onFsEnd);
    fsContainer.addEventListener('touchstart', onFsStart, { passive: false });
    document.addEventListener('touchmove', onFsMove, { passive: false });
    document.addEventListener('touchend', onFsEnd);

    // Close on button click, overlay click, or ESC key
    closeBtn.addEventListener('click', closeFullscreen);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeFullscreen();
    });
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        closeFullscreen();
        document.removeEventListener('keydown', escHandler);
      }
    });
  }

  addEventListeners() {
    // Mouse events
    this.container.addEventListener('mousedown', (e) => this.onDragStart(e));
    document.addEventListener('mousemove', (e) => this.onDragMove(e));
    document.addEventListener('mouseup', () => this.onDragEnd());

    // Touch events for mobile
    this.container.addEventListener('touchstart', (e) => this.onDragStart(e), { passive: false });
    document.addEventListener('touchmove', (e) => this.onDragMove(e), { passive: false });
    document.addEventListener('touchend', () => this.onDragEnd());

    // Prevent context menu
    this.container.addEventListener('contextmenu', (e) => e.preventDefault());

    // Handle window resize
    window.addEventListener('resize', () => this.handleResize());
  }

  handleResize() {
    if (!this.isInitialized) return;

    const containerWidth = this.container.parentElement.offsetWidth;
    const maxWidth = parseFloat(this.container.dataset.maxWidth) || containerWidth;
    const newScale = Math.min(1, maxWidth / this.frameWidth);

    if (Math.abs(newScale - this.scale) > 0.01) {
      this.scale = newScale;
      this.displayWidth = this.frameWidth * this.scale;
      this.displayHeight = this.frameHeight * this.scale;

      this.container.style.width = `${this.displayWidth}px`;
      this.container.style.height = `${this.displayHeight}px`;

      if (this.layout === 'grid') {
        this.img.style.width = `${this.img.naturalWidth * this.scale}px`;
        this.img.style.height = `${this.img.naturalHeight * this.scale}px`;
      } else {
        this.img.style.height = `${this.displayHeight}px`;
      }

      this.updateFrame(this.currentFrame, false); // Don't sync on resize
    }
  }

  onDragStart(e) {
    // Don't start dragging if clicking on the fullscreen button
    if (e.target.closest('.viewer-360-fullscreen-btn')) {
      return;
    }

    this.isDragging = true;
    this.startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    this.startFrame = this.currentFrame;
    this.accumulatedDelta = 0;
    this.container.style.cursor = 'grabbing';

    if (e.type.includes('touch')) {
      e.preventDefault();
    }
  }

  onDragMove(e) {
    if (!this.isDragging) return;

    const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const deltaX = currentX - this.startX;

    // Sensitivity: how many pixels of screen movement = one frame
    // Scale this based on display width to maintain consistent feel
    const baseSensitivity = parseFloat(this.container.dataset.sensitivity) || 10;
    const scaledSensitivity = baseSensitivity * (this.displayWidth / 400); // Normalize to 400px reference

    // Add current delta to accumulated sub-pixel movements
    this.accumulatedDelta = deltaX;

    // Calculate frame change only when we've accumulated enough movement
    const frameDelta = Math.floor(this.accumulatedDelta / scaledSensitivity);

    // Calculate new frame (wrap around)
    let newFrame = (this.startFrame + frameDelta) % this.frameCount;
    if (newFrame < 0) newFrame += this.frameCount;

    if (newFrame !== this.currentFrame) {
      this.updateFrame(newFrame);
    }

    if (e.type.includes('touch')) {
      e.preventDefault();
    }
  }

  onDragEnd() {
    if (this.isDragging) {
      this.isDragging = false;
      this.accumulatedDelta = 0;
      this.container.style.cursor = 'grab';
    }
  }

  updateFrame(frame, syncOthers = true) {
    this.currentFrame = frame;

    if (this.layout === 'grid') {
      // Calculate row and column for this frame
      const col = frame % this.gridCols;
      const row = Math.floor(frame / this.gridCols);

      // Calculate offset in scaled coordinates
      const offsetX = -col * this.displayWidth;
      const offsetY = -row * this.displayHeight;

      this.img.style.left = `${offsetX}px`;
      this.img.style.top = `${offsetY}px`;
    } else {
      // Horizontal layout
      const offset = -frame * this.displayWidth;
      this.img.style.left = `${offset}px`;
    }

    // Sync with other viewers in the same group
    if (syncOthers && this.syncGroup && syncGroups[this.syncGroup]) {
      syncGroups[this.syncGroup].forEach(viewer => {
        if (viewer !== this && viewer.isInitialized && viewer.currentFrame !== frame) {
          viewer.updateFrame(frame, false); // false to prevent infinite loop
        }
      });
    }
  }
}

// Auto-initialize all viewers when DOM is ready
function initViewers() {
  document.querySelectorAll('[data-360-viewer]').forEach(container => {
    new AssetViewer360(container);
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initViewers);
} else {
  initViewers();
}

// Also observe for dynamically added content (like tabs)
const contentObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1) { // Element node
        // Check if the node itself is a viewer
        if (node.hasAttribute && node.hasAttribute('data-360-viewer')) {
          new AssetViewer360(node);
        }
        // Check for viewers within the added node
        if (node.querySelectorAll) {
          node.querySelectorAll('[data-360-viewer]').forEach(container => {
            new AssetViewer360(container);
          });
        }
      }
    });
  });
});

// Start observing the document for changes
contentObserver.observe(document.body, {
  childList: true,
  subtree: true
});

// Export for manual initialization if needed
window.AssetViewer360 = AssetViewer360;