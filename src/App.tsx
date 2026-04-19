import { useState, useEffect } from 'react';
import { 
  Building2, 
  Users2, 
  Handshake, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Menu, 
  X,
  Globe2,
  CarFront,
  Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Κτηματολόγιο', href: '#ktimatologio' },
    { name: 'Οικογενειακό', href: '#family' },
    { name: 'Διαμεσολάβηση', href: '#mediation' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-legal-gold/20 selection:text-legal-navy">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-legal-navy">
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight uppercase leading-none">Ευαγγελία Γρηγοράκη</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans opacity-70 mt-1">Δικηγορικό Γραφείο</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link font-medium">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-legal-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-b border-legal-navy/5 flex flex-col p-6 lg:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="py-4 text-legal-navy uppercase tracking-widest text-sm border-b border-legal-navy/5 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center overflow-hidden bg-legal-navy">
          {/* Enhanced Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/legal-hero/1920/1080?grayscale" 
              alt="Professional Legal Environment" 
              className="w-full h-full object-cover opacity-30 scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-b from-legal-navy/80 via-legal-navy/95 to-legal-navy"></div>
          </div>
          
          {/* Subtle Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(circle, #947133 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <span className="text-legal-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6 block">Πολυετής Εμπειρία & Εξειδίκευση</span>
              <h1 className="text-white text-5xl md:text-7xl font-serif mb-8 leading-tight italic">
                Εξειδικευμένη νομική <br />
                <span className="text-legal-gold not-italic">καθοδήγηση.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-lg">
                Με συνέπεια και επαγγελματισμό, παρέχουμε ολοκληρωμένες νομικές υπηρεσίες, εστιάζοντας στην αποτελεσματική επίλυση των υποθέσεών σας.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#ktimatologio" className="bg-legal-gold text-white px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-white hover:text-legal-navy transition-all duration-500 text-center shadow-lg shadow-legal-gold/10">
                  Κτηματολόγιο & Ακίνητα
                </a>
                <a href="#contact" className="border border-white/30 text-white px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-white/10 transition-all duration-500 text-center">
                  Επικοινωνία
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Overview Cards */}
        <section id="services" className="bg-legal-cream section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-legal-gold uppercase tracking-widest text-xs font-bold block mb-4">Τι προσφέρουμε</span>
              <h2 className="text-4xl md:text-5xl mb-6">Τομείς Εξειδίκευσης</h2>
              <div className="w-20 h-0.5 bg-legal-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Building2 className="text-legal-gold" size={32} />, 
                  title: 'Κτηματολόγιο', 
                  desc: 'Διόρθωση αρχικών εγγραφών και δηλώσεις σε όλη την Κρήτη.' 
                },
                { 
                  icon: <Users2 className="text-legal-gold" size={32} />, 
                  title: 'Οικογενειακό Δίκαιο', 
                  desc: 'Διαζύγια, επιμέλεια τέκνων και διατροφές με ευαισθησία.' 
                },
                { 
                  icon: <Handshake className="text-legal-gold" size={32} />, 
                  title: 'Διαμεσολάβηση', 
                  desc: 'Εναλλακτική επίλυση διαφορών για ταχύτερα αποτελέσματα.' 
                },
                { 
                  icon: <Globe2 className="text-legal-gold" size={32} />, 
                  title: 'Ιδιωτικό Διεθνές Δίκαιο', 
                  desc: 'Υποθέσεις με διεθνή στοιχεία και διασυνοριακές διαφορές.' 
                },
                { 
                  icon: <CarFront className="text-legal-gold" size={32} />, 
                  title: 'Τροχαία Ατυχήματα', 
                  desc: 'Διεκδίκηση αποζημιώσεων από οδικά συμβάντα.' 
                },
                { 
                  icon: <Scale className="text-legal-gold" size={32} />, 
                  title: 'Αστικό & Ποινικό Δίκαιο', 
                  desc: 'Ολοκληρωμένη εκπροσώπηση σε ένα ευρύ φάσμα υποθέσεων.' 
                }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 border border-legal-navy/5 shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                  <h3 className="text-2xl mb-4 font-serif">{service.title}</h3>
                  <p className="text-legal-slate/70 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive: Κτηματολόγιο */}
        <section id="ktimatologio" className="section-padding bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square md:aspect-video lg:aspect-auto lg:h-[600px] bg-legal-cream border border-legal-navy/5 flex items-center justify-center overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/ktimatologio/1000/1200?grayscale" 
                alt="Land and Property Architecture" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[2px] group-hover:blur-0"
                referrerPolicy="no-referrer"
              />
              <Building2 size={120} className="relative z-10 text-legal-gold/40 group-hover:text-legal-gold/60 transition-colors duration-700" />
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-legal-gold/20 -z-0 bg-legal-cream"></div>
            </div>
            <div>
              <span className="text-legal-gold uppercase tracking-widest text-xs font-bold block mb-4">Εξειδίκευση</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight italic">Κτηματολόγιο & <br /><span className="not-italic">Ακίνητα</span></h2>
              <div className="legal-accent-line"></div>
              <p className="text-lg leading-relaxed text-legal-slate mb-8">
                Η μακρόχρονη ενασχόλησή μας με το Κτηματολόγιο εξασφαλίζει την ορθή και ασφαλή κατοχύρωση της περιουσίας σας.
              </p>
              <ul className="space-y-6">
                {[
                  'Διόρθωση πρόδηλων σφαλμάτων αρχικών εγγραφών.',
                  'Αγωγές διόρθωσης κτηματολογικών εγγραφών.',
                  'Δηλώσεις ιδιοκτησίας και ενστάσεις.',
                  'Έλεγχος τίτλων ιδιοκτησίας και μεταβιβάσεις.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <ChevronRight className="text-legal-gold mt-1 shrink-0" size={20} />
                    <span className="text-legal-navy font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Deep Dive: Οικογενειακό Δίκαιο */}
        <section id="family" className="section-padding bg-legal-navy text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://picsum.photos/seed/legal-library/1920/1080?grayscale&blur=5" 
              alt="Legal Library Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center lg:text-left lg:flex-row gap-20 relative z-10">
            <div className="lg:w-1/2">
              <span className="text-legal-gold uppercase tracking-widest text-xs font-bold block mb-4">Ανθρωποκεντρική Προσέγγιση</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight italic text-white font-serif">Οικογενειακό <br /><span className="not-italic text-legal-gold">Δίκαιο</span></h2>
              <div className="legal-accent-line mx-auto lg:mx-0"></div>
              <p className="text-lg leading-relaxed text-white/70 mb-8 font-light">
                Προσφέρουμε εξειδικευμένες νομικές υπηρεσίες με απόλυτη εχεμύθεια, ευαισθησία και επαγγελματισμό, προστατεύοντας τα δικαιώματα όλων των μελών της οικογένειας.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {[
                  'Συναινετικά & Κατ’ αντιδικία Διαζύγια',
                  'Επιμέλεια & Επικοινωνία Τέκνων',
                  'Διατροφή Συζύγων & Τέκνων',
                  'Περιουσιακές Διαφορές Συζύγων',
                  'Υιοθεσίες & Αναγνώριση Τέκνων'
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-4 border border-white/10 text-sm italic font-serif backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="w-full aspect-square max-w-md bg-white/5 border border-white/10 flex items-center justify-center relative rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden">
                 <img 
                  src="https://picsum.photos/seed/scale-justice/800/800?grayscale" 
                  alt="Scale of Justice" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                  referrerPolicy="no-referrer"
                 />
                 <Users2 size={100} className="relative z-10 text-legal-gold/30" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-legal-gold/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive: Διαμεσολάβηση */}
        <section id="mediation" className="section-padding bg-legal-cream relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
            <img 
              src="https://picsum.photos/seed/mediation/800/1200?grayscale" 
              alt="Mediation Environment" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-legal-gold uppercase tracking-widest text-xs font-bold block mb-4">Εναλλακτική Επίλυση Διαφορών</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-serif italic">Διαμεσολάβηση</h2>
            <div className="w-20 h-0.5 bg-legal-gold mx-auto mb-10"></div>
            <p className="text-xl leading-relaxed text-legal-navy/80 mb-12 italic font-serif">
              "Η Διαμεσολάβηση προσφέρει μια ταχύτερη, λιγότερο δαπανηρή και αποτελεσματική διέξοδο στην επίλυση των διαφορών σας χωρίς τη χρονοβόρα δικαστική οδό."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: 'Ταχύτητα', desc: 'Επίλυση διαφορών σε πολύ μικρότερο χρονικό διάστημα από τα δικαστήρια.' },
                { title: 'Εχεμύθεια', desc: 'Η διαδικασία είναι απόρρητη και προστατεύει την ιδιωτικότητα των μελών.' },
                { title: 'Έλεγχος', desc: 'Τα μέρη αποφασίζουν τα ίδια για το μέλλον της διαφοράς τους.' }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white border border-legal-navy/5 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-legal-gold font-bold uppercase tracking-widest text-xs mb-3">{benefit.title}</h4>
                  <p className="text-legal-slate text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Scope Section */}
        <section className="bg-white py-20 px-6 border-y border-legal-navy/5">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-serif mb-10 italic">Παροχή Υπηρεσιών στο Νομό Ηρακλείου</h3>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale">
              <span className="text-3xl font-serif tracking-widest uppercase">Ηράκλειο</span>
              <span className="text-3xl font-serif tracking-widest uppercase items-center flex gap-4"><div className="w-1.5 h-1.5 bg-legal-gold rounded-full"></div> Μοίρες</span>
              <span className="text-3xl font-serif tracking-widest uppercase items-center flex gap-4"><div className="w-1.5 h-1.5 bg-legal-gold rounded-full"></div> Γάζι</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-legal-cream relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight italic">Επικοινωνήστε <br /><span className="not-italic">μαζί μας</span></h2>
              <div className="legal-accent-line"></div>
              <p className="text-lg leading-relaxed text-legal-slate mb-12">
                Είμαστε στη διάθεσή σας για οποιαδήποτε πληροφορία ή νομική συμβουλή. 
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white shadow-sm border border-legal-navy/5 text-legal-gold group-hover:bg-legal-gold group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 opacity-50">Διεύθυνση</h4>
                    <p className="text-xl font-serif">Πεδιάδος 26, Ηράκλειο Κρήτης</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white shadow-sm border border-legal-navy/5 text-legal-gold group-hover:bg-legal-gold group-hover:text-white transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 opacity-50">Τηλέφωνο</h4>
                    <p className="text-xl font-serif tracking-widest">693 605 7206</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white shadow-sm border border-legal-navy/5 text-legal-gold group-hover:bg-legal-gold group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 opacity-50">Email</h4>
                    <p className="text-xl font-serif">evigrigorakil@yahoo.gr</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white shadow-sm border border-legal-navy/5 text-legal-gold group-hover:bg-legal-gold group-hover:text-white transition-all duration-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 opacity-50">Ωράριο</h4>
                    <p className="text-xl font-serif">Πρωί & Απόγευμα <span className="text-sm opacity-50 italic">(Κατόπιν Ραντεβού)</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-legal-navy text-white flex flex-col justify-center overflow-hidden shadow-2xl">
              <div className="p-12 pb-0">
                <h3 className="text-3xl font-serif mb-8 text-legal-gold italic">Το Γραφείο μας</h3>
                <p className="text-white/70 leading-relaxed mb-10 font-light text-lg italic">
                  Εδρεύει στην καρδιά του Ηρακλείου, στην οδό Πεδιάδος 26, παρέχοντας εύκολη πρόσβαση και άμεση εξυπηρέτηση σε όλους τους πολίτες της Κρήτης. 
                </p>
              </div>
              <div className="relative aspect-video w-full mt-auto group overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/legal-office-interior/1200/800?grayscale" 
                  alt="Professional Law Office Interior" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-legal-navy/40 group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="absolute bottom-10 left-10 z-10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-legal-gold/30 flex items-center justify-center text-legal-gold bg-legal-navy/50 backdrop-blur-md">
                    <MapPin size={18} />
                  </div>
                  <span className="uppercase tracking-[0.3em] text-xs font-semibold text-white">Πεδιάδος 26, Ηράκλειο</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-legal-navy pt-20 pb-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex flex-col mb-12">
            <span className="font-serif text-3xl md:text-4xl text-white font-bold tracking-tight uppercase leading-none">Ευαγγελία Γρηγοράκη</span>
            <span className="text-[10px] uppercase tracking-[0.5em] text-legal-gold font-sans mt-3">Δικηγορικό Γραφείο</span>
          </div>

          <div className="w-full h-px bg-white/10 mb-10"></div>

          <p className="text-white/40 text-sm max-w-2xl mb-8 font-light italic">
             Η πολυετής εμπειρία μας, η επιστημονική αρτιότητα και η απόλυτη εχεμύθεια αποτελούν τα θεμέλια πάνω στα οποία χτίζουμε τη σχέση εμπιστοσύνης με τους εντολείς μας.
          </p>

          <div className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-sans">
            &copy; {new Date().getFullYear()} Ευαγγελία Γρηγοράκη. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
