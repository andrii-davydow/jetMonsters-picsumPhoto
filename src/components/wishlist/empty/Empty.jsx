import LinkBack from '../../photos/linkBack/LinkBack';
import './empty.scss';

const Empty = () => {
	return (
		<>
			<LinkBack textLink={'Перейти до усіх фото'} />
			<div className="empty-item">Нажаль ви не зберегли жодної фото</div>
		</>
	);
};

export default Empty;
