import { PostItBoxProps } from '@/types/postIt';
import tw from 'twin.macro';

const Postit = tw.div`
  w-72 h-72 bg-yellow-300 
  shadow-lg p-5 box-border rounded-lg 
  text-center font-sans text-lg leading-relaxed
`;

const PostitTitle = tw.h1`
  mt-0 text-gray-800 text-xl
`;

const PostitParagraph = tw.p`
  mb-4
`;

const PostItBox = ({content, name} : PostItBoxProps) => {
    return (
          <Postit>
            <PostitTitle>Happy Birthday!</PostitTitle>
            <PostitParagraph>{content}</PostitParagraph>
            <PostitParagraph>{name}</PostitParagraph>
          </Postit>
      );};

export default PostItBox;