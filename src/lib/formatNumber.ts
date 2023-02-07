export default function formatNumber(num: number) {
  return num > 999
    ? (num / 1000).toFixed(1).replace(/\.0$/, "") + "k"
    : String(num);
}
