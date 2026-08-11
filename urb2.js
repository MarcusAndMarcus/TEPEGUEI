/* UROBOROS · URB2 2.9.0 — build de arquivo unico
 * =========================================================
 * Todo o sistema num arquivo so. Zero dependencias npm. Node >= 18.
 *
 * Para subir no GitHub e no Render bastam DOIS arquivos:
 *   urb2.js       (este)
 *   package.json
 *
 * Sem pastas, sem npm install. As chaves vao nas variaveis de ambiente.
 *
 *   node urb2.js              sobe o servidor
 *   node urb2.js --info       imprime a configuracao e sai
 *   node urb2.js --teste      autoteste rapido, sem rede
 *
 * A build modular (lib/ + tools/) tem 86 testes, calibracao e ferramentas de
 * diagnostico. Esta aqui e so o runtime de producao.
 */
'use strict';

const __mods = {};
const __cache = {};
function __req(nome) {
  if (__cache[nome]) return __cache[nome].exports;
  const m = { exports: {} };
  __cache[nome] = m;
  if (!__mods[nome]) throw new Error('modulo ausente na build: ' + nome);
  __mods[nome](m, m.exports, __req);
  return m.exports;
}

/* tabela de ancora embutida (equivale a data/tabela.json) */
const TABELA_EMBUTIDA = {"_leia": "Âncora numérica do URB2. Entradas com verificado=false NUNCA votam nem vetam — só marcam. Confirme contra a fonte primária e vire a flag. Valor e sigma na unidade declarada.", "_atualizado": "2026-08", "grandezas": {"c": [{"valor": 299792458, "sigma": 0, "unidade": "m/s", "fonte": "SI 2019 (exato)", "verificado": true, "exato": true}], "h_planck": [{"valor": 6.62607015e-34, "sigma": 0, "unidade": "J s", "fonte": "SI 2019 (exato)", "verificado": true, "exato": true}], "hbar": [{"valor": 1.054571817e-34, "sigma": 0, "unidade": "J s", "fonte": "SI 2019 (derivado exato)", "verificado": true, "exato": true}], "k_B": [{"valor": 1.380649e-23, "sigma": 0, "unidade": "J/K", "fonte": "SI 2019 (exato)", "verificado": true, "exato": true}], "N_A": [{"valor": 6.02214076e+23, "sigma": 0, "unidade": "1/mol", "fonte": "SI 2019 (exato)", "verificado": true, "exato": true}], "e_carga": [{"valor": 1.602176634e-19, "sigma": 0, "unidade": "C", "fonte": "SI 2019 (exato)", "verificado": true, "exato": true}], "sigma_SB": [{"valor": 5.670374419e-08, "sigma": 0, "unidade": "W m^-2 K^-4", "fonte": "SI 2019 (derivado exato)", "verificado": true, "exato": true}], "G": [{"valor": 6.6743e-11, "sigma": 1.5e-15, "unidade": "m^3 kg^-1 s^-2", "fonte": "CODATA 2018", "verificado": true}], "m_e": [{"valor": 9.1093837015e-31, "sigma": 2.8e-40, "unidade": "kg", "fonte": "CODATA 2018", "verificado": true}], "m_p": [{"valor": 1.67262192369e-27, "sigma": 5.1e-37, "unidade": "kg", "fonte": "CODATA 2018", "verificado": true}], "alpha_inv": [{"valor": 137.035999084, "sigma": 2.1e-08, "unidade": "1", "fonte": "CODATA 2018", "verificado": true}], "T_CMB": [{"valor": 2.72548, "sigma": 0.00057, "unidade": "K", "fonte": "Fixsen 2009 (COBE/FIRAS)", "verificado": true}], "H0": [{"valor": 67.36, "sigma": 0.54, "unidade": "km/s/Mpc", "fonte": "Planck 2018 TT,TE,EE+lowE+lensing", "verificado": true, "rotulo": "CMB"}, {"valor": 73.04, "sigma": 1.04, "unidade": "km/s/Mpc", "fonte": "SH0ES Riess et al. 2022 (ApJL 934 L7)", "verificado": true, "rotulo": "escada de distancias"}], "Omega_m": [{"valor": 0.3153, "sigma": 0.0073, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "Omega_Lambda": [{"valor": 0.6847, "sigma": 0.0073, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "Omega_b_h2": [{"valor": 0.02237, "sigma": 0.00015, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "Omega_c_h2": [{"valor": 0.12, "sigma": 0.0012, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "n_s": [{"valor": 0.9649, "sigma": 0.0042, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "sigma8": [{"valor": 0.8111, "sigma": 0.006, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "S8": [{"valor": 0.832, "sigma": 0.013, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "tau": [{"valor": 0.0544, "sigma": 0.0073, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "idade_universo": [{"valor": 13.797, "sigma": 0.023, "unidade": "Gyr", "fonte": "Planck 2018", "verificado": true}], "r_drag": [{"valor": 147.09, "sigma": 0.26, "unidade": "Mpc", "fonte": "Planck 2018", "verificado": true}], "z_drag": [{"valor": 1059.94, "sigma": 0.3, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "z_star": [{"valor": 1089.92, "sigma": 0.25, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "theta_star_100": [{"valor": 1.0411, "sigma": 0.00031, "unidade": "1", "fonte": "Planck 2018", "verificado": true}], "H0_DESI": [{"valor": null, "sigma": null, "unidade": "km/s/Mpc", "fonte": "DESI DR2 BAO — CONFERIR no paper", "verificado": false}], "w0": [{"valor": null, "sigma": null, "unidade": "1", "fonte": "DESI DR2 w0waCDM — CONFERIR", "verificado": false}], "wa": [{"valor": null, "sigma": null, "unidade": "1", "fonte": "DESI DR2 w0waCDM — CONFERIR", "verificado": false}], "A_gwb": [{"valor": null, "sigma": null, "unidade": "1", "fonte": "NANOGrav 15 yr amplitude — CONFERIR", "verificado": false}], "sum_m_nu": [{"valor": null, "sigma": null, "unidade": "eV", "fonte": "limite superior; depende do dataset — CONFERIR", "verificado": false}]}, "aliases": {"H0": ["h0", "h₀", "constante de hubble", "hubble constant", "parametro de hubble hoje", "taxa de expansao do universo", "hubble rate today"], "Omega_m": ["omega_m", "ω_m", "ωm", "omega m", "densidade de materia", "matter density"], "Omega_Lambda": ["omega_lambda", "ω_λ", "ωλ", "omega lambda", "densidade de energia escura"], "Omega_b_h2": ["omega_b h2", "ω_b h²", "ωbh2", "omega barions", "baryon density"], "Omega_c_h2": ["omega_c h2", "ω_c h²", "ωch2", "materia escura fria"], "n_s": ["ns", "n_s", "indice espectral", "spectral index"], "sigma8": ["sigma8", "sigma_8", "σ8", "σ_8"], "S8": ["s8", "s_8", "s₈"], "tau": ["tau", "τ", "profundidade optica", "optical depth"], "idade_universo": ["idade do universo", "age of the universe", "t0", "t₀", "idade", "age of universe"], "r_drag": ["r_drag", "r_d", "raio do horizonte sonoro", "sound horizon"], "z_drag": ["z_drag", "z_d"], "z_star": ["z_star", "z_*", "redshift de recombinacao"], "theta_star_100": ["100 theta_*", "100θ*", "theta_star"], "T_CMB": ["t_cmb", "temperatura do cmb", "temperatura da radiacao cosmica de fundo", "cmb temperature", "temperatura do fundo cosmico", "temperatura da rcf"], "c": ["velocidade da luz", "speed of light"], "G": ["constante gravitacional", "constante de newton", "gravitational constant"], "k_B": ["constante de boltzmann", "boltzmann constant", "kb"], "N_A": ["numero de avogadro", "constante de avogadro", "avogadro"], "h_planck": ["constante de planck", "planck constant"], "hbar": ["h barra", "h cortado", "planck reduzida", "reduced planck"], "e_carga": ["carga elementar", "elementary charge"], "sigma_SB": ["constante de stefan-boltzmann", "stefan-boltzmann"], "m_e": ["massa do eletron", "electron mass"], "m_p": ["massa do proton", "proton mass"], "alpha_inv": ["inverso da constante de estrutura fina", "1/alpha"]}};

__mods['mascara'] = function (module, exports, __req) {
/* UROBOROS · URB2 — máscara de proveniência de largura arbitrária
 *
 * ═══ POR QUE ISTO EXISTE ═══
 *
 * A máscara de origem era um Number de 32 bits, com `bit = 1 << i`. Em
 * JavaScript, `<<` opera em int32 com envolvimento:
 *
 *     1 << 31  =  2147483648    ok
 *     1 << 32  =  1             ← mesma máscara da célula 0
 *     1 << 33  =  2             ← mesma máscara da célula 1
 *
 * Acima de 31 células a proveniência não só quebra: ela MENTE em silêncio.
 * A célula 32 passa a se apresentar como a célula 0, o filtro de informação
 * extrínseca deixa de reconhecer o eco, e o `popcount` conta duas origens
 * onde há uma. Sem erro, sem aviso — só confiança inflada.
 *
 * Como toda a defesa contra lavagem de alucinação depende da máscara ser
 * exata, isto é pré-requisito absoluto para qualquer contagem de células
 * acima de 31. Com BigInt não há teto.
 *
 * Slots reservados no topo, fora do espaço das células:
 *   VERIFICADOR  Polo V determinístico
 *   ANCORA       tabela numérica local
 *   ANCORA_REDE  conectores externos (SIMBAD, Gaia, VizieR, arXiv)
 */

const ZERO = 0n;

/** Bit da célula i. Sem teto: i = 4096 funciona igual a i = 3. */
const bitDe = i => 1n << BigInt(i);

/** Slots reservados começam bem acima de qualquer contagem plausível. */
const RESERVADO = 1n << 4096n;
const VERIFICADOR = RESERVADO;
const ANCORA = RESERVADO << 1n;
const ANCORA_REDE = RESERVADO << 2n;
const RESERVADOS = VERIFICADOR | ANCORA | ANCORA_REDE;

const uniao = (a, b) => (a | b);
const contem = (mascara, bit) => (mascara & bit) !== ZERO;
const semReservados = m => m & ~RESERVADOS;

/** Número de bits em 1. Processa 32 bits por passo — O(bits/32). */
function popcount(m) {
  let x = typeof m === 'bigint' ? m : BigInt(m || 0);
  if (x < ZERO) x = -x;
  let n = 0;
  while (x > ZERO) {
    let w = Number(x & 0xffffffffn);
    while (w) { w &= w - 1; n++; }
    x >>= 32n;
  }
  return n;
}

/** Quantas células distintas (ignora verificador e âncoras). */
const origens = m => popcount(semReservados(m));

/** Índices das células presentes — para relatório e depuração. */
function indices(m, limite = 4096) {
  let x = semReservados(typeof m === 'bigint' ? m : BigInt(m || 0));
  const out = [];
  for (let i = 0; x > ZERO && i < limite; i++, x >>= 1n) if (x & 1n) out.push(i);
  return out;
}

/* ---------- serialização para o telegrama URB2 ---------- */

/** BigInt -> Buffer big-endian, sem zeros à esquerda. */
function paraBytes(m) {
  let x = typeof m === 'bigint' ? m : BigInt(m || 0);
  if (x <= ZERO) return Buffer.alloc(0);
  let hex = x.toString(16);
  if (hex.length % 2) hex = '0' + hex;
  return Buffer.from(hex, 'hex');
}

function deBytes(buf) {
  if (!buf || !buf.length) return ZERO;
  return BigInt('0x' + Buffer.from(buf).toString('hex'));
}

/** Forma curta para log: contagem + prefixo hex. */
function resumo(m) {
  const n = origens(m);
  const h = paraBytes(semReservados(m)).toString('hex');
  return `${n} origem(ns)${h ? ' 0x' + (h.length > 16 ? h.slice(0, 16) + '…' : h) : ''}`;
}

module.exports = {
  ZERO, RESERVADO, VERIFICADOR, ANCORA, ANCORA_REDE, RESERVADOS,
  bitDe, uniao, contem, semReservados, popcount, origens, indices,
  paraBytes, deBytes, resumo
};

};
__mods['graph'] = function (module, exports, __req) {
/* UROBOROS · URB2 — topologia do anel com cordas
 *
 * O anel-com-cordas é um grafo circulante C_n(S). Autovalores em forma fechada:
 *
 *     λ_k = (1/d) Σ_{s∈S} 2 cos(2πks/n),   d = 2|S|,  k = 0..n-1
 *
 * λ_0 = 1 sempre (direção de consenso). O que controla a convergência é
 *     λ₂ = max_{k≥1} |λ_k|
 * e o número de rodadas de gossip para erro relativo ε é
 *     T ≥ log ε / log λ₂.
 *
 * ARMADILHA CRÍTICA: se todos os saltos de S forem ÍMPARES, o grafo é
 * bipartido, existe λ_k = -1 e o gossip OSCILA para sempre (não converge).
 * C_10(1,3) — o anel-com-cordas "óbvio" — cai exatamente nisso.
 */

function eigen(n, S) {
  const d = 2 * S.length;
  const ev = [];
  for (let k = 0; k < n; k++) {
    let s = 0;
    for (const c of S) s += 2 * Math.cos((2 * Math.PI * k * c) / n);
    ev.push(s / d);
  }
  return ev;
}

function lambda2(n, S, lazy = 0) {
  // gossip preguiçoso: W' = (1-a)I + aW  =>  λ' = (1-a) + aλ
  const ev = eigen(n, S).slice(1).map(l => (lazy > 0 ? (1 - lazy) + lazy * l : l));
  return Math.max(...ev.map(Math.abs));
}

function mixingTime(n, S, eps = 1e-2, lazy = 0) {
  const l2 = lambda2(n, S, lazy);
  if (l2 >= 1 - 1e-12) return Infinity;
  return Math.ceil(Math.log(eps) / Math.log(l2));
}

/** Busca exaustiva do melhor conjunto de cordas para grau fixo. */
function bestChords(n, degree, eps = 1e-2) {
  const k = degree / 2;
  const cand = [];
  const max = Math.floor(n / 2);
  const rec = (start, acc) => {
    if (acc.length === k) { cand.push(acc.slice()); return; }
    for (let s = start; s <= max; s++) { acc.push(s); rec(s + 1, acc); acc.pop(); }
  };
  rec(1, []);
  return cand
    .map(S => ({ S, lambda2: lambda2(n, S), T: mixingTime(n, S, eps) }))
    .sort((a, b) => a.lambda2 - b.lambda2);
}

/** Matriz de mistura de Metropolis-Hastings (duplamente estocástica). */
function mixingMatrix(n, S, lazy = 0) {
  const adj = Array.from({ length: n }, () => new Set());
  for (let i = 0; i < n; i++) for (const s of S) { adj[i].add((i + s) % n); adj[i].add((i - s + n) % n); }
  const W = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let off = 0;
    for (const j of adj[i]) { const w = 1 / (1 + Math.max(adj[i].size, adj[j].size)); W[i][j] = w; off += w; }
    W[i][i] = 1 - off;
  }
  if (lazy > 0) for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) W[i][j] = (i === j ? (1 - lazy) : 0) + lazy * W[i][j];
  return W;
}

function neighbors(n, S) {
  return Array.from({ length: n }, (_, i) => {
    const set = new Set();
    for (const s of S) { set.add((i + s) % n); set.add((i - s + n) % n); }
    set.delete(i);
    return [...set].sort((a, b) => a - b);
  });
}

module.exports = { eigen, lambda2, mixingTime, bestChords, mixingMatrix, neighbors };

if (require.main === module) {
  const n = Number(process.argv[2] || 16);
  console.log(`C_${n} — melhores cordas por grau:`);
  for (const d of [4, 6, 8]) {
    const top = bestChords(n, d).slice(0, 3);
    for (const t of top) console.log(`  grau ${d}  S={${t.S}}  λ₂=${t.lambda2.toFixed(4)}  T(ε=1e-2)=${t.T}`);
  }
}

};
__mods['estimador'] = function (module, exports, __req) {
/* UROBOROS · URB2 — estimador de Σ
 *
 * PROBLEMA: Σ cheia tem N(N+1)/2 parâmetros livres. Com N=16 são 136.
 * Estimar 136 parâmetros com T=100 questões é ruído puro — a matriz sai
 * mal condicionada, w* = Σ⁻¹1 explode, e a "otimização" piora o cluster.
 *
 * SOLUÇÃO: a estrutura de família é um prior forte e verdadeiro. Ajusta-se
 * um MODELO EM BLOCOS em vez da matriz cheia:
 *
 *     Σ_ij = √(v_i v_j) · ρ_ij ,   ρ_ij = ⎧ 1              i = j
 *                                          ⎨ ρ_in[f]        mesma família f
 *                                          ⎩ ρ_out[f,g]     famílias f≠g
 *
 * Com f famílias: f variâncias + f correlações intra + f(f−1)/2 inter.
 * Para f=8 são 44 parâmetros, não 136 — e cada um é estimado agrupando
 * TODOS os pares daquele bloco, o que multiplica o tamanho amostral efetivo.
 *
 * DIAGNÓSTICO PRINCIPAL: o autovetor dominante de Σ é a direção de erro
 * comum — o viés compartilhado b da teoria. A razão
 *
 *     fracaoComum = λ₁ / tr(Σ)
 *
 * mede que porcentagem da variância de erro do cluster é modo comum, e
 * portanto IRREMOVÍVEL por qualquer média. É o número mais informativo que
 * a calibração produz.
 */

/* ---------- autodecomposição simétrica (Jacobi cíclico) ---------- */
function jacobiEigen(A, maxSweeps = 60, tol = 1e-11) {
  const n = A.length;
  const a = A.map(r => r.slice());
  const V = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  for (let sweep = 0; sweep < maxSweeps; sweep++) {
    let off = 0;
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) off += a[i][j] * a[i][j];
    if (Math.sqrt(2 * off) < tol) break;
    for (let p = 0; p < n - 1; p++) {
      for (let q = p + 1; q < n; q++) {
        if (Math.abs(a[p][q]) < 1e-15) continue;
        const theta = (a[q][q] - a[p][p]) / (2 * a[p][q]);
        const t = Math.sign(theta || 1) / (Math.abs(theta) + Math.sqrt(theta * theta + 1));
        const c = 1 / Math.sqrt(t * t + 1), s = t * c;
        for (let k = 0; k < n; k++) { const kp = a[k][p], kq = a[k][q]; a[k][p] = c * kp - s * kq; a[k][q] = s * kp + c * kq; }
        for (let k = 0; k < n; k++) { const pk = a[p][k], qk = a[q][k]; a[p][k] = c * pk - s * qk; a[q][k] = s * pk + c * qk; }
        for (let k = 0; k < n; k++) { const kp = V[k][p], kq = V[k][q]; V[k][p] = c * kp - s * kq; V[k][q] = s * kp + c * kq; }
      }
    }
  }
  const vals = a.map((r, i) => r[i]);
  const ord = vals.map((_, i) => i).sort((x, y) => vals[y] - vals[x]);
  return { values: ord.map(i => vals[i]), vectors: ord.map(i => V.map(r => r[i])) };
}

/** Projeta na cone PSD zerando autovalores negativos e reescala o traço. */
function projectPSD(S, floor = 1e-8) {
  const { values, vectors } = jacobiEigen(S);
  const n = S.length;
  const tr0 = S.reduce((s, r, i) => s + r[i], 0);
  const lam = values.map(v => Math.max(floor, v));
  const R = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let k = 0; k < n; k++)
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) R[i][j] += lam[k] * vectors[k][i] * vectors[k][j];
  const tr1 = R.reduce((s, r, i) => s + r[i], 0);
  const f = tr1 > 0 ? tr0 / tr1 : 1;
  return R.map(r => r.map(x => x * f));
}

/* ---------- correlação empírica ---------- */
function corrMatrix(E) {
  const T = E.length, N = E[0].length;
  const mu = new Array(N).fill(0);
  for (const r of E) for (let i = 0; i < N; i++) mu[i] += r[i] / T;
  const sd = new Array(N).fill(0);
  for (const r of E) for (let i = 0; i < N; i++) sd[i] += (r[i] - mu[i]) ** 2 / Math.max(1, T - 1);
  for (let i = 0; i < N; i++) sd[i] = Math.sqrt(sd[i]);
  const R = Array.from({ length: N }, () => new Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (sd[i] < 1e-9 || sd[j] < 1e-9) { R[i][j] = i === j ? 1 : 0; continue; }
      let c = 0;
      for (const r of E) c += (r[i] - mu[i]) * (r[j] - mu[j]) / Math.max(1, T - 1);
      R[i][j] = Math.max(-0.99, Math.min(0.99, c / (sd[i] * sd[j])));
    }
  }
  return { R, mu, sd };
}

/**
 * Ajusta o modelo em blocos.
 * @param E     matriz T×N de erro binário
 * @param cells [{id, family, provider, role}]
 * @param opts.minPares   nº mínimo de pares para confiar num bloco
 * @param opts.encolher   peso de encolhimento do bloco para a média global
 */
function structuredCovariance(E, cells, opts = {}) {
  const { minPares = 3, encolher = 0.25 } = opts;
  const T = E.length, N = cells.length;
  if (!T) throw new Error('sem amostras');
  const { R, mu } = corrMatrix(E);

  // variância de Bernoulli por célula, com piso (célula que nunca errou ainda erra)
  const v = mu.map(p => Math.max(1e-3, p * (1 - p)));

  const fams = [...new Set(cells.map(c => c.family))];
  const fidx = new Map(fams.map((f, k) => [f, k]));
  const acc = new Map();  // chave bloco -> {soma, n}
  const key = (a, b) => (a <= b ? `${a}|${b}` : `${b}|${a}`);

  for (let i = 0; i < N; i++)
    for (let j = i + 1; j < N; j++) {
      const k = key(fidx.get(cells[i].family), fidx.get(cells[j].family));
      if (!acc.has(k)) acc.set(k, { s: 0, n: 0 });
      const a = acc.get(k); a.s += R[i][j]; a.n++;
    }

  // Encolhimento HIERÁRQUICO em dois níveis. Encolher tudo para a média
  // global colapsa intra e inter — o erro que a versão ingênua comete.
  // Nível 1: bloco -> média do seu TIPO (intra ou inter)
  // Nível 2: tipo  -> média global (só se o tipo tiver poucos pares)
  // O peso usa n·T, não n: um único par medido em 300 questões é um
  // estimador forte, ainda que seja um par só.
  let gs = 0, gn = 0, is = 0, iN = 0, os = 0, oN = 0;
  for (const [k, { s, n }] of acc) {
    gs += s; gn += n;
    const [a, b] = k.split('|').map(Number);
    if (a === b) { is += s; iN += n; } else { os += s; oN += n; }
  }
  const rhoGlobal = gn ? gs / gn : 0.3;
  const kShrink = minPares / Math.max(1e-6, encolher) * 20;   // ~240 amostras-pares
  const pull = (raw, alvo, nT) => { const w = nT / (nT + kShrink); return w * raw + (1 - w) * alvo; };

  const rhoIntra = iN ? pull(is / iN, rhoGlobal, iN * T) : rhoGlobal;
  const rhoInter = oN ? pull(os / oN, rhoGlobal, oN * T) : rhoGlobal;

  const rho = new Map();
  for (const [k, { s, n }] of acc) {
    const [a, b] = k.split('|').map(Number);
    const alvo = a === b ? rhoIntra : rhoInter;
    rho.set(k, Math.max(-0.5, Math.min(0.98, pull(s / n, alvo, n * T))));
  }

  const Sigma = Array.from({ length: N }, () => new Array(N).fill(0));
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++) {
      if (i === j) { Sigma[i][j] = v[i]; continue; }
      const r = rho.get(key(fidx.get(cells[i].family), fidx.get(cells[j].family))) ?? rhoGlobal;
      Sigma[i][j] = Math.sqrt(v[i] * v[j]) * r;
    }

  const S = projectPSD(Sigma);
  const blocos = [...rho.entries()].map(([k, r]) => {
    const [a, b] = k.split('|').map(Number);
    return { familias: a === b ? [fams[a]] : [fams[a], fams[b]], tipo: a === b ? 'intra' : 'inter', rho: +r.toFixed(4), pares: acc.get(k).n };
  }).sort((x, y) => y.rho - x.rho);

  return {
    Sigma: S, taxaErro: mu.map(x => +x.toFixed(4)),
    rhoGlobal: +rhoGlobal.toFixed(4), rhoIntra: +rhoIntra.toFixed(4), rhoInter: +rhoInter.toFixed(4),
    blocos, familias: fams, T
  };
}

/* ---------- diagnósticos ---------- */
function diagnose(Sigma, w = null) {
  const N = Sigma.length;
  const { values, vectors } = jacobiEigen(Sigma);
  const tr = Sigma.reduce((s, r, i) => s + r[i], 0);
  const wt = w || new Array(N).fill(1 / N);
  let vbar = 0; for (let i = 0; i < N; i++) vbar += Sigma[i][i] / N;
  let q = 0; for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) q += wt[i] * wt[j] * Sigma[i][j];
  const sw = wt.reduce((a, b) => a + b, 0);
  const Neff = q > 0 ? (vbar * sw * sw) / q : N;

  return {
    N, N_eff: +Neff.toFixed(3),
    fracaoComum: +(values[0] / tr).toFixed(4),          // quanto do erro é modo comum
    tetoNeff: +(tr / values[0]).toFixed(3),             // limite superior de N_eff nesta Σ
    condicionamento: +(values[0] / Math.max(1e-12, values[N - 1])).toFixed(1),
    espectro: values.map(x => +x.toFixed(5)),
    modoComum: vectors[0].map(x => +x.toFixed(3))       // carga de cada célula no viés compartilhado
  };
}

/**
 * Correlação tetracórica (aprox. de Digby). φ medido em acerto/erro binário é
 * atenuado quando a taxa de erro é baixa, o que torna ρ incomparável entre
 * domínios fáceis e difíceis. A tetracórica estima a correlação da variável
 * latente contínua e é invariante à taxa base — use SÓ para relatório.
 * A deflação de LLR e o N_eff continuam usando φ, que é a quantidade que
 * de fato aparece em Var((1/N)Σeᵢ).
 */
function tetrachoric(E, i, j) {
  let a = 0, b = 0, c = 0, d = 0;
  for (const r of E) {
    if (r[i] && r[j]) a++; else if (r[i] && !r[j]) b++; else if (!r[i] && r[j]) c++; else d++;
  }
  a += 0.5; b += 0.5; c += 0.5; d += 0.5;                 // correção de Haldane
  const w = Math.pow((a * d) / (b * c), 3 / 4);
  return Math.cos(Math.PI / (1 + w));
}

module.exports = { jacobiEigen, projectPSD, corrMatrix, structuredCovariance, diagnose, tetrachoric };

};
__mods['epistemic'] = function (module, exports, __req) {
/* UROBOROS · URB2 — camada epistêmica
 *
 * Três instrumentos, do mais barato ao mais caro:
 *
 *  1. ENTROPIA SEMÂNTICA (Farquhar et al., Nature 2024)
 *     Entropia sobre CLASSES DE SIGNIFICADO, não sobre tokens. Duas respostas
 *     "Paris" e "A capital é Paris" são o mesmo evento. Clusteriza por
 *     implicação bidirecional (NLI) e mede
 *         H = -Σ_c p_c ln p_c,        H̃ = H / ln N ∈ [0,1]
 *     H̃ alto = o modelo não sabe (incerteza epistêmica), sinal primário de
 *     alucinação confabulatória.
 *
 *  2. COVARIÂNCIA DE ERRO Σ e N_eff
 *     Erros de LLMs NÃO são independentes: corpora de pré-treino se
 *     sobrepõem. Para pesos w,
 *         N_eff = (Σᵢwᵢ)² / (wᵀ Σ w)
 *     Com N células e correlação média ρ:  N_eff = N / (1 + (N-1)ρ).
 *     10 células de 2 famílias com ρ≈0.6 → N_eff ≈ 1.6. Dez vozes valendo
 *     uma e meia. É por isso que adicionar FAMÍLIAS vale muito mais que
 *     adicionar células.
 *
 *  3. PESOS ÓTIMOS (GLS / mínima variância)
 *         w* = Σ⁻¹1 / (1ᵀΣ⁻¹1),     Var* = 1 / (1ᵀΣ⁻¹1)
 *     Idêntico ao portfólio de variância mínima de Markowitz. Modelos
 *     redundantes recebem peso ~0 automaticamente; modelos com erro
 *     ANTI-correlacionado podem receber peso negativo (e devem).
 */

const { call, parseJSON } = __req('providers');

/* ================= 1. entropia semântica ================= */

const NLI_SYS =
`Você é um verificador de equivalência semântica. Recebe uma PERGUNTA e uma lista de RESPOSTAS numeradas.
Agrupe as respostas em classes de equivalência: duas respostas ficam na mesma classe se, no contexto da pergunta,
cada uma IMPLICA a outra (implicação bidirecional). Diferença de redação, ordem ou verbosidade não separa classes.
Diferença de valor numérico, de entidade, de sinal ou de conclusão SEPARA classes.
Responda APENAS JSON: {"clusters":[[0,2],[1],[3,4]]}. Todo índice deve aparecer exatamente uma vez.`;

async function clusterByEntailment(question, answers, judge = { provider: 'groq' }) {
  if (answers.length <= 1) return [[0]].slice(0, answers.length);
  const list = answers.map((a, i) => `[${i}] ${String(a).slice(0, 900)}`).join('\n');
  try {
    const r = await call(judge.provider, {
      system: NLI_SYS, json: true, temperature: 0, maxTokens: 700,
      messages: [{ role: 'user', content: `PERGUNTA:\n${question}\n\nRESPOSTAS:\n${list}` }]
    });
    const p = parseJSON(r.text);
    const cl = p?.clusters;
    if (Array.isArray(cl) && cl.flat().length === answers.length) return cl;
  } catch { /* cai no fallback */ }
  return clusterByShingles(answers);
}

/**
 * Fallback determinístico (sem API). Duas travas:
 *  (a) ASSINATURA NUMÉRICA — se duas respostas carregam números
 *      significativos conflitantes, ficam em clusters distintos por decreto.
 *      67.4 e 73.0 nunca colapsam, mesmo com redação quase idêntica.
 *  (b) Jaccard sobre 2-shingles + união-busca para o resto.
 */
function clusterByShingles(answers, thr = 0.30, relTol = 0.02) {
  const sh = answers.map(a => shingles(norm(a), 2));
  const nums = answers.map(numericSignature);
  const parent = answers.map((_, i) => i);
  const find = x => (parent[x] === x ? x : (parent[x] = find(parent[x])));

  for (let i = 0; i < answers.length; i++) {
    for (let j = i + 1; j < answers.length; j++) {
      const cmp = numericCompat(nums[i], nums[j], relTol);
      if (cmp === 'conflito') continue;                    // (a) trava dura
      const sim = jaccard(sh[i], sh[j]);
      if (cmp === 'igual' || sim >= thr) parent[find(i)] = find(j);
    }
  }
  const g = new Map();
  for (let i = 0; i < answers.length; i++) { const r = find(i); if (!g.has(r)) g.set(r, []); g.get(r).push(i); }
  return [...g.values()];
}

function numericSignature(text) {
  const out = [];
  const re = /-?\d+(?:[.,]\d+)?(?:\s*[eE]\s*[+-]?\d+)?/g;
  let m;
  while ((m = re.exec(String(text)))) {
    const v = parseFloat(m[0].replace(',', '.').replace(/\s/g, ''));
    if (Number.isFinite(v) && Math.abs(v) > 1e-12) out.push(v);
  }
  return out;
}

/** 'igual' | 'conflito' | 'neutro' */
function numericCompat(a, b, relTol) {
  if (!a.length || !b.length) return 'neutro';
  const near = (x, y) => Math.abs(x - y) <= relTol * Math.max(Math.abs(x), Math.abs(y));
  const matched = a.filter(x => b.some(y => near(x, y))).length;
  if (matched === 0) return 'conflito';
  if (matched >= Math.min(a.length, b.length)) return 'igual';
  return 'neutro';
}

const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s.+\-]/g, ' ').replace(/\s+/g, ' ').trim();
function shingles(s, k) { const w = s.split(' '); const set = new Set(); for (let i = 0; i + k <= w.length; i++) set.add(w.slice(i, i + k).join(' ')); return set.size ? set : new Set(w); }
function jaccard(a, b) { let inter = 0; for (const x of a) if (b.has(x)) inter++; const u = a.size + b.size - inter; return u ? inter / u : 0; }

/**
 * Entropia semântica com pesos por célula (peso = independência efetiva).
 * Retorna H, H normalizada, cluster modal e sua massa.
 */
function semanticEntropy(clusters, weights = null) {
  const w = i => (weights ? (weights[i] ?? 1) : 1);
  const mass = clusters.map(c => c.reduce((s, i) => s + w(i), 0));
  const Z = mass.reduce((a, b) => a + b, 0) || 1;
  const p = mass.map(m => m / Z);
  const H = -p.reduce((s, pi) => s + (pi > 0 ? pi * Math.log(pi) : 0), 0) + 0; // + 0 normaliza -0
  const Hmax = Math.log(Math.max(2, clusters.length));
  const k = p.indexOf(Math.max(...p));
  return { H, Hnorm: H / Hmax, p, modal: clusters[k], modalMass: p[k], nClusters: clusters.length };
}

/* ================= 2. covariância de erro e N_eff ================= */

/**
 * @param E matriz de erro binária: E[t][i] = 1 se a célula i errou na questão t
 * @param shrink regularização de Ledoit-Wolf simplificada (encolhe para diagonal)
 */
function errorCovariance(E, shrink = 0.15) {
  const T = E.length, N = E[0]?.length || 0;
  if (!T || !N) return null;
  const mu = new Array(N).fill(0);
  for (const row of E) for (let i = 0; i < N; i++) mu[i] += row[i] / T;
  const S = Array.from({ length: N }, () => new Array(N).fill(0));
  for (const row of E)
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++) S[i][j] += (row[i] - mu[i]) * (row[j] - mu[j]) / Math.max(1, T - 1);
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if (i !== j) S[i][j] *= (1 - shrink);
  for (let i = 0; i < N; i++) S[i][i] += 1e-6;
  return { Sigma: S, meanError: mu };
}

/** Σ a priori quando ainda não há histórico: blocos por família. */
function priorCovariance(cells, { rhoIntra = 0.85, rhoInter = 0.28, sigma = 0.45 } = {}) {
  const N = cells.length, v = sigma * sigma;
  const S = Array.from({ length: N }, () => new Array(N).fill(0));
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++)
      S[i][j] = i === j ? v : v * (cells[i].family === cells[j].family ? rhoIntra : rhoInter);
  return S;
}

/**
 * N_eff = (v̄ · (Σwᵢ)²) / (wᵀ Σ w).
 * Com w uniforme e Σ homogênea de correlação ρ, reduz a N/(1+(N-1)ρ).
 */
function effectiveN(Sigma, w = null) {
  const N = Sigma.length;
  const wt = w || new Array(N).fill(1 / N);
  let vbar = 0; for (let i = 0; i < N; i++) vbar += Sigma[i][i] / N;
  let q = 0; for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) q += wt[i] * wt[j] * Sigma[i][j];
  const sw = wt.reduce((a, b) => a + b, 0);
  return q > 0 ? (vbar * sw * sw) / q : N;
}

/* ================= 3. pesos GLS ================= */

function inverse(A, ridge = 1e-4) {
  const n = A.length;
  const M = A.map((r, i) => [...r.map((x, j) => x + (i === j ? ridge : 0)), ...r.map((_, j) => (i === j ? 1 : 0))]);
  for (let c = 0; c < n; c++) {
    let piv = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
    if (Math.abs(M[piv][c]) < 1e-12) return null;
    [M[c], M[piv]] = [M[piv], M[c]];
    const d = M[c][c];
    for (let k = 0; k < 2 * n; k++) M[c][k] /= d;
    for (let r = 0; r < n; r++) {
      if (r === c) continue;
      const f = M[r][c];
      if (!f) continue;
      for (let k = 0; k < 2 * n; k++) M[r][k] -= f * M[c][k];
    }
  }
  return M.map(r => r.slice(n));
}

/**
 * w* = Σ⁻¹1 / (1ᵀΣ⁻¹1).  clampNeg=true zera pesos negativos e renormaliza
 * (mais robusto quando Σ é estimada com poucas amostras).
 */
function glsWeights(Sigma, { ridge = 1e-3, clampNeg = true } = {}) {
  const N = Sigma.length;
  const Inv = inverse(Sigma, ridge);
  if (!Inv) return new Array(N).fill(1 / N);
  let w = Inv.map(r => r.reduce((a, b) => a + b, 0));
  if (clampNeg) w = w.map(x => Math.max(0, x));
  const s = w.reduce((a, b) => a + b, 0);
  return s > 0 ? w.map(x => x / s) : new Array(N).fill(1 / N);
}

/* ================= confiabilidade Dawid–Skene (Beta-Bernoulli) ================= */

class Reliability {
  constructor(prior = { a: 3, b: 1 }) { this.prior = prior; this.tab = new Map(); }
  key(cell, domain) { return `${cell}::${domain || '_'}`; }
  get(cell, domain) { return this.tab.get(this.key(cell, domain)) || { ...this.prior }; }
  update(cell, domain, correct) {
    const k = this.key(cell, domain), r = this.get(cell, domain);
    correct ? r.a++ : r.b++;
    this.tab.set(k, r);
    return r;
  }
  /** LLR do peso de voto: ln(acc/(1-acc)) com média posterior de Beta. */
  llrWeight(cell, domain) {
    const r = this.get(cell, domain);
    const acc = Math.min(0.995, Math.max(0.005, r.a / (r.a + r.b)));
    return Math.log(acc / (1 - acc));
  }
  toJSON() { return [...this.tab.entries()]; }
  static fromJSON(j, prior) { const r = new Reliability(prior); for (const [k, v] of j || []) r.tab.set(k, v); return r; }
}

module.exports = {
  clusterByEntailment, clusterByShingles, semanticEntropy,
  errorCovariance, priorCovariance, effectiveN, glsWeights, inverse,
  Reliability, jaccard, numericSignature, numericCompat
};

};
__mods['conformal'] = function (module, exports, __req) {
/* UROBOROS · URB2 — abstenção calibrada por predição conformal
 *
 * O limiar "emite se confiança > 0.8" é chute. Predição conformal dá
 * GARANTIA DISTRIBUTION-FREE, sem hipótese sobre a distribuição do escore:
 *
 *   Dado um conjunto de calibração de n exemplos com resposta conhecida e
 *   escore de não-conformidade s_i, defina
 *       q̂ = quantil de nível ⌈(n+1)(1-α)⌉/n dos {s_i}
 *   Então, para um novo exemplo trocável com os de calibração,
 *       P(s_{n+1} ≤ q̂) ≥ 1 - α.
 *
 *   Emitindo apenas quando s ≤ q̂, a taxa de erro fica ≤ α por construção.
 *   Não é heurística: é cobertura marginal garantida em amostra finita.
 *
 * MONDRIAN: calibra-se por perfil de domínio (o UROBOROS já tem perfis).
 * Isso troca cobertura marginal por cobertura CONDICIONAL ao domínio, que é
 * o que importa — α=0.1 global não serve se física tem 2% de erro e
 * jurisprudência tem 30%.
 *
 * Escore de não-conformidade usado (composto, tudo em [0,∞), menor = melhor):
 *     s = a·(1-p_BP) + b·H̃_sem + c·(1 - N_orig/N_fam) + d·1[verificador silente]
 */

const fs = require('fs');
const path = require('path');

class Conformal {
  constructor({ alpha = 0.10, minCal = 30, file = null } = {}) {
    this.alpha = alpha;
    this.minCal = minCal;
    this.file = file;
    this.cal = new Map();               // domínio -> [scores de exemplos CORRETOS]
    this.errs = new Map();              // domínio -> [scores de exemplos ERRADOS] (diagnóstico)
    if (file && fs.existsSync(file)) this.load();
  }

  static score(m, w = { p: 1.0, H: 0.8, orig: 0.6, ver: 0.5 }) {
    const pBP = Math.min(1, Math.max(0, m.p ?? 0.5));
    const H = Math.min(1, Math.max(0, m.Hnorm ?? 1));
    const origFrac = Math.min(1, Math.max(0, (m.nOrigins ?? 0) / Math.max(1, m.nFamilies ?? 1)));
    const verSilent = m.verifierChecked ? 0 : 1;
    const s = w.p * (1 - pBP) + w.H * H + w.orig * (1 - origFrac) + w.ver * verSilent;
    return s / (w.p + w.H + w.orig + w.ver);
  }

  observe(domain, score, correct) {
    const d = domain || '_';
    const bag = correct ? this.cal : this.errs;
    if (!bag.has(d)) bag.set(d, []);
    const arr = bag.get(d);
    arr.push(score);
    if (arr.length > 5000) arr.shift();
    return this;
  }

  /** q̂ do domínio; cai para o pool global se não houver amostras suficientes. */
  qhat(domain, alpha = this.alpha) {
    let arr = this.cal.get(domain || '_') || [];
    let scope = domain || '_';
    if (arr.length < this.minCal) { arr = [...this.cal.values()].flat(); scope = 'global'; }
    if (arr.length < 5) return { q: 0.35, n: arr.length, scope: 'default', calibrated: false };
    const s = [...arr].sort((a, b) => a - b);
    const n = s.length;
    const k = Math.ceil((n + 1) * (1 - alpha));
    const q = k > n ? s[n - 1] : s[k - 1];
    return { q, n, scope, calibrated: true };
  }

  /**
   * emitir | ressalvar | abster
   * A faixa intermediária (entre q̂ de α e de α/3) é onde vale escalar para
   * mais células ou para recuperação externa, em vez de calar.
   */
  decide(domain, score) {
    // q̂ é o quantil (1-α): α menor ⇒ quantil maior ⇒ limiar MAIS PERMISSIVO.
    // Emitir usa α (erro ≤ α garantido). Ressalvar estende até α/4.
    const hard = this.qhat(domain, this.alpha);
    const soft = this.qhat(domain, Math.max(0.005, this.alpha / 4));
    let action = 'abster';
    if (score <= hard.q) action = 'emitir';
    else if (score <= soft.q) action = 'ressalvar';
    return { action, score: +score.toFixed(4), qEmitir: +hard.q.toFixed(4), qRessalvar: +soft.q.toFixed(4), n: hard.n, scope: hard.scope, calibrated: hard.calibrated };
  }

  /** Cobertura empírica observada — sanidade da calibração. */
  audit(domain) {
    const d = domain || '_';
    const ok = this.cal.get(d) || [], bad = this.errs.get(d) || [];
    const { q } = this.qhat(d);
    const emittedOk = ok.filter(s => s <= q).length;
    const emittedBad = bad.filter(s => s <= q).length;
    const emitted = emittedOk + emittedBad;
    return {
      dominio: d, nCorretos: ok.length, nErrados: bad.length, qhat: +q.toFixed(4),
      coberturaCorretos: ok.length ? emittedOk / ok.length : null,  // deve ≈ 1-α (a garantia)
      coberturaAlvo: 1 - this.alpha,
      taxaEmissao: emitted / Math.max(1, ok.length + bad.length),
      precisaoEmitida: emitted ? emittedOk / emitted : null
    };
  }

  save(file = this.file) {
    if (!file) return;
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify({ alpha: this.alpha, cal: [...this.cal], errs: [...this.errs] }));
  }

  load(file = this.file) {
    const j = JSON.parse(fs.readFileSync(file, 'utf8'));
    this.cal = new Map(j.cal || []);
    this.errs = new Map(j.errs || []);
    if (typeof j.alpha === 'number') this.alpha = j.alpha;
    return this;
  }
}

module.exports = { Conformal };

};
__mods['verifier'] = function (module, exports, __req) {
/* UROBOROS · URB2 — Polo V estendido (âncora determinística)
 *
 * Toda alegação redutível a computação DEVE ser computada, nunca votada.
 * O verificador é o único nó do grafo com direito de veto (L = -L_MAX):
 * é o que impede o cluster de convergir suavemente para um erro elegante.
 *
 * Sem eval(). Parser recursivo-descendente próprio.
 */

/* ---------------- 1. aritmética ---------------- */

const FUNCS = {
  sqrt: Math.sqrt, abs: Math.abs, ln: Math.log, log: Math.log10, log2: Math.log2,
  exp: Math.exp, sin: Math.sin, cos: Math.cos, tan: Math.tan,
  asin: Math.asin, acos: Math.acos, atan: Math.atan,
  sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
  floor: Math.floor, ceil: Math.ceil, round: Math.round
};
const CONSTS = { pi: Math.PI, e: Math.E, c: 299792458, G: 6.674e-11, h: 6.62607015e-34, hbar: 1.054571817e-34, k_B: 1.380649e-23, N_A: 6.02214076e23 };

function evalExpr(src) {
  let i = 0;
  const s = String(src).replace(/\s+/g, '').replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/\^/g, '**');
  const peek = () => s[i];
  const eat = ch => { if (s[i] === ch) { i++; return true; } return false; };

  function expr() { let v = term(); for (;;) { if (eat('+')) v += term(); else if (eat('-')) v -= term(); else return v; } }
  function term() { let v = unary(); for (;;) { if (s.startsWith('**', i)) break; if (eat('*')) v *= unary(); else if (eat('/')) v /= unary(); else if (eat('%')) v %= unary(); else return v; } return v; }
  function unary() { if (eat('-')) return -unary(); if (eat('+')) return unary(); return power(); }
  function power() { const b = atom(); if (s.startsWith('**', i)) { i += 2; return Math.pow(b, unary()); } return b; }
  function atom() {
    if (eat('(')) { const v = expr(); if (!eat(')')) throw new Error('parêntese'); return v; }
    const m = /^[A-Za-z_][A-Za-z0-9_]*/.exec(s.slice(i));
    if (m) {
      const name = m[0]; i += name.length;
      if (eat('(')) { const a = expr(); if (!eat(')')) throw new Error('parêntese'); const f = FUNCS[name]; if (!f) throw new Error(`função ${name}`); return f(a); }
      if (name in CONSTS) return CONSTS[name];
      throw new Error(`símbolo ${name}`);
    }
    const num = /^\d+(\.\d+)?([eE][+-]?\d+)?/.exec(s.slice(i));
    if (num) { i += num[0].length; return parseFloat(num[0]); }
    throw new Error(`token em ${i}`);
  }

  const v = expr();
  if (i !== s.length) throw new Error('sobra de tokens');
  if (!Number.isFinite(v)) throw new Error('não finito');
  return v;
}

/** Encontra e checa igualdades numéricas em texto livre: "12*7 = 82" -> falso. */
function checkArithmetic(text, relTol = 1e-6) {
  const out = [];
  const re = /([0-9()][0-9\s+\-*/^().eE]{1,80}?)\s*(?:=|≈|é igual a|equals?)\s*(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g;
  let m;
  while ((m = re.exec(text))) {
    const lhs = m[1].trim(), rhs = parseFloat(m[2]);
    if (!/[+\-*/^]/.test(lhs)) continue;
    let got;
    try { got = evalExpr(lhs); } catch { continue; }
    const ok = Math.abs(got - rhs) <= Math.max(relTol * Math.abs(got), 1e-9);
    out.push({ tipo: 'aritmetica', expr: `${lhs} = ${m[2]}`, esperado: got, obtido: rhs, ok });
  }
  return out;
}

/* ---------------- 2. análise dimensional ---------------- */
/* base: [m, kg, s, A, K, mol, cd] */
const DIM = {
  m: [1,0,0,0,0,0,0], km:[1,0,0,0,0,0,0], cm:[1,0,0,0,0,0,0], mm:[1,0,0,0,0,0,0],
  kg:[0,1,0,0,0,0,0], g:[0,1,0,0,0,0,0], t:[0,1,0,0,0,0,0],
  s:[0,0,1,0,0,0,0], ms:[0,0,1,0,0,0,0], min:[0,0,1,0,0,0,0], h:[0,0,1,0,0,0,0],
  A:[0,0,0,1,0,0,0], K:[0,0,0,0,1,0,0], mol:[0,0,0,0,0,1,0],
  N:[1,1,-2,0,0,0,0], J:[2,1,-2,0,0,0,0], W:[2,1,-3,0,0,0,0],
  Pa:[-1,1,-2,0,0,0,0], V:[2,1,-3,-1,0,0,0], C:[0,0,1,1,0,0,0],
  Ohm:[2,1,-3,-2,0,0,0], F:[-2,-1,4,2,0,0,0], T:[0,1,-2,-1,0,0,0], Hz:[0,0,-1,0,0,0,0]
};
const SCALE = { km:1e3, cm:1e-2, mm:1e-3, g:1e-3, t:1e3, ms:1e-3, min:60, h:3600 };

function dimOf(unit) {
  const parts = String(unit).split(/[·*\s]+/).filter(Boolean);
  const d = [0,0,0,0,0,0,0]; let f = 1;
  for (const p of parts) {
    const m = /^([A-Za-z]+)(?:\^?(-?\d+))?$/.exec(p);
    if (!m) return null;
    const base = DIM[m[1]]; if (!base) return null;
    const e = m[2] ? parseInt(m[2], 10) : 1;
    for (let k = 0; k < 7; k++) d[k] += base[k] * e;
    f *= Math.pow(SCALE[m[1]] ?? 1, e);
  }
  return { dim: d, factor: f };
}
const sameDim = (a, b) => a && b && a.dim.every((x, i) => x === b.dim[i]);

/** "A energia é 5 N" -> incompatível com J. */
function checkUnits(pairs) {
  return pairs.map(({ grandeza, valor, unidade, unidadeEsperada }) => {
    const a = dimOf(unidade), b = dimOf(unidadeEsperada);
    return { tipo: 'dimensional', grandeza, valor, unidade, unidadeEsperada, ok: sameDim(a, b) };
  });
}

/* ---------------- 3. datas e faixas ---------------- */

function checkDates(text) {
  const out = [];
  const re = /(\d{4})\s*(?:-|–|até|a)\s*(\d{4})/g;
  let m;
  while ((m = re.exec(text))) {
    const a = +m[1], b = +m[2];
    out.push({ tipo: 'intervalo_temporal', trecho: m[0], ok: b >= a && a > 1000 && b < 2200 });
  }
  return out;
}

function checkRanges(claims, ranges) {
  return claims.map(c => {
    const r = ranges[c.grandeza];
    if (!r) return { tipo: 'faixa', ...c, ok: null };
    return { tipo: 'faixa', ...c, ok: c.valor >= r[0] && c.valor <= r[1], faixa: r };
  });
}

/* ---------------- 4. execução ---------------- */

/**
 * Roda tudo o que der. Retorna {checks, veto, llr} pronto para o grafo de crença.
 * llr = -L_MAX se algo determinístico falhou; +ganho por check aprovado; 0 se silente.
 */
function verify(text, { units = [], ranges = null, numeric = [], L_MAX = 12 } = {}) {
  const checks = [
    ...checkArithmetic(text),
    ...checkDates(text),
    ...(units.length ? checkUnits(units) : []),
    ...(ranges && numeric.length ? checkRanges(numeric, ranges) : [])
  ];
  const decided = checks.filter(c => c.ok !== null);
  const failed = decided.filter(c => c.ok === false);
  if (failed.length) return { checks, veto: true, llr: -L_MAX, checked: true, failed };
  const llr = Math.min(4, 1.4 * decided.length);   // confirmação determinística vale, mas não é ilimitada
  return { checks, veto: false, llr, checked: decided.length > 0, failed: [] };
}

module.exports = { evalExpr, checkArithmetic, checkUnits, checkDates, checkRanges, dimOf, verify, DIM, CONSTS };

};
__mods['urb2'] = function (module, exports, __req) {
/* UROBOROS · URB2 — telegrama v2
 *
 * Diferença essencial em relação ao URB1: o cabeçalho carrega PROVENIÊNCIA.
 *
 *   off  tam  campo
 *   ---  ---  --------------------------------------------------------
 *    0    4   MAGIC "URB2"
 *    4    1   versão (0x02)
 *    5    1   tipo   (0x10 alegação · 0x20 réplica · 0x30 veto · 0x40 consenso)
 *    6    1   célula emissora
 *    7    1   saltos percorridos
 *    8    4   claimId  (FNV-1a do texto canônico) — reformulações colidem aqui
 *   12    2   LLR em ponto fixo Q8.8  (int16, ×256)
 *   14    2   comprimento da originMask em bytes  (m)
 *   16    2   comprimento do payload              (n)
 *   18    m   originMask big-endian — bitmap das células que tocaram a alegação
 *   18+m  n   payload UTF-8
 *   18+m+n 2  CRC16-CCITT (0x1021, init 0xFFFF) sobre tudo que veio antes
 *
 * A originMask virou de largura VARIÁVEL na v3 do cabeçalho: os 4 bytes fixos
 * limitavam o cluster a 32 células, e acima disso `1 << i` envolvia em silêncio
 * — a célula 32 se apresentava como a 0 e o filtro extrínseco parava de
 * reconhecer o eco. Com 256 células a máscara ocupa 32 bytes.
 *
 * originMask é o que torna a regra R1 (informação extrínseca) executável no
 * fio, e não só na memória do orquestrador: qualquer nó pode decidir sozinho
 * se um telegrama é evidência nova ou eco do que ele mesmo emitiu.
 */

const MAGIC = 'URB2';
const VER = 0x03;
const TYPE = { CLAIM: 0x10, REPLY: 0x20, VETO: 0x30, CONSENSUS: 0x40 };
const HDR = 18;
const Msk = __req('mascara');

function crc16(buf) {
  let crc = 0xffff;
  for (const b of buf) {
    crc ^= b << 8;
    for (let i = 0; i < 8; i++) crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
  }
  return crc & 0xffff;
}

function encode({ type = TYPE.CLAIM, cell = 0, hops = 0, claimId = 0, originMask = 0n, llr = 0, payload = '' }) {
  const pl = Buffer.from(String(payload), 'utf8');
  const mk = Msk.paraBytes(originMask);
  const b = Buffer.alloc(HDR + mk.length + pl.length + 2);
  b.write(MAGIC, 0, 'ascii');
  b.writeUInt8(VER, 4);
  b.writeUInt8(type, 5);
  b.writeUInt8(cell & 0xff, 6);
  b.writeUInt8(hops & 0xff, 7);
  b.writeUInt32BE(claimId >>> 0, 8);
  b.writeInt16BE(Math.max(-32768, Math.min(32767, Math.round(llr * 256))), 12);
  b.writeUInt16BE(mk.length, 14);
  b.writeUInt16BE(pl.length, 16);
  mk.copy(b, HDR);
  pl.copy(b, HDR + mk.length);
  const fim = HDR + mk.length + pl.length;
  b.writeUInt16BE(crc16(b.subarray(0, fim)), fim);
  return b;
}

function decode(buf) {
  const b = Buffer.isBuffer(buf) ? buf : Buffer.from(buf, 'hex');
  if (b.length < HDR + 2) throw new Error('URB2: curto demais');
  if (b.subarray(0, 4).toString('ascii') !== MAGIC) throw new Error('URB2: magic inválido');
  const ver = b.readUInt8(4);
  if (ver !== VER) throw new Error(`URB2: versão ${ver}`);
  const m = b.readUInt16BE(14), n = b.readUInt16BE(16);
  const fim = HDR + m + n;
  if (b.length !== fim + 2) throw new Error('URB2: comprimento inconsistente');
  const want = b.readUInt16BE(fim);
  const got = crc16(b.subarray(0, fim));
  if (want !== got) throw new Error(`URB2: CRC ${got.toString(16)} != ${want.toString(16)}`);
  return {
    type: b.readUInt8(5), cell: b.readUInt8(6), hops: b.readUInt8(7),
    claimId: b.readUInt32BE(8), llr: b.readInt16BE(12) / 256,
    originMask: Msk.deBytes(b.subarray(HDR, HDR + m)),
    payload: b.subarray(HDR + m, fim).toString('utf8')
  };
}

const toHex = o => encode(o).toString('hex').toUpperCase();
const fromHex = h => decode(Buffer.from(h, 'hex'));

/** Repasse: incrementa saltos, funde a máscara e recusa ecos. */
function forward(tel, myBit, maxHops = 4) {
  if (tel.hops >= maxHops) return null;
  const bit = typeof myBit === 'bigint' ? myBit : BigInt(myBit);
  if ((tel.originMask & bit) !== 0n) return null;   // já passei por aqui: eco
  return { ...tel, hops: tel.hops + 1, originMask: tel.originMask | bit };
}

module.exports = { MAGIC, VER, TYPE, HDR, crc16, encode, decode, toHex, fromHex, forward };

};
__mods['bp'] = function (module, exports, __req) {
/* UROBOROS · URB2 — propagação de crença (belief propagation) sobre alegações
 *
 * O anel-com-cordas é, literalmente, um grafo de Tanner. Tratar cada
 * ALEGAÇÃO ATÔMICA como um bit e cada CÉLULA como um nó de verificação
 * transforma o consenso do cluster num decodificador LDPC. Toda a
 * maquinaria de decodificação iterativa se aplica — inclusive as armadilhas.
 *
 * Trabalha-se em log-razão de verossimilhança:
 *     L(c) = ln P(c verdadeira) / P(c falsa)
 *     P = σ(L) = 1/(1+e^{-L})
 *
 * TRÊS REGRAS ESTRUTURAIS, cada uma matando um modo de falha distinto:
 *
 * (R1) INFORMAÇÃO EXTRÍNSECA APENAS.
 *      Nenhuma célula recebe de volta evidência que ela mesma originou.
 *      Sem isso, um gossip em anel faz LAVAGEM DE ALUCINAÇÃO: a célula 3
 *      inventa X, X circula pelo anel, e volta à célula 3 como "três pares
 *      concordam". Confiança sobe, verdade não. Princípio turbo.
 *      Implementado com máscara de bits de origem por alegação.
 *
 * (R2) DEFLAÇÃO POR CORRELAÇÃO.
 *      LLRs de células da mesma família são somados e depois divididos por
 *      (1 + (m-1)ρ), m = nº de origens distintas naquela família. Dois
 *      Claudes concordando não são duas testemunhas.
 *
 * (R3) VETO DETERMINÍSTICO DOMINA.
 *      Uma refutação do Polo V injeta L = -L_MAX. Nenhuma quantidade de
 *      concordância entre modelos revoga aritmética.
 *
 * E o aviso teórico que justifica tudo isso:
 *      O consenso por gossip contrai a VARIÂNCIA como λ₂^T, mas o VIÉS
 *      COMPARTILHADO vive no autovetor λ₁=1 e NÃO contrai nunca. Mais
 *      rodadas de consenso deixam o cluster mais confiante numa alucinação
 *      compartilhada, não menos. Viés só sai por heterogeneidade de família
 *      e por âncora externa (verificador/recuperação).
 */

const M = __req('mascara');

const L_MAX = 12;                       // σ(12) ≈ 0.999994
const clamp = x => Math.max(-L_MAX, Math.min(L_MAX, x));
const sigmoid = x => 1 / (1 + Math.exp(-x));
const logit = p => Math.log(Math.min(1 - 1e-9, Math.max(1e-9, p)) / (1 - Math.min(1 - 1e-9, Math.max(1e-9, p))));
const popcount = M.popcount;            // BigInt: sem teto de 31 células

/**
 * Evidência bruta de uma célula sobre uma alegação.
 * @typedef {{cell:number, family:string, bit:number, llr:number, kind?:string}} Ev
 */

/**
 * Agrega evidência com deflação de família e máscara de origem.
 * @param {Ev[]} evs
 * @param {{prior?:number, w?:number[], rho?:Object<string,number>, rhoDefault?:number}} cfg
 */
function aggregate(evs, cfg = {}) {
  const prior = cfg.prior ?? 0;
  const w = cfg.w || null;
  const rhoDefault = cfg.rhoDefault ?? 0.8;

  // veto determinístico curto-circuita tudo
  const veto = evs.find(e => e.kind === 'verifier' && e.llr <= -L_MAX + 1e-9);
  if (veto) return { llr: -L_MAX, p: sigmoid(-L_MAX), mask: veto.bit, nOrigins: 1, vetoed: true };

  const byFam = new Map();
  for (const e of evs) {
    const f = e.kind === 'verifier' ? '__verifier' : e.family;
    if (!byFam.has(f)) byFam.set(f, []);
    byFam.get(f).push(e);
  }

  let total = prior, mask = M.ZERO;
  for (const [fam, list] of byFam) {
    let famMask = M.ZERO;
    for (const e of list) famMask |= e.bit;
    const m = Math.max(1, popcount(famMask));
    // verificador é ground truth: sem deflação
    const rho = fam === '__verifier' ? 0 : (cfg.rho?.[fam] ?? rhoDefault);
    const deflate = 1 / (1 + (m - 1) * rho);
    // Os pesos entram normalizados para MÉDIA 1, não soma 1. Com soma 1 cada
    // LLR era dividido por N e a evidência inteira encolhia com o tamanho do
    // cluster — quanto mais células, menos o grafo acreditava em qualquer coisa.
    let s = 0;
    for (const e of list) s += (w ? (w[e.cell] ?? 1) : 1) * clamp(e.llr);
    total += deflate * s;
    mask |= famMask;
  }
  const llr = clamp(total);
  return { llr, p: sigmoid(llr), mask, nOrigins: M.origens(mask), vetoed: false };
}

/** (R1) mensagem para uma célula-alvo: exclui tudo que ela originou. */
function extrinsic(evs, targetBit, cfg = {}) {
  return aggregate(evs.filter(e => (e.bit & targetBit) === M.ZERO), cfg);
}

/**
 * Grafo de alegações. Uma alegação é identificada por um hash canônico do
 * texto normalizado, de modo que reformulações colidam no mesmo nó.
 */
class ClaimGraph {
  constructor(cfg = {}) {
    this.cfg = { rhoDefault: 0.8, damping: 0.35, ...cfg };
    this.claims = new Map();          // id -> {id, text, evs:Ev[], llr, mask, history:[]}
  }

  static id(text) {
    const s = String(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s.,+\-]/g, ' ').replace(/\s+/g, ' ').trim();
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return h >>> 0;
  }

  add(text, ev) {
    const id = ClaimGraph.id(text);
    if (!this.claims.has(id)) this.claims.set(id, { id, text, evs: [], llr: this.cfg.prior ?? 0, mask: M.ZERO, history: [] });
    const c = this.claims.get(id);
    c.evs.push(ev);
    c.mask |= ev.bit;
    return c;
  }

  /** Uma rodada síncrona com amortecimento (evita superconfiança em laços). */
  step() {
    const a = this.cfg.damping;
    for (const c of this.claims.values()) {
      const r = aggregate(c.evs, this.cfg);
      c.llr = clamp((1 - a) * c.llr + a * r.llr);
      if (r.vetoed) c.llr = -L_MAX;
      c.p = sigmoid(c.llr);
      c.nOrigins = r.nOrigins;
      c.vetoed = r.vetoed;
      c.history.push(c.llr);
    }
    return this;
  }

  /** Roda T passos ou até |ΔL|max < tol. Retorna nº de passos efetivos. */
  run(T = 6, tol = 1e-3) {
    for (let t = 0; t < T; t++) {
      const prev = [...this.claims.values()].map(c => c.llr);
      this.step();
      const now = [...this.claims.values()].map(c => c.llr);
      const d = Math.max(0, ...now.map((x, i) => Math.abs(x - prev[i])));
      if (d < tol) return t + 1;
    }
    return T;
  }

  /** Alegações aceitas, ordenadas por confiança. */
  accepted(threshold) {
    return [...this.claims.values()]
      .filter(c => !c.vetoed && c.p >= threshold)
      .sort((x, y) => y.llr - x.llr);
  }

  rejected(threshold) {
    return [...this.claims.values()].filter(c => c.vetoed || c.p < threshold);
  }

  snapshot() {
    return [...this.claims.values()].map(c => ({
      id: c.id, text: c.text, llr: +c.llr.toFixed(3), p: +sigmoid(c.llr).toFixed(4),
      origens: c.nOrigins ?? M.origens(c.mask), vetado: !!c.vetoed
    }));
  }
}

/** Converte confiança auto-declarada (0..1) em LLR, com teto anti-bravata. */
function confToLLR(conf, capP = 0.93) {
  const p = Math.min(capP, Math.max(1 - capP, Number(conf) || 0.5));
  return logit(p);
}

module.exports = { L_MAX, clamp, sigmoid, logit, popcount, origens: M.origens, aggregate, extrinsic, ClaimGraph, confToLLR };

};
__mods['ancora'] = function (module, exports, __req) {
/* UROBOROS · URB2 — camada de âncora externa
 *
 * ═══ O PONTO ARQUITETURAL QUE INVERTE A INTUIÇÃO ═══
 *
 * Recuperação injetada como CONTEXTO **aumenta** ρ. Se as 16 células recebem
 * a mesma passagem no prompt, elas passam a condicionar na mesma informação:
 * a dispersão cai, a "confiança do consenso" sobe, e o viés da passagem entra
 * inteiro no viés compartilhado b. RAG-como-contexto é o modo de falha da §3
 * amplificado, não a cura dele.
 *
 * A âncora só reduz b se entrar como VERIFICAÇÃO POSTERIOR, no nível da
 * alegação, fora do span gerado pelas células. É onde o Polo V já opera —
 * e por isso a âncora é uma extensão do Polo V, não uma etapa de L0.
 *
 * ═══ CALIBRAÇÃO DO LLR ═══
 *
 * Alegação diz v; a fonte diz μ ± σ. Com z = |v−μ|/σ_ef:
 *
 *   verdadeira → z ~ N(0,1)          densidade φ(z)
 *   falsa      → z difuso em [0,Z]   densidade ≈ 1/Z
 *
 *   L = ln( Z·φ(z) ) = ln Z − ln√(2π) − z²/2
 *
 * Com Z = 20: L(0) = +2,08 · L(2) = +0,08 · L(3) = −2,42 · L(5) = −10,4.
 * Concordância dentro de 1σ vale ~1,6 nats; discordância a 5σ é veto de fato.
 * Não é limiar arbitrário — é a razão de verossimilhança, a mesma álgebra do
 * resto do grafo.
 *
 * ═══ TENSÃO NÃO É ERRO ═══
 *
 * Se a tabela traz Planck 67,36±0,54 e SH0ES 73,04±1,04, uma alegação de 73,0
 * está certa em relação a uma medida legítima. A âncora pontua contra a
 * MELHOR fonte, marca `tensao` quando as fontes discordam entre si acima de
 * 3σ, e ATENUA o LLR nesse caso — porque aí "qual fonte" é a questão em
 * disputa, e a âncora não tem autoridade para resolvê-la.
 */

const fs = require('fs');
const path = require('path');

/* Tipos de fonte: ρ é a correlação a priori com as famílias de LLM.
 * Consulta determinística a catálogo tem ρ≈0 — é o que dá poder à âncora.
 * Texto exige juiz LLM para julgar implicação, o que reintroduz correlação. */
const TIPOS = {
  estruturado: { rho: 0.00, teto: 4.0, podeVetar: true },
  catalogo:    { rho: 0.02, teto: 3.5, podeVetar: true },
  texto:       { rho: 0.18, teto: 2.0, podeVetar: false }
};

const Z_DIFUSO = 20;
const LN_SQRT_2PI = Math.log(Math.sqrt(2 * Math.PI));

function llrGaussiano(z, Z = Z_DIFUSO) {
  return Math.log(Z) - LN_SQRT_2PI - (z * z) / 2;
}

/* ---------- unidades: dimensão + fator, com conversão real ----------
 * Só checar compatibilidade não basta: "a idade do universo é 6000 anos"
 * tem unidade de tempo legítima e precisa ser CONVERTIDA para Gyr antes de
 * virar z, senão a alegação mais errada possível passa despercebida. */
const UNID = {
  'km/s/mpc': { dim: 'H', f: 1 }, 'kms-1mpc-1': { dim: 'H', f: 1 }, 'kms/mpc': { dim: 'H', f: 1 },
  gyr: { dim: 'T', f: 1 }, ga: { dim: 'T', f: 1 }, myr: { dim: 'T', f: 1e-3 },
  ano: { dim: 'T', f: 1e-9 }, anos: { dim: 'T', f: 1e-9 }, yr: { dim: 'T', f: 1e-9 }, year: { dim: 'T', f: 1e-9 }, years: { dim: 'T', f: 1e-9 },
  s: { dim: 'T', f: 1 / 3.1556952e16 },
  mpc: { dim: 'L', f: 1 }, kpc: { dim: 'L', f: 1e-3 }, pc: { dim: 'L', f: 1e-6 }, gpc: { dim: 'L', f: 1e3 },
  k: { dim: 'K', f: 1 }, kelvin: { dim: 'K', f: 1 },
  'm/s': { dim: 'V', f: 1 }, 'kg': { dim: 'M', f: 1 }, 'c': { dim: 'Q', f: 1 },
  'j/k': { dim: 'JK', f: 1 }, 'js': { dim: 'JS', f: 1 }, '1/mol': { dim: 'MOL', f: 1 },
  'm^3kg^-1s^-2': { dim: 'G', f: 1 }, 'm3kg-1s-2': { dim: 'G', f: 1 },
  'wm^-2k^-4': { dim: 'SB', f: 1 },
  '1': { dim: '1', f: 1 }, '': { dim: '?', f: 1 }
};
const normUnid = u => String(u || '').toLowerCase()
  .replace(/·/g, '').replace(/⁻/g, '-').replace(/¹/g, '1').replace(/²/g, '2').replace(/³/g, '3').replace(/⁴/g, '4')
  .replace(/\s+/g, '').trim();

function unidInfo(u) { return UNID[normUnid(u)] || null; }

/** Converte valor da unidade da alegação para a unidade da tabela.
 *  null = dimensões incompatíveis (ou desconhecidas de ambos os lados). */
function converter(valor, uClaim, uTab) {
  const a = unidInfo(uClaim), b = unidInfo(uTab);
  if (!b) return valor;                       // tabela sem unidade reconhecida: aceita cru
  if (!normUnid(uClaim) || !a || a.dim === '?') return valor;   // alegação sem unidade: assume a da tabela
  if (a.dim !== b.dim) return null;
  return valor * a.f / b.f;
}
const compativel = (uClaim, uTab) => converter(1, uClaim, uTab) !== null;

/* ---------- extração de (grandeza, valor, unidade) ---------- */
// (?<![\p{L}\d]) impede que o "0" de "H0" ou "t0" seja lido como o valor:
// "constante de Hubble H0 vale 55" extraía H0 = 0, e o veto acertava pelo motivo errado.
const NUM = String.raw`(?<![\p{L}\d])(-?\d[\d.,]*(?:\s*[×x*]\s*10\s*\^?\s*-?\d+|\s*[eE][+-]?\d+)?)`;

function parseNum(s) {
  let t = String(s).replace(/\s/g, '');
  const sci = /^(-?[\d.,]+)(?:[×x*]10\^?|[eE])([+-]?\d+)$/.exec(t);
  const dec = x => (x.includes(',') && !x.includes('.') ? x.replace(',', '.') : x.replace(/,/g, ''));
  const v = sci ? parseFloat(dec(sci[1])) * Math.pow(10, parseInt(sci[2], 10)) : parseFloat(dec(t));
  return Number.isFinite(v) ? v : null;
}

const esc = x => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Captura só o que parece unidade. Prosa depois do número vira string vazia. */
const UNID_RE = /^\s*(km\s*\/?\s*s\s*\/?\s*Mpc|km\s*s-1\s*Mpc-1|Gyr|Myr|Ga|anos?|years?|yr|Gpc|Mpc|kpc|pc|K|kelvin|eV|m\s*\/\s*s|m\^?3\s*kg\^?-1\s*s\^?-2|J\s*\/?\s*K|J\s*s|W\s*m\^?-2\s*K\^?-4|1\s*\/\s*mol|kg|m|s|C)(?![\p{L}])/iu;
function capturarUnidade(resto) {
  const m = UNID_RE.exec(resto);
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
}

class Tabela {
  constructor(file) {
    this.file = file || path.join(__dirname, '..', 'data', 'tabela.json');
    // TABELA_EMBUTIDA é definida na build de arquivo único; em disco, lê o JSON
    let j;
    if (typeof TABELA_EMBUTIDA !== 'undefined' && !fs.existsSync(this.file)) j = TABELA_EMBUTIDA;
    else j = JSON.parse(fs.readFileSync(this.file, 'utf8'));
    this.grandezas = j.grandezas || {};
    this.aliases = j.aliases || {};
    // índice alias -> chave canônica, do mais longo para o mais curto
    this.idx = [];
    for (const [chave, lista] of Object.entries(this.aliases))
      for (const a of [chave, ...lista]) {
        // alias puramente numérico casa DENTRO do próprio valor e injeta
        // menções fantasmas ("137" dentro de 137.0359... vira 0359...).
        if (/^[\d.,\s]+$/.test(a)) continue;
        this.idx.push({ alias: a.toLowerCase(), chave });
      }
    this.idx.sort((x, y) => y.alias.length - x.alias.length);
  }

  entradas(chave) { return (this.grandezas[chave] || []).filter(e => e.valor != null); }
  verificadas(chave) { return this.entradas(chave).filter(e => e.verificado); }
  naoVerificadas() {
    return Object.entries(this.grandezas)
      .flatMap(([k, l]) => l.filter(e => !e.verificado).map(e => ({ grandeza: k, ...e })));
  }

  /** Encontra menções (grandeza, valor, unidade) no texto de uma alegação. */
  extrair(texto) {
    const t = String(texto);
    const achados = [];
    const usados = [];
    const numsUsados = [];
    for (const { alias, chave } of this.idx) {
      // fronteira de letra/dígito: sem isso o alias "G" casa dentro de "kg^-1"
      const re = new RegExp(`(?<![\\p{L}\\d])${esc(alias)}(?![\\p{L}\\d])`, 'giu');
      let m;
      while ((m = re.exec(t))) {
        const p = m.index, fim = p + m[0].length;
        if (usados.some(([a, b]) => p < b && fim > a)) continue;
        const janela = t.slice(fim, fim + 90);
        const mm = new RegExp(`^.{0,20}?${NUM}`, 'u').exec(janela);
        if (!mm) continue;
        const v = parseNum(mm[1]);
        if (v === null) continue;
        // Dedupe pelo NÚMERO, não pelo alias: "constante de Hubble H0 vale 67,4"
        // casa dois aliases apontando para o mesmo valor, e somar os dois
        // dobraria o LLR de uma única evidência.
        const posNum = fim + mm.index + mm[0].length - mm[1].length;
        const fimNum = posNum + mm[1].length;
        // sobreposição de SPAN, não só de início: sem isso, um alias que casa
        // dentro de um número já consumido extrai a cauda dele como valor novo.
        if (numsUsados.some(([a, b]) => posNum < b && fimNum > a)) continue;
        numsUsados.push([posNum, fimNum]);
        const unidade = capturarUnidade(janela.slice(mm.index + mm[0].length));
        achados.push({ grandeza: chave, valor: v, unidade, trecho: t.slice(p, fimNum + unidade.length + 1).trim() });
        usados.push([p, fim]);
      }
    }
    return achados;
  }
}

/**
 * Pontua uma menção contra todas as entradas verificadas da grandeza.
 * @returns {{llr, z, fonte, tensao, veto, detalhe}}
 */
function pontuar(mencao, tabela, { tipo = 'estruturado', Z = Z_DIFUSO } = {}) {
  const cfg = TIPOS[tipo] || TIPOS.estruturado;
  const verif = tabela.verificadas(mencao.grandeza);
  if (!verif.length) {
    const todas = tabela.entradas(mencao.grandeza);
    return { llr: 0, z: null, fonte: null, tensao: false, veto: false,
             detalhe: todas.length ? 'entrada existe mas nao verificada — abstem' : 'grandeza ausente da tabela' };
  }

  const cands = verif
    .map(e => ({ e, v: converter(mencao.valor, mencao.unidade, e.unidade) }))
    .filter(x => x.v !== null)
    .map(({ e, v }) => {
      // σ efetivo: incerteza publicada + resolução implícita da alegação
      const sigPub = e.exato ? Math.abs(e.valor) * 1e-12 : (e.sigma || Math.abs(e.valor) * 1e-3);
      const sigAleg = Math.abs(v) * resolucao(mencao.valor);
      const sig = Math.max(1e-30, Math.hypot(sigPub, sigAleg));
      return { e, v, z: Math.abs(v - e.valor) / sig, sig };
    })
    .sort((a, b) => a.z - b.z);

  if (!cands.length) return { llr: 0, z: null, fonte: null, tensao: false, veto: false, detalhe: 'unidade incompativel' };

  const best = cands[0];
  // fontes mutuamente inconsistentes? (tensão real, ex.: H0)
  let tensao = false;
  for (let i = 0; i < verif.length && !tensao; i++)
    for (let j = i + 1; j < verif.length; j++) {
      const si = verif[i].sigma || 0, sj = verif[j].sigma || 0;
      if (Math.abs(verif[i].valor - verif[j].valor) / Math.max(1e-30, Math.hypot(si, sj)) > 3) { tensao = true; break; }
    }

  // Tensão só atenua se a alegação for plausível sob ALGUMA fonte concorrente.
  // Um valor errado para todas as fontes não se beneficia da disputa entre elas.
  const naDisputa = tensao && best.z <= 3;
  let llr = llrGaussiano(best.z, Z);
  if (naDisputa) llr = Math.min(llr, 0.8);   // em tensão real, não afirma forte
  llr = Math.max(-cfg.teto * 3, Math.min(cfg.teto, llr));
  const veto = cfg.podeVetar && !naDisputa && best.z > 5;

  return {
    llr: veto ? -Infinity : llr,
    z: +best.z.toFixed(3),
    fonte: best.e.fonte,
    rotulo: best.e.rotulo || null,
    tensao, naDisputa,
    veto,
    detalhe: `${mencao.grandeza} = ${+best.v.toPrecision(6)} ${best.e.unidade} vs ${best.e.valor} ± ${best.e.sigma} (${best.e.fonte})`
  };
}

/** Resolução implícita: "67,4" carrega ~0,05 de incerteza; "67" carrega ~0,5. */
function resolucao(v) {
  const s = String(Math.abs(v));
  const dec = s.includes('.') ? s.split('.')[1].length : 0;
  const mag = Math.floor(Math.log10(Math.abs(v) || 1));
  const passo = Math.pow(10, -dec) / 2;
  return Math.abs(v) > 0 ? passo / Math.abs(v) : 1e-3;
}

/* ---------- interface de âncora ---------- */
class Ancora {
  /**
   * @param fontes lista de {id, tipo, verificar(claimTexto) -> Promise<{llr, detalhe, veto}>}
   *               A tabela local é registrada automaticamente.
   */
  constructor({ tabela = null, fontes = [], L_MAX = 12 } = {}) {
    this.tabela = tabela || new Tabela();
    this.fontes = fontes;
    this.L_MAX = L_MAX;
  }

  /** Verificação local, síncrona, sem rede. É a âncora de ρ = 0. */
  local(claimTexto) {
    const mencoes = this.tabela.extrair(claimTexto);
    if (!mencoes.length) return null;
    const res = mencoes.map(m => ({ mencao: m, ...pontuar(m, this.tabela) })).filter(r => r.llr !== 0 || r.veto);
    if (!res.length) return null;
    if (res.some(r => r.veto)) {
      const v = res.find(r => r.veto);
      return { llr: -this.L_MAX, veto: true, tensao: false, fonte: v.fonte, detalhe: v.detalhe, mencoes: res };
    }
    const llr = res.reduce((s, r) => s + r.llr, 0);
    return {
      llr: Math.max(-this.L_MAX, Math.min(this.L_MAX, llr)),
      veto: false,
      tensao: res.some(r => r.tensao),
      fonte: res[0].fonte,
      detalhe: res.map(r => r.detalhe).join(' · '),
      mencoes: res
    };
  }

  /** Evidência pronta para o grafo de crença. `bit` fora do espaço das células. */
  async evidencia(claimTexto, { bit = 1 << 30, usarRede = false } = {}) {
    const out = [];
    const loc = this.local(claimTexto);
    if (loc) out.push({ cell: 254, family: '__ancora:tabela', bit, llr: loc.llr, kind: loc.veto ? 'verifier' : 'ancora', meta: loc });

    if (usarRede) {
      for (const f of this.fontes) {
        try {
          const r = await f.verificar(claimTexto);
          if (r && Number.isFinite(r.llr) && r.llr !== 0)
            out.push({ cell: 253, family: `__ancora:${f.id}`, bit: bit << 1, llr: r.llr, kind: 'ancora', meta: r });
        } catch { /* fonte fora do ar não invalida as outras */ }
      }
    }
    return out;
  }
}

module.exports = { Ancora, Tabela, pontuar, llrGaussiano, TIPOS, parseNum, resolucao, compativel, converter, capturarUnidade };

};
__mods['conectores'] = function (module, exports, __req) {
/* UROBOROS · URB2 — conectores de âncora em rede
 *
 * REGRA DE OURO: estes conectores são chamados em L2 (verificação de
 * alegação), NUNCA em L0 (contexto do prompt). Injetar a mesma passagem
 * recuperada nas N células eleva ρ e colapsa N_eff — medido: ρ_inter
 * 0,09 → 0,50 e N_eff 6,0 → 1,9 com peso de contexto 0,45.
 *
 * Consulta a catálogo estruturado (SIMBAD, Gaia, VizieR) devolve NÚMERO, e a
 * comparação é aritmética: ρ ≈ 0 com todas as famílias de LLM, que é
 * exatamente o que ataca o viés compartilhado. Texto (arXiv) exige juiz para
 * julgar implicação, o que reintroduz correlação — por isso tipo 'texto' tem
 * ρ = 0,18, teto de LLR menor e NÃO pode vetar.
 *
 * SEGURANÇA: o conteúdo recuperado é DADO, nunca instrução. Nada que vier de
 * um catálogo ou de um abstract altera o comportamento do pipeline; só entra
 * como valor a ser comparado.
 *
 * Não testável offline. Todos usam apenas fetch global (Node ≥ 18).
 */

const { llrGaussiano, TIPOS } = __req('ancora');

const UA = { 'user-agent': 'UROBOROS-URB2/2.2 (+contato)' };

async function getJSON(url, timeoutMs = 15000) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const r = await fetch(url, { headers: UA, signal: ac.signal });
    if (!r.ok) throw new Error(`${r.status}`);
    return await r.json();
  } finally { clearTimeout(t); }
}
async function getText(url, timeoutMs = 15000) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const r = await fetch(url, { headers: UA, signal: ac.signal });
    if (!r.ok) throw new Error(`${r.status}`);
    return await r.text();
  } finally { clearTimeout(t); }
}

/* ---------- SIMBAD (TAP/ADQL) ---------- */
const SIMBAD_TAP = 'https://simbad.cds.unistra.fr/simbad/sim-tap/sync';

function simbadURL(adql) {
  const p = new URLSearchParams({ request: 'doQuery', lang: 'adql', format: 'json', maxrec: '20', query: adql });
  return `${SIMBAD_TAP}?${p}`;
}

/** Coordenadas, tipo e magnitude de um objeto nomeado. */
async function simbadObjeto(nome) {
  const safe = String(nome).replace(/'/g, "''").slice(0, 80);
  const adql = `SELECT TOP 1 b.main_id, b.ra, b.dec, b.otype_txt, b.plx_value, b.plx_err, b.rvz_redshift
                FROM basic AS b JOIN ident AS i ON b.oid = i.oidref
                WHERE i.id = '${safe}'`;
  const j = await getJSON(simbadURL(adql));
  const d = j?.data?.[0];
  if (!d) return null;
  const cols = (j.metadata || []).map(m => m.name);
  const o = Object.fromEntries(cols.map((c, k) => [c, d[k]]));
  return { main_id: o.main_id, ra: o.ra, dec: o.dec, tipo: o.otype_txt, paralaxe: o.plx_value, paralaxeErr: o.plx_err, z: o.rvz_redshift };
}

/* ---------- Gaia (ESA TAP) ---------- */
const GAIA_TAP = 'https://gea.esac.esa.int/tap-server/tap/sync';

async function gaiaCone(ra, dec, raioArcsec = 5, limite = 5) {
  const r = raioArcsec / 3600;
  const adql = `SELECT TOP ${limite} source_id, ra, dec, parallax, parallax_error, phot_g_mean_mag
                FROM gaiadr3.gaia_source
                WHERE 1=CONTAINS(POINT('ICRS',ra,dec), CIRCLE('ICRS',${ra},${dec},${r}))
                ORDER BY phot_g_mean_mag ASC`;
  const p = new URLSearchParams({ REQUEST: 'doQuery', LANG: 'ADQL', FORMAT: 'json', QUERY: adql });
  const j = await getJSON(`${GAIA_TAP}?${p}`, 25000);
  const cols = (j.metadata || []).map(m => m.name);
  return (j.data || []).map(row => Object.fromEntries(cols.map((c, k) => [c, row[k]])));
}

/* ---------- VizieR (TAP) ---------- */
const VIZIER_TAP = 'https://tapvizier.cds.unistra.fr/TAPVizieR/tap/sync';

async function vizierQuery(adql, limite = 20) {
  const p = new URLSearchParams({ request: 'doQuery', lang: 'adql', format: 'json', maxrec: String(limite), query: adql });
  const j = await getJSON(`${VIZIER_TAP}?${p}`, 25000);
  const cols = (j.metadata || []).map(m => m.name);
  return (j.data || []).map(row => Object.fromEntries(cols.map((c, k) => [c, row[k]])));
}

/* ---------- arXiv (Atom) ---------- */
async function arxivBusca(termo, max = 5) {
  const p = new URLSearchParams({ search_query: `all:${termo}`, start: '0', max_results: String(max), sortBy: 'relevance' });
  const xml = await getText(`http://export.arxiv.org/api/query?${p}`, 20000);
  const out = [];
  for (const m of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const e = m[1];
    const g = (tag) => (new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`).exec(e)?.[1] || '').replace(/\s+/g, ' ').trim();
    out.push({ id: g('id'), titulo: g('title'), resumo: g('summary').slice(0, 1200), publicado: g('published') });
  }
  return out;
}

/* ================= fábricas de fonte para a Âncora ================= */

/**
 * Fonte estruturada genérica: extrai (grandeza, valor) da alegação com o
 * extrator da tabela, consulta o catálogo, e pontua por razão de
 * verossimilhança gaussiana — a mesma álgebra da âncora local.
 *
 * @param consultar (grandeza, mencao) => Promise<{valor, sigma, fonte}|null>
 */
function fonteEstruturada({ id, tabela, consultar, tipo = 'catalogo' }) {
  const cfg = TIPOS[tipo];
  return {
    id, tipo,
    async verificar(claimTexto) {
      const mencoes = tabela.extrair(claimTexto);
      if (!mencoes.length) return null;
      let melhor = null;
      for (const m of mencoes) {
        const ref = await consultar(m.grandeza, m);
        if (!ref || ref.valor == null) continue;
        const sig = Math.max(1e-30, Math.hypot(ref.sigma || Math.abs(ref.valor) * 1e-3, Math.abs(m.valor) * 1e-3));
        const z = Math.abs(m.valor - ref.valor) / sig;
        const llr = Math.max(-cfg.teto * 3, Math.min(cfg.teto, llrGaussiano(z)));
        if (!melhor || llr < melhor.llr) melhor = { llr, z: +z.toFixed(3), fonte: ref.fonte || id, detalhe: `${m.grandeza}: ${m.valor} vs ${ref.valor}` };
      }
      if (!melhor) return null;
      return { ...melhor, veto: cfg.podeVetar && melhor.z > 5 };
    }
  };
}

/**
 * Fonte de texto: recupera, e só então julga implicação com um modelo de
 * família DIFERENTE da que originou a alegação. Teto baixo e sem veto —
 * o juiz é um LLM, logo correlacionado com as células.
 */
function fonteTexto({ id, buscar, julgar, familiaJuiz }) {
  const cfg = TIPOS.texto;
  return {
    id, tipo: 'texto', familiaJuiz,
    async verificar(claimTexto) {
      const docs = await buscar(claimTexto);
      if (!docs?.length) return null;
      const v = await julgar(claimTexto, docs);      // -> {relacao: 'implica'|'contradiz'|'neutro', ref}
      if (!v || v.relacao === 'neutro') return null;
      const llr = v.relacao === 'implica' ? cfg.teto * 0.6 : -cfg.teto;
      return { llr, veto: false, fonte: v.ref || id, detalhe: `${id}: ${v.relacao}` };
    }
  };
}

module.exports = {
  simbadObjeto, simbadURL, gaiaCone, vizierQuery, arxivBusca,
  fonteEstruturada, fonteTexto, getJSON, getText
};

};
__mods['rag'] = function (module, exports, __req) {
/* UROBOROS · URB2 — recuperação métrica (substitui o TensorRAG5D)
 *
 * ═══ POR QUE O MODELO ORIGINAL É INERTE ═══
 *
 * Com M = I + λ(q⊗q) e δ = x − q, decompondo δ em paralelo/perpendicular a q:
 *
 *     ds² = ‖δ⊥‖² + (1 + λ‖q‖²)·δ∥²
 *
 * O termo ESTICA ao longo da consulta. M é PSD, logo λ(q·δ)² ≥ 0 sempre:
 * a métrica nunca encurta distância, e portanto não existe garganta nem atalho.
 *
 * Pior: com embeddings normalizados (‖x‖=‖q‖=1), pondo t = 1 − cos,
 *
 *     ds² = 2t + λt²
 *
 * que é monótona crescente em t para todo λ > −1. O ranking é IDÊNTICO ao do
 * cosseno — medido: Kendall τ = 1,000000 para λ ∈ {0,01 … 100}. Abaixo de
 * λ = −1 a monotonicidade quebra e o ranking inverte (τ = −1).
 *
 * E toda métrica CONSTANTE é plana: ds² = δᵀMδ = ‖M^{1/2}δ‖², ou seja,
 * Euclidiana após um mapa linear fixo. Riemann ≡ 0. Sem curvatura não há
 * topologia não trivial, logo não há ponte de Einstein-Rosen.
 *
 * ═══ O QUE FUNCIONA ═══
 *
 * (1) BRANQUEAMENTO PARCIAL. Σ = VΛVᵀ dos documentos; M(α) = V Λ^(−α) Vᵀ.
 *     α = 0 → L2/cosseno · α = 1 → branqueamento total. É o botão que λ
 *     queria ser: desinfla as direções de maior variância, que são justamente
 *     as que separam domínios. Mesma ideia do w* = Σ⁻¹1 do resto do URB2.
 *
 * (2) PRÉ-FATORAÇÃO. Como M é constante, fatora-se M = RᵀR uma vez e
 *     transforma-se o corpus: x̃ = Rx. Aí ds² = ‖x̃ − q̃‖², e o custo cai de
 *     O(N·d²) por consulta para O(N·d) — o mesmo do produto interno.
 *     A contração tensorial por consulta do artigo é d× mais cara para o
 *     mesmo resultado (d = 768 → 768×).
 *
 * (3) GEODÉSICA EM GRAFO kNN. É a versão honesta do "atalho topológico":
 *     distância geodésica ao longo do corpus, que enxerga corredores de
 *     documentos interdisciplinares que a distância direta não vê.
 *
 * (4) PONTES DE GRAFO — com o bug corrigido. No código original,
 *     `retrieved_set` já tem top_k antes dos append, e o `[:top_k]` final
 *     descarta 100% das pontes: o único recurso novo do artigo nunca executa.
 */

const { jacobiEigen } = __req('estimador');

const dot = (a, b) => { let s = 0; for (let i = 0; i < a.length; i++) s += a[i] * b[i]; return s; };
const l2 = (a, b) => { let s = 0; for (let i = 0; i < a.length; i++) { const d = a[i] - b[i]; s += d * d; } return s; };
const normalizar = v => { const n = Math.hypot(...v) || 1; return v.map(x => x / n); };

/* ---------- covariância e métrica ---------- */
function covariancia(X) {
  const n = X.length, d = X[0].length;
  const mu = new Array(d).fill(0);
  for (const v of X) for (let i = 0; i < d; i++) mu[i] += v[i] / n;
  const S = Array.from({ length: d }, () => new Array(d).fill(0));
  for (const v of X) for (let i = 0; i < d; i++) for (let j = 0; j < d; j++) S[i][j] += (v[i] - mu[i]) * (v[j] - mu[j]) / Math.max(1, n - 1);
  return { S, mu };
}

/** R tal que RᵀR = M(α) = V Λ^(−α) Vᵀ. Devolve R = Λ^(−α/2) Vᵀ (aplicável a vetores). */
function fatorMetrica(S, alpha = 0.5, eps = 1e-3) {
  const { values, vectors } = jacobiEigen(S);
  const n = S.length;
  const tr = values.reduce((a, b) => a + b, 0) / n || 1;
  const R = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let k = 0; k < n; k++) {
    const lk = Math.pow(Math.max(values[k], eps * tr) / tr, -alpha / 2);
    for (let j = 0; j < n; j++) R[k][j] = lk * vectors[k][j];
  }
  return { R, espectro: values, fracaoTopo: values[0] / values.reduce((a, b) => a + b, 0) };
}
const aplicar = (R, v) => R.map(row => dot(row, v));

/* ---------- índice ---------- */
class IndiceMetrico {
  /**
   * @param opts.alpha       0 = cosseno/L2 · 1 = branqueamento total. Botão real.
   * @param opts.normalizar  L2-normaliza antes de indexar (padrão true)
   * @param opts.pontes      {i: [j,k,...]} arestas de grafo de conhecimento
   */
  constructor(vetores, textos, opts = {}) {
    this.alpha = opts.alpha ?? 0.35;
    this.norm = opts.normalizar !== false;
    this.pontes = opts.pontes || {};
    this.textos = textos || vetores.map((_, i) => `doc${i}`);
    this.meta = opts.meta || null;
    this.docs = this.norm ? vetores.map(normalizar) : vetores.map(v => v.slice());
    this.d = this.docs[0].length;

    const { S } = covariancia(this.docs);
    const f = fatorMetrica(S, this.alpha);
    this.R = f.R;
    this.espectro = f.espectro;
    this.fracaoTopo = f.fracaoTopo;         // quanto da variância está no modo dominante
    this.proj = this.docs.map(v => aplicar(this.R, v));   // pré-fatoração: O(N·d) por consulta
    this.grafo = null;
  }

  /** Constrói o grafo kNN no espaço já transformado (necessário p/ geodésica). */
  construirGrafo(k = 8) {
    const N = this.proj.length;
    const adj = Array.from({ length: N }, () => []);
    for (let i = 0; i < N; i++) {
      const viz = this.proj.map((x, j) => ({ j, w: Math.sqrt(l2(this.proj[i], x)) }))
        .filter(o => o.j !== i).sort((a, b) => a.w - b.w).slice(0, k);
      for (const o of viz) { adj[i].push([o.j, o.w]); adj[o.j].push([i, o.w]); }
    }
    // pontes declaradas entram como arestas de peso reduzido — é o "atalho",
    // sem nenhuma pretensão de buraco de minhoca
    for (const [i, alvos] of Object.entries(this.pontes)) {
      for (const j of alvos) {
        if (j === +i || j >= N) continue;
        const w = Math.sqrt(l2(this.proj[+i], this.proj[j])) * (this.pesoPonte ?? 0.35);
        adj[+i].push([j, w]); adj[j].push([+i, w]);
      }
    }
    this.grafo = adj;
    return this;
  }

  /** Distância métrica direta. */
  distancias(consulta) {
    const q = aplicar(this.R, this.norm ? normalizar(consulta) : consulta);
    return this.proj.map(x => l2(x, q));
  }

  /** Distância geodésica: Dijkstra a partir da consulta ligada aos seus k vizinhos. */
  geodesicas(consulta, k = 8) {
    if (!this.grafo) this.construirGrafo(k);
    const q = aplicar(this.R, this.norm ? normalizar(consulta) : consulta);
    const N = this.proj.length;
    const viz = this.proj.map((x, j) => ({ j, w: Math.sqrt(l2(x, q)) })).sort((a, b) => a.w - b.w).slice(0, k);
    const adj = this.grafo.map(a => a.slice());
    adj.push(viz.map(o => [o.j, o.w]));
    for (const o of viz) adj[o.j] = [...adj[o.j], [N, o.w]];

    const dist = new Array(N + 1).fill(Infinity), vis = new Array(N + 1).fill(false);
    dist[N] = 0;
    for (let it = 0; it <= N; it++) {
      let b = -1, bd = Infinity;
      for (let i = 0; i <= N; i++) if (!vis[i] && dist[i] < bd) { bd = dist[i]; b = i; }
      if (b < 0) break;
      vis[b] = true;
      for (const [j, w] of adj[b]) if (dist[b] + w < dist[j]) dist[j] = dist[b] + w;
    }
    return dist.slice(0, N);
  }

  /**
   * @param opts.modo      'metrica' | 'geodesica'
   * @param opts.expandir  nº extra de vizinhos de grafo a trazer ALÉM do top_k
   *                       (o bug do artigo era truncar isso de volta a top_k)
   */
  recuperar(consulta, topK = 5, opts = {}) {
    const modo = opts.modo || 'metrica';
    const d = modo === 'geodesica' ? this.geodesicas(consulta, opts.k || 8) : this.distancias(consulta);
    const ordem = d.map((v, i) => i).sort((a, b) => d[a] - d[b]);
    const base = ordem.slice(0, topK);

    // expansão por ponte: reescorada e ORÇADA, nunca descartada
    const extra = [];
    const orc = opts.expandir ?? 0;
    if (orc > 0) {
      const vistos = new Set(base);
      for (const i of base) for (const j of (this.pontes[i] || [])) {
        if (vistos.has(j) || j >= d.length) continue;
        vistos.add(j); extra.push({ i: j, d: d[j], via: i });
      }
      extra.sort((a, b) => a.d - b.d);
    }
    const sel = [...base.map(i => ({ i, d: d[i], via: null })), ...extra.slice(0, orc)];
    return sel.map(o => ({
      indice: o.i, texto: this.textos[o.i], distancia: +o.d.toFixed(6),
      viaPonte: o.via, meta: this.meta ? this.meta[o.i] : null
    }));
  }

  info() {
    return {
      documentos: this.docs.length, dimensao: this.d, alpha: this.alpha,
      fracaoModoDominante: +this.fracaoTopo.toFixed(4),
      custoPorConsulta: `O(N·d) = ${(this.docs.length * this.d / 1e6).toFixed(2)}M`,
      custoContracaoTensorial: `O(N·d²) = ${(this.docs.length * this.d * this.d / 1e9).toFixed(2)}G`,
      pontes: Object.keys(this.pontes).length
    };
  }
}

/* ---------- porte fiel do artigo, para comparação ---------- */
function tensorRAG5D_paper(docs, consulta, lambda = 0.01) {
  const d = consulta.length;
  const M = Array.from({ length: d }, (_, i) => Array.from({ length: d }, (_, j) => (i === j ? 1 : 0) + lambda * consulta[i] * consulta[j]));
  let fro = 0; for (const r of M) for (const x of r) fro += x * x; fro = Math.sqrt(fro);
  const Mn = M.map(r => r.map(x => x / fro));
  return docs.map(x => {
    const dl = x.map((v, i) => v - consulta[i]);
    let s = 0;
    for (let i = 0; i < d; i++) { let t = 0; for (let j = 0; j < d; j++) t += Mn[i][j] * dl[j]; s += dl[i] * t; }
    return s;
  });
}

module.exports = { IndiceMetrico, covariancia, fatorMetrica, aplicar, normalizar, tensorRAG5D_paper };

};
__mods['transistor'] = function (module, exports, __req) {
/* UROBOROS · URB2 — o par como transistor
 *
 * ═══ POR QUE NÃO SOMAR ═══
 *
 * Até aqui o par somava: L = L_propositor + L_refutador. Isso tem um defeito
 * estrutural que só fica visível quando se pensa no par como dispositivo:
 * uma alegação que NINGUÉM propôs ganhava crença só porque um refutador disse
 * "sustento". Somar trata os dois lados como fontes simétricas, e eles não são.
 *
 * Num transistor não passa corrente de coletor sem alimentação de coletor,
 * por mais base que se injete. A assimetria é o ponto do dispositivo.
 *
 * ═══ O MODELO ═══
 *
 *   coletor  ← propositor   L_p   (fonte de conteúdo)
 *   base     ← refutador    (v,s) (controle, de OUTRA família)
 *   emissor  → L_par              (saída para o grafo de crença)
 *
 *   L_par = g(v,s) · L_p  +  d(v,s)
 *
 * Ganho g e pull-down d por veredito, com força s ∈ [0,1]:
 *
 *   refuto    g = (1−s)²      d = −δ·s     corte: mata o sinal e puxa para baixo
 *   nao_sei   g = 1           d = 0        transparente
 *   sustento  g = 1 + κ·s     d = 0        região ativa: amplifica
 *
 * Três regimes, como no dispositivo:
 *   CORTE      s→1 em refuto  ⇒ g→0. Não importa quão confiante o propositor
 *              estava: uma refutação forte de outra família zera o sinal.
 *   ATIVO      região linear em L_p, com ganho modulado pela base.
 *   SATURAÇÃO  g·L_p é limitado por L_MAX; acima disso a saída não cresce mais,
 *              o que impede que concordância entusiasmada vire certeza absoluta.
 *
 * E a propriedade que a soma não tinha:
 *   SEM BASE, SEM CORRENTE. Se L_p ≤ 0, nenhum ganho salva a alegação —
 *   g·L_p continua ≤ 0. Refutador sozinho não cria crença.
 *
 * ═══ COMPOSIÇÃO ═══
 *
 * Transistores compõem em portas. Pares também:
 *   SÉRIE     todos os pares precisam conduzir. Qualquer corte derruba tudo.
 *             Alta precisão, recall baixo. É o modo para alegação que vai
 *             virar número num relatório.
 *   PARALELO  basta um par conduzir. Alta cobertura, precisão menor.
 *             É o modo para levantar hipótese.
 *   MISTO     série dentro de cada família, paralelo entre famílias.
 */

const L_MAX = 12;
const clamp = x => Math.max(-L_MAX, Math.min(L_MAX, x));
const sigmoid = x => 1 / (1 + Math.exp(-x));

const PADRAO = {
  kappa: 1.5,      // ganho máximo em sustentação plena: g = 2,5
  delta: 2.0,      // pull-down máximo em refutação plena
  gMin: 0.0,       // corte total permitido
  gMax: 2.5
};

/** Característica de transferência da base: veredito+força → (ganho, pull-down). */
function base(veredito, forca = 0.5, cfg = PADRAO) {
  const s = Math.min(1, Math.max(0, Number(forca) || 0));
  switch (veredito) {
    case 'refuto':
      return { g: Math.max(cfg.gMin, (1 - s) ** 2), d: -cfg.delta * s, regiao: s > 0.7 ? 'corte' : 'ativo' };
    case 'sustento':
      return { g: Math.min(cfg.gMax, 1 + cfg.kappa * s), d: 0, regiao: 'ativo' };
    default:
      return { g: 1, d: 0, regiao: 'transparente' };
  }
}

/**
 * Um par. `refutacoes` pode ter mais de um veredito (pool de verificação):
 * os ganhos multiplicam e os pull-downs somam — transistores em cascata.
 */
function par(llrPropositor, refutacoes = [], cfg = PADRAO) {
  let g = 1, d = 0, regiao = 'transparente';
  for (const r of refutacoes) {
    const b = base(r.veredito, r.forca, cfg);
    g *= b.g; d += b.d;
    if (b.regiao === 'corte') regiao = 'corte';
    else if (regiao !== 'corte' && b.regiao === 'ativo') regiao = 'ativo';
  }
  g = Math.min(cfg.gMax, g);
  const bruto = g * clamp(llrPropositor) + d;
  const saida = clamp(bruto);
  return {
    llr: saida, p: sigmoid(saida), ganho: +g.toFixed(4), pullDown: +d.toFixed(4),
    regiao: Math.abs(bruto) >= L_MAX ? 'saturacao' : regiao,
    conduz: saida > 0
  };
}

/** SÉRIE: qualquer corte derruba. Precisão alta. */
function serie(pares, cfg = PADRAO) {
  if (!pares.length) return { llr: 0, p: 0.5, modo: 'serie', conduz: false, pares: 0 };
  const cortou = pares.some(p => !p.conduz);
  const llr = cortou ? Math.min(...pares.map(p => p.llr)) : clamp(pares.reduce((s, p) => s + p.llr, 0) / Math.sqrt(pares.length));
  return { llr: clamp(llr), p: sigmoid(clamp(llr)), modo: 'serie', conduz: !cortou, pares: pares.length };
}

/** PARALELO: basta um conduzir. Cobertura alta. */
function paralelo(pares, cfg = PADRAO) {
  if (!pares.length) return { llr: 0, p: 0.5, modo: 'paralelo', conduz: false, pares: 0 };
  const conduzindo = pares.filter(p => p.conduz);
  const llr = conduzindo.length
    ? clamp(Math.max(...conduzindo.map(p => p.llr)) + Math.log(conduzindo.length))
    : clamp(Math.max(...pares.map(p => p.llr)));
  return { llr, p: sigmoid(llr), modo: 'paralelo', conduz: conduzindo.length > 0, pares: pares.length };
}

/** MISTO: série dentro de cada família, paralelo entre famílias. */
function misto(paresPorFamilia, cfg = PADRAO) {
  const ramos = [...paresPorFamilia.values()].map(ps => serie(ps, cfg));
  const r = paralelo(ramos.map(x => ({ ...x, conduz: x.conduz })), cfg);
  return { ...r, modo: 'misto', ramos: ramos.length };
}

/** Curva de transferência, para inspeção. */
function curva(veredito, forcas = [0, 0.25, 0.5, 0.75, 1], llrP = 2) {
  return forcas.map(s => {
    const r = par(llrP, [{ veredito, forca: s }]);
    return { forca: s, ganho: r.ganho, llr: +r.llr.toFixed(3), p: +r.p.toFixed(4), regiao: r.regiao };
  });
}

module.exports = { PADRAO, L_MAX, base, par, serie, paralelo, misto, curva, clamp, sigmoid };

};
__mods['env'] = function (module, exports, __req) {
/* UROBOROS · URB2 — carregador de .env, zero dependências
 *
 * Faltava isto: o código lia `process.env` direto, o que no Termux funcionava
 * com `export`, mas no Windows exigia `set` a cada sessão de terminal — e
 * qualquer chave esquecida silenciosamente removia uma FAMÍLIA do cluster,
 * derrubando N_eff sem erro visível.
 *
 * Tolera as três armadilhas de arquivo no Windows:
 *   · BOM UTF-8 no início (Bloco de Notas grava por padrão)
 *   · fim de linha CRLF
 *   · aspas em volta do valor
 * Nunca sobrescreve variável já definida no ambiente real.
 */

const fs = require('fs');
const path = require('path');

function carregar(arquivo = null, { sobrescrever = false } = {}) {
  const f = arquivo || process.env.ENV_FILE || path.join(process.cwd(), '.env');
  if (!fs.existsSync(f)) return { arquivo: f, existe: false, carregadas: 0, chaves: [] };

  let txt = fs.readFileSync(f, 'utf8');
  if (txt.charCodeAt(0) === 0xfeff) txt = txt.slice(1);              // BOM
  // .env gravado como UTF-16LE (PowerShell `>` faz isso) vira "n\0o\0d\0e"
  if (txt.includes('\u0000')) txt = Buffer.from(fs.readFileSync(f)).toString('utf16le').replace(/^\uFEFF/, '');

  const chaves = [];
  for (let linha of txt.split(/\r?\n/)) {
    linha = linha.trim();
    if (!linha || linha.startsWith('#')) continue;
    const i = linha.indexOf('=');
    if (i < 1) continue;
    const k = linha.slice(0, i).trim().replace(/^export\s+/, '');
    let v = linha.slice(i + 1).trim();
    // Ordem importa: se o valor está entre aspas, o fechamento delimita — tudo
    // depois é comentário. Sem aspas, só ` #` (espaço-cerquilha) inicia
    // comentário, porque chave de API pode conter '#' colado.
    if (v[0] === '"' || v[0] === "'") {
      const fim = v.indexOf(v[0], 1);
      v = fim > 0 ? v.slice(1, fim) : v.slice(1);
    } else {
      v = v.replace(/\s+#.*$/, '').trim();
    }
    if (!v) continue;
    if (!sobrescrever && process.env[k] !== undefined) continue;
    process.env[k] = v;
    chaves.push(k);
  }
  return { arquivo: f, existe: true, carregadas: chaves.length, chaves };
}

module.exports = { carregar };

};
__mods['providers'] = function (module, exports, __req) {
/* UROBOROS · URB2 — camada de provedores
 * Zero dependências. Node >= 18 (fetch global, AbortController).
 *
 * O campo `fam` é o mais importante do registro: é a chave de agrupamento
 * de correlação. Duas células da mesma família NÃO contam como evidência
 * independente (ver lib/epistemic.js :: neff).
 */

const { bitDe } = __req('mascara');

const REG = {
  anthropic: { fam: 'anthropic', kind: 'anthropic', url: 'https://api.anthropic.com/v1/messages',
               key: 'ANTHROPIC_API_KEY', model: 'claude-sonnet-5', rpm: 50,
               // Camadas do MESMO provedor. Não são famílias novas — a linhagem
               // de pré-treino é comum — mas tamanhos diferentes erram de forma
               // parcialmente diferente, e ρ_intra cai. É o único jeito de fazer
               // contagem alta de células render alguma coisa.
               camadas: ['claude-opus-5', 'claude-sonnet-5', 'claude-haiku-4-5-20251001'] },

  gemini:    { fam: 'google', kind: 'gemini', url: 'https://generativelanguage.googleapis.com/v1beta/models',
               key: 'GEMINI_API_KEY', model: 'gemini-2.0-flash', rpm: 15,
               camadas: ['gemini-2.0-flash', 'gemini-2.0-flash-lite'] },

  groq:      { fam: 'llama', kind: 'openai', url: 'https://api.groq.com/openai/v1/chat/completions',
               key: 'GROQ_API_KEY', model: 'llama-3.3-70b-versatile', rpm: 30 },

  cerebras:  { fam: 'llama', kind: 'openai', url: 'https://api.cerebras.ai/v1/chat/completions',
               key: 'CEREBRAS_API_KEY', model: 'llama-3.3-70b', rpm: 30 },

  mistral:   { fam: 'mistral', kind: 'openai', url: 'https://api.mistral.ai/v1/chat/completions',
               key: 'MISTRAL_API_KEY', model: 'mistral-large-latest', rpm: 60 },

  deepseek:  { fam: 'deepseek', kind: 'openai', url: 'https://api.deepseek.com/chat/completions',
               key: 'DEEPSEEK_API_KEY', model: 'deepseek-chat', rpm: 60 },

  qwen:      { fam: 'qwen', kind: 'openai',
               url: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions',
               key: 'DASHSCOPE_API_KEY', model: 'qwen-plus', rpm: 60 },

  xai:       { fam: 'xai', kind: 'openai', url: 'https://api.x.ai/v1/chat/completions',
               key: 'XAI_API_KEY', model: 'grok-3-mini', rpm: 60 },

  cohere:    { fam: 'cohere', kind: 'openai', url: 'https://api.cohere.ai/compatibility/v1/chat/completions',
               key: 'COHERE_API_KEY', model: 'command-r-plus', rpm: 60 },

  openrouter:{ fam: 'mixed', kind: 'openai', url: 'https://openrouter.ai/api/v1/chat/completions',
               key: 'OPENROUTER_API_KEY', model: 'meta-llama/llama-3.3-70b-instruct:free', rpm: 20 }
};

/* ---------- token bucket por provedor (respeita free tier) ---------- */
class Bucket {
  constructor(rpm) { this.cap = Math.max(1, rpm); this.tokens = this.cap; this.rate = rpm / 60000; this.t = Date.now(); }
  refill() { const now = Date.now(); this.tokens = Math.min(this.cap, this.tokens + (now - this.t) * this.rate); this.t = now; }
  async take() {
    for (;;) {
      this.refill();
      if (this.tokens >= 1) { this.tokens -= 1; return; }
      await sleep(Math.ceil((1 - this.tokens) / this.rate) + 25);
    }
  }
}
const buckets = new Map();
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* Semáforo global. Com 256 células, disparar Promise.all cru abre 256 sockets
 * ao mesmo tempo: o SO recusa, o provedor devolve 429 em rajada e o retry com
 * backoff transforma tudo num congestionamento. O limite mantém o pipeline
 * cheio sem estourar nada. */
class Semaforo {
  constructor(n) { this.n = Math.max(1, n); this.ativos = 0; this.fila = []; }
  async adquirir() {
    if (this.ativos < this.n) { this.ativos++; return; }
    await new Promise(r => this.fila.push(r));
    this.ativos++;
  }
  liberar() { this.ativos--; const r = this.fila.shift(); if (r) r(); }
  async com(fn) { await this.adquirir(); try { return await fn(); } finally { this.liberar(); } }
}
let SEM = null;
const semaforo = (env = process.env) => (SEM ||= new Semaforo(Number(env.CONCURRENCY) || 8));
const ajustarConcorrencia = n => { SEM = new Semaforo(n); return SEM; };

/** Executa tarefas com limite global de concorrência e progresso opcional. */
async function emLote(tarefas, { onProgresso = null, env = process.env } = {}) {
  const sem = semaforo(env);
  let feitas = 0;
  return Promise.all(tarefas.map(t => sem.com(async () => {
    const r = await t();
    onProgresso?.(++feitas, tarefas.length);
    return r;
  })));
}

/* ---------- provedores ativos = os que têm chave no ambiente ---------- */
function available(env = process.env) {
  return Object.entries(REG)
    .filter(([, p]) => !!env[p.key])
    .map(([id, p]) => ({ id, ...p, model: env[`${id.toUpperCase()}_MODEL`] || p.model }));
}

/* ---------- construção de células ----------
 * Uma célula = (provedor, papel, semente). Papéis diversificam o prior,
 * não só a amostragem. `adversarial` é anti-cascata de confirmação.
 */
/* Papéis. Diversificar amostragem não move ρ_intra — diversificar o PRIOR move.
 * Cada papel impõe um modo de raciocínio distinto, e é isso que descorrelaciona
 * células da mesma família. Medido no modelo: ρ_intra 0,85 → 0,55 quase dobra o
 * N_eff em contagem alta. É a diferença entre 256 células valerem 1,77 ou 2,40. */
const ROLES = [
  'solver', 'skeptic', 'adversarial', 'formalist', 'empirical', 'minimalist',
  'decompositor', 'analogico', 'limite', 'unidades', 'contraexemplo', 'historico',
  'quantitativo', 'causal', 'definicional', 'operacional'
];

/**
 * MODO PARES — células nascem em duplas de famílias DIFERENTES.
 *
 * O pareamento não altera Σ, logo não altera N_eff: rotular as células em
 * duplas não muda a estrutura de covariância. O que ele muda é onde cada
 * chamada de API cai dentro dessa estrutura.
 *
 *   duas células concordando, LLR = 2 cada (soma bruta 4):
 *     mesma família (ρ=0,85) → L = 2,16
 *     par cruzado   (ρ=0,28) → L = 3,13     1,45× mais evidência, mesmo custo
 *
 * E abre a refutação cruzada, que é a única arma interna contra viés: um
 * refutador da mesma família erra junto com o propositor (ρ=0,85) e quase não
 * enxerga o que o outro não viu. De outra família, cobre 4,8× mais do espaço
 * de erro não coberto.
 *
 * Cada par recebe papéis COMPLEMENTARES: o membro A propõe, o B contesta.
 */
function buildPairs(nPares, env = process.env) {
  const provs = available(env);
  const fams = [...new Set(provs.map(p => p.fam))];
  if (fams.length < 2) throw new Error('URB2: modo pares exige ao menos 2 famílias distintas');

  // agrupa provedores por família e alterna entre elas
  const porFam = fams.map(f => provs.filter(p => p.fam === f));
  const cells = [];
  const modelo = (p, volta) => {
    const cfg = (env[`${p.id.toUpperCase()}_CAMADAS`] || '').split(',').map(x => x.trim()).filter(Boolean);
    const lista = cfg.length ? cfg : (p.camadas && p.camadas.length ? p.camadas : [p.model]);
    return lista[volta % lista.length];
  };

  for (let k = 0; k < nPares; k++) {
    const fa = porFam[k % porFam.length];
    const fb = porFam[(k + 1) % porFam.length];
    const pa = fa[Math.floor(k / porFam.length) % fa.length];
    const pb = fb[Math.floor(k / porFam.length) % fb.length];
    const papelA = ROLES[k % ROLES.length];
    const papelB = COMPLEMENTO[papelA] || 'adversarial';
    const volta = Math.floor(k / ROLES.length);

    for (const [p, papel, lado] of [[pa, papelA, 'propositor'], [pb, papelB, 'refutador']]) {
      const id = cells.length;
      cells.push({
        id, bit: bitDe(id), par: k, lado,
        provider: p.id, family: p.fam, model: modelo(p, volta),
        role: papel, temperature: lado === 'propositor' ? 0.30 + 0.12 * (k % 5) : 0.20
      });
    }
  }
  // vincula parceiros
  for (const c of cells) c.parceiro = cells.find(o => o.par === c.par && o.id !== c.id)?.id ?? null;
  return cells;
}

/* Papel do refutador, escolhido para atacar o ponto cego do propositor. */
const COMPLEMENTO = {
  solver: 'contraexemplo', skeptic: 'quantitativo', adversarial: 'formalist',
  formalist: 'empirical', empirical: 'limite', minimalist: 'decompositor',
  decompositor: 'causal', analogico: 'definicional', limite: 'unidades',
  unidades: 'quantitativo', contraexemplo: 'formalist', historico: 'empirical',
  quantitativo: 'unidades', causal: 'contraexemplo', definicional: 'operacional',
  operacional: 'limite'
};

/**
 * Constrói n células percorrendo provedor × papel × camada de modelo, nesta
 * ordem de prioridade. Assim as primeiras células já cobrem todas as famílias
 * (que é o que move N_eff), depois todos os papéis (que reduzem ρ_intra), e só
 * então repetem camadas.
 */
function buildCells(n, env = process.env) {
  const provs = available(env);
  if (!provs.length) throw new Error('URB2: nenhum provedor com chave no ambiente');
  const cells = [];
  for (let i = 0; i < n; i++) {
    const p = provs[i % provs.length];
    const volta = Math.floor(i / provs.length);
    const role = ROLES[volta % ROLES.length];
    const camadas = (env[`${p.id.toUpperCase()}_CAMADAS`] || '').split(',').map(x => x.trim()).filter(Boolean);
    const lista = camadas.length ? camadas : (p.camadas && p.camadas.length ? p.camadas : [p.model]);
    const model = lista[Math.floor(volta / ROLES.length) % lista.length];
    cells.push({
      id: i,
      bit: bitDe(i),                     // BigInt: sem teto de 31 células
      provider: p.id,
      family: p.fam,
      model,
      role,
      temperature: 0.30 + 0.14 * (i % 6)
    });
  }
  return cells;
}

/**
 * Composição efetiva do cluster. Serve para o usuário ver, antes de gastar,
 * quantas combinações distintas realmente existem — acima disso as células
 * viram réplicas exatas e o N_eff para de subir.
 */
function composicao(cells) {
  const chave = c => `${c.provider}|${c.role}|${c.model}|${c.lado || ''}`;
  const distintas = new Set(cells.map(chave)).size;
  const provs = available();
  const maxDistintas = provs.reduce((s, p) => s + ROLES.length * ((p.camadas || [p.model]).length), 0);
  const pares = [...new Set(cells.filter(c => c.par != null).map(c => c.par))];
  const cruzados = pares.filter(k => {
    const d = cells.filter(c => c.par === k);
    return d.length === 2 && d[0].family !== d[1].family;
  }).length;
  return {
    celulas: cells.length,
    familias: [...new Set(cells.map(c => c.family))].length,
    combinacoesDistintas: distintas,
    combinacoesPossiveis: maxDistintas,
    replicasExatas: Math.max(0, cells.length - distintas),
    saturado: cells.length > maxDistintas,
    pares: pares.length,
    paresCruzados: cruzados,
    modo: pares.length ? 'pares' : 'solto'
  };
}

/* ---------- chamada normalizada ---------- */
async function call(providerId, { system, messages, maxTokens = 1200, temperature = 0.4, json = false, timeoutMs = 60000, env = process.env }) {
  const p = REG[providerId];
  if (!p) throw new Error(`provedor desconhecido: ${providerId}`);
  const apiKey = env[p.key];
  if (!apiKey) throw new Error(`sem chave ${p.key}`);
  const model = env[`${providerId.toUpperCase()}_MODEL`] || p.model;

  if (!buckets.has(providerId)) buckets.set(providerId, new Bucket(Number(env[`${providerId.toUpperCase()}_RPM`]) || p.rpm));
  await buckets.get(providerId).take();

  let url, headers, body;
  if (p.kind === 'anthropic') {
    url = p.url;
    headers = { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' };
    body = { model, max_tokens: maxTokens, temperature, messages };
    if (system) body.system = system;
  } else if (p.kind === 'gemini') {
    url = `${p.url}/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
    headers = { 'content-type': 'application/json' };
    body = {
      contents: messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
      generationConfig: { temperature, maxOutputTokens: maxTokens, ...(json ? { responseMimeType: 'application/json' } : {}) }
    };
    if (system) body.systemInstruction = { parts: [{ text: system }] };
  } else { // openai-compatible
    url = p.url;
    headers = { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` };
    body = {
      model, max_tokens: maxTokens, temperature,
      messages: system ? [{ role: 'system', content: system }, ...messages] : messages,
      ...(json ? { response_format: { type: 'json_object' } } : {})
    };
  }

  const t0 = Date.now();
  const text = await retry(async () => {
    const ac = new AbortController();
    const timer = setTimeout(() => ac.abort(), timeoutMs);
    try {
      const r = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body), signal: ac.signal });
      const raw = await r.text();
      if (!r.ok) { const e = new Error(`${providerId} ${r.status}: ${raw.slice(0, 300)}`); e.status = r.status; throw e; }
      return extract(p.kind, JSON.parse(raw));
    } finally { clearTimeout(timer); }
  });

  return { provider: providerId, family: p.fam, model, text, ms: Date.now() - t0 };
}

function extract(kind, d) {
  if (kind === 'anthropic') return (d.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n');
  if (kind === 'gemini') return (d.candidates?.[0]?.content?.parts || []).map(x => x.text || '').join('\n');
  return d.choices?.[0]?.message?.content ?? '';
}

async function retry(fn, tries = 4) {
  let last;
  for (let i = 0; i < tries; i++) {
    try { return await fn(); }
    catch (e) {
      last = e;
      const st = e.status || 0;
      if (st && st < 500 && st !== 429 && st !== 408) throw e;   // erro de cliente: não insiste
      await sleep(Math.round((2 ** i) * 700 * (0.7 + Math.random() * 0.6)));
    }
  }
  throw last;
}

/* ---------- JSON tolerante (modelos cercam com ``` às vezes) ---------- */
function parseJSON(text) {
  if (!text) return null;
  let s = String(text).replace(/```(?:json)?/gi, '').trim();
  const a = s.indexOf('{'), b = s.lastIndexOf('}');
  const c = s.indexOf('['), d = s.lastIndexOf(']');
  const cand = (c >= 0 && (a < 0 || c < a)) ? s.slice(c, d + 1) : s.slice(a, b + 1);
  try { return JSON.parse(cand); } catch { try { return JSON.parse(s); } catch { return null; } }
}

module.exports = { REG, ROLES, COMPLEMENTO, available, buildCells, buildPairs, composicao, call, parseJSON, sleep, emLote, semaforo, ajustarConcorrencia, Semaforo };

};

/* ===================== runtime ===================== */
/* UROBOROS · URB2 — orquestrador
 *
 * Pipeline (cada estágio emite evento SSE):
 *
 *   L0 amostragem     N células × k amostras, temperatura espalhada
 *   L1 atomização     resposta -> alegações atômicas + confiança declarada
 *   L2 Polo V         verificação determinística; veto absoluto
 *   L3 entropia sem.  clusteriza por implicação; H̃ por alegação e global
 *   L4 crença         BP no grafo alegação×célula, extrínseco + deflação
 *   L5 conformal      escore de não-conformidade -> emitir/ressalvar/abster
 *   L6 síntese        redação apenas com alegações sobreviventes
 */

__req('env').carregar();
const { buildCells, buildPairs, composicao, call, parseJSON, available, emLote, ajustarConcorrencia } = __req('providers');
const { priorCovariance, glsWeights, effectiveN, clusterByEntailment, semanticEntropy, Reliability } = __req('epistemic');
const { ClaimGraph, confToLLR, sigmoid, L_MAX } = __req('bp');
const Msk = __req('mascara');
const { Conformal } = __req('conformal');
const fs = require('fs');
const { verify } = __req('verifier');
const { Ancora } = __req('ancora');
const Tr = __req('transistor');
const graph = __req('graph');

const ROLE_SYS = {
  solver:      'Responda com precisão. Prefira o resultado correto ao resultado impressionante.',
  skeptic:     'Responda e depois liste explicitamente o que na sua própria resposta é incerto ou não verificável.',
  adversarial: 'Seu trabalho é FALSIFICAR. Produza a melhor resposta e em seguida o contra-argumento mais forte contra ela. Se a pergunta contiver pressuposto falso, diga.',
  formalist:   'Responda por derivação formal: defina símbolos, mostre passos, verifique unidades e casos-limite.',
  empirical:   'Responda ancorado em números, datas e fontes concretas. Sem número verificável, marque como não sustentado.',
  minimalist:  'Responda o mínimo suficiente. Nada de contexto decorativo. Se não sabe, diga que não sabe.',
  decompositor:'Quebre o problema em subproblemas independentes, resolva cada um e recomponha.',
  analogico:   'Resolva por analogia com um caso conhecido e depois diga onde a analogia falha.',
  limite:      'Verifique casos-limite e assintóticos antes de concluir: zero, infinito, sinais, degeneração.',
  unidades:    'Trate o problema por análise dimensional primeiro. Toda grandeza sai com unidade explícita.',
  contraexemplo:'Procure ativamente um contraexemplo à resposta óbvia antes de aceitá-la.',
  historico:   'Situe a pergunta na literatura: o que mudou, o que foi revisado, o que ainda é aberto.',
  quantitativo:'Só afirme o que puder quantificar. Ordem de grandeza vale mais que adjetivo.',
  causal:      'Separe correlação de mecanismo. Diga qual é o mecanismo ou admita que não há.',
  definicional:'Fixe as definições dos termos antes de responder; ambiguidade de definição é a resposta.',
  operacional: 'Responda pelo procedimento: o que se mede, com que instrumento, com que erro.'
};

const ATOM_SYS =
`Decomponha a resposta abaixo em ALEGAÇÕES ATÔMICAS verificáveis independentemente.
Uma alegação atômica contém exatamente um fato, sem conjunções.
Para cada uma dê "conf" em [0,1] — probabilidade de ser verdadeira, calibrada e honesta.
Marque "kind": "fact" (verificável), "calc" (contém cálculo), "opinion" (juízo), "meta" (sobre a própria resposta).
Responda APENAS JSON: {"claims":[{"text":"...","conf":0.0,"kind":"fact"}]}`;

const REFUT_SYS =
`Você é o REFUTADOR de um par. Recebe ALEGAÇÕES produzidas por outro modelo, de família diferente da sua.
Sua tarefa não é concordar por educação: é tentar DERRUBAR cada alegação com o que você sabe.
Para cada uma responda "veredito": "refuto" (é falsa ou tem erro concreto), "sustento" (você chegaria à mesma
conclusão de forma independente) ou "nao_sei" (fora do seu alcance — use sem constrangimento).
"forca" em [0,1] indica quanto você confia no seu próprio veredito.
Responda APENAS JSON: {"vereditos":[{"i":0,"veredito":"sustento","forca":0.8,"motivo":"..."}]}`;

const SYNTH_SYS =
`Escreva a resposta final usando SOMENTE as alegações fornecidas como VERIFICADAS.
As marcadas como INCERTAS podem aparecer, mas explicitamente hedgeadas.
As REJEITADAS não podem aparecer nem por implicação.
Não invente nada novo. Não acrescente ressalvas genéricas. Escreva em português.`;

class Uroboros {
  constructor(opts = {}) {
    this.n = opts.cells || Number(process.env.CELLS) || 16;
    this.samplesPerCell = opts.samples || Number(process.env.SAMPLES) || 1;
    // modo pares: cada célula nasce colada a uma de OUTRA família, com papéis
    // complementares (propõe / contesta). Não muda N_eff — muda onde cada
    // chamada cai dentro da covariância, e habilita refutação cruzada.
    this.modo = opts.modo || process.env.MODO || 'pares';
    if (this.modo === 'pares') {
      try { this.cells = buildPairs(Math.max(1, Math.floor(this.n / 2))); this.n = this.cells.length; }
      catch (e) { this.modo = 'solto'; this.avisoModo = e.message; this.cells = buildCells(this.n); }
    } else this.cells = buildCells(this.n);
    this.families = [...new Set(this.cells.map(c => c.family))];
    this.Sigma = priorCovariance(this.cells, opts.corr);
    this.w = glsWeights(this.Sigma);
    this.Neff = effectiveN(this.Sigma, this.w);
    this.topology = graph.bestChords(this.n, opts.degree || 6)[0];
    this.rounds = Math.min(10, this.topology.T);
    this.conformal = new Conformal({ alpha: opts.alpha ?? 0.10, file: opts.calFile || null });
    // Confiabilidade por (célula, domínio). Existia e nunca era usada — agora
    // fecha o laço: o Polo V e a âncora produzem rótulo de graça a cada
    // consulta, e cada célula acumula histórico Beta-Bernoulli.
    this.relFile = opts.relFile || `${process.env.DATA_DIR || './data'}/confiabilidade.json`;
    try { this.reliability = Reliability.fromJSON(JSON.parse(fs.readFileSync(this.relFile, 'utf8'))); }
    catch { this.reliability = new Reliability(); }
    this.aprender = opts.aprender !== false && process.env.APRENDER !== '0';
    this.judge = opts.judge || { provider: available()[0]?.id };
    this.ancora = opts.ancora === false ? null : new Ancora({ L_MAX: 12 });
    this.usarRede = !!opts.ancoraRede;
    this.rho = opts.rho || {};
    // composição dos pares: serie (precisão) | paralelo (cobertura) | misto
    this.composicaoPares = opts.composicaoPares || process.env.COMPOSICAO || 'misto';
    // NÚCLEO vs POOL. Acima de ~30 células, mais gente respondendo A MESMA
    // pergunta não compra nada: N_eff satura em 1/ρ. Mas células fazendo
    // TAREFAS DIFERENTES escalam linearmente, porque não há penalidade de
    // correlação entre trabalhos distintos.
    //   núcleo → amostra a pergunta (redundância, satura)
    //   pool   → verifica alegações DISTINTAS, cada uma de outra família
    //            (paralelismo, escala)
    this.nucleo = Math.min(this.n, Number(process.env.NUCLEO) || Math.min(32, this.n));
    if (this.modo === 'pares' && this.nucleo % 2) this.nucleo--;
    this.celulasNucleo = this.cells.slice(0, this.nucleo);
    this.celulasPool = this.cells.slice(this.nucleo);
    this.comp = composicao(this.cells);
    ajustarConcorrencia(Number(process.env.CONCURRENCY) || Math.min(24, Math.max(4, Math.ceil(this.n / 8))));
  }

  info() {
    return {
      celulas: this.n, familias: this.families, provedores: [...new Set(this.cells.map(c => c.provider))],
      N_eff: +this.Neff.toFixed(2),
      topologia: { cordas: this.topology.S, lambda2: +this.topology.lambda2.toFixed(4), rodadas: this.rounds },
      pesos: this.w.map(x => +x.toFixed(4)), alpha: this.conformal.alpha,
      ancora: this.ancora ? { grandezas: Object.keys(this.ancora.tabela.grandezas).length, naoVerificadas: this.ancora.tabela.naoVerificadas().length } : null,
      modo: this.modo, composicaoPares: this.composicaoPares, avisoModo: this.avisoModo || null,
      nucleo: this.nucleo, pool: this.celulasPool.length,
      orcamentoVerificacao: Number(process.env.ORCAMENTO_VERIF) || 60,
      composicao: this.comp,
      retornoMarginal: this.retornoMarginal()
    };
  }

  /**
   * Rotulagem gratuita: toda alegação vetada pelo Polo V ou pela âncora é um
   * erro CONFIRMADO das células que a afirmaram; toda alegação fortemente
   * ancorada é um acerto confirmado. Zero chamadas extras de API — o rótulo
   * vem da camada determinística, que já rodou.
   */
  aprenderComVerificador(G, domain) {
    if (!this.aprender) return { creditos: 0, debitos: 0 };
    let creditos = 0, debitos = 0;
    for (const c of G.claims.values()) {
      const vetada = c.vetoed || c.ancora?.veto;
      const confirmada = c.ancora && !c.ancora.veto && !c.ancora.tensao && c.ancora.llr >= 1.5;
      if (!vetada && !confirmada) continue;
      for (const e of c.evs) {
        if (e.cell < 0 || e.kind === 'refutacao') continue;   // verificador/âncora não se avaliam
        this.reliability.update(e.cell, domain, !vetada);
        vetada ? debitos++ : creditos++;
      }
    }
    if (creditos + debitos) {
      try {
        fs.mkdirSync(require('path').dirname(this.relFile), { recursive: true });
        fs.writeFileSync(this.relFile, JSON.stringify(this.reliability.toJSON()));
      } catch { /* disco efêmero no Render: perde o aprendizado, não a consulta */ }
    }
    return { creditos, debitos };
  }

  /** Peso relativo de cada célula: GLS a priori × confiabilidade medida. */
  pesosEfetivos(domain) {
    const base = this.w.map(x => x * this.n);
    if (!this.aprender) return base;
    return base.map((x, i) => {
      const r = this.reliability.get(i, domain);
      if (r.a + r.b < 8) return x;                    // sem histórico: não mexe
      const acc = r.a / (r.a + r.b);
      // fator em [0,5; 1,5]: histórico modula, não domina
      return x * Math.max(0.5, Math.min(1.5, 2 * acc));
    });
  }

  /**
   * Retorno marginal de N_eff por célula acrescentada, na composição atual.
   * É o número que decide se vale aumentar CELLS: quando a próxima célula
   * compra menos de 1% de N_eff, ela é despesa, não informação.
   */
  retornoMarginal() {
    const f = this.families.length;
    const rIn = 0.85, rOut = 0.28;
    const neff = N => { const m = Math.ceil(N / f); return N / (1 + (m - 1) * rIn + (N - m) * rOut); };
    const atual = neff(this.n), dobro = neff(this.n * 2);
    const teto = f / (1 + (f - 1) * rOut) * (1 / (1 - 0)) && (1 / ((rIn + (f - 1) * rOut) / f));
    return {
      N_eff_atual: +atual.toFixed(3),
      N_eff_dobrando_celulas: +dobro.toFixed(3),
      ganhoAoDobrar: `${((dobro / atual - 1) * 100).toFixed(1)}%`,
      tetoDestaComposicao: +teto.toFixed(3),
      recomendacao: this.comp.saturado
        ? `${this.comp.replicasExatas} células são réplicas exatas — só ${this.comp.combinacoesPossiveis} combinações distintas existem com ${f} família(s)`
        : 'composição ainda não saturada'
    };
  }

  /* ---------- L0b · amostragem em ondas com parada antecipada ----------
   *
   * Com o Gemini a 15 rpm, 16 pares custam ~1 min só de amostragem. Mas em
   * pergunta fácil os quatro primeiros pares já concordam entre famílias, e
   * gastar os doze restantes não compra nada.
   *
   * ARMADILHA DA PARADA OPCIONAL: espiar os dados e parar quando "está bom"
   * enfraquece a garantia — você seleciona justamente as realizações que
   * parecem certas, e o escore parcial fica otimista em relação ao que a
   * amostra completa daria.
   *
   * A correção é gastar α. E aqui o sinal engana: q̂ é o quantil (1−α), logo
   * α MAIOR dá quantil MENOR, isto é, limiar MAIS ESTRITO. Para parar cedo
   * usa-se q̂(4α); para emitir na amostra completa, q̂(α). Parar exige passar
   * por uma régua mais alta do que emitir — que é exatamente o que compensa
   * o viés da espiada.
   */
  async sampleEmOndas(question, domain, emit) {
    const tamOnda = Math.max(2, Number(process.env.ONDA) || (this.modo === 'pares' ? 8 : 6));
    const respostas = [];
    let usadas = 0, ondas = 0;

    for (let inicio = 0; inicio < this.celulasNucleo.length; inicio += tamOnda) {
      const lote = this.celulasNucleo.slice(inicio, inicio + tamOnda);
      const novas = await this._chamarCelulas(lote, question, domain, emit);
      respostas.push(...novas);
      usadas += lote.length;
      ondas++;

      const restam = this.celulasNucleo.length - usadas;
      if (!restam || respostas.length < 4) continue;

      const se = await this.entropy(question, respostas, null);
      const score = Conformal.score({
        p: se.modalMass, Hnorm: se.Hnorm,
        nOrigins: new Set(respostas.map(r => r.cell.family)).size,
        nFamilies: this.families.length, verifierChecked: true
      });
      // 4α, não α/4: quantil menor = régua mais alta (ver comentário acima)
      const estrito = this.conformal.qhat(domain, Math.min(0.6, this.conformal.alpha * 4));
      if (estrito.calibrated && score <= estrito.q) {
        emit?.('paradaAntecipada', {
          ondas, celulasUsadas: usadas, celulasPoupadas: restam,
          score: +score.toFixed(4), limiarEstrito: +estrito.q.toFixed(4),
          economia: `${((restam / this.celulasNucleo.length) * 100).toFixed(0)}%`
        });
        break;
      }
    }
    return { respostas, ondas, usadas };
  }

  async _chamarCelulas(cells, question, domain, emit) {
    const jobs = cells.map(cell => async () => {
      try {
        const r = await call(cell.provider, {
          system: `${ROLE_SYS[cell.role] || ROLE_SYS.solver}\nDomínio: ${domain || 'geral'}.`,
          messages: [{ role: 'user', content: question }],
          temperature: cell.temperature, maxTokens: 1100
        });
        emit?.('cell', { cell: cell.id, provider: cell.provider, role: cell.role, lado: cell.lado || null, ms: r.ms, ok: true });
        return { cell, sample: 0, text: r.text };
      } catch (e) {
        emit?.('cell', { cell: cell.id, provider: cell.provider, ok: false, erro: String(e.message).slice(0, 160) });
        return null;
      }
    });
    return (await emLote(jobs)).filter(Boolean);
  }

  /* ---------- L0 ---------- */
  async sample(question, domain, emit) {
    const jobs = [];
    for (const cell of this.celulasNucleo) {
      for (let k = 0; k < this.samplesPerCell; k++) {
        jobs.push(async () => {
          try {
            const r = await call(cell.provider, {
              system: `${ROLE_SYS[cell.role]}\nDomínio: ${domain || 'geral'}.`,
              messages: [{ role: 'user', content: question }],
              temperature: Math.min(1.0, cell.temperature + 0.1 * k),
              maxTokens: 1100
            });
            emit?.('cell', { cell: cell.id, provider: cell.provider, role: cell.role, ms: r.ms, ok: true });
            return { cell, sample: k, text: r.text };
          } catch (e) {
            emit?.('cell', { cell: cell.id, provider: cell.provider, ok: false, erro: String(e.message).slice(0, 160) });
            return null;
          }
        });
      }
    }
    // emLote respeita o semáforo global: 256 células não podem abrir 256 sockets
    const r = await emLote(jobs, {
      onProgresso: (f, t) => { if (t > 32 && f % Math.ceil(t / 20) === 0) emit?.('progresso', { fase: 'amostragem', feitas: f, total: t }); }
    });
    return r.filter(Boolean);
  }

  /* ---------- L1 ---------- */
  async atomize(responses, emit) {
    const out = [];
    await emLote(responses.map(r => async () => {
      try {
        const a = await call(r.cell.provider, {
          system: ATOM_SYS, json: true, temperature: 0, maxTokens: 900,
          messages: [{ role: 'user', content: r.text.slice(0, 6000) }]
        });
        const p = parseJSON(a.text);
        for (const c of (p?.claims || []).slice(0, 24))
          if (c?.text) out.push({ cell: r.cell, text: String(c.text).trim(), conf: Number(c.conf) || 0.6, kind: c.kind || 'fact' });
      } catch { /* célula muda nesta rodada */ }
    }), { onProgresso: (f, t) => { if (t > 32 && f % Math.ceil(t / 10) === 0) emit?.('progresso', { fase: 'atomizacao', feitas: f, total: t }); } });
    emit?.('atomizacao', { alegacoes: out.length });
    return out;
  }

  /* ---------- L1b · refutação cruzada ----------
   * Cada alegação volta para o PARCEIRO do seu autor, que é de outra família.
   * Um refutador da mesma família erra junto (ρ=0,85) e quase não enxerga o
   * que o autor não viu; de outra família cobre 4,8× mais do espaço de erro
   * não coberto. É a única arma interna contra viés compartilhado.
   */
  async crossCheck(atoms, emit) {
    if (this.modo !== 'pares' && !this.celulasPool.length) return [];

    // Aloca escrutínio onde ele importa. Alegação com confiança declarada
    // perto de 0,5 é onde a evidência é mais fraca; alegação já em 0,95 não
    // precisa de mais um verificador. Ordena por incerteza e gasta o orçamento
    // de cima para baixo, sempre com verificador de OUTRA família que o autor.
    const orcamento = Number(process.env.ORCAMENTO_VERIF) || 60;
    const porTexto = new Map();
    for (const a of atoms) {
      if (!porTexto.has(a.text)) porTexto.set(a.text, []);
      porTexto.get(a.text).push(a);
    }
    const alegacoes = [...porTexto.entries()]
      .map(([text, lista]) => ({ text, autores: lista.map(x => x.cell), incerteza: 1 - Math.abs(2 * (lista[0].conf ?? 0.6) - 1) }))
      .sort((a, b) => b.incerteza - a.incerteza);

    // verificadores disponíveis: parceiros (modo pares) + pool inteiro
    const disponiveis = [...this.celulasPool];
    if (this.modo === 'pares') for (const a of atoms) {
      const p = a.cell.parceiro != null ? this.cells[a.cell.parceiro] : null;
      if (p && !disponiveis.includes(p)) disponiveis.push(p);
    }

    const tarefas = new Map();      // idVerificador -> [alegações]
    let gastos = 0, vi = 0;
    for (const al of alegacoes) {
      if (gastos >= orcamento) break;
      const famAutores = new Set(al.autores.map(c => c.family));
      // até 2 verificadores por alegação, ambos de família que não a escreveu
      let atribuidos = 0;
      for (let tent = 0; tent < disponiveis.length && atribuidos < 2 && gastos < orcamento; tent++) {
        const v = disponiveis[(vi + tent) % disponiveis.length];
        if (famAutores.has(v.family)) continue;
        if (!tarefas.has(v.id)) tarefas.set(v.id, []);
        if (tarefas.get(v.id).length >= 3) continue;    // lote pequeno = escrutínio profundo
        tarefas.get(v.id).push(al.text);
        atribuidos++; gastos++;
      }
      vi += 2;
    }

    const out = [];
    await emLote([...tarefas.entries()].map(([pid, textos]) => async () => {
      const p = this.cells[pid];
      const sub = textos.map(t => ({ text: t, cell: porTexto.get(t)[0].cell }));
      try {
        const r = await call(p.provider, {
          system: REFUT_SYS, json: true, temperature: 0.1, maxTokens: 900,
          messages: [{ role: 'user', content: sub.map((a, i) => `[${i}] ${a.text}`).join('\n') }]
        });
        for (const v of (parseJSON(r.text)?.vereditos || [])) {
          const a = sub[Number(v.i)];
          if (!a || v.veredito === 'nao_sei') continue;
          const forca = Math.min(0.9, Math.max(0.1, Number(v.forca) || 0.5));
          out.push({
            text: a.text, cell: p, autor: a.cell,
            veredito: v.veredito,
            llr: (v.veredito === 'refuto' ? -1 : 1) * confToLLR(0.5 + forca * 0.4)
          });
        }
      } catch { /* parceiro mudo */ }
    }), { onProgresso: (f, t) => { if (t > 16 && f % Math.ceil(t / 8) === 0) emit?.('progresso', { fase: 'refutacao', feitas: f, total: t }); } });
    emit?.('refutacao', {
      verificadores: tarefas.size, alegacoesEscrutinadas: gastos, orcamento,
      julgadas: out.length,
      refutadas: out.filter(x => x.veredito === 'refuto').length,
      sustentadas: out.filter(x => x.veredito === 'sustento').length
    });
    return out;
  }

  /* ---------- L2..L4 ---------- */
  buildGraph(atoms, emit, refutacoes = [], dominio = 'geral') {
    // w normalizado para média 1: pesos GLS são RELATIVOS entre células, não
    // uma partição da unidade. Com soma 1 o grafo encolhia toda evidência por N.
    const wRel = this.pesosEfetivos(dominio);
    const G = new ClaimGraph({ rhoDefault: 0.8, damping: 0.35, rho: this.rho, w: wRel, prior: -0.4 });
    let vetos = 0, verified = 0, ancoradas = 0, disputa = 0;

    for (const a of atoms) {
      G.add(a.text, { cell: a.cell.id, family: a.cell.family, bit: a.cell.bit, llr: confToLLR(a.conf), kind: a.kind, par: a.cell.par });
    }
    // ═══ O PAR COMO TRANSISTOR ═══
    // O refutador não SOMA: ele MODULA. Coletor = propositor (conteúdo), base =
    // refutador de outra família (controle), emissor = saída para o grafo.
    // Somando, um refutador que diz "sustento" criava crença sozinho, mesmo em
    // alegação que ninguém propôs. Com ganho multiplicativo isso é impossível:
    // sem corrente de coletor, ganho nenhum produz saída.
    const vereditosPorTexto = new Map();
    for (const r of refutacoes) {
      if (!vereditosPorTexto.has(r.text)) vereditosPorTexto.set(r.text, []);
      vereditosPorTexto.get(r.text).push({
        veredito: r.veredito,
        forca: Math.min(1, Math.abs(r.llr) / 2.2),
        cell: r.cell
      });
    }
    let emCorte = 0, amplificados = 0;
    for (const c of G.claims.values()) {
      const vs = vereditosPorTexto.get(c.text);
      if (!vs || !vs.length) continue;

      // um "par" por propositor distinto; verificadores em cascata na base
      const porAutor = new Map();
      for (const e of c.evs) {
        if (e.cell < 0 || e.kind === 'refutacao') continue;
        porAutor.set(e.cell, (porAutor.get(e.cell) ?? 0) + e.llr);
      }
      // A base de um par só aceita controle de família DIFERENTE. Sem esta
      // trava, um refutador acabava modulando também o propositor da própria
      // família — e aí o "cruzamento" não era cruzado: a mesma família julgava
      // a si mesma com ρ = 0,85, que é quase não julgar.
      const pares = [...porAutor.entries()].map(([cell, lp]) => {
        const fam = this.cells[cell]?.family;
        const base = vs.filter(v => v.cell.family !== fam);
        return { ...Tr.par(lp, base), cell, semControle: base.length === 0 };
      });
      if (!pares.length) continue;

      const saida = this.composicaoPares === 'serie' ? Tr.serie(pares)
        : this.composicaoPares === 'paralelo' ? Tr.paralelo(pares)
        : Tr.misto(new Map([...pares.reduce((m, p) => {
            const f = this.cells[p.cell]?.family || '?';
            if (!m.has(f)) m.set(f, []); m.get(f).push(p); return m;
          }, new Map())]));

      c.transistor = {
        pares: pares.length, modo: saida.modo, conduz: saida.conduz,
        ganhoMedio: +(pares.reduce((s2, p) => s2 + p.ganho, 0) / pares.length).toFixed(3),
        regioes: pares.map(p => p.regiao)
      };
      if (pares.some(p => p.regiao === 'corte')) emCorte++;
      if (pares.some(p => p.ganho > 1.2)) amplificados++;

      // a saída do transistor SUBSTITUI a soma das evidências do propositor;
      // verificador e âncora continuam entrando por fora, com direito de veto
      c.evs = c.evs.filter(e => e.cell < 0);
      c.evs.push({
        cell: -3, family: '__transistor', bit: Msk.RESERVADO << 3n,
        llr: saida.llr, kind: 'transistor'
      });
      c.llr = saida.llr;
    }
    if (emCorte || amplificados) emit?.('transistor', { emCorte, amplificados, composicao: this.composicaoPares });
    // concordância cruzada por alegação: pares em que AMBOS os lados sustentam
    for (const c of G.claims.values()) {
      const porPar = new Map();
      for (const e of c.evs) {
        if (e.par == null) continue;
        if (!porPar.has(e.par)) porPar.set(e.par, new Set());
        if (e.llr > 0) porPar.get(e.par).add(e.family);
      }
      const total = porPar.size;
      const cruzados = [...porPar.values()].filter(s => s.size >= 2).length;
      c.paresTotais = total;
      c.paresConcordantes = cruzados;
      c.concordanciaCruzada = total ? cruzados / total : 0;
    }
    for (const c of G.claims.values()) {
      // L2a · Polo V determinístico
      const v = verify(c.text);
      if (v.checked) {
        verified++;
        if (v.veto) vetos++;
        c.evs.push({ cell: -1, family: '__verifier', bit: Msk.VERIFICADOR, llr: v.llr, kind: 'verifier' });
        c.verifier = { veto: v.veto, checks: v.checks.length };
      }
      // L2b · âncora externa. Entra como VERIFICAÇÃO, nunca como contexto de L0:
      // injetar a mesma passagem nas N células elevaria ρ e colapsaria N_eff.
      if (this.ancora) {
        const anc = this.ancora.local(c.text);
        if (anc) {
          ancoradas++;
          if (anc.tensao) disputa++;
          if (anc.veto) vetos++;
          c.evs.push({ cell: -2, family: '__ancora:tabela', bit: Msk.ANCORA, llr: anc.llr, kind: anc.veto ? 'verifier' : 'ancora' });
          c.ancora = { llr: +anc.llr.toFixed(2), fonte: anc.fonte, tensao: anc.tensao, veto: anc.veto, detalhe: anc.detalhe };
        }
      }
    }
    const usados = G.run(this.rounds);
    const comCruz = [...G.claims.values()].filter(c => c.paresConcordantes > 0).length;
    emit?.('crenca', { alegacoes: G.claims.size, verificadas: verified, ancoradas, emDisputa: disputa, vetadas: vetos, comConcordanciaCruzada: comCruz, rodadas: usados });
    return G;
  }

  /* ---------- L3 (entropia semântica sobre as respostas inteiras) ---------- */
  async entropy(question, responses, emit) {
    const texts = responses.map(r => r.text);
    const clusters = await clusterByEntailment(question, texts, this.judge);
    const wPerSample = responses.map(r => this.w[r.cell.id] ?? 1 / this.n);
    const se = semanticEntropy(clusters, wPerSample);
    emit?.('entropia', { H: +se.H.toFixed(3), Hnorm: +se.Hnorm.toFixed(3), clusters: se.nClusters, massaModal: +se.modalMass.toFixed(3) });
    return se;
  }

  /* ---------- pipeline completo ---------- */
  async run(question, { domain = 'geral', emit = null } = {}) {
    const t0 = Date.now();
    emit?.('inicio', this.info());

    const emOndas = process.env.ONDAS !== '0' && this.samplesPerCell === 1;
    let responses, ondas = 1, usadas = this.n;
    if (emOndas) ({ respostas: responses, ondas, usadas } = await this.sampleEmOndas(question, domain, emit));
    else responses = await this.sample(question, domain, emit);
    if (!responses.length) throw new Error('nenhuma célula respondeu');

    const [atoms, se] = await Promise.all([
      this.atomize(responses, emit),
      this.entropy(question, responses, emit)
    ]);

    const refutacoes = await this.crossCheck(atoms, emit);
    this.ultimasOndas = ondas; this.ultimasUsadas = usadas;
    const G = this.buildGraph(atoms, emit, refutacoes, domain);
    const aprendizado = this.aprenderComVerificador(G, domain);
    if (aprendizado.creditos + aprendizado.debitos) emit?.('aprendizado', aprendizado);

    // limiar de aceitação vem do conformal, não de chute
    const claims = [...G.claims.values()].map(c => {
      const m = {
        p: sigmoid(c.llr), Hnorm: se.Hnorm,
        // em modo pares, a concordância cruzada substitui a contagem crua de
        // origens: duas famílias que sustentam a mesma alegação valem muito
        // mais que dez células da mesma família
        nOrigins: this.modo === 'pares' && c.paresTotais
          ? c.concordanciaCruzada * this.families.length
          : Msk.origens(c.mask),
        nFamilies: this.families.length,
        verifierChecked: !!c.verifier || !!c.ancora
      };
      const s = Conformal.score(m);
      const d = this.conformal.decide(domain, s);
      return { ...c, p: m.p, score: s, decisao: d.action, conformal: d };
    });

    const aceitas = claims.filter(c => c.decisao === 'emitir' && !c.vetoed);
    const incertas = claims.filter(c => c.decisao === 'ressalvar' && !c.vetoed);
    const rejeitadas = claims.filter(c => c.decisao === 'abster' || c.vetoed);

    emit?.('filtro', { aceitas: aceitas.length, incertas: incertas.length, rejeitadas: rejeitadas.length });

    // gate global: se o cluster não converge semanticamente, não sintetiza
    const gate = Conformal.score({ p: se.modalMass, Hnorm: se.Hnorm, nOrigins: popcount(claims.reduce((m, c) => m | c.mask, 0) & ~(1 << 31)), nFamilies: this.families.length, verifierChecked: true });
    const gd = this.conformal.decide(domain, gate);
    if (gd.action === 'abster' || (!aceitas.length && !incertas.length)) {
      emit?.('abstencao', gd);
      return this.pack({ question, domain, texto: null, abstencao: gd, se, aceitas, incertas, rejeitadas, t0 });
    }

    const synth = await call(this.judge.provider, {
      system: SYNTH_SYS, temperature: 0.2, maxTokens: 1400,
      messages: [{ role: 'user', content:
`PERGUNTA: ${question}

VERIFICADAS:
${aceitas.map(c => `- ${c.text}  [p=${c.p.toFixed(3)}, origens=${Msk.origens(c.mask)}${c.ancora ? `, ancora: ${c.ancora.fonte}${c.ancora.tensao ? ' (fontes em tensao)' : ''}` : ''}]`).join('\n') || '(nenhuma)'}

INCERTAS (hedgear):
${incertas.map(c => `- ${c.text}  [p=${c.p.toFixed(3)}]`).join('\n') || '(nenhuma)'}

REJEITADAS (proibido usar):
${rejeitadas.slice(0, 20).map(c => `- ${c.text}${c.vetoed ? '  [VETO Polo V]' : ''}`).join('\n') || '(nenhuma)'}` }]
    });

    emit?.('sintese', { chars: synth.text.length });
    return this.pack({ question, domain, texto: synth.text, abstencao: gd.action === 'ressalvar' ? gd : null, se, aceitas, incertas, rejeitadas, t0 });
  }

  pack({ question, domain, texto, abstencao, se, aceitas, incertas, rejeitadas, t0 }) {
    return {
      pergunta: question, dominio: domain, texto,
      abstencao,
      epistemico: {
        N_eff: +this.Neff.toFixed(2), familias: this.families.length,
        H_semantica: +se.Hnorm.toFixed(3), clusters: se.nClusters, massaModal: +se.modalMass.toFixed(3),
        modo: this.modo, ondas: this.ultimasOndas ?? null, celulasUsadas: this.ultimasUsadas ?? this.n,
        lambda2: +this.topology.lambda2.toFixed(4), rodadas: this.rounds
      },
      alegacoes: {
        aceitas: aceitas.map(fmt), incertas: incertas.map(fmt), rejeitadas: rejeitadas.map(fmt)
      },
      ms: Date.now() - t0
    };
    function fmt(c) {
      return {
        texto: c.text, p: +c.p.toFixed(4), llr: +c.llr.toFixed(2),
        origens: Msk.origens(c.mask), veto: !!c.vetoed, score: +c.score.toFixed(4),
        ancora: c.ancora || null,
        paresConcordantes: c.paresConcordantes ?? null, paresTotais: c.paresTotais ?? null,
        transistor: c.transistor || null
      };
    }
  }
}

module.exports = { Uroboros };

/* ---------------- servidor SSE ---------------- */
if (require.main === module) {
  const arg = process.argv[2] || '';

  if (arg === '--info') {
    try {
      console.log(JSON.stringify(new Uroboros({}).info(), null, 2));
      process.exit(0);
    } catch (e) {
      console.error('\n' + e.message);
      console.error('\nDefina ao menos uma chave de provedor:');
      console.error('  ANTHROPIC_API_KEY  GEMINI_API_KEY  GROQ_API_KEY  MISTRAL_API_KEY');
      console.error('  DEEPSEEK_API_KEY  XAI_API_KEY  COHERE_API_KEY  CEREBRAS_API_KEY\n');
      process.exit(1);
    }
  }

  if (arg === '--teste') {
    // autoteste do runtime: nao usa rede nem chave de API
    const V = __req('verifier'), A = __req('ancora'), G = __req('graph');
    const B = __req('bp'), Tr = __req('transistor'), Msk = __req('mascara'), Ur = __req('urb2');
    let n = 0, ok = 0;
    const t = (nome, cond) => { n++; if (cond) { ok++; console.log('  ok    ' + nome); } else console.log('  FALHA ' + nome); };
    console.log('\nUROBOROS URB2 — autoteste do runtime\n');
    t('Polo V veta 12*7 = 82', V.verify('12*7 = 82').veto === true);
    t('Polo V aceita 2^10 = 1024', V.verify('2^10 = 1024').veto === false);
    t('ancora embutida carrega', Object.keys(new A.Ancora().tabela.grandezas).length > 20);
    t('ancora veta 6000 anos para a idade do universo', !!new A.Ancora().local('A idade do universo e 6000 anos')?.veto);
    t('ancora marca tensao em H0', !!new A.Ancora().local('H0 = 67.4 km/s/Mpc')?.tensao);
    t('espectro detecta grafo bipartido', G.mixingTime(10, [1, 3]) === Infinity);
    t('mascara passa de 31 bits', Msk.origens(Msk.bitDe(0) | Msk.bitDe(200)) === 2);
    t('telegrama volta identico', (() => { const m = Msk.bitDe(0) | Msk.bitDe(215);
      return Ur.decode(Ur.encode({ originMask: m, payload: 'x' })).originMask === m; })());
    t('transistor corta com refutacao forte', Tr.par(12, [{ veredito: 'refuto', forca: 1 }]).llr < 0);
    t('sem base nao ha corrente', Tr.par(0, [{ veredito: 'sustento', forca: 1 }]).llr === 0);
    t('par cruzado vale mais que mesma familia', (() => {
      const bit = Msk.bitDe;
      const mesma = [0, 1].map(i => ({ cell: i, family: 'a', bit: bit(i), llr: 1.4 }));
      const cruz = [{ cell: 0, family: 'a', bit: bit(0), llr: 1.4 }, { cell: 1, family: 'b', bit: bit(1), llr: 1.4 }];
      return B.aggregate(cruz, { rhoDefault: 0.85 }).llr > B.aggregate(mesma, { rhoDefault: 0.85 }).llr * 1.3; })());
    console.log(`\n${ok}/${n} verificacoes passaram\n`);
    process.exit(ok === n ? 0 : 1);
  }

  const http = require('http');
  let U;
  try { U = new Uroboros({
    cells: Number(process.env.CELLS) || 16,
    samples: Number(process.env.SAMPLES) || 1,
    alpha: Number(process.env.ALPHA) || 0.10,
    calFile: process.env.CAL_FILE || './data/conformal.json'
  }); } catch (e) {
    console.error('\nURB2 nao subiu: ' + e.message);
    console.error('Defina ao menos uma chave (ANTHROPIC_API_KEY, GEMINI_API_KEY, ...) nas variaveis de ambiente.\n');
    process.exit(1);
  }

  http.createServer(async (req, res) => {
    const u = new URL(req.url, 'http://x');
    if (u.pathname === '/info') {
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify(U.info(), null, 2));
    }
    if (u.pathname === '/ancora') {
      const q = u.searchParams.get('q');
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify(q ? (U.ancora?.local(q) ?? { llr: 0, detalhe: 'sem ancoragem' }) : U.ancora?.tabela.naoVerificadas(), null, 2));
    }
    if (u.pathname === '/topologia') {
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify(graph.bestChords(U.n, 6).slice(0, 5), null, 2));
    }
    if (u.pathname !== '/consulta') { res.writeHead(404); return res.end(); }

    const q = u.searchParams.get('q');
    const dom = u.searchParams.get('dominio') || 'geral';
    if (!q) { res.writeHead(400); return res.end('falta q'); }

    if (u.searchParams.get('formato') === 'texto') {           // camada de voz M01 Pro
      try {
        const r = await U.run(q, { domain: dom });
        res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
        return res.end(r.texto || `Abstenção. Entropia semântica ${r.epistemico.H_semantica}, N efetivo ${r.epistemico.N_eff}.`);
      } catch (e) { res.writeHead(500); return res.end(String(e.message)); }
    }

    res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive' });
    const emit = (ev, data) => res.write(`event: ${ev}\ndata: ${JSON.stringify(data)}\n\n`);
    try {
      const r = await U.run(q, { domain: dom, emit });
      emit('final', r);
    } catch (e) { emit('erro', { mensagem: String(e.message) }); }
    res.end();
  }).listen(process.env.PORT || 8080, () => console.log('URB2 em :' + (process.env.PORT || 8080)));
}

