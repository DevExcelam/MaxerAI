'use client';

const workOrders = [
  {
    id: '12345',
    title: 'Hydraulic Pump P-102',
    priority: 'high',
    description: 'Reported abnormal vibration and heat signature on main drive shaft.',
    hasAiAnalysis: true,
    dueDate: 'Today, 17:00',
    action: 'Resume',
  },
  {
    id: '12389',
    title: 'Conveyor Belt C-04',
    priority: 'routine',
    description: 'Quarterly inspection of tensioners and bearing lubrication status.',
    hasAiAnalysis: true,
    dueDate: 'Oct 28',
    action: 'Start Session',
  },
  {
    id: '12401',
    title: 'Air Compressor A-1',
    priority: 'urgent',
    description: 'Pressure drop detected in secondary line. Potential leak in manifold.',
    hasAiAnalysis: false,
    dueDate: 'Syncing Analysis...',
    action: 'Wait',
    disabled: true,
  },
];

const faultData = [
  { label: 'Bearing', value: 24, height: '60%', opacity: 'bg-primary/10 hover:bg-primary/20' },
  { label: 'Loose Bolts', value: 42, height: '90%', opacity: 'bg-primary hover:opacity-90' },
  { label: 'Leaking', value: 18, height: '45%', opacity: 'bg-primary/40 hover:bg-primary/50' },
  { label: 'Sensor Fail', value: 31, height: '70%', opacity: 'bg-primary/60 hover:bg-primary/70' },
  { label: 'Overheat', value: 12, height: '30%', opacity: 'bg-primary/20 hover:bg-primary/30' },
];

const shortcuts = [
  {
    icon: 'inventory',
    title: 'Log Spare Parts',
    description: 'Update inventory usage',
  },
  {
    icon: 'support_agent',
    title: 'Contact Support',
    description: 'Direct line to L4 Tech',
  },
  {
    icon: 'menu_book',
    title: 'Technical Library',
    description: 'OEM Manuals & Guides',
  },
];

function getPriorityStyles(priority: string) {
  switch (priority) {
    case 'high':
      return 'text-orange-600 bg-orange-50';
    case 'urgent':
      return 'text-red-600 bg-red-50';
    default:
      return 'text-slate-500 bg-slate-100';
  }
}

function getPriorityLabel(priority: string) {
  switch (priority) {
    case 'high':
      return 'High Priority';
    case 'urgent':
      return 'Urgent';
    default:
      return 'Routine';
  }
}

