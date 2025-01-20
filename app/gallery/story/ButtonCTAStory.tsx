import CTAButton from '@components/button/CTAButton';
import { Chevron } from '@components/Icon';

const ButtonCTAStory = () => {
    return (
        <>
            <CTAButton disabled={false} icon={<Chevron />} text='Pay Now' />
            <CTAButton disabled={false} icon={<Chevron />} text='Pay Now' variant='green' />
            <CTAButton disabled={true} icon={<Chevron />} text='Pay Now' />
        </>
    );
};

export default ButtonCTAStory;
