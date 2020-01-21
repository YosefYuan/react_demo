import {
  useState,
  useEffect,
  useRef,
  useCallback
} from "react";

import {
  Draggable
} from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(Draggable);

export default function useDrag() {
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);
  const dragEl = useRef(null);

  const onDrag = e => {
    const {
      x,
      y
    } = e.target.getBoundingClientRect();
    setPosX(x);
    setPosY(y);
  };

  const callbackOnDrag = useCallback(onDrag, []);

  useEffect(() => {
    if (dragEl && dragEl.current) {
      new Draggable(dragEl.current, {
        onDrag: callbackOnDrag
      });
    }
  }, [callbackOnDrag, dragEl]);

  return {
    x: posX ? Math.floor(posX) : undefined,
    y: posX ? Math.floor(posY) : undefined,
    dragRef: dragEl
  };
}