const doctors = [
  { name: "Dr. Shivamani", role: "Chief Dental Surgeon", initials: "DS" },
  { name: "Dr. Priya Sharma", role: "Orthodontist", initials: "PS" },
  { name: "Dr. Rajesh Kumar", role: "Endodontist", initials: "RK" },
  { name: "Dr. Anitha Rao", role: "Pediatric Dentist", initials: "AR" },
];

const DoctorsTeam = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-secondary mb-3">
          Our <span className="text-primary">Team</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Meet the skilled professionals behind your beautiful smile.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((d) => (
          <div key={d.name} className="bg-card rounded-2xl p-6 text-center hover-lift shadow-[var(--shadow-card)]">
            <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
              <span className="font-heading text-2xl font-bold text-primary-foreground">{d.initials}</span>
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground">{d.name}</h3>
            <p className="font-body text-sm text-primary mt-1">{d.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsTeam;
