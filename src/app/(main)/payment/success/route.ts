import {
  deleteBusinessPerson,
  deleteChelFirePerson,
  deleteFaithConfsPerson,
  deleteLeaderSummitPerson,
  deleteRidsConfPerson,
  deleteWorshipNightPerson,
  deleteYouthMgnPerson,
  deleteYouthuralPerson,
  findUniquePersonOfBusiness,
  findUniquePersonOfChelFire,
  findUniquePersonOfFaithConf,
  findUniquePersonOfLeaderSummit,
  findUniquePersonOfRidsConf,
  findUniquePersonOfWorshipNight,
  findUniquePersonOfYouthMgn,
  findUniquePersonOfYouthUral,
  updateBusinessPersonStatus,
  updateChelFirePersonStatus,
  updateFaithConfPersonStatus,
  updateLeaderSummitPersonStatus,
  updateRidsPersonStatus,
  updateWorshipNightPersonStatus,
  updateYouthMgnPersonStatus,
  updateYouthuralPersonStatus,
} from '@/api/register';
import {
  sendPaymentSuccessYouthuralEmail,
  sendPaymentSuccessBusinessEmail,
  sendPaymentErrorBusinessEmail,
  sendPaymentErrorYouthuralEmail,
  sendPaymentSuccessFaithConfEmail,
  sendPaymentErrorFaithConfEmail,
  sendPaymentSuccessChelFire,
  sendPaymentErrorChelFireEmail,
} from '@/utils/emails';
import {
  sendPaymentErrorLeaderSummitEmail,
  sendPaymentSuccessLeaderSummitEmail,
} from '@/utils/emails/leader-summit';
import {
  sendPaymentErrorRidsEmail,
  sendPaymentSuccessRidsEmail,
} from '@/utils/emails/rids';
import {
  sendPaymentErrorYouthMgnEmail,
  sendPaymentSuccessYouthMgnEmail,
} from '@/utils/emails/youth-mgn';
import {
  sendPaymentErrorWorshipNightEmail,
  sendPaymentSuccessWorshipNightEmail,
} from '@/utils/emails/worship-night';
import crypto from 'crypto';

export async function POST(req: Request) {
  const formData = await req.formData();

  const outSum = formData.get('OutSum')?.toString();
  const invId = formData.get('InvId')?.toString();
  const signatureValue = formData
    .get('SignatureValue')
    ?.toString()
    .toLowerCase();

  const merchantPass2 = `${process.env.MRC_PASS_2}`;

  const correctSignature = crypto
    .createHash('md5')
    .update(`${outSum}:${invId}:${merchantPass2}`)
    .digest('hex')
    .toLowerCase();

  const findPersonFunctions = [
    { findPerson: findUniquePersonOfBusiness, tableName: 'business' },
    { findPerson: findUniquePersonOfYouthUral, tableName: 'youthural' },
    { findPerson: findUniquePersonOfFaithConf, tableName: 'faithconf' },
    { findPerson: findUniquePersonOfChelFire, tableName: 'chelfire' },
    { findPerson: findUniquePersonOfYouthMgn, tableName: 'youthuralmgn' },
    { findPerson: findUniquePersonOfLeaderSummit, tableName: 'leadersummit' },
    { findPerson: findUniquePersonOfRidsConf, tableName: 'conf-rids' },
    { findPerson: findUniquePersonOfWorshipNight, tableName: 'worship-night' },
  ];

  let currentPerson = null;
  let currentTableName = '';

  for (let { findPerson, tableName } of findPersonFunctions) {
    currentPerson = await findPerson(`${invId}`);
    if (currentPerson && currentPerson.data.length > 0) {
      currentTableName = tableName;
      break;
    }
  }

  if (!currentPerson || !invId) {
    console.log('Пользователь не найден');
    return;
  }

  console.log('Зарегистрирован пользователь - ', {
    ...currentPerson?.data[0].attributes,
  });
  console.log(
    `Пользователь зарегистрирован на мероприятие - ${currentTableName}`,
  );
  console.log('Дополнительные данные заказа - ', {
    price: outSum,
  });

  if (correctSignature === signatureValue && currentPerson) {
    console.log(`Платеж прошел успешно! ID заказа: ${invId}, сумма: ${outSum}`);

    if (currentTableName === 'business') {
      await updateBusinessPersonStatus(currentPerson?.data[0].id, 'payed');
      await sendPaymentSuccessBusinessEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'youthural') {
      await updateYouthuralPersonStatus(currentPerson?.data[0].id, 'payed');
      await sendPaymentSuccessYouthuralEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'faithconf') {
      await updateFaithConfPersonStatus(currentPerson?.data[0].id, 'payed');
      await sendPaymentSuccessFaithConfEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'chelfire') {
      await updateChelFirePersonStatus(currentPerson?.data[0].id, 'payed');
      await sendPaymentSuccessChelFire(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'youthuralmgn') {
      await updateYouthMgnPersonStatus(currentPerson?.data[0].id, 'payed');
      await sendPaymentSuccessYouthMgnEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'leadersummit') {
      await updateLeaderSummitPersonStatus(currentPerson?.data[0].id, 'payed');
      await sendPaymentSuccessLeaderSummitEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'conf-rids') {
      await updateRidsPersonStatus(currentPerson?.data[0].id, 'payed');
      await sendPaymentSuccessRidsEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'worship-night') {
      await updateWorshipNightPersonStatus(currentPerson?.data[0].id, 'payed');
      await sendPaymentSuccessWorshipNightEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    }

    return new Response(`OK${invId}`, { status: 200 });
  } else {
    console.log(`Ошибка: неверная подпись для заказа с ID: ${invId}`);

    if (currentTableName === 'business') {
      await deleteBusinessPerson(currentPerson?.data[0].id);
      await sendPaymentErrorBusinessEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'youthural') {
      await deleteYouthuralPerson(currentPerson?.data[0].id);
      await sendPaymentErrorYouthuralEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'faithconf') {
      await deleteFaithConfsPerson(currentPerson?.data[0].id);
      await sendPaymentErrorFaithConfEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'chelfire') {
      await deleteChelFirePerson(currentPerson?.data[0].id);
      await sendPaymentErrorChelFireEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'youthuralmgn') {
      await deleteYouthMgnPerson(currentPerson?.data[0].id);
      await sendPaymentErrorYouthMgnEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'leadersummit') {
      await deleteLeaderSummitPerson(currentPerson?.data[0].id);
      await sendPaymentErrorLeaderSummitEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'conf-rids') {
      await deleteRidsConfPerson(currentPerson?.data[0].id);
      await sendPaymentErrorRidsEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    } else if (currentTableName === 'worship-night') {
      await deleteWorshipNightPerson(currentPerson?.data[0].id);
      await sendPaymentErrorWorshipNightEmail(
        currentPerson?.data[0].attributes.email,
        currentPerson?.data[0].attributes.first_name,
      );
    }

    return new Response('Invalid signature', { status: 400 });
  }
}
