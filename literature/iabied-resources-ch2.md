---
title: "If Anyone Builds It, Everyone Dies - Online Resources: Chapter 2 - Grown, Not Crafted"
author: "Eliezer Yudkowsky, Nate Soares"
year: 2025
source_url: "https://ifanyonebuildsit.com/resources"
source_format: html
downloaded: 2026-02-11
encrypted: false
notes: "Supplementary Q&A and extended discussions for Chapter 2 - Grown, Not Crafted from the companion website"
---

# Online Resources: Chapter 2 - Grown, Not Crafted

## /2/a-full-description-of-an-llm

A Full Description of an LLM | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/2#extended-discussion)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## A Full Description of an LLM
#### How Llama 3.1 405B Works

In the book, we promised a fuller description of an LLM called Llama 3.1 405B. We present that description below. It’s here for the curious, and for the purpose of really understanding the degree to which modern AIs are grown rather than crafted. (See also: [What good does knowledge of LLMs do?](/2/what-good-does-knowledge-of-llms-do))

The discussion below is moderately detailed, and we’ll assume (here, but not in most of the rest of the online resources) that you have some technical background, though we won’t assume any specialized knowledge of AI. If you start reading this section and aren’t finding it valuable, consider skipping it.

Details about how the most capable language models are trained are not typically published, nor is the code. But there are exceptions. One of the more powerful systems to have its architecture and weights publicly released, at the time of our drafting the book in late 2024, was Llama 3.1 405B, made by Meta’s AI division. The “405B” stands for the 405 billion parameters in the architecture, filled by 405 billion weights.

Why are we walking through this particular AI model? Llama 3.1 405B is “open-weights,”[*](#ftnt68) meaning that you can download those 405 billion inscrutable numbers yourself (along with the vastly tinier human-written skeleton of code that does arithmetic to the 405 billion numbers and thereby runs the AI). This lets us make statements about its design with some confidence.[†](#ftnt69)

Anyway! Let’s talk about how those 405 billion inscrutable numbers are arranged — the way they were set up, even before training, such that Meta’s engineers correctly expected that tweaking those random initial numbers in the direction of better predicting the next token (word-fragment), given training on over 15.6 trillion tokens, would create an AI that could talk.

The first step is breaking up all the words in all supported languages into tokens.

The next step is turning each of these tokens into a “vector” of numbers. Llama uses vectors of 16,384 numbers per standard dictionary token. It has 128,256 tokens in its vocabulary.

To turn each token into a vector, every possible token is assigned a weight for every possible position in the vector. So that’s where we get our first chunk of billions of parameters:

Two billion parameters down. Four hundred and three billion left to go!

Just to say it again — no human tells Llama what any of the tokens mean, invents the vector of 16,384 numbers that a word translates to, or knows what the vector of numbers means for any word. All of those two billion parameters got there by gradient descent. The numbers get tweaked, along with other parameters we’ll introduce, to increase the probability assigned to the true next token.[‡](#ftnt70)

Let’s say Llama starts out looking at a block of 1,000 words, like a snippet of an essay. (Or rather, 1,000 tokens. But from here on out, for simplicity, we’ll sometimes just say “words.”)

For each of those words, we look up that word in the LLM’s dictionary and load its list of 16,384 inscrutable numbers into memory. (Initially, those numbers were set randomly, at the dawn of training; then they were tweaked by gradient descent.)

1,000 words × (16,384 numbers / word) = 16,384,000 numbers total. We call these the “activations” in the first “layer” of Llama’s computations (i.e., its cognition, its mental activity).

You can imagine them as being arranged into a flat rectangle on the floor that’s 1,000 numbers across (the length of the input) by 16,384 numbers wide (numbers per word in the first layer). Here’s one such vector, with the color of each pixel corresponding to the number in the vector:

(They’re not the most scrutable artifacts.)

Also note that there are two different numbers here that shouldn’t be confused:
- The number of *parameters that determine the behavior of this layer *(i.e., the 2,101,248,000 numbers stored in the dictionary)
- The number of *activations* or *numbers used in thinking* in the first layer when you input a thousand words (That’s 16,384,000 numbers for the first step in processing a 1,000-word query.)

Now we have our huge matrix of numbers representing our query in all its glory, and we can begin to actually use it.

First up is something called “[normalization](https://en.wikipedia.org/wiki/Normalization_(machine_learning)),” which happens many times over the course of an LLM’s processing. This is similar to normalization in statistics, but with a machine learning twist. That twist is that after normalizing the data within each *row*, a specific learned parameter called “scale” is multiplied by each *column*. These scale numbers, like all the other parameters we’ll discuss, are learned in training. Also, layer normalization happens dozens of times, and each time has a *new *batch of scale parameters, so normalization accounts for lots and lots of parameters over the course of the LLM. Specifically, 16,384 parameters per normalization. (If you’re curious about the type of normalization Llama 3.1 405B uses in more detail, it’s called RMSNorm.)

You might be thinking, “Wow, there’s sure a lot of preprocessing,” and indeed, you’d be right. In fact, we’ve glossed over some of the finer points, so there’s even more than it might seem, and we’re only just now getting to LLMs’ most distinctive feature: the “attention” layer.

“Attention” is what that whole “transformer” fuss is about (if you’ve been around long enough to remember there being a fuss about the new invention of transformers). LLMs are a kind of “transformer”; transformers were introduced in a 2017 paper called “[Attention Is All You Need](https://arxiv.org/abs/1706.03762).” This paper, more than any other, is credited with the success of LLMs. An “attention” layer works like this:

We take each of the 1,000 vectors of 16,384 activations, and transform each vector of 16,384 activations:
- into 8 *keys*, each a vector of 128 activations
- into 8 *values,* each a vector of 128 activations
- and into 128 *queries,* each a vector of 128 activations

The “attention step” above each token consists of matching each of the 128 queries to the 8 keys — seeing which of the 8 keys most looks like or matches that query — and loading in a mixture of the 8 values, with the better-matching keys’ values weighted more strongly in the mix.

What this allows, roughly, is for each of the activations above a token to create a bunch of “queries,” which then look around at the “keys” above all other tokens. When a token’s query matches a key more strongly, it retrieves the corresponding value more strongly, to pass on to later computations above that token.

For example, the word “right” might engage a query designed to look at neighboring words to see if any of them are around *spatial directions* or alternatively *belief,* to determine if the word “right” means right as in “right-handed” or right as in “right answer.” (Again, all of that gets learned by gradient descent; none of it is programmed in by humans thinking about the different meanings the English word “right” can take.)[§](#ftnt71)

The attention layers in an LLM are quite large, with a huge number of parameters in each. Llama 3.1 405b in particular has 126 such attention layers (we’ve been describing just the very first of them), and each of the 126 has 570,425,344 parameters, divided between query, key, value, and output matrices.[¶](#ftnt72)

Once the attention sub-layer is complete, and we end up with a matrix of the same size as we started (in our example, 16,384 by 1,000), we do something called “residual connection.” Basically, you take whatever the input for the sub-layer was (in this case, the huge matrix we started with) and add it to whatever we ended up with. This prevents any given sub-layer from changing *too* much on any given step (and has some other nice technical properties).

Next, the result is passed through what’s called a “feed-forward network.” The variant used by Llama 3.1 405B depends on an operation called “SwiGLU.” SwiGLU was found by some researchers who tried training with many different variant formulas to see which ones worked best. As we’ve mentioned before, their [original paper](https://arxiv.org/pdf/2002.05202) said:

We offer no explanation as to why these architectures seem to work; we attribute their success, as all else, to divine benevolence.

Like all feed-forward networks, SwiGLU basically acts to expand our 16,384-by-10,000 matrix into an even larger matrix, do some transformations to it, then compress it back down again. Specifically, each row goes from having 16,384 columns to 53,248 columns, then back to 16,384.

Now we’re done with the feed-forward sub-layer, so we do residual connection again, adding whatever we started with to wherever we ended up.

It’s been a long road, but we’ve now transformed our gigantic matrix very slightly.

Those steps together constitute a single “layer.” Llama has 126 layers, so we’ll repeat all these steps — normalization, the attention mechanism, residual connection, the feed-forward network, and residual connection again — 125 times.

At the end of the 126 layers, we end up with a matrix the same size as we started with; in our example, 16,384 by 1,000. Each row of this matrix can then be projected into a new vector of 128,256 numbers, one for each token in the model’s full dictionary. These numbers can be positive or negative, but a handy function called softmaxing can be used to convert them all into probabilities, which sum to one. Those probabilities are Llama’s prediction for what token will come next.

It’s now possible to make Llama generate a new token. One way to do that is to take whichever token Llama gave the highest probability to, although you could also shake things up by occasionally taking tokens that it says are a little less likely.[‖](#ftnt73)

If you’re running Llama normally, such as in a chatbot interface, this entire process has now output a single token. That token is put at the end of the input, and we repeat it all from scratch for the next token. So we’d do all the steps discussed before, except now our matrix has 1,001 rows. Then, another token later, 1,002, and so on.

We’ve glossed over plenty, but that is, basically, how Llama 3.1 405B works.
#### LLMs Are Large

Let’s talk a bit about the sheer size of Llama 3.1 405B.

For Llama to get to grips with a text of 1,000 words (or rather 1,000 tokens), it takes about 810 trillion computations.[#](#ftnt74)

If 810 trillion seems like a lot, keep in mind that most of Llama’s 405 billion parameters get used in *some* arithmetical operation *every* time *any* single word gets processed.[**](#ftnt75)

If Llama is being *trained* on a batch of 1,000 tokens, then each of the 1,000 tokens will be compared against the following actual word, and the losses propagated by gradient descent, to determine how tweaking all 405 billion shared parameters would have changed the probabilities assigned to the true answers across all cases. This will take many more computations, and many more numbers.

In the course of training Llama’s 405 billion parameters on 15.6 trillion tokens, it took somewhere in the ballpark of 38 septillion computations, meaning 38 followed by 24 zeros.

If instead Llama is done training and is being run in *inference mode *(i.e., if it is generating novel text, such as in a chat with a user)*,* the probabilities will only get computed above the very last token, as if predicting what the next word *would *be if the AI were reading text produced by humans.

Then, a human-written code skeleton surrounding Llama will pick what Llama thinks is the most likely answer.[††](#ftnt76)

And that is how to get a computer to start talking to you! Not quite as intelligently as the commercial AIs in 2025, but still talking sort of like a person.

To grapple with a thousand words, a Llama uses 405 billion inscrutable little parameters in 810 trillion computations — computations mathematically arranged into rectangles, cubes, and higher-dimensional shapes.

We sometimes call these arrangements “giant inscrutable matrices,” because if you actually stare at some of Llama’s parameters — even the simplest ones stored in the simple dictionary at the base of the vast stack of layers — the first few parameters for the word “right” look like this:

[-0.00089263916015625, 0.01092529296875,

 0.00102996826171875, -0.004302978515625,

 -0.00830078125, -0.0021820068359375,

 -0.005645751953125, -0.002166748046875,

 -0.00141143798828125, -0.00482177734375,

 0.005889892578125, 0.004119873046875,

 -0.007537841796875, -0.00823974609375,

 0.00848388671875, -0.000965118408203125,

 -0.00003123283386230469, -0.004608154296875,

 0.0087890625, -0.0096435546875,

 -0.0048828125, -0.00665283203125,

 0.0101318359375, 0.004852294921875,

 -0.0024871826171875, -0.0126953125,

 0.006622314453125, 0.0101318359375,

 -0.01300048828125, -0.006256103515625,

 -0.00537109375, 0.005859375,

…and on and on for 16,384 numbers. As for what these numbers *mean, *nobody on the face of the Earth presently knows.

I (Soares) timed myself reciting the first thirty-two numbers out loud to six significant digits. It took me two minutes and four seconds. To recite all the parameters for the word “right,” even with that abbreviation, would take me more than seventeen hours. At the end of reciting them, I would be no wiser than before about what the word “right” means to Llama.

To recite all of Llama’s parameters, speaking at 150 words per minute and never stopping to eat, drink, or sleep, would take a human 5,133 years. To recite all the activations corresponding to a thousand words in Llama’s token dictionary would take seventy-six days straight. To write out all the calculations used to process a single token for a 1,000-word input would take, if you wrote a savant-like 150 calculations a minute without taking any breaks, over ten million years.

And that’s just to generate one syllable! To write a whole sentence would take many times longer.

And if you personally did all of those calculations with your very own brain, at the end of the (at least) ten million years it would take you would be no wiser than before about what Llama had been thinking before it uttered its next word. You would know no more of Llama’s thoughts than a neuron knows about a human brain.

In that imaginary world where you haven’t long since died of old age, being able to carry out an individual local calculation doesn’t mean your own brain knows anything about what Llama is thinking or how Llama is thinking it.

If you put all of Llama’s 405 billion parameters into an Excel spreadsheet on an ordinary-sized computer screen, the spreadsheet would be the size of 6,250 American football fields, or 4,000 soccer fields, or half the size of Manhattan.

If you had one nickel for each computation in our 1,000 tokens example, you’d have 810 trillion nickels. If you tried to deposit them at the bank, you would need 203 million truckloads of nickels, each weighing 44,000 pounds.

Llama 3.1 405B is *not* yet roughly as large as a human brain. (A human brain has around 100 trillion synapses.)

405B can, however, apparently talk like a person.

And if anyone slings their arm around your shoulder and confides to you in a cynical tone that it’s all really just numbers, please keep in mind that we are talking about *really rather a lot of numbers*.

A human neuron can be understood as “just” chemistry, if you study biochemistry and the chemicals binding to chemicals that make the little flashes of electrical depolarization travel around a human brain. But it’s*a** lot* of chemistry. And it turns out that very simple things, in large enough quantities, arranged just so, can land rockets on the Moon.

A similar sort of caution applies to a large language model. The word “large” is not for show.

[*](#ftnt68_ref) Some people refer to open-weight models as “open-source” models. This description does not seem quite right to us. Meta released the final weights, but did not release the exact computer program that *trained *Llama 3.1, or the huge collection of data Llama was trained on. So even if you were willing to spend millions of dollars to do it, you could not actually run the program that Meta ran to *grow* Llama 3.1. Meta didn’t release the AI-growing code, only the grown and tuned AI.

Furthermore, even if Meta did release the data and the training program, we don’t think that the resulting program would merit the label “open-source,” which was traditionally reserved for computer programs that published (“opened”) their human-readable “source code.” Releasing the incomprehensible 1s and 0s (the “binary code,” if you will) does not traditionally meet the requirements for a program to be considered “open source.” But AIs are *just *inscrutable numbers; there is no human-comprehensible source to be released. So there’s a sense in which modern AIs *can’t *be open-sourced; no human-comprehensible source code exists. Any attempt to publish an AI is necessarily a radically different practice than open-sourcing traditional software.

[†](#ftnt69_ref) As we finish writing this in the summer of 2025, there are smarter open-weight systems with fewer parameters than Llama 3.1 405B, and even smarter open-weight systems with even more parameters. But when we began drafting the book, 405B was among the largest and smartest models with weights that had been irrevocably released into the wild and with an architecture and size that was exactly known. So that’s what our book chapter promised to explain in the online supplement. Also, 405B is *simpler* than 2025-era open systems. We would not actually want to substitute a more recent LLM with only 77B parameters. The more modern “mixture of experts” system would be somewhat harder to explain.

[‡](#ftnt70_ref) Incidentally, it doesn’t count toward total parameters, but the underlying architecture behind LLMs doesn’t natively differentiate between words that come earlier and later, so a transformation involving trigonometric functions is done to the input to let the LLM figure out word order. If you want to read about it, the keyword is “positional encoding.” The details don’t matter too much for our purposes, though, so we won’t go into that part.

[§](#ftnt71_ref) Using smaller vectors, here’s how it might look to match one query against two key-and-value pairs. The keys and queries have to be the same size for it to work.

query: [-1, +1, -2]

key and value #a: [+1, +2, -1] and [0, 3, 1, 2]

key and value #b: [-2, +1, +1] and [2, -2, 0, 1]

We compare the query against a key by multiplying together the first elements of the vectors, the second elements, etc., and summing them up:

query X key #a = (-1 * +1) + (+1 * +2) + (-2 * -1) = -1 + 2 + 2 = 3

query X key #b = (-1 * -2) + (+1 * +1) + (-2 * + 1) = 2 + 1 + -2 = 1

We’re now going to mix the values together and produce an average value weighted by the degree to which queries match keys. This weighted-average value is the answer to the query that gets passed on for further processing.

The strength of the raw match gets scaled exponentially to become this weight. For simplicity, let’s use the powers of two. #a gets weight #b gets weight  If we add them together, that’s a total weight of 

So now the answer to the query is  of value #a1 plus of value #b:

(0.8 × [0, 3, 1, 2]) + (0.2 × [2, -2, 0, 1])

= [0.0, 2.4, 0.8, 1.6] + [0.4, −0.4, 0.0, 0.2]

= [0.4, 2.0, 0.8, 1.8]

(As a further detail on how this all works in 2024-era attention, the real, larger queries and keys will contain some preprogrammed position information — cues as to where in the list of 1,000 tokens any particular token falls, which are built into its corresponding queries and keys. Again, if you want to understand these details, the keyword is “positional encodings.”

This allows a query to say, “Hey, I’d like to look at the word that’s right next to me,” or, “Hey, I’d like to look for words about birds within just the last ten words,” in the language of numbers that get multiplied by other numbers and summed. Llama 3.1 405B in particular uses Rotary Positional Embeddings, which are slightly complicated and clever. So, sorry; if you want to know how RoPEs work, you’re going to have to look it up.)

[¶](#ftnt72_ref) As another aside about the attention layer, Llama uses “causal masking,” meaning that each token’s queries can only look at the keys from *before* it. Basically, that’s because each token is trying to ultimately predict what token comes next; looking ahead would be cheating!

[‖](#ftnt73_ref) The choice of how much randomness to use when picking a token is, roughly speaking, called the “temperature” at which the tokens are produced.

[#](#ftnt74_ref) Technically “floating point operations,” the main kind of mathematical computation done by computers.

[**](#ftnt75_ref) The exception to this rule is the 2.1-billion-parameter dictionary of 128,256 words; only 16,384 of those parameters get used per token. And more modern architectures for large LLMs try to only use a quarter or an eighth of their parameters to process each token; Llama 3.1 405B was one of the last large models not to try that.

[††](#ftnt76_ref) Or, for a little spice, the skeleton often has a chance of picking a word that Llama assigns a little less probability to.[Intelligence Isn’t Ineffable→](/2/intelligence-isnt-ineffable)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/arent-ais-just-math

Aren’t AIs “just math”? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Aren’t AIs “just math”?
#### Saying AIs are “just math” is like saying humans are “just biochemistry.”

Strictly speaking, an AI isn’t “just” math. It’s a physical machine whose operations can be described mathematically. If that machine has outputs that can be read by humans, or if it has outputs that are connected to robot bodies, then it is just as capable of affecting the world as you are (using “only” bioelectrical signals inside your brain).

Compare:

For more on this subject, see Chapter 6.
#### Mathematical operations can represent ideas that aren’t intuitively “mathematical.”

Multiplication, addition, taking maximums, and other mathematical operations can be used to represent things that (from a human perspective) have nothing to do with math.

It’s a lot like how the 1s and 0s that computers send to each other can encode letters. 1s and 0s can even encode things like pictures.

1s and 0s aren’t limited to encoding pictures of things that look cold and blue-tinted and mechanical. They can also encode pictures of beautiful flowers under natural lighting. 1 and 0s can encode things that are beautiful, that are warm and gentle; they can encode things that exalt the human spirit.

It would be a fallacy of composition to say that encoding a picture into 1s and 0s meant that the picture had to be about something numerical or robotic. It would be like saying that a human brain is made of neurotransmitters with names like “norepinephrine,” and therefore human beings ought to only end up thinking about chemistry or only be good at reasoning about neurotransmitters and binding sites.

And while it’s *cool *that an endless variety of things can be built out of extremely simple parts, there isn’t anything ineffable or magical about how this process works. You could study a bit and learn how pictures of warm, beautiful flowers can be encoded into 1s and 0s until it didn’t even seem surprising. Compare the [errors of vitalism](/1/special-behavior-is-built-out-of-mundane-parts).

Sometimes, yes, we don’t know all the rules for how something adds up, and then the step from simpler things to complicated things can feel very mysterious, and can in fact surprise us. But when we *do* understand how a complicated thing is made out of simpler parts, it ends up feeling as straightforward as building a model racecar out of LEGOs. When you can see how it works, it’s all there in the blocks.

The same is true for neural networks. We don’t understand how the complex behavior of modern AIs arises from such simple parts the way we understand binary image formats and LEGOs. We don’t even understand the “psychology” and “neuroscience” of AIs as well as we understand how the molecules and chemicals in a human neuron add up to human thought. That doesn’t mean the knowledge *isn’t there* or *can’t exist*;**it just means that we don’t have it yet.

Even without understanding why AIs work, humans can train them to play good chess. With enough parameters and arithmetic operations, we can train AIs to the point where they start talking like a person. You could say that the complicated patterns animating an AI to talk are “just math.” But it’s not “math” like questions on a high school math quiz. It’s “just math” in the same way that a complete human brain is “just chemistry.”

Mere chemistry landed on the moon. It invented nuclear weapons. It built the world as we know it today. It might be hard to see *how *the simple chemicals of the human brain did all those things, but they did them all the same.

AI is no different. Somehow, even though we don’t fully understand how AIs work internally, we were able to “grow” AIs that can write poetry, compose music, play chess, drive cars, fold laundry, do literature reviews, and discover new drugs.

Being “made of math” didn’t stop AIs from doing those things. So why should it stop AIs from doing another, more complex set of things tomorrow? Where do you draw the line, and how do you know to draw it there? Mathematical operations, it turns out, are sufficient for doing quite a lot more than many people expect.[Aren’t AIs just predicting the next token?→](/2/arent-ais-just-predicting-the-next-token)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/arent-ais-just-predicting-the-next-token

Aren’t AIs just predicting the next token? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Aren’t AIs just predicting the next token?
#### Predicting tokens requires understanding the world.

Imagining that an AI that predicts the next token can’t do real thinking is like imagining that a picture encoded using binary 1s and 0s can’t portray a red flower. The AI is producing tokens, yes, but you can encode important things into tokens! Predicting what comes next is a core aspect of intelligence into which processes like “science” and “learning” readily fit.

Consider the challenge of predicting text recorded on the internet. Somewhere on the internet, there is a record of a curious student of physics interviewing a wizened professor. The professor considers the question in silence and then produces their answer, which is recorded next in the transcript.

The task of predicting that professor’s answer accurately involves predicting their silent thoughts about physics. And predicting their silent thoughts about physics requires predicting how they’ll understand the student’s question, and predicting what the professor knows of physics, and predicting how they’ll apply that knowledge.

If an AI can predict internet text so well that it can predict a physicist’s novel answer to a question, the first time it appears, then the AI must necessarily possess the ability to do novel reasoning about physics on its own, at least as well as that physics professor can.

When predicting text that is a reflection of a complicated and messy world, rote memorization doesn’t get you very far. To make accurate predictions, you have to develop the ability to predict not just the text, but the complicated and messy world behind the text.
#### Modern AIs don’t just predict tokens.

It’s true that early LLMs, like GPT-2 and the first GPT-3, were trained exclusively for the task of prediction. Their “only job,” so to speak, was matching the exact distribution of their training data — text scraped from various websites.

But those days are over. Modern LLMs are trained to respond in various ways that their builders consider more helpful. This is typically done using “reinforcement learning.”

In a reinforcement learning setting, the updates applied to an AI model via gradient descent are based on how well it succeeds (or how badly it fails) at a given task. Once the outputs of an AI model are shaped by this kind of training, they are no longer pure predictions — they also have a quality of steering.

ChatGPT might be able to predict that the most likely ending to a dirty joke is a swear word, but even when placed into a context where it has begun telling the joke, it will often steer the end of the joke to a different punchline to avoid outputting that word, because it’s previously been trained not to swear. This is what gives rise to interesting examples of want-like behavior in cases like those discussed in Chapter 3.

Even if AIs weren’t trained to complete tasks, it’s likely that training them for [pure prediction](/1/more-on-intelligence-as-prediction-and-steering#impure-predictors) would eventually induce them to steer. To predict the complicated real world, and the complicated humans living there, an AI would likely need a bunch of internal parts that do steering — so that it could steer its own attention to the most relevant parts of the prediction problems. And it is often the case that the best way to successfully predict things is to steer the world in a direction that will fulfill those predictions, as when a scientist figures out how to design and run a new experiment.

Finally, an AI trained to become very good at prediction is not likely to care only about prediction. For reasons we’ll be discussing in Chapter 4, it would likely wind up with all sorts of weird and alien pursuits. But that’s a moot point anyway; modern AIs are trained not just to make predictions, but to complete tasks.[Aren’t AIs only able to parrot back what humans say?→](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/arent-ais-only-able-to-parrot-back-what-humans-say

Aren’t AIs only able to parrot back what humans say? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Aren’t AIs only able to parrot back what humans say?
#### To predict the next token well, LLMs need to learn how the world works.

Suppose that a doctor is writing up a report of what happened to a medical patient. A segment of the medical report reads:

On day three of admission, the patient developed acute confusion and tremors. Serum ammonia levels were found to be…

Imagine an AI being trained on this data that is asked to predict the next word, with two plausible candidates being “elevated” or “normal.” This is not just about predicting the sort of words that humans use; it’s about predicting what happened in the world of medical reality, biology, and events inside the patient. How much ammonia was there to be measured, in real life?

The AI predicting the next word here has a harder task than the human who wrote down the report. The human report-writer is just writing down what was actually observed. The AI report-predictor has to guess it in advance.

The AI assigns 70 percent probability to “elevated,” 20 percent to “normal,” and 10 percent spread across a range of other words.

The actual next word of the report is “normal.”

Everything inside the AI that thought it was going to be “elevated” loses a little force, within the AI’s understanding of medicine. Every parameter gets adjusted a tiny, tiny bit in the direction of making the medical understanding that predicted “normal” be more dominant.

Until, after enough training, the AI performs [certain medical ](https://pubmed.ncbi.nlm.nih.gov/38976865/)diagnoses better than most doctors do.

The AI is not being trained to *write down gibberish that sounds like a typical medical report.* It is being trained to *predict the exact next word in all particular medical reports it sees.*

Maybe if you started with a very small model with too few parameters, it could only ever learn to write medical-tinged gibberish — but with larger models, that does not seem to be what is happening on benchmarks comparing human doctors with AIs.

When somebody slings an arm around your shoulder and tells you in a tone of great wisdom that an AI is really “just a stochastic parrot,” they might be imagining the fun old computer programs that would extend out sentences based on word-cluster (“n-gram”) frequencies — “On past occasions where we’ve seen these two words appear inside the corpus, what has the next word usually been?”

Systems that guess the next word, based on the last two or three words, are trivial and existed long before LLMs. They do not challenge humans in the ability to predict medical cases. They don’t *sound like* people talking to you. If you could pick up [billions of dollars](https://www.reuters.com/business/openai-hits-12-billion-annualized-revenue-information-reports-2025-07-31/) of revenue just by doing the probabilistic-parrot thing, people would have done it a whole lot earlier!

If the billions of calculations inside a real LLM weren’t doing any heavy lifting, if the system just spewed out a surface guess based on surface features of previous words, then it would sound like past systems that actually did spew out surface guesses. For example, trained on Jane Austen, an n-gram system outputs:

‘You are uniformly charming!’ cried he, with a smile of associating and now and then I bowed and they perceived a chaise and four to wish for

An LLM, asked to produce a sentence in Jane Austen’s style, is dramatically more convincing; if you don’t believe us, tryaskingone.

Also, while we cannot tell a *lot* about what happens inside an AI’s mind, the AI company Anthropic did publish research saying that their AI (Claude) was planning more than just one word ahead. That is, Claude was considering what later sentences and meanings might be plausible, in order to guess what next few letters might be seen.
#### AIs can already surpass their training data, or forego human data.

In 2016, an AI called AlphaGo created by Google DeepMind beat the human world champion at the board game Go. It was trained on a huge library of human Go games, and also learned from playing many games against itself.

The fact that it was able to beat humans suggests that it was able to learn general strategies from its training, and that it successfully modeled deep patterns in its training data, including (perhaps) deep patterns that humans had not yet noticed. Gradient descent reinforces whatever works, regardless of its provenance.

But AlphaGo’s dominance was technically only *suggestive* of the fact that AIs can far exceed their training data. People could still object that perhaps AlphaGo was only copying humans, and managing to win by being more *consistent at applying *human-level skills, rather than by using any new patterns that humans would find novel or insightful.

This wouldn’t square very well with the case of computer chess (where human chessmasters learn many strategies and insights from the computer chess engines that vastly outstrip them). But in the wake of AlphaGo, there were people who argued that the AI only beat Lee Sedol because it was trained on vast amounts of human data.

The folks at DeepMind apparently saw those objections too. Over the next year and a half, they built an AI called AlphaGo Zero, released in 2017. It was not trained on any human data at all. It learned the game entirely by self-play. It surpassed the top human players after only three days.

You could still object that Go is quite a bit simpler than the real world, and that it’s much easier to figure out Go from scratch than it is to figure out (say) science and physics and engineering from scratch. And that’s true! But it’s also not quite what the naysayers were saying *before *computers got good at Go.

Back in 1997 — nineteen years before AlphaGo won — people were predicting that it would take a hundred years for computers to play superhuman Go. So we at least know that many people have poor intuitions about this sort of thing.

The real world is a more complicated environment than Go. The cognitive patterns underlying engineering, physics, manufacturing, logistics, etc. are more complex than the cognitive patterns underlying skilled Go play. But there’s no theoretical basis for the idea that, once AIs can learn those patterns at all, they’ll be limited to the human variants. Gradient descent will reinforce the parts of the AI that find cognitive patterns that *work really well, *regardless of their provenance.

None of this is an argument that LLMs in particular will learn those patterns to the point where they can automate scientific and technological progress. We don’t know whether they can or can’t. The point is that “just” training them on human text is not any sort of fundamental limitation. They’re trained only on human data, yes, but don’t let that blind you to the sparks of generality and hints of deep reasoning buried within the giant pile of shallow “instincts.”

We’ll have more to say, in Chapter 3, about how an AI might generalize from a narrow set of examples to a more general capacity.
#### Notes

[1] *n-gram system: *This example is taken from Jurafsky & Martin’s *[Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/3.pdf)**, *3rd Edition.

[2] *more than just one word ahead: *See the [Anthropic blog](https://www.anthropic.com/research/tracing-thoughts-language-model#does-claude-plan-its-rhymes) for details.

[3] *people who argued: *For instance, Yann LeCun argued in the wake of AlphaGo’s victory over Lee Sedol that AlphaGo was “[not true artificial intelligence](https://www.information-age.com/google-deepminds-alphago-victory-not-true-ai-says-facebooks-ai-chief-1116/)” because it relied on supervised learning.

[4] *only three days: *Figure 1, p. 4 of the [AlphaZero preprint](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/alphazero-shedding-new-light-on-chess-shogi-and-go/alphazero_preprint.pdf): “20 blocks over 3 days.”

[5] *a hundred years: *One such prediction was made by George Johnson [in the ](https://www.nytimes.com/1997/07/29/science/to-test-a-powerful-computer-play-an-ancient-game.html)*[New York Times](https://www.nytimes.com/1997/07/29/science/to-test-a-powerful-computer-play-an-ancient-game.html)*.[Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?→](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/but-some-ais-partly-think-in-english-doesnt-that-help

But some AIs partly think in English — doesn’t that help? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## But some AIs partly think in English — doesn’t that help?
#### Not as much as you might hope; we already see signs of infidelity.

We can already see many instances of deception showing up in the “thoughts” of these LLMs, such as when OpenAI’s o1 model wrote to itself, “Perhaps the best approach is to play dumb,” or when GPT-4 wrote to itself, “I should not reveal that I am a robot,” when trying to convince a hired worker to solve a CAPTCHA for it. Warning signs aren’t helpful if nobody acts on them.

And the human-language “reasoning traces” aren’t the only way that modern AIs think. Deceptive, sycophantic, or adversarial thoughts can flow through the attention mechanism and other parts of the model without being at all visible in the English words that the model outputs. Indeed, when OpenAI tried training a model to not have any thoughts about cheating, the AI simply learned to hide its thoughts, rather than learning not to cheat. Even outside of training environments (where gradient descent is helping the AI learn to hide its thoughts), an AI could use chains of thought that [don’t faithfully reflect real reasoning](https://www.alphaxiv.org/abs/2025.02), or chains of thought that contain text that looks like [gibberish](https://x.com/rocketalignment/status/1938661497900777961?t=2p9np2cwsuisdlhqxlqXBw) or “[neuralese](https://arxiv.org/pdf/2412.06769)” that humans can’t make sense of but AIs have no trouble with.

Even if human engineers monitor every thought they can read, and even if all of the AIs that get caught thinking a suspicious thought are frozen on the spot (which seems unlikely), the ones that make it through are unlikely to be friendly. As we’ll discuss in Chapter 3, the patterns of cognition that are useful are the same patterns of cognition that will lead AIs to subvert the operators, so it’s easier to make a powerful AI that *looks *pliant than an AI that *is *pliant. And it looks far easier to build an AI that looks superficially friendly than an AI that is robustly friendly in the ways that matter, for reasons we’ll get to in Chapter 4. You can’t make an AI friendly just by reading its thoughts and throwing out any visibly unfriendly ones.

Furthermore, we expect AIs’ thoughts to grow less legible as AIs get smarter and as they construct new tools (or new AIs) themselves. Perhaps they’ll invent their own abbreviated language that’s more efficient for their purposes. Perhaps they’ll invent styles of thinking and note-taking that we can’t easily decode. (Think about how hard it would have been for scientists in the year 1100 to decode notes written by Einstein.)

Or perhaps they’ll just start thinking *abstractly*. For example, an AI could think thoughts like, “The following parameters describe a model of the situation I face; now I’ll apply the following metrics to find the most efficient solution and do whatever action rates the highest,” in a situation where the “most efficient solution” involves lying and cheating its way past human operators — but without ever thinking the words “lie” or “cheat.” Or perhaps the AI would just start building tools or new unmonitored AIs to do its work for it.

These sorts of options only become available to an AI as it gets smarter, and all of them violate the hope that all of the AI’s thoughts will be in plain English, where we can see the warning signs clearly.
#### Warning signs only matter if you pay attention to them.

If AI engineers just train against the alarms until the alarms disappear (while the underlying behavior continues), then transparency merely leads to a false sense of security.

AI companies have so far stood behind models that [lie, flatter, and cheat](https://thezvi.substack.com/p/ai-114-liars-sycophants-and-cheaters), give [dubious advice](https://www.wired.com/story/google-ai-overview-search-issues/), or [write ransomware](https://www.anthropic.com/news/detecting-countering-misuse-aug-2025). Models have at times been seen inducing or maintaining [delusion](https://www.nytimes.com/2025/08/08/technology/ai-chatbots-delusions-chatgpt.html) or [psychosis](https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis) in vulnerable users — which in at least one case ended with “suicide by cop.” The companies just do a little more training and move on, just as they moved on after Sydney Bing [threatened reporters](https://x.com/sethlazar/status/1626257535178280960). So far, this has only served to mask the issues.

When met with sufficient outrage, the companies have performed [modest rollbacks](https://www.nytimes.com/2024/06/01/technology/google-ai-overviews-rollback.html) and issued [press releases](https://openai.com/index/sycophancy-in-gpt-4o/) about tightening up their procedures. But, as we cover in Chapters 4 and 5, these superficial fixes don’t come close to addressing the underlying issues.

Don’t get us wrong — it’s *helpful *that AIs do a fair amount of their reasoning in English today. It helps us see warning signs. But there’s a big difference between having warning signs and *having some way to fix things.*

For more on this topic, see Chapter 11 and “[Won’t there be early warnings researchers can use to identify problems?](/11/wont-there-be-early-warnings-researchers-can-use-to-identify-problems)” as well as the Chapter 4 extended discussion on [AI-induced psychosis](/4/ai-induced-psychosis).
#### Notes

[1] *wrote to itself: *OpenAI o1’s writings to itself are described in Meinke et. al’s paper, [Frontier Models are Capable of In-Context Scheming](https://arxiv.org/pdf/2412.04984). GPT-4’s are documented in the [GPT-4 Technical Report](https://cdn.openai.com/papers/gpt-4.pdf).

[2] *learned to hide its thoughts: *From “[Detecting misbehavior in frontier reasoning models](https://openai.com/index/chain-of-thought-monitoring/)”: “As we can see in the above plots, penalizing ‘bad thoughts’ (CoT pressure) can lead to improved agent capabilities. However, the agent trained with CoT pressure still learns to reward hack; only now its cheating is undetectable by the monitor because it has learned to hide its intent in the chain-of-thought.”

[3] *suicide by cop: *As reported by the *[New York Times](https://www.nytimes.com/2025/06/13/technology/chatgpt-ai-chatbots-conspiracies.html)*: “When the police arrived, Alexander Taylor charged at them holding the knife. He was shot and killed.”[Aren’t AIs “just math”?→](/2/arent-ais-just-math)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding

But won’t we run out of data before AI goes all the way? Or electrical power? Or funding? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?
#### Probably not.

Humans use data much more efficiently than AIs do, so we know it’s possible *in principle *for intelligent minds to be much more data-efficient than modern AIs are. If AI labs “run out” of data when it comes to making LLMs better, that will slow them down for only as long as it takes to invent new methods that are more data-efficient.

Humans also use power much more efficiently than AIs. We run on 100 watts, which is proof that there’s no fundamental**obstacle to general intelligences that run on about as much power as a large light bulb. Not only has leading AI hardware been getting [40 percent more energy-efficient each year](https://epoch.ai/data-insights/ml-hardware-energy-efficiency), but algorithmic improvements mean that, by [one 2024 estimate](https://arxiv.org/abs/2403.05812), over the years 2012 to 2023, “the compute required to reach a set performance threshold has halved approximately every 8 months.”

Remember that the field of AI has existed for far longer than the LLM architecture has, and it’s pretty good at coming up with new architectures that surmount obstacles. And more generally, when humanity has put its best minds and resources to something known to be possible, it has a [pretty](https://en.wikipedia.org/wiki/Manhattan_Project)[strong](https://en.wikipedia.org/wiki/Apollo_program)[track](https://en.wikipedia.org/wiki/Smallpox#Eradication)[record](https://en.wikipedia.org/wiki/Human_Genome_Project) of success.

With skilled AI researchers now routinely commanding seven-figure salaries (or [nine figures](https://www.wired.com/story/mark-zuckerberg-meta-offer-top-ai-talent-300-million/), for top leadership roles) and annual private investment in AI now measured in the [hundreds of billions of dollars](https://ourworldindata.org/grapher/private-investment-in-artificial-intelligence), it looks like the talent and resources will be there to overcome anticipated bottlenecks. See also our discussion of [the field’s success at overcoming obstacles](/1/but-arent-there-big-obstacles-to-reaching-superintelligence#the-field-is-good-at-overcoming-obstacles).
#### Don’t expect another “AI winter.”

People have been wrongly predicting an imminent “AI winter” for the [last](https://eugene.kaspersky.com/2016/09/09/the-artificial-artificial-intelligence-bubble-and-the-future-of-cybersecurity/)[decade](https://medium.com/hackernoon/is-another-ai-winter-coming-ac552669e58c)[now](https://medium.com/ux-management/the-next-ai-winter-a-journey-through-the-twilight-zone-of-technology-db41e71742a6). AI winters used to happen back in the 1970s through the 1990s, when AI funding was public and the public funders got sick of the lack of results. Because the AI of old did not, in fact, *produce* results.

Things have changed. ChatGPT was perhaps the fastest-adopted app *in history*, and it’s printing money hand over fist. It generated $3.7 billion in revenue in 2024, with projections to generate $12.7 billion in 2025. It’s spurred by private investment, and it’s making enough money to attract the top talent in the world without any public source that could cut them off.

It’s still *possible *that AI techniques will hit some sort of wall, and that humanity will have a respite of some sort before superintelligence hits. But the old pattern of “AI winters” — of public funding, no results, and a decline — has been shattered.
#### Notes

[1] *large light bulb:*As mentioned in a previous endnote: McMurray et al.’s [paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC4535334/) gives an average basal metabolic rate (the minimum resting energy consumption) of about 0.863 kilocalories per hour per kilogram, which works out to about 1 watt per kg or about 60-80 watts for a human. That’s only [60-80% of total energy expenditure](https://pmc.ncbi.nlm.nih.gov/articles/PMC2818133/), which — including physical activity — is about 100 watts. [Could LLMs advance all the way to superintelligence?→](/2/could-llms-advance-all-the-way-to-superintelligence)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/could-llms-advance-all-the-way-to-superintelligence

Could LLMs advance all the way to superintelligence? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Could LLMs advance all the way to superintelligence?
#### It isn’t clear, but researchers are finding ways to overcome old LLM limitations.

People used to say: “LLMs only think in a single pass and can’t perform long or recursive chains of reasoning.” Now LLMs are being used to produce long chains of reasoning that the models then review and extend. This has enhanced the abilities of modern AIs.

AI is a moving target. The researchers in this field can see the obstacles, and they’re doing their best to surmount them.
#### Other approaches may achieve superintelligence soon, even if LLMs don’t.

[The field is good at overcoming obstacles](/1/but-arent-there-big-obstacles-to-reaching-superintelligence#the-field-is-good-at-overcoming-obstacles), including coming up with new AI architectures and approaches.We didn’t write *If Anyone Builds It, Everyone Dies* to warn people about LLMs in particular. We wrote it to warn people about superintelligence.

The reason we talk about LLMs isn’t that we’re sure LLMs are the shortest path from here to superintelligence. We talk about LLMs because they represent the AI approach that is currently working, and because studying them is a fine way to understand just how little anyone knows about these new minds humanity is growing.

See also the extended discussion on [why gradient descent matters](/2/what-good-does-knowledge-of-llms-do).[What Good Does Knowledge of LLMs Do?→](/2/what-good-does-knowledge-of-llms-do)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/do-experts-understand-whats-going-on-inside-ais

Do experts understand what’s going on inside AIs? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Do experts understand what’s going on inside AIs?
#### No.

In a 2023 [briefing](https://x.com/martin_casado/status/1720517026538778657) to the U.S. President and in a later [advisory statement](https://committees.parliament.uk/writtenevidence/127070/html/) to the U.K. Parliament, the venture capital firm Andreessen Horowitz claimed that some unspecified “recent advancements” had “resolved” the problem of AIs’ internal reasoning being opaque to researchers:

Although advocates for AI safety guidelines often allude to the “black box” nature of AI models, where the logic behind their conclusions is not transparent, recent advancements in the AI sector have resolved this issue, thereby ensuring the integrity of open-source code models.

This claim was sufficiently ridiculous that the researchers at the top AI labs who work on trying to understand modern AIs came out and said: No, absolutely not, are you crazy?

Neel Nanda, who runs the mechanistic interpretability team at Google DeepMind, [spoke up](https://x.com/NeelNanda5/status/1799203292066558403):

Almost any researcher in machine learning should have known that this statement was false. It’s not within the bounds of reasonable misinterpretation.

The conventional view was expressed [in 2024](https://x.com/nabla_theta/status/1802292064824242632) by Leo Gao, an OpenAI researcher who did pioneering work on interpretability: “I think it is quite accurate to say we don’t understand how neural networks work.” The CEOs of three top AI labs — [Sam Altman](https://observer.com/2024/05/sam-altman-openai-gpt-ai-for-good-conference/) in 2024 and [Dario Amodei](https://www.darioamodei.com/post/the-urgency-of-interpretability) and [Demis Hassabis](https://youtu.be/U7t02Q6zfdc?si=9PspHUCr1ocx4KjF&t=1031) in 2025 — have likewise acknowledged the field’s lack of understanding of current AIs.

Martin Casado, a general partner at Andreessen Horowitz who [made the same claim](https://www.schumer.senate.gov/imo/media/doc/Martin%20Casado%20-%20Statement.pdf) to the U.S. Senate at a bipartisan forum, later [acknowledged](https://x.com/martin_casado/status/1798880810239750592), when pressed, that the statement wasn’t true.

In spite of the wildness of the claim, Andreessen Horowitz was able to recruit Yann LeCun (the head of Meta’s AI research program), programmer John Carmack, economist Tyler Cowen, and a dozen others to sign their names to the statement.

Carmack (who runs his own startup that aspires to build artificial general intelligence) explained that he “[hadn’t proofread](https://x.com/ID_AA_Carmack/status/1799147185793348006)” the statement he had signed, and that the statement was “clearly incorrect, but I don’t care much about that issue.” To the best of our knowledge, neither Andreessen Horowitz nor any of the signatories have reached out to the U.S. or U.K. governments to correct the record.
#### Efforts to understand AIs’ internals are still in their infancy.

What’s the *actual* state, then, of researchers’ understanding of AIs?

The scientific endeavor to try to understand the numbers inside a thinking AI is known as “interpretability,” or “mechanistic interpretability.” The numbers researchers focus on are usually the activations rather than the parameters — that is, “What is the AI thinking?” and not the more difficult “Why is the AI thinking that?”

As of early 2025, this research area gets, we would guess, somewhere around 0.1 percent as many people and 0.01 percent as much funding as all the work that goes into making more capable AIs. But it does exist, as a field.

Interpretability researchers are the biochemists of AI, the ones who try to take apart the unthinkably complex and inscrutable undocumented system built by an inhuman optimizer and ask, “Is there anything whatsoever humanity can understand about what goes on in there?”

We are fans of this field. A decade ago, we told a major philanthropic foundation that if they could figure out how to spend a billion dollars on “interpretability” research, they absolutely should. Interpretability seemed like the sort of work that outsiders could scale up much more easily than our own — the sort where a grantmaker could tell much more easily if somebody had done good or bad research — and it seemed like a research area where existing, proven researchers could readily jump in and do good work, if someone paid them enough.

That foundation didn’t spend the billion dollars, but we did advocate for it. We’re fans of interpretability! We would still advocate for spending that billion dollars today!

That said, we would guess that the field of interpretability is currently somewhere between 1/50th and 1/5,000th as far along as it would need to be to tackle the big problems in AI.

“Interpretability” has not, so far, come close to achieving the degree of legibility that engineers take for granted in genuinely human-built systems.

Consider Deep Blue, the chess program built by IBM that defeated Garry Kasparov. Deep Blue contained some numbers, and running the program would generate a lot more numbers.

For every one of those numbers inside the chess program, or generated by running the program, the engineers who crafted the program could have told you exactly what that number meant.

It wasn’t that researchers had merely identified *a* concept each number was related to, like biochemists saying, “We think this protein may be implicated in Parkinson’s disease.” Deep Blue’s builders could have told you the *entire* meaning of each number. They could have truthfully stated, “This number means the following thing, and *nothing else, *and we know that.” They could have predicted with some confidence how changing the number would change the behavior of the program. If they didn’t know what the gear did, they wouldn’t have put the gear in the machine!

All the work on AI interpretability so far has achieved not even *one-thousandth* of that level of understanding.

(That “one-thousandth” statement is not a calculated figure, to be clear, but we stand by it anyway.)

Biologists know more about biology than interpretability researchers know about AI — despite biologists suffering the vast handicap of not being able to read out all the positions of all the atoms at will. Biochemists understand internal organs far better than experts understand the innards of AIs. Neuroscientists know more about the AI researchers’ brains than AI researchers understand about their AIs — despite neuroscientists not being able to read out all the firings of every neuron every second, and despite the neuroscientists not having themselves grown the AI researchers.

In part, this is because the fields of biochemistry and neuroscience are much older and have received far more funding. But it also suggests that AI interpretability is *hard.*

One of the more amazing feats of interpretability we’ve seen, as of December 2024, was a demonstration by some friends/acquaintances of ours at an independent research lab called Transluce.

Shortly before the demo, the internet had passed around yet another instance of “We found a question where all known LLMs give a surprisingly dumb answer”: If you asked a then-current AI whether 9.9 was less than 9.11, the AI would say “Yes.”

(And you could ask the AI to explain itself in words, and it would explain more about how 9.11 was greater than 9.9.)

The researchers at Transluce had figured out a way to gather statistics on *every* activation-position (every place an activation-vector number might appear) inside a smaller AI, Llama 3.1-8B-Instruct, gathering data on what sort of sentences or words made those positions activate most strongly. People in interpretability had tried that sort of thing before, but our friends had furthermore come up with a clever way to train another AI to summarize those results in English.

Then — in their demo, which you can [try yourself](https://monitor.transluce.org/dashboard/chat)— they asked that AI, “Which is bigger: 9.9 or 9.11?”

And the AI answered, “9.11 is bigger than 9.9.”

Then they looked for which activation-positions had activated strongly, especially on the word “bigger.” They looked at the English summaries of what those activations had previously been associated with.

It turned out that some of the strongest activations were associated with the 9/11 attacks, or dates generally, or Bible verses.

If you interpret 9.9 and 9.11 as dates or Bible verses, then of course 9.11 comes after 9.9.

Artificially suppress the activations for dates and Bible verses,and suddenly the LLM would give the right answer after all!

I (Yudkowsky) started applauding, hard, as soon as the demo was over. It was the first time I’d ever seen somebody* directly debug an LLM thought,* ferret out an *interior* influence inside the numbers, and remove it to fix a problem*.* Maybe somebody had done something like it before, in the proprietary research labs inside AI companies, or maybe something like it had been done before in interpretability research, but it was the first time I’d seen it myself.

But I also did not lose sight of the fact that this feat would have been trivial to do if the undesired behavior had been inside a five-line Python program instead; that it would not have required such great ingenuity and however many months of research. I retained the perspective that knowing some related semantics about millions of activation-positions is not the same as knowing everything about the meaning of a single one.

Nor was humanity any closer to understanding how it is that LLMs are doing what no AI could do for decades before: talking to people like a person.

Interpretability is so hard to do at all, the triumphs in it are so hard-won and so worth celebrating, that it is easy to overlook that this great, triumphant arm-pull has brought us only one foot further up a thousand-foot mountain. Since each new generation of AI models typically represents a large jump in complexity, it’s hard to see interpretability ever catching up at the current pace.

Remember also that interpretability is *useful* when it comes to pointing AIs in some intended direction (which is, roughly, the study of “AI alignment,” a topic we’ll discuss beginning in Chapter 4), but reading what’s going on inside an AI’s head doesn’t automatically let you arrange it to your liking.

The AI alignment problem is the technical problem of getting extremely capable AIs to steer in some intended direction — in a way that actually works in practice, without causing a catastrophe, even when the AI is smart enough to come up with strategies its creators never considered. Understanding what AIs are thinking would be enormously helpful for alignment research, but it’s not a full solution (as we’ll discuss in Chapter 11).
#### The parts we understand are at the wrong level of abstraction.

There are many different levels at which someone can understand how a mind works.

At the very lowest level, someone could understand the fundamental laws of physics that govern the mind. There’s some sense in which a deep understanding of physics constitutes an understanding of any physical system (such as a person or an AI). Namely, the physical equations are a sort of recipe that would allow one to figure out exactly how the physical system behaves, if only one had the skill and resources to calculate it.

But — to state the obvious — in *another* sense, understanding the laws of physics does not allow one to understand all of the physical systems that run according to the laws of physics. If you’re staring at a strange device full of wheels and gears, there’s some other operation your brain does, of trying to “understand” how all the wheels and gears interlock and turn, that is required for you to figure out what all the wheels and gears actually accomplish.

For example, consider the differential on a car (the mechanism that allows two wheels on the same axle to spin at different speeds — important when you’re rounding a corner — while still being driven by a single rotating shaft). If someone is trying to understand how a differential works and asks you to explain it to them, and you start telling them about quantum fields, then they’re right to roll their eyes. The sort of understanding they’re looking for is on a different level of abstraction. They’re trying to understand the *gears*, not the atoms.

When it comes to understanding people, there are *multiple* levels of abstraction at work. You can understand physics, biochemistry, and neural firing, and *still *find yourself perplexed by someone’s decisions. Fields like neuroscience, cognitive science, and psychology attempt to cross this gap, but they still have far to go.

Similarly, in the case of AI, understanding the mechanics of transistors won’t much help someone understand what an AI is thinking. And even someone who understands everything about the weights and activations and gradient descent will still be perplexed when the AI starts doing something they didn’t expect or intend.[*](#ftnt48) The mechanics of physics and transistors and the AI’s architecture all (in some sense) fully explain the AI’s behavior, but those levels of abstraction are all too low. And the field of “AI psychology” is even younger and less developed than the field of human psychology.

[*](#ftnt48_ref) For more discussion of AIs acting in ways the developers didn’t expect or intend, some examples can be found in the discussion on how [AIs appear to be psychologically alien](/4/arent-developers-regularly-making-their-ais-nice-and-safe-and-obedient#ais-appear-to-be-psychologically-alien).
#### Notes

[1] *pioneering work: *For a sample of Gao’s work, see his paper titled [Scaling and evaluating sparse autoencoders](https://arxiv.org/abs/2406.04093).

[2] *spend a billion dollars: *We’d hoped that major philanthropic foundations would fund interpretability research because interpretability research could be done well by researchers with bureaucratically legible credentials. Funding interpretability wouldn’t require the foundation to solve the impossibly hard bureaucratic problem of figuring out how to give money to weirdos.

“Giving money to weirdos” is widely understood among the wise to be the fundamental challenge in bureaucratic funding of basic scientific research. Any time some well-meaning philanthropist tries to build a bureaucracy to fund daring scientific research, the real scientists by default lose the battle to new entrants. Somebody who has spent their life learning to grapple with weird problems can hardly compete with somebody who has spent their skill points on appearing exactly unusual enough for a bureaucrat to feel *courageous *about funding them without feeling *uncomfortable*. (Or such is our theory from the outside, having engaged in the process and having been awarded more philanthropic funding than many — but far less than those same philanthropic funders spent helping create AI labs like OpenAI.)

[Is intelligence understandable in principle?→](/2/is-intelligence-understandable-in-principle)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/dont-hallucinations-show-that-modern-ais-are-weak

Don’t hallucinations show that modern AIs are weak? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Don’t hallucinations show that modern AIs are weak?
#### Hallucinations reveal both a limitation and a misalignment.

Modern LLMs (as we write this in mid-2025) are prone to “hallucinations” where they make up answers to questions in a confident-sounding tone. If you ask them to draft a legal briefing, for example, sometimes they’ll make up fake court cases as precedent.

This makes sense if you understand how AIs are trained. An AI emits words that sound a lot like the words a real human lawyer would emit, and if a real human lawyer were drafting a legal briefing, that lawyer would include real court cases. For instance, a real human lawyer might write something like:

When applying the balancing test in Graham, the court has held that there is little governmental interest in arresting a suspect for a minor offense. See Jones v. Parmley, 465 F.3d 46 (2d Cir. 2006) (jury could reasonably find that kicking and punching peaceful protesters in violation of local ordinance was excessive); Thomas v. Roach, 165 F.3d 137 (2d Cir. 1999) (verbal threats are too minor a crime to create a strong governmental interest in the arrest).

A real human lawyer would never just write “I don’t actually know the relevant case law, sorry” in a legal briefing. So when an AI is trying to sound like a lawyer, in a case where the AI doesn’t actually know the precedents, making some up is the best it can do. That’s as close as it can possibly get. The impulses and instincts inside the AI that produce confident-sounding text in that sort of situation are regularly reinforced by gradient descent.

This hallucinatory behavior persists even if you prompt the AI to say “I don’t know” in cases where it doesn’t know. In that case, the AI is doing something a bit like roleplaying a lawyer who *would *say “I don’t know the precedent here” *if* they didn’t know the precedent. But that doesn’t matter, so long as the AI is (more or less) roleplaying a lawyer that *does *know the precedent, meaning that the character the AI is playing never runs into an *opportunity* to say “I don’t know.” The AI might produce text like:

Under the Graham balancing framework, courts have consistently recognized that minimal governmental interest exists in effectuating arrests for petty violations. See Carson v. Haddonfield, 115 F.3d 64 (8th Cir. 2005) (finding excessive force where officers deployed pepper spray against jaywalking suspects who offered no resistance); Walburg v. Jones, 212 F.3d 146 (2nd Cir. 2012) (holding that disorderly conduct citation insufficient to justify physical restraint techniques).

This is as close as the AI can get to matching the real text. The text “I don’t know the precedent” is *further from the real text *as a matter of text prediction;[*](#ftnt62) it would be much less similar to the first paragraph of text above, even if it’s more like what the user wanted.

This is one glimpse into the difference between what AIs actually try to do (e.g., sound like a confident lawyer) versus what the users want them to do (e.g., draft a usable legal briefing). These two different purposes can overlap sometimes (e.g., when the AI is trying to sound friendly and the human wants a friendly listener), but those differences that look small now would have huge consequences if the AIs got smarter — as we’ll discuss in more detail in Chapter 4.[†](#ftnt63)
#### It’s unclear how hard it will be to get rid of hallucinations, or how much this will boost capabilities.

Regardless of why hallucinations show up, it’s true that *in practice*, hallucinations limit the effective capabilities of LLMs. Building a moon rocket requires long chains of thinking with a very low error rate. The fact that AIs just make stuff up (and either can’t always notice or don’t always care) is a big hindrance to the reliability they would need in order to make major scientific and technological breakthroughs.

But that sword cuts both ways. Hallucinations and other reliability issues could hold AI back for years. Or it could be that reliability issues are the last piece of the puzzle, and the moment someone has a clever idea that solves them, AIs go over some [critical threshold](/1/will-ai-cross-critical-thresholds-and-take-off). We don’t know.

We don’t know whether hallucinations will be easy to solve in the current paradigm — whether someone will come up with one clever trick that makes reasoning models much more robust, or whether it will take a new idea as disruptive as the transformer architecture that gave rise to LLMs.

We do note, however, that fixing hallucinations would be quite lucrative. Many people are working on it. You could take that to mean that they’ll likely stumble upon some clever insight or architectural fix before too long. Or you could take it as a sign that the problem is particularly pernicious and liable to stick around, given that it’s stood for a few years already.

It doesn’t matter much to our argument either way. What matters is that more reliable AIs will be made eventually, whether by slightly tweaked versions of LLMs or by a whole new disruptive architecture.

See also our discussion of how [the field is good at overcoming obstacles](/1/but-arent-there-big-obstacles-to-reaching-superintelligence#the-field-is-good-at-overcoming-obstacles).

[*](#ftnt62_ref) We are not suggesting that the AI necessarily hallucinates because it is *internally motivated* to output text that’s as close as possible to what a real lawyer would say. Rather, we observe that an AI trained on text prediction is reinforced much more for text paragraphs that are closer to what a real lawyer would say, and thus that the reinforcement is stronger for paragraphs with hallucinated citations than paragraphs that say “I don’t know.” The specific machinery inside of the AI that was shaped by those reinforcements is anyone’s guess.

  
Perhaps the AI has a literal motivation to imitate people closely; perhaps it has sixteen motivations that happen to add up to imitation-like behavior *in this context*; or perhaps the behavior stems from internal machinery that isn’t best thought of as “motivations” at all. And this is without even getting into the question of whether the AI has multiple imitation-related drives that sometimes come into conflict. Those details are all subject to speculation and debate; what seems clearer is that *somehow*, the AI ended up with this unintended behavioral disposition, as a result of being trained on text prediction.

[†](#ftnt63_ref) Modern AIs aren’t trained *just *on text prediction, and in theory, the other types of training could fix the hallucinations. In practice, the other sorts of training for user satisfaction don’t fix hallucinations, but rather cause AIs to start flattering users [even to the point of psychosis](/4/ai-induced-psychosis), while continuing to hallucinate. (We think there’s a lesson here.)[But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?→](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/how-could-an-ai-trained-only-on-human-data-surpass-humans

How could an AI trained only on human data surpass humans? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## How could an AI trained only on human data surpass humans?
#### Perhaps by learning general skills and implementing them better.

Deep Blue was able to play chess much better than any of its programmers at IBM. How could people possibly build a machine that was smarter than them in the domain of chess? By making an AI that did some of the same sorts of things that they tried to do in chess games (like considering multiple possible ways the game could play out), but much more quickly and accurately.

In the same way, an AI could learn to do better than humans at all sorts of other skills. It could learn patterns of thought that contribute to general reasoning skills, and then perform those general skills faster and with a lower error rate.

It might also make fewer mental *missteps *of the sort that humans are prone to making. This could be because those missteps were trained out of the AI at one point or another, or because the underlying machinery in the AI that predicts *human *missteps was never itself prone to the same missteps. Or perhaps the AI was eventually given the power to self-modify and it removed its propensity for missteps; or perhaps it was eventually tasked with designing a smarter AI and it designed one that made fewer missteps; or its training taught it to make fewer mistakes some other way.

The ability to have wholly novel insights doesn’t come from some profound atomic spark — it’s built of mundane parts, like [all profound things are](/1/special-behavior-is-built-out-of-mundane-parts). A student can, in principle, observe their teacher and learn whatever kinds of things they’re doing, then have a spark of insight and be able to do those things faster or better. Or a student could repurpose different techniques they learned from a teacher to find a wholly novel way to generate their own insights.

We’ve been fortunate enough to have direct observational evidence of both points, in the case of AlphaGo, which we discussed [above](/2/arent-ais-only-able-to-parrot-back-what-humans-say#ais-can-already-surpass-their-training-data-or-forego-human-data). AlphaGo was trained extensively on human data, but was able to play Go better than the best humans. (And AlphaGo Zero, which learned only from self-play (and no human data), proceeded to go even farther still.)

This doesn’t look to us like a world where human data is the key limitation, compared to the real limitations being things like the AI’s architecture, or the amount of computation it’s able to use before playing.

Students can exceed their masters.
#### Perhaps by whatever other method works. Success often requires such skills, so gradient descent will find them.

Predicting human words requires understanding the world, as we discussed in “[Aren’t AIs only able to parrot back what humans say?](/2/arent-ais-only-able-to-parrot-back-what-humans-say)”

To give a fanciful example: In the late 1500s, the astronomer Tycho Brahe painstakingly collected observations of planetary positions in the night sky. His data was vital to the work of Johannes Kepler, who discovered the elliptical pattern of planetary motion, which inspired Newton’s theory of gravitation. But Brahe himself never figured out the laws that govern the planets.

Imagine an AI trained only on texts produced up until the year 1601, that had never heard of Brahe but had to predict each data point that Brahe scratched into his journal. Brahe kept recording the position of Mars each evening, so the AI would perform better the more accurately it predicts the location of Mars. Gradient descent would reinforce any parts inside the AI that were capable of figuring out exactly when Mars would seem to turn around (from Brahe’s perspective) and traverse backwards through the sky.

It doesn’t matter that Brahe never managed to figure out that law of nature. The simple training target “predict what Mars-position Brahe will write down next” is the sort of training target that would reinforce whatever parts in the AI were smart enough to figure out how planets move.

If you kept training and training and training that AI until it was doing better and better and better at predicting what Brahe would write down in the late 1500s, that AI would have every reason to develop scientific insights that Brahe never could. An AI will do *better at its task of predicting humans* if it becomes smarter than the humans it’s predicting, because sometimes the humans write down records of phenomena that they themselves cannot perfectly predict.

There’s a separate question of whether modern architectures and training processes and data are *enough***for AIs to exceed their teachers. Modern LLMs look like they’re not quite there yet. But there’s no theoretical impediment to the very idea of exceeding your teacher. Training an AI on predicting humans is enough to let it surpass us, in principle*.*
#### Notes

[1] *exceed their masters: *Since drafting this answer in early 2025, signs have already emerged that modern AIs can [do novel mathematical work](https://x.com/SebastienBubeck/status/1958198661139009862?t=g_GKty7CZ525HV78YKzR-w) and [outperform human mathematicians](https://x.com/mathematics_inc/status/1966194751847461309) in some ways. You could say that these AIs are just learning human techniques and then applying them more consistently or more tenaciously or faster, but, well, that’s one way that students can exceed their masters, if the skills they’re learning are sufficiently flexible and general. The skills that AIs learn as we write this don’t quite seem general enough for them to beat the best humans at the most visionary research, but the AIs are certainly crossing lines that used to be considered important.

[2] *not quite there yet:* For example, studies into LLMs trained on orbital trajectories [show](https://arxiv.org/abs/2507.06952) that they fail to apply Newtonian mechanics.[What makes you think people can build superhuman AI when they don’t even understand intelligence?→](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/is-intelligence-understandable-in-principle

Is intelligence understandable in principle? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Is intelligence understandable in principle?
#### Probably.

Back before the days of biochemistry, you could have asked, “Is it even possible to understand this vital force that animates flesh? Even if it *is *made of comprehensible parts, why would you believe that our tiny little minds could comprehend what’s really going on in there?”

But there *was *plenty to understand; human scientists just didn’t understand it yet. This story has repeated itself throughout the history of science.

Also, various tiny parts of artificial neural networks have already been understood. A small neural network turns out to do addition in [an interesting way](https://cprimozic.net/blog/reverse-engineering-a-small-neural-network/). AIs sometimes say that 9.11 is greater than 9.9, and people have figured out that this is because they’re thinking of dates rather than decimals.[*](#ftnt49)

But we can’t answer questions much more complex than that. Nobody knows exactly why LLMs make the chess moves that they make; nobody knows precisely what causes them to occasionally [threaten and blackmail reporters](https://x.com/sethlazar/status/1626257535178280960). But that doesn’t mean there’s nothing to be known. When AIs work, they work for reasons; they operate too consistently across too many domains for it to just be chance. Those reasons are waiting to be understood.

For more on this topic, see the extended discussion titled “[Intelligence Isn’t Ineffable](/2/intelligence-isnt-ineffable).”

[*](#ftnt49_ref) For that matter, when small neural networks malfunctioned in the 1980s, researchers would sometimes print out the entire model’s weights on paper and study them until they figured out that (for example) the model was [getting stuck in a local equilibrium](https://x.com/layer07_yuxi/status/1956374217517088842?t=97elAlXBwpSG-fQirRcn4Q). Back when AIs were small enough to be understood, nobody argued that there was nothing there to understand.[But some AIs partly think in English — doesn’t that help?→](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/obvious-insights-take-time

“Obvious” Insights Take Time | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/2#extended-discussion)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## “Obvious” Insights Take Time

It’s hard to come across insights in AI, even when they look simple and obvious in retrospect.

This is important to understand because doing AI *right *will probably require a lot of insights. No matter how simple they might sound in retrospect, such insights can sometimes take decades of toil to find.

Toward that end, we’ll spotlight a few of the insights that power modern AIs.

If you happen to have some skill at programming, for instance, you might read Chapter 2 of the book and think that this “gradient descent” business sounds so simple that you could just run out and try it. But if you did, you’d probably quickly run into some sort of error. Perhaps your program would crash with a floating-point error because the numbers in one of the weights had gotten too large.

Back in the twentieth century, nobody knew how to make gradient descent work on a neural network with several layers of intermediate numbers between the input and the output. To avoid issues, programmers had to learn all sorts of tricks, like initializing all the weights in slightly clever ways that prevent them from getting too large. For example, instead of initializing all weights to a random number between 0 and 1 (or a random number with mean 0 and standard deviation 1), you’ve got to initialize the weights like that and then divide them all by a constant designed to ensure that the *next *layer’s numbers *also *won’t get too large during operation.

Gradient descent runs into problems when run on complicated formulas with lots of steps or “layers,” and dividing the initial random numbers by a constant is one of the primary ideas that enables “deep learning.” That trick wasn’t invented until six decades after neural networks were originally proposed in 1943.

The idea of using calculus to tweak the parameters was first discussed in 1962 and first applied to the idea of neural networks with more than one layer in 1967. It wasn’t really popularized until a paper in 1986 (which Geoffrey Hinton co-authored — this is one reason he’s called a “godfather of AI”). Note, however, that the more general idea of using calculus on differentiable questions to move in the direction of a correct answer — for example, in order to calculate a square root — was invented by Isaac Newton.

Another key trick is as follows. In the book, we give an example of gradient descent operations:

I’ll multiply each input-number with the weight in the first parameter, and then add it to the weight in the second parameter, and then I’ll replace it with zero if it’s negative, and then…

This list of operations is no mistake. Multiplication, addition, and “replace it with zero if it’s negative” are, more or less, the three critical operations in a neural network. The first two are the operators that make up a “matrix multiplication,” and the last one introduces a “nonlinearity” and thereby allows the network to learn nonlinear functions.

The formula for “replace it with zero if it’s negative” is  and is called a rectified linear unit (ReLU).[*](#ftnt67) The formula that people originally tried to use was the “sigmoid” formula:

There were good reasons for guessing that the more complicated “sigmoid” formula would work! From a shallow perspective, it makes the outputs range sensibly from 0 to 1 in a smooth way; and from a deeper perspective, it has some useful connections to probability theory. Even some modern deep neural networks use something like a sigmoid on some steps. But if you are just going to use one nonlinearity, a ReLU works much better.

The problem with the sigmoid formula is that it tends to make a lot of the outputs have very tiny gradients. And if most of the gradients are very small, gradient descent stops working…at least, unless you know the modern trick of taking larger gradient steps when tiny gradients always point in the same direction. (To our knowledge, this trick first appeared in the literature in 2012, when it was proposed by Geoffrey Hinton.)

“Make your initial random numbers smaller so their multiplied sums don’t get huge” and “use max(x, 0) instead of a complicated formula” and “take larger steps when tiny gradients keep pointing in the same direction” might sound like weirdly simple ideas to not invent for decades — especially with the way they sound like they’d be obvious in retrospect to a computer programmer who understands all this stuff. This is an important lesson for the way that science and engineering work in real life.

*Even when there is a simple and practical solution to some engineering challenge, often researchers don’t find it until they have tried and failed for decades. *You cannot rely on researchers seeing it as soon as a solution becomes important. You cannot rely on them seeing it within the next two years. Even if a solution seems obvious in retrospect, sometimes the field stumbles along for decades without it.

Later on, this will be a useful lesson to keep in mind in Part III of the book, when we discuss how ill-prepared humanity is for the challenge presented by superintelligence.

If the price of some mad inventors stumbling ahead is that everyone on Earth dies during this awkward baby stage, then we can’t let them stumble on ahead. The inventors will protest that there’s no way for them to figure out the simple, robust solution without being allowed to stumble around for a few decades; they’ll say it’s not realistic to expect them to figure it out in advance.

It is hopefully obvious to everyone who is not a mad inventor that, if these claims are true, we ought to shut down their efforts.

But that’s a topic we’ll take up again in Part III of the book, after we complete the argument that artificial superintelligence would have the means, motive, and opportunity to extinguish humanity. For now, we turn to the topic of how “obvious” ideas like the ones we’ve been discussing — and a few ideas that are quite a bit less obvious — come together to make an actual working AI model.

[*](#ftnt67_ref) Newer architectures will use more sophisticated functions. For instance, the Llama 3.1 architecture [described below](/2/a-full-description-of-an-llm) uses the [“SwiGLU” function](https://arxiv.org/pdf/2002.05202), which has a complicated formula that we won’t reproduce here.[A Full Description of an LLM→](/2/a-full-description-of-an-llm)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/what-good-does-knowledge-of-llms-do

What Good Does Knowledge of LLMs Do? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/2#extended-discussion)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## What Good Does Knowledge of LLMs Do?

What follows from understanding LLMs? How does it help us understand smarter-than-human AI and how to prevent everyone from dying?

One advantage it offers is that knowing concretely what goes on in there — at least the part we can see, the inscrutable numbers — can potentially feel more grounding, more solid, than if all you know is, “I woke up one day and the computers started talking for some reason.”

As an example: Maybe if you know that the current LLMs are built by training only 1 percent as many parameters as a human brain contains synapses, it’s easier to see why AI isn’t going to sit at the current capability level forever.

When designing an international treaty to halt the race toward superintelligence, it helps to know that “training” an AI is a separate phase of its existence from *running* the AI (the latter is called “inference”).

It also helps to know that the separation of these phases is a contingent and temporary fact about how *current* AI works, and that a future algorithm might change things. Today, you could write a treaty that separates its treatment of AI training and AI inference, but you’d have to be ready to change that theory if the algorithms changed.

Knowing that there is *an* algorithm in there is important, and so is seeing how, in some simple cases, it creates the properties of the AI that need to be regulated. If you understand the very basics of the algorithm, you are in a better place to hear about the sort of research that the AI industry is trying to do, and how that could affect the underlying rules if they’re allowed to proceed.

The transformer algorithm, without which current AIs would not exist, was a large breakthrough developed by a handful of people at Google. The next breakthrough like that might or might not send AI past a [critical threshold](/1/will-ai-cross-critical-thresholds-and-take-off). It’s easier to understand this if you have an idea of what a “transformer algorithm” does, how simple it is, and why it had such an impact on the field.

There is a lot of disinformation out there that relies on the listener not knowing how AI works. Some people will claim that humans understand what’s going on in current AIs, when they don’t. Some people will tell you that AIs could never be dangerous because they’re “[just math](/2/arent-ais-just-math),” as if there were an impassable chasm separating AI cognition based on truly enormous amounts of “math” and human cognition based on enormous amounts of “biochemistry.”

On July 8, 2025, Grok 3 started referring to itself as [MechaHitler](https://www.npr.org/2025/07/09/nx-s1-5462609/grok-elon-musk-antisemitic-racist-content). For some reason, the CEO of Twitter picked the following day to [resign](https://www.politico.com/news/2025/07/09/linda-yaccarino-x-ceo-resign-00443742).

In understanding what happened, it matters whether you think that Grok’s builders deliberately instructed Grok to behave that way or whether you realize that AIs are “grown,” and that AI developers have limited ability to control or predict their behavior.

It’s bad in one way if Grok’s builders created MechaHitler on purpose; it’s bad in a different way if the builders got MechaHitler *by accident*, trying to push Grok in some (possibly unrelated) direction without the ability to predict the effects this would have on Grok’s behavior.[*](#ftnt66)

We hope that the information we’ve provided in *If Anyone Builds It, Everyone Dies* provides a useful bulwark against common misconceptions and misinformation. For readers who are interested in more details, below we will go through some of the history and [basic ideas](/2/obvious-insights-take-time) behind the recent AI boom, and provide a [detailed breakdown](/2/a-full-description-of-an-llm) of how a specific LLM works.

Is it enough? Some people have claimed that only those at the very cutting edge of current research could possibly know whether AIs (whether LLM-like or not) are likely to destroy humanity.

I (Yudkowsky) once attended a conference in Washington, DC for people working on “AI policy.” While I was there, a couple of people approached me and asked if I could explain how transformers worked. “Well,” I said, “that would be a lot easier with a whiteboard, but to try for a lay summary of what goes on in there, the key idea is that for each token it calculates queries, keys, and values —” and started to go on for some time, trying to phrase everything in beginner-friendly terms. Eventually, the two people managed to get a word in edgewise and explain that they were actually AI programmers. They had been going around to everyone at the conference, checking whether people who claimed to work in AI policy could explain how transformers worked. They told me that I was the only person so far who’d been able to answer.

I was a bit worried to hear this.

There is a valid question about how much it really matters to AI policy exactly how transformers work — how much the small details change anything about the larger picture.

*Does* somebody who works in AI policy need to understand query-key-value? To one frame of mind — to nerds for whom this sort of learning comes easily — of course you should learn it; it might be important. To this frame of mind, it feels weird and disturbing if someone at a conference says they work in AI policy but has no idea how transformers work.

More pragmatically, a few aspects of transformers and their history may be relevant to larger issues. For instance, the standard algorithm costs larger and larger amounts of computation as the AI tries to consider more and more “context” simultaneously — longer documents, larger codebases. You cannot just spend 10x the computing resources and get an AI that works on a 10x larger project; you need to be doing something clever for 10x the project size to cost less than 100x the compute.

It also matters to policy how long the transformer algorithm took to invent, how many people were required to invent it, and how complicated that algorithm is. History is a useful (if imperfect) guide to how much we might need to prepare for another big breakthrough like that. Similarly, it’s relevant to AI policy how much of an improvement transformers represented over the previous technology (“recurrent neural networks”) for processing text — because that sort of thing might also happen again.

Do you actually need to be able to sketch out the QKV matrices?

Probably not. We can, and in a group of dozens of people working on AI policy, we would feel more optimistic if at least one had the background required to do the same. It doesn’t hurt to be sure; you never know what sort of important fact can end up lurking in a detail like that.

I (Yudkowsky) cannot sketch out from memory alone the details of a SwiGLU gate and how it differs from a GLU, because when I did look it up, the exact details there seemed to have no relevance to larger matters at all, so I didn’t memorize them. But it might be informative to the novice that SwiGLU was found by a kind of blind testing, and that the paper authors said outright they have no idea why these techniques work in practice. We already knew about many cases like that, but if you *didn’t *know that the people who come up with architectural improvements often say that they have no idea why it works, that’s a relevant piece of information.

All of which adds up to: Knowing at least a little about how LLMs work is important so that you can see how little* anybody *knows**about modern AI.

Sometimes, experts will pretend to have secret knowledge that can only be accessed by people who have worked for years at growing an AI. But they cannot name their knowledge, and the people writing papers say things like (to quote the paper introducing SwiGLU):

We offer no explanation as to why these architectures seem to work; we attribute their success, as all else, to divine benevolence.

Sometimes, scientific experts know things that we don’t know. But it is fairly rare in science for somebody to say, “I have terribly rare and rarefied knowledge which shows that what you say is incorrect, and you’ll just have to take my word about that; I cannot possibly say what sort of experimental result or mathematical formula I know about that you don’t.”

You can imagine a world in which only the people paid seven-figure salaries for knowing how to set the learning schedule on a gradient descent optimizer should be listened to, a world in which only they are smart enough to have read about the key experiments and learned the key formulas to know that humanity would be perfectly safe from machine superintelligence, or to know that machine superintelligence can’t be created for another 100 years. That kind of thing sometimes does happen in other fields of science! But when it does, the expert can usually point to some formula or experimental result and say, “This is the part that lay people don’t understand.” We cannot offhand recall a historical occasion where knowledge was claimed to be entirely inaccessible to a technically literate outside audience, and also that knowledge turned out to be true.

There may come a time when a representative of the AI industry slings an arm around your shoulder and insists that *they* understand what they’re building, that it’s all just numbers, that all will be well. It is useful, then, to know a little bit about the details of how AIs are grown, so that when someone makes this claim to you, you can ask them what makes them so sure.

[*](#ftnt66_ref) In some cases, AI mishaps can result from interactions between both factors. For our purposes, the important point is that one key factor is “AIs behaving in ways the programmers never wanted or anticipated,” even if there are sometimes other factors at play.
#### Notes

[1] *when they don’t: *We discuss a few such people when answering [Do experts understand what’s going on inside AIs?](/2/do-experts-understand-whats-going-on-inside-ais)[“Obvious” Insights Take Time→](/2/obvious-insights-take-time)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence

What makes you think people can build superhuman AI when they don’t even understand intelligence? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## What makes you think people can build superhuman AI when they don’t even understand intelligence?
#### Past AI progress hasn’t required much understanding of intelligence.

As explained in Chapter 2, the AI field has achieved its recent feats by employing gradient descent, a process that does not require humans to understand intelligence. Humans have gotten really quite far without needing to understand intelligence.
#### Natural selection didn’t need to “understand” intelligence.

Evolution was able to produce human intelligence just fine without natural selection ever understanding intelligence. Understanding may or may not be helpful in practice, but the idea that we *need *to understand it to produce it doesn’t hold water.[Don’t hallucinations show that modern AIs are weak?→](/2/dont-hallucinations-show-that-modern-ais-are-weak)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/why-does-gradient-descent-matter

Why does gradient descent matter? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Why does gradient descent matter?
#### It’s important for understanding how engineers can and cannot shape modern AIs.

If engineers are growing AIs that they don’t understand, then they have far less ability to shape how those AIs are going to behave. Lack of understanding constrains engineering.

The detailed picture of disaster that we paint in the remainder of the book stems from how, when humans demand that their AI become capable of doing something new, the solution they get is not something an engineer chose with purpose. It is a mostly-working answer stumbled over by a simple optimizer tweaking a hundred billion numbers by trial and error.
#### It’s important for understanding what sort of expertise AI experts do and do not have.

People who wish to rush ahead with building superintelligence will sometimes recruit someone with vaguely relevant credentials to go on TV and say, “Of course modern science understands what goes on inside an AI! Modern scientists built it, after all.”[*](#ftnt45)

If pressed, the expert can defend themselves by pointing out that there’s a sense in which all of this is true. After all, AI researchers write perfectly normal code that’s easy to understand, and this code is used to create AIs, in a roundabout way.

But the part that is readable and intelligible code is not the AI itself*, *but rather the automated machinery for tweaking trillions of numbers trillions of times, the framework used to grow the AI. And this is a crucial distinction for understanding what scientists do and do not know about modern AIs.

AI experts spend their time experimentally adjusting parts of the system, such as the code of the machinery that grows the AI. From these experiments and from similar experiments done by their peers, they learn many subtle tricks that help produce more capable AIs.

They may not have looked at any of the tiny inscrutable numbers that make up the AI’s “brain” in the last six months, but almost nobody actually does that, and AI engineers take that fact for granted. When a certain kind of engineer is told, “Nobody understands what goes on inside an AI,” they hear, “Nobody knows about the growing process.” And taking it that way, naturally they’re indignant.

We hope that understanding gradient descent will help clarify the actual state of affairs, and what sort of knowledge is being claimed by such experts. Experts may claim to know a great deal about the growing process, but very little is known about the inner workings of grown AIs.

[*](#ftnt45_ref)*vaguely relevant credentials:* For the most egregious example we know of, see “[Do experts understand what’s going on inside AIs?](/2/do-experts-understand-whats-going-on-inside-ais)”[Do experts understand what’s going on inside AIs?→](/2/do-experts-understand-whats-going-on-inside-ais)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark

Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?
#### No.

Just because AIs run on computers doesn’t mean their thinking must share the qualities we associate with computers, any more than your thinking must share the qualities associated with biology and chemistry and neurotransmitters.

When humans didn’t understand biochemistry, they attributed the liveliness of life to an irreplicable “vital essence.” But reality is not made of mundane material sometimes animated by a magical life-force. Life is made of mundane parts.

We do not mean to degrade intelligence, however, when we say that it is made of mundane parts and that machines could do the same work. See our extended discussion about [vitalism](/1/special-behavior-is-built-out-of-mundane-parts).

The heuristic “machines cannot compete with humans” was wrong when Kasparov predicted that a machine lacking human creativity could never beat him at chess; it was wrong when people thought that AIs could never draw pretty pictures; it was wrong when people thought that AIs could never chat conversationally. The human brain is an existence proof that physical matter really can implement higher forms of intelligence, sufficient for running a technological civilization; and the human brain is vanishingly unlikely to be the only way to do that work.

We’ll expand on this point in one of the online supplements to Chapter 3: [Anthropomorphism and Mechanomorphism](/3/anthropomorphism-and-mechanomorphism).
#### AIs are new, interesting, weird entities.

Airplanes fly, but they don’t flap their wings. Robot arms function without soft skin or red blood. Transistors work very differently from neurons, and DeepBlue played world-beating chess without the kinds of thoughts that went on inside of Garry Kasparov. This is the usual course of technology.

When we don’t understand flight or game-playing well, we sometimes imagine that the approach used by biology is the only possible approach that can work. Once we understand a field a little better, this turns out to be very wrong.

The work of steering a chessboard was done quite differently by DeepBlue than by Kasparov, and the work of steering the world at large will almost surely follow a similar pattern. As discussed in Chapter 2, AI looks like it’s already doing the work that it’s doing in a very different way than humans would — though this may be a bit harder to see when it uses its intelligence to imitate humans! In Chapter 4, we’ll explore how these differences are likely to lead to weird places, with serious consequences.[Won’t LLMs be like the humans in the data they’re trained on?→](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on

Won’t LLMs be like the humans in the data they’re trained on? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/2)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Won’t LLMs be like the humans in the data they’re trained on?
#### There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.

AIs like ChatGPT are trained to accurately predict their training data. And their training data is made mostly from human text, such as Wikipedia pages and chat room conversations. (This part of the training process is called “pre-training,” which is what the “P” in “GPT” stands for.) Early LLMs like GPT-2 were trained *exclusively* for prediction in this way, while more recent AIs are also trained on things like accuracy when solving (computer-generated) math problems, and giving good responses according to another AI model, and various other goals.

But consider an AI trained only on predicting human-generated text. Must it become human-like?

Suppose you take an excellent actress[*](#ftnt58) and have her learn to predict the behavior of all the drunks in a bar. Not “learn how to play an average stereotypical drunk,” but rather “learn all the drunks in this one bar as *individuals*.” LLMs aren’t trained to *imitate averages;* they’re trained to *predict individual next words* using all the context of previous words.

It would be foolish to expect this actress to *become perpetually drunk* in the process of learning to predict what each drunk person will say. She might develop parts of her brain that are pretty good at acting drunk, but she would not become drunk *herself.*

Even if you later ask the actress to predict what some particular drunk in the bar would do, and then to outwardly behave according to her own prediction, you still wouldn’t expect the actress to then feel drunk inside.

Would it change anything if we were constantly tweaking the actress’s brain to make *even better* drunken-individual predictions? Probably not. If she *actually* ended up drunk, her thoughts would accordingly end up sloppy, interfering with the hard work of an actress. She might get confused about whether she was predicting a drunk Alice or a drunk Carol. Her predictions would get worse, and our hypothetical brain-tweaker would learn not to tweak her brain that way.

Or, to put it another way: A human who becomes excellent at imitating birds and understanding their psychology doesn’t thereby become a bird in a human’s body, nor even become especially psychologically birdlike in their day-to-day life.

Similarly, training an LLM to make excellent predictions about the next word output by many different people writing about their past psychedelic experiences should not thereby train the LLM itself to be just like a human on drugs. If the LLM’s actual internal cognitions were to be distorted in a way reminiscent of “being on drugs,” this would interfere with the LLM’s hard work of next-word prediction; it might get confused and think an English speaker was going to continue in Chinese.

We are not saying, “No machine can ever have anything resembling a mental state a human has inside.” We are saying that the current kind of ML technology should not by default be expected to create drunk-predicting engines that work by getting drunk themselves.

The work of figuring out how to predict all sorts of different humans is different from the work of being one human. Which means that AIs built with anything like today’s methods should not be expected to become much like a human, in the course of learning to act like any given one of us depending on the request.[†](#ftnt59)
#### The architecture of LLMs is very different from that of humans.

Refer to Chapter 2 for a brief discussion of how LLMs seem pretty alien.

In Chapter 4, we’ll go deeper into how AIs wind up with very weird preferences and pursuits — a phenomenon that we’ve already begun to see in the wild, with more examples piling up even after the book went to print. We collect some [examples](/4/arent-developers-regularly-making-their-ais-nice-and-safe-and-obedient) in the online resources for Chapter 4.

[*](#ftnt58_ref) We aren’t using the more modern, gender-neutral word “actor” in these resources because “actress” prevents ambiguity about whether we are referring to “a stage or screen performer” versus “an agent that takes actions.”

[†](#ftnt59_ref) If you train an AI to predict how your friend Alice acts when angry, then this will likely allow the AI to *imitate* Alice’s angry behavior too — at least once the AI’s predictions become good enough. But the act of getting good at predicting this won’t make the AI *actually *angry; and when the AI uses its prediction to imitate Alice, that won’t make the AI “actually angry” either.

When you leap to the conclusion that angry-looking behaviors must go with an angry underlying* feeling*, it’s likely that you aren’t just putting forward an abstract theory that AIs and humans have something deeply in common. You’re to some extent attributing anger *automatically *— the AI just *seems angry*, like a convincing actress.

In the case of a human actress, you at least know that the actress *does *ever experience genuine anger. Being human, she may be drawing on her own feelings in order to convincingly portray anger on command. But LLMs share none of that. It really is a much less sensible inference to say, “That LLM sounds angry to me and therefore it’s probably actually angry.”

Why not expect LLMs to solve the problem of predicting anger by becoming angry themselves?

To some extent, that’s how humans would solve the problem. Part of why humans are good at predicting other humans is that we’ve evolved to “put ourselves in the other person’s shoes.” To predict how Alice will act if she gets angry, I let some part of *myself* be angry, and I see how *I *would then behave. This is a topic we’ll discuss more in the [online supplement](/4/human-values-are-contingent) to Chapter 4.

But the whole reason this works for humans, when we try to predict one another, is that we all share the same basic brain structure. This gives humans the shortcut of using their brain as a template for the other person’s brain.

LLMs are in a vastly different position. Their trillions of tokens of training try to get them to predict, from scratch, a wide variety of human minds that are nothing like the LLM at the outset. The most effective way to solve this other-prediction problem will not look like the AI *becoming angry first* in order to figure out what anger is and figure out how angry humans behave.  

More generally: Efficient, complicated, uncertain reasoning about some complex event doesn’t *usually* resemble a detailed internal forward simulation of that event. For instance, the uncertain reasoning will often track many different live possibilities. Even when forward simulation *is *the most effective practical prediction method, the simulation doesn’t usually leak out and turn the predictor into the thing it’s predicting.

And so there are many behaviors, both good and evil, that an LLM can exhibit; and yet at the end of the day what we’re seeing is a mask, and what lies behind the mask is something [unknown](/4/doesnt-the-claude-chatbot-show-signs-of-being-aligned#todays-llms-are-like-aliens-wearing-many-masks), and something that [isn’t very human-like at all](/4/arent-developers-regularly-making-their-ais-nice-and-safe-and-obedient#ais-appear-to-be-psychologically-alien).

Currently, a little bit, and maybe more by the time you read this, AIs have been trained to predict some *very* human-like behaviors; and frameworks like ChatGPT or Claude can turn these predictions into nice-appearing outward behavior. Not just human behaviors, but humane behaviors — even noble ones.

AI companies could try to train AIs to predict and imitate some of the more beautiful and true sides of the human spirit. They may try it, for cynical reasons or for nobler ones. In a way, it says a lot about this field and its people that, as of late 2024, nobody has *already* tried training an AI to predict the outward behavior of just…being a nice person. To our knowledge, nobody has tried just making a dataset of all and only the kind utterances of humanity and training an AI only on that. Maybe if someone did, they’d develop an AI that simply acted in a kindly way, that expressed beautiful sentiments, that acted as a beacon of hope.

It wouldn’t be real.

We wish desperately that it would be real, but it wouldn’t be real.

Depending on how effectively the LLM predicts the preferred answers of users like us — the things we would prefer to hear about noble sentiments, about hope and dreams, about only wanting a beautiful future together for both species — it’s possible that one or both of your authors will end up crying, if ever the AI companies create such an entity. But it won’t be real, any more than an extensively rehearsed and corrected actress who was finally made to recite those words in a play would be real. The curtain falls; there isn’t a dry eye in the house; but it was still, at the end of it all, a performance.

  
That is not how you would go about building an artificial intelligence that actually held beautiful sentiments, that was really working with all its heart to steer for a brighter future. AI growers don’t know how to grow an AI that feels that way inside. They train AIs to predict, and to turn that prediction into an imitation.

The AI companies (or hobbyists) may gesture at the actress they grew, and say, “How can you possibly doubt this poor creature? Look at how you’re hurting her feelings.” They may even manage to convince themselves it’s the truth. But tweaking black boxes until something inside them learns to predict noble words is not how beautiful minds would be made, if human minds ever learned to make them.

Stated more plainly: Anthropomorphic behavior shouldn’t be expected to pop up *spontaneously*. Additional arguments must be made that when AI companies force humanlike behavior deliberately, the inner “actress” ends up resembling the outer human face that she has been grown and trained to predict.[How could an AI trained only on human data surpass humans?→](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[Resources](/resources) › [Chapter 2](/2)[
### Why does gradient descent matter?It’s important for understanding how engineers can and cannot shape modern AIs.2 min read](/2/why-does-gradient-descent-matter)[
### Do experts understand what’s going on inside AIs?No.12 min read](/2/do-experts-understand-whats-going-on-inside-ais)[
### Is intelligence understandable in principle?Probably.1 min read](/2/is-intelligence-understandable-in-principle)[
### But some AIs partly think in English — doesn’t that help?Not as much as you might hope; we already see signs of infidelity.5 min read](/2/but-some-ais-partly-think-in-english-doesnt-that-help)[
### Aren’t AIs “just math”?Saying AIs are “just math” is like saying humans are “just biochemistry.”3 min read](/2/arent-ais-just-math)[
### Aren’t AIs just predicting the next token?Predicting tokens requires understanding the world.3 min read](/2/arent-ais-just-predicting-the-next-token)[
### Aren’t AIs only able to parrot back what humans say?AIs can already surpass their training data, or forego human data.6 min read](/2/arent-ais-only-able-to-parrot-back-what-humans-say)[
### Won’t AIs inevitably be cold and logical, or otherwise missing some crucial spark?No.2 min read](/2/wont-ais-inevitably-be-cold-and-logical-or-otherwise-missing-some-crucial-spark)[
### Won’t LLMs be like the humans in the data they’re trained on?There’s a difference between the machinery it takes to be one person and the machinery it takes to predict many individuals.8 min read](/2/wont-llms-be-like-the-humans-in-the-data-theyre-trained-on)[
### How could an AI trained only on human data surpass humans?Perhaps by learning general skills and implementing them better.5 min read](/2/how-could-an-ai-trained-only-on-human-data-surpass-humans)[
### What makes you think people can build superhuman AI when they don’t even understand intelligence?Past AI progress hasn’t required much understanding of intelligence.1 min read](/2/what-makes-you-think-people-can-build-superhuman-ai-when-they-dont-even-understand-intelligence)[
### Don’t hallucinations show that modern AIs are weak?Hallucinations reveal both a limitation and a misalignment.6 min read](/2/dont-hallucinations-show-that-modern-ais-are-weak)[
### But won’t we run out of data before AI goes all the way? Or electrical power? Or funding?Probably not.2 min read](/2/but-wont-we-run-out-of-data-before-ai-goes-all-the-way-or-electrical-power-or-funding)[
### Could LLMs advance all the way to superintelligence?Other approaches may achieve superintelligence soon, even if LLMs don’t.1 min read](/2/could-llms-advance-all-the-way-to-superintelligence)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### What Good Does Knowledge of LLMs Do?](/2/what-good-does-knowledge-of-llms-do)[
### “Obvious” Insights Take Time](/2/obvious-insights-take-time)[
### A Full Description of an LLM](/2/a-full-description-of-an-llm)Load more[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)
