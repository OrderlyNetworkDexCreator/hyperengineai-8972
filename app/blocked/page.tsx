export const metadata = { robots: { index: false, follow: false }, title: "Not available in your region" };

export default function Blocked() {
  return (
    <main style={{maxWidth: 720, margin: "72px auto", padding: "0 24px", lineHeight: 1.6}}>
      <h1>Access restricted</h1>
      <p>Manyu Perps is not available in your region at this time. If you are in the United States or Canada, you cannot use perpetual trading features from here.</p>
      <p>For more information, review Orderly terms regarding regional access for perpetuals.</p>
    </main>
  );
}
