'use client';

import { halvar } from '@/constants/fonts';
import { TRegisterPerson } from '@/types/events';
import styles from './DonationBanner.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRegisterPersons, getEventType } from '@/store/eventSlice';
import { Popup } from '../Popup/ui';
import { PopupTrigger } from '../Popup/ui/PopupTrigger';
import { PopupContent } from '../Popup/ui/PopupContent';
import { FormSwitcher } from '../Forms/ui/FormSwitcher';
import { usePathname } from 'next/navigation';
import { AdditionalRegister } from '../Forms';

type TDonationBannerProps = {
  register_persons: TRegisterPerson[];
  event_type: string;
};

export function DonationBanner(props: TDonationBannerProps) {
  const { register_persons, event_type } = props;
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    dispatch(getRegisterPersons(register_persons));
    dispatch(getEventType(event_type));
  }, [dispatch, register_persons, event_type]);

  if (pathname === '/events/ural-faith-conf') {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2 className={`${styles.title} ${halvar.className}`}>
              Рекомендуемое
              <br /> пожертвование
            </h2>
            <div className={styles.additionalRegister}>
              <AdditionalRegister />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`${styles.title} ${halvar.className}`}>
            Рекомендуемое
            <br /> пожертвование
          </h2>
          <div className={styles.btnBox}>
            <Popup>
              <PopupTrigger className={styles.btn}>
                Зарегистрироваться
              </PopupTrigger>
              <PopupContent>
                <FormSwitcher />
              </PopupContent>
            </Popup>
          </div>
        </div>
      </div>
    </section>
  );
}
