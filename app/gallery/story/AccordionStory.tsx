import Accordion from '@components/Accordion';
import Paragraph from '@components/typography/Paragraph';
import ButtonSecondary from '@components/button/PrimaryButton';

const AccordionStory = () => {
    return (
        <>
            <Accordion title='Accordion Heading'>
                <Paragraph>Dummy content, yay!</Paragraph>
				<ButtonSecondary 
					disabled={false}
					text='View Invoice'
				/>
            </Accordion>
            <Accordion title='Accordion Heading'>
                <Paragraph>Dummy content, yay!</Paragraph>
            </Accordion>
        </>
    );
};

export default AccordionStory;
