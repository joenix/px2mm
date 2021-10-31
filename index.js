// Use DPI
import dpi from "dpi.js";

// Functional
function px2mm(value = 0, DPI = dpi().x, ratio = 25.4) {
  return (value / DPI) * ratio;
}

// Export
export default px2mm;
