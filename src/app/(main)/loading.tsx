import { halvar } from "@/constants/fonts";
import { CSSProperties } from "react";

const layoutStyles: CSSProperties = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '999999',
  overflow: 'hidden',
}

const titleStyles: CSSProperties = {
  fontSize: 'clamp(20px, 2.2vw, 60px)',
  textTransform: 'uppercase',
}

const Loading = () => {
  return (
    <main style={layoutStyles}>
      <span className={halvar.className} style={titleStyles}>
        Загрузка...
      </span>
    </main>
  );
};

export default Loading;