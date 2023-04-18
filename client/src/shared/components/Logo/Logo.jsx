import { Link } from "react-router-dom";

const Logo = ({ className, href = "", width, height, src, alt }) => {
  return (
    <div className={className}>
      <Link to={href}>
        <img src={src} alt={alt} width={width} height={height} />
      </Link>
    </div>
  );
};

export default Logo;
