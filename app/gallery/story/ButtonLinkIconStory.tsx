import LinkIconButton from '@components/button/LinkIconButton';
import { Chevron, NewWindow, Plus, Remove } from '@components/Icon';

const ButtonLinkIconStory = () => {
    return (
        <>
            <LinkIconButton
                disabled={false}
				icon={<Chevron />}
                text='Recent Open Invoices'
                variant='blue'
            />
            <LinkIconButton
                disabled={true}
				icon={<Chevron />}
                text='Recent Open Invoices'
                variant='blue'
            />
            <LinkIconButton
                disabled={false}
				icon={<NewWindow />}
				iconPosition='start'
                text='View Invoice'
                variant='blue'
            />
            <LinkIconButton
                disabled={true}
				icon={<NewWindow />}
				iconPosition='start'
                text='View Invoice'
                variant='blue'
            />
            <LinkIconButton
                disabled={false}
				icon={<Remove />}
				iconPosition='start'
                text='Delete Email Address'
                variant='red'
            />
            <LinkIconButton
                disabled={true}
				icon={<Remove />}
				iconPosition='start'
                text='Delete Email Address'
                variant='red'
            />
            <LinkIconButton
                disabled={false}
				icon={<Plus />}
				iconPosition='start'
                text='Add Account'
                variant='green'
            />
            <LinkIconButton
                disabled={true}
				icon={<Plus />}
				iconPosition='start'
                text='Add Account'
                variant='green'
            />
        </>
    );
};

export default ButtonLinkIconStory;
