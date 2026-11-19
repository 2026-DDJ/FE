import { createGlobalStyle } from "styled-components";

/**
 * Mobile layout overrides. Desktop rules remain owned by the original
 * styled-components modules; these rules only apply at narrower viewports.
 */
const MobileResponsiveStyle = createGlobalStyle`
  @media (max-width: 1200px) {
    /* Data page: replace absolute desktop columns with a stacked flow. */
    [data-mobile-page="data"] {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    html, body, #root { width: 100%; min-width: 0; }
    body { overflow-x: hidden; }
    img, canvas, svg { max-width: 100%; }
    button, input, select { max-width: 100%; }

    /* Shared header */
    header:has(> nav) {
      left: 5%;
      right: 5%;
      top: 20px;
      gap: 12px;
      min-height: 44px;
    }
    header:has(> nav) > img { width: clamp(108px, 28vw, 158px); }
    header:has(> nav) > nav { gap: clamp(8px, 3vw, 18px); }
    header:has(> nav) > nav button { font-size: clamp(12px, 3.3vw, 15px); }

    /* Prevent fixed desktop form fields from overflowing mobile widths. */
    form, form > div, form input, form select { min-width: 0; }
  }
`;
export default MobileResponsiveStyle;
