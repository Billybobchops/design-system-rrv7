import GalleryDisplayArea from './GalleryDisplayArea';
import TypographyStory from './story/TypographyStory';
import ButtonPrimaryStory from './story/ButtonPrimaryStory';
import ButtonSecondaryStory from './story/ButtonSecondaryStory';
import ButtonLinkIconStory from './story/ButtonLinkIconStory';
import ButtonIconStory from './story/ButtonIconStory';
import ButtonSimpleStory from './story/ButtonSimpleStory';
import ButtonCTAStory from './story/ButtonCTAStory';
import InlineLinkStory from './story/InlineLinkStory';
import AccordionStory from './story/AccordionStory';
import TabsStory from './story/TabStory';
import DialogStory from './story/DialogStory';
import BadgeStory from './story/BadgeStory';
import AlertStory from './story/AlertStory';
import InputStory from './story/InputStory';
import DateProvider from '~/components/form/DateProvider';
import DividerStory from './story/DividerStory';
import FeatureStatusStory from './story/FeatureStatusStory';
import ProgressIndicatorStory from './story/ProgressIndicatorStory';
import FooterStory from './story/FooterStory';
// import logoDark from './logo-dark.svg';
// import logoLight from './logo-light.svg';

export function Gallery() {
    return (
        <main>
            <DateProvider>
                <GalleryDisplayArea title='Typography (Fluid)'>
                    <TypographyStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Inline Link'>
                    <InlineLinkStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Primary Button'>
                    <ButtonPrimaryStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Secondary Button'>
                    <ButtonSecondaryStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Link Icon Button'>
                    <ButtonLinkIconStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Icon Button'>
                    {/* MERGE with Link Icon Buttons for developer simplicity? */}
                    <ButtonIconStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Simple Button'>
                    <ButtonSimpleStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='CTA Button'>
                    <ButtonCTAStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Accordion'>
                    <AccordionStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Tabs'>
                    <TabsStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Dialog'>
                    <DialogStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Badge'>
                    <BadgeStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Alert'>
                    <AlertStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Inputs'>
                    <InputStory />
                </GalleryDisplayArea>

                <GalleryDisplayArea title='Divider'>
					<DividerStory />
				</GalleryDisplayArea>

				{/* This should go in the Payer Portal App NOT here */}
                <GalleryDisplayArea title='Feature Status'>
					<FeatureStatusStory />
				</GalleryDisplayArea>

                <GalleryDisplayArea title='Progress Indicator'>
					<ProgressIndicatorStory />
				</GalleryDisplayArea>

				{/* This should go in the Payer Portal App NOT here */}
                <GalleryDisplayArea title='Footer'>
					<FooterStory />
				</GalleryDisplayArea>
            </DateProvider>
        </main>
    );
}

{
    /* <img
	src={logoDark}
	alt='React Router'
	className='hidden w-full dark:block'
/> */
}
