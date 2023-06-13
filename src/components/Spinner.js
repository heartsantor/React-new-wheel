function Spinner(props) {
  const style = {
    transform: `translateY(-50%) rotate(${props.angle}deg)`,
    transformOrigin: "bottom",
    transition: `all ${props.duration}s`
  };

  return (
    <>
      <img src="/needle-dark.svg" style={style} alt="Needle" />
      <img
        src="/wheel-center-light.webp"
        width={80}
        height={80}
        className="absolute w-[80px] h-[80px] z-[2]"
        alt="Needle"
      />
    </>
  );
}

export default Spinner;
