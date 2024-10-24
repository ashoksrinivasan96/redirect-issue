export default function CountryPage(params) {
    return (
      <div>
        <h1>Country Page: {params.country}</h1>
        <p>This page should be shown after redirection.</p>
      </div>
    );
  }