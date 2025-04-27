-- Tabla para almacenar los resultados de las pruebas de rendimiento
CREATE TABLE IF NOT EXISTS performance_tests (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  user_agent TEXT,
  device_type TEXT,
  connection TEXT,
  
  -- Core Web Vitals y otras métricas
  lcp FLOAT, -- Largest Contentful Paint (ms)
  fid FLOAT, -- First Input Delay (ms)
  cls FLOAT, -- Cumulative Layout Shift
  fcp FLOAT, -- First Contentful Paint (ms)
  tti FLOAT, -- Time to Interactive (ms)
  tbt FLOAT, -- Total Blocking Time (ms)
  ttfb FLOAT, -- Time to First Byte (ms)
  inp FLOAT, -- Interaction to Next Paint (ms)
  
  -- Recursos
  resources_total INTEGER,
  resources_js INTEGER,
  resources_css INTEGER,
  resources_img INTEGER,
  resources_other INTEGER,
  resources_size BIGINT, -- en bytes
  
  -- Puntuaciones
  score_performance FLOAT,
  score_accessibility FLOAT,
  score_best_practices FLOAT,
  score_seo FLOAT,
  
  -- Índices
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para mejorar el rendimiento de las consultas
CREATE INDEX IF NOT EXISTS idx_performance_tests_url ON performance_tests(url);
CREATE INDEX IF NOT EXISTS idx_performance_tests_timestamp ON performance_tests(timestamp);
CREATE INDEX IF NOT EXISTS idx_performance_tests_device_type ON performance_tests(device_type);
