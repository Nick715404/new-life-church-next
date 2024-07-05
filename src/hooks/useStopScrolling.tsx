export function useStopScrolling() {
  const set = () => document.body.classList.add('hidden');
  const remove = () => document.body.classList.remove('hidden');
  return { set, remove, };
};