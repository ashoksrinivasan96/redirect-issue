import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Redirect Test</h1>
      <ul>
        <li><Link href="/ch/legacy/kola">Test /ch/legacy/kola</Link></li>
        <li><Link href="/ch/legacy/other">Test /ch/legacy/other</Link></li>
        <li><Link href="/us/legacy/kola">Test /us/legacy/kola</Link></li>
        <li><Link href="/us/legacy/other">Test /us/legacy/other</Link></li>
      </ul>
    </div>
  );
}