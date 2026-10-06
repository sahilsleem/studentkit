const fs = require('fs');

function replaceFile(path, oldText, newText) {
  let c = fs.readFileSync(path, 'utf8');
  c = c.replace(oldText, newText);
  fs.writeFileSync(path, c);
}

// CircuitCalculator
replaceFile('src/components/tools/CircuitCalculator.astro',
'<script define:vars={{ isParallel, isCapacitance }}>',
`<div id="circuit-config" data-is-parallel={isParallel.toString()} data-is-capacitance={isCapacitance.toString()} class="hidden"></div>
<script>
  const isParallel = document.getElementById('circuit-config').dataset.isParallel === 'true';
  const isCapacitance = document.getElementById('circuit-config').dataset.isCapacitance === 'true';`
);

// DerivativeCalculator
replaceFile('src/components/tools/DerivativeCalculator.astro',
'<script define:vars={{ mode }}>',
`<div id="deriv-config" data-mode={mode} class="hidden"></div>
<script>
  const mode = document.getElementById('deriv-config').dataset.mode;`
);

// LimitCalculator
replaceFile('src/components/tools/LimitCalculator.astro',
'<script define:vars={{ mode }}>',
`<div id="limit-config" data-mode={mode} class="hidden"></div>
<script>
  const mode = document.getElementById('limit-config').dataset.mode;`
);

// SequenceSeriesCalculator
replaceFile('src/components/tools/SequenceSeriesCalculator.astro',
'<script define:vars={{ isArithmetic, isGeometric, isInfinite, isSigma }}>',
`<div id="seq-config" data-is-arithmetic={isArithmetic.toString()} data-is-geometric={isGeometric.toString()} data-is-infinite={isInfinite.toString()} data-is-sigma={isSigma.toString()} class="hidden"></div>
<script>
  const conf = document.getElementById('seq-config').dataset;
  const isArithmetic = conf.isArithmetic === 'true';
  const isGeometric = conf.isGeometric === 'true';
  const isInfinite = conf.isInfinite === 'true';
  const isSigma = conf.isSigma === 'true';`
);

// TriangleCalculator
replaceFile('src/components/tools/TriangleCalculator.astro',
'<script define:vars={{ isRight }}>',
`<div id="tri-config" data-is-right={isRight.toString()} class="hidden"></div>
<script>
  const isRight = document.getElementById('tri-config').dataset.isRight === 'true';`
);

// TrigFunctionCalculator
replaceFile('src/components/tools/TrigFunctionCalculator.astro',
'<script define:vars={{ isInverse, mathFn, funcName }}>',
`<div id="trig-config" data-is-inverse={isInverse.toString()} data-math-fn={mathFn} data-func-name={funcName} class="hidden"></div>
<script>
  const conf = document.getElementById('trig-config').dataset;
  const isInverse = conf.isInverse === 'true';
  const mathFn = conf.mathFn;
  const funcName = conf.funcName;`
);
