import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from './styles.module.scss';
import Link from 'next/link';
import { TYouthPaymentForm } from '@/types/forms';

type UploadFileInputProps = {
	register: UseFormRegister<TYouthPaymentForm>;
	errors: FieldErrors<Partial<TYouthPaymentForm>>;
};

export const UploadFileInput = ({ errors, register }: UploadFileInputProps) => {
	return (
		<div className={styles.box}>
			<p className={styles.finalText}>
				Для завершения регистрации внесите пожертвование, после успешной
				операции сделайте скрин квитанцию и прикрепите файл
			</p>

			<div className={styles.donationBox}>
				<span>Нажмите на </span>
				<Link className={styles.donationLink} href='#' target='_blank'>
					ДОБРОВОЛЬНОЕ ПОЖЕРТВОВАНИЕ
				</Link>
			</div>

			<label htmlFor='fileUpload' className={styles.label}>
				<span className={styles.labelText}>
					Прикрепите чек об успешной оплате
				</span>
				<input
					{...register('file', {
						required: 'Прикрипите фото с чеком оплаты',
						validate: {
							checkFileSize: (fileList: FileList) =>
								fileList[0]?.size < 5000000 ||
								'Размер файла должен быть меньше 5MB',
						},
					})}
					className={styles.input}
					id='fileUpload'
					type='file'
					accept='image/*'
				/>
			</label>
			{errors.file?.message && (
				<span className={styles.error}>{errors.file?.message}</span>
			)}
		</div>
	);
};
