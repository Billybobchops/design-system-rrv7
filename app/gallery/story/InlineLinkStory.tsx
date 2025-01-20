import Paragraph from '@components/typography/Paragraph';
import InlineLink from '@components/InlineLink';

const InlineLinkStory = () => {
    return (
        <Paragraph>
            The quick brown fox jumps over the <InlineLink>inline link.</InlineLink>
        </Paragraph>
    );
};

export default InlineLinkStory;
