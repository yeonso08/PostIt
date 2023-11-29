import tw from 'twin.macro';

const StyledAddButton = tw.button`
  flex justify-center items-center
  bg-white border-2 border-gray-100
  w-20 h-20
  rounded-full
  text-gray-50 text-2xl
  transition-transform duration-300 ease-in-out
  cursor-pointer
`;

const AddButton = () => {
  return (
    <StyledAddButton
      style={{ transform: 'rotate(0deg)' }}
      onMouseEnter={e => e.currentTarget.style.transform = 'rotate(90deg)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0deg)'}
    >
      +
    </StyledAddButton>
  );
};

export default AddButton;