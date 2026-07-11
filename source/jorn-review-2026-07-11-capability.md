# Jörn review — capability-to-lethality uncertainty

Date: 11 July 2026.

Context: response to point 1 of the current substantive synthesis.

## Judgment captured

Nobody can currently predict within narrow margins which future training setups
are lethal. The available reasoning is closer to:

1. the latest observed system was not lethal;
2. it visibly remains poor at some candidate prerequisite `X`;
3. historical task curves give weak information about whether another fixed
   increase in effective compute crosses `X`'s sigmoid;
4. researchers can propose reasons why failure on `X` blocks RSI; but
5. uncertainty about whether `X` is actually necessary, and what other RSI
   routes exist, turns a moderately broad task forecast into an extremely broad
   lethal-effective-compute threshold.

Jörn's current personal betting interval is approximately a 5th–95th percentile
range of **2× to 1,000×** the unknown training compute used for the GPT-5.6 series
before internal OpenAI use. That baseline is less compute than went into the
eventual released version and is not known to Jörn.

The separate illustrative numbers “5% that 2× is lethal, 95% that 10,000× is
lethal” and “10× crosses the task sigmoid in 30% of analogous cases” were used to
explain the structure of the reasoning. They are not recorded as Jörn's actual
estimates without further confirmation.

## Semantics still to clarify before calibration

- whether “lethal at a compute level” means a default frontier training effort,
  the best setup developers are likely to use, or existence of some possible
  lethal setup;
- which algorithmic, data, scaffolding, post-training and inference improvements
  are absorbed into “effective compute”;
- whether the interval conditions on continued present-paradigm development or
  includes paradigm-changing breakthroughs; and
- whether the reference is one training run, the whole model-development
  campaign, or another accounting boundary.

Until clarified, use the interval as evidence for width and policy sensitivity,
not as a directly sampled threshold distribution.
