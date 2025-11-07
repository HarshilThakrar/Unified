import Container from './UI/Container.jsx';
import SectionTitle from './UI/SectionTitle.jsx';

/**
 * Clients logo slider component with continuous infinite scrolling
 */
const ClientsSlider = () => {
  // Client logos from public/clients folder
  const clients = [
    { id: 1, name: 'Avinash', logo: '/clients/avinash-logo.jpg' },
    { id: 2, name: 'DCNPL', logo: '/clients/dcnpl-logo.jpg' },
    { id: 3, name: 'Nakoda Chemicals', logo: '/clients/nakoda-chemicals-logo.jpg' },
    { id: 4, name: 'Pryto', logo: '/clients/pryto-logo.jpg' },
    { id: 5, name: 'Radha Spaces', logo: '/clients/radha-spaces-logo.jpg' },
    { id: 6, name: 'Rajhans Construction', logo: '/clients/rajhans-construction-logo.jpg' },
    { id: 7, name: 'Shivaay', logo: '/clients/shivaay-logo.jpg' },
    { id: 8, name: 'Vision Creative Group', logo: '/clients/vision-creative-group-logo.jpg' },
  ];

  // Duplicate clients multiple times for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle title="Our Clients" subtitle="Trusted Partners" />

        <div className="relative overflow-hidden mt-12">
          <div className="clients-slider-wrapper">
            <div className="clients-slider-track">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="clients-slider-item"
                >
                  <div className="bg-accent-light rounded-lg p-6 h-32 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-28 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {client.name}
                        </div>
                        <div className="text-xs text-text-light">Logo</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientsSlider;