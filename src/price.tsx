import React from 'react';

const plans = [
	{
		name: 'Starter',
		price: '$9',
		description: 'For individuals getting started with the essentials.',
		features: ['1 project', 'Basic support', 'Core features'],
		highlighted: false,
	},
	{
		name: 'Pro',
		price: '$29',
		description: 'For growing teams that need more power and flexibility.',
		features: ['10 projects', 'Priority support', 'Advanced analytics'],
		highlighted: true,
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		description: 'For organizations that need tailored solutions.',
		features: ['Unlimited projects', 'Dedicated support', 'Custom integrations'],
		highlighted: false,
	},
];

export default function PricePage() {
	return (
		<main style={styles.page}>
			<section style={styles.hero}>
				<p style={styles.kicker}>Pricing</p>
				<h1 style={styles.title}>Choose the plan that fits your team</h1>
				<p style={styles.subtitle}>
					Simple, transparent pricing with no hidden fees. Upgrade or downgrade anytime.
				</p>
			</section>

			<section style={styles.grid}>
				{plans.map((plan) => (
					<article
						key={plan.name}
						style={{
							...styles.card,
							...(plan.highlighted ? styles.cardHighlighted : {}),
						}}
					>
						<h2 style={styles.planName}>{plan.name}</h2>
						<div style={styles.priceRow}>
							<span style={styles.price}>{plan.price}</span>
							{plan.price !== 'Custom' && <span style={styles.perMonth}>/month</span>}
						</div>
						<p style={styles.description}>{plan.description}</p>
						<ul style={styles.list}>
							{plan.features.map((feature) => (
								<li key={feature} style={styles.listItem}>
									<span style={styles.check}>✓</span>
									{feature}
								</li>
							))}
						</ul>
						<button style={{ ...styles.button, ...(plan.highlighted ? styles.buttonPrimary : {}) }}>
							{plan.price === 'Custom' ? 'Contact sales' : 'Get started'}
						</button>
					</article>
				))}
			</section>
		</main>
	);
}

const styles: Record<string, React.CSSProperties> = {
	page: {
		minHeight: '100vh',
		padding: '64px 24px',
		fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
		background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
		color: '#0f172a',
	},
	hero: {
		maxWidth: 900,
		margin: '0 auto 48px',
		textAlign: 'center',
	},
	kicker: {
		margin: 0,
		color: '#2563eb',
		fontWeight: 700,
		letterSpacing: '0.08em',
		textTransform: 'uppercase',
		fontSize: 14,
	},
	title: {
		margin: '12px 0 16px',
		fontSize: 'clamp(2.25rem, 5vw, 4rem)',
		lineHeight: 1.05,
	},
	subtitle: {
		margin: '0 auto',
		maxWidth: 720,
		fontSize: 18,
		color: '#475569',
		lineHeight: 1.6,
	},
	grid: {
		maxWidth: 1100,
		margin: '0 auto',
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
		gap: 24,
	},
	card: {
		background: '#ffffff',
		border: '1px solid #e2e8f0',
		borderRadius: 24,
		padding: 28,
		boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
		display: 'flex',
		flexDirection: 'column',
	},
	cardHighlighted: {
		border: '2px solid #2563eb',
		transform: 'translateY(-6px)',
	},
	planName: {
		margin: 0,
		fontSize: 24,
	},
	priceRow: {
		display: 'flex',
		alignItems: 'baseline',
		gap: 8,
		marginTop: 16,
	},
	price: {
		fontSize: 44,
		fontWeight: 800,
		color: '#0f172a',
	},
	perMonth: {
		fontSize: 16,
		color: '#64748b',
	},
	description: {
		margin: '16px 0 0',
		color: '#475569',
		lineHeight: 1.6,
	},
	list: {
		listStyle: 'none',
		padding: 0,
		margin: '24px 0 0',
		display: 'grid',
		gap: 12,
		flex: 1,
	},
	listItem: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		color: '#334155',
	},
	check: {
		width: 20,
		height: 20,
		borderRadius: '50%',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#dbeafe',
		color: '#2563eb',
		fontSize: 12,
		fontWeight: 700,
		flexShrink: 0,
	},
	button: {
		marginTop: 28,
		border: '1px solid #cbd5e1',
		background: '#ffffff',
		color: '#0f172a',
		padding: '14px 18px',
		borderRadius: 14,
		fontSize: 16,
		fontWeight: 700,
		cursor: 'pointer',
	},
	buttonPrimary: {
		background: '#2563eb',
		borderColor: '#2563eb',
		color: '#ffffff',
	},
};
