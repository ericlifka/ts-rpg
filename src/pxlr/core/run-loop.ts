let fpsCounterDOM = null;
function updateFPScounter(dtime) {
  if (!fpsCounterDOM) {
    fpsCounterDOM = document.createElement('div');
    fpsCounterDOM.classList.add('fps-counter');
    fpsCounterDOM.oldfps = 0;
    document.body.appendChild(fpsCounterDOM);
  }

  let fps = Math.floor(1000 / dtime * 10) / 10;
  fpsCounterDOM.oldfps = fps;
  let fpsStr = `${fps}`;
  if (fpsStr.length <= 2) {
    fpsStr = `${fpsStr}.0`;
  }
  fpsCounterDOM.innerHTML = fpsStr;
}

function now() {
  return (new Date()).valueOf();
}

class FpsTracker {
  frameTimes: number[] = [];
  totalTime: number = 20 * 100;

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.frameTimes.push(20);
    }
  }

  push(ftime: number): void {
    let overflow = this.frameTimes.shift();
    this.totalTime += ftime - overflow;
    this.frameTimes.push(ftime);
  }

  average(): number {
    return this.totalTime / 100;
  }
}

export default class RunLoop {
  fpsTracker: FpsTracker = new FpsTracker();
  active: boolean = false;
  lastFrameTime: number = now();
  boundFrameHandler: (time: number) => void;
  frameCount: number = 0;

  constructor(public callback: Function = (() => null)) {
    this.boundFrameHandler = this.frameHandler.bind(this);
  }

  frameHandler(time: number): void {
    if (!this.active) return;

    let currentTime = now();
    let dtime = currentTime - this.lastFrameTime;

    this.lastFrameTime = currentTime;
    this.updateFPScounter(dtime);

    try {
      this.callback(dtime);
    } catch (e) {
      console.error('Error running frame: ', e);
    }

    window.requestAnimationFrame(this.boundFrameHandler);
  }

  start() {
    if (!this.active) {
      this.active = true;
      window.requestAnimationFrame(this.boundFrameHandler);
    }
  }

  stop() {
    this.active = false;
  }

  setCallback(callback: (dtime: number) => void) {
    this.callback = callback;
  }

  updateFPScounter(dtime) {
    this.fpsTracker.push(dtime);

    if (this.frameCount++ > 60) {
      updateFPScounter(this.fpsTracker.average());
      this.frameCount = 0;
    }
  }
}
