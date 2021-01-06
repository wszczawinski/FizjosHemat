import React from 'react';
import styles from './contact.module.scss';
import { Layout } from '../components';

const ContactPage = () => {
    return (
        <Layout>
            <main className={styles.container}>
                <h2 className={styles.contactTitle}>Nasze lokalizacje</h2>
                <p>W celu umówienia się na konsultacje wystarczy skontaktować się z nami telefonicznie bądź mailowo.</p>
                <div className={styles.map}>
                    <iframe
                        title="Lokalizacje"
                        src="https://www.google.com/maps/d/embed?mid=1g_Rsutsuv-00PTb3LUJEjuDCw8mE2Q75"
                        width="100%"
                        height="100%"
                    ></iframe>
                </div>
            </main>
        </Layout>
    );
};

export default ContactPage;