export default function DashboardPage() {
  return (
    <div className="h-screen flex overflow-hidden bg-background-main text-text-main">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-surface-border bg-white shrink-0 transition-all duration-300">
        <div className="h-16 flex items-center px-6 border-b border-surface-border">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
            </div>
            <span className="font-bold text-lg tracking-tight">MAXERIA</span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1">
          <a
            href="#"
            className="sidebar-item-active flex items-center gap-3 px-4 py-3 rounded-lg text-sm"
          >
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-text-muted hover:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined">inventory_2</span>
            Asset Library
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-text-muted hover:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined">history_edu</span>
            History / REX
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-text-muted hover:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined">conveyor_belt</span>
            Spares &amp; Logistics
          </a>
        </nav>

        <div className="p-4 border-t border-surface-border">
          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-[10px] font-bold text-text-muted uppercase mb-2">System Load</p>
            <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[45%]"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 glass-header flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-xs font-medium">
              <span className="size-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Online &amp; Synced
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-main">
                <span className="material-symbols-outlined text-lg">neurology</span>
                <span>Model: MAXER-4-Turbo</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="size-10 flex items-center justify-center text-text-muted hover:bg-slate-100 rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right">
                <p className="text-sm font-bold leading-none">Alex R.</p>
                <p className="text-[10px] text-text-muted font-medium mt-1">Field Technician L3</p>
              </div>
              <div className="size-10 rounded-full bg-slate-200 border border-surface-border overflow-hidden">
                <img
                  alt="User Profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1l6C9M6CqUbcZYzZyY_saUjA8QUtLQCRRB6P3zqAdjp6gc-MxJSN0VyuyTBjyBY0haNmQCrCjaJFag_hZoWX-6QLXj-EL7GAPuBBqpN6SOzLUYzGN8QBoaainhgnnvNlxo1v-6LTXhCDXQW2czFuvrz5Kxe62MSUWCXBM4oStqVjkIU0NCPwB7BzvXMqt5wOYkXDdFLAj1VLE5eZeuTcjtDtZpRzl0VXV5x0O6GcXT55qZgCKcqMYZtZ7rlBJBgHpJr05OqHODSff"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-slate-50/50">
          <section className="max-w-6xl mx-auto px-8 py-10">
            {/* Hero Section */}
            <div className="bg-white border border-surface-border rounded-2xl p-10 shadow-sm mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
                  What needs diagnosing today?
                </h1>
                <p className="text-text-muted mb-8 max-w-xl">
                  Access industrial diagnostics, predictive maintenance models, and tribal knowledge
                  capture in one place.
                </p>
                <div className="flex items-center gap-4">
                  <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                    <span className="material-symbols-outlined">add_circle</span>
                    New Diagnostic Session
                  </button>
                  <button className="bg-white border border-surface-border hover:bg-slate-50 text-text-main px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all">
                    <span className="material-symbols-outlined">qr_code_scanner</span>
                    Scan QR
                  </button>
                </div>
              </div>
            </div>

            {/* Active Assignments */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">assignment</span>
                  Active Assignments
                </h2>
                <button className="text-sm font-semibold text-primary hover:underline">
                  View SAP/Maximo Sync
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workOrders.map((order) => (
                  <div
                    key={order.id}
                    className={`work-order-card ${order.disabled ? 'opacity-75' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                          #{order.id}
                        </span>
                        <h3 className="text-base font-bold mt-1">{order.title}</h3>
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ${getPriorityStyles(order.priority)}`}
                      >
                        {getPriorityLabel(order.priority)}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mb-4 leading-relaxed">
                      {order.description}
                    </p>
                    {order.hasAiAnalysis && (
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] flex items-center gap-1 font-bold text-primary bg-primary/5 border border-primary/10 px-2 py-1 rounded-full uppercase tracking-wider">
                          <span className="material-symbols-outlined text-sm">auto_awesome</span>
                          AI Pre-Analysis
                        </span>
                      </div>
                    )}
                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                      <span className="text-[10px] text-text-muted">
                        {order.hasAiAnalysis ? `Due: ${order.dueDate}` : order.dueDate}
                      </span>
                      <button
                        className={`text-sm font-bold ${order.disabled ? 'text-slate-400 cursor-not-allowed' : 'text-primary'}`}
                        disabled={order.disabled}
                      >
                        {order.action} {!order.disabled && '→'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Charts and Shortcuts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Common Faults Chart */}
              <div className="lg:col-span-2 bg-white border border-surface-border rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-muted">bar_chart</span>
                    Common Faults This Week (REX)
                  </h3>
                  <select className="text-xs bg-slate-50 border-slate-200 rounded py-1 px-2 focus:ring-primary">
                    <option>All Sections</option>
                    <option>Production Line A</option>
                  </select>
                </div>
                <div className="flex items-end gap-3 h-48 px-4">
                  {faultData.map((fault) => (
                    <div key={fault.label} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className={`w-full ${fault.opacity} rounded-t-sm transition-colors relative group`}
                        style={{ height: fault.height }}
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold hidden group-hover:block">
                          {fault.value}
                        </div>
                      </div>
                      <span className="text-[10px] text-text-muted truncate w-full text-center">
                        {fault.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Shortcuts */}
              <div className="bg-white border border-surface-border rounded-xl p-6">
                <h3 className="font-bold mb-6">Quick Shortcuts</h3>
                <div className="space-y-3">
                  {shortcuts.map((shortcut) => (
                    <button
                      key={shortcut.title}
                      className="w-full flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all text-left"
                    >
                      <div className="size-8 rounded bg-slate-100 flex items-center justify-center text-slate-600">
                        <span className="material-symbols-outlined text-xl">{shortcut.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold">{shortcut.title}</p>
                        <p className="text-[10px] text-text-muted">{shortcut.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
