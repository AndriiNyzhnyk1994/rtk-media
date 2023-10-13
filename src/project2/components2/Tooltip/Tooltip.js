import React, { useState } from 'react';
import s from './Tooltip.module.css'

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  return (
    <div className="relative" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isTooltipVisible && <div className={s.tooltip}>{text}</div>}
    </div>
  );
};

export default Tooltip;
