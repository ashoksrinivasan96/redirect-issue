export default function KolaPage({ params }) {
    return (
      <div>
        <h1>Kola Flavor Page for {params.country}</h1>
        <p>This page should be shown after redirection for the kola-specific rule.</p>
      </div>
    );
  }