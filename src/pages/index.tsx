import AddButton from '@/components/Button/AddButton';
import tw from 'twin.macro';

const TestText = tw.div`
    ml-4
`

const Home = () => {
    return (
        <>
            <TestText> test</TestText>
            <AddButton />
        </>
    );
};

export default Home;