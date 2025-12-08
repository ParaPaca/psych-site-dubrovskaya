const MoonIcon = ({
  size = 48,
  color = '#000000',
  rotation = 0,
  flipHorizontal = false,
  flipVertical = false,
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push('scaleX(-1)');
  if (flipVertical) transforms.push('scaleY(-1)');

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      aria-hidden='true'
      viewBox='0 0 24 24'>
      <g id='evaMoonFill0'>
        <g id='evaMoonFill1'>
          <path
            id='evaMoonFill2'
            fill={color}
            d='M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15a10.46 10.46 0 0 1-.26-14a10.13 10.13 0 0 1 4-2.74a1 1 0 0 1 1.06.22a1 1 0 0 1 .24 1a8.4 8.4 0 0 0 1.94 8.81a8.47 8.47 0 0 0 8.83 1.94a1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3Z'
          />
        </g>
      </g>
    </svg>
  );
};

export default MoonIcon;
