import tw from 'twin.macro';

const PostitContainer = tw.div`
  flex justify-center items-center 
  h-screen bg-gray-100
`;

export function Layout(props: { children: React.ReactNode }) {
  return (
      <PostitContainer>{props.children}</PostitContainer>
  );
}