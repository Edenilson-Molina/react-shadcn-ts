// Estadísticas principales
export const dashboardStats: Array<{
  id: number;
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
}> = [
  {
    id: 1,
    title: "Ingresos Totales",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive",
    icon: "TrendingUp",
  },
  {
    id: 2,
    title: "Usuarios Activos",
    value: "2,543",
    change: "+15.3%",
    changeType: "positive",
    icon: "Users",
  },
  {
    id: 3,
    title: "Conversiones",
    value: "12.5%",
    change: "-4.3%",
    changeType: "negative",
    icon: "BarChart3",
  },
  {
    id: 4,
    title: "Tasa de Retención",
    value: "87.2%",
    change: "+2.5%",
    changeType: "positive",
    icon: "PieChart",
  },
];

// Datos de transacciones recientes
export const recentTransactions = [
  {
    id: 1,
    date: "2025-03-17",
    customer: "Juan García",
    amount: "$1,250.00",
    status: "completado",
    category: "Venta",
  },
  {
    id: 2,
    date: "2025-03-16",
    customer: "María López",
    amount: "$890.50",
    status: "pendiente",
    category: "Suscripción",
  },
  {
    id: 3,
    date: "2025-03-16",
    customer: "Carlos Rodriguez",
    amount: "$2,100.00",
    status: "completado",
    category: "Venta",
  },
  {
    id: 4,
    date: "2025-03-15",
    customer: "Ana Martínez",
    amount: "$450.75",
    status: "rechazado",
    category: "Reembolso",
  },
  {
    id: 5,
    date: "2025-03-15",
    customer: "Pedro Sánchez",
    amount: "$1,899.00",
    status: "completado",
    category: "Venta",
  },
];

// Datos de proyectos en progreso
export const projectsProgress = [
  {
    id: 1,
    name: "Rediseño del Dashboard",
    progress: 85,
    team: 4,
    deadline: "2025-04-15",
  },
  {
    id: 2,
    name: "Integración API",
    progress: 60,
    team: 3,
    deadline: "2025-04-30",
  },
  {
    id: 3,
    name: "Documentación Técnica",
    progress: 40,
    team: 2,
    deadline: "2025-05-10",
  },
  {
    id: 4,
    name: "Testing y QA",
    progress: 75,
    team: 5,
    deadline: "2025-03-31",
  },
];

// Datos de desempeño semanal
export const weeklyPerformance = [
  { day: "Lun", value: 400, goal: 500 },
  { day: "Mar", value: 600, goal: 500 },
  { day: "Mié", value: 800, goal: 500 },
  { day: "Jue", value: 700, goal: 500 },
  { day: "Vie", value: 900, goal: 500 },
  { day: "Sáb", value: 500, goal: 500 },
  { day: "Dom", value: 400, goal: 500 },
];

// Datos de equipo
export const teamMembers = [
  {
    id: 1,
    name: "Sofia García",
    role: "Desarrolladora Senior",
    status: "en línea",
    avatar: "SG",
  },
  {
    id: 2,
    name: "Miguel Rodríguez",
    role: "Diseñador UI/UX",
    status: "en línea",
    avatar: "MR",
  },
  {
    id: 3,
    name: "Laura Fernández",
    role: "Project Manager",
    status: "ausente",
    avatar: "LF",
  },
  {
    id: 4,
    name: "Diego López",
    role: "Developer",
    status: "en línea",
    avatar: "DL",
  },
];
