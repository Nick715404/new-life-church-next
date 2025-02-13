// global.d.ts
interface Window {
	Robokassa: {
		StartPayment: (paymentData: any) => void;
	};
}
