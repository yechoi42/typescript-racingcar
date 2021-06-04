export function makeCarPlayerTemplate(name: string): string {
    return `<div class="mr-2">
    <div class="car-player">${name}</div>
    <div class="d-flex justify-center mt-3">
      <div class="relative spinner-container">
        <span class="material spinner"></span>
      </div>
    </div>
  </div>`;
}