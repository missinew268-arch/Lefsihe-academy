/* ملف قاعدة البيانات: data.js (المنهاج الجزائري الكامل - جميع المواد الأدبية) */

window.db = {
    // =================================================================
    // 1. اللغة العربية (مضافة سابقاً)
    // =================================================================
    // ... (المحتوى السابق للغة العربية)

    // =================================================================
    // 2. الفلسفة (مضافة سابقاً)
    // =================================================================
    // ... (المحتوى السابق للفلسفة)

    // =================================================================
    // 3. التاريخ (مضافة سابقاً)
    // =================================================================
    // ... (المحتوى السابق للتاريخ)

    // =================================================================
    // 4. اللغة الإنجليزية
    // =================================================================
    english: {
        title: "English Language",
        rtl: false,
        trimesters: {
            1: [
                { header: true, title: "UNIT 1: ETHICS IN BUSINESS" },
                {
                    title: "1. Business Ethics Vocabulary",
                    content: `
                        <h2 class="doc-h2">The World of Business Ethics</h2>
                        
                        <h3 class="doc-h3">Core Ethical Concepts:</h3>
                        <div class="callout important">
                            <strong>Ethics:</strong> Moral principles that govern a person's behavior
                            <br><strong>Integrity:</strong> Quality of being honest and having strong moral principles
                            <br><strong>Transparency:</strong> Operating in such a way that it is easy for others to see what actions are performed
                            <br><strong>Accountability:</strong> Being responsible for one's actions and decisions
                        </div>
                        
                        <h3 class="doc-h3">Forms of Corruption:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Term</th>
                                <th>Definition</th>
                                <th>Example</th>
                                <th>Consequences</th>
                            </tr>
                            <tr>
                                <td><strong>Bribery</strong></td>
                                <td>Offering money or gifts to influence someone's decisions</td>
                                <td>Giving money to a government official to win a contract</td>
                                <td>Unfair competition, poor quality products, increased costs</td>
                            </tr>
                            <tr>
                                <td><strong>Embezzlement</strong></td>
                                <td>Stealing money placed in one's trust</td>
                                <td>A bank manager stealing from customers' accounts</td>
                                <td>Financial losses, loss of trust, legal consequences</td>
                            </tr>
                            <tr>
                                <td><strong>Money Laundering</strong></td>
                                <td>Making illegally-gained money appear legal</td>
                                <td>Using a restaurant to hide drug money</td>
                                <td>Strengthens criminal networks, distorts economy</td>
                            </tr>
                            <tr>
                                <td><strong>Nepotism</strong></td>
                                <td>Favoring relatives in employment</td>
                                <td>Hiring unqualified family members</td>
                                <td>Poor performance, demotivation of qualified staff</td>
                            </tr>
                            <tr>
                                <td><strong>Tax Evasion</strong></td>
                                <td>Illegally avoiding paying taxes</td>
                                <td>Hiding income from tax authorities</td>
                                <td>Reduced public services, unfair burden on honest taxpayers</td>
                            </tr>
                            <tr>
                                <td><strong>Whistleblowing</strong></td>
                                <td>Reporting illegal activities within an organization</td>
                                <td>An employee reporting safety violations</td>
                                <td>Exposes wrongdoing but may lead to retaliation</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Anti-Corruption Terms:</h3>
                        <div class="callout info">
                            <strong>Code of Conduct:</strong> Set of rules outlining responsibilities of individuals
                            <br><strong>Audit:</strong> Official inspection of accounts
                            <br><strong>Compliance:</strong> Conforming to rules, standards, or laws
                            <br><strong>Due Diligence:</strong> Careful investigation before entering an agreement
                            <br><strong>Governance:</strong> System by which organizations are directed and controlled
                        </div>
                    `
                },
                {
                    title: "2. Grammar: Conditionals",
                    content: `
                        <h2 class="doc-h2">Mastering Conditionals</h2>
                        
                        <h3 class="doc-h3">Zero Conditional (General Truths):</h3>
                        <div class="callout important">
                            <strong>Form:</strong> If/When + Present Simple, Present Simple
                            <br><strong>Use:</strong> Scientific facts, general truths, habitual actions
                            <br><strong>Examples:</strong>
                            <br>• If you <strong>heat</strong> ice, it <strong>melts</strong>.
                            <br>• When companies <strong>practice</strong> transparency, people <strong>trust</strong> them.
                            <br>• If employees <strong>are</strong> honest, the company <strong>thrives</strong>.
                        </div>
                        
                        <h3 class="doc-h3">First Conditional (Real Possibility):</h3>
                        <div class="callout info">
                            <strong>Form:</strong> If + Present Simple, will + base verb
                            <br><strong>Use:</strong> Real or likely situations in the future
                            <br><strong>Examples:</strong>
                            <br>• If the government <strong>passes</strong> strict laws, corruption <strong>will decrease</strong>.
                            <br>• If you <strong>report</strong> the fraud, you <strong>will protect</strong> the company.
                            <br>• Unless we <strong>act</strong> now, the situation <strong>will worsen</strong>.
                        </div>
                        
                        <h3 class="doc-h3">Special Conditional Linkers:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Linker</th>
                                <th>Meaning</th>
                                <th>Structure</th>
                                <th>Example</th>
                            </tr>
                            <tr>
                                <td><strong>Provided that</strong></td>
                                <td>On condition that</td>
                                <td>Provided that + present, will + base</td>
                                <td>You will succeed <strong>provided that</strong> you work hard.</td>
                            </tr>
                            <tr>
                                <td><strong>As long as</strong></td>
                                <td>Only if</td>
                                <td>As long as + present, will + base</td>
                                <td>Business will thrive <strong>as long as</strong> it's ethical.</td>
                            </tr>
                            <tr>
                                <td><strong>Unless</strong></td>
                                <td>If...not</td>
                                <td>Unless + positive verb, will + base</td>
                                <td><strong>Unless</strong> we stop bribery, the economy will suffer.</td>
                            </tr>
                            <tr>
                                <td><strong>In case</strong></td>
                                <td>Because maybe</td>
                                <td>In case + present, present/future</td>
                                <td>Keep records <strong>in case</strong> there's an audit.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Second Conditional (Unreal Present):</h3>
                        <div class="callout important">
                            <strong>Form:</strong> If + Past Simple, would + base verb
                            <br><strong>Use:</strong> Hypothetical, imaginary, unlikely situations
                            <br><strong>Examples:</strong>
                            <br>• If I <strong>were</strong> the CEO, I <strong>would implement</strong> strict ethical rules.
                            <br>• If companies <strong>cared</strong> more about ethics, they <strong>would have</strong> better reputations.
                            <br>• What <strong>would</strong> you <strong>do</strong> if you <strong>witnessed</strong> corruption?
                        </div>
                        
                        <h3 class="doc-h3">Third Conditional (Unreal Past):</h3>
                        <div class="callout info">
                            <strong>Form:</strong> If + Past Perfect, would have + past participle
                            <br><strong>Use:</strong> Regrets, criticism, imaginary past situations
                            <br><strong>Examples:</strong>
                            <br>• If the company <strong>had implemented</strong> better controls, the fraud <strong>would not have occurred</strong>.
                            <br>• The manager <strong>would not have been</strong> arrested if he <strong>had been</strong> honest.
                            <br>• If they <strong>had listened</strong to the whistleblower, they <strong>would have saved</strong> millions.
                        </div>
                        
                        <h3 class="doc-h3">Mixed Conditionals:</h3>
                        <ul class="doc-ul">
                            <li><strong>Past condition → Present result:</strong> If + Past Perfect, would + base verb
                                <br><em>Example:</em> If you <strong>had studied</strong> business ethics, you <strong>would know</strong> what to do.</li>
                            <li><strong>Present condition → Past result:</strong> If + Past Simple, would have + past participle
                                <br><em>Example:</em> If you <strong>were</strong> more ethical, you <strong>would not have gotten</strong> into trouble.</li>
                        </ul>
                    `
                },
                {
                    title: "3. Grammar: Wish and Regret",
                    content: `
                        <h2 class="doc-h2">Expressing Wishes and Regrets</h2>
                        
                        <h3 class="doc-h3">Wish + Past Simple (Present Regret):</h3>
                        <div class="callout important">
                            <strong>Form:</strong> I wish + Past Simple
                            <br><strong>Use:</strong> To express regret about a present situation
                            <br><strong>Key Point:</strong> We imagine the opposite of the current reality
                            <br><strong>Examples:</strong>
                            <br>• I wish I <strong>knew</strong> more about business ethics. (But I don't know enough)
                            <br>• She wishes she <strong>had</strong> more power to fight corruption. (But she doesn't have power)
                            <br>• They wish their company <strong>was</strong> more transparent. (But it isn't)
                            <br><strong>Note:</strong> With "to be", we can use "was" or "were" (were is more formal)
                        </div>
                        
                        <h3 class="doc-h3">Wish + Past Perfect (Past Regret):</h3>
                        <div class="callout info">
                            <strong>Form:</strong> I wish + Past Perfect (had + past participle)
                            <br><strong>Use:</strong> To express regret about a past situation
                            <br><strong>Examples:</strong>
                            <br>• I wish I <strong>had reported</strong> the fraud earlier. (But I didn't report it)
                            <br>• He wishes he <strong>had not accepted</strong> the bribe. (But he accepted it)
                            <br>• We wish the government <strong>had taken</strong> stronger action. (But they didn't)
                        </div>
                        
                        <h3 class="doc-h3">Wish + Would (Future Desire/Complaint):</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Situation</th>
                                <th>Form</th>
                                <th>Example</th>
                                <th>Meaning</th>
                            </tr>
                            <tr>
                                <td>Desire for change</td>
                                <td>I wish + would + base verb</td>
                                <td>I wish corruption <strong>would end</strong>.</td>
                                <td>I want corruption to end</td>
                            </tr>
                            <tr>
                                <td>Complaint about habits</td>
                                <td>I wish + would + base verb</td>
                                <td>I wish people <strong>would stop</strong> cheating.</td>
                                <td>I'm annoyed by people cheating</td>
                            </tr>
                            <tr>
                                <td>Criticism of situation</td>
                                <td>I wish + would + base verb</td>
                                <td>I wish the system <strong>would change</strong>.</td>
                                <td>The system needs to change</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">If Only (Stronger Wishes):</h3>
                        <div class="callout important">
                            <strong>If only = I wish (but stronger emotion)</strong>
                            <br><strong>Examples:</strong>
                            <br>• <strong>If only</strong> I <strong>had known</strong> about the fraud! (Past regret)
                            <br>• <strong>If only</strong> companies <strong>were</strong> more ethical! (Present regret)
                            <br>• <strong>If only</strong> the government <strong>would act</strong>! (Future desire)
                        </div>
                        
                        <h3 class="doc-h3">It's Time/It's High Time:</h3>
                        <div class="callout info">
                            <strong>Structure:</strong> It's (high) time + Past Simple
                            <br><strong>Meaning:</strong> Something should be done now (it's late)
                            <br><strong>Examples:</strong>
                            <br>• <strong>It's time</strong> we <strong>took</strong> action against corruption.
                            <br>• <strong>It's high time</strong> the government <strong>implemented</strong> stricter laws.
                            <br>• <strong>It's time</strong> companies <strong>became</strong> more accountable.
                        </div>
                        
                        <h3 class="doc-h3">Would Rather/Prefer:</h3>
                        <ul class="doc-ul">
                            <li><strong>Present/Future preference:</strong> I'd rather + base verb (without to)
                                <br><em>Example:</em> I'd rather <strong>work</strong> for an ethical company.</li>
                            <li><strong>Past preference:</strong> I'd rather + have + past participle
                                <br><em>Example:</em> I'd rather <strong>have reported</strong> the fraud.</li>
                            <li><strong>Comparison:</strong> I'd rather + base verb + than + base verb
                                <br><em>Example:</em> I'd rather <strong>be</strong> poor <strong>than</strong> be corrupt.</li>
                            <li><strong>Prefer structure:</strong> I prefer + verb-ing + to + verb-ing
                                <br><em>Example:</em> I prefer <strong>following</strong> ethics <strong>to breaking</strong> rules.</li>
                        </ul>
                    `
                },
                {
                    title: "4. Writing: Argumentative Essay",
                    content: `
                        <h2 class="doc-h2">How to Write an Argumentative Essay</h2>
                        
                        <h3 class="doc-h3">Structure of an Argumentative Essay:</h3>
                        <div class="callout important">
                            <strong>1. Introduction (1 paragraph):</strong>
                            <br>• Hook/Attention grabber
                            <br>• Background information
                            <br>• Thesis statement (your main argument)
                            <br><br>
                            <strong>2. Body (3-4 paragraphs):</strong>
                            <br>• Topic sentence for each paragraph
                            <br>• Supporting arguments with evidence
                            <br>• Examples and explanations
                            <br>• Counterarguments and refutations
                            <br><br>
                            <strong>3. Conclusion (1 paragraph):</strong>
                            <br>• Restate thesis in different words
                            <br>• Summarize main points
                            <br>• Final thought or call to action
                        </div>
                        
                        <h3 class="doc-h3">Sample Topic: "Fighting Corruption in Business"</h3>
                        
                        <h4 class="doc-h4">Introduction Example:</h4>
                        <div class="doc-quote">
                            "Corruption is like a cancer that eats away at the foundations of society. From small bribes to large-scale embezzlement, unethical practices undermine trust, distort markets, and hinder development. While some argue that corruption is inevitable in business, I firmly believe that through strict laws, ethical education, and corporate responsibility, we can effectively combat this plague and build a more just economic system."
                        </div>
                        
                        <h4 class="doc-h4">Body Paragraph Structure:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Element</th>
                                <th>Example</th>
                                <th>Purpose</th>
                            </tr>
                            <tr>
                                <td><strong>Topic Sentence</strong></td>
                                <td>First and foremost, governments must implement and enforce strict anti-corruption laws.</td>
                                <td>States the main idea of the paragraph</td>
                            </tr>
                            <tr>
                                <td><strong>Argument</strong></td>
                                <td>Without strong legal frameworks, corrupt individuals operate with impunity.</td>
                                <td>Explains why this point is important</td>
                            </tr>
                            <tr>
                                <td><strong>Example</strong></td>
                                <td>For instance, countries like Singapore and Denmark have successfully reduced corruption through stringent legislation and independent anti-corruption agencies.</td>
                                <td>Provides concrete evidence</td>
                            </tr>
                            <tr>
                                <td><strong>Explanation</strong></td>
                                <td>These measures create fear of consequences, making corruption less attractive.</td>
                                <td>Shows how the example supports the argument</td>
                            </tr>
                            <tr>
                                <td><strong>Counterargument</strong></td>
                                <td>Some may claim that strict laws hinder business efficiency.</td>
                                <td>Addresses opposing views</td>
                            </tr>
                            <tr>
                                <td><strong>Refutation</strong></td>
                                <td>However, in the long run, ethical business environments actually attract more investment and foster sustainable growth.</td>
                                <td>Weakens the counterargument</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">Useful Phrases for Argumentative Writing:</h4>
                        <div class="callout info">
                            <strong>Introducing arguments:</strong>
                            <br>• First and foremost, • Secondly, • Furthermore, • Moreover, • In addition
                            <br><br>
                            <strong>Giving examples:</strong>
                            <br>• For instance, • For example, • Such as, • To illustrate, • A case in point is
                            <br><br>
                            <strong>Showing contrast:</strong>
                            <br>• However, • On the other hand, • Conversely, • Nevertheless, • Despite this
                            <br><br>
                            <strong>Emphasizing points:</strong>
                            <br>• Indeed, • In fact, • Certainly, • Undoubtedly, • It is clear that
                            <br><br>
                            <strong>Concluding:</strong>
                            <br>• In conclusion, • To sum up, • Therefore, • Thus, • Consequently
                        </div>
                        
                        <h4 class="doc-h4">Conclusion Example:</h4>
                        <div class="doc-quote">
                            "In conclusion, fighting corruption requires a multi-faceted approach involving government action, corporate responsibility, and individual integrity. While the battle may be challenging, the benefits of an ethical business environment—increased trust, sustainable growth, and social justice—are worth the effort. It is high time that all stakeholders worked together to eradicate corruption and build economies based on fairness and transparency."
                        </div>
                        
                        <h3 class="doc-h3">Common Essay Topics:</h3>
                        <ul class="doc-ul">
                            <li>"The role of education in preventing corruption"</li>
                            <li>"Should whistleblowers be better protected?"</li>
                            <li>"Corporate social responsibility vs. profit maximization"</li>
                            <li>"The impact of corruption on economic development"</li>
                            <li>"Technology as a tool to fight corruption"</li>
                            <li>"Ethical leadership in modern business"</li>
                        </ul>
                    `
                }
            ],

            2: [
                { header: true, title: "UNIT 2: ANCIENT CIVILIZATIONS" },
                {
                    title: "1. Vocabulary of Ancient Civilizations",
                    content: `
                        <h2 class="doc-h2">The Language of Ancient Civilizations</h2>
                        
                        <h3 class="doc-h3">Key Civilizations:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Civilization</th>
                                <th>Time Period</th>
                                <th>Location</th>
                                <th>Major Achievements</th>
                            </tr>
                            <tr>
                                <td><strong>Mesopotamia</strong></td>
                                <td>3500-500 BCE</td>
                                <td>Between Tigris and Euphrates (Iraq)</td>
                                <td>Cuneiform writing, wheel, laws (Hammurabi's Code)</td>
                            </tr>
                            <tr>
                                <td><strong>Ancient Egypt</strong></td>
                                <td>3100-332 BCE</td>
                                <td>Nile River Valley</td>
                                <td>Pyramids, hieroglyphics, mummification, calendar</td>
                            </tr>
                            <tr>
                                <td><strong>Ancient Greece</strong></td>
                                <td>800-146 BCE</td>
                                <td>Greek peninsula and islands</td>
                                <td>Democracy, philosophy, Olympics, architecture</td>
                            </tr>
                            <tr>
                                <td><strong>Roman Empire</strong></td>
                                <td>27 BCE-476 CE</td>
                                <td>Mediterranean basin</td>
                                <td>Law, engineering, roads, aqueducts, Latin language</td>
                            </tr>
                            <tr>
                                <td><strong>Indus Valley</strong></td>
                                <td>3300-1300 BCE</td>
                                <td>Pakistan and NW India</td>
                                <td>Urban planning, drainage systems, trade</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Vocabulary for Rise and Fall:</h3>
                        <div class="callout important">
                            <strong>Rise/Emergence:</strong>
                            <br>• Emerge • Originate • Develop • Flourish • Thrive • Prosper • Expand • Grow • Rise • Bloom
                            <br><br>
                            <strong>Fall/Decline:</strong>
                            <br>• Decline • Fall • Collapse • Crumble • Decay • Deteriorate • Weaken • Diminish • Vanish • Disappear
                            <br><br>
                            <strong>Stability:</strong>
                            <br>• Endure • Last • Persist • Survive • Maintain • Sustain • Preserve
                        </div>
                        
                        <h3 class="doc-h3">Ancient Egyptian Terminology:</h3>
                        <div class="callout info">
                            <strong>Pharaoh:</strong> King of ancient Egypt
                            <br><strong>Hieroglyphics:</strong> Ancient Egyptian writing system
                            <br><strong>Pyramid:</strong> Monumental tomb for pharaohs
                            <br><strong>Sphinx:</strong> Mythical creature with lion's body and human head
                            <br><strong>Mummification:</strong> Preservation of dead bodies
                            <br><strong>Papyrus:</strong> Early form of paper made from reeds
                            <br><strong>Obelisk:</strong> Tall, four-sided monument
                            <br><strong>Sarcophagus:</strong> Stone coffin
                        </div>
                        
                        <h3 class="doc-h3">Mesopotamian Terms:</h3>
                        <ul class="doc-ul">
                            <li><strong>Cuneiform:</strong> Wedge-shaped writing on clay tablets</li>
                            <li><strong>Ziggurat:</strong> Step pyramid temple</li>
                            <li><strong>City-state:</strong> Independent city with surrounding territory</li>
                            <li><strong>Irrigation:</strong> Artificial watering of land</li>
                            <li><strong>Cradle of civilization:</strong> Where civilization began</li>
                            <li><strong>Code of Hammurabi:</strong> One of the earliest law codes</li>
                        </ul>
                        
                        <h3 class="doc-h3">Greek and Roman Terms:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Greek Terms</th>
                                <th>Meaning</th>
                                <th>Roman Terms</th>
                                <th>Meaning</th>
                            </tr>
                            <tr>
                                <td><strong>Polis</strong></td>
                                <td>City-state</td>
                                <td><strong>Republic</strong></td>
                                <td>System without monarch</td>
                            </tr>
                            <tr>
                                <td><strong>Democracy</strong></td>
                                <td>Rule by the people</td>
                                <td><strong>Empire</strong></td>
                                <td>Large territory under one ruler</td>
                            </tr>
                            <tr>
                                <td><strong>Philosophy</strong></td>
                                <td>Love of wisdom</td>
                                <td><strong>Aqueduct</strong></td>
                                <td>Water transport system</td>
                            </tr>
                            <tr>
                                <td><strong>Acropolis</strong></td>
                                <td>High city with temples</td>
                                <td><strong>Colosseum</strong></td>
                                <td>Amphitheater for games</td>
                            </tr>
                            <tr>
                                <td><strong>Olympics</strong></td>
                                <td>Ancient athletic games</td>
                                <td><strong>Gladiator</strong></td>
                                <td>Professional fighter</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "2. Grammar: Past Perfect",
                    content: `
                        <h2 class="doc-h2">Past Perfect Tense for Sequencing Events</h2>
                        
                        <h3 class="doc-h3">Formation of Past Perfect:</h3>
                        <div class="callout important">
                            <strong>Structure:</strong> Had + Past Participle
                            <br><strong>Examples:</strong>
                            <br>• I <strong>had finished</strong> my work before you arrived.
                            <br>• She <strong>had already eaten</strong> when I invited her to dinner.
                            <br>• They <strong>had built</strong> the pyramids long before modern times.
                            <br><strong>Negative:</strong> Had not (hadn't) + past participle
                            <br><strong>Question:</strong> Had + subject + past participle?
                        </div>
                        
                        <h3 class="doc-h3">Uses of Past Perfect:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Use</th>
                                <th>Explanation</th>
                                <th>Example</th>
                            </tr>
                            <tr>
                                <td><strong>Completed action before another past action</strong></td>
                                <td>Shows which action happened first</td>
                                <td>The Egyptians <strong>had developed</strong> writing before the Greeks.</td>
                            </tr>
                            <tr>
                                <td><strong>Cause and effect in the past</strong></td>
                                <td>Explains why something happened</td>
                                <td>Because they <strong>had mastered</strong> irrigation, they could farm in the desert.</td>
                            </tr>
                            <tr>
                                <td><strong>Reported speech</strong></td>
                                <td>When reporting past statements</td>
                                <td>He said he <strong>had visited</strong> the pyramids.</td>
                            </tr>
                            <tr>
                                <td><strong>Third conditional</strong></td>
                                <td>Imaginary past situations</td>
                                <td>If they <strong>had known</strong> about earthquakes, they <strong>would have built</strong> stronger structures.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Time Expressions with Past Perfect:</h3>
                        <div class="callout info">
                            <strong>Before:</strong> Past Perfect comes before Past Simple
                            <br><em>Example:</em> They <strong>had already left</strong> before we arrived.
                            <br><br>
                            <strong>After:</strong> Past Simple comes before Past Perfect
                            <br><em>Example:</em> After the civilization <strong>collapsed</strong>, people <strong>had forgotten</strong> the writing system.
                            <br><br>
                            <strong>By the time:</strong> Similar to "before"
                            <br><em>Example:</em> By the time archaeologists arrived, looters <strong>had stolen</strong> many artifacts.
                            <br><br>
                            <strong>Already/Just/Never:</strong> Often used with Past Perfect
                            <br><em>Example:</em> Historians <strong>had already discovered</strong> the tomb when the news broke.
                        </div>
                        
                        <h3 class="doc-h3">Contrast with Past Simple:</h3>
                        <div class="callout important">
                            <strong>Past Simple:</strong> For consecutive actions in the past
                            <br><em>Example:</em> Alexander conquered Persia and then invaded India.
                            <br><br>
                            <strong>Past Perfect:</strong> To show one action was completed before another
                            <br><em>Example:</em> Alexander invaded India after he <strong>had conquered</strong> Persia.
                        </div>
                        
                        <h3 class="doc-h3">Common Mistakes to Avoid:</h3>
                        <ul class="doc-ul">
                            <li><strong>Don't use Past Perfect when order is clear:</strong>
                                <br>Wrong: After they had built the pyramid, they had buried the pharaoh.
                                <br>Right: After they built the pyramid, they buried the pharaoh.</li>
                            <li><strong>Don't overuse Past Perfect:</strong> Use only when necessary to show sequence</li>
                            <li><strong>Remember the time words:</strong> When using "before", "after", "by the time"</li>
                        </ul>
                    `
                },
                {
                    title: "3. Grammar: Used to and Would",
                    content: `
                        <h2 class="doc-h2">Describing Past Habits and States</h2>
                        
                        <h3 class="doc-h3">Used to + Base Verb:</h3>
                        <div class="callout important">
                            <strong>Form:</strong> Subject + used to + base verb
                            <br><strong>Uses:</strong>
                            <br>1. <strong>Past habits</strong> (that don't happen now)
                            <br>2. <strong>Past states</strong> (situations that were true but aren't now)
                            <br><strong>Examples:</strong>
                            <br>• Ancient Egyptians <strong>used to believe</strong> in many gods. (past belief)
                            <br>• People <strong>used to write</strong> on clay tablets. (past habit)
                            <br>• There <strong>used to be</strong> great forests in Mesopotamia. (past state)
                            <br><strong>Negative:</strong> Didn't use to (informal) / Used not to (formal)
                            <br><strong>Question:</strong> Did + subject + use to...?
                        </div>
                        
                        <h3 class="doc-h3">Would + Base Verb (for past habits only):</h3>
                        <div class="callout info">
                            <strong>Form:</strong> Subject + would + base verb
                            <br><strong>Use:</strong> Only for <strong>repeated actions</strong> in the past (not states)
                            <br><strong>Examples:</strong>
                            <br>• Every morning, the pharaoh <strong>would hold</strong> court.
                            <br>• Farmers <strong>would irrigate</strong> their fields before sunrise.
                            <br>• During festivals, people <strong>would gather</strong> in the temples.
                            <br><strong>Note:</strong> Cannot use "would" for past states
                            <br>Wrong: I would live in Rome. (state)
                            <br>Right: I used to live in Rome.
                        </div>
                        
                        <h3 class="doc-h3">Comparison Table:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Aspect</th>
                                <th>Used to</th>
                                <th>Would</th>
                            </tr>
                            <tr>
                                <td><strong>Past habits</strong></td>
                                <td>✓ Yes (I used to play chess)</td>
                                <td>✓ Yes (I would play chess every Sunday)</td>
                            </tr>
                            <tr>
                                <td><strong>Past states</strong></td>
                                <td>✓ Yes (I used to be thin)</td>
                                <td>✗ No (NOT: I would be thin)</td>
                            </tr>
                            <tr>
                                <td><strong>Specific time reference</strong></td>
                                <td>Not necessary</td>
                                <td>Often used with time expressions</td>
                            </tr>
                            <tr>
                                <td><strong>Frequency</strong></td>
                                <td>General past situations</td>
                                <td>Repeated, regular actions</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Had to (Past Obligation):</h3>
                        <div class="callout important">
                            <strong>Form:</strong> Subject + had to + base verb
                            <br><strong>Use:</strong> Past necessity or obligation
                            <br><strong>Examples:</strong>
                            <br>• Slaves <strong>had to work</strong> on the pyramids.
                            <br>• Soldiers <strong>had to obey</strong> their commanders.
                            <br>• Everyone <strong>had to pay</strong> taxes to the pharaoh.
                            <br><strong>Negative:</strong> Didn't have to (lack of necessity)
                            <br><em>Example:</em> Women didn't have to serve in the army.
                        </div>
                        
                        <h3 class="doc-h3">Be Used to / Get Used to:</h3>
                        <div class="callout info">
                            <strong>Be used to + noun/gerund:</strong> Be accustomed to
                            <br><em>Example:</em> The Egyptians <strong>were used to</strong> the hot climate.
                            <br><br>
                            <strong>Get used to + noun/gerund:</strong> Become accustomed to
                            <br><em>Example:</strong> It took time for them to <strong>get used to</strong> living in cities.
                            <br><br>
                            <strong>Difference from "used to":</strong>
                            <br>• <strong>Used to + verb:</strong> Past habits
                            <br>• <strong>Be/Get used to + noun/gerund:</strong> Adaptation to something
                        </div>
                    `
                },

                { header: true, title: "UNIT 3: EDUCATION IN THE WORLD" },
                {
                    title: "4. Education Vocabulary",
                    content: `
                        <h2 class="doc-h2">Global Education Systems</h2>
                        
                        <h3 class="doc-h3">Types of Schools:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Type</th>
                                <th>Definition</th>
                                <th>UK Term</th>
                                <th>US Term</th>
                            </tr>
                            <tr>
                                <td><strong>Public School</strong></td>
                                <td>Funded by government, free for students</td>
                                <td>State School</td>
                                <td>Public School</td>
                            </tr>
                            <tr>
                                <td><strong>Private School</strong></td>
                                <td>Funded by tuition fees, not government</td>
                                <td>Public School (confusing!)</td>
                                <td>Private School</td>
                            </tr>
                            <tr>
                                <td><strong>Boarding School</strong></td>
                                <td>Students live at school</td>
                                <td>Boarding School</td>
                                <td>Boarding School</td>
                            </tr>
                            <tr>
                                <td><strong>Charter School</strong></td>
                                <td>Publicly funded but independently run</td>
                                <td>Academy</td>
                                <td>Charter School</td>
                            </tr>
                            <tr>
                                <td><strong>Vocational School</strong></td>
                                <td>Teaches trade skills</td>
                                <td>Technical College</td>
                                <td>Vocational School</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Education Levels:</h3>
                        <div class="callout important">
                            <strong>Preschool/Nursery:</strong> Ages 3-5 (before primary)
                            <br><strong>Primary/Elementary:</strong> Ages 5-11 (UK: Primary, US: Elementary)
                            <br><strong>Secondary:</strong> Ages 11-16/18
                            <br>&nbsp;&nbsp;• UK: Comprehensive School, Grammar School
                            <br>&nbsp;&nbsp;• US: Middle School (11-14), High School (14-18)
                            <br><strong>Higher Education:</strong> University, College
                            <br>&nbsp;&nbsp;• UK: Undergraduate (3 years), Postgraduate
                            <br>&nbsp;&nbsp;• US: Associate (2 years), Bachelor's (4 years), Graduate
                        </div>
                        
                        <h3 class="doc-h3">Key Education Terms:</h3>
                        <div class="callout info">
                            <strong>Curriculum:</strong> Subjects taught in a school
                            <br><strong>Syllabus:</strong> Outline of what will be covered in a course
                            <br><strong>Tuition Fees:</strong> Money paid for education
                            <br><strong>Scholarship:</strong> Financial aid for talented students
                            <br><strong>Grant:</strong> Money given for education (doesn't need repayment)
                            <br><strong>Loan:</strong> Money borrowed for education (must be repaid)
                            <br><strong>Compulsory Education:</strong> Education required by law
                            <br><strong>Literacy Rate:</strong> Percentage of people who can read and write
                        </div>
                        
                        <h3 class="doc-h3">School Personnel:</h3>
                        <ul class="doc-ul">
                            <li><strong>Headteacher/Principal:</strong> School leader</li>
                            <li><strong>Teacher/Lecturer/Professor:</strong> Education providers</li>
                            <li><strong>Teaching Assistant:</strong> Supports teachers</li>
                            <li><strong>Guidance Counselor:</strong> Provides student advice</li>
                            <li><strong>Caretaker/Janitor:</strong> Maintains school building</li>
                            <li><strong>School Governor/Board Member:</strong> Oversees school management</li>
                        </ul>
                        
                        <h3 class="doc-h3">Educational Challenges:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Challenge</th>
                                <th>Description</th>
                                <th>Possible Solutions</th>
                            </tr>
                            <tr>
                                <td><strong>Illiteracy</strong></td>
                                <td>Inability to read and write</td>
                                <td>Adult education programs, community libraries</td>
                            </tr>
                            <tr>
                                <td><strong>Gender Inequality</strong></td>
                                <td>Girls having less access to education</td>
                                <td>Scholarships for girls, safe schools, community awareness</td>
                            </tr>
                            <tr>
                                <td><strong>Digital Divide</strong></td>
                                <td>Unequal access to technology</td>
                                <td>Computer labs, internet access programs, digital literacy</td>
                            </tr>
                            <tr>
                                <td><strong>Brain Drain</strong></td>
                                <td>Talented people leaving their country</td>
                                <td>Better salaries, research opportunities, patriotic education</td>
                            </tr>
                            <tr>
                                <td><strong>Standardized Testing</strong></td>
                                <td>Overemphasis on test scores</td>
                                <td>Holistic evaluation, project-based assessment</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "5. Grammar: Quantifiers",
                    content: `
                        <h2 class="doc-h2">Quantifiers: Expressing Quantity</h2>
                        
                        <h3 class="doc-h3">Countable vs. Uncountable Nouns:</h3>
                        <div class="callout important">
                            <strong>Countable Nouns:</strong> Can be counted (book → books, student → students)
                            <br><strong>Characteristics:</strong> Have singular and plural forms, use "a/an" with singular
                            <br><strong>Examples:</strong> school, teacher, exam, classroom, textbook
                            <br><br>
                            <strong>Uncountable Nouns:</strong> Cannot be counted (water, information, advice)
                            <br><strong>Characteristics:</strong> No plural form, don't use "a/an"
                            <br><strong>Examples:</strong> education, knowledge, homework, research, equipment
                        </div>
                        
                        <h3 class="doc-h3">Quantifiers for Countable Nouns:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Quantifier</th>
                                <th>Meaning</th>
                                <th>Example</th>
                                <th>Notes</th>
                            </tr>
                            <tr>
                                <td><strong>Many</strong></td>
                                <td>Large number (negative/question)</td>
                                <td>There aren't many schools in rural areas.</td>
                                <td>Usually in negatives/questions</td>
                            </tr>
                            <tr>
                                <td><strong>A few</strong></td>
                                <td>Small but positive number</td>
                                <td>A few students passed the exam.</td>
                                <td>Optimistic: some, not many</td>
                            </tr>
                            <tr>
                                <td><strong>Few</strong></td>
                                <td>Small and negative number</td>
                                <td>Few students understand quantum physics.</td>
                                <td>Pessimistic: not enough</td>
                            </tr>
                            <tr>
                                <td><strong>Several</strong></td>
                                <td>More than two but not many</td>
                                <td>Several universities offer online courses.</td>
                                <td>Vague but positive number</td>
                            </tr>
                            <tr>
                                <td><strong>A number of</strong></td>
                                <td>Some</td>
                                <td>A number of changes were made.</td>
                                <td>Takes plural verb</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Quantifiers for Uncountable Nouns:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Quantifier</th>
                                <th>Meaning</th>
                                <th>Example</th>
                                <th>Notes</th>
                            </tr>
                            <tr>
                                <td><strong>Much</strong></td>
                                <td>Large amount (negative/question)</td>
                                <td>There isn't much funding for arts education.</td>
                                <td>Usually in negatives/questions</td>
                            </tr>
                            <tr>
                                <td><strong>A little</strong></td>
                                <td>Small but positive amount</td>
                                <td>We need a little more time to finish.</td>
                                <td>Optimistic: some, not much</td>
                            </tr>
                            <tr>
                                <td><strong>Little</strong></td>
                                <td>Small and negative amount</td>
                                <td>Little progress has been made.</td>
                                <td>Pessimistic: not enough</td>
                            </tr>
                            <tr>
                                <td><strong>A great deal of</strong></td>
                                <td>A lot of</td>
                                <td>A great deal of research is needed.</td>
                                <td>Formal, for uncountable only</td>
                            </tr>
                            <tr>
                                <td><strong>A large amount of</strong></td>
                                <td>Much</td>
                                <td>A large amount of money was spent.</td>
                                <td>For uncountable nouns</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Quantifiers for Both Countable and Uncountable:</h3>
                        <div class="callout info">
                            <strong>Some:</strong> Positive, unspecified quantity
                            <br><em>Countable:</em> Some students are absent.
                            <br><em>Uncountable:</em> We need some information.
                            <br><br>
                            <strong>Any:</strong> In questions and negatives
                            <br><em>Countable:</em> Are there any questions?
                            <br><em>Uncountable:</em> There isn't any homework today.
                            <br><br>
                            <strong>No:</strong> Zero quantity
                            <br><em>Countable:</em> No school is perfect.
                            <br><em>Uncountable:</em> There's no evidence for that claim.
                            <br><br>
                            <strong>A lot of/Lots of:</strong> Large quantity (informal)
                            <br><em>Countable:</em> A lot of books were donated.
                            <br><em>Uncountable:</em> Lots of effort is required.
                        </div>
                        
                        <h3 class="doc-h3">Special Quantifiers:</h3>
                        <div class="callout important">
                            <strong>All:</strong> 100%
                            <br><em>Example:</em> All students must wear uniforms.
                            <br><br>
                            <strong>Most:</strong> Majority (more than 50%)
                            <br><em>Example:</em> Most education is funded by the government.
                            <br><br>
                            <strong>Enough:</strong> Sufficient quantity
                            <br><em>Countable:</em> There are enough computers for everyone.
                            <br><em>Uncountable:</em> We have enough time to finish.
                            <br><br>
                            <strong>Plenty of:</strong> More than enough
                            <br><em>Example:</em> There's plenty of research on this topic.
                        </div>
                        
                        <h3 class="doc-h3">Common Mistakes:</h3>
                        <ul class="doc-ul">
                            <li><strong>Much/Many confusion:</strong>
                                <br>Wrong: There are much schools in the city.
                                <br>Right: There are many schools in the city.</li>
                            <li><strong>Few/Little confusion:</strong>
                                <br>Wrong: Few equipment is available.
                                <br>Right: Little equipment is available.</li>
                            <li><strong>Some/Any confusion:</strong>
                                <br>Wrong: Do you have some money? (use "any" in questions)
                                <br>Right: Do you have any money?</li>
                        </ul>
                    `
                }
            ],

            3: [
                { header: true, title: "UNIT 4: ASTRONOMY & SAFETY" },
                {
                    title: "1. Astronomy Vocabulary",
                    content: `
                        <h2 class="doc-h2">The Language of Space and Astronomy</h2>
                        
                        <h3 class="doc-h3">Celestial Bodies:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Term</th>
                                <th>Definition</th>
                                <th>Example</th>
                                <th>Characteristics</th>
                            </tr>
                            <tr>
                                <td><strong>Star</strong></td>
                                <td>Luminous ball of gas</td>
                                <td>Sun, Sirius, Betelgeuse</td>
                                <td>Produces light and heat through nuclear fusion</td>
                            </tr>
                            <tr>
                                <td><strong>Planet</strong></td>
                                <td>Large body orbiting a star</td>
                                <td>Earth, Mars, Jupiter</td>
                                <td>Doesn't produce own light, spherical, cleared its orbit</td>
                            </tr>
                            <tr>
                                <td><strong>Moon/Satellite</strong></td>
                                <td>Natural body orbiting a planet</td>
                                <td>Earth's Moon, Europa, Titan</td>
                                <td>Reflects sunlight, influences tides</td>
                            </tr>
                            <tr>
                                <td><strong>Asteroid</strong></td>
                                <td>Rocky body orbiting the Sun</td>
                                <td>Ceres, Vesta, Pallas</td>
                                <td>Smaller than planets, found mainly in asteroid belt</td>
                            </tr>
                            <tr>
                                <td><strong>Comet</strong></td>
                                <td>Icy body with a tail</td>
                                <td>Halley's Comet, Hale-Bopp</td>
                                <td>Develops coma and tail when near Sun</td>
                            </tr>
                            <tr>
                                <td><strong>Meteor/Meteorite</strong></td>
                                <td>Rock burning in atmosphere/hitting Earth</td>
                                <td>Shooting stars</td>
                                <td>Meteoroid (space) → Meteor (atmosphere) → Meteorite (ground)</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Astronomical Concepts:</h3>
                        <div class="callout important">
                            <strong>Galaxy:</strong> Huge system of stars, gas, and dust
                            <br><em>Example:</em> Milky Way, Andromeda Galaxy
                            <br><br>
                            <strong>Solar System:</strong> Sun and everything orbiting it
                            <br><em>Contains:</em> 8 planets, dwarf planets, asteroids, comets
                            <br><br>
                            <strong>Universe:</strong> Everything that exists
                            <br><em>Includes:</em> All matter, energy, space, time
                            <br><br>
                            <strong>Light Year:</strong> Distance light travels in one year
                            <br><em>Measurement:</em> About 9.46 trillion kilometers
                            <br><br>
                            <strong>Black Hole:</strong> Region with extreme gravity
                            <br><em>Characteristic:</em> Nothing can escape, not even light
                        </div>
                        
                        <h3 class="doc-h3">Space Exploration Terms:</h3>
                        <div class="callout info">
                            <strong>Astronaut/Cosmonaut/Taikonaut:</strong> Space traveler
                            <br><strong>Spacecraft:</strong> Vehicle for space travel
                            <br><strong>Satellite:</strong> Artificial object orbiting Earth
                            <br><strong>Space Station:</strong> Habitable artificial satellite
                            <br><strong>Space Shuttle:</strong> Reusable spacecraft
                            <br><strong>Rocket:</strong> Vehicle that launches into space
                            <br><strong>Orbit:</strong> Path of one object around another
                            <br><strong>Launch:</strong> Send into space
                            <br><strong>Landing:</strong> Return to Earth's surface
                        </div>
                        
                        <h3 class="doc-h3">Theories and Discoveries:</h3>
                        <ul class="doc-ul">
                            <li><strong>Big Bang Theory:</strong> Universe began from hot dense state</li>
                            <li><strong>Heliocentric Model:</strong> Sun at center of solar system (Copernicus)</li>
                            <li><strong>Geocentric Model:</strong> Earth at center (ancient belief)</li>
                            <li><strong>Hubble's Law:</strong> Universe is expanding</li>
                            <li><strong>General Relativity:</strong> Einstein's theory of gravity</li>
                            <li><strong>Dark Matter:</strong> Unknown matter affecting galaxies</li>
                            <li><strong>Dark Energy:</strong> Force accelerating universe's expansion</li>
                        </ul>
                    `
                },
                {
                    title: "2. Grammar: Comparatives and Superlatives",
                    content: `
                        <h2 class="doc-h2">Making Comparisons in English</h2>
                        
                        <h3 class="doc-h3">Comparative Forms:</h3>
                        
                        <h4 class="doc-h4">Short Adjectives (1-2 syllables):</h4>
                        <div class="callout important">
                            <strong>Rule:</strong> Adjective + -er + than
                            <br><strong>Examples:</strong>
                            <br>• Mars is <strong>smaller than</strong> Earth.
                            <br>• The Sun is <strong>hotter than</strong> any other star in our system.
                            <br>• Jupiter is <strong>bigger than</strong> all other planets combined.
                            <br><strong>Spelling Rules:</strong>
                            <br>• Big → bigger (double final consonant)
                            <br>• Large → larger (add -r)
                            <br>• Happy → happier (y → i + er)
                        </div>
                        
                        <h4 class="doc-h4">Long Adjectives (2+ syllables):</h4>
                        <div class="callout info">
                            <strong>Rule:</strong> More + adjective + than
                            <br><strong>Examples:</strong>
                            <br>• Space travel is <strong>more dangerous than</strong> air travel.
                            <br>• Astronomy is <strong>more fascinating than</strong> any other science.
                            <br>• The universe is <strong>more complex than</strong> we can imagine.
                            <br><strong>Exceptions (2 syllables):</strong>
                            <br>• Quiet → quieter (ends in -er)
                            <br>• Simple → simpler (ends in -le)
                            <br>• Narrow → narrower (ends in -ow)
                        </div>
                        
                        <h3 class="doc-h3">Superlative Forms:</h3>
                        
                        <h4 class="doc-h4">Short Adjectives:</h4>
                        <div class="callout important">
                            <strong>Rule:</strong> The + adjective + -est
                            <br><strong>Examples:</strong>
                            <br>• Jupiter is <strong>the largest</strong> planet.
                            <br>• Mercury is <strong>the closest</strong> planet to the Sun.
                            <br>• Venus has <strong>the hottest</strong> surface temperature.
                        </div>
                        
                        <h4 class="doc-h4">Long Adjectives:</h4>
                        <div class="callout info">
                            <strong>Rule:</strong> The most + adjective
                            <br><strong>Examples:</strong>
                            <br>• Space is <strong>the most mysterious</strong> frontier.
                            <br>• Black holes are <strong>the most fascinating</strong> objects.
                            <br>• Astronomy provides <strong>the most amazing</strong> discoveries.
                        </div>
                        
                        <h3 class="doc-h3">Irregular Comparatives and Superlatives:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Adjective</th>
                                <th>Comparative</th>
                                <th>Superlative</th>
                                <th>Example</th>
                            </tr>
                            <tr>
                                <td><strong>Good</strong></td>
                                <td>Better</td>
                                <td>The best</td>
                                <td>Telescopes are getting better.</td>
                            </tr>
                            <tr>
                                <td><strong>Bad</strong></td>
                                <td>Worse</td>
                                <td>The worst</td>
                                <td>Space debris is a worse problem than we thought.</td>
                            </tr>
                            <tr>
                                <td><strong>Far</strong></td>
                                <td>Farther/Further</td>
                                <td>The farthest/furthest</td>
                                <td>Voyager 1 is the farthest man-made object.</td>
                            </tr>
                            <tr>
                                <td><strong>Little</strong></td>
                                <td>Less</td>
                                <td>The least</td>
                                <td>Mercury has the least atmosphere.</td>
                            </tr>
                            <tr>
                                <td><strong>Much/Many</strong></td>
                                <td>More</td>
                                <td>The most</td>
                                <td>Jupiter has the most moons.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Equality and Inequality:</h3>
                        <div class="callout important">
                            <strong>As...as (equality):</strong> As + adjective + as
                            <br><em>Example:</em> Mars is <strong>as dry as</strong> any desert on Earth.
                            <br><br>
                            <strong>Not as...as (inequality):</strong> Not as + adjective + as
                            <br><em>Example:</em> The Moon is <strong>not as large as</strong> Earth.
                            <br><br>
                            <strong>The same as (similarity):</strong> The same + noun + as
                            <br><em>Example:</em> Venus has <strong>the same size as</strong> Earth.
                            <br><br>
                            <strong>Similar to:</strong> Similar + to
                            <br><em>Example:</em> Titan's atmosphere is <strong>similar to</strong> Earth's early atmosphere.
                        </div>
                        
                        <h3 class="doc-h3">Comparative Structures:</h3>
                        <div class="callout info">
                            <strong>Comparative + and + comparative:</strong> Increasing degree
                            <br><em>Example:</em> Space exploration is getting <strong>more and more</strong> important.
                            <br><br>
                            <strong>The + comparative..., the + comparative:</strong> Parallel increase
                            <br><em>Example:</strong> <strong>The farther</strong> we look, <strong>the more</strong> we discover.
                            <br><br>
                            <strong>Much/far/a lot + comparative:</strong> Emphasize difference
                            <br><em>Example:</em> The Sun is <strong>much larger than</strong> Earth.
                            <br><br>
                            <strong>A bit/slightly + comparative:</strong> Small difference
                            <br><em>Example:</em> Mars is <strong>slightly smaller than</strong> Earth.
                        </div>
                    `
                },
                {
                    title: "3. Feelings and Emotions (Literary Stream)",
                    content: `
                        <h2 class="doc-h2">Expressing Emotions in Literature</h2>
                        
                        <h3 class="doc-h3">Basic Emotions Vocabulary:</h3>
                        
                        <h4 class="doc-h4">Positive Emotions:</h4>
                        <div class="callout important">
                            <strong>Happiness/Joy:</strong> Feeling of pleasure and contentment
                            <br><strong>Synonyms:</strong> Delight, elation, bliss, euphoria, cheerfulness
                            <br><strong>Examples in literature:</strong>
                            <br>• "Her heart swelled with <strong>joy</strong> at the news."
                            <br>• "He felt pure <strong>bliss</strong> watching the sunset."
                            <br>• "A sense of <strong>elation</strong> filled the room."
                        </div>
                        
                        <h4 class="doc-h4">Negative Emotions:</h4>
                        <div class="callout info">
                            <strong>Sadness:</strong> Feeling of sorrow or unhappiness
                            <br><strong>Synonyms:</strong> Sorrow, grief, melancholy, despair, depression
                            <br><strong>Examples:</strong>
                            <br>• "A deep <strong>sorrow</strong> settled in her soul."
                            <br>• "He was consumed by <strong>grief</strong> after the loss."
                            <br>• "A sense of <strong>melancholy</strong> pervaded the poem."
                            <br><br>
                            <strong>Anger:</strong> Strong feeling of annoyance or hostility
                            <br><strong>Synonyms:</strong> Fury, rage, wrath, indignation, resentment
                            <br><strong>Examples:</strong>
                            <br>• "She felt a surge of <strong>rage</strong> at the injustice."
                            <br>• "His <strong>wrath</strong> was terrible to behold."
                            <br>• "Burning <strong>resentment</strong> filled his heart."
                        </div>
                        
                        <h3 class="doc-h3">Complex Emotions:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Emotion</th>
                                <th>Definition</th>
                                <th>Literary Example</th>
                                <th>Synonyms</th>
                            </tr>
                            <tr>
                                <td><strong>Nostalgia</strong></td>
                                <td>Longing for the past</td>
                                <td>"He felt a wave of nostalgia for his childhood home."</td>
                                <td>Yearning, wistfulness, reminiscence</td>
                            </tr>
                            <tr>
                                <td><strong>Awe</strong></td>
                                <td>Feeling of wonder and respect</td>
                                <td>"She gazed in awe at the majestic mountains."</td>
                                <td>Wonder, amazement, reverence</td>
                            </tr>
                            <tr>
                                <td><strong>Ambivalence</strong></td>
                                <td>Mixed or contradictory feelings</td>
                                <td>"He felt ambivalent about the promotion."</td>
                                <td>Conflict, uncertainty, mixed feelings</td>
                            </tr>
                            <tr>
                                <td><strong>Catharsis</strong></td>
                                <td>Emotional release or purification</td>
                                <td>"The tragedy provided catharsis for the audience."</td>
                                <td>Purification, release, cleansing</td>
                            </tr>
                            <tr>
                                <td><strong>Empathy</strong></td>
                                <td>Understanding others' feelings</td>
                                <td>"She felt deep empathy for the character's plight."</td>
                                <td>Compassion, understanding, sympathy</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Grammar: Articles with Abstract Nouns</h3>
                        <div class="callout important">
                            <strong>Zero Article Rule:</strong> Most abstract nouns don't take articles
                            <br><strong>Examples:</strong>
                            <br>• <strong>Love</strong> is a powerful emotion. (NOT: The love)
                            <br>• <strong>Fear</strong> can be paralyzing. (NOT: A fear)
                            <br>• <strong>Happiness</strong> comes from within. (NOT: The happiness)
                            <br><br>
                            <strong>Exceptions (when specific):</strong>
                            <br>• The love <strong>of a mother</strong> is unconditional. (specific love)
                            <br>• A fear <strong>of heights</strong> is common. (specific type of fear)
                            <br>• The happiness <strong>I feel</strong> is genuine. (specific happiness)
                        </div>
                        
                        <h3 class="doc-h3">Literary Devices for Emotions:</h3>
                        <div class="callout info">
                            <strong>Metaphor:</strong> Direct comparison
                            <br><em>Example:</em> "His anger was a volcano waiting to erupt."
                            <br><br>
                            <strong>Simile:</strong> Comparison using "like" or "as"
                            <br><em>Example:</em> "She felt as light as a feather with joy."
                            <br><br>
                            <strong>Personification:</strong> Giving human qualities to non-human things
                            <br><em>Example:</em> "Fear gripped his heart with icy fingers."
                            <br><br>
                            <strong>Hyperbole:</strong> Exaggeration for effect
                            <br><em>Example:</em> "I was so happy I could die."
                            <br><br>
                            <strong>Oxymoron:</strong> Contradictory terms together
                            <br><em>Example:</em> "Bittersweet memories"
                        </div>
                        
                        <h3 class="doc-h3">Emotional States in Poetry:</h3>
                        <ul class="doc-ul">
                            <li><strong>Romantic poetry:</strong> Focus on love, beauty, nature, individualism
                                <br><em>Poets:</em> Wordsworth, Keats, Shelley</li>
                            <li><strong>Metaphysical poetry:</strong> Intellectual, philosophical, complex emotions
                                <br><em>Poets:</em> John Donne, Andrew Marvell</li>
                            <li><strong>Modernist poetry:</strong> Alienation, fragmentation, disillusionment
                                <br><em>Poets:</em> T.S. Eliot, Ezra Pound</li>
                            <li><strong>Confessional poetry:</strong> Personal, emotional, sometimes painful
                                <br><em>Poets:</em> Sylvia Plath, Anne Sexton</li>
                        </ul>
                        
                        <h3 class="doc-h3">Vocabulary for Character Analysis:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Trait</th>
                                <th>Positive</th>
                                <th>Negative</th>
                            </tr>
                            <tr>
                                <td><strong>Emotional Stability</strong></td>
                                <td>Composed, balanced, resilient</td>
                                <td>Volatile, unstable, fragile</td>
                            </tr>
                            <tr>
                                <td><strong>Expression</strong></td>
                                <td>Expressive, communicative, open</td>
                                <td>Repressed, stoic, inexpressive</td>
                            </tr>
                            <tr>
                                <td><strong>Response to Others</strong></td>
                                <td>Empathetic, compassionate, understanding</td>
                                <td>Cold, indifferent, callous</td>
                            </tr>
                            <tr>
                                <td><strong>Self-awareness</strong></td>
                                <td>Introspective, self-aware, reflective</td>
                                <td>Oblivious, deluded, self-deceiving</td>
                            </tr>
                        </table>
                    `
                }
            ]
        }
    },

    // =================================================================
    // 5. اللغة الفرنسية
    // =================================================================
    french: {
        title: "اللغة الفرنسية",
        rtl: false,
        trimesters: {
            1: [
                { header: true, title: "UNITE 1: L'ARGUMENTATION" },
                {
                    title: "1. Les connecteurs logiques",
                    content: `
                        <h2 class="doc-h2">Les articulateurs du discours argumentatif</h2>
                        
                        <h3 class="doc-h3">Les connecteurs d'addition:</h3>
                        <div class="callout important">
                            <strong>Et:</strong> Le plus simple et le plus courant
                            <br><strong>De plus:</strong> Ajoute un argument important
                            <br><strong>En outre:</strong> Formel, utilisé à l'écrit
                            <br><strong>Par ailleurs:</strong> Introduit un argument complémentaire
                            <br><strong>Ensuite:</strong> Pour ordonner les arguments
                            <br><strong>Enfin:</strong> Pour conclure une série d'arguments
                            <br><strong>Finalement:</strong> Pour le dernier argument
                            <br><strong>De même:</strong> Pour un argument similaire
                        </div>
                        
                        <h3 class="doc-h3">Les connecteurs d'opposition:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Connecteur</th>
                                <th>Force</th>
                                <th>Exemple</th>
                                <th>Traduction</th>
                            </tr>
                            <tr>
                                <td><strong>Mais</strong></td>
                                <td>Forte</td>
                                <td>Il veut venir, mais il est malade.</td>
                                <td>لكنه</td>
                            </tr>
                            <tr>
                                <td><strong>Cependant</strong></td>
                                <td>Moyenne</td>
                                <td>C'est cher, cependant c'est nécessaire.</td>
                                <td>ومع ذلك</td>
                            </tr>
                            <tr>
                                <td><strong>Toutefois</strong></td>
                                <td>Formelle</td>
                                <td>Le projet est bon, toutefois il manque de fonds.</td>
                                <td>مع ذلك</td>
                            </tr>
                            <tr>
                                <td><strong>Néanmoins</strong></td>
                                <td>Formelle</td>
                                <td>C'est difficile, néanmoins il faut essayer.</td>
                                <td>رغم ذلك</td>
                            </tr>
                            <tr>
                                <td><strong>En revanche</strong></td>
                                <td>Contraste</td>
                                <td>Lui est grand, en revanche son frère est petit.</td>
                                <td>في المقابل</td>
                            </tr>
                            <tr>
                                <td><strong>Par contre</strong></td>
                                <td>Courant</td>
                                <td>J'aime le thé, par contre je déteste le café.</td>
                                <td>على العكس</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Les connecteurs de cause:</h3>
                        <div class="callout info">
                            <strong>Car:</strong> Cause objective, à l'écrit
                            <br><em>Exemple:</em> Il est absent car il est malade.
                            <br><br>
                            <strong>Parce que:</strong> Cause subjective, réponse à "pourquoi"
                            <br><em>Exemple:</em> Je suis venu parce que tu m'as appelé.
                            <br><br>
                            <strong>Puisque:</strong> Cause évidente, connue
                            <br><em>Exemple:</em> Puisque tu es là, aide-moi.
                            <br><br>
                            <strong>En effet:</strong> Justification d'une affirmation
                            <br><em>Exemple:</em> C'est important. En effet, cela concerne tout le monde.
                            <br><br>
                            <strong>Grâce à:</strong> Cause positive
                            <br><em>Exemple:</em> J'ai réussi grâce à ton aide.
                            <br><br>
                            <strong>À cause de:</strong> Cause négative
                            <br><em>Exemple:</em> Il est en retard à cause du traffic.
                        </div>
                        
                        <h3 class="doc-h3">Les connecteurs de conséquence:</h3>
                        <ul class="doc-ul">
                            <li><strong>Donc:</strong> Conséquence logique
                                <br><em>Exemple:</em> Il pleut, donc je prends un parapluie.</li>
                            <li><strong>Ainsi:</strong> Formel, à l'écrit
                                <br><em>Exemple:</em> Il a travaillé dur, ainsi il a réussi.</li>
                            <li><strong>Par conséquent:</strong> Très formel
                                <br><em>Exemple:</em> Les prix ont augmenté, par conséquent nous devons économiser.</li>
                            <li><strong>C'est pourquoi:</strong> Pour conclure un raisonnement
                                <br><em>Exemple:</em> Il fait froid, c'est pourquoi je porte un manteau.</li>
                            <li><strong>De sorte que:</strong> Résultat intentionnel
                                <br><em>Exemple:</em> Il parle fort de sorte que tout le monde l'entende.</li>
                            <li><strong>Si bien que:</strong> Résultat involontaire
                                <br><em>Exemple:</em> Il a beaucoup plu si bien que les rues sont inondées.</li>
                        </ul>
                        
                        <h3 class="doc-h3>">Les connecteurs de but:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Connecteur</th>
                                <th>Construction</th>
                                <th>Exemple</th>
                                <th>Note</th>
                            </tr>
                            <tr>
                                <td><strong>Pour + infinitif</strong></td>
                                <td>Pour + verbe à l'infinitif</td>
                                <td>Je travaille pour gagner ma vie.</td>
                                <td>Le plus simple</td>
                            </tr>
                            <tr>
                                <td><strong>Afin de + infinitif</strong></td>
                                <td>Afin de + verbe à l'infinitif</td>
                                <td>Il étudie afin de réussir.</td>
                                <td>Plus formel que "pour"</td>
                            </tr>
                            <tr>
                                <td><strong>De peur de + infinitif</strong></td>
                                <td>De peur de + verbe à l'infinitif</td>
                                <td>Il se cache de peur d'être vu.</td>
                                <td>But négatif (pour éviter)</td>
                            </tr>
                            <tr>
                                <td><strong>De crainte de + infinitif</strong></td>
                                <td>De crainte de + verbe à l'infinitif</td>
                                <td>Je me tais de crainte de le vexer.</td>
                                <td>Formel, négatif</td>
                            </tr>
                            <tr>
                                <td><strong>Pour que + subjonctif</strong></td>
                                <td>Pour que + subjonctif</td>
                                <td>Je le dis pour que tu saches.</td>
                                <td>Différents sujets</td>
                            </tr>
                            <tr>
                                <td><strong>Afin que + subjonctif</strong></td>
                                <td>Afin que + subjonctif</td>
                                <td>J'explique afin que vous compreniez.</td>
                                <td>Formel, différents sujets</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "2. Les temps du récit",
                    content: `
                        <h2 class="doc-h2">La concordance des temps dans le récit</h2>
                        
                        <h3 class="doc-h3">Le passé simple et l'imparfait:</h3>
                        
                        <h4 class="doc-h4">L'imparfait (Description/Contexte):</h4>
                        <div class="callout important">
                            <strong>Formation:</strong> Radical + terminaisons: -ais, -ais, -ait, -ions, -iez, -aient
                            <br><strong>Utilisation:</strong>
                            <br>1. <strong>Description</strong> (personnes, lieux, situations)
                            <br>2. <strong>Habitudes</strong> dans le passé
                            <br>3. <strong>Actions simultanées</strong>
                            <br>4. <strong>Actions de durée indéterminée</strong>
                            <br><strong>Exemples:</strong>
                            <br>• Il <strong>était</strong> minuit. (description)
                            <br>• Tous les jours, je <strong>marchais</strong> dans le parc. (habitude)
                            <br>• Pendant qu'il <strong>dormait</strong>, je <strong>travaillais</strong>. (actions simultanées)
                        </div>
                        
                        <h4 class="doc-h4">Le passé simple (Actions ponctuelles):</h4>
                        <div class="callout info">
                            <strong>Formation:</strong>
                            <br>• 1er groupe: -ai, -as, -a, -âmes, -âtes, -èrent
                            <br>• 2ème groupe: -is, -is, -it, -îmes, -îtes, -irent
                            <br>• 3ème groupe: diverses (vint, prit, fut, etc.)
                            <br><strong>Utilisation:</strong>
                            <br>1. <strong>Actions brèves</strong> et ponctuelles
                            <br>2. <strong>Séquences d'actions</strong>
                            <br>3. <strong>Événements historiques</strong>
                            <br><strong>Exemples:</strong>
                            <br>• Soudain, il <strong>entra</strong> dans la pièce.
                            <br>• Il <strong>prit</strong> son manteau et <strong>sortit</strong>.
                            <br>• En 1789, la Révolution française <strong>commença</strong>.
                        </div>
                        
                        <h3 class="doc-h3">La concordance des temps:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Situation</th>
                                <th>Temps principal</th>
                                <th>Temps secondaire</th>
                                <th>Exemple</th>
                            </tr>
                            <tr>
                                <td>Actions simultanées</td>
                                <td>Imparfait</td>
                                <td>Imparfait</td>
                                <td>Pendant qu'il <strong>lisait</strong>, elle <strong>écrivait</strong>.</td>
                            </tr>
                            <tr>
                                <td>Action longue + action brève</td>
                                <td>Imparfait</td>
                                <td>Passé simple</td>
                                <td>Il <strong>dormait</strong> quand le téléphone <strong>sonna</strong>.</td>
                            </tr>
                            <tr>
                                <td>Séquence d'actions</td>
                                <td>Passé simple</td>
                                <td>Passé simple</td>
                                <td>Il <strong>se leva</strong>, <strong>s'habilla</strong> et <strong>partit</strong>.</td>
                            </tr>
                            <tr>
                                <td>Action antérieure</td>
                                <td>Passé simple</td>
                                <td>Plus-que-parfait</td>
                                <td>Quand il <strong>arriva</strong>, tout le monde <strong>était déjà parti</strong>.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Le plus-que-parfait:</h3>
                        <div class="callout important">
                            <strong>Formation:</strong> Imparfait de l'auxiliaire + participe passé
                            <br><strong>Utilisation:</strong> Action antérieure à une autre action passée
                            <br><strong>Exemples:</strong>
                            <br>• Quand je suis arrivé, il <strong>avait déjà fini</strong> son travail.
                            <br>• Elle a réalisé qu'elle <strong>avait oublié</strong> ses clés.
                            <br>• Après qu'il <strong>eut mangé</strong>, il se reposa. (littéraire)
                            <br><strong>Marqueurs temporels:</strong> Déjà, après que, quand, lorsque, une fois que
                        </div>
                        
                        <h3 class="doc-h3">Le passé antérieur:</h3>
                        <div class="callout info">
                            <strong>Formation:</strong> Passé simple de l'auxiliaire + participe passé
                            <br><strong>Utilisation:</strong> Littéraire, action immédiatement antérieure
                            <br><strong>Exemples:</strong>
                            <br>• Dès qu'il <strong>eut terminé</strong>, il partit.
                            <br>• À peine <strong>fut-il arrivé</strong> qu'il repartit.
                            <br>• Quand il <strong>eut fini</strong> de parler, le silence régna.
                            <br><strong>Marqueurs:</strong> Dès que, à peine, quand, après que, une fois que
                        </div>
                        
                        <h3 class="doc-h3">Exercices d'application:</h3>
                        <ul class="doc-ul">
                            <li><strong>Complétez avec le temps qui convient:</strong>
                                <br>Hier, je (marcher) __________ dans la rue quand soudain je (voir) __________ un ami.</li>
                            <li><strong>Corrigez la phrase:</strong>
                                <br>Il a pris son parapluie parce qu'il pleuvait. (passé simple)</li>
                            <li><strong>Transformez:</strong>
                                <br>Quand il finit son travail, il rentre chez lui. (au passé)</li>
                            <li><strong>Mettez à la bonne forme:</strong>
                                <br>Après qu'il (manger), il (se coucher) immédiatement.</li>
                        </ul>
                    `
                },
                {
                    title: "3. Le subjonctif présent",
                    content: `
                        <h2 class="doc-h2">Le mode subjonctif: expression du doute et du souhait</h2>
                        
                        <h3 class="doc-h3">Formation du subjonctif présent:</h3>
                        
                        <h4 class="doc-h4">Règle générale:</h4>
                        <div class="callout important">
                            <strong>Base:</strong> 3ème personne du pluriel du présent de l'indicatif
                            <br><strong>Terminaisons:</strong> -e, -es, -e, -ions, -iez, -ent
                            <br><strong>Exemples:</strong>
                            <br>• Parler (ils parl<strong>ent</strong>) → que je parl<strong>e</strong>
                            <br>• Finir (ils finiss<strong>ent</strong>) → que je finiss<strong>e</strong>
                            <br>• Prendre (ils prenn<strong>ent</strong>) → que je prenn<strong>e</strong>
                            <br><strong>Attention:</strong> Les verbes en -er changent le radical
                            <br>• Manger (ils mang<strong>ent</strong>) → que je mang<strong>e</strong>
                        </div>
                        
                        <h4 class="doc-h4">Verbes irréguliers importants:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Verbe</th>
                                <th>Subjonctif (que je...)</th>
                                <th>Exemple</th>
                            </tr>
                            <tr>
                                <td><strong>Être</strong></td>
                                <td>sois</td>
                                <td>Il faut que je <strong>sois</strong> à l'heure.</td>
                            </tr>
                            <tr>
                                <td><strong>Avoir</strong></td>
                                <td>aie</td>
                                <td>Je veux que tu <strong>aies</strong> confiance.</td>
                            </tr>
                            <tr>
                                <td><strong>Faire</strong></td>
                                <td>fasse</td>
                                <td>Il faut que je <strong>fasse</strong> mes devoirs.</td>
                            </tr>
                            <tr>
                                <td><strong>Aller</strong></td>
                                <td>aille</td>
                                <td>Je souhaite que tu <strong>ailles</strong> mieux.</td>
                            </tr>
                            <tr>
                                <td><strong>Pouvoir</strong></td>
                                <td>puisse</td>
                                <td>Il faut que je <strong>puisse</strong> le faire.</td>
                            </tr>
                            <tr>
                                <td><strong>Vouloir</strong></td>
                                <td>veuille</td>
                                <td>Je veux que tu <strong>veuilles</strong> bien m'aider.</td>
                            </tr>
                            <tr>
                                <td><strong>Savoir</strong></td>
                                <td>sache</td>
                                <td>Il faut que je <strong>sache</strong> la vérité.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Utilisations du subjonctif:</h3>
                        
                        <h4 class="doc-h4">Après les verbes de volonté:</h4>
                        <div class="callout info">
                            <strong>Vouloir que:</strong> Je veux que tu viennes.
                            <br><strong>Souhaiter que:</strong> Je souhaite que tu réussisses.
                            <br><strong>Désirer que:</strong> Je désire que vous soyez heureux.
                            <br><strong>Préférer que:</strong> Je préfère que tu restes.
                            <br><strong>Exiger que:</strong> J'exige que vous partiez.
                            <br><strong>Ordonner que:</strong> Il ordonne que tout le monde sorte.
                            <br><strong>Demander que:</strong> Je demande que vous m'écoutiez.
                        </div>
                        
                        <h4 class="doc-h4">Après les verbes de sentiment:</h4>
                        <ul class="doc-ul">
                            <li><strong>Être content/heureux que:</strong> Je suis content que tu sois là.</li>
                            <li><strong>Regretter que:</strong> Je regrette que tu doives partir.</li>
                            <li><strong>Avoir peur que:</strong> J'ai peur qu'il ne vienne pas.</li>
                            <li><strong>Craindre que:</strong> Je crains qu'il ne pleuve.</li>
                            <li><strong>Redouter que:</strong> Je redoute qu'il n'arrive trop tard.</li>
                            <li><strong>Se réjouir que:</strong> Je me réjouis que vous soyez venus.</li>
                        </ul>
                        
                        <h4 class="doc-h4">Après les expressions de doute:</h4>
                        <div class="callout important">
                            <strong>Douter que:</strong> Je doute qu'il vienne.
                            <br><strong>Il est douteux que:</strong> Il est douteux qu'il réussisse.
                            <br><strong>Il n'est pas certain que:</strong> Il n'est pas certain qu'il pleuve.
                            <br><strong>Il est possible que:</strong> Il est possible qu'il neige.
                            <br><strong>Il se peut que:</strong> Il se peut que je sois en retard.
                            <br><strong>À moins que:</strong> Je viendrai à moins que je sois malade.
                        </div>
                        
                        <h3 class="doc-h3">Le subjonctif dans les subordonnées:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Type de subordonnée</th>
                                <th>Conjonction</th>
                                <th>Exemple</th>
                                <th>Explication</th>
                            </tr>
                            <tr>
                                <td><strong>Finale</strong></td>
                                <td>Pour que, afin que</td>
                                <td>Je le dis <strong>pour que</strong> tu saches.</td>
                                <td>Exprime le but</td>
                            </tr>
                            <tr>
                                <td><strong>Concessive</strong></td>
                                <td>Bien que, quoique</td>
                                <td><strong>Bien qu'</strong>il soit riche, il est modeste.</td>
                                <td>Exprime la concession</td>
                            </tr>
                            <tr>
                                <td><strong>Temporelle</strong></td>
                                <td>Avant que, jusqu'à ce que</td>
                                <td>Viens <strong>avant qu'</strong>il ne soit trop tard.</td>
                                <td>Avant un événement futur</td>
                            </tr>
                            <tr>
                                <td><strong>Conditionnelle</strong></td>
                                <td>À condition que, pourvu que</td>
                                <td>Je viendrai <strong>à condition que</strong> tu viennes.</td>
                                <td>Exprime une condition</td>
                            </tr>
                            <tr>
                                <td><strong>De crainte</strong></td>
                                <td>De peur que, de crainte que</td>
                                <td>Cache-toi <strong>de peur qu'</strong>on ne te voie.</td>
                                <td>Exprime la crainte</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Le ne explétif:</h3>
                        <div class="callout info">
                            <strong>Définition:</strong> "Ne" sans négation, utilisé dans le subjonctif
                            <br><strong>Utilisation:</strong> Après certains verbes et expressions
                            <br><strong>Exemples:</strong>
                            <br>• J'ai peur qu'il <strong>ne</strong> vienne pas. (avec "pas")
                            <br>• Je crains qu'il <strong>ne</strong> pleuve.
                            <br>• Empêche qu'il <strong>ne</strong> fasse des bêtises.
                            <br>• À moins qu'il <strong>ne</strong> soit malade.
                            <br><strong>Attention:</strong> Le "ne" explétif ne nie pas la phrase
                        </div>
                    `
                }
            ],

            2: [
                { header: true, title: "UNITE 2: LA DESCRIPTION" },
                {
                    title: "1. Les adjectifs qualificatifs",
                    content: `
                        <h2 class="doc-h2">Les adjectifs: accord et place</h2>
                        
                        <h3 class="doc-h3>">L'accord des adjectifs:</h3>
                        
                        <h4 class="doc-h4">Règle générale:</h4>
                        <div class="callout important">
                            <strong>L'adjectif s'accorde en genre et en nombre avec le nom qu'il qualifie.</strong>
                            <br><strong>Exemples:</strong>
                            <br>• Un livre intéressant → Des livres intéressants
                            <br>• Une histoire intéressante → Des histoires intéressantes
                            <br>• Un homme grand → Des hommes grands
                            <br>• Une femme grande → Des femmes grandes
                            <br><strong>Attention:</strong> L'adjectif suit les mêmes règles que le nom pour le pluriel
                        </div>
                        
                        <h4 class="doc-h4">Les adjectifs de couleur:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Type</th>
                                <th>Règle</th>
                                <th>Exemple</th>
                                <th>Exception</th>
                            </tr>
                            <tr>
                                <td><strong>Couleur simple</strong></td>
                                <td>S'accorde normalement</td>
                                <td>Des robes blanches</td>
                                <td>Marron, orange, etc.</td>
                            </tr>
                            <tr>
                                <td><strong>Couleur composée</strong></td>
                                <td>Invariable</td>
                                <td>Des yeux bleu-vert</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td><strong>Couleur-nom</strong></td>
                                <td>Invariable</td>
                                <td>Des pulls marron</td>
                                <td>Pourpre, mauve, etc.</td>
                            </tr>
                            <tr>
                                <td><strong>Couleur + autre adjectif</strong></td>
                                <td>Les deux invariables</td>
                                <td>Des tissus vert clair</td>
                                <td>-</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">Les adjectifs particuliers:</h4>
                        <div class="callout info">
                            <strong>Beau, nouveau, vieux:</strong> Formes spéciales au masculin singulier
                            <br>• <strong>Beau</strong> (bel), belle, beaux, belles
                            <br>• <strong>Nouveau</strong> (nouvel), nouvelle, nouveaux, nouvelles
                            <br>• <strong>Vieux</strong> (vieil), vieille, vieux, vieilles
                            <br><strong>Exemples:</strong>
                            <br>• Un bel homme / Un beau garçon
                            <br>• Un nouvel élève / Un nouveau livre
                            <br>• Un vieil arbre / Un vieux mur
                        </div>
                        
                        <h3 class="doc-h3">La place des adjectifs:</h3>
                        
                        <h4 class="doc-h4">Adjectifs qui se placent avant le nom (BAGS):</h4>
                        <div class="callout important">
                            <strong>B = Beauty (Beau, joli, laid...)</strong>
                            <br>• Un beau jardin, une jolie fille
                            <br><br>
                            <strong>A = Age (Jeune, vieux, nouveau...)</strong>
                            <br>• Un vieux livre, une nouvelle maison
                            <br><br>
                            <strong>G = Goodness (Bon, mauvais, gentil...)</strong>
                            <br>• Un bon repas, une mauvaise idée
                            <br><br>
                            <strong>S = Size (Grand, petit, long, court...)</strong>
                            <br>• Un grand arbre, une petite voiture
                            <br><br>
                            <strong>Autres:</strong> Autre, même, tel, tout, chaque, plusieurs
                        </div>
                        
                        <h4 class="doc-h4">Adjectifs qui se placent après le nom:</h4>
                        <ul class="doc-ul">
                            <li><strong>Adjectifs de nationalité:</strong> Un homme français</li>
                            <li><strong>Adjectifs de couleur:</strong> Une robe rouge</li>
                            <li><strong>Adjectifs de forme:</strong> Une table ronde</li>
                            <li><strong>Adjectifs dérivés de verbes:</strong> Un livre intéressant</li>
                            <li><strong>Adjectifs de matière:</strong> Un pull en laine</li>
                            <li><strong>Adjectifs scientifiques:</strong> Une solution chimique</li>
                        </ul>
                        
                        <h4 class="doc-h4">Adjectifs avec changement de sens:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Adjectif</th>
                                <th>Avant le nom</th>
                                <th>Après le nom</th>
                            </tr>
                            <tr>
                                <td><strong>Ancien</strong></td>
                                <td>Mon ancien professeur (ex-)</td>
                                <td>Un livre ancien (vieux)</td>
                            </tr>
                            <tr>
                                <td><strong>Certain</strong></td>
                                <td>Un certain monsieur (quelconque)</td>
                                <td>Une victoire certaine (sûre)</td>
                            </tr>
                            <tr>
                                <td><strong>Cher</strong></td>
                                <td>Mon cher ami (affectueux)</td>
                                <td>Une voiture chère (coûteuse)</td>
                            </tr>
                            <tr>
                                <td><strong>Grand</strong></td>
                                <td>Un grand homme (célèbre)</td>
                                <td>Un homme grand (de taille)</td>
                            </tr>
                            <tr>
                                <td><strong>Pauvre</strong></td>
                                <td>Mon pauvre ami (à plaindre)</td>
                                <td>Un homme pauvre (sans argent)</td>
                            </tr>
                            <tr>
                                <td><strong>Propre</strong></td>
                                <td>Mon propre stylo (à moi)</td>
                                <td>Une maison propre (non sale)</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Les degrés de l'adjectif:</h3>
                        
                        <h4 class="doc-h4">Le comparatif:</h4>
                        <div class="callout info">
                            <strong>Supériorité:</strong> Plus + adjectif + que
                            <br><em>Exemple:</em> Il est plus grand que son frère.
                            <br><br>
                            <strong>Égalité:</strong> Aussi + adjectif + que
                            <br><em>Exemple:</em> Elle est aussi intelligente que sa sœur.
                            <br><br>
                            <strong>Infériorité:</strong> Moins + adjectif + que
                            <br><em>Exemple:</em> Ce livre est moins intéressant que l'autre.
                            <br><br>
                            <strong>Irregularités:</strong>
                            <br>• Bon → meilleur que
                            <br>• Mauvais → pire que / plus mauvais que
                            <br>• Petit → plus petit que / moindre que (abstrait)
                        </div>
                        
                        <h4 class="doc-h4">Le superlatif:</h4>
                        <div class="callout important">
                            <strong>Supériorité:</strong> Le/la/les plus + adjectif
                            <br><em>Exemple:</em> C'est le plus beau tableau.
                            <br><br>
                            <strong>Infériorité:</strong> Le/la/les moins + adjectif
                            <br><em>Exemple:</em> C'est la moins bonne solution.
                            <br><br>
                            <strong>Irregularités:</strong>
                            <br>• Bon → le/la meilleur(e), les meilleur(e)s
                            <br>• Mauvais → le/la pire, les pires / le/la plus mauvais(e)
                            <br>• Petit → le/la plus petit(e) / le/la moindre (abstrait)
                            <br><br>
                            <strong>Avec "de":</strong> Pour indiquer le groupe
                            <br><em>Exemple:</em> C'est le plus grand de la classe.
                        </div>
                    `
                },
                {
                    title: "2. Les figures de style",
                    content: `
                        <h2 class="doc-h2">Les principales figures de style</h2>
                        
                        <h3 class="doc-h3">Les figures de comparaison:</h3>
                        
                        <h4 class="doc-h4">La comparaison:</h4>
                        <div class="callout important">
                            <strong>Définition:</strong> Mise en relation de deux éléments à l'aide d'un outil de comparaison
                            <br><strong>Structure:</strong> A est comme B / A ressemble à B / A pareil à B
                            <br><strong>Exemples:</strong>
                            <br>• Ses yeux sont comme des étoiles.
                            <br>• Il est fort comme un lion.
                            <br>• Cette nouvelle a agi comme un électrochoc.
                            <br><strong>Outils:</strong> Comme, semblable à, pareil à, ainsi que, tel, etc.
                        </div>
                        
                        <h4 class="doc-h4">La métaphore:</h4>
                        <div class="callout info">
                            <strong>Définition:</strong> Comparaison sans outil de comparaison
                            <br><strong>Types:</strong>
                            <br>1. <strong>Métaphore in absentia:</strong> Le comparé est absent
                            <br><em>Exemple:</em> "Mon navire" pour "ma vie" (le navire remplace la vie)
                            <br>2. <strong>Métaphore in praesentia:</strong> Les deux termes sont présents
                            <br><em>Exemple:</em> "Cette femme est une rose." (femme = comparé, rose = comparant)
                            <br><strong>Exemples littéraires:</strong>
                            <br>• "La mer est un miroir." (Hugo)
                            <br>• "Le temps est un grand maître." (Corneille)
                            <br>• "La vie est un long fleuve tranquille."
                        </div>
                        
                        <h3 class="doc-h3">Les figures d'analogie:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Figure</th>
                                <th>Définition</th>
                                <th>Exemple</th>
                                <th>Effet</th>
                            </tr>
                            <tr>
                                <td><strong>Personnification</strong></td>
                                <td>Donner des traits humains à une chose ou un animal</td>
                                <td>Le vent gémit dans les arbres.</td>
                                <td>Rendre vivant, dramatiser</td>
                            </tr>
                            <tr>
                                <td><strong>Allégorie</strong></td>
                                <td>Représentation concrète d'une idée abstraite</td>
                                <td>La mort représentée comme un squelette.</td>
                                <td>Visualiser l'abstrait</td>
                            </tr>
                            <tr>
                                <td><strong>Métonymie</strong></td>
                                <td>Remplacement par un terme lié (contenu/contenant, cause/effet)</td>
                                <td>Boire un verre (le contenu).</td>
                                <td>Créer des associations</td>
                            </tr>
                            <tr>
                                <td><strong>Synecdoque</strong></td>
                                <td>Partie pour le tout ou inversement</td>
                                <td>Une voile à l'horizon (pour un bateau).</td>
                                <td>Mettre en valeur un détail</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Les figures d'insistance:</h3>
                        
                        <h4 class="doc-h4">L'hyperbole:</h4>
                        <div class="callout important">
                            <strong>Définition:</strong> Exagération pour impressionner ou convaincre
                            <br><strong>Exemples:</strong>
                            <br>• Je meurs de faim.
                            <br>• Il y a une éternité que je t'attends.
                            <br>• C'est le plus grand génie de tous les temps.
                            <br>• J'ai un travail de titan.
                            <br><strong>Effets:</strong> Dramatiser, impressionner, créer l'émotion
                        </div>
                        
                        <h4 class="doc-h4">L'anaphore:</h4>
                        <div class="callout info">
                            <strong>Définition:</strong> Répétition d'un mot ou groupe de mots en début de phrase
                            <br><strong>Exemples:</strong>
                            <br>• "Paris outragé ! Paris brisé ! Paris martyrisé ! Mais Paris libéré !" (De Gaulle)
                            <br>• "Il faut que je parte, il faut que je m'en aille, il faut que je te quitte."
                            <br>• "Un souffle, un bruit, un frémissement..."
                            <br><strong>Effets:</strong> Insister, créer un rythme, renforcer l'émotion
                        </div>
                        
                        <h3 class="doc-h3">Les figures d'opposition:</h3>
                        
                        <h4 class="doc-h4">L'antithèse:</h4>
                        <ul class="doc-ul">
                            <li><strong>Définition:</strong> Opposition forte entre deux termes ou idées</li>
                            <li><strong>Exemples:</strong>
                                <br>• "Je suis l'Empire à la fin de la décadence." (Verlaine)
                                <br>• "C'était l'été, je sentais l'hiver dans mon âme."
                                <br>• "Le jour et la nuit, le rire et les larmes."</li>
                            <li><strong>Effet:</strong> Créer un contraste, souligner une opposition</li>
                        </ul>
                        
                        <h4 class="doc-h4">L'oxymore:</h4>
                        <div class="callout important">
                            <strong>Définition:</strong> Association de deux termes contradictoires
                            <br><strong>Exemples:</strong>
                            <br>• "Une obscure clarté" (Corneille)
                            <br>• "Un silence éloquent"
                            <br>• "Cette douce violence"
                            <br>• "Un mort-vivant"
                            <br>• "Un terrible enfant"
                            <br><strong>Effet:</strong> Créer une image paradoxale, surprendre le lecteur
                        </div>
                        
                        <h3 class="doc-h3">Les figures de sonorité:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Figure</th>
                                <th>Définition</th>
                                <th>Exemple</th>
                                <th>Effet</th>
                            </tr>
                            <tr>
                                <td><strong>Allitération</strong></td>
                                <td>Répétition d'une consonne</td>
                                <td>Pour qui sont ces serpents qui sifflent sur vos têtes ? (Racine)</td>
                                <td>Créer une musicalité, imiter un son</td>
                            </tr>
                            <tr>
                                <td><strong>Assonance</strong></td>
                                <td>Répétition d'une voyelle</td>
                                <td>Tout m'afflige et me nuit et conspire à me nuire. (Racine)</td>
                                <td>Créer un effet musical, rythmique</td>
                            </tr>
                            <tr>
                                <td><strong>Paronomase</strong></td>
                                <td>Jeu sur des mots de sens différents mais de sonorités proches</td>
                                <td>Qui se ressemble s'assemble.</td>
                                <td>Créer un effet de surprise, jeu de mots</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Analyse d'un texte littéraire:</h3>
                        <div class="callout info">
                            <strong>Extrait de "Les Misérables" (Victor Hugo):</strong>
                            <br>"La nuit, tout était silencieux, sauf le vent qui pleurait dans les arbres comme une âme en peine."
                            <br><br>
                            <strong>Figures de style identifiées:</strong>
                            <br>1. <strong>Personnification:</strong> "le vent qui pleurait"
                            <br>2. <strong>Comparaison:</strong> "comme une âme en peine"
                            <br>3. <strong>Hyperbole:</strong> "tout était silencieux"
                            <br><br>
                            <strong>Effets produits:</strong>
                            <br>• Création d'une atmosphère triste et mélancolique
                            <br>• Donne vie aux éléments naturels
                            <br>• Amplifie le sentiment de solitude
                        </div>
                    `
                }
            ],

            3: [
                { header: true, title: "UNITE 3: LE DISCOURS" },
                {
                    title: "1. Discours direct et indirect",
                    content: `
                        <h2 class="doc-h2">La transformation du discours</h2>
                        
                        <h3 class="doc-h3">Le discours direct:</h3>
                        <div class="callout important">
                            <strong>Définition:</strong> Reproduction exacte des paroles, entre guillemets
                            <br><strong>Structure:</strong> Verbe introducteur + "paroles"
                            <br><strong>Exemples:</strong>
                            <br>• Il a dit : "Je viendrai demain."
                            <br>• "Je suis fatigué", a-t-il murmuré.
                            <br>• Elle a crié : "Attention !"
                            <br><strong>Caractéristiques:</strong>
                            <br>• Guillemets ou tirets
                            <br>• Ponctuation d'origine conservée
                            <br>• Changements intonatifs marqués
                        </div>
                        
                        <h3 class="doc-h3">Le discours indirect:</h3>
                        <div class="callout info">
                            <strong>Définition:</strong> Rapporter les paroles sans guillemets
                            <br><strong>Structure:</strong> Verbe introducteur + que + proposition
                            <br><strong>Exemples:</strong>
                            <br>• Il a dit qu'il viendrait le lendemain.
                            <br>• Il a murmuré qu'il était fatigué.
                            <br>• Elle a crié de faire attention.
                            <br><strong>Caractéristiques:</strong>
                            <br>• Pas de guillemets
                            <br>• Concordance des temps
                            <br>• Changements des indicateurs de temps et de personne
                        </div>
                        
                        <h3 class="doc-h3">Les transformations principales:</h3>
                        
                        <h4 class="doc-h4">Changements de temps:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Discours direct</th>
                                <th>Discours indirect (présent)</th>
                                <th>Discours indirect (passé)</th>
                            </tr>
                            <tr>
                                <td>Présent</td>
                                <td>Présent</td>
                                <td>Imparfait</td>
                            </tr>
                            <tr>
                                <td>Passé composé</td>
                                <td>Passé composé</td>
                                <td>Plus-que-parfait</td>
                            </tr>
                            <tr>
                                <td>Imparfait</td>
                                <td>Imparfait</td>
                                <td>Imparfait</td>
                            </tr>
                            <tr>
                                <td>Futur simple</td>
                                <td>Futur simple</td>
                                <td>Conditionnel présent</td>
                            </tr>
                            <tr>
                                <td>Futur antérieur</td>
                                <td>Futur antérieur</td>
                                <td>Conditionnel passé</td>
                            </tr>
                            <tr>
                                <td>Impératif</td>
                                <td>De + infinitif</td>
                                <td>De + infinitif</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">Changements des indicateurs de temps:</h4>
                        <div class="callout important">
                            <strong>aujourd'hui → ce jour-là</strong>
                            <br><strong>hier → la veille</strong>
                            <br><strong>demain → le lendemain</strong>
                            <br><strong>maintenant → alors</strong>
                            <br><strong>ce matin → ce matin-là</strong>
                            <br><strong>cet après-midi → cet après-midi-là</strong>
                            <br><strong>ce soir → ce soir-là</strong>
                            <br><strong>la semaine prochaine → la semaine suivante</strong>
                            <br><strong>la semaine dernière → la semaine précédente</strong>
                            <br><strong>l'année prochaine → l'année suivante</strong>
                            <br><strong>l'année dernière → l'année précédente</strong>
                        </div>
                        
                        <h4 class="doc-h4">Changements des indicateurs de lieu:</h4>
                        <div class="callout info">
                            <strong>ici → là</strong>
                            <br><strong>là → là-bas</strong>
                            <br><strong>ceci → cela</strong>
                            <br><strong>cela → cela</strong>
                            <br><strong>Exemples:</strong>
                            <br>• "Je suis ici" → Il a dit qu'il était là.
                            <br>• "Viens ici" → Il m'a dit de venir là.
                            <br>• "Prends ceci" → Il m'a dit de prendre cela.
                        </div>
                        
                        <h3 class="doc-h3">Les verbes introducteurs:</h3>
                        
                        <h4 class="doc-h4">Verbes déclaratifs:</h4>
                        <ul class="doc-ul">
                            <li><strong>Dire</strong> (le plus neutre)</li>
                            <li><strong>Déclarer</strong> (formel)</li>
                            <li><strong>Affirmer</strong> (avec conviction)</li>
                            <li><strong>Prétendre</strong> (sans preuve)</li>
                            <li><strong>Soutenir</strong> (défendre une opinion)</li>
                            <li><strong>Rapporter</strong> (faire un compte-rendu)</li>
                            <li><strong>Raconter</strong> (pour une histoire)</li>
                        </ul>
                        
                        <h4 class="doc-h4">Verbes selon l'intention:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Intention</th>
                                <th>Verbes</th>
                                <th>Exemple</th>
                            </tr>
                            <tr>
                                <td><strong>Question</strong></td>
                                <td>Demander, s'enquérir, interroger</td>
                                <td>Il a demandé si j'étais prêt.</td>
                            </tr>
                            <tr>
                                <td><strong>Ordre</strong></td>
                                <td>Ordonner, commander, exiger</td>
                                <td>Elle a ordonné qu'on sorte.</td>
                            </tr>
                            <tr>
                                <td><strong>Conseil</strong></td>
                                <td>Conseiller, recommander, suggérer</td>
                                <td>Il m'a conseillé de partir.</td>
                            </tr>
                            <tr>
                                <td><strong>Interdiction</strong></td>
                                <td>Interdire, défendre, prohiber</td>
                                <td>Elle a interdit qu'on parle.</td>
                            </tr>
                            <tr>
                                <td><strong>Invitation</strong></td>
                                <td>Inviter, convier, prier</td>
                                <td>Il m'a invité à venir.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Exercices de transformation:</h3>
                        
                        <h4 class="doc-h4">Transformez au discours indirect:</h4>
                        <div class="callout important">
                            1. Il a dit : "Je viendrai demain."
                            <br>→ Il a dit qu'il viendrait le lendemain.
                            <br><br>
                            2. Elle a crié : "Attention, il y a du verre par terre !"
                            <br>→ Elle a crié qu'il y avait du verre par terre.
                            <br><br>
                            3. "Où vas-tu ?" m'a-t-il demandé.
                            <br>→ Il m'a demandé où j'allais.
                            <br><br>
                            4. Le professeur a dit : "Travaillez la leçon 5 pour demain."
                            <br>→ Le professeur a dit de travailler la leçon 5 pour le lendemain.
                        </div>
                        
                        <h4 class="doc-h4">Transformez au discours direct:</h4>
                        <div class="callout info">
                            1. Il a affirmé qu'il avait vu l'accident.
                            <br>→ Il a affirmé : "J'ai vu l'accident."
                            <br><br>
                            2. Elle m'a demandé si j'étais libre ce soir.
                            <br>→ Elle m'a demandé : "Es-tu libre ce soir ?"
                            <br><br>
                            3. Il a ordonné que tout le monde sorte.
                            <br>→ Il a ordonné : "Que tout le monde sorte !"
                            <br><br>
                            4. Elle a conseillé à son frère de se reposer.
                            <br>→ Elle a conseillé à son frère : "Repose-toi."
                        </div>
                    `
                },
                {
                    title: "2. Les modalisateurs",
                    content: `
                        <h2 class="doc-h2">Exprimer le doute, la certitude et l'opinion</h2>
                        
                        <h3 class="doc-h3">Les adverbes de modalité:</h3>
                        
                        <h4 class="doc-h4">Certitude:</h4>
                        <div class="callout important">
                            <strong>Certainement:</strong> Avec certitude
                            <br><em>Exemple:</em> Il viendra certainement.
                            <br><br>
                            <strong>Sûrement:</strong> Très probablement
                            <br><em>Exemple:</em> Il a sûrement oublié.
                            <br><br>
                            <strong>Évidemment:</strong> De manière évidente
                            <br><em>Exemple:</em> Évidemment, il a raison.
                            <br><br>
                            <strong>Incontestablement:</strong> Sans contestation possible
                            <br><em>Exemple:</em> C'est incontestablement vrai.
                            <br><br>
                            <strong>Indubitablement:</strong> Sans doute possible
                            <br><em>Exemple:</em> C'est indubitablement faux.
                        </div>
                        
                        <h4 class="doc-h4">Probabilité:</h4>
                        <div class="callout info">
                            <strong>Probablement:</strong> Avec probabilité
                            <br><em>Exemple:</em> Il pleuvra probablement demain.
                            <br><br>
                            <strong>Vraisemblablement:</strong> De manière vraisemblable
                            <br><em>Exemple:</em> Il a vraisemblablement terminé.
                            <br><br>
                            <strong>Apparemment:</strong> Selon les apparences
                            <br><em>Exemple:</em> Apparemment, tout va bien.
                            <br><br>
                            <strong>Sans doute:</strong> Probablement (attention : contient "doute")
                            <br><em>Exemple:</em> Il arrivera sans doute en retard.
                        </div>
                        
                        <h4 class="doc-h4">Doute:</h4>
                        <ul class="doc-ul">
                            <li><strong>Peut-être:</strong> Éventualité
                                <br><em>Exemple:</em> Peut-être viendra-t-il.</li>
                            <li><strong>Eventuellement:</strong> Dans certains cas
                                <br><em>Exemple:</em> Nous pourrons éventuellement venir.</li>
                            <li><strong>Probablement pas:</strong> Probabilité faible
                                <br><em>Exemple:</em> Il ne viendra probablement pas.</li>
                            <li><strong>Peut-être que... ne... pas:</strong> Doute négatif
                                <br><em>Exemple:</em> Peut-être qu'il ne viendra pas.</li>
                        </ul>
                        
                        <h3 class="doc-h3">Les expressions de modalité:</h3>
                        
                        <h4 class="doc-h4">Certitude:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Expression</th>
                                <th>Construction</th>
                                <th>Exemple</th>
                            </tr>
                            <tr>
                                <td><strong>Il est certain que</strong></td>
                                <td>+ indicatif</td>
                                <td>Il est certain qu'il viendra.</td>
                            </tr>
                            <tr>
                                <td><strong>Il est sûr que</strong></td>
                                <td>+ indicatif</td>
                                <td>Il est sûr que tu réussiras.</td>
                            </tr>
                            <tr>
                                <td><strong>Il est évident que</strong></td>
                                <td>+ indicatif</td>
                                <td>Il est évident qu'il a tort.</td>
                            </tr>
                            <tr>
                                <td><strong>Il n'y a pas de doute que</strong></td>
                                <td>+ indicatif</td>
                                <td>Il n'y a pas de doute qu'il a menti.</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">Probabilité:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Expression</th>
                                <th>Construction</th>
                                <th>Exemple</th>
                            </tr>
                            <tr>
                                <td><strong>Il est probable que</strong></td>
                                <td>+ indicatif ou subjonctif</td>
                                <td>Il est probable qu'il pleuve.</td>
                            </tr>
                            <tr>
                                <td><strong>Il est vraisemblable que</strong></td>
                                <td>+ indicatif</td>
                                <td>Il est vraisemblable qu'il accepte.</td>
                            </tr>
                            <tr>
                                <td><strong>Il semble que</strong></td>
                                <td>+ subjonctif</td>
                                <td>Il semble qu'il soit malade.</td>
                            </tr>
                            <tr>
                                <td><strong>Il paraît que</strong></td>
                                <td>+ indicatif</td>
                                <td>Il paraît qu'il est riche.</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">Doute:</h4>
                        <div class="callout important">
                            <strong>Il est possible que + subjonctif</strong>
                            <br><em>Exemple:</em> Il est possible qu'il ne vienne pas.
                            <br><br>
                            <strong>Il se peut que + subjonctif</strong>
                            <br><em>Exemple:</em> Il se peut que je sois en retard.
                            <br><br>
                            <strong>Il est douteux que + subjonctif</strong>
                            <br><em>Exemple:</em> Il est douteux qu'il réussisse.
                            <br><br>
                            <strong>Il n'est pas certain que + subjonctif</strong>
                            <br><em>Exemple:</em> Il n'est pas certain qu'il pleuve.
                            <br><br>
                            <strong>Il n'est pas sûr que + subjonctif</strong>
                            <br><em>Exemple:</em> Il n'est pas sûr qu'il accepte.
                        </div>
                        
                        <h3 class="doc-h3">Les verbes modaux:</h3>
                        
                        <h4 class="doc-h4">Devoir (obligation/probabilité):</h4>
                        <div class="callout info">
                            <strong>Obligation:</strong> Devoir + infinitif
                            <br><em>Exemple:</em> Je dois partir maintenant. (obligation)
                            <br><br>
                            <strong>Probabilité forte:</strong> Doit + infinitif
                            <br><em>Exemple:</em> Il doit être chez lui. (je pense que oui)
                            <br><br>
                            <strong>Probabilité passée:</strong> A dû + infinitif
                            <br><em>Exemple:</em> Il a dû oublier. (je pense qu'il a oublié)
                        </div>
                        
                        <h4 class="doc-h4">Pouvoir (possibilité):</h4>
                        <ul class="doc-ul">
                            <li><strong>Capacité:</strong> Je peux nager. (j'en ai la capacité)</li>
                            <li><strong>Permission:</strong> Je peux sortir. (j'ai la permission)</li>
                            <li><strong>Possibilité:</strong> Il peut pleuvoir. (c'est possible)</li>
                            <li><strong>Possibilité passée:</strong> Il a pu se tromper. (peut-être)</li>
                        </ul>
                        
                        <h4 class="doc-h4">Sembler/paraître (apparence):</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Verbe</th>
                                <th>Construction</th>
                                <th>Exemple</th>
                                <th>Nuance</th>
                            </tr>
                            <tr>
                                <td><strong>Sembler</strong></td>
                                <td>Sembler + adjectif</td>
                                <td>Il semble fatigué.</td>
                                <td>Impression personnelle</td>
                            </tr>
                            <tr>
                                <td><strong>Paraître</strong></td>
                                <td>Paraître + adjectif</td>
                                <td>Il paraît heureux.</td>
                                <td>Apparence extérieure</td>
                            </tr>
                            <tr>
                                <td><strong>Avoir l'air</strong></td>
                                <td>Avoir l'air + adjectif</td>
                                <td>Il a l'air content.</td>
                                <td>Expression courante</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Exercices d'application:</h3>
                        
                        <h4 class="doc-h4">Transformez avec un modalisateur:</h4>
                        <div class="callout important">
                            <strong>1. Il viendra demain. (certitude)</strong>
                            <br>→ Il viendra certainement demain.
                            <br><br>
                            <strong>2. Il pleuvra cet après-midi. (probabilité)</strong>
                            <br>→ Il pleuvra probablement cet après-midi.
                            <br><br>
                            <strong>3. Il a terminé son travail. (doute)</strong>
                            <br>→ Il a peut-être terminé son travail.
                            <br><br>
                            <strong>4. Elle est malade. (apparence)</strong>
                            <br>→ Elle semble malade. / Elle a l'air malade.
                        </div>
                        
                        <h4 class="doc-h4">Complétez avec le mode qui convient:</h4>
                        <div class="callout info">
                            1. Il est certain qu'il __________ (venir).
                            <br>→ Il est certain qu'il viendra. (indicatif)
                            <br><br>
                            2. Il est possible qu'il __________ (ne pas venir).
                            <br>→ Il est possible qu'il ne vienne pas. (subjonctif)
                            <br><br>
                            3. Il semble qu'il __________ (être) malade.
                            <br>→ Il semble qu'il soit malade. (subjonctif)
                            <br><br>
                            4. Il paraît qu'il __________ (partir) en voyage.
                            <br>→ Il paraît qu'il part en voyage. (indicatif)
                        </div>
                    `
                }
            ]
        }
    },

    // =================================================================
    // 6. اللغة الإسبانية
    // =================================================================
    spanish: {
        title: "اللغة الإسبانية",
        rtl: false,
        trimesters: {
            1: [
                { header: true, title: "UNIDAD 1: ÁMBITO PERSONAL" },
                {
                    title: "1. Ser y Estar",
                    content: `
                        <h2 class="doc-h2">La diferencia fundamental: Ser vs Estar</h2>
                        
                        <h3 class="doc-h3">Usos de SER (Esencia permanente):</h3>
                        <div class="callout important">
                            <strong>D.O.C.T.O.R.:</strong> Acrónimo para recordar los usos
                            <br><br>
                            <strong>D = Descripción física permanente</strong>
                            <br>• Ella es alta y morena.
                            <br>• El libro es grande.
                            <br><br>
                            <strong>O = Origen (nacionalidad, procedencia)</strong>
                            <br>• Soy argelino.
                            <br>• Es de Madrid.
                            <br><br>
                            <strong>C = Características de personalidad</strong>
                            <br>• Es inteligente y simpático.
                            <br>• Son trabajadores.
                            <br><br>
                            <strong>T = Tiempo (fechas, horas)</strong>
                            <br>• Son las tres de la tarde.
                            <br>• Hoy es lunes.
                            <br><br>
                            <strong>O = Ocupación (profesión)</strong>
                            <br>• Soy estudiante.
                            <br>• Él es médico.
                            <br><br>
                            <strong>R = Relaciones</strong>
                            <br>• Ella es mi hermana.
                            <br>• Son amigos.
                        </div>
                        
                        <h3 class="doc-h3">Usos de ESTAR (Estado temporal):</h3>
                        <div class="callout info">
                            <strong>P.L.A.C.E.:</strong> Acrónimo para recordar los usos
                            <br><br>
                            <strong>P = Posición (ubicación física)</strong>
                            <br>• El libro está en la mesa.
                            <br>• Estoy en casa.
                            <br><br>
                            <strong>L = Localización (lugar geográfico)</strong>
                            <br>• Madrid está en España.
                            <br>• Argel está en Argelia.
                            <br><br>
                            <strong>A = Acción (gerundio)</strong>
                            <br>• Estoy estudiando.
                            <br>• Están comiendo.
                            <br><br>
                            <strong>C = Condición (estado físico/emocional)</strong>
                            <br>• Estoy cansado.
                            <br>• Ella está contenta.
                            <br><br>
                            <strong>E = Emoción (sentimientos temporales)</strong>
                            <br>• Estoy feliz.
                            <br>• Están tristes.
                        </div>
                        
                        <h3 class="doc-h3">Conjugación en presente:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Pronombre</th>
                                <th>SER</th>
                                <th>ESTAR</th>
                            </tr>
                            <tr>
                                <td><strong>Yo</strong></td>
                                <td>soy</td>
                                <td>estoy</td>
                            </tr>
                            <tr>
                                <td><strong>Tú</strong></td>
                                <td>eres</td>
                                <td>estás</td>
                            </tr>
                            <tr>
                                <td><strong>Él/Ella/Usted</strong></td>
                                <td>es</td>
                                <td>está</td>
                            </tr>
                            <tr>
                                <td><strong>Nosotros/as</strong></td>
                                <td>somos</td>
                                <td>estamos</td>
                            </tr>
                            <tr>
                                <td><strong>Vosotros/as</strong></td>
                                <td>sois</td>
                                <td>estáis</td>
                            </tr>
                            <tr>
                                <td><strong>Ellos/Ellas/Ustedes</strong></td>
                                <td>son</td>
                                <td>están</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Ejercicios de práctica:</h3>
                        
                        <h4 class="doc-h4">Completa con SER o ESTAR:</h4>
                        <div class="callout important">
                            1. Yo __________ estudiante. (SER - ocupación)
                            <br>2. El libro __________ en la mesa. (ESTAR - posición)
                            <br>3. Nosotros __________ cansados. (ESTAR - condición)
                            <br>4. Ellos __________ altos. (SER - descripción)
                            <br>5. Hoy __________ lunes. (SER - tiempo)
                            <br>6. ¿Dónde __________ el baño? (ESTAR - localización)
                            <br>7. Ella __________ de España. (SER - origen)
                            <br>8. Yo __________ leyendo. (ESTAR - acción)
                        </div>
                        
                        <h4 class="doc-h4">Traduce al español:</h4>
                        <div class="callout info">
                            1. I am Algerian.
                            <br>→ Soy argelino.
                            <br><br>
                            2. He is happy today.
                            <br>→ Él está contento hoy.
                            <br><br>
                            3. We are in the school.
                            <br>→ Estamos en la escuela.
                            <br><br>
                            4. They are doctors.
                            <br>→ Son médicos.
                        </div>
                    `
                },
                {
                    title: "2. Presente de indicativo",
                    content: `
                        <h2 class="doc-h2">El presente regular e irregular</h2>
                        
                        <h3 class="doc-h3">Verbos regulares:</h3>
                        
                        <h4 class="doc-h4">Terminación -AR:</h4>
                        <div class="callout important">
                            <strong>Ejemplo: HABLAR (hablar)</strong>
                            <br>• Yo habl<strong>o</strong>
                            <br>• Tú habl<strong>as</strong>
                            <br>• Él/Ella/Usted habl<strong>a</strong>
                            <br>• Nosotros habl<strong>amos</strong>
                            <br>• Vosotros habl<strong>áis</strong>
                            <br>• Ellos/Ellas/Ustedes habl<strong>an</strong>
                            <br><strong>Otros ejemplos:</strong> Estudiar, trabajar, cantar, bailar
                        </div>
                        
                        <h4 class="doc-h4">Terminación -ER:</h4>
                        <div class="callout info">
                            <strong>Ejemplo: COMER (comer)</strong>
                            <br>• Yo com<strong>o</strong>
                            <br>• Tú com<strong>es</strong>
                            <br>• Él/Ella/Usted com<strong>e</strong>
                            <br>• Nosotros com<strong>emos</strong>
                            <br>• Vosotros com<strong>éis</strong>
                            <br>• Ellos/Ellas/Ustedes com<strong>en</strong>
                            <br><strong>Otros ejemplos:</strong> Beber, leer, aprender, comprender
                        </div>
                        
                        <h4 class="doc-h4">Terminación -IR:</h4>
                        <div class="callout important">
                            <strong>Ejemplo: VIVIR (vivir)</strong>
                            <br>• Yo viv<strong>o</strong>
                            <br>• Tú viv<strong>es</strong>
                            <br>• Él/Ella/Usted viv<strong>e</strong>
                            <br>• Nosotros viv<strong>imos</strong>
                            <br>• Vosotros viv<strong>ís</strong>
                            <br>• Ellos/Ellas/Ustedes viv<strong>en</strong>
                            <br><strong>Otros ejemplos:</strong> Escribir, abrir, recibir, partir
                        </div>
                        
                        <h3 class="doc-h3">Verbos irregulares importantes (YO):</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Verbo</th>
                                <th>Yo</th>
                                <th>Significado</th>
                                <th>Ejemplo</th>
                            </tr>
                            <tr>
                                <td><strong>Hacer</strong></td>
                                <td>hago</td>
                                <td>hacer</td>
                                <td>Yo hago la tarea.</td>
                            </tr>
                            <tr>
                                <td><strong>Poner</strong></td>
                                <td>pongo</td>
                                <td>poner</td>
                                <td>Yo pongo la mesa.</td>
                            </tr>
                            <tr>
                                <td><strong>Salir</strong></td>
                                <td>salgo</td>
                                <td>salir</td>
                                <td>Yo salgo a las cinco.</td>
                            </tr>
                            <tr>
                                <td><strong>Traer</strong></td>
                                <td>traigo</td>
                                <td>traer</td>
                                <td>Yo traigo los libros.</td>
                            </tr>
                            <tr>
                                <td><strong>Saber</strong></td>
                                <td>sé</td>
                                <td>saber</td>
                                <td>Yo sé la respuesta.</td>
                            </tr>
                            <tr>
                                <td><strong>Dar</strong></td>
                                <td>doy</td>
                                <td>dar</td>
                                <td>Yo doy clases.</td>
                            </tr>
                            <tr>
                                <td><strong>Ver</strong></td>
                                <td>veo</td>
                                <td>ver</td>
                                <td>Yo veo la televisión.</td>
                            </tr>
                            <tr>
                                <td><strong>Ir</strong></td>
                                <td>voy</td>
                                <td>ir</td>
                                <td>Yo voy al cine.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Cambios de raíz (stem-changing verbs):</h3>
                        
                        <h4 class="doc-h4">E → IE:</h4>
                        <div class="callout info">
                            <strong>Ejemplo: QUERER (querer)</strong>
                            <br>• Yo qu<strong>ie</strong>ro
                            <br>• Tú qu<strong>ie</strong>res
                            <br>• Él/Ella/Usted qu<strong>ie</strong>re
                            <br>• Nosotros quer<strong>e</strong>mos (no cambia)
                            <br>• Vosotros quer<strong>é</strong>is (no cambia)
                            <br>• Ellos/Ellas/Ustedes qu<strong>ie</strong>ren
                            <br><strong>Otros:</strong> Pensar, entender, comenzar, empezar
                        </div>
                        
                        <h4 class="doc-h4">O → UE:</h4>
                        <div class="callout important">
                            <strong>Ejemplo: PODER (poder)</strong>
                            <br>• Yo p<strong>ue</strong>do
                            <br>• Tú p<strong>ue</strong>des
                            <br>• Él/Ella/Usted p<strong>ue</strong>de
                            <br>• Nosotros pod<strong>e</strong>mos (no cambia)
                            <br>• Vosotros pod<strong>é</strong>is (no cambia)
                            <br>• Ellos/Ellas/Ustedes p<strong>ue</strong>den
                            <br><strong>Otros:</strong> Dormir, encontrar, volver, costar
                        </div>
                        
                        <h4 class="doc-h4">E → I:</h4>
                        <ul class="doc-ul">
                            <li><strong>Ejemplo: PEDIR (pedir)</strong>
                                <br>• Yo p<strong>i</strong>do
                                <br>• Tú p<strong>i</strong>des
                                <br>• Él/Ella/Usted p<strong>i</strong>de
                                <br>• Nosotros ped<strong>i</strong>mos
                                <br>• Vosotros ped<strong>í</strong>s
                                <br>• Ellos/Ellas/Ustedes p<strong>i</strong>den</li>
                            <li><strong>Otros:</strong> Servir, repetir, seguir, vestir</li>
                        </ul>
                        
                        <h3 class="doc-h3">Usos del presente:</h3>
                        <div class="callout info">
                            <strong>1. Acciones habituales:</strong>
                            <br>• Yo estudio español todos los días.
                            <br><br>
                            <strong>2. Verdades generales:</strong>
                            <br>• El agua hierve a 100 grados.
                            <br><br>
                            <strong>3. Acciones en curso:</strong>
                            <br>• Ahora leo un libro.
                            <br><br>
                            <strong>4. Futuro cercano:</strong>
                            <br>• Mañana voy al cine.
                            <br><br>
                            <strong>5. Mandatos:</strong>
                            <br>• Tú comes ahora mismo.
                        </div>
                    `
                },
                {
                    title: "3. Verbo GUSTAR",
                    content: `
                        <h2 class="doc-h2">Expresar gustos y preferencias</h2>
                        
                        <h3 class="doc-h3">Estructura básica:</h3>
                        <div class="callout important">
                            <strong>Fórmula:</strong> Pronombre indirecto + gusta(n) + sustantivo
                            <br><br>
                            <strong>Pronombres indirectos:</strong>
                            <br>• (A mí) <strong>me</strong> gusta(n)
                            <br>• (A ti) <strong>te</strong> gusta(n)
                            <br>• (A él/ella/usted) <strong>le</strong> gusta(n)
                            <br>• (A nosotros) <strong>nos</strong> gusta(n)
                            <br>• (A vosotros) <strong>os</strong> gusta(n)
                            <br>• (A ellos/ellas/ustedes) <strong>les</strong> gusta(n)
                            <br><br>
                            <strong>GUSTA (singular) vs GUSTAN (plural):</strong>
                            <br>• <strong>Me gusta</strong> el libro. (un libro)
                            <br>• <strong>Me gustan</strong> los libros. (varios libros)
                        </div>
                        
                        <h3 class="doc-h3">Ejemplos detallados:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Español</th>
                                <th>Traducción literal</th>
                                <th>Significado</th>
                            </tr>
                            <tr>
                                <td><strong>Me gusta el fútbol.</strong></td>
                                <td>El fútbol me gusta a mí.</td>
                                <td>I like football.</td>
                            </tr>
                            <tr>
                                <td><strong>Te gustan las películas.</strong></td>
                                <td>Las películas te gustan a ti.</td>
                                <td>You like movies.</td>
                            </tr>
                            <tr>
                                <td><strong>Le gusta estudiar.</strong></td>
                                <td>Estudiar le gusta a él/ella.</td>
                                <td>He/She likes to study.</td>
                            </tr>
                            <tr>
                                <td><strong>Nos gusta viajar.</strong></td>
                                <td>Viajar nos gusta a nosotros.</td>
                                <td>We like to travel.</td>
                            </tr>
                            <tr>
                                <td><strong>Os gusta la música.</strong></td>
                                <td>La música os gusta a vosotros.</td>
                                <td>You (pl.) like music.</td>
                            </tr>
                            <tr>
                                <td><strong>Les gustan los coches.</strong></td>
                                <td>Los coches les gustan a ellos.</td>
                                <td>They like cars.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Con verbos infinitivos:</h3>
                        <div class="callout info">
                            <strong>Siempre se usa GUSTA con infinitivos:</strong>
                            <br>• Me gusta <strong>cantar</strong>.
                            <br>• Te gusta <strong>bailar</strong>.
                            <br>• Le gusta <strong>leer</strong>.
                            <br>• Nos gusta <strong>estudiar</strong>.
                            <br>• Os gusta <strong>correr</strong>.
                            <br>• Les gusta <strong>dormir</strong>.
                            <br><br>
                            <strong>Con varios infinitivos:</strong>
                            <br>• Me gusta <strong>cantar y bailar</strong>.
                            <br>• Nos gusta <strong>estudiar y aprender</strong>.
                        </div>
                        
                        <h3 class="doc-h3">Para enfatizar o clarificar:</h3>
                        <div class="callout important">
                            <strong>Se puede añadir "A + pronombre" para clarificar:</strong>
                            <br>• <strong>A mí</strong> me gusta el café.
                            <br>• <strong>A ti</strong> te gusta el té.
                            <br>• <strong>A él</strong> le gusta el zumo.
                            <br>• <strong>A ella</strong> le gusta la leche.
                            <br>• <strong>A nosotros</strong> nos gusta el agua.
                            <br>• <strong>A vosotros</strong> os gusta el vino.
                            <br>• <strong>A ellos</strong> les gusta la cerveza.
                            <br><br>
                            <strong>Para contrastar:</strong>
                            <br>• <strong>A mí</strong> me gusta el fútbol, pero <strong>a ti</strong> te gusta el baloncesto.
                        </div>
                        
                        <h3 class="doc-h3">Verbos similares:</h3>
                        <ul class="doc-ul">
                            <li><strong>Encantar:</strong> Gustar mucho (love)
                                <br><em>Ejemplo:</em> Me encanta el chocolate.</li>
                            <li><strong>Interesar:</strong> Interesar (interest)
                                <br><em>Ejemplo:</em> Me interesa la historia.</li>
                            <li><strong>Importar:</strong> Importar (matter)
                                <br><em>Ejemplo:</em> Me importa tu opinión.</li>
                            <li><strong>Fascinar:</strong> Fascinar (fascinate)
                                <br><em>Ejemplo:</em> Me fascina la ciencia.</li>
                            <li><strong>Aburrir:</strong> Aburrir (bore)
                                <br><em>Ejemplo:</em> Me aburren las matemáticas.</li>
                            <li><strong>Molestar:</strong> Molestar (bother)
                                <br><em>Ejemplo:</em> Me molesta el ruido.</li>
                        </ul>
                        
                        <h3 class="doc-h3">Formas negativas:</h3>
                        <div class="callout info">
                            <strong>Colocar "NO" antes del pronombre indirecto:</strong>
                            <br>• <strong>No me</strong> gusta el café.
                            <br>• <strong>No te</strong> gustan las verduras.
                            <br>• <strong>No le</strong> gusta trabajar.
                            <br>• <strong>No nos</strong> gusta madrugar.
                            <br>• <strong>No os</strong> gusta estudiar.
                            <br>• <strong>No les</strong> gusta el frío.
                            <br><br>
                            <strong>Respuestas:</strong>
                            <br>• ¿Te gusta el fútbol? - Sí, me gusta. / No, no me gusta.
                            <br>• ¿Os gustan las películas? - Sí, nos gustan. / No, no nos gustan.
                        </div>
                        
                        <h3 class="doc-h3">Ejercicios:</h3>
                        
                        <h4 class="doc-h4">Completa con la forma correcta:</h4>
                        <div class="callout important">
                            1. A mí __________ (gustar) la música.
                            <br>→ A mí <strong>me gusta</strong> la música.
                            <br><br>
                            2. A nosotros __________ (gustar) los deportes.
                            <br>→ A nosotros <strong>nos gustan</strong> los deportes.
                            <br><br>
                            3. A ella __________ (encantar) bailar.
                            <br>→ A ella <strong>le encanta</strong> bailar.
                            <br><br>
                            4. A ellos __________ (interesar) la historia.
                            <br>→ A ellos <strong>les interesa</strong> la historia.
                        </div>
                        
                        <h4 class="doc-h4">Traduce al español:</h4>
                        <div class="callout info">
                            1. I like books.
                            <br>→ Me gustan los libros.
                            <br><br>
                            2. You (informal) like to study.
                            <br>→ Te gusta estudiar.
                            <br><br>
                            3. He doesn't like vegetables.
                            <br>→ No le gustan las verduras.
                            <br><br>
                            4. We love music.
                            <br>→ Nos encanta la música.
                        </div>
                    `
                }
            ],

            2: [
                { header: true, title: "UNIDAD 2: ÁMBITO EDUCATIVO" },
                {
                    title: "1. La obligación",
                    content: `
                        <h2 class="doc-h2">Expresar obligación y necesidad</h2>
                        
                        <h3 class="doc-h3">TENER QUE + infinitivo:</h3>
                        <div class="callout important">
                            <strong>Conjugación de TENER:</strong>
                            <br>• Yo tengo que...
                            <br>• Tú tienes que...
                            <br>• Él/Ella/Usted tiene que...
                            <br>• Nosotros tenemos que...
                            <br>• Vosotros tenéis que...
                            <br>• Ellos/Ellas/Ustedes tienen que...
                            <br><br>
                            <strong>Significado:</strong> Tener la obligación de...
                            <br><strong>Ejemplos:</strong>
                            <br>• Tengo que estudiar para el examen.
                            <br>• Tienes que hacer la tarea.
                            <br>• Él tiene que trabajar mañana.
                            <br>• Tenemos que llegar temprano.
                            <br>• Tenéis que escuchar al profesor.
                            <br>• Tienen que pagar la cuenta.
                        </div>
                        
                        <h3 class="doc-h3">HAY QUE + infinitivo:</h3>
                        <div class="callout info">
                            <strong>Forma impersonal (no se conjuga):</strong>
                            <br>• Hay que + infinitivo
                            <br><br>
                            <strong>Significado:</strong> Es necesario... (para todos)
                            <br><strong>Ejemplos:</strong>
                            <br>• Hay que estudiar para aprender.
                            <br>• Hay que respetar a los profesores.
                            <br>• Hay que trabajar duro para tener éxito.
                            <br>• Hay que ser puntual en la escuela.
                            <br><br>
                            <strong>Comparación:</strong>
                            <br>• <strong>Yo tengo que</strong> estudiar. (obligación personal)
                            <br>• <strong>Hay que</strong> estudiar. (necesidad general)
                        </div>
                        
                        <h3 class="doc-h3">DEBER + infinitivo:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Conjugación</th>
                                <th>Significado</th>
                                <th>Ejemplo</th>
                                <th>Nota</th>
                            </tr>
                            <tr>
                                <td><strong>Yo debo</strong></td>
                                <td>Deber moral</td>
                                <td>Debo ayudar a mi familia.</td>
                                <td>Más fuerte que "tener que"</td>
                            </tr>
                            <tr>
                                <td><strong>Tú debes</strong></td>
                                <td>Obligación ética</td>
                                <td>Debes ser honesto.</td>
                                <td>Consejo fuerte</td>
                            </tr>
                            <tr>
                                <td><strong>Él debe</strong></td>
                                <td>Responsabilidad</td>
                                <td>Debe cumplir su promesa.</td>
                                <td>Expectativa social</td>
                            </tr>
                            <tr>
                                <td><strong>Nosotros debemos</strong></td>
                                <td>Deber colectivo</td>
                                <td>Debemos proteger el medio ambiente.</td>
                                <td>Responsabilidad compartida</td>
                            </tr>
                            <tr>
                                <td><strong>Vosotros debéis</strong></td>
                                <td>Obligación grupal</td>
                                <td>Debéis estudiar juntos.</td>
                                <td>Para grupo informal</td>
                            </tr>
                            <tr>
                                <td><strong>Ellos deben</strong></td>
                                <td>Expectativa social</td>
                                <td>Deben respetar las reglas.</td>
                                <td>Para terceras personas</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Formas negativas:</h3>
                        <div class="callout important">
                            <strong>TENER QUE:</strong>
                            <br>• No tengo que estudiar hoy. (No es necesario)
                            <br>• No tienes que venir temprano.
                            <br>• No tiene que trabajar los domingos.
                            <br><br>
                            <strong>DEBER:</strong>
                            <br>• No debo mentir. (Prohibición moral)
                            <br>• No debes fumar aquí.
                            <br>• No debe llegar tarde.
                            <br><br>
                            <strong>HAY QUE:</strong>
                            <br>• No hay que fumar en clase. (Prohibición general)
                            <br>• No hay que copiar en los exámenes.
                            <br>• No hay que hacer ruido en la biblioteca.
                        </div>
                        
                        <h3 class="doc-h3">Otras expresiones de obligación:</h3>
                        <ul class="doc-ul">
                            <li><strong>Es necesario que + subjuntivo:</strong>
                                <br>Es necesario que estudies más.</li>
                            <li><strong>Es importante que + subjuntivo:</strong>
                                <br>Es importante que practiques cada día.</li>
                            <li><strong>Es obligatorio que + subjuntivo:</strong>
                                <br>Es obligatorio que uses uniforme.</li>
                            <li><strong>Hay la obligación de + infinitivo:</strong>
                                <br>Hay la obligación de asistir a clase.</li>
                            <li><strong>Estar obligado a + infinitivo:</strong>
                                <br>Estoy obligado a terminar este trabajo.</li>
                        </ul>
                        
                        <h3 class="doc-h3">Comparación de intensidad:</h3>
                        <div class="callout info">
                            <strong>De más fuerte a más débil:</strong>
                            <br>1. <strong>Es obligatorio que</strong> (más fuerte, formal)
                            <br>2. <strong>Deber</strong> (deber moral)
                            <br>3. <strong>Tener que</strong> (obligación práctica)
                            <br>4. <strong>Hay que</strong> (necesidad general)
                            <br>5. <strong>Es necesario que</strong> (consejo fuerte)
                            <br>6. <strong>Es importante que</strong> (recomendación)
                            <br><br>
                            <strong>Ejemplos comparativos:</strong>
                            <br>• <strong>Es obligatorio que</strong> pagues los impuestos.
                            <br>• <strong>Debes</strong> ayudar a los necesitados.
                            <br>• <strong>Tengo que</strong> comprar pan.
                            <br>• <strong>Hay que</strong> beber agua.
                            <br>• <strong>Es necesario que</strong> estudies.
                            <br>• <strong>Es importante que</strong> descanses.
                        </div>
                        
                        <h3 class="doc-h3">En el ámbito educativo:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Expresión</th>
                                <th>Uso en la escuela</th>
                                <th>Ejemplo</th>
                            </tr>
                            <tr>
                                <td><strong>Tener que</strong></td>
                                <td>Tareas específicas</td>
                                <td>Tengo que hacer la tarea de matemáticas.</td>
                            </tr>
                            <tr>
                                <td><strong>Hay que</strong></td>
                                <td>Reglas generales</td>
                                <td>Hay que llegar puntual a clase.</td>
                            </tr>
                            <tr>
                                <td><strong>Deber</strong></td>
                                <td>Responsabilidades éticas</td>
                                <td>Debes respetar a tus compañeros.</td>
                            </tr>
                            <tr>
                                <td><strong>Es necesario que</strong></td>
                                <td>Requisitos académicos</td>
                                <td>Es necesario que estudies para el examen.</td>
                            </tr>
                            <tr>
                                <td><strong>Es obligatorio que</strong></td>
                                <td>Normas de la institución</td>
                                <td>Es obligatorio que uses el uniforme.</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "2. Futuro simple",
                    content: `
                        <h2 class="doc-h2">El futuro de indicativo</h2>
                        
                        <h3 class="doc-h3">Formación regular:</h3>
                        <div class="callout important">
                            <strong>Fórmula:</strong> Infinitivo + terminaciones
                            <br><br>
                            <strong>Terminaciones para todos los verbos:</strong>
                            <br>• Yo: -é
                            <br>• Tú: -ás
                            <br>• Él/Ella/Usted: -á
                            <br>• Nosotros: -emos
                            <br>• Vosotros: -éis
                            <br>• Ellos/Ellas/Ustedes: -án
                            <br><br>
                            <strong>Ejemplos con verbos regulares:</strong>
                            <br>• Hablar → hablar<strong>é</strong>, hablar<strong>ás</strong>, hablar<strong>á</strong>, etc.
                            <br>• Comer → comer<strong>é</strong>, comer<strong>ás</strong>, comer<strong>á</strong>, etc.
                            <br>• Vivir → vivir<strong>é</strong>, vivir<strong>ás</strong>, vivir<strong>á</strong>, etc.
                        </div>
                        
                        <h3 class="doc-h3">Verbos irregulares:</h3>
                        
                        <h4 class="doc-h4">Irregularidades comunes:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Verbo</th>
                                <th>Cambio</th>
                                <th>Yo</th>
                                <th>Tú</th>
                                <th>Él/Ella</th>
                            </tr>
                            <tr>
                                <td><strong>Hacer</strong></td>
                                <td>har-</td>
                                <td>haré</td>
                                <td>harás</td>
                                <td>hará</td>
                            </tr>
                            <tr>
                                <td><strong>Decir</strong></td>
                                <td>dir-</td>
                                <td>diré</td>
                                <td>dirás</td>
                                <td>dirá</td>
                            </tr>
                            <tr>
                                <td><strong>Tener</strong></td>
                                <td>tendr-</td>
                                <td>tendré</td>
                                <td>tendrás</td>
                                <td>tendrá</td>
                            </tr>
                            <tr>
                                <td><strong>Poner</strong></td>
                                <td>pondr-</td>
                                <td>pondré</td>
                                <td>pondrás</td>
                                <td>pondrá</td>
                            </tr>
                            <tr>
                                <td><strong>Salir</strong></td>
                                <td>saldr-</td>
                                <td>saldré</td>
                                <td>saldrás</td>
                                <td>saldrá</td>
                            </tr>
                            <tr>
                                <td><strong>Venir</strong></td>
                                <td>vendr-</td>
                                <td>vendré</td>
                                <td>vendrás</td>
                                <td>vendrá</td>
                            </tr>
                            <tr>
                                <td><strong>Poder</strong></td>
                                <td>podr-</td>
                                <td>podré</td>
                                <td>podrás</td>
                                <td>podrá</td>
                            </tr>
                            <tr>
                                <td><strong>Saber</strong></td>
                                <td>sabr-</td>
                                <td>sabré</td>
                                <td>sabrás</td>
                                <td>sabrá</td>
                            </tr>
                            <tr>
                                <td><strong>Querer</strong></td>
                                <td>querr-</td>
                                <td>querré</td>
                                <td>querrás</td>
                                <td>querrá</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">Verbos con cambio de vocal:</h4>
                        <div class="callout info">
                            <strong>Ejemplos:</strong>
                            <br>• Caber → cabré, cabrás, cabrá...
                            <br>• Haber → habré, habrás, habrá... (auxiliar)
                            <br>• Satisfacer → satisfaré, satisfarás, satisfará...
                            <br><br>
                            <strong>Recordar:</strong> Los verbos que terminan en -ducir cambian a -duciré
                            <br>• Conducir → conduciré
                            <br>• Producir → produciré
                            <br>• Traducir → traduciré
                        </div>
                        
                        <h3 class="doc-h3">Usos del futuro simple:</h3>
                        
                        <h4 class="doc-h4">1. Acciones futuras:</h4>
                        <div class="callout important">
                            <strong>Ejemplos:</strong>
                            <br>• Mañana estudiaré español.
                            <br>• El próximo año viajaré a España.
                            <br>• La semana que viene tendremos un examen.
                            <br>• En el futuro, viviré en una casa grande.
                        </div>
                        
                        <h4 class="doc-h4">2. Suposiciones o probabilidades en el presente:</h4>
                        <div class="callout info">
                            <strong>Ejemplos:</strong>
                            <br>• ¿Dónde está Juan? - Estará en la biblioteca. (probablemente)
                            <br>• Tendrá unos 30 años. (supongo)
                            <br>• Serán las tres de la tarde. (creo)
                            <br>• ¿Quién llama? - Será mi madre. (probablemente)
                        </div>
                        
                        <h4 class="doc-h4">3. Mandatos suaves o consejos:</h4>
                        <ul class="doc-ul">
                            <li><strong>Ejemplos:</strong>
                                <br>• Harás la tarea ahora mismo. (mandato suave)
                                <br>• Estarás en casa a las diez. (orden)
                                <br>• No fumarás en este lugar. (prohibición)
                                <br>• Estudiarás para el examen. (consejo fuerte)</li>
                        </ul>
                        
                        <h4 class="doc-h4">4. Promesas o ofrecimientos:</h4>
                        <div class="callout important">
                            <strong>Ejemplos:</strong>
                            <br>• Te ayudaré con tu tarea.
                            <br>• Te llamaré esta noche.
                            <br>• Te compraré un regalo.
                            <br>• Te enseñaré español.
                        </div>
                        
                        <h3 class="doc-h3">Expresiones temporales con futuro:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Expresión</th>
                                <th>Significado</th>
                                <th>Ejemplo</th>
                            </tr>
                            <tr>
                                <td><strong>Mañana</strong></td>
                                <td>Tomorrow</td>
                                <td>Mañana iré al cine.</td>
                            </tr>
                            <tr>
                                <td><strong>La semana que viene</strong></td>
                                <td>Next week</td>
                                <td>La semana que viene viajaré.</td>
                            </tr>
                            <tr>
                                <td><strong>El próximo mes/año</strong></td>
                                <td>Next month/year</td>
                                <td>El próximo año estudiaré medicina.</td>
                            </tr>
                            <tr>
                                <td><strong>Dentro de (un tiempo)</strong></td>
                                <td>In (a period of time)</td>
                                <td>Dentro de dos horas llegaré.</td>
                            </tr>
                            <tr>
                                <td><strong>En el futuro</strong></td>
                                <td>In the future</td>
                                <td>En el futuro seré doctor.</td>
                            </tr>
                            <tr>
                                <td><strong>Algún día</strong></td>
                                <td>Someday</td>
                                <td>Algún día viajaré por el mundo.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Futuro compuesto (futuro perfecto):</h3>
                        <div class="callout info">
                            <strong>Formación:</strong> Haber (en futuro) + participio pasado
                            <br><strong>Conjugación de HABER:</strong> habré, habrás, habrá, habremos, habréis, habrán
                            <br><strong>Ejemplos:</strong>
                            <br>• Para mañana, ya habré terminado el trabajo.
                            <br>• Cuando llegues, ya habré comido.
                            <br>• El próximo año habré aprendido español.
                            <br>• Para las cinco, ya habrán salido.
                            <br><strong>Uso:</strong> Acción que estará completada en un momento futuro
                        </div>
                        
                        <h3 class="doc-h3">Ejercicios:</h3>
                        
                        <h4 class="doc-h4">Conjuga en futuro:</h4>
                        <div class="callout important">
                            1. Yo (estudiar) __________ medicina.
                            <br>→ Yo <strong>estudiaré</strong> medicina.
                            <br><br>
                            2. Tú (tener) __________ éxito.
                            <br>→ Tú <strong>tendrás</strong> éxito.
                            <br><br>
                            3. Ella (ser) __________ doctora.
                            <br>→ Ella <strong>será</strong> doctora.
                            <br><br>
                            4. Nosotros (viajar) __________ a España.
                            <br>→ Nosotros <strong>viajaremos</strong> a España.
                        </div>
                        
                        <h4 class="doc-h4">Traduce al español:</h4>
                        <div class="callout info">
                            1. I will study tomorrow.
                            <br>→ Estudiaré mañana.
                            <br><br>
                            2. You will have a house.
                            <br>→ Tendrás una casa.
                            <br><br>
                            3. She will be a teacher.
                            <br>→ Ella será profesora.
                            <br><br>
                            4. We will travel next year.
                            <br>→ Viajaremos el próximo año.
                        </div>
                    `
                },

                { header: true, title: "UNIDAD 3: SALUD Y MEDIO AMBIENTE" },
                {
                    title: "3. Subjuntivo presente",
                    content: `
                        <h2 class="doc-h2">El modo subjuntivo en español</h2>
                        
                        <h3 class="doc-h3">Formación regular:</h3>
                        
                        <h4 class="doc-h4">Regla general:</h4>
                        <div class="callout important">
                            <strong>1. Tomar el "yo" del presente de indicativo:</strong>
                            <br>• Hablo (indicativo) → hable (subjuntivo)
                            <br>• Como (indicativo) → coma (subjuntivo)
                            <br>• Vivo (indicativo) → viva (subjuntivo)
                            <br><br>
                            <strong>2. Cambiar las terminaciones:</strong>
                            <br>• Verbos -AR: e, es, e, emos, éis, en
                            <br>• Verbos -ER/-IR: a, as, a, amos, áis, an
                            <br><br>
                            <strong>Ejemplos completos:</strong>
                            <br>• Hablar: hable, hables, hable, hablemos, habléis, hablen
                            <br>• Comer: coma, comas, coma, comamos, comáis, coman
                            <br>• Vivir: viva, vivas, viva, vivamos, viváis, vivan
                        </div>
                        
                        <h4 class="doc-h4">Verbos con cambios ortográficos:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Verbo</th>
                                <th>Cambio</th>
                                <th>Yo (subjuntivo)</th>
                                <th>Ejemplo</th>
                            </tr>
                            <tr>
                                <td><strong>Buscar</strong></td>
                                <td>c → qu</td>
                                <td>busque</td>
                                <td>Espero que busques trabajo.</td>
                            </tr>
                            <tr>
                                <td><strong>Llegar</strong></td>
                                <td>g → gu</td>
                                <td>llegue</td>
                                <td>Quiero que llegues temprano.</td>
                            </tr>
                            <tr>
                                <td><strong>Empezar</strong></td>
                                <td>z → c</td>
                                <td>empiece</td>
                                <td>Espero que empieces pronto.</td>
                            </tr>
                            <tr>
                                <td><strong>Proteger</strong></td>
                                <td>g → j</td>
                                <td>proteja</td>
                                <td>Es necesario que protejas el medio ambiente.</td>
                            </tr>
                            <tr>
                                <td><strong>Dirigir</strong></td>
                                <td>g → j</td>
                                <td>dirija</td>
                                <td>Quiero que dirijas el proyecto.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Verbos irregulares importantes:</h3>
                        <div class="callout info">
                            <strong>Ser:</strong> sea, seas, sea, seamos, seáis, sean
                            <br><em>Ejemplo:</strong> Es importante que seas honesto.
                            <br><br>
                            <strong>Estar:</strong> esté, estés, esté, estemos, estéis, estén
                            <br><em>Ejemplo:</strong> Espero que estés bien.
                            <br><br>
                            <strong>Ir:</strong> vaya, vayas, vaya, vayamos, vayáis, vayan
                            <br><em>Ejemplo:</strong> Quiero que vayas al médico.
                            <br><br>
                            <strong>Saber:</strong> sepa, sepas, sepa, sepamos, sepáis, sepan
                            <br><em>Ejemplo:</strong> Es bueno que sepas la verdad.
                            <br><br>
                            <strong>Dar:</strong> dé, des, dé, demos, deis, den
                            <br><em>Ejemplo:</strong> Espero que me des tu opinión.
                        </div>
                        
                        <h3 class="doc-h3">Usos principales del subjuntivo:</h3>
                        
                        <h4 class="doc-h4">1. Deseos y voluntad:</h4>
                        <ul class="doc-ul">
                            <li><strong>Querer que:</strong> Quiero que estudies.</li>
                            <li><strong>Desear que:</strong> Deseo que tengas éxito.</li>
                            <li><strong>Esperar que:</strong> Espero que vengas.</li>
                            <li><strong>Preferir que:</strong> Prefiero que lo hagas tú.</li>
                            <li><strong>Necesitar que:</strong> Necesito que me ayudes.</li>
                        </ul>
                        
                        <h4 class="doc-h4">2. Emociones y sentimientos:</h4>
                        <div class="callout important">
                            <strong>Alegrarse de que:</strong> Me alegro de que estés aquí.
                            <br><strong>Sentir que:</strong> Siento que estés enfermo.
                            <br><strong>Temer que:</strong> Temo que llueva.
                            <br><strong>Esperar que:</strong> Espero que todo salga bien.
                            <br><strong>Gustar que:</strong> Me gusta que seas puntual.
                            <br><strong>Molestar que:</strong> Me molesta que llegues tarde.
                        </div>
                        
                        <h4 class="doc-h4">3. Expresiones impersonales:</h4>
                        <div class="callout info">
                            <strong>Es necesario que:</strong> Es necesario que estudies.
                            <br><strong>Es importante que:</strong> Es importante que practiques.
                            <br><strong>Es bueno que:</strong> Es bueno que descanses.
                            <br><strong>Es posible que:</strong> Es posible que venga.
                            <br><strong>Es probable que:</strong> Es probable que llueva.
                            <br><strong>Es dudoso que:</strong> Es dudoso que gane.
                            <br><strong>Es imposible que:</strong> Es imposible que lo sepa.
                        </div>
                        
                        <h4 class="doc-h4">4. Conjunciones:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Conjunción</th>
                                <th>Uso</th>
                                <th>Ejemplo</th>
                            </tr>
                            <tr>
                                <td><strong>Para que</strong></td>
                                <td>Finalidad</td>
                                <td>Estudio para que aprendas.</td>
                            </tr>
                            <tr>
                                <td><strong>Aunque</strong></td>
                                <td>Concesión</td>
                                <td>Aunque llueva, iré.</td>
                            </tr>
                            <tr>
                                <td><strong>Antes de que</strong></td>
                                <td>Tiempo anterior</td>
                                <td>Ven antes de que anochezca.</td>
                            </tr>
                            <tr>
                                <td><strong>Sin que</strong></td>
                                <td>Falta de causa</td>
                                <td>Lo hizo sin que yo supiera.</td>
                            </tr>
                            <tr>
                                <td><strong>A menos que</strong></td>
                                <td>Condición negativa</td>
                                <td>Iremos a menos que llueva.</td>
                            </tr>
                            <tr>
                                <td><strong>Con tal de que</strong></td>
                                <td>Condición</td>
                                <td>Te ayudo con tal de que estudies.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Cuando NO usar subjuntivo:</h3>
                        <div class="callout important">
                            <strong>1. Con certeza:</strong>
                            <br>• Es cierto que viene. (indicativo)
                            <br>• Es seguro que gana. (indicativo)
                            <br><br>
                            <strong>2. Con hechos:</strong>
                            <br>• Es verdad que estudia. (indicativo)
                            <br>• Es un hecho que existe. (indicativo)
                            <br><br>
                            <strong>3. Con conocimiento:</strong>
                            <br>• Sé que trabajas duro. (indicativo)
                            <br>• Creo que tienes razón. (indicativo)
                            <br><br>
                            <strong>4. Con percepciones:</strong>
                            <br>• Veo que estás cansado. (indicativo)
                            <br>• Oigo que cantas bien. (indicativo)
                        </div>
                        
                        <h3 class="doc-h3">En el ámbito de la salud y medio ambiente:</h3>
                        <div class="callout info">
                            <strong>Salud:</strong>
                            <br>• Es importante que <strong>comas</strong> saludable.
                            <br>• El médico recomienda que <strong>descanses</strong>.
                            <br>• Es necesario que <strong>hagas</strong> ejercicio.
                            <br>• Quiero que <strong>dejes</strong> de fumar.
                            <br><br>
                            <strong>Medio ambiente:</strong>
                            <br>• Es urgente que <strong>protejamos</strong> la naturaleza.
                            <br>• Es importante que <strong>recicles</strong>.
                            <br>• Debemos evitar que <strong>contamines</strong>.
                            <br>• Es necesario que <strong>ahorremos</strong> agua.
                        </div>
                    `
                },
                {
                    title: "4. Imperativo",
                    content: `
                        <h2 class="doc-h2">Dar órdenes, consejos y hacer peticiones</h2>
                        
                        <h3 class="doc-h3">Formas afirmativas:</h3>
                        
                        <h4 class="doc-h4">TÚ (afirmativo):</h4>
                        <div class="callout important">
                            <strong>Regla:</strong> 3ª persona del singular del presente de indicativo
                            <br><strong>Ejemplos:</strong>
                            <br>• Hablar → habla
                            <br>• Comer → come
                            <br>• Vivir → vive
                            <br>• Escribir → escribe
                            <br>• Estudiar → estudia
                            <br><br>
                            <strong>Irregulares comunes:</strong>
                            <br>• Ser → sé
                            <br>• Ir → ve
                            <br>• Tener → ten
                            <br>• Venir → ven
                            <br>• Hacer → haz
                            <br>• Decir → di
                            <br>• Salir → sal
                            <br>• Poner → pon
                        </div>
                        
                        <h4 class="doc-h4">USTED (afirmativo):</h4>
                        <div class="callout info">
                            <strong>Regla:</strong> 3ª persona del singular del presente de subjuntivo
                            <br><strong>Ejemplos:</strong>
                            <br>• Hablar → hable
                            <br>• Comer → coma
                            <br>• Vivir → viva
                            <br>• Estudiar → estudie
                            <br><br>
                            <strong>Irregulares:</strong>
                            <br>• Ser → sea
                            <br>• Ir → vaya
                            <br>• Saber → sepa
                            <br>• Estar → esté
                            <br>• Dar → dé
                        </div>
                        
                        <h4 class="doc-h4">VOSOTROS (afirmativo):</h4>
                        <ul class="doc-ul">
                            <li><strong>Regla:</strong> Reemplazar -r del infinitivo por -d
                                <br>• Hablar → hablad
                                <br>• Comer → comed
                                <br>• Vivir → vivid
                                <br>• Estudiar → estudiad</li>
                            <li><strong>Irregular:</strong> Ir → id</li>
                        </ul>
                        
                        <h3 class="doc-h3">Formas negativas:</h3>
                        <div class="callout important">
                            <strong>Regla general:</strong> No + presente de subjuntivo
                            <br><strong>Ejemplos:</strong>
                            <br>• Tú: No hables, no comas, no vivas
                            <br>• Usted: No hable, no coma, no viva
                            <br>• Nosotros: No hablemos, no comamos, no vivamos
                            <br>• Vosotros: No habléis, no comáis, no viváis
                            <br>• Ustedes: No hablen, no coman, no vivan
                            <br><br>
                            <strong>Recordar:</strong> Para "tú" negativo, siempre subjuntivo
                        </div>
                        
                        <h3 class="doc-h3">Tabla completa del imperativo:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Persona</th>
                                <th>Hablar (afirmativo)</th>
                                <th>Hablar (negativo)</th>
                                <th>Comer (afirmativo)</th>
                                <th>Comer (negativo)</th>
                            </tr>
                            <tr>
                                <td><strong>Tú</strong></td>
                                <td>habla</td>
                                <td>no hables</td>
                                <td>come</td>
                                <td>no comas</td>
                            </tr>
                            <tr>
                                <td><strong>Usted</strong></td>
                                <td>hable</td>
                                <td>no hable</td>
                                <td>coma</td>
                                <td>no coma</td>
                            </tr>
                            <tr>
                                <td><strong>Nosotros</strong></td>
                                <td>hablemos</td>
                                <td>no hablemos</td>
                                <td>comamos</td>
                                <td>no comamos</td>
                            </tr>
                            <tr>
                                <td><strong>Vosotros</strong></td>
                                <td>hablad</td>
                                <td>no habléis</td>
                                <td>comed</td>
                                <td>no comáis</td>
                            </tr>
                            <tr>
                                <td><strong>Ustedes</strong></td>
                                <td>hablen</td>
                                <td>no hablen</td>
                                <td>coman</td>
                                <td>no coman</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Pronombres con el imperativo:</h3>
                        
                        <h4 class="doc-h4">Afirmativo:</h4>
                        <div class="callout info">
                            <strong>Pronombre se une al final del verbo:</strong>
                            <br>• Hazlo (do it)
                            <br>• Dímelo (tell me)
                            <br>• Cómpralo (buy it)
                            <br>• Estúdiala (study it)
                            <br><br>
                            <strong>Con acento:</strong> Si se añaden dos pronombres
                            <br>• Dámelo → dá<strong>me</strong>lo
                            <br>• Cómpramelo → cómpra<strong>me</strong>lo
                            <br>• Explícaselo → explí<strong>ca</strong>selo
                        </div>
                        
                        <h4 class="doc-h4">Negativo:</h4>
                        <div class="callout important">
                            <strong>Pronombre va antes del verbo:</strong>
                            <br>• No lo hagas (don't do it)
                            <br>• No me lo digas (don't tell me)
                            <br>• No lo compres (don't buy it)
                            <br>• No la estudies (don't study it)
                            <br><br>
                            <strong>Ejemplos comparativos:</strong>
                            <br>• Afirmativo: Hazlo ahora.
                            <br>• Negativo: No lo hagas ahora.
                            <br>• Afirmativo: Dímelo.
                            <br>• Negativo: No me lo digas.
                        </div>
                        
                        <h3 class="doc-h3">Usos del imperativo:</h3>
                        
                        <h4 class="doc-h4">1. Dar órdenes directas:</h4>
                        <ul class="doc-ul">
                            <li><strong>¡Cierra la puerta!</strong></li>
                            <li><strong>¡Ven aquí inmediatamente!</strong></li>
                            <li><strong>¡Termina tu trabajo!</strong></li>
                            <li><strong>¡No hables en clase!</strong></li>
                        </ul>
                        
                        <h4 class="doc-h4">2. Dar consejos o sugerencias:</h4>
                        <div class="callout info">
                            <strong>Ejemplos:</strong>
                            <br>• Come más frutas y verduras.
                            <br>• Haz ejercicio regularmente.
                            <br>• Descansa lo suficiente.
                            <br>• No fumes, es malo para la salud.
                            <br>• Bebe mucha agua.
                        </div>
                        
                        <h4 class="doc-h4">3. Hacer peticiones educadas:</h4>
                        <div class="callout important">
                            <strong>Con "por favor":</strong>
                            <br>• Por favor, ayúdame.
                            <br>• Por favor, pasa la sal.
                            <br>• Por favor, siéntate.
                            <br>• Por favor, no hagas ruido.
                            <br><br>
                            <strong>Con "usted" (más formal):</strong>
                            <br>• Siéntese, por favor.
                            <br>• Espere un momento, por favor.
                            <br>• Firme aquí, por favor.
                        </div>
                        
                        <h4 class="doc-h4">4. Dar instrucciones:</h4>
                        <ul class="doc-ul">
                            <li><strong>Primero, abre el libro.</strong></li>
                            <li><strong>Luego, lee el texto.</strong></li>
                            <li><strong>Después, contesta las preguntas.</strong></li>
                            <li><strong>Finalmente, revisa tus respuestas.</strong></li>
                        </ul>
                        
                        <h3 class="doc-h3">Expresiones útiles con imperativo:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Expresión</th>
                                <th>Significado</th>
                                <th>Ejemplo</th>
                            </tr>
                            <tr>
                                <td><strong>Ten cuidado</strong></td>
                                <td>Be careful</td>
                                <td>Ten cuidado al cruzar la calle.</td>
                            </tr>
                            <tr>
                                <td><strong>No te preocupes</strong></td>
                                <td>Don't worry</td>
                                <td>No te preocupes, todo saldrá bien.</td>
                            </tr>
                            <tr>
                                <td><strong>Diviértete</strong></td>
                                <td>Have fun</td>
                                <td>Diviértete en la fiesta.</td>
                            </tr>
                            <tr>
                                <td><strong>Buena suerte</strong></td>
                                <td>Good luck</td>
                                <td>Buena suerte en el examen.</td>
                            </tr>
                            <tr>
                                <td><strong>Cuídate</strong></td>
                                <td>Take care</td>
                                <td>Cuídate mucho.</td>
                            </tr>
                            <tr>
                                <td><strong>Que te mejores</strong></td>
                                <td>Get well soon</td>
                                <td>Que te mejores pronto.</td>
                            </tr>
                        </table>
                    `
                }
            ],

            3: [
                { header: true, title: "UNIDAD 4: LOS PASADOS" },
                {
                    title: "1. Pretérito indefinido",
                    content: `
                        <h2 class="doc-h2">El pasado simple o pretérito perfecto simple</h2>
                        
                        <h3 class="doc-h3">Formación regular:</h3>
                        
                        <h4 class="doc-h4">Terminaciones -AR:</h4>
                        <div class="callout important">
                            <strong>Terminaciones:</strong> -é, -aste, -ó, -amos, -asteis, -aron
                            <br><strong>Ejemplo: HABLAR</strong>
                            <br>• Yo hablé
                            <br>• Tú hablaste
                            <br>• Él/Ella/Usted habló
                            <br>• Nosotros hablamos
                            <br>• Vosotros hablasteis
                            <br>• Ellos/Ellas/Ustedes hablaron
                            <br><strong>Otros:</strong> Estudiar → estudié, estudiaste, estudió...
                        </div>
                        
                        <h4 class="doc-h4">Terminaciones -ER/-IR:</h4>
                        <div class="callout info">
                            <strong>Terminaciones:</strong> -í, -iste, -ió, -imos, -isteis, -ieron
                            <br><strong>Ejemplo: COMER</strong>
                            <br>• Yo comí
                            <br>• Tú comiste
                            <br>• Él/Ella/Usted comió
                            <br>• Nosotros comimos
                            <br>• Vosotros comisteis
                            <br>• Ellos/Ellas/Ustedes comieron
                            <br><strong>Ejemplo: VIVIR</strong>
                            <br>• Yo viví
                            <br>• Tú viviste
                            <br>• Él/Ella/Usted vivió
                            <br>• Nosotros vivimos
                            <br>• Vosotros vivisteis
                            <br>• Ellos/Ellas/Ustedes vivieron
                        </div>
                        
                        <h3 class="doc-h3">Verbos irregulares importantes:</h3>
                        
                        <h4 class="doc-h4">Cambios radicales:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>Verbo</th>
                                <th>Yo</th>
                                <th>Tú</th>
                                <th>Él/Ella</th>
                                <th>Nosotros</th>
                                <th>Ellos</th>
                            </tr>
                            <tr>
                                <td><strong>Estar</strong></td>
                                <td>estuve</td>
                                <td>estuviste</td>
                                <td>estuvo</td>
                                <td>estuvimos</td>
                                <td>estuvieron</td>
                            </tr>
                            <tr>
                                <td><strong>Tener</strong></td>
                                <td>tuve</td>
                                <td>tuviste</td>
                                <td>tuvo</td>
                                <td>tuvimos</td>
                                <td>tuvieron</td>
                            </tr>
                            <tr>
                                <td><strong>Hacer</strong></td>
                                <td>hice</td>
                                <td>hiciste</td>
                                <td>hizo</td>
                                <td>hicimos</td>
                                <td>hicieron</td>
                            </tr>
                            <tr>
                                <td><strong>Poner</strong></td>
                                <td>puse</td>
                                <td>pusiste</td>
                                <td>puso</td>
                                <td>pusimos</td>
                                <td>pusieron</td>
                            </tr>
                            <tr>
                                <td><strong>Saber</strong></td>
                                <td>supe</td>
                                <td>supiste</td>
                                <td>supo</td>
                                <td>supimos</td>
                                <td>supieron</td>
                            </tr>
                            <tr>
                                <td><strong>Querer</strong></td>
                                <td>quise</td>
                                <td>quisiste</td>
                                <td>quiso</td>
                                <td>quisimos</td>
                                <td>quisieron</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">Verbos muy irregulares:</h4>
                        <div class="callout important">
                            <strong>Ser/Ir:</strong> fui, fuiste, fue, fuimos, fuisteis, fueron
                            <br><em>Importante:</em> Misma conjugación para ambos verbos
                            <br>• Ayer <strong>fui</strong> al cine. (ir)
                            <br>• Él <strong>fue</strong> un gran hombre. (ser)
                            <br><br>
                            <strong>Dar:</strong> di, diste, dio, dimos, disteis, dieron
                            <br><strong>Ver:</strong> vi, viste, vio, vimos, visteis, vieron
                            <br><br>
                            <strong>Venir:</strong> vine, viniste, vino, vinimos, vinisteis, vinieron
                            <br><strong>Decir:</strong> dije, dijiste, dijo, dijimos, dijisteis, dijeron
                        </div>
                        
                        <h3 class="doc-h3">Usos del pretérito indefinido:</h3>
                        
                        <h4 class="doc-h4">1. Acciones completadas en el pasado:</h4>
                        <div class="callout info">
                            <strong>Ejemplos:</strong>
                            <br>• Ayer estudié español.
                            <br>• El año pasado viajé a España.
                            <br>• La semana pasada compré un libro.
                            <br>• Anoche vi una película.
                            <br><br>
                            <strong>Marcadores temporales:</strong>
                            <br>• Ayer
                            <br>• La semana pasada
                            <br>• El mes pasado
                            <br>• El año pasado
                            <br>• Hace dos días
                            <br>• Anoche
                            <br>• En 2010
                        </div>
                        
                        <h4 class="doc-h4">2. Acciones que interrumpen una acción en curso:</h4>
                        <ul class="doc-ul">
                            <li><strong>Ejemplo:</strong> Mientras yo estudiaba, el teléfono sonó.</li>
                            <li><strong>Estructura:</strong> Imperfecto (acción larga) + indefinido (acción breve)</li>
                        </ul>
                        
                        <h4 class="doc-h4">3. Secuencia de acciones en el pasado:</h4>
                        <div class="callout important">
                            <strong>Ejemplos:</strong>
                            <br>• Me levanté, me vestí y salí de casa.
                            <br>• Llegué a la escuela, abrí mi mochila y empecé a estudiar.
                            <br>• Entró en la habitación, miró alrededor y se sentó.
                            <br><br>
                            <strong>Conectores:</strong>
                            <br>• Primero... luego... después... finalmente...
                            <br>• Entonces... más tarde... al final...
                        </div>
                        
                        <h3 class="doc-h3">Contraste con el imperfecto:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Aspecto</th>
                                <th>Pretérito Indefinido</th>
                                <th>Pretérito Imperfecto</th>
                            </tr>
                            <tr>
                                <td><strong>Naturaleza</strong></td>
                                <td>Acciones completas</td>
                                <td>Acciones incompletas</td>
                            </tr>
                            <tr>
                                <td><strong>Duración</strong></td>
                                <td>Acciones breves</td>
                                <td>Acciones largas</td>
                            </tr>
                            <tr>
                                <td><strong>Repetición</strong></td>
                                <td>Acciones únicas</td>
                                <td>Acciones habituales</td>
                            </tr>
                            <tr>
                                <td><strong>Interrupción</strong></td>
                                <td>Acción que interrumpe</td>
                                <td>Acción interrumpida</td>
                            </tr>
                            <tr>
                                <td><strong>Descripción</strong></td>
                                <td>No</td>
                                <td>Sí</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Ejemplos contrastivos:</h3>
                        <div class="callout info">
                            <strong>1. Ayer estudié (indefinido) vs Yo estudiaba todos los días (imperfecto)</strong>
                            <br><br>
                            <strong>2. Cuando era niño (imperfecto), jugaba (imperfecto) al fútbol. Ayer jugué (indefinido) un partido.</strong>
                            <br><br>
                            <strong>3. Mientras yo leía (imperfecto), sonó (indefinido) el teléfono.</strong>
                            <br><br>
                            <strong>4. Él tenía (imperfecto) 20 años cuando se graduó (indefinido).</strong>
                        </div>
                    `
                },
                {
                    title: "2. Pretérito imperfecto",
                    content: `
                        <h2 class="doc-h2">El pasado descriptivo y habitual</h2>
                        
                        <h3 class="doc-h3">Formación regular:</h3>
                        
                        <h4 class="doc-h4">Terminaciones -AR:</h4>
                        <div class="callout important">
                            <strong>Terminaciones:</strong> -aba, -abas, -aba, -ábamos, -abais, -aban
                            <br><strong>Ejemplo: HABLAR</strong>
                            <br>• Yo hablaba
                            <br>• Tú hablabas
                            <br>• Él/Ella/Usted hablaba
                            <br>• Nosotros hablábamos
                            <br>• Vosotros hablabais
                            <br>• Ellos/Ellas/Ustedes hablaban
                            <br><strong>Otros:</strong> Estudiar → estudiaba, estudiabas, estudiaba...
                        </div>
                        
                        <h4 class="doc-h4">Terminaciones -ER/-IR:</h4>
                        <div class="callout info">
                            <strong>Terminaciones:</strong> -ía, -ías, -ía, -íamos, -íais, -ían
                            <br><strong>Ejemplo: COMER</strong>
                            <br>• Yo comía
                            <br>• Tú comías
                            <br>• Él/Ella/Usted comía
                            <br>• Nosotros comíamos
                            <br>• Vosotros comíais
                            <br>• Ellos/Ellas/Ustedes comían
                            <br><strong>Ejemplo: VIVIR</strong>
                            <br>• Yo vivía
                            <br>• Tú vivías
                            <br>• Él/Ella/Usted vivía
                            <br>• Nosotros vivíamos
                            <br>• Vosotros vivíais
                            <br>• Ellos/Ellas/Ustedes vivían
                        </div>
                        
                        <h3 class="doc-h3">Verbos irregulares:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Verbo</th>
                                <th>Yo</th>
                                <th>Tú</th>
                                <th>Él/Ella</th>
                                <th>Nosotros</th>
                                <th>Ellos</th>
                            </tr>
                            <tr>
                                <td><strong>Ser</strong></td>
                                <td>era</td>
                                <td>eras</td>
                                <td>era</td>
                                <td>éramos</td>
                                <td>eran</td>
                            </tr>
                            <tr>
                                <td><strong>Ir</strong></td>
                                <td>iba</td>
                                <td>ibas</td>
                                <td>iba</td>
                                <td>íbamos</td>
                                <td>iban</td>
                            </tr>
                            <tr>
                                <td><strong>Ver</strong></td>
                                <td>veía</td>
                                <td>veías</td>
                                <td>veía</td>
                                <td>veíamos</td>
                                <td>veían</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Usos del pretérito imperfecto:</h3>
                        
                        <h4 class="doc-h4">1. Descripciones en el pasado:</h4>
                        <div class="callout important">
                            <strong>Ejemplos:</strong>
                            <br>• El cielo era azul.
                            <br>• La casa era grande y blanca.
                            <br>• Mi abuela tenía el pelo gris.
                            <br>• Hacía buen tiempo.
                            <br>• Ella era muy inteligente.
                            <br><br>
                            <strong>Para describir:</strong>
                            <br>• Personas (apariencia, personalidad)
                            <br>• Lugares (características)
                            <br>• Estados físicos y emocionales
                            <br>• Tiempo atmosférico
                        </div>
                        
                        <h4 class="doc-h4">2. Hábitos y acciones repetidas:</h4>
                        <div class="callout info">
                            <strong>Ejemplos:</strong>
                            <br>• Cuando era niño, jugaba al fútbol todos los días.
                            <br>• Siempre comíamos a las dos de la tarde.
                            <br>• Todos los veranos íbamos a la playa.
                            <br>• Normalmente estudiaba por las tardes.
                            <br><br>
                            <strong>Expresiones de frecuencia:</strong>
                            <br>• Siempre
                            <br>• Nunca
                            <br>• A menudo
                            <br>• Muchas veces
                            <br>• Todos los días
                            <br>• Cada semana
                        </div>
                        
                        <h4 class="doc-h4">3. Acciones simultáneas:</h4>
                        <ul class="doc-ul">
                            <li><strong>Ejemplos:</strong>
                                <br>• Mientras yo cocinaba, mi hermana limpiaba.
                                <br>• Él leía el periódico y ella veía la televisión.
                                <br>• Los niños jugaban y las madres charlaban.</li>
                            <li><strong>Conectores:</strong> Mientras, cuando, al mismo tiempo</li>
                        </ul>
                        
                        <h4 class="doc-h4">4. Hora y edad en el pasado:</h4>
                        <div class="callout important">
                            <strong>Ejemplos:</strong>
                            <br>• Eran las tres de la tarde.
                            <br>• Cuando ocurrió el accidente, era de noche.
                            <br>• Tenía 10 años cuando aprendí a nadar.
                            <br>• Mi hermano tenía 15 años en ese tiempo.
                            <br><br>
                            <strong>Verbos comunes:</strong>
                            <br>• Ser (para la hora)
                            <br>• Tener (para la edad)
                        </div>
                        
                        <h3 class="doc-h3">El imperfecto en la narración:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Función</th>
                                <th>Ejemplo</th>
                                <th>Explicación</th>
                            </tr>
                            <tr>
                                <td><strong>Establecer escenario</strong></td>
                                <td>Era una noche oscura y tormentosa.</td>
                                <td>Crea la atmósfera inicial</td>
                            </tr>
                            <tr>
                                <td><strong>Describir personajes</strong></td>
                                <td>Juan era alto y delgado.</td>
                                <td>Presenta características</td>
                            </tr>
                            <tr>
                                <td><strong>Acciones de fondo</strong></td>
                                <td>La gente paseaba por el parque.</td>
                                <td>Acciones simultáneas</td>
                            </tr>
                            <tr>
                                <td><strong>Hábitos</strong></td>
                                <td>Todos los días visitaba a su abuela.</td>
                                <td>Rutinas del personaje</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Contraste con otros tiempos:</h3>
                        <div class="callout info">
                            <strong>Imperfecto vs Indefinido:</strong>
                            <br>• <strong>Imperfecto:</strong> Yo vivía en Madrid (durante un tiempo)
                            <br>• <strong>Indefinido:</strong> Yo viví en Madrid (acción terminada)
                            <br><br>
                            <strong>Imperfecto vs Pretérito Perfecto:</strong>
                            <br>• <strong>Imperfecto:</strong> Cuando era niño (periodo pasado)
                            <br>• <strong>Pretérito Perfecto:</strong> Esta mañana (reciente)
                            <br><br>
                            <strong>Uso conjunto:</strong>
                            <br>• Cuando <strong>era</strong> joven (imperfecto), <strong>viajé</strong> a muchos países (indefinido).
                            <br>• Mientras él <strong>estudiaba</strong> (imperfecto), yo <strong>limpié</strong> la casa (indefinido).
                        </div>
                        
                        <h3 class="doc-h3">Expresiones temporales comunes:</h3>
                        <div class="callout important">
                            <strong>Para el imperfecto:</strong>
                            <br>• Cuando era niño/joven
                            <br>• En aquel tiempo/entonces
                            <br>• Antes
                            <br>• Siempre
                            <br>• Normalmente
                            <br>• Cada día/semana/año
                            <br>• Mientras
                            <br><br>
                            <strong>Para el indefinido:</strong>
                            <br>• Ayer
                            <br>• La semana pasada
                            <br>• El año pasado
                            <br>• Hace un rato/dos días
                            <br>• De repente
                            <br>• Entonces (en ese momento)
                        </div>
                    `
                },
                {
                    title: "3. Pretérito perfecto",
                    content: `
                        <h2 class="doc-h2">El pasado reciente o conectado con el presente</h2>
                        
                        <h3 class="doc-h3">Formación:</h3>
                        <div class="callout important">
                            <strong>Fórmula:</strong> HABER (presente) + Participio pasado
                            <br><br>
                            <strong>Conjugación de HABER:</strong>
                            <br>• Yo he
                            <br>• Tú has
                            <br>• Él/Ella/Usted ha
                            <br>• Nosotros hemos
                            <br>• Vosotros habéis
                            <br>• Ellos/Ellas/Ustedes han
                            <br><br>
                            <strong>Formación del participio:</strong>
                            <br>• Verbos -AR: -ado (hablar → hablado)
                            <br>• Verbos -ER/-IR: -ido (comer → comido, vivir → vivido)
                        </div>
                        
                        <h3 class="doc-h3">Ejemplos completos:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Verbo</th>
                                <th>Yo</th>
                                <th>Tú</th>
                                <th>Él/Ella</th>
                                <th>Nosotros</th>
                                <th>Ellos</th>
                            </tr>
                            <tr>
                                <td><strong>Hablar</strong></td>
                                <td>he hablado</td>
                                <td>has hablado</td>
                                <td>ha hablado</td>
                                <td>hemos hablado</td>
                                <td>han hablado</td>
                            </tr>
                            <tr>
                                <td><strong>Comer</strong></td>
                                <td>he comido</td>
                                <td>has comido</td>
                                <td>ha comido</td>
                                <td>hemos comido</td>
                                <td>han comido</td>
                            </tr>
                            <tr>
                                <td><strong>Vivir</strong></td>
                                <td>he vivido</td>
                                <td>has vivido</td>
                                <td>ha vivido</td>
                                <td>hemos vivido</td>
                                <td>han vivido</td>
                            </tr>
                            <tr>
                                <td><strong>Estudiar</strong></td>
                                <td>he estudiado</td>
                                <td>has estudiado</td>
                                <td>ha estudiado</td>
                                <td>hemos estudiado</td>
                                <td>han estudiado</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Participios irregulares:</h3>
                        
                        <h4 class="doc-h4">Cambios vocálicos:</h4>
                        <div class="callout info">
                            <strong>E → I:</strong>
                            <br>• Pedir → pedido
                            <br>• Servir → servido
                            <br>• Vestir → vestido
                            <br>• Repetir → repetido
                            <br><br>
                            <strong>O → U:</strong>
                            <br>• Dormir → dormido
                            <br>• Morir → muerto (irregular)
                        </div>
                        
                        <h4 class="doc-h4">Participios completamente irregulares:</h4>
                        <div class="callout important">
                            <strong>Verbos importantes:</strong>
                            <br>• Abrir → abierto
                            <br>• Cubrir → cubierto
                            <br>• Decir → dicho
                            <br>• Escribir → escrito
                            <br>• Hacer → hecho
                            <br>• Ir → ido
                            <br>• Morir → muerto
                            <br>• Poner → puesto
                            <br>• Resolver → resuelto
                            <br>• Romper → roto
                            <br>• Ser → sido
                            <br>• Ver → visto
                            <br>• Volver → vuelto
                        </div>
                        
                        <h3 class="doc-h3">Usos del pretérito perfecto:</h3>
                        
                        <h4 class="doc-h4">1. Acciones recientes:</h4>
                        <ul class="doc-ul">
                            <li><strong>Ejemplos:</strong>
                                <br>• Acabo de llegar.
                                <br>• He terminado mi trabajo hace cinco minutos.
                                <br>• ¿Has comido ya?
                                <br>• Han salido hace un momento.</li>
                            <li><strong>Expresiones:</strong> Acabar de, recién, justo ahora</li>
                        </ul>
                        
                        <h4 class="doc-h4">2. Acciones con conexión con el presente:</h4>
                        <div class="callout info">
                            <strong>Ejemplos:</strong>
                            <br>• He vivido aquí toda mi vida. (y sigo viviendo)
                            <br>• Nunca he viajado a España. (hasta ahora)
                            <br>• ¿Has estado alguna vez en París? (en tu vida)
                            <br>• Siempre he querido aprender japonés. (y aún quiero)
                            <br><br>
                            <strong>Conectado al presente:</strong>
                            <br>• Experiencias de vida
                            <br>• Cambios recientes
                            <br>• Resultados visibles ahora
                        </div>
                        
                        <h4 class="doc-h4">3. Acciones en periodos de tiempo no terminados:</h4>
                        <div class="callout important">
                            <strong>Ejemplos:</strong>
                            <br>• Esta semana he trabajado mucho.
                            <br>• Hoy he estudiado cinco horas.
                            <br>• Este mes he leído tres libros.
                            <br>• Este año he viajado a dos países.
                            <br><br>
                            <strong>Periodos no terminados:</strong>
                            <br>• Hoy
                            <br>• Esta mañana/tarde
                            <br>• Esta semana
                            <br>• Este mes/año
                            <br>• Hasta ahora
                        </div>
                        
                        <h4 class="doc-h4">4. Acciones repetidas hasta el momento actual:</h4>
                        <ul class="doc-ul">
                            <li><strong>Ejemplos:</strong>
                                <br>• He visto esa película tres veces.
                                <br>• He estado en ese restaurante varias veces.
                                <br>• Le he dicho mil veces que no haga eso.
                                <br>• Ha llovido mucho este invierno.</li>
                        </ul>
                        
                        <h3 class="doc-h3">Marcadores temporales:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>Marcador</th>
                                <th>Significado</th>
                                <th>Ejemplo</th>
                            </tr>
                            <tr>
                                <td><strong>Hoy</strong></td>
                                <td>Today</td>
                                <td>Hoy he estudiado mucho.</td>
                            </tr>
                            <tr>
                                <td><strong>Esta semana</strong></td>
                                <td>This week</td>
                                <td>Esta semana he trabajado duro.</td>
                            </tr>
                            <tr>
                                <td><strong>Este mes/año</strong></td>
                                <td>This month/year</td>
                                <td>Este año he aprendido mucho.</td>
                            </tr>
                            <tr>
                                <td><strong>Últimamente</strong></td>
                                <td>Lately</td>
                                <td>Últimamente he estado ocupado.</td>
                            </tr>
                            <tr>
                                <td><strong>Hasta ahora</strong></td>
                                <td>Until now</td>
                                <td>Hasta ahora no he tenido problemas.</td>
                            </tr>
                            <tr>
                                <td><strong>Nunca</strong></td>
                                <td>Never</td>
                                <td>Nunca he estado en China.</td>
                            </tr>
                            <tr>
                                <td><strong>Ya</strong></td>
                                <td>Already</td>
                                <td>Ya he terminado.</td>
                            </tr>
                            <tr>
                                <td><strong>Todavía no</strong></td>
                                <td>Not yet</td>
                                <td>Todavía no he comido.</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">Contraste con otros tiempos pasados:</h3>
                        
                        <h4 class="doc-h4">Pretérito Perfecto vs Indefinido:</h4>
                        <div class="callout info">
                            <strong>Pretérito Perfecto:</strong> Conexión con el presente
                            <br>• He comido hoy. (hoy no ha terminado)
                            <br>• He vivido aquí 5 años. (y sigo viviendo)
                            <br><br>
                            <strong>Indefinido:</strong> Acción terminada en el pasado
                            <br>• Comí ayer. (ayer terminó)
                            <br>• Viví aquí 5 años. (pero ya no vivo)
                            <br><br>
                            <strong>Regla práctica:</strong>
                            <br>• Si el periodo de tiempo ha terminado → Indefinido
                            <br>• Si el periodo de tiempo continúa → Perfecto
                        </div>
                        
                        <h4 class="doc-h4">Pretérito Perfecto vs Imperfecto:</h4>
                        <div class="callout important">
                            <strong>Pretérito Perfecto:</strong> Acción completada recientemente
                            <br>• He terminado mi trabajo. (acabo de terminarlo)
                            <br><br>
                            <strong>Imperfecto:</strong> Descripción o hábito en el pasado
                            <br>• Terminaba mi trabajo todos los días a las 5. (hábito)
                            <br><br>
                            <strong>Ejemplo contrastivo:</strong>
                            <br>• Esta mañana he estudiado español. (perfecto - período no terminado)
                            <br>• Cuando era estudiante, estudiaba español todos los días. (imperfecto - hábito)
                        </div>
                        
                        <h3 class="doc-h3">La colocación de los pronombres:</h3>
                        <div class="callout info">
                            <strong>Pronombres van antes de "haber":</strong>
                            <br>• Lo he visto.
                            <br>• Te he llamado.
                            <br>• Se ha ido.
                            <br>• Nos hemos divertido.
                            <br>• Os habéis portado bien.
                            <br>• Les he dicho la verdad.
                            <br><br>
                            <strong>No se colocan después del participio:</strong>
                            <br>• Incorrecto: He visto lo.
                            <br>• Correcto: Lo he visto.
                        </div>
                    `
                }
            ]
        }
    },
/* ملف قاعدة البيانات: data.js (المنهاج الجزائري - المواد الأدبية فقط) */
    // =================================================================
    // 1. اللغة العربية - الأدب العربي
    // =================================================================
    arabic: {
        title: "الأدب العربي",
        rtl: true,
        trimesters: {
            1: [
                { header: true, title: "الفصل الأول: عصر الضعف والنهضة" },
                {
                    title: "1. شعر المديح والزهد في عصر الضعف",
                    content: `
                        <h2 class="doc-h2">الشاعر البوصيري (1211-1294)</h2>
                        <p class="doc-p"><strong>اسمه الكامل:</strong> محمد بن سعيد بن حماد الصنهاجي البوصيري</p>
                        <p class="doc-p"><strong>أشهر أعماله:</strong> قصيدة البردة (الكواكب الدرية في مدح خير البرية)</p>
                        
                        <h3 class="doc-h3">خصائص شعره:</h3>
                        <ul class="doc-ul">
                            <li><strong>التنميق اللفظي:</strong> اهتمام بالغ بالزخرفة اللفظية والصنعة البديعية</li>
                            <li><strong>المحسنات البديعية:</strong> كثرة استخدام الجناس والطباق والترصيع</li>
                            <li><strong>الموضوعات:</strong> المدائح النبوية، الزهد، التصوف</li>
                            <li><strong>نماذج من البردة:</strong>
                                <blockquote class="doc-quote">
                                    أَمِنْ تَذَكُّرِ جِيرَانٍ بِذِي سَلَمِ<br>
                                    مَزَجْتَ دَمْعًا جَرَى مِنْ مُقْلَةٍ بِدَمِ
                                </blockquote>
                            </li>
                        </ul>
                        
                        <h3 class="doc-h3">الشاعر ابن نباتة المصري (1287-1366)</h3>
                        <p class="doc-p"><strong>خصائصه:</strong>
                        <br>1. المدح المبالغ فيه للسلاطين والأمراء
                        <br>2. الاهتمام بالجانب المادي (العطايا والجوائز)
                        <br>3. ضعف الأفكار وتكرار المعاني</p>
                        
                        <div class="callout important">
                            <strong>ملاحظة هامة:</strong> عصر الضweak (العصر العثماني) شهد انحدارًا في الشعر العربي بسبب:
                            <br>• الركاكة اللغوية • تقليد القدماء دون إبداع • هجرة المواهب
                        </div>
                    `
                },
                {
                    title: "2. النثر العلمي المتأدب",
                    content: `
                        <h2 class="doc-h2">ابن خلدون (1332-1406)</h2>
                        <p class="doc-p"><strong>مقدمته:</strong> تعد مقدمة ابن خلدون أروع ما كتب في علم الاجتماع والعمران البشري</p>
                        
                        <h3 class="doc-h3">خصائص أسلوبه:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>الخاصية</th>
                                <th>التوضيح</th>
                                <th>مثال</th>
                            </tr>
                            <tr>
                                <td><strong>الدقة العلمية</strong></td>
                                <td>التحليل المنطقي والبرهنة بالأدلة</td>
                                <td>تحليل أسباب قيام وسقوط الدول</td>
                            </tr>
                            <tr>
                                <td><strong>الموضوعية</strong></td>
                                <td>البعد عن العاطفة والتحيز</td>
                                <td>دراسة المجتمع كظاهرة طبيعية</td>
                            </tr>
                            <tr>
                                <td><strong>استخدام المصطلحات</strong></td>
                                <td>ابتكار مصطلحات جديدة في علم الاجتماع</td>
                                <td>العصبية، العمران البشري</td>
                            </tr>
                            <tr>
                                <td><strong>الوضوح</strong></td>
                                <td>عرض الأفكار المعقدة بلغة واضحة</td>
                                <td>شرح نظرية النشوء والارتقاء للمجتمعات</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">نظرية العصبية عند ابن خلدون:</h3>
                        <p class="doc-p">1. <strong>العصبية:</strong> الرابطة الطبيعية بين أفراد القبيلة
                        <br>2. <strong>دور العصبية:</strong> أساس قيام الدول
                        <br>3. <strong>مراحل الدولة:</strong> قيام → ازدهار → انحدار → سقوط (عمر الدولة 3 أجيال = 120 سنة)</p>
                    `
                },
                {
                    title: "3. مدرسة الإحياء والبعث (مدرسة المنفى)",
                    content: `
                        <h2 class="doc-h2">محمود سامي البارودي (1839-1904)</h2>
                        <p class="doc-p"><strong>لقبه:</strong> رائد مدرسة الإحياء والبعث</p>
                        
                        <h3 class="doc-h3">مميزات شعره:</h3>
                        <ul class="doc-ul">
                            <li><strong>تقليد القدامى:</strong> العودة إلى نمط الشعر العباسي والأموي</li>
                            <li><strong>جزالة اللفظ:</strong> استخدام اللغة الفصيحة القوية</li>
                            <li><strong>تنوع الأغراض:</strong> المدح، الفخر، الرثاء، الوصف</li>
                            <li><strong>المعاني المبتكرة:</strong> التجديد في المضامين مع المحافظة على الأصول</li>
                        </ul>
                        
                        <blockquote class="doc-quote">
                            أقـام عـلـى عـهـد الـوفـاء وصـانـه<br>
                            وأخلص في حب الألى كان يحبهم<br>
                            فلم يغدر النادي ولم يخن أنسه<br>
                            ولم يك في حب الألى كان يعذبهم
                        </blockquote>
                        
                        <h3 class="doc-h3">أحمد شوقي (1868-1932)</h3>
                        <p class="doc-p"><strong>لقبه:</strong> أمير الشعراء</p>
                        <div class="callout info">
                            <strong>خصائص شعر شوقي:</strong>
                            <br>• <strong>الملحمية:</strong> كما في ملحمة "دول العرب وعظماء الإسلام"
                            <br>• <strong>المسرح الشعري:</strong> أول من كتب المسرحيات الشعرية (مصرع كليوباترا)
                            <br>• <strong>الرومانسية:</strong> في شعر الغزل والعاطفة
                            <br>• <strong>التقليد والإبداع:</strong> الجمع بين الأصالة والمعاصرة
                        </div>
                    `
                },
                {
                    title: "4. مدرسة المهجر (الرابطة القلمية)",
                    content: `
                        <h2 class="doc-h2">إيليا أبو ماضي (1889-1957)</h2>
                        <p class="doc-p"><strong>من أعضاء:</strong> الرابطة القلمية في نيويورك (1920)</p>
                        
                        <h3 class="doc-h3">خصائص شعر المهجر:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>الخاصية</th>
                                <th>التوضيح</th>
                                <th>نماذج من شعر إيليا</th>
                            </tr>
                            <tr>
                                <td><strong>النزعة الإنسانية</strong></td>
                                <td>التغني بالإنسان وقيم الخير والجمال</td>
                                <td>"أيها الشاكي وما بك داء... كيف تغدو إذا غدوت عليلا"</td>
                            </tr>
                            <tr>
                                <td><strong>التفاؤل</strong></td>
                                <td>نظرة متفائلة للحياة رغم الصعوبات</td>
                                <td>"قل للشامتين صبراً فإن النهار طويل"</td>
                            </tr>
                            <tr>
                                <td><strong>سهولة اللغة</strong></td>
                                <td>البساطة في الألفاظ والعذوبة في الأسلوب</td>
                                <td>استخدام اللغة اليومية في القصيدة</td>
                            </tr>
                            <tr>
                                <td><strong>الطبيعة</strong></td>
                                <td>الحديث عن جمال الطبيعة في المهجر</td>
                                <td>وصف غابات أمريكا وأنهارها</td>
                            </tr>
                            <tr>
                                <td><strong>الحنين</strong></td>
                                <td>الشوق إلى الوطن العربي</td>
                                <td>قصائد الحنين إلى لبنان</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">دواوين إيليا أبو ماضي:</h3>
                        <ol class="doc-ol">
                            <li><strong>تذكار الماضي</strong> (1911) - أول دواوينه</li>
                            <li><strong>الجداول</strong> (1927) - أشهر دواوينه</li>
                            <li><strong>الخمائل</strong> (1946) - آخر دواوينه</li>
                        </ol>
                    `
                }
            ],

            2: [
                { header: true, title: "الفصل الثاني: الأدب المعاصر" },
                {
                    title: "1. الشعر الثوري الجزائري",
                    content: `
                        <h2 class="doc-h2">مفدي زكريا (1908-1977)</h2>
                        <p class="doc-p"><strong>شاعر الثورة الجزائرية:</strong> صاحب النشيد الوطني "قسما"</p>
                        
                        <h3 class="doc-h3">خصائص الشعر الثوري الجزائري:</h3>
                        <div class="callout important">
                            <strong>1. القيم الوطنية:</strong>
                            <br>• التغني بالحرية والاستقلال
                            <br>• تمجيد الشهداء والأبطال
                            <br>• الحث على التضحية والفداء
                            
                            <br><br><strong>2. الرمز:</strong>
                            <br>• استخدام الرموز التاريخية (عبد القادر، الأمير)
                            <br>• الرموز الجغرافية (جبال الأوراس، الشلف)
                            <br>• الرموز الطبيعية (النور، الفجر، الربيع)
                            
                            <br><br><strong>3. الالتزام:</strong>
                            <br>• الشعر سلاح في معركة التحرير
                            <br>• ربط الشعر بقضايا الأمة
                            <br>• الشعر وسيلة للتعبئة والتحريض
                        </div>
                        
                        <h3 class="doc-h3">من قصيدة "اللهب المقدس" لمفدي زكريا:</h3>
                        <blockquote class="doc-quote">
                            شـــعبُ الجـــزائرِ مســـلمٌ وإلىَ الــعُروبـةِ ينتـسـبْ<br>
                            مــن قــالَ حــادَ عن أصْلـهِ أو قــالَ مــاتَ فقــدْ كَذبْ<br>
                            أو رامَ إدمــاجــاً لــهُ رامَ الــمُحــال من الطَّلَـبْ
                        </blockquote>
                        
                        <h3 class="doc-h3">أشعار الثورة التحريرية:</h3>
                        <p class="doc-p"><strong>أشهر القصائد:</strong>
                        <br>1. <strong>"قسما"</strong> - مفدي زكريا (النشيد الوطني)
                        <br>2. <strong>"من جبالنا"</strong> - مفدي زكريا
                        <br>3. <strong>"شهداؤنا"</strong> - محمد العيد آل خليفة
                        <br>4. <strong>"أنشودة الحرية"</strong> - مالك حداد</p>
                    `
                },
                {
                    title: "2. شعر المقاومة الفلسطيني",
                    content: `
                        <h2 class="doc-h2">محمود درويش (1941-2008)</h2>
                        <p class="doc-p"><strong>شاعر القضية الفلسطينية:</strong> عاش اللجوء والاحتلال والنفي</p>
                        
                        <h3 class="doc-h3">مراحل شعر محمود درويش:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>المرحلة</th>
                                <th>الزمن</th>
                                <th>الخصائص</th>
                                <th>نماذج</th>
                            </tr>
                            <tr>
                                <td><strong>المرحلة الرومانسية</strong></td>
                                <td>الستينات</td>
                                <td>الحزن، الحنين، البساطة</td>
                                <td>"عصافير بلا أجنحة"</td>
                            </tr>
                            <tr>
                                <td><strong>مرحلة الالتزام</strong></td>
                                <td>السبعينات</td>
                                <td>المقاومة، الرمز، الأسطورة</td>
                                <td>"أحن إلى خبز أمي"</td>
                            </tr>
                            <tr>
                                <td><strong>مرحلة التأمل</strong></td>
                                <td>الثمانينات وما بعد</td>
                                <td>الوجودية، الفلسفة، التساؤل</td>
                                <td>"لماذا تركت الحصان وحيدا"</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">خصائص شعر المقاومة الفلسطيني:</h3>
                        <ul class="doc-ul">
                            <li><strong>الرمز:</strong> استخدام الرموز بكثافة (العودة، الزيتون، البرتقال)</li>
                            <li><strong>الحزن:</strong> لكن حزن مقترن بالأمل والعنفوان</li>
                            <li><strong>التحدي:</strong> رفض الهزيمة والإصرار على المقاومة</li>
                            <li><strong>الأسطورة:</strong> توظيف الأساطير العربية والفلسطينية</li>
                            <li><strong>التراث:</strong> العودة إلى الجذور والهوية العربية</li>
                        </ul>
                        
                        <h3 class="doc-h3">من قصيدة "بطاقة هوية" لمحمود درويش:</h3>
                        <blockquote class="doc-quote">
                            ســجّــلْ ! أنــا عــربــي<br>
                            ورقــمُ بطــاقتــي خــمــســونَ ألــفْ<br>
                            وعــدْدُ أطــفــالــي ثــمــانــيــةٌ<br>
                            وتــاســعــهــمْ سيــأتي بــعــدَ صــيــفْ<br>
                            فــهلْ تغــضــبْ ؟!
                        </blockquote>
                    `
                },
                {
                    title: "3. ظاهرة الحزن في الشعر الحر",
                    content: `
                        <h2 class="doc-h2">نازك الملائكة (1923-2007)</h2>
                        <p class="doc-p"><strong>رائدة الشعر الحر:</strong> كتبت أول قصيدة حرة "الكوليرا" عام 1947</p>
                        
                        <h3 class="doc-h3">مفهوم الشعر الحر:</h3>
                        <div class="callout info">
                            <strong>تعريف الشعر الحر:</strong> هو شعر ذو تفعيلة واحدة (مثل: متفاعلن) تتكرر في السطر الوادي
                            <br><strong>الفرق عن العمودي:</strong> التحرر من نظام الشطرين والقافية الموحدة
                            <br><strong>أسباب ظهوره:</strong> التأثر بالشعر العالمي، الرغبة في التحرر، التعبير عن هموم العصر
                        </div>
                        
                        <h3 class="doc-h3">خصائص الشعر الحر:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>الخاصية</th>
                                <th>التوضيح</th>
                                <th>أمثلة</th>
                            </tr>
                            <tr>
                                <td><strong>التفعيلة</strong></td>
                                <td>اعتماد تفعيلة واحدة متنوعة (مستفعلن، متفاعلن...)</td>
                                <td>مستفعلن مستفعلن مستفعلن</td>
                            </tr>
                            <tr>
                                <td><strong>الوحدة العضوية</strong></td>
                                <td>ترابط الأفكار وتسلسلها منطقياً</td>
                                <td>مقدمة → عرض → خاتمة</td>
                            </tr>
                            <tr>
                                <td><strong>الغموض</strong></td>
                                <td>استخدام الرمز والإيحاء بدل التصريح</td>
                                <td>قصائد السياب "أنشودة المطر"</td>
                            </tr>
                            <tr>
                                <td><strong>الانزياح</strong></td>
                                <td>خرق توقعات القارئ لخلق الدهشة</td>
                                <td>تشبيهات غير مألوفة</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">مظاهر الحزن في الشعر الحر:</h3>
                        <ol class="doc-ol">
                            <li><strong>الحزن الوجودي:</strong> التساؤل عن معنى الحياة والموت</li>
                            <li><strong>حزن الوطن:</strong> معاناة الشعوب العربية من الاستعمار</li>
                            <li><strong>الحزن الإنساني:</strong> معاناة الإنسان المعاصر من العزلة</li>
                            <li><strong>الحزن الرومانسي:</strong> الحب المستحيل والفقدان</li>
                        </ol>
                        
                        <h3 class="doc-h3">من قصيدة "الكوليرا" لنازك الملائكة:</h3>
                        <blockquote class="doc-quote">
                            ســكــنَ الــلــيــلُ<br>
                            أصــغِ إلــى وَقــعِ الــصــمــوتِ الــمُــنــتــشــرْ<br>
                            إنَّ طــفــلــةَ الــجــيــاعِ تــمــوتْ<br>
                            وَحَــديــثَ الــقُــبــورِ يَــأتــي الــصَّــبــاحُ لــيَــنــشُــرْهُ
                        </blockquote>
                    `
                }
            ],

            3: [
                { header: true, title: "الفصل الثالث: النثر المعاصر" },
                {
                    title: "1. فن المقال",
                    content: `
                        <h2 class="doc-h2">البشير الإبراهيمي (1889-1965)</h2>
                        <p class="doc-p"><strong>أحد مؤسسي:</strong> جمعية العلماء المسلمين الجزائريين</p>
                        
                        <h3 class="doc-h3">خصائص أسلوب البشير الإبراهيمي:</h3>
                        <div class="callout important">
                            <strong>1. الصنعة اللفظية:</strong>
                            <br>• العناية الفائقة بانتقاء الألفاظ
                            <br>• استخدام المحسنات البديعية بإتقان
                            <br>• جزالة الأسلوب وقوة العبارة
                            
                            <br><br><strong>2. المنطقية:</strong>
                            <br>• تقديم الأفكار في تسلسل منطقي
                            <br>• البرهنة بالحجج والأدلة
                            <br>• الرد على الخصوم بأسلوب علمي
                            
                            <br><br><strong>3. الالتزام:</strong>
                            <br>• الدفاع عن الإسلام واللغة العربية
                            <br>• مقاومة الاستعمار الفرنسي
                            <br>• الدعوة إلى الإصلاح والتجديد
                        </div>
                        
                        <h3 class="doc-h3">من مقال "اللغة العربية في الجزائر" للبشير الإبراهيمي:</h3>
                        <blockquote class="doc-quote">
                            "اللغة العربية لغة هذا الشعب منذ أجيال متطاولة، وهي جزء من كيانه،
                            وقطعة من قلبه، وترجمان عقله، ووعاء حضارته، وسجل تاريخه..."
                        </blockquote>
                        
                        <h2 class="doc-h2">طه حسين (1889-1973)</h2>
                        <p class="doc-p"><strong>عميد الأدب العربي:</strong> من رواد حركة التنوير في العالم العربي</p>
                        
                        <h3 class="doc-h3">خصائص أسلوب طه حسين:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>الخاصية</th>
                                <th>التوضيح</th>
                                <th>نماذج من كتبه</th>
                            </tr>
                            <tr>
                                <td><strong>السهولة الممتنعة</strong></td>
                                <td>لغة واضحة بسيطة لكنها عميقة الدلالة</td>
                                <td>"الأيام" - سيرته الذاتية</td>
                            </tr>
                            <tr>
                                <td><strong>النقد الجريء</strong></td>
                                <td>منهج الشك الديكارتي في التراث</td>
                                <td>"في الشعر الجاهلي"</td>
                            </tr>
                            <tr>
                                <td><strong>المنطقية</strong></td>
                                <td>عرض الأفكار في تسلسل عقلي</td>
                                <td>"مستقبل الثقافة في مصر"</td>
                            </tr>
                            <tr>
                                <td><strong>العاطفة المتحكمة</strong></td>
                                <td>عاطفة قوية لكنها مسيطر عليها</td>
                                <td>"دعاء الكروان"</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">أنواع المقال عند طه حسين:</h3>
                        <ol class="doc-ol">
                            <li><strong>المقال النقدي:</strong> نقد الأدب والتراث</li>
                            <li><strong>المقال الاجتماعي:</strong> قضايا المجتمع والإصلاح</li>
                            <li><strong>المقال السياسي:</strong> قضايا الوطن والتحرر</li>
                            <li><strong>المقال السيري:</strong> كتابة السير والتراجم</li>
                        </ol>
                        
                        <h3 class="doc-h3">من كتاب "الأيام" لطه حسين:</h3>
                        <blockquote class="doc-quote">
                            "كان الصبي يسمع هذا الدعاء فيرتاح إليه، ويرى أن الدنيا كلها قد 
                            اتسعت له، وأن الحياة قد تهللت في وجهه، وأن المستقبل كله قد أصبح 
                            مشرقاً منيراً..."
                        </blockquote>
                    `
                },
                {
                    title: "2. فن الرواية العربية",
                    content: `
                        <h2 class="doc-h2">تطور الرواية العربية</h2>
                        
                        <h3 class="doc-h3">مراحل تطور الرواية:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>المرحلة</th>
                                <th>الفترة</th>
                                <th>الخصائص</th>
                                <th>أعلامها</th>
                            </tr>
                            <tr>
                                <td><strong>مرحلة البداية</strong></td>
                                <td>نهاية القرن 19</td>
                                <td>التقليد، الترجمة، المقامات</td>
                                <td>فرح أنطون، جورجي زيدان</td>
                            </tr>
                            <tr>
                                <td><strong>مرحلة النضج</strong></td>
                                <td>النصف الأول من القرن 20</td>
                                <td>الواقعية، الالتزام، القضايا الوطنية</td>
                                <td>نجيب محفوظ، الطيب صالح</td>
                            </tr>
                            <tr>
                                <td><strong>مرحلة التجريب</strong></td>
                                <td>النصف الثاني من القرن 20</td>
                                <td>التيار الوعي، الرمزية، الانزياح</td>
                                <td>جمال الغيطاني، عبد الرحمن منيف</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">رواية "موسم الهجرة إلى الشمال" للطيب صالح:</h3>
                        <div class="callout info">
                            <strong>موضوع الرواية:</strong> صراع الحضارات (الشرق والغرب)
                            <br><strong>الشخصيات الرئيسية:</strong>
                            <br>• <strong>مصطفى سعيد:</strong> الشاب السوداني المثقف في لندن
                            <br>• <strong>الراوي:</strong> شاب سوداني عائد من الدراسة في الغرب
                            <br><strong>الرمزية:</strong> العلاقة الجنسية = العلاقة الاستعمارية
                        </div>
                        
                        <h3 class="doc-h3">رواية "اللص والكلاب" لنجيب محفوظ:</h3>
                        <p class="doc-p"><strong>الموضوع:</strong> صراع الفرد ضد المجتمع الظالم</p>
                        <ul class="doc-ul">
                            <li><strong>سعيد مهران:</strong> البطل المتمرد على القيم الفاسدة</li>
                            <li><strong>رمزية العنوان:</strong> اللص (المظلوم) والكلاب (أصحاب النفوذ)</li>
                            <li><strong>التيار الوعي:</strong> استخدام تيار الوعي (monologue intérieur)</li>
                        </ul>
                    `
                },
                {
                    title: "3. فن المسرحية العربية",
                    content: `
                        <h2 class="doc-h2">توفيق الحكيم (1898-1987)</h2>
                        <p class="doc-p"><strong>أبو المسرحية العربية:</strong> صاحب نظرية "المسرح الذهني"</p>
                        
                        <h3 class="doc-h3">أنواع المسرح عند توفيق الحكيم:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>النوع</th>
                                <th>التعريف</th>
                                <th>نماذج</th>
                            </tr>
                            <tr>
                                <td><strong>المسرح الذهني</strong></td>
                                <td>مسرح يقرأ ولا يمثل، موجه للعقل لا للحواس</td>
                                <td>"أهل الكهف"، "شهرزاد"</td>
                            </tr>
                            <tr>
                                <td><strong>المسرح الاجتماعي</strong></td>
                                <td>معالجة قضايا المجتمع والطبقات</td>
                                <td>"الصفقة"، "السلطان الحائر"</td>
                            </tr>
                            <tr>
                                <td><strong>المسرح الفلسفي</strong></td>
                                <td>مناقشة القضايا الوجودية والفلسفية</td>
                                <td>"بيجماليون"، "سليمان الحكيم"</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">مسرحية "أهل الكهف" لتوفيق الحكيم:</h3>
                        <div class="callout important">
                            <strong>المصدر:</strong> قصة أصحاب الكهف في القرآن الكريم
                            <br><strong>الموضوع:</strong> صراع الزمن والإنسان
                            <br><strong>الشخصيات:</strong>
                            <br>• <strong>مشلينيا:</strong> يمثل الحب
                            <br>• <strong>يمليخا:</strong> يمثل الإيمان
                            <br>• <strong>مرنوش:</strong> يمثل الطمع
                            <br><strong>الرمزية:</strong> النوم = العزلة عن العالم، الصحوة = العودة المستحيلة
                        </div>
                        
                        <h3 class="doc-h3">عناصر المسرحية العربية:</h3>
                        <ol class="doc-ol">
                            <li><strong>الحبكة:</strong> تطور الأحداث وتسلسلها</li>
                            <li><strong>الشخصيات:</strong> البطل، الشخصيات المساعدة، الخصم</li>
                            <li><strong>الصراع:</strong> صراع الإنسان مع (الذات، الآخر، الطبيعة، القدر)</li>
                            <li><strong>الحوار:</strong> أداة الكشف عن الشخصيات وتطور الأحداث</li>
                            <li><strong>الفضاء:</strong> الزمان والمكان الذي تدور فيه الأحداث</li>
                            <li><strong>الموضوع:</strong> الفكرة الأساسية التي تعالجها المسرحية</li>
                        </ol>
                    `
                }
            ]
        }
    },

    // =================================================================
    // 2. الفلسفة (شعبة الآداب)
    // =================================================================
    philosophy: {
        title: "الفلسفة",
        rtl: true,
        trimesters: {
            1: [
                { header: true, title: "الفصل الأول: إشكالية إدراك العالم الخارجي" },
                {
                    title: "1. الإحساس والإدراك",
                    content: `
                        <h2 class="doc-h2">الإشكالية الأساسية: هل المعرفة مصدرها العقل أم الحواس؟</h2>
                        
                        <h3 class="doc-h3">المدرسة العقلية (Rationalisme)</h3>
                        <p class="doc-p"><strong>أبرز ممثليها:</strong> ديكارت، أفلاطون، كانط</p>
                        
                        <div class="callout important">
                            <strong>أفكار المدرسة العقلية:</strong>
                            <br>1. <strong>أسبقية العقل:</strong> العقل هو مصدر المعرفة الأول
                            <br>2. <strong>المبادئ الفطرية:</strong> المعرفة موجودة في العقل منذ الولادة
                            <br>3. <strong>شكوكية منهجية:</strong> الشك وسيلة للوصول إلى اليقين
                            <br>4. <strong>الحدس العقلي:</strong> إدراك الحقائق مباشرة دون وساطة الحواس
                        </div>
                        
                        <h4 class="doc-h4">رينيه ديكارت (1596-1650)</h4>
                        <p class="doc-p"><strong>مقولته الشهيرة:</strong> "أنا أفكر، إذن أنا موجود" (Cogito, ergo sum)</p>
                        <ul class="doc-ul">
                            <li><strong>الشك المنهجي:</strong> شك في كل شيء للوصول إلى اليقين</li>
                            <li><strong>الكوجيتو:</strong> الحقيقة الوحيدة التي لا تقبل الشك</li>
                            <li><strong>دليل الوجود:</strong> فكرة الكمال في عقلي تدل على وجود كامل (الله)</li>
                            <li><strong>ثنائية الجسد والعقل:</strong> الجسد مادة ممتدة، والعقل جوهر مفكر</li>
                        </ul>
                        
                        <h3 class="doc-h3">المدرسة الحسية (Empirisme)</h3>
                        <p class="doc-p"><strong>أبرز ممثليها:</strong> جون لوك، ديفيد هيوم، جورج باركلي</p>
                        
                        <div class="callout info">
                            <strong>أفكار المدرسة الحسية:</strong>
                            <br>1. <strong>أسبقية الحواس:</strong> التجربة هي مصدر كل معرفة
                            <br>2. <strong>اللوح الأبيض:</strong> العقل صفحة بيضاء (Tabula Rasa)
                            <br>3. <strong>نفي المبادئ الفطرية:</strong> لا توجد أفكار فطرية
                            <br>4. <strong>المعرفة مركبة:</strong> تنتقل من البسيط إلى المركب
                        </div>
                        
                        <h4 class="doc-h4">جون لوك (1632-1704)</h4>
                        <p class="doc-p"><strong>نظرية المعرفة:</strong> العقل لوح أبيض تنقش عليه التجربة</p>
                        <table class="detailed-table">
                            <tr>
                                <th>نوع الأفكار</th>
                                <th>المصدر</th>
                                <th>أمثلة</th>
                            </tr>
                            <tr>
                                <td><strong>أفكار بسيطة</strong></td>
                                <td>تأتينا مباشرة من الحواس</td>
                                <td>اللون، الطعم، الرائحة</td>
                            </tr>
                            <tr>
                                <td><strong>أفكار مركبة</strong></td>
                                <td>تكوّنها العقل من الأفكار البسيطة</td>
                                <td>الجملة، القصيدة، النظرية</td>
                            </tr>
                            <tr>
                                <td><strong>أفكار الانعكاس</strong></td>
                                <td>تأتي من تأمل العقل في نشاطه</td>
                                <td>الشك، الإيمان، التفكير</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "2. اللغة والفكر",
                    content: `
                        <h2 class="doc-h2">الإشكالية: هل اللغة والفكر شيء واحد أم منفصلان؟</h2>
                        
                        <h3 class="doc-h3">الاتجاه الأحادي (الوحدة بين اللغة والفكر)</h3>
                        <p class="doc-p"><strong>يمثله:</strong> فرديناند دي سوسير، مدرسة فرانكفورت</p>
                        
                        <div class="callout important">
                            <strong>أفكار الاتجاه الأحادي:</strong>
                            <br>1. <strong>اللغة هي الفكر:</strong> لا يمكن التفكير بدون لغة
                            <br>2. <strong>اللغة تحدد الرؤية:</strong> لغتنا تحدد رؤيتنا للعالم
                            <br>3. <strong>اللغة نظام:</strong> اللغة نظام من العلامات (الدال والمدلول)
                            <br>4. <strong>اللغة بنية:</strong> العلاقات بين الكلمات أهم من الكلمات نفسها
                        </div>
                        
                        <h4 class="doc-h4">فرديناند دي سوسير (1857-1913)</h4>
                        <p class="doc-p"><strong>أب علم اللغة الحديث:</strong> صاحب نظرية العلامة اللغوية</p>
                        <ul class="doc-ul">
                            <li><strong>الدال (Signifiant):</strong> الصورة الصوتية للكلمة</li>
                            <li><strong>المدلول (Signifié):</strong> المفهوم أو الفكرة</li>
                            <li><strong>العلامة (Signe):</strong> اتحاد الدال والمدلول</li>
                            <li><strong>العلاقات:</strong> المحورية (paradigmatique) والتوزيعية (syntagmatique)</li>
                        </ul>
                        
                        <h3 class="doc-h3">الاتجاه الثنائي (انفصال اللغة عن الفكر)</h3>
                        <p class="doc-p"><strong>يمثله:</strong> برجسون، بعض الظاهراتيين</p>
                        
                        <div class="callout info">
                            <strong>أفكار الاتجاه الثنائي:</strong>
                            <br>1. <strong>أسبقية الفكر:</strong> الفكر سابق على اللغة
                            <br>2. <strong>عجز اللغة:</strong> اللغة تعجز عن التعبير عن كل الأفكار
                            <br>3. <strong>الفكر أوسع:</strong> هناك أفكار لا يمكن ترجمتها للغة
                            <br>4. <strong>الحدس:</strong> المعرفة الحدسية لا تحتاج إلى لغة
                        </div>
                        
                        <h4 class="doc-h4">هنري برجسون (1859-1941)</h4>
                        <p class="doc-p"><strong>فيلسوف الحدس:</strong> صاحب نظرية الديمومة والزمن</p>
                        <table class="detailed-table">
                            <tr>
                                <th>نوع المعرفة</th>
                                <th>الوسيلة</th>
                                <th>الخصائص</th>
                            </tr>
                            <tr>
                                <td><strong>المعرفة التحليلية</strong></td>
                                <td>العقل، اللغة، العلم</td>
                                <td>سطحية، مجزأة، ثابتة</td>
                            </tr>
                            <tr>
                                <td><strong>المعرفة الحدسية</strong></td>
                                <td>الحدس، الوجدان</td>
                                <td>عميقة، كلية، متحركة</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "3. الشعور واللاشعور",
                    content: `
                        <h2 class="doc-h2">الإشكالية: هل كل ما هو نفسي شعوري؟</h2>
                        
                        <h3 class="doc-h3">المدرسة الكلاسيكية (النظرية الشعورية)</h3>
                        <p class="doc-p"><strong>يمثلها:</strong> ديكارت، المدرسة الواعية (Conscientisme)</p>
                        
                        <div class="callout important">
                            <strong>أفكار النظرية الشعورية:</strong>
                            <br>1. <strong>مطابقة النفسي للشعوري:</strong> كل ما هو نفسي فهو شعوري
                            <br>2. <strong>الوعي التام:</strong> الإنسان يعي كل أفعاله وأفكاره
                            <br>3. <strong>الشفافية النفسية:</strong> النفس شفافة للإنسان نفسه
                            <br>4. <strong>سيادة العقل:</strong> العقل يسيطر على كل النشاط النفسي
                        </div>
                        
                        <h4 class="doc-h4">رينيه ديكارت</h4>
                        <p class="doc-p"><strong>ثنائية الجسد والعقل:</strong></p>
                        <ul class="doc-ul">
                            <li><strong>الجوهر المفكر (العقل):</strong> ماهيته التفكير، وهو شعوري دائمًا</li>
                            <li><strong>الجوهر الممتد (الجسد):</strong> ماهيته الامتداد، وهو ميكانيكي</li>
                            <li><strong>التفاعل:</strong> يتفاعلان في الغدة الصنوبرية بالدماغ</li>
                        </ul>
                        
                        <h3 class="doc-h3">المدرسة التحليلية (النظرية اللاشعورية)</h3>
                        <p class="doc-p"><strong>يمثلها:</strong> فرويد، يونغ، أدلر</p>
                        
                        <div class="callout info">
                            <strong>أفكار النظرية اللاشعورية:</strong>
                            <br>1. <strong>اللاوعي:</strong> جزء كبير من النفس غير شعوري
                            <br>2. <strong>الكبت:</strong> الأفكار الممنوعة تنتقل إلى اللاشعور
                            <br>3. <strong>الأحلام:</strong> الطريق الملكي إلى اللاشعور
                            <br>4. <strong>الزلات:</strong> زلات اللسان والقلم تكشف عن اللاشعور
                        </div>
                        
                        <h4 class="doc-h4">سيغموند فرويد (1856-1939)</h4>
                        <p class="doc-p"><strong>أب التحليل النفسي:</strong> صاحب نظرية الشخصية الثلاثية</p>
                        
                        <h5 class="doc-h5">مكونات النفس عند فرويد:</h5>
                        <table class="detailed-table">
                            <tr>
                                <th>المكون</th>
                                <th>الوصف</th>
                                <th>المبدأ</th>
                                <th>الوسائل</th>
                            </tr>
                            <tr>
                                <td><strong>الهو (Id)</strong></td>
                                <td>الجزء الغريزي، اللاشعوري</td>
                                <td>مبدأ اللذة</td>
                                <td>الإشباع الفوري</td>
                            </tr>
                            <tr>
                                <td><strong>الأنا (Ego)</strong></td>
                                <td>الجزء الشعوري، الوسيط</td>
                                <td>مبدأ الواقع</td>
                                <td>المنطق، الحكمة</td>
                            </tr>
                            <tr>
                                <td><strong>الأنا الأعلى (Superego)</strong></td>
                                <td>الجزء المثالي، الضمير</td>
                                <td>مثال الكمال</td>
                                <td>القيم، المثل</td>
                            </tr>
                        </table>
                        
                        <h5 class="doc-h5">آليات الدفاع النفسي:</h5>
                        <ol class="doc-ol">
                            <li><strong>الكبت:</strong> دفع الأفكار المزعجة إلى اللاشعور</li>
                            <li><strong>الإسقاط:</strong> نسب عيوبنا للآخرين</li>
                            <li><strong>التعويض:</strong> تعويض النقص بنجاح في مجال آخر</li>
                            <li><strong>التسامي:</strong> تحويل الطاقة الجنسية إلى إبداع فني</li>
                            <li><strong>التراجع:</strong> العودة إلى مرحلة طفولية</li>
                        </ol>
                    `
                }
            ],

            2: [
                { header: true, title: "الفصل الثاني: الأخلاق والحياة الاجتماعية" },
                {
                    title: "1. أساس الأخلاق",
                    content: `
                        <h2 class="doc-h2">الإشكالية: ما هو أساس القيمة الأخلاقية؟</h2>
                        
                        <h3 class="doc-h3">المذهب العقلاني (الأخلاق العقلية)</h3>
                        <p class="doc-p"><strong>يمثله:</strong> كانط، سقراط، أفلاطون</p>
                        
                        <div class="callout important">
                            <strong>أفكار المذهب العقلاني:</strong>
                            <br>1. <strong>العقل هو المصدر:</strong> الأخلاق مستقلة عن التجربة
                            <br>2. <strong>الواجب للأجل الواجب:</strong> الفعل الأخلاقي يكون أخلاقيًا إذا فعله الإنسان بدافع الواجب
                            <br>3. <strong>الاستقلالية:</strong> الإنسان هو المشرع والخاضع للأخلاق
                            <br>4. <strong>الكوجيتو الأخلاقي:</strong> الضمير الأخلاقي هو حقيقة بديهية
                        </div>
                        
                        <h4 class="doc-h4">إيمانويل كانط (1724-1804)</h4>
                        <p class="doc-p"><strong>فيلسوف الواجب:</strong> صاحب الأخلاق الكانطية</p>
                        
                        <h5 class="doc-h5">الأخلاق عند كانط:</h5>
                        <ul class="doc-ul">
                            <li><strong>الواجب:</strong> ضرورة القيام بالفعل احترامًا للقانون الأخلاقي</li>
                            <li><strong>الإرادة الخيرة:</strong> الإرادة التي تريد الخير لذاته</li>
                            <li><strong>الاستقلالية:</strong> الإنسان هو الذي يضع القانون لنفسه</li>
                            <li><strong>الكونية:</strong> القانون الأخلاقي يجب أن يكون صالحًا للجميع</li>
                        </ul>
                        
                        <h5 class="doc-h5">الأمر القاطع (الكانطي) Categorical Imperative:</h5>
                        <div class="callout info">
                            <strong>الصيغة الأولى:</strong> "تصرف بحيث تكون قاعدة فعلك قانونًا كليًا"
                            <br><strong>الصيغة الثانية:</strong> "تصرف بحيث تعامل الإنسانية في شخصك وفي شخص غيرك كغاية لا كمجرد وسيلة"
                            <br><strong>الصيغة الثالثة:</strong> "تصرف بحيث تكون الإرادة مشرعة كونية"
                        </div>
                        
                        <h3 class="doc-h3">المذهب الديني (الأخلاق الدينية)</h3>
                        <p class="doc-p"><strong>في الإسلام:</strong> المعتزلة والأشاعرة</p>
                        
                        <h4 class="doc-h4">المعتزلة</h4>
                        <p class="doc-p"><strong>مذهب التحسين والتقبيح العقليين:</strong></p>
                        <ul class="doc-ul">
                            <li><strong>العقل يدرك الحسن والقبح:</strong> قبل ورود الشرع</li>
                            <li><strong>العدل الإلهي:</strong> الله يفعل الحسن ويترك القبيح</li>
                            <li><strong>حرية الإرادة:</strong> الإنسان خالق لأفعاله</li>
                            <li><strong>المسؤولية الأخلاقية:</strong> تنتج عن الحرية والاختيار</li>
                        </ul>
                        
                        <h4 class="doc-h4">الأشاعرة</h4>
                        <p class="doc-p"><strong>مذهب الشرع في التحسين والتقبيح:</strong></p>
                        <ul class="doc-ul">
                            <li><strong>الشرع يحدد الحسن والقبح:</strong> العقل لا يدركهما</li>
                            <li><strong>القدرية:</strong> الله خالق أفعال الإنسان</li>
                            <li><strong>الكسب:</strong> الإنسان يكتسب الفعل الذي خلقه الله</li>
                            <li><strong>الحكمة الإلهية:</strong> الله يفعل ما يشاء لا يسأل عما يفعل</li>
                        </ul>
                        
                        <h3 class="doc-h3">المذهب الاجتماعي (الأخلاق الاجتماعية)</h3>
                        <p class="doc-p"><strong>يمثله:</strong> إميل دوركايم</p>
                        
                        <div class="callout important">
                            <strong>نظرية دوركايم في الأخلاق:</strong>
                            <br>1. <strong>الأخلاق ظاهرة اجتماعية:</strong> تنشأ في المجتمع
                            <br>2. <strong>الضمير الجمعي:</strong> مصدر القيم الأخلاقية
                            <br>3. <strong>الإلزام:</strong> القوة الإلزامية للأخلاق تأتي من المجتمع
                            <br>4. <strong>التغير:</strong> الأخلاق تتغير بتغير المجتمعات
                        </div>
                        
                        <h3 class="doc-h3">المذهب النفعي (الأخلاق النفعية)</h3>
                        <p class="doc-p"><strong>يمثله:</strong> أبيقور، جيرمي بنثام، جون ستيوارت ميل</p>
                        
                        <h4 class="doc-h4">أبيقور (341 ق.م - 270 ق.م)</h4>
                        <p class="doc-p"><strong>فيلسوف اللذة:</strong> لكن ليس اللذة الحسية فقط</p>
                        
                        <table class="detailed-table">
                            <tr>
                                <th>نوع اللذة</th>
                                <th>التعريف</th>
                                <th>الأهمية</th>
                            </tr>
                            <tr>
                                <td><strong>اللذة السلبية</strong></td>
                                <td>غياب الألم</td>
                                <td>أعظم اللذات عند أبيقور</td>
                            </tr>
                            <tr>
                                <td><strong>اللذة الحركية</strong></td>
                                <td>إشباع الرغبة</td>
                                <td>لذات مؤقتة وزائلة</td>
                            </tr>
                            <tr>
                                <td><strong>لذات الجسد</strong></td>
                                <td>الأكل، الشرب، الجنس</td>
                                <td>ضرورية لكن مؤقتة</td>
                            </tr>
                            <tr>
                                <td><strong>لذات النفس</strong></td>
                                <td>الصداقة، التأمل، العلم</td>
                                <td>أعظم اللذات وأكثرها دوامًا</td>
                            </tr>
                        </table>
                        
                        <h5 class="doc-h5">رباعية أبيقور العلاجية:</h5>
                        <ol class="doc-ol">
                            <li><strong>لا تخف من الآلهة:</strong> الآلهة لا تتدخل في شؤون البشر</li>
                            <li><strong>لا تخف من الموت:</strong> الموت لا يعني شيئًا للإنسان</li>
                            <li><strong>اللذة سهلة المنال:</strong> اللذات الطبيعية سهلة التحقيق</li>
                            <li><strong>الألم سهل الاحتمال:</strong> الألم الشديد قصير، والطويل خفيف</li>
                        </ol>
                    `
                },
                {
                    title: "2. الحق والواجب",
                    content: `
                        <h2 class="doc-h2">الإشكالية: أيهما أسبق؟ الحق أم الواجب؟</h2>
                        
                        <h3 class="doc-h3">الاتجاه الذي يجعل الواجب أسبق من الحق</h3>
                        <p class="doc-p"><strong>يمثله:</strong> كانط، المذاهب الواجبية</p>
                        
                        <div class="callout important">
                            <strong>أفكار هذا الاتجاه:</strong>
                            <br>1. <strong>أسبقية الواجب:</strong> الحق ينتج عن أداء الواجب
                            <br>2. <strong>المسؤولية:</strong> الحقوق تتبع المسؤوليات
                            <br>3. <strong>النظام الاجتماعي:</strong> احترام الواجب يؤدي إلى النظام
                            <br>4. <strong>الضبط:</strong> الواجب يضبط الحقوق ويمنع التعسف
                        </div>
                        
                        <h4 class="doc-h4">كانط والواجب المطلق</h4>
                        <p class="doc-p"><strong>الواجب قبل الحق:</strong> أداء الواجب يخلق الحقوق</p>
                        <ul class="doc-ul">
                            <li><strong>الاستقلالية:</strong> الإنسان يشرع الواجب لنفسه</li>
                            <li><strong>الكونية:</strong> الواجب صالح لكل العقلاء</li>
                            <li><strong>الإرادة الخيرة:</strong> تنبع من احترام الواجب</li>
                            <li><strong>المملكة الغائية:</strong> مجتمع يحترم فيه الجميع الواجب</li>
                        </ul>
                        
                        <h3 class="doc-h3">الاتجاه الذي يجعل الحق أسبق من الواجب</h3>
                        <p class="doc-p"><strong>يمثله:</strong> جون لوك، جان جاك روسو، المذاهب الحقوقية</p>
                        
                        <div class="callout info">
                            <strong>أفكار هذا الاتجاه:</strong>
                            <br>1. <strong>أسبقية الحق:</strong> الحقوق الطبيعية سابقة على الواجب
                            <br>2. <strong>الحرية الأصلية:</strong> الإنسان يولد حرًا، والحقوق فطرية
                            <br>3. <strong>العقد الاجتماعي:</strong> الواجب نتاج عقد لضمان الحقوق
                            <br>4. <strong>الحماية:</strong> الدولة وجدت لحماية الحقوق
                        </div>
                        
                        <h4 class="doc-h4">جان جاك روسو (1712-1778)</h4>
                        <p class="doc-p"><strong>صاحب نظرية العقد الاجتماعي:</strong></p>
                        
                        <h5 class="doc-h5">الحقوق الطبيعية عند روسو:</h5>
                        <table class="detailed-table">
                            <tr>
                                <th>الحق</th>
                                <th>التعريف</th>
                                <th>في حالة الطبيعة</th>
                            </tr>
                            <tr>
                                <td><strong>الحرية</strong></td>
                                <td>حق الإنسان في التصرف دون قيود</td>
                                <td>حرية مطلقة لكنها خطيرة</td>
                            </tr>
                            <tr>
                                <td><strong>المساواة</strong></td>
                                <td>الجميع متساوون في الحقوق</td>
                                <td>مساواة طبيعية لكنها تعسفية</td>
                            </tr>
                            <tr>
                                <td><strong>الملكية</strong></td>
                                <td>حق التملك من العمل</td>
                                <td>أصل كل الشرور والتفاوت</td>
                            </tr>
                        </table>
                        
                        <h5 class="doc-h5">العقد الاجتماعي عند روسو:</h5>
                        <ul class="doc-ul">
                            <li><strong>المشكلة:</strong> حالة الطبيعة أصبحت خطيرة</li>
                            <li><strong>الحل:</strong> العقد الاجتماعي لإنشاء المجتمع</li>
                            <li><strong>المبدأ:</strong> "التنازل عن الحرية الطبيعية مقابل الحرية المدنية"</li>
                            <li><strong>الإرادة العامة:</strong> ليست مجموع الإرادات الفردية بل المصلحة المشتركة</li>
                            <li><strong>السيادة:</strong> الشعب هو صاحب السيادة</li>
                        </ul>
                        
                        <h3 class="doc-h3">العدالة عند أرسطو</h3>
                        <p class="doc-p"><strong>أنواع العدالة:</strong></p>
                        
                        <table class="detailed-table">
                            <tr>
                                <th>نوع العدالة</th>
                                <th>التعريف</th>
                                <th>المبدأ</th>
                                <th>المجال</th>
                            </tr>
                            <tr>
                                <td><strong>العدالة التوزيعية</strong></td>
                                <td>توزيع الخيرات حسب الاستحقاق</td>
                                <td>التناسب والمساواة النسبية</td>
                                <td>المرتبات، المناصب، الجوائز</td>
                            </tr>
                            <tr>
                                <td><strong>العدالة التصحيحية</strong></td>
                                <td>تصحيح الأخطاء والظلم</td>
                                <td>المساواة المطلقة</td>
                                <td>المحاكم، العقوبات، التعويضات</td>
                            </tr>
                            <tr>
                                <td><strong>العدالة التبادلية</strong></td>
                                <td>المبادلات العادلة بين الأفراد</td>
                                <td>التكافؤ في التبادل</td>
                                <td>التجارة، العقود، الصفقات</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">نظرية الفضيلة عند أرسطو</h4>
                        <p class="doc-p"><strong>الوسط الذهبي:</strong> الفضيلة هي الوسط بين رذيلتين</p>
                        
                        <table class="detailed-table">
                            <tr>
                                <th>النقص (رذيلة)</th>
                                <th>الفضيلة (الوسط)</th>
                                <th>الزيادة (رذيلة)</th>
                            </tr>
                            <tr>
                                <td>الجبن</td>
                                <td><strong>الشجاعة</strong></td>
                                <td>التهور</td>
                            </tr>
                            <tr>
                                <td>البخل</td>
                                <td><strong>الكرم</strong></td>
                                <td>الإسراف</td>
                            </tr>
                            <tr>
                                <td>اللامبالاة</td>
                                <td><strong>الاعتدال</strong></td>
                                <td>الشراهة</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "3. الأسرة والمجتمع",
                    content: `
                        <h2 class="doc-h2">الإشكالية: ما هو دور الأسرة في المجتمع؟</h2>
                        
                        <h3 class="doc-h3">النظرة الوظيفية للأسرة</h3>
                        <p class="doc-p"><strong>يمثلها:</strong> إميل دوركايم، المدرسة الوظيفية</p>
                        
                        <div class="callout important">
                            <strong>وظائف الأسرة عند دوركايم:</strong>
                            <br>1. <strong>الوظيفة البيولوجية:</strong> إنجاب الأطفال واستمرار النوع
                            <br>2. <strong>الوظيفة التربوية:</strong> تنشئة الأطفال وتعليمهم
                            <br>3. <strong>الوظيفة النفسية:</strong> إشباع الحاجات العاطفية
                            <br>4. <strong>الوظيفة الاجتماعية:</strong> دمج الفرد في المجتمع
                            <br>5. <strong>الوظيفة الاقتصادية:</strong> التعاون في تلبية الحاجات
                        </div>
                        
                        <h4 class="doc-h4">دوركايم والتضامن الاجتماعي</h4>
                        <p class="doc-p"><strong>أنواع التضامن:</strong></p>
                        
                        <table class="detailed-table">
                            <tr>
                                <th>نوع التضامن</th>
                                <th>الخصائص</th>
                                <th>نوع القانون</th>
                                <th>المجتمع</th>
                            </tr>
                            <tr>
                                <td><strong>التضامن الآلي</strong></td>
                                <td>تشابه الأفراد، ضعف التخصص</td>
                                <td>القانون الجزائي</td>
                                <td>المجتمعات التقليدية</td>
                            </tr>
                            <tr>
                                <td><strong>التضامن العضوي</strong></td>
                                <td>تمايز الأفراد، التخصص</td>
                                <td>القانون التعاقدي</td>
                                <td>المجتمعات الحديثة</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">النظرة البنيوية للأسرة</h3>
                        <p class="doc-p"><strong>يمثلها:</strong> كلود ليفي شتراوس</p>
                        
                        <h4 class="doc-h4>">نظرية القرابة عند ليفي شتراوس</h4>
                        <p class="doc-p"><strong>التبادل كأساس للأسرة:</strong></p>
                        <ul class="doc-ul">
                            <li><strong>تحريم زواج المحارم:</strong> يفرض التبادل مع العائلات الأخرى</li>
                            <li><strong>النساء كقيمة تبادلية:</strong> تبادل النساء بين العشائر</li>
                            <li><strong>القرابة كنظام:</strong> شبكة من العلاقات المنظمة</li>
                            <li><strong>البنية العميقة:</strong> القواعد الكامنة وراء أنظمة القرابة</li>
                        </ul>
                        
                        <h3 class="doc-h3">النظرة النقدية للأسرة</h3>
                        <p class="doc-p"><strong>يمثلها:</strong> فريدريك إنجلز</p>
                        
                        <h4 class="doc-h4">إنجلز وأصل الأسرة</h4>
                        <p class="doc-p"><strong>الأسرة والملكية الخاصة:</strong></p>
                        <div class="callout info">
                            <strong>مراحل تطور الأسرة عند إنجلز:</strong>
                            <br>1. <strong>الجماعية البدائية:</strong> شيوعية جنسية، لا أسرة
                            <br>2. <strong>الأسرة الجماعية:</strong> زواج جماعي داخل العشيرة
                            <br>3. <strong>الأسرة المقترنة:</strong> زوج وزوجة لكن سهولة الطلاق
                            <br>4. <strong>الأسرة الأبوية الأحادية:</strong> ظهور مع الملكية الخاصة
                            <br>5. <strong>الأسرة البورجوازية:</strong> قائمة على استغلال المرأة
                        </div>
                        
                        <h5 class="doc-h5">نقد إنجلز للأسرة البورجوازية:</h5>
                        <ol class="doc-ol">
                            <li><strong>قمع المرأة:</strong> تحولت إلى خادمة في البيت</li>
                            <li><strong>الوراثة:</strong> الأسرة تحافظ على نقل الملكية</li>
                            <li><strong>الاستغلال:</strong> الزواج عقد اقتصادي أكثر منه علاقة حب</li>
                            <li><strong>الملكية الخاصة:</strong> أساس قمع المرأة والأسرة الأحادية</li>
                        </ol>
                        
                        <h3 class="doc-h3">النظرة الإسلامية للأسرة</h3>
                        
                        <h4 class="doc-h4">مقاصد الأسرة في الإسلام</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>المقصد</th>
                                <th>التوضيح</th>
                                <th>الأدلة</th>
                            </tr>
                            <tr>
                                <td><strong>حفظ النسل</strong></td>
                                <td>استمرار النوع البشري</td>
                                <td>"وَاللَّهُ جَعَلَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا"</td>
                            </tr>
                            <tr>
                                <td><strong>حفظ الدين</strong></td>
                                <td>تربية الأبناء على القيم الإسلامية</td>
                                <td>"يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا"</td>
                            </tr>
                            <tr>
                                <td><strong>السكن النفسي</strong></td>
                                <td>الطمأنينة والاستقرار العاطفي</td>
                                <td>"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا"</td>
                            </tr>
                            <tr>
                                <td><strong>التعاون</strong></td>
                                <td>التكامل بين الزوجين</td>
                                <td>"وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ"</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">حقوق وواجبات أفراد الأسرة</h4>
                        <div class="callout important">
                            <strong>حقوق الزوجة:</strong>
                            <br>1. المهر 2. النفقة 3. المعاشرة بالمعروف 4. التعليم
                            <br><br>
                            <strong>حقوق الزوج:</strong>
                            <br>1. الطاعة في المعروف 2. حفظ الأسرار 3. خدمة البيت
                            <br><br>
                            <strong>حقوق الأولاد:</strong>
                            <br>1. الرضاعة 2. التربية 3. التعليم 4. العدل بينهم
                            <br><br>
                            <strong>حقوق الوالدين:</strong>
                            <br>1. البر والإحسان 2. الطاعة في غير معصية 3. الدعاء لهم
                        </div>
                    `
                }
            ],

            3: [
                { header: true, title: "الفصل الثالث: فلسفة العلوم والفن" },
                {
                    title: "1. فلسفة الرياضيات",
                    content: `
                        <h2 class="doc-h2">الإشكالية: ما هو أصل المعرفة الرياضية؟</h2>
                        
                        <h3 class="doc-h3">المذهب العقلاني في الرياضيات</h3>
                        <p class="doc-p"><strong>يمثله:</strong> أفلاطون، ديكارت، المدرسة الحدسية</p>
                        
                        <div class="callout important">
                            <strong>أفكار العقلانيين في الرياضيات:</strong>
                            <br>1. <strong>المبادئ الفطرية:</strong> المعرفة الرياضية فطرية في العقل
                            <br>2. <strong>اليقين العقلي:</strong> الرياضيات مثال اليقين المطلق
                            <br>3. <strong>المثل الأفلاطونية:</strong> الأفكار الرياضية موجودة في عالم المثل
                            <br>4. <strong>الاستنباط:</strong> البرهان الرياضي استنباطي صرف
                        </div>
                        
                        <h4 class="doc-h4">أفلاطون (427 ق.م - 347 ق.م)</h4>
                        <p class="doc-p"><strong>نظرية المثل:</strong></p>
                        <ul class="doc-ul">
                            <li><strong>عالم المثل:</strong> عالم حقيقي للأفكار المجردة</li>
                            <li><strong>عالم المحسوسات:</strong> عالم ظلال وزائف</li>
                            <li><strong>التذكر:</strong> المعرفة الرياضية تذكر لما رآه النفس في عالم المثل</li>
                            <li><strong>المثل الرياضية:</strong> المثلث، الدائرة، العدد... موجودة في عالم المثل</li>
                        </ul>
                        
                        <h5 class="doc-h5">شعار أكاديمية أفلاطون:</h5>
                        <div class="callout info">
                            <strong>"لا يدخل أحدٌ لا يعرف الهندسة"</strong>
                            <br>الرياضيات بوابة الفلسفة عند أفلاطون
                        </div>
                        
                        <h4 class="doc-h4">رينيه ديكارت</h4>
                        <p class="doc-p"><strong>النموذج الرياضي في الفلسفة:</strong></p>
                        <table class="detailed-table">
                            <tr>
                                <th>المجال</th>
                                <th>التطبيق</th>
                                <th>الهدف</th>
                            </tr>
                            <tr>
                                <td><strong>المنهج</strong></td>
                                <td>البديهيات، البراهين، التسلسل المنطقي</td>
                                <td>اليقين في المعرفة</td>
                            </tr>
                            <tr>
                                <td><strong>الجبر الهندسي</strong></td>
                                <td>ربط الجبر بالهندسة</td>
                                <td>توسيع مجال الرياضيات</td>
                            </tr>
                            <tr>
                                <td><strong>المبادئ الفطرية</strong></td>
                                <td>فكرة الله، الكوجيتو، البديهيات الرياضية</td>
                                <td>أسس المعرفة اليقينية</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">المذهب التجريبي في الرياضيات</h3>
                        <p class="doc-p"><strong>يمثله:</strong> جون ستيوارت ميل، المدرسة التجريبية الحديثة</p>
                        
                        <div class="callout info">
                            <strong>أفكار التجريبيين في الرياضيات:</strong>
                            <br>1. <strong>التجربة مصدر الرياضيات:</strong> الاستقراء من الواقع
                            <br>2. <strong>التعميم:</strong> القوانين الرياضية تعميمات من حالات جزئية
                            <br>3. <strong>الاحتمال:</strong> المعرفة الرياضية احتمالية لا يقينية
                            <br>4. <strong>النفعية:</strong> الرياضيات أداة لحل مشاكل الواقع
                        </div>
                        
                        <h4 class="doc-h4">جون ستيوارت ميل (1806-1873)</h4>
                        <p class="doc-p"><strong>الرياضيات تعميمات تجريبية:</strong></p>
                        <ul class="doc-ul">
                            <li><strong>الاستقراء:</strong> من حالات جزئية إلى قوانين عامة</li>
                            <li><strong>العدد:</strong> تجريد من مجموعات الأشياء المتشابهة</li>
                            <li><strong>الهندسة:</strong> تعميمات من ملاحظة الأشكال في الطبيعة</li>
                            <li><strong>الاحتمال:</strong> القوانين الرياضية احتمالية قابلة للتعديل</li>
                        </ul>
                        
                        <h3 class="doc-h3">المذهب الشكلي في الرياضيات</h3>
                        <p class="doc-p"><strong>يمثله:</strong> ديفيد هيلبرت، مدرسة الشكلية</p>
                        
                        <h4 class="doc-h4">ديفيد هيلبرت (1862-1943)</h4>
                        <p class="doc-p"><strong>الرياضيات لعبة رموز:</strong></p>
                        <div class="callout important">
                            <strong>أفكار هيلبرت:</strong>
                            <br>1. <strong>البديهيات افتراضات:</strong> ليست حقائق بل افتراضات
                            <br>2. <strong>الاتساق:</strong> المهم أن النظام الرياضي غير متناقض
                            <br>3. <strong>الاستقلالية:</strong> البديهيات مستقلة عن بعضها
                            <br>4. <strong>الكمال:</strong> كل عبارة في النظام قابلة للبرهان أو النفي
                            <br>5. <strong>المحتوى:</strong> الرموز الرياضية خالية من المحتوى
                        </div>
                        
                        <h3 class="doc-h3">نظرية غودل في عدم الاكتمال</h3>
                        <p class="doc-h4">كورت غودل (1906-1978)</h4>
                        
                        <div class="callout info">
                            <strong>نظريتان هامتان:</strong>
                            <br><strong>النظرية الأولى:</strong> أي نظام بديهي يحتوي على الحساب غير كامل
                            <br>• يوجد على الأقل عبارة صحيحة لا يمكن إثباتها داخل النظام
                            <br><br>
                            <strong>النظرية الثانية:</strong> اتساق النظام لا يمكن إثباته داخل النظام نفسه
                            <br>• يحتاج إلى نظام خارجي لإثبات اتساقه
                        </div>
                        
                        <h5 class="doc-h5">نتائج نظرية غودل:</h5>
                        <ol class="doc-ol">
                            <li><strong>حدود الرياضيات:</strong> هناك حدود للمعرفة الرياضية اليقينية</li>
                            <li><strong>نهاية الأحلام:</strong> نهاية حلم الرياضياتيين بالاكتمال</li>
                            <li><strong>اللايقين:</strong> الشك يدخل إلى قلب الرياضيات</li>
                            <li><strong>التأثير الفلسفي:</strong> إعادة النظر في قدرة العقل البشري</li>
                        </ol>
                    `
                },
                {
                    title: "2. فلسفة العلوم التجريبية",
                    content: `
                        <h2 class="doc-h2">الإشكالية: ما هو منهج العلم التجريبي؟</h2>
                        
                        <h3 class="doc-h3">المنهج الاستقرائي الكلاسيكي</h3>
                        <p class="doc-p"><strong>يمثله:</strong> فرنسيس بيكون، جون ستيوارت ميل</p>
                        
                        <div class="callout important">
                            <strong>مراحل المنهج الاستقرائي:</strong>
                            <br>1. <strong>الملاحظة:</strong> جمع البيانات والمشاهدات
                            <br>2. <strong>التجربة:</strong> اختبار الظاهرة في ظروف مضبوطة
                            <br>3. <strong>الفرضية:</strong> تفسير مؤقت للظاهرة
                            <br>4. <strong>التحقق:</strong> اختبار الفرضية بالتجارب
                            <br>5. <strong>القانون:</strong> تعميم النتائج في صيغة قانون
                        </div>
                        
                        <h4 class="doc-h4">فرنسيس بيكون (1561-1626)</h4>
                        <p class="doc-p"><strong>أب المنهج التجريبي الحديث:</strong></p>
                        
                        <h5 class="doc-h5">أصنام العقل عند بيكون:</h5>
                        <table class="detailed-table">
                            <tr>
                                <th>الصنم</th>
                                <th>التعريف</th>
                                <th>العلاج</th>
                            </tr>
                            <tr>
                                <td><strong>أصنام القبيلة</strong></td>
                                <td>أخطاء ناتجة عن طبيعة العقل البشري</td>
                                <td>الحيطة والحذر في الملاحظة</td>
                            </tr>
                            <tr>
                                <td><strong>أصنام الكهف</strong></td>
                                <td>أخطاء ناتجة عن تعليم الفرد وخبرته</td>
                                <td>الانفتاح على الآراء الأخرى</td>
                            </tr>
                            <tr>
                                <td><strong>أصنام السوق</strong></td>
                                <td>أخطاء ناتجة عن سوء استخدام اللغة</td>
                                <td>الدقة في استخدام المصطلحات</td>
                            </tr>
                            <tr>
                                <td><strong>أصنام المسرح</strong></td>
                                <td>أخطاء ناتجة عن الفلسفات الخاطئة</td>
                                <td>نقد المذاهب الفلسفية</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">المنهج الفرضي الاستنباطي</h3>
                        <p class="doc-p"><strong>يمثله:</strong> كارل بوبر</p>
                        
                        <h4 class="doc-h4">كارل بوبر (1902-1994)</h4>
                        <p class="doc-p"><strong>مشكل الاستقراء ونظرية التكذيب:</strong></p>
                        
                        <div class="callout info">
                            <strong>نقد بوبر للاستقراء:</strong>
                            <br>• لا يمكن الاستدلال من حالات جزئية إلى قانون عام
                            <br>• مهما كثرت المشاهدات المؤيدة، يمكن أن تأتي مشاهدات تكذب القانون
                            <br>• "جميع البجعات بيضاء" ← اكتشاف بجعة سوداء في أستراليا
                        </div>
                        
                        <h5 class="doc-h5">معيار القابلية للتكذيب عند بوبر:</h5>
                        <ul class="doc-ul">
                            <li><strong>العلمية:</strong> النظرية علمية إذا كانت قابلة للتكذيب</li>
                            <li><strong>اللاتكذيب:</strong> النظرية غير قابلة للتكذيب = غير علمية</li>
                            <li><strong>الماركسية والتحليل النفسي:</strong> غير علميين لأنهم لا يقبلون التكذيب</li>
                            <li><strong>النسبية:</strong> علمية لأنها تقبل التكذيب بالتجربة</li>
                        </ul>
                        
                        <h5 class="doc-h5">منهج بوبر الفرضي الاستنباطي:</h5>
                        <ol class="doc-ol">
                            <li><strong>المشكلة:</strong> وجود ظاهرة تحتاج تفسيرًا</li>
                            <li><strong>الفرضيات:</strong> وضع تفسيرات محتملة</li>
                            <li><strong>الاستنباط:</strong> استنباط نتائج من الفرضية</li>
                            <li><strong>التكذيب:</strong> محاولة تكذيب النتائج بالتجربة</li>
                            <li><strong>التقييم:</strong> قبول الفرضية أو رفضها أو تعديلها</li>
                        </ol>
                        
                        <h3 class="doc-h3">نظرية توماس كون في الثورات العلمية</h3>
                        <p class="doc-h4">توماس كون (1922-1996)</h4>
                        
                        <div class="callout important">
                            <strong>مفهوم البرادايم (Paradigm):</strong>
                            <br>النموذج الإرشادي السائد في فترة علمية معينة
                            <br>• يحدد المشاكل التي تستحق البحث
                            <br>• يحدد المنهج والأدوات المناسبة
                            <br>• يحدد معايير الحل المقبول
                        </div>
                        
                        <h5 class="doc-h5">مراحل تطور العلم عند كون:</h5>
                        <table class="detailed-table">
                            <tr>
                                <th>المرحلة</th>
                                <th>الوصف</th>
                                <th>المثال</th>
                            </tr>
                            <tr>
                                <td><strong>ما قبل العلم</strong></td>
                                <td>فوضى في النظريات والمناهج</td>
                                <td>علم الفلك قبل كوبرنيكوس</td>
                            </tr>
                            <tr>
                                <td><strong>العلم الطبيعي</strong></td>
                                <td>سيادة برادايم معين (Paradigm)</td>
                                <td>علم الفلك البطلمي</td>
                            </tr>
                            <tr>
                                <td><strong>الشذوذات</strong></td>
                                <td>ظهور مشاكل لا يحلها البرادايم</td>
                                <td>شذوذات في حركة المريخ</td>
                            </tr>
                            <tr>
                                <td><strong>الأزمة</strong></td>
                                <td>تراكم الشذوذات وتزايد الشك</td>
                                <td>أزمة الفلك البطلمي</td>
                            </tr>
                            <tr>
                                <td><strong>الثورة العلمية</strong></td>
                                <td>برادايم جديد يحل محل القديم</td>
                                <td>ثورة كوبرنيكوس</td>
                            </tr>
                            <tr>
                                <td><strong>العلم الجديد</strong></td>
                                <td>سيادة البرادايم الجديد</td>
                                <td>علم الفلك الكوبرنيكي</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "3. فلسفة الفن والجمال",
                    content: `
                        <h2 class="doc-h2">الإشكالية: ما هو الفن؟ وما معيار الجمال؟</h2>
                        
                        <h3 class="doc-h3">النظرية المحاكاة (المحاكاة في الفن)</h3>
                        <p class="doc-p"><strong>يمثلها:</strong> أفلاطون، أرسطو</p>
                        
                        <h4 class="doc-h4">أفلاطون ونقد الفن</h4>
                        <p class="doc-p"><strong>ثلاث درجات للمحاكاة:</strong></p>
                        <div class="callout info">
                            <strong>1. الفكرة (المثل):</strong> الحقيقة المطلقة في عالم المثل
                            <br><strong>2. الصنعة:</strong> محاكاة الفكرة في العالم المحسوس
                            <br><strong>3. الفن:</strong> محاكاة المحاكاة (بعدان عن الحقيقة)
                        </div>
                        
                        <h5 class="doc-h5">نقد أفلاطون للفن:</h5>
                        <ul class="doc-ul">
                            <li><strong>الكذب:</strong> الفن يعرض صورة زائفة عن الواقع</li>
                            <li><strong>التأثير العاطفي:</strong> يحرك المشاعر ويثير الشهوات</li>
                            <li><strong>الابتعاد عن الحقيقة:</strong> محاكاة المحاكاة (نسخة من نسخة)</li>
                            <li><strong>طرد الشعراء:</strong> من المدينة الفاضلة في "الجمهورية"</li>
                        </ul>
                        
                        <h4 class="doc-h4">أرسطو ودفاعه عن الفن</h4>
                        <p class="doc-p"><strong>نظرية التطهير (Catharsis):</strong></p>
                        
                        <table class="detailed-table">
                            <tr>
                                <th>المسرحية</th>
                                <th>العواطف</th>
                                <th>التطهير</th>
                                <th>الفائدة</th>
                            </tr>
                            <tr>
                                <td><strong>التراجيديا</strong></td>
                                <td>الخوف، الشفقة</td>
                                <td>تطهير النفس من هذه العواطف</td>
                                <td>الراحة النفسية، التعلم من الأخطاء</td>
                            </tr>
                            <tr>
                                <td><strong>الكوميديا</strong></td>
                                <td>الضحك، السخرية</td>
                                <td>تطهير النفس من السخرية المفرطة</td>
                                <td>التوازن النفسي، نقد العيوب</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">النظرية التعبيرية (الفن تعبير عن المشاعر)</h3>
                        <p class="doc-p"><strong>يمثلها:</strong> تولستوي، كروتشه</p>
                        
                        <h4 class="doc-h4">ليو تولستوي (1828-1910)</h4>
                        <p class="doc-p"><strong>نظرية العدوى في الفن:</strong></p>
                        <div class="callout important">
                            <strong>تعريف الفن عند تولستوي:</strong>
                            <br>"الفن هو نشاط إنساني يقوم على نقل المشاعر التي عاشها الفنان إلى المتلقي"
                            <br><br>
                            <strong>شروط الفن الحقيقي:</strong>
                            <br>1. <strong>الأصالة:</strong> المشاعر الحقيقية للفنان
                            <br>2. <strong>الوضوح:</strong> وضوح التعبير عن المشاعر
                            <br>3. <strong>الإخلاص:</strong> صدق الفنان في التعبير
                            <br>4. <strong>العدوى:</strong> قدرة العمل على نقل المشاعر للمتلقي
                        </div>
                        
                        <h3 class="doc-h3">النظرية الشكلية (الفن من أجل الفن)</h3>
                        <p class="doc-p"><strong>يمثلها:</strong> إيمانويل كانط، كليف بيل</p>
                        
                        <h4 class="doc-h4">إيمانويل كانط</h4>
                        <p class="doc-p"><strong>نظرية الجمال عند كانط:</strong></p>
                        
                        <h5 class="doc-h5">خصائص الحكم الجمالي عند كانط:</h5>
                        <table class="detailed-table">
                            <tr>
                                <th>الخاصية</th>
                                <th>التعريف</th>
                                <th>مثال</th>
                            </tr>
                            <tr>
                                <td><strong>اللاذاتية</strong></td>
                                <td>لا علاقة له بالرغبة أو المنفعة</td>
                                <td>تأمل لوحة دون الرغبة في امتلاكها</td>
                            </tr>
                            <tr>
                                <td><strong>الكلية</strong></td>
                                <td>يتوقع أن يوافقه الجميع</td>
                                <td>"هذه اللوحة جميلة" كحكم كلي</td>
                            </tr>
                            <tr>
                                <td><strong>الغائية بلا غاية</strong></td>
                                <td>الشيء الجميل يبدو وكأنه صنع لغاية لكنه ليس كذلك</td>
                                <td>زهرة تبدو وكأنها صممت للجمال</td>
                            </tr>
                            <tr>
                                <td><strong>الضرورة</strong></td>
                                <td>إلزامية الحكم الجمالي</td>
                                <td>يجب أن تجد هذا العمل جميلاً</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">النظرية المؤسساتية (الفن والمؤسسة الفنية)</h3>
                        <p class="doc-h4">جورج ديكي (1926)</h4>
                        
                        <div class="callout info">
                            <strong>نظرية العالم الفني:</strong>
                            <br>1. <strong>العمل الفني:</strong> شيء صنع ليُعرض أمام جمهور العالم الفني
                            <br>2. <strong>العالم الفني:</strong> المؤسسة الاجتماعية المكونة من:
                            <br>&nbsp;&nbsp;• الفنانين • النقاد • القيمين • الجامعين • الجمهور
                            <br>3. <strong>المنح الصفة:</strong> المؤسسة تمنح الصفة الفنية للعمل
                            <br>4. <strong>مرحاض دوشان:</strong> أصبح عملاً فنياً لأن المؤسسة الفنية قبلته
                        </div>
                        
                        <h3 class="doc-h3">الفن في الإسلام</h3>
                        
                        <h4 class="doc-h4">ضوابط الفن في الإسلام</h4>
                        <div class="callout important">
                            <strong>الضوابط العامة:</strong>
                            <br>1. <strong>عدم مخالفة العقيدة:</strong> تجسيد الذات الإلهية، الشرك
                            <br>2. <strong>عدم مخالفة الشريعة:</strong> التحريض على الفاحشة، الخمر
                            <br>3. <strong>عدم الإسراف والتبذير:</strong> الاعتدال في الإنفاق
                            <br>4. <strong>عدم الإضرار بالآخرين:</strong> الإساءة للغير، السب
                            <br>5. <strong>مراعاة الآداب العامة:</strong> الحياء، الحشمة، الأدب
                        </div>
                        
                        <h4 class="doc-h4">مجالات الفن الإسلامي</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>المجال</th>
                                <th>الخصائص</th>
                                <th>نماذج</th>
                            </tr>
                            <tr>
                                <td><strong>العمارة</strong></td>
                                <td>القباب، المآذن، الأفنية، الزخرفة الهندسية</td>
                                <td>المسجد الأموي، قصر الحمراء</td>
                            </tr>
                            <tr>
                                <td><strong>الخط العربي</strong></td>
                                <td>التجويد، الزخرفة، التنوع (الكوفي، النسخ...)</td>
                                <td>مصاحف مخطوطة، اللوحات الخطية</td>
                            </tr>
                            <tr>
                                <td><strong>التصوير</strong></td>
                                <td>المنمنمات، تجريد الشخصيات، الألوان الزاهية</td>
                                <td>مقامات الحريري، شاهنامة الفردوسي</td>
                            </tr>
                            <tr>
                                <td><strong>الموسيقى</strong></td>
                                <td>المقامات، الإيقاعات، الآلات (العود، الناي...)</td>
                                <td>الموسيقى الأندلسية، الموشحات</td>
                            </tr>
                            <tr>
                                <td><strong>الشعر</strong></td>
                                <td>الموشحات، المدائح النبوية، الزهد، التصوف</td>
                                <td>ابن الفارض، ابن عربي، البوصيري</td>
                            </tr>
                        </table>
                    `
                }
            ]
        }
    },

    // =================================================================
    // 3. التاريخ (شعبة الآداب)
    // =================================================================
    history: {
        title: "التاريخ",
        rtl: true,
        trimesters: {
            1: [
                { header: true, title: "الفصل الأول: العالم منذ 1945 إلى 1989" },
                {
                    title: "1. تشكل العالم بعد الحرب العالمية الثانية",
                    content: `
                        <h2 class="doc-h2">معايير تشكل العالم الجديد</h2>
                        
                        <h3 class="doc-h3">العوامل المؤثرة في تشكل العالم:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>العامل</th>
                                <th>التأثير</th>
                                <th>النتائج</th>
                            </tr>
                            <tr>
                                <td><strong>زوال الديكتاتوريات</strong></td>
                                <td>سقوط النازية والفاشية</td>
                                <td>انتشار الديمقراطية في أوروبا الغربية</td>
                            </tr>
                            <tr>
                                <td><strong>تراجع الاستعمار</strong></td>
                                <td>ضعف القوى الاستعمارية التقليدية</td>
                                <td>ظهور دول العالم الثالث</td>
                            </tr>
                            <tr>
                                <td><strong>الأمم المتحدة</strong></td>
                                <td>إنشاء منظمة دولية جديدة</td>
                                <td>نظام الأمن الجماعي، الإعلان العالمي لحقوق الإنسان</td>
                            </tr>
                            <tr>
                                <td><strong>مؤتمر بروتن وودز</strong></td>
                                <td>إنشاء نظام نقدي دولي جديد</td>
                                <td>الدولار عملة عالمية، صندوق النقد الدولي، البنك العالمي</td>
                            </tr>
                            <tr>
                                <td><strong>القطبية الثنائية</strong></td>
                                <td>ظهور قوتين عظميين</td>
                                <td>تقسيم العالم إلى معسكرين: شرقي وغربي</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">مؤتمر يالطا (فبراير 1945):</h3>
                        <div class="callout important">
                            <strong>الحضور:</strong> روزفلت (أمريكا)، ستالين (الاتحاد السوفييتي)، تشرشل (بريطانيا)
                            <br><strong>القرارات:</strong>
                            <br>1. تقسيم ألمانيا إلى 4 مناطق احتلال
                            <br>2. إنشاء الأمم المتحدة
                            <br>3. تحديد حدود بولندا
                            <br>4. دخول الاتحاد السوفييتي الحرب ضد اليابان
                        </div>
                        
                        <h3 class="doc-h3">مؤتمر بوتسدام (يوليو-أغسطس 1945):</h3>
                        <div class="callout info">
                            <strong>الحضور:</strong> ترومان (أمريكا)، ستالين (الاتحاد السوفييتي)، أتلي (بريطانيا)
                            <br><strong>القرارات:</strong>
                            <br>1. نزع سلاح ألمانيا وتجريم النازية
                            <br>2. محاكمة مجرمي الحرب في نورمبرغ
                            <br>3. دفع ألمانيا تعويضات للحلفاء
                            <br>4. ترسيم الحدود الألمانية-البولندية على خط أودر-نيسه
                        </div>
                    `
                },
                {
                    title: "2. الحرب الباردة: التعريف والمظاهر",
                    content: `
                        <h2 class="doc-h2">الحرب الباردة: صراع إيديولوجي غير مباشر</h2>
                        
                        <h3 class="doc-h3">تعريف الحرب الباردة:</h3>
                        <div class="callout important">
                            <strong>الحرب الباردة:</strong> صراع سياسي، اقتصادي، إيديولوجي، عسكري غير مباشر
                            <br>بين المعسكرين الشرقي (الاشتراكي) والغربي (الرأسمالي)
                            <br>من 1947 (مشروع مارشال) إلى 1991 (انهيار الاتحاد السوفييتي)
                        </div>
                        
                        <h3 class="doc-h3">خصائص الحرب الباردة:</h3>
                        <ol class="doc-ol">
                            <li><strong>عدم المواجهة المباشرة:</strong> تجنب الحرب المباشرة بين القوتين العظميين</li>
                            <li><strong>صراع بالوكالة:</strong> دعم الأنظمة المتحالفة في الصراعات المحلية</li>
                            <li><strong>سباق التسلح:</strong> تطوير الأسلحة التقليدية والنووية</li>
                            <li><strong>الحرب الإعلامية:</strong> الدعاية والتحريض عبر الإعلام</li>
                            <li><strong>الصراع الإيديولوجي:</strong> الاشتراكية مقابل الرأسمالية</li>
                            <li><strong>الاستخبارات والتجسس:</strong> الحرب السرية بين أجهزة المخابرات</li>
                        </ol>
                        
                        <h3 class="doc-h3">مظاهر الحرب الباردة:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>المجال</th>
                                <th>المعسكر الغربي</th>
                                <th>المعسكر الشرقي</th>
                            </tr>
                            <tr>
                                <td><strong>الاقتصاد</strong></td>
                                <td>اقتصاد السوق، الملكية الخاصة، الحرية الاقتصادية</td>
                                <td>اقتصاد مخطط، ملكية الدولة، المركزية</td>
                            </tr>
                            <tr>
                                <td><strong>السياسة</strong></td>
                                <td>الديمقراطية الليبرالية، التعددية الحزبية</td>
                                <td>ديكتاتورية البروليتاريا، الحزب الواحد</td>
                            </tr>
                            <tr>
                                <td><strong>المجتمع</strong></td>
                                <td>الفردية، الحرية الشخصية، الطبقية</td>
                                <td>الجماعية، المساواة الاجتماعية، اللاطبقية</td>
                            </tr>
                            <tr>
                                <td><strong>الثقافة</strong></td>
                                <td>حرية التعبير، الفن للفن، التعددية الثقافية</td>
                                <td>الفن الملتزم، الواقعية الاشتراكية، الرقابة</td>
                            </tr>
                            <tr>
                                <td><strong>العلاقات الدولية</strong></td>
                                <td>التبعية للولايات المتحدة، حلف الناتو</td>
                                <td>التبعية للاتحاد السوفييتي، حلف وارسو</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "3. الاستراتيجيات في الحرب الباردة",
                    content: `
                        <h2 class="doc-h2">استراتيجيات المعسكرين في الحرب الباردة</h2>
                        
                        <h3 class="doc-h3">استراتيجيات المعسكر الغربي:</h3>
                        
                        <h4 class="doc-h4">مبدأ ترومان (12 مارس 1947):</h4>
                        <div class="callout info">
                            <strong>السياق:</strong> التدخل السوفييتي في اليونان وتركيا
                            <br><strong>المحتوى:</strong> تقديم مساعدة عسكرية واقتصادية للدول المهددة بالشيوعية
                            <br><strong>الهدف:</strong> احتواء المد الشيوعي (Containment)
                            <br><strong>التطبيق:</strong> مساعدة اليونان وتركيا بمبلغ 400 مليون دولار
                        </div>
                        
                        <h4 class="doc-h4">مشروع مارشال (5 يونيو 1947):</h4>
                        <div class="callout important">
                            <strong>السياق:</strong> الدمار الاقتصادي في أوروبا بعد الحرب
                            <br><strong>المحتوى:</strong> برنامج مساعدات اقتصادية لأوروبا بقيمة 13 مليار دولار
                            <br><strong>الشروط:</strong> تحرير الاقتصاد، فتح الأسواق، محاربة الشيوعية
                            <br><strong>النتائج:</strong> انتعاش اقتصادي أوروبي، تقوية النفوذ الأمريكي
                        </div>
                        
                        <h4 class="doc-h4">حلف الناتو (4 أبريل 1949):</h4>
                        <ul class="doc-ul">
                            <li><strong>الاسم:</strong> منظمة حلف شمال الأطلسي (NATO)</li>
                            <li><strong>الأعضاء المؤسسون:</strong> 12 دولة (أمريكا، كندا، دول أوروبا الغربية)</li>
                            <li><strong>المادة 5:</strong> هجوم على واحد يعتبر هجومًا على الجميع</li>
                            <li><strong>الهدف:</strong> مواجهة التهديد السوفييتي، حماية أوروبا الغربية</li>
                        </ul>
                        
                        <h3 class="doc-h3">استراتيجيات المعسكر الشرقي:</h3>
                        
                        <h4 class="doc-h4">مبدأ جدانوف (سبتمبر 1947):</h4>
                        <div class="callout info">
                            <strong>السياق:</strong> ردا على مشروع مارشال ومبدأ ترومان
                            <br><strong>المحتوى:</strong> تقسيم العالم إلى معسكرين:
                            <br>• <strong>معسكر الإمبريالية:</strong> بقيادة الولايات المتحدة
                            <br>• <strong>معسكر الديمقراطية:</strong> بقيادة الاتحاد السوفييتي
                            <br><strong>الهدف:</strong> تعزيز الوحدة الشيوعية، محاربة النفوذ الأمريكي
                        </div>
                        
                        <h4 class="doc-h4">منظمة الكوميكون (1949):</h4>
                        <ul class="doc-ul">
                            <li><strong>الاسم:</strong> مجلس التعاون الاقتصادي المتبادل</li>
                            <li><strong>الأعضاء:</strong> الاتحاد السوفييتي وبلدان أوروبا الشرقية</li>
                            <li><strong>الهدف:</strong> التكامل الاقتصادي بين الدول الشيوعية</li>
                            <li><strong>المبادئ:</strong> التخطيط المركزي، التخصص، التبادل التجاري</li>
                            <li><strong>النتائج:</strong> تبعية اقتصادية للاتحاد السوفييتي</li>
                        </ul>
                        
                        <h4 class="doc-h4">حلف وارسو (14 مايو 1955):</h4>
                        <div class="callout important">
                            <strong>السياق:</strong> ردا على انضمام ألمانيا الغربية إلى الناتو
                            <br><strong>الأعضاء:</strong> الاتحاد السوفييتي و7 دول أوروبية شرقية
                            <br><strong>الهيكل:</strong> القيادة السوفييتية، القوات المشتركة
                            <br><strong>الهدف:</strong> مواجهة حلف الناتو، السيطرة على أوروبا الشرقية
                            <br><strong>النهاية:</strong> حُلَّ عام 1991 بعد انهيار الاتحاد السوفييتي
                        </div>
                    `
                },
                {
                    title: "4. أزمات الحرب الباردة",
                    content: `
                        <h2 class="doc-h2">الأزمات الكبرى في الحرب الباردة</h2>
                        
                        <h3 class="doc-h3">1. أزمة برلين (1948-1949)</h3>
                        <div class="callout info">
                            <strong>السياق:</strong> تقسيم ألمانيا وبرلين إلى 4 قطاعات
                            <br><strong>السبب:</strong> إصلاح العملة في القطاعات الغربية
                            <br><strong>رد الاتحاد السوفييتي:</strong> حصار برلين الغربية (يونيو 1948)
                            <br><strong>رد الولايات المتحدة:</strong> الجسر الجوي (11 شهرًا، 275000 رحلة)
                            <br><strong>النتائج:</strong>
                            <br>• فك الحصار في مايو 1949
                            <br>• تأسيس ألمانيا الغربية (الجمهورية الاتحادية)
                            <br>• تأسيس ألمانيا الشرقية (الجمهورية الديمقراطية)
                            <br>• بناء سور برلين عام 1961
                        </div>
                        
                        <h3 class="doc-h3">2. الحرب الكورية (1950-1953)</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>الجانب</th>
                                <th>كوريا الشمالية</th>
                                <th>كوريا الجنوبية</th>
                            </tr>
                            <tr>
                                <td><strong>النظام</strong></td>
                                <td>شيوعي (كيم إيل سونغ)</td>
                                <td>رأسمالي (سيونغمان ري)</td>
                            </tr>
                            <tr>
                                <td><strong>الداعم</strong></td>
                                <td>الاتحاد السوفييتي، الصين</td>
                                <td>الولايات المتحدة، الأمم المتحدة</td>
                            </tr>
                            <tr>
                                <td><strong>بداية الحرب</strong></td>
                                <td colspan="2">25 يونيو 1950: غزو كوريا الشمالية للجنوبية</td>
                            </tr>
                            <tr>
                                <td><strong>التدخل</strong></td>
                                <td>الصين (أكتوبر 1950)</td>
                                <td>الأمم المتحدة بقيادة أمريكا</td>
                            </tr>
                            <tr>
                                <td><strong>النتيجة</strong></td>
                                <td colspan="2">هدنة بانمونجوم (27 يوليو 1953) - التقسيم في خط 38</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">3. أزمة السويس (1956)</h3>
                        <div class="callout important">
                            <strong>السياق:</strong> تأميم جمال عبد الناصر لقناة السويس (26 يوليو 1956)
                            <br><strong>التحالف الثلاثي:</strong> بريطانيا، فرنسا، إسرائيل
                            <br><strong>الهجوم:</strong> 29 أكتوبر 1956 (إسرائيل) ثم 31 أكتوبر (بريطانيا وفرنسا)
                            <br><strong>الموقف الدولي:</strong>
                            <br>• <strong>الولايات المتحدة:</strong> رفضت العدوان وطالبت بالانسحاب
                            <br>• <strong>الاتحاد السوفييتي:</strong> هدد باستخدام الصواريخ النووية
                            <br>• <strong>الأمم المتحدة:</strong> قرار بوقف إطلاق النار وإرسال قوات طوارئ
                            <br><strong>النتائج:</strong>
                            <br>• انتصار دبلوماسي لمصر
                            <br>• تراجع نفوذ بريطانيا وفرنسا
                            <br>• صعود نجم عبد الناصر في العالم العربي
                        </div>
                        
                        <h3 class="doc-h3">4. أزمة الصواريخ الكوبية (1962)</h3>
                        <div class="callout info">
                            <strong>السياق:</strong> الثورة الكوبية (1959) وتحالف كاسترو مع الاتحاد السوفييتي
                            <br><strong>الكشف:</strong> طائرات تجسس أمريكية تكتشف منصات صواريخ سوفييتية في كوبا (14 أكتوبر 1962)
                            <br><strong>رد كينيدي:</strong> حظر بحري على كوبا (22 أكتوبر)، تهديد بغزو
                            <br><strong>المواجهة:</strong> 13 يوما من التوتر الشديد، خطر الحرب النووية
                            <br><strong>الحل:</strong> وساطة الأمين العام للأمم المتحدة يو ثانت
                            <br><strong>الاتفاق:</strong>
                            <br>• الاتحاد السوفييتي يسحب الصواريخ من كوبا
                            <br>• الولايات المتحدة تتعهد بعدم غزو كوبا
                            <br>• الولايات المتحدة تسحب صواريخها من تركيا (سرًا)
                            <br><strong>النتائج:</strong>
                            <br>• تجنب الحرب النووية
                            <br>• إنشاء الخط الساخن بين موسكو وواشنطن
                            <br>• بداية الانفراج الدولي
                        </div>
                    `
                },
                {
                    title: "5. مرحلة الانفراج الدولي",
                    content: `
                        <h2 class="doc-h2">من الحرب الباردة إلى التعايش السلمي</h2>
                        
                        <h3 class="doc-h3">أسباب الانفراج:</h3>
                        <ol class="doc-ol">
                            <li><strong>توازن الرعب النووي:</strong> القدرة على تدمير بعضهما البعض</li>
                            <li><strong>أزمة الصواريخ الكوبية:</strong> أدرك الطرفان خطر المواجهة المباشرة</li>
                            <li><strong>المشاكل الداخلية:</strong> لكل قوة مشاكلها الاقتصادية والاجتماعية</li>
                            <li><strong>صعود قوى جديدة:</strong> الصين، أوروبا الموحدة، العالم الثالث</li>
                            <li><strong>حركات السلام:</strong> ضغط الرأي العام العالمي ضد الحرب</li>
                        </ol>
                        
                        <h3 class="doc-h3">مظاهر الانفراج:</h3>
                        
                        <h4 class="doc-h4">الاتفاقيات الأميركية-السوفييتية:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>الاتفاقية</th>
                                <th>التاريخ</th>
                                <th>المحتوى</th>
                                <th>الأهمية</th>
                            </tr>
                            <tr>
                                <td><strong>معاهدة الحد من التجارب النووية</strong></td>
                                <td>1963</td>
                                <td>حظر التجارب النووية في الجو والفضاء وتحت الماء</td>
                                <td>أول اتفاق نووي بين القوتين</td>
                            </tr>
                            <tr>
                                <td><strong>معاهدة الحد من الأسلحة الاستراتيجية (سالت 1)</strong></td>
                                <td>1972</td>
                                <td>تجميد عدد الرؤوس النووية، الحد من الصواريخ</td>
                                <td>أول اتفاق للحد من التسلح النووي</td>
                            </tr>
                            <tr>
                                <td><strong>اتفاقية هلسنكي</strong></td>
                                <td>1975</td>
                                <td>تأكيد الحدود الأوروبية، التعاون الاقتصادي، حقوق الإنسان</td>
                                <td>تثبيت نتائج الحرب العالمية الثانية</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">سياسة الوفاق (Détente):</h4>
                        <div class="callout important">
                            <strong>تعريف:</strong> سياسة التخفيف من حدة التوتر بين القوتين
                            <br><strong>مظاهرها:</strong>
                            <br>1. <strong>الحوار بدل المواجهة:</strong> القمم الأميركية-السوفييتية
                            <br>2. <strong>التعاون الاقتصادي:</strong> استيراد القمح السوفييتي من أمريكا
                            <br>3. <strong>التعاون العلمي:</strong> مشروع أبولو-سويوز الفضائي المشترك
                            <br>4. <strong>حل النزاعات بالتفاوض:</strong> مؤتمر جنيف حول الشرق الأوسط
                        </div>
                        
                        <h3 class="doc-h3">حدود الانفراج:</h3>
                        <div class="callout info">
                            <strong>الانفراج لم يلغ الصراع:</strong>
                            <br>• <strong>حرب فيتنام:</strong> استمرت حتى 1975
                            <br>• <strong>الحرب الأفغانية:</strong> تدخل سوفييتي عام 1979
                            <br>• <strong>حرب النجوم:</strong> مبادرة الدفاع الاستراتيجي الأمريكية 1983
                            <br>• <strong>الصراع بالوكالة:</strong> استمر في إفريقيا وأمريكا اللاتينية
                            <br>• <strong>أزمة الصواريخ الأوروبية:</strong> نشر صواريخ بيرشينغ الأمريكية في أوروبا
                        </div>
                    `
                },
                {
                    title: "6. نهاية الحرب الباردة والنظام الدولي الجديد",
                    content: `
                        <h2 class="doc-h2">انهيار المعسكر الشرقي وظهور الأحادية القطبية</h2>
                        
                        <h3 class="doc-h3">أسباب انهيار الاتحاد السوفييتي:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>المجال</th>
                                <th>المشاكل</th>
                                <th>التأثير</th>
                            </tr>
                            <tr>
                                <td><strong>الاقتصادي</strong></td>
                                <td>التخلف التكنولوجي، انخفاض الإنتاج، التخطيط الفاشل، العجز الغذائي</td>
                                <td>انخفاض مستوى المعيشة، نقص السلع الأساسية</td>
                            </tr>
                            <tr>
                                <td><strong>السياسي</strong></td>
                                <td>تصلب النظام، غياب الديمقراطية، فساد النخبة، بيروقراطية خانقة</td>
                                <td>انفصال النخبة عن الشعب، فقدان الشرعية</td>
                            </tr>
                            <tr>
                                <td><strong>العسكري</strong></td>
                                <td>سباق التسلح المكلف، الحرب الأفغانية الباهظة</td>
                                <td>إنهاك الاقتصاد، خسائر بشرية ومادية</td>
                            </tr>
                            <tr>
                                <td><strong>الداخلي</strong></td>
                                <td>المشاكل القومية، رغبة الجمهوريات في الاستقلال</td>
                                <td>تزايد المطالبة بالانفصال، التمردات</td>
                            </tr>
                            <tr>
                                <td><strong>الخارجي</strong></td>
                                <td>ضغوط ريغان (حرب النجوم)، نجاح النموذج الغربي</td>
                                <td>عجز عن مجاراة التطور التكنولوجي الغربي</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">البيريسترويكا والغلاسنوست:</h3>
                        
                        <h4 class="doc-h4">ميخائيل غورباتشوف (1985-1991)</h4>
                        <div class="callout important">
                            <strong>الإصلاحات:</strong>
                            <br>1. <strong>البيريسترويكا (إعادة الهيكلة):</strong> إصلاحات اقتصادية (اللامركزية، السماح بالمشاريع الخاصة)
                            <br>2. <strong>الغلاسنوست (الشفافية):</strong> حرية التعبير، نقد النظام، إصلاحات سياسية
                            <br>3. <strong>السياسة الخارجية:</strong> إنهاء الحرب الباردة، الانسحاب من أفغانستان
                            <br><strong>النتائج غير المتوقعة:</strong>
                            <br>• تفاقم الأزمة الاقتصادية
                            <br>• تفجر المشاكل القومية
                            <br>• فقدان السيطرة على أوروبا الشرقية
                            <br>• انهيار النظام الشيوعي
                        </div>
                        
                        <h3 class="doc-h3">أحداث انهيار المعسكر الشرقي:</h3>
                        
                        <h4 class="doc-h4">سقوط جدار برلين (9 نوفمبر 1989):</h4>
                        <div class="callout info">
                            <strong>السياق:</strong> الاحتجاجات في ألمانيا الشرقية، هروب الألمان الشرقيين عبر المجر
                            <br><strong>الحدث:</strong> إعلان فتح الحدود مع ألمانيا الغربية
                            <br><strong>المشهد التاريخي:</strong> الألمان من الشرق والغرب يهدمون الجدار معًا
                            <br><strong>الرمزية:</strong> نهاية الحرب الباردة، انهيار الشيوعية
                            <br><strong>النتيجة:</strong> إعادة توحيد ألمانيا (3 أكتوبر 1990)
                        </div>
                        
                        <h4 class="doc-h4">تفكك الاتحاد السوفييتي (1991):</h4>
                        <ul class="doc-ul">
                            <li><strong>محاولة الانقلاب:</strong> أغسطس 1991 (المحافظون ضد غورباتشوف)</li>
                            <li><strong>دور يلتسين:</strong> يقود المقاومة ضد الانقلاب</li>
                            <li><strong>تفكك الجمهوريات:</strong> إعلان الاستقلال تباعًا</li>
                            <li><strong>اتفاقية بيلوفيجسكايا:</strong> 8 ديسمبر 1991 (روسيا، أوكرانيا، بيلاروسيا)</li>
                            <li><strong>نهاية الاتحاد السوفييتي:</strong> 26 ديسمبر 1991</li>
                            <li><strong>إنشاء رابطة الدول المستقلة:</strong> بديل للاتحاد السوفييتي</li>
                        </ul>
                        
                        <h3 class="doc-h3">خصائص النظام الدولي الجديد:</h3>
                        <div class="callout important">
                            <strong>1. الأحادية القطبية:</strong> هيمنة الولايات المتحدة كقوة عظمى وحيدة
                            <br><strong>2. العولمة:</strong> تكامل الأسواق، حرية تنقل الأموال والبضائع والمعلومات
                            <br><strong>3. هيمنة النموذج الليبرالي:</strong> الديمقراطية، اقتصاد السوق، حقوق الإنسان
                            <br><strong>4. صعود المنظمات الدولية:</strong> الأمم المتحدة، منظمة التجارة العالمية، صندوق النقد
                            <br><strong>5. تحولات جيوسياسية:</strong> ظهور قوى إقليمية جديدة (الصين، الاتحاد الأوروبي)
                            <br><strong>6. تحديات جديدة:</strong> الإرهاب الدولي، الأزمات البيئية، الهجرة
                        </div>
                    `
                }
            ],

            2: [
                { header: true, title: "الفصل الثاني: الثورة التحريرية الجزائرية (1954-1962)" },
                {
                    title: "1. التحضير للثورة التحريرية",
                    content: `
                        <h2 class="doc-h2">المسار نحو الثورة: من المطالبة إلى العمل المسلح</h2>
                        
                        <h3 class="doc-h3">السياق التاريخي بعد الحرب العالمية الثانية:</h3>
                        <div class="callout important">
                            <strong>تغير الظروف الدولية:</strong>
                            <br>• ميثاق الأطلسي (1941): حق الشعوب في تقرير المصير
                            <br>• إنشاء الأمم المتحدة (1945): دعم حق تقرير المصير
                            <br>• تصاعد حركات التحرر في العالم الثالث
                            <br>• تراجع القوى الاستعمارية التقليدية
                        </div>
                        
                        <h3 class="doc-h3">مجازر 8 مايو 1945:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>المكان</th>
                                <th>الأحداث</th>
                                <th>الضحايا</th>
                                <th>الدلالة</th>
                            </tr>
                            <tr>
                                <td><strong>سطيف</strong></td>
                                <td>مظاهرة سلمية تحولت إلى مجزرة</td>
                                <td>آلاف الشهداء</td>
                                <td>نقطة تحول في النضال الجزائري</td>
                            </tr>
                            <tr>
                                <td><strong>قالمة</strong></td>
                                <td>قمع دموي للمتظاهرين</td>
                                <td>مئات القتلى</td>
                                <td>تأكد أن فرنسا لا تفهم إلا لغة القوة</td>
                            </tr>
                            <tr>
                                <td><strong>خراطة</strong></td>
                                <td>هجمات انتقامية وقمع وحشي</td>
                                <td>مجازر جماعية</td>
                                <td>زعزعة الثقة في الحلول السلمية</td>
                            </tr>
                        </table>
                        
                        <div class="callout info">
                            <strong>نتائج مجازر 8 مايو:</strong>
                            <br>1. <strong>قطيعة كاملة:</strong> بين الشعب الجزائري والاستعمار الفرنسي
                            <br>2. <strong>إقناع الشباب:</strong> بضرورة العمل المسلح
                            <br>3. <strong>تحضير الأرضية:</strong> للثورة التحريرية
                            <br>4. <strong>تدويل القضية:</strong> فضح الجرائم الفرنسية دوليًا
                        </div>
                        
                        <h3 class="doc-h3">المنظمة الخاصة (1947):</h3>
                        <ul class="doc-ul">
                            <li><strong>التأسيس:</strong> من قبل حركة انتصار الحريات الديمقراطية</li>
                            <li><strong>الهدف:</strong> الإعداد العسكري للثورة المسلحة</li>
                            <li><strong>القيادة:</strong> محمد بلوزداد (أول قائد)</li>
                            <li><strong>الانكشاف:</strong> اكتشافها من قبل الاستعمار عام 1950</li>
                            <li><strong>الأهمية:</strong> مدرسة عسكرية شكلت النواة الأولى لجيش التحرير</li>
                        </ul>
                        
                        <h3 class="doc-h3">أزمة حركة انتصار الحريات الديمقراطية (1953-1954):</h3>
                        <div class="callout important">
                            <strong>الانقسام:</strong>
                            <br>• <strong>المركزيون:</strong> بقيادة مصالي الحجج (يؤيدون الكفاح السياسي)
                            <br>• <strong>المصاليون:</strong> مؤيدو مصالي الحجج
                            <br>• <strong>المركزيون المعارضون:</strong> بقيادة بن بلة وآيت أحمد (يؤيدون الكفاح المسلح)
                            <br><strong>مؤتمر هورنو (يوليو 1954):</strong> فشل في حل الأزمة
                            <br><strong>النتيجة:</strong> تأسيس اللجنة الثورية للوحدة والعمل (CRUA)
                        </div>
                        
                        <h3 class="doc-h3">اللجنة الثورية للوحدة والعمل (CRUA):</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>التأسيس</th>
                                <th>الأعضاء</th>
                                <th>المهام</th>
                                <th>النتائج</th>
                            </tr>
                            <tr>
                                <td>مارس 1954</td>
                                <td>22 عضوا (مجموعة الـ22 التاريخية)</td>
                                <td>• التحضير للثورة المسلحة<br>• توحيد الصفوف<br>• الإعداد اللوجستي</td>
                                <td>• توحيد الجهود<br>• تحديد تاريخ الثورة<br>• تشكيل القيادة</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">اجتماع الـ22 التاريخي (25 جوان 1954):</h4>
                        <div class="callout info">
                            <strong>المكان:</strong> منزل إلياس دريش بالجزائر العاصمة
                            <br><strong>القرارات:</strong>
                            <br>1. الشروع في الكفاح المسلح
                            <br>2. تحديد تاريخ اندلاع الثورة (1 نوفمبر 1954)
                            <br>3. تقسيم الجزائر إلى 5 ولايات
                            <br>4. تشكيل القيادة (مصطفى بن بولعيد، ديدوش مراد، كريم بلقاسم، رابح بيطاط، محمد بوضياف)
                        </div>
                        
                        <h4 class="doc-h4">اجتماع الـ6 (23 أكتوبر 1954):</h4>
                        <ul class="doc-ul">
                            <li><strong>المكان:</strong> منزل مراد بوقشورة في بونت بيسكاد (الجزائر العاصمة)</li>
                            <li><strong>الحضور:</strong> مصطفى بن بولعيد، ديدوش مراد، كريم بلقاسم، رابح بيطاط، محمد بوضياف، العربي بن مهيدي</li>
                            <li><strong>القرارات:</strong>
                                <ul>
                                    <li>تحديد ساعة الصفر: منتصف ليلة 31 أكتوبر إلى 1 نوفمبر</li>
                                    <li>توزيع بيان أول نوفمبر على الولايات</li>
                                    <li>تسمية الحركة: جبهة التحرير الوطني (FLN)</li>
                                    <li>تسمية الجيش: جيش التحرير الوطني (ALN)</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                {
                    title: "2. اندلاع الثورة التحريرية",
                    content: `
                        <h2 class="doc-h2">ليلة أول نوفمبر 1954: بداية النهاية للاستعمار الفرنسي</h2>
                        
                        <h3 class="doc-h3">بيان أول نوفمبر 1954:</h3>
                        <div class="callout important">
                            <strong>أهمية البيان:</strong> الوثيقة التأسيسية للثورة الجزائرية
                            <br><strong>محاور البيان:</strong>
                            <br>1. <strong>التمهيد:</strong> شرح أسباب اللجوء إلى الكفاح المسلح
                            <br>2. <strong>الأهداف:</strong> الاستقلال الوطني، السيادة الشعبية، الدولة الجزائرية
                            <br>3. <strong>الوسائل:</strong> الكفاح المسلح، العمل السياسي، النضال الدولي
                            <br>4. <strong>التوجهات:</strong> الدعوة إلى الوحدة الوطنية، نبذ العنف الداخلي
                            <br>5. <strong>النداءات:</strong> للشعب الجزائري، للفرنسيين، للعالم العربي والإسلامي، للعالم الحر
                        </div>
                        
                        <h4 class="doc-h4">مقتطفات من البيان:</h4>
                        <blockquote class="doc-quote">
                            "أيها الشعب الجزائري،
                            <br>أيها المناضلون من أجل القضية الوطنية،
                            <br>أنتم الذين ستصدرون حكمكم بشأننا - نعني الشعب بصفة عامة، والمناضلين بصفة خاصة -
                            <br>نعلمكم أن غرضنا من نشر هذا الإعلان هو أن نوضح لك الأسباب العميقة التي دفعتنا إلى العمل...
                            <br>إننا نعتبر، بعد هذه الاعتبارات كلها، أن فرنسا قد أغلقت جميع الأبواب التي تؤدي إلى التفاهم...
                            <br>ولذلك فإن الحركة الوطنية... قد قررت أن تشرع في الكفاح المسلح..."
                        </blockquote>
                        
                        <h3 class="doc-h3">الهجومات المتزامنة ليلة 1 نوفمبر 1954:</h3>
                        
                        <h4 class="doc-h4">الولايات الخمس وتوزيع الهجومات:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>الولاية</th>
                                <th>المنطقة</th>
                                <th>القائد</th>
                                <th>أهم الهجومات</th>
                            </tr>
                            <tr>
                                <td><strong>الولاية الأولى</strong></td>
                                <td>الأوراس</td>
                                <td>مصطفى بن بولعيد</td>
                                <td>باتنة، خنشلة، تبسة، سوق أهراس</td>
                            </tr>
                            <tr>
                                <td><strong>الولاية الثانية</strong></td>
                                <td>الشمال القسنطيني</td>
                                <td>ديدوش مراد</td>
                                <td>سطيف، قالمة، جيجل، عنابة</td>
                            </tr>
                            <tr>
                                <td><strong>الولاية الثالثة</strong></td>
                                <td>القبائل</td>
                                <td>كريم بلقاسم</td>
                                <td>تيزي وزو، بجاية، البويرة</td>
                            </tr>
                            <tr>
                                <td><strong>الولاية الرابعة</strong></td>
                                <td>الجزائر العاصمة</td>
                                <td>رابح بيطاط</td>
                                <td>العاصمة، المدية، الشلف</td>
                            </tr>
                            <tr>
                                <td><strong>الولاية الخامسة</strong></td>
                                <td>الغرب الجزائري</td>
                                <td>محمد العربي بن مهيدي</td>
                                <td>وهران، تلمسان، سيدي بلعباس</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">طبيعة الهجومات:</h4>
                        <div class="callout info">
                            <strong>الأهداف:</strong>
                            <br>1. المراكز العسكرية والثكنات
                            <br>2. مراكز الشرطة والدرك
                            <br>3. المخازن والمستودعات
                            <br>4. خطوط المواصلات والاتصالات
                            <br><br>
                            <strong>الخصائص:</strong>
                            <br>• التزامن في التوقيت (منتصف الليل)
                            <br>• الانتشار الجغرافي الواسع
                            <br>• المفاجأة التكتيكية
                            <br>• الرمزية السياسية (إعلان الثورة للعالم)
                        </div>
                        
                        <h3 class="doc-h3">ردود الفعل على اندلاع الثورة:</h3>
                        
                        <h4 class="doc-h4">رد الفعل الفرنسي:</h4>
                        <ul class="doc-ul">
                            <li><strong>الاستهانة:</strong> وصفها بالعمليات الإرهابية المعزولة</li>
                            <li><strong>القمع:</strong> إرسال تعزيزات عسكرية، اعتقالات جماعية</li>
                            <li><strong>الإجراءات السياسية:</strong> إقالة الحاكم العام روجيه ليونارد</li>
                            <li><strong>الخطاب الرسمي:</strong> تأكيد أن "الجزائر فرنسية"</li>
                        </ul>
                        
                        <h4 class="doc-h4">رد الفعل الجزائري:</h4>
                        <div class="callout important">
                            <strong>الشعب:</strong> تفاوت في ردود الفعل بين التأييد والترقب
                            <br><strong>الحركة الوطنية:</strong>
                            <br>• <strong>جبهة التحرير الوطني:</strong> تأييد كامل
                            <br>• <strong>حزب الشعب/حركة الانتصار:</strong> انقسام بين التأييد والمعارضة
                            <br>• <strong>الاتحاد الديمقراطي للبيان الجزائري:</strong> تحفظ في البداية ثم تأييد
                            <br>• <strong>جمعية العلماء المسلمين:</strong> تأييد ودعم معنوي
                            <br><strong>الانضمام التدريجي:</strong> انضمام معظم الفصائل إلى الثورة مع مرور الوقت
                        </div>
                        
                        <h4 class="doc-h4">رد الفعل الدولي:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>الدولة/المنظمة</th>
                                <th>الموقف</th>
                                <th>التفاصيل</th>
                            </tr>
                            <tr>
                                <td><strong>الولايات المتحدة</strong></td>
                                <td>محايد في البداية</td>
                                <td>دعم فرنسا كحليف في الناتو، لكن مع تعاطف مع حق تقرير المصير</td>
                            </tr>
                            <tr>
                                <td><strong>الاتحاد السوفييتي</strong></td>
                                <td>مساند</td>
                                <td>تأييد حركات التحرر، دعم في الأمم المتحدة</td>
                            </tr>
                            <tr>
                                <td><strong>الدول العربية</strong></td>
                                <td>مساند بقوة</td>
                                <td>دعم سياسي ومادي، استضافة ممثليات جبهة التحرير</td>
                            </tr>
                            <tr>
                                <td><strong>الأمم المتحدة</strong></td>
                                <td>جدول القضية</td>
                                <td>إدراج القضية الجزائرية في جدول الأعمال عام 1955</td>
                            </tr>
                            <tr>
                                <td><strong>حركة عدم الانحياز</strong></td>
                                <td>مساند بقوة</td>
                                <td>اعتبار القضية الجزائرية قضية تحرر وطنية</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "3. هجومات الشمال القسنطيني (20 أوت 1955)",
                    content: `
                        <h2 class="doc-h2">زيغود يوسف وتدويل القضية الجزائرية</h2>
                        
                        <h3 class="doc-h3">السياق التاريخي:</h3>
                        <div class="callout important">
                            <strong>بعد 9 أشهر من الثورة:</strong>
                            <br>• الثورة تواجه صعوبات في الانتشار
                            <br>• الحصار الفرنسي على منطقة الأوراس
                            <br>• استشهاد ديدوش مراد (قائد الولاية الثانية)
                            <br>• تعيين زيغود يوسف قائدًا للولاية الثانية
                            <br><strong>أهداف الهجومات:</strong>
                            <br>1. فك الحصار عن الأوراس
                            <br>2. توسيع رقعة الثورة
                            <br>3. تدويل القضية الجزائرية
                            <br>4. إقناع الشكاكن بانضمامهم للثورة
                        </div>
                        
                        <h3 class="doc-h3">التخطيط والتحضير:</h3>
                        
                        <h4 class="doc-h4">زيغود يوسف (1921-1956):</h4>
                        <ul class="doc-ul">
                            <li><strong>الميلاد:</strong> 18 فبراير 1921 في سمندو (قالمة)</li>
                            <li><strong>النشاط النقابي:</strong> عضو في نقابة عمال المناجم</li>
                            <li><strong>النضال السياسي:</strong> عضو في حركة انتصار الحريات الديمقراطية</li>
                            <li><strong>الانضمام للثورة:</strong> منذ اليوم الأول</li>
                            <li><strong>التعيين:</strong> قائدًا للولاية الثانية بعد استشهاد ديدوش مراد</li>
                            <li><strong>الشهادة:</strong> 25 سبتمبر 1956 في سيدي مزغيش</li>
                        </ul>
                        
                        <h4 class="doc-h4">خطة الهجومات:</h4>
                        <div class="callout info">
                            <strong>التاريخ:</strong> 20 أغسطس 1955 (الذكرى الثانية لنفي الملك محمد الخامس)
                            <br><strong>المناطق المستهدفة:</strong> كل مدن وقرى الشمال القسنطيني
                            <br><strong>القوات المشاركة:</strong> حوالي 3000 مجاهد
                            <br><strong>طبيعة الهجومات:</strong>
                            <br>• هجومات واسعة النطاق ومتزامنة
                            <br>• مشاركة شعبية واسعة
                            <br>• استهداف المصالح الفرنسية والمتعاونين
                            <br>• عمليات في المدن والقرى على السواء
                        </div>
                        
                        <h3 class="doc-h3">أهم الأحداث والمواقع:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>المكان</th>
                                <th>طبيعة الهجوم</th>
                                <th>النتائج</th>
                                <th>الدلالة</th>
                            </tr>
                            <tr>
                                <td><strong>سطيف</strong></td>
                                <td>اقتحام مراكز الشرطة، قطع الطرق، معارك شوارع</td>
                                <td>سقوط العديد من القتلى الفرنسيين</td>
                                <td>رمزية خاصة (ذكرى مجازر 8 مايو 1945)</td>
                            </tr>
                            <tr>
                                <td><strong>قالمة</strong></td>
                                <td>هجمات على الثكنات، تفجيرات، كمائن</td>
                                <td>إصابة القوات الفرنسية بخسائر كبيرة</td>
                                <td>مسقط رأس زيغود يوسف</td>
                            </tr>
                            <tr>
                                <td><strong>عنابة</strong></td>
                                <td>عمليات في الميناء، هجمات على المنشآت الاقتصادية</td>
                                <td>شل الحركة الاقتصادية</td>
                                <td>تأثير اقتصادي كبير</td>
                            </tr>
                            <tr>
                                <td><strong>سمندو</strong></td>
                                <td>معركة كبيرة مع القوات الفرنسية</td>
                                <td>استشهاد العديد من المجاهدين</td>
                                <td>بطولة وتضحيات شعبية</td>
                            </tr>
                            <tr>
                                <td><strong>الحروش</strong></td>
                                <td>مشاركة جماهيرية واسعة</td>
                                <td>انضمام أعداد كبيرة للثورة</td>
                                <td>تحول الثورة إلى ثورة شعبية</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">رد الفعل الفرنسي والمجازر:</h3>
                        <div class="callout important">
                            <strong>القمع الوحشي:</strong>
                            <br>• إرسال تعزيزات عسكرية ضخمة
                            <br>• قصف جوي للمناطق السكنية
                            <br>• اعتقالات وتعذيب جماعي
                            <br>• إعدامات ميدانية دون محاكمة
                            <br><strong>المجازر:</strong>
                            <br>• مجزرة ملعب فيليب (سطيف): إعدام المئات من المعتقلين
                            <br>• مجازر في القرى والمداشر: قتل آلاف المدنيين
                            <br>• التطهير العرقي: طرد السكان من قراهم
                            <br><strong>حصيلة القمع:</strong> آلاف القتلى من المدنيين (تتراوح التقديرات بين 12000 و45000)
                        </div>
                        
                        <h3 class="doc-h3">النتائج والدلالات:</h3>
                        
                        <h4 class="doc-h4">النتائج العسكرية:</h4>
                        <ul class="doc-ul">
                            <li><strong>فك الحصار:</strong> عن الولاية الأولى (الأوراس)</li>
                            <li><strong>توسيع الثورة:</strong> أصبحت تشمل كل الشمال القسنطيني</li>
                            <li><strong>خسائر فرنسية:</strong> كبيرة في الأرواح والمعدات</li>
                            <li><strong>رفع الروح المعنوية:</strong> للمجاهدين والشعب</li>
                        </ul>
                        
                        <h4 class="doc-h4">النتائج السياسية:</h4>
                        <div class="callout info">
                            <strong>1. تدويل القضية:</strong>
                            <br>• اهتمام الإعلام العالمي بالحدث
                            <br>• فضح الجرائم الفرنسية دوليًا
                            <br>• إدراج القضية في جدول أعمال الجمعية العامة للأمم المتحدة
                            <br><br>
                            <strong>2. تحول الثورة إلى ثورة شعبية:</strong>
                            <br>• انضمام جماهيري واسع للثورة
                            <br>• تغيير نظرة الفرنسيين للثورة (لم تعد مجموعة متمردين)
                            <br>• إقناع الشكاكن بجدية وجدوى الكفاح المسلح
                            <br><br>
                            <strong>3. تغيير الاستراتيجية الفرنسية:</strong>
                            <br>• إقرار الحكومة الفرنسية بخطورة الوضع
                            <br>• إعلان حالة الطوارئ في كل الجزائر
                            <br>• زيادة عدد القوات الفرنسية إلى 400 ألف جندي
                            <br>• بداية التفكير في الحلول السياسية
                        </div>
                        
                        <h4 class="doc-h4">الذكرى والتخليد:</h4>
                        <p class="doc-p"><strong>20 أوت:</strong> أصبح عيدًا وطنيًا في الجزائر المستقلة (عيد المجاهد)</p>
                        <ul class="doc-ul">
                            <li><strong>التكريم:</strong> منح زيغود يوسف وسام الشرف بعد الاستقلال</li>
                            <li><strong>التخليد:</strong> تسمية شوارع ومؤسسات باسمه في كل الجزائر</li>
                            <li><strong>الرمزية:</strong> نموذج للقائد الثوري الشجاع والمخطط الاستراتيجي</li>
                        </ul>
                    `
                },
                {
                    title: "4. مؤتمر الصومام (20 أوت 1956)",
                    content: `
                        <h2 class="doc-h2">تنظيم الثورة وتحديد الاستراتيجية</h2>
                        
                        <h3 class="doc-h3">السياق التاريخي للمؤتمر:</h3>
                        <div class="callout important">
                            <strong>بعد عامين من الثورة:</strong>
                            <br>• نجاح الثورة في الانتشار والتوسع
                            <br>• الحاجة إلى تنظيم أفضل وهيكلة دقيقة
                            <br>• تعدد القيادات والاجتهادات
                            <br>• ضرورة تحديد استراتيجية واضحة للمرحلة المقبلة
                            <br><strong>الدعوة للمؤتمر:</strong> من قبل العربي بن مهيدي
                            <br><strong>الهدف:</strong> تقييم المرحلة وتنظيم الثورة وتحديد الاستراتيجية
                        </div>
                        
                        <h3 class="doc-h3">ظروف انعقاد المؤتمر:</h3>
                        
                        <h4 class="doc-h4">المكان والزمان:</h4>
                        <ul class="doc-ul">
                            <li><strong>التاريخ:</strong> 20 أغسطس 1956 (الذكرى الأولى لهجومات الشمال القسنطيني)</li>
                            <li><strong>المكان:</strong> قرية إيفري (أو إيغري) بوادي الصومام (ولاية بجاية)</li>
                            <li><strong>الاختيار:</strong> موقع استراتيجي محصن طبيعيًا</li>
                            <li><strong>السرية:</strong> اتخاذ إجراءات أمنية مشددة</li>
                        </ul>
                        
                        <h4 class="doc-h4">المشاركون:</h4>
                        <div class="callout info">
                            <strong>عدد المشاركين:</strong> 34 مندوبًا
                            <br><strong>أبرز الحضور:</strong>
                            <br>• <strong>عبد الحفيظ بوصوف:</strong> ممثل الولاية الخامسة
                            <br>• <strong>عمر أوعمران:</strong> ممثل الولاية الثالثة
                            <br>• <strong>عبد الله بن طوبال:</strong> ممثل الولاية الثانية
                            <br>• <strong>عمار أوعمران:</strong> ممثل الولاية الرابعة
                            <br>• <strong>محمدي السعيد:</strong> ممثل الولاية الأولى
                            <br><strong>الغياب البارز:</strong>
                            <br>• مصطفى بن بولعيد (معتقل)
                            <br>• محمد بوضياف (في الخارج)
                            <br>• أحمد بن بلة (معتقل)
                            <br>• حسين آيت أحمد (معتقل)
                            <br>• محمد خيضر (في الخارج)
                        </div>
                        
                        <h3 class="doc-h3">قرارات مؤتمر الصومام:</h3>
                        
                        <h4 class="doc-h4">1. التنظيم السياسي والعسكري:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>المجال</th>
                                <th>القرار</th>
                                <th>التفاصيل</th>
                            </tr>
                            <tr>
                                <td><strong>التقسيم الإداري</strong></td>
                                <td>تقسيم الجزائر إلى 6 ولايات</td>
                                <td>إضافة الولاية السادسة (الصحراء)</td>
                            </tr>
                            <tr>
                                <td><strong>الهيكلة العسكرية</strong></td>
                                <td>تنظيم جيش التحرير الوطني</td>
                                <td>• الجيش النظامي (المجاهدون)<br>• المساعدون (المسبلون)<br>• الفدائيون (المحتسبون)</td>
                            </tr>
                            <tr>
                                <td><strong>القيادة</strong></td>
                                <td>إنشاء مجلس الثورة واللجنة التنسيقية والتنفيذية</td>
                                <td>• مجلس الثورة: 34 عضوًا (أعلى هيئة)<br>• اللجنة التنسيقية والتنفيذية: 5 أعضاء (الهيئة التنفيذية)</td>
                            </tr>
                            <tr>
                                <td><strong>التدرج القيادي</strong></td>
                                <td>تحديد الرتب والمسؤوليات</td>
                                <td>من المجاهد إلى القائد العام</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">2. المبادئ الاستراتيجية:</h4>
                        <div class="callout important">
                            <strong>أولوية الداخل على الخارج:</strong>
                            <br>• قيادة الثورة من الداخل
                            <br>• تمثيل الخارج تابع للداخل
                            <br>• تفويض الخارج بمهام محددة (دبلوماسية، تمويل، إعلام)
                            <br><br>
                            <strong>أولوية السياسي على العسكري:</strong>
                            <br>• الثورة سياسية في جوهرها
                            <br>• العمل العسكري وسيلة لتحقيق الأهداف السياسية
                            <br>• الاهتمام بالعمل السياسي وسط الشعب
                            <br><br>
                            <strong>أولوية الشمال على الجنوب:</strong>
                            <br>• التركيز على المناطق السكانية
                            <br>• اعتبار الصحراء منطقة دعم لوجستي
                        </div>
                        
                        <h4 class="doc-h4">3. البرنامج السياسي:</h4>
                        <ul class="doc-ul">
                            <li><strong>الأهداف:</strong> الاستقلال الوطني وإقامة الدولة الجزائرية</li>
                            <li><strong>المبادئ:</strong> الجمهورية الديمقراطية الاجتماعية</li>
                            <li><strong>الضمانات:</strong> حرية العقيدة، المساواة بين جميع المواطنين</li>
                            <li><strong>العلاقات:</strong> التعاون مع فرنسا بعد الاستقلال على أساس المساواة</li>
                            <li><strong>القضية الفلسطينية:</strong> تأييد كامل للقضية الفلسطينية</li>
                        </ul>
                        
                        <h4 class="doc-h4">4. العلاقة مع فرنسا والعالم:</h4>
                        <div class="callout info">
                            <strong>موقف من فرنسا:</strong>
                            <br>• رفض أي حلول جزئية أو استسلامية
                            <br>• التفاوض فقط من مركز قوة
                            <br>• رفض فكرة "السلم الشجعان" التي تروج لها فرنسا
                            <br><br>
                            <strong>العلاقات الدولية:</strong>
                            <br>• التعاون مع كل الدول المؤيدة للحرية
                            <br>• الانتماء إلى العالم العربي والإسلامي
                            <br>• التضامن مع حركات التحرر في العالم
                            <br>• العمل في إطار ميثاق الأمم المتحدة
                        </div>
                        
                        <h3 class="doc-h3">الهياكل الجديدة بعد المؤتمر:</h3>
                        
                        <h4 class="doc-h4">مجلس الثورة:</h4>
                        <ul class="doc-ul">
                            <li><strong>التكوين:</strong> 34 عضوًا يمثلون الولايات والجهات</li>
                            <li><strong>الصلاحيات:</strong> أعلى هيئة قيادية، يضع السياسات العامة</li>
                            <li><strong>الانعقاد:</strong> دوري لتقييم الوضع واتخاذ القرارات</li>
                        </ul>
                        
                        <h4 class="doc-h4">اللجنة التنسيقية والتنفيذية (CCE):</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>العضو</th>
                                <th>المسؤولية</th>
                                <th>الملاحظات</th>
                            </tr>
                            <tr>
                                <td><strong>عبد الحفيظ بوصوف</strong></td>
                                <td>التنسيق العام</td>
                                <td>أصبح القائد الفعلي للثورة</td>
                            </tr>
                            <tr>
                                <td><strong>كريم بلقاسم</strong></td>
                                <td>العمل العسكري</td>
                                <td>قائد الولاية الثالثة</td>
                            </tr>
                            <tr>
                                <td><strong>بن يوسف بن خدة</strong></td>
                                <td>العمل السياسي</td>
                                <td>من قيادات حركة الانتصار</td>
                            </tr>
                            <tr>
                                <td><strong>سعد دحلب</strong></td>
                                <td>الإعلام والدعاية</td>
                                <td>أصبح بعد ذلك ممثل جبهة التحرير في الأمم المتحدة</td>
                            </tr>
                            <tr>
                                <td><strong>لخضر بن طوبال</strong></td>
                                <td>التنظيم الداخلي</td>
                                <td>من قيادات الولاية الثانية</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">تقييم مؤتمر الصومام:</h3>
                        
                        <h4 class="doc-h4">الإيجابيات:</h4>
                        <div class="callout important">
                            <strong>1. التنظيم:</strong> تحول الثورة من حركة عفوية إلى ثورة منظمة
                            <br><strong>2. التوحيد:</strong> توحيد الجهود تحت قيادة واحدة
                            <br><strong>3. الاستراتيجية:</strong> تحديد أهداف ووسائل واضحة
                            <br><strong>4. الشرعية:</strong> إضفاء الشرعية على قيادة الثورة
                            <br><strong>5. الاستمرارية:</strong> ضمان استمرار الثورة رغم استشهاد القادة
                        </div>
                        
                        <h4 class="doc-h4">السلبيات والانتقادات:</h4>
                        <ul class="doc-ul">
                            <li><strong>غياب القادة التاريخيين:</strong> تأثير على شرعية القرارات</li>
                            <li><strong>تركيز الصلاحيات:</strong> في يد مجموعة صغيرة (CCE)</li>
                            <li><strong>الخلافات:</strong> بداية خلافات بين الداخل والخارج</li>
                            <li><strong>التقسيمات:</strong> خلافات حول أولوية الداخل على الخارج</li>
                            <li><strong>الممارسات:</strong> بعض القرارات لم تطبق عمليًا</li>
                        </ul>
                        
                        <h4 class="doc-h4">الأهمية التاريخية:</h4>
                        <div class="callout info">
                            <strong>منعطف تاريخي:</strong> في مسار الثورة الجزائرية
                            <br><strong>الاعتراف الدولي:</strong> بدأ العالم يعترف بجبهة التحرير كممثل شرعي للشعب الجزائري
                            <br><strong>الاستمرارية:</strong> استمرت هياكل الصومام حتى الاستقلال
                            <br><strong>الإرث:</strong> أصبحت قرارات الصومام مرجعية للثورة الجزائرية
                        </div>
                    `
                },
                {
                    title: "5. مفاوضات إيفيان والاستقلال",
                    content: `
                        <h2 class="doc-h2">الطريق إلى الاستقلال: من الكفاح المسلح إلى التفاوض</h2>
                        
                        <h3 class="doc-h3">سياق المفاوضات:</h3>
                        
                        <h4 class="doc-h4">تطور الموقف الفرنسي:</h4>
                        <div class="callout important">
                            <strong>فشل الحل العسكري:</strong>
                            <br>• عدم قدرة الجيش الفرنسي على سحق الثورة رغم التفوق العسكري
                            <br>• تصاعد الخسائر البشرية والمادية
                            <br>• تزايد المعارضة الداخلية في فرنسا للحرب
                            <br>• ضغوط دولية متزايدة على فرنسا
                            <br><br>
                            <strong>عودة ديغول إلى السلطة (1958):</strong>
                            <br>• وعد بإيجاد حل للأزمة الجزائرية
                            <br>• عرض سلم الشجعان (الاستسلام مع ضمانات)
                            <br>• رفض جبهة التحرير للعرض
                            <br>• إدراك ديغول باستحالة الانتصار عسكريًا
                        </div>
                        
                        <h4 class="doc-h4">تطور الموقف الجزائري:</h4>
                        <ul class="doc-ul">
                            <li><strong>تصاعد الكفاح:</strong> تصعيد العمليات العسكرية</li>
                            <li><strong>التأييد الدولي:</strong> اعتراف متزايد بجبهة التحرير</li>
                            <li><strong>تأسيس الحكومة المؤقتة (19 سبتمبر 1958):</strong> برئاسة فرحات عباس</li>
                            <li><strong>المطالبة بالتفاوض:</strong> من مركز قوة</li>
                            <li><strong>الاستعداد للتفاوض:</strong> مع الحفاظ على المبادئ الأساسية</li>
                        </ul>
                        
                        <h3 class="doc-h3">مراحل المفاوضات:</h3>
                        
                        <h4 class="doc-h4">1. المحادثات السرية (1960-1961):</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>المكان</th>
                                <th>التاريخ</th>
                                <th>الممثلون</th>
                                <th>النتائج</th>
                            </tr>
                            <tr>
                                <td><strong>ميلون</strong></td>
                                <td>25-29 جوان 1960</td>
                                <td>• الفرنسيون: شايي، بورت<br>• الجزائريون: بن طوبال، بولحروف</td>
                                <td>فشلت بسبب رفض فرنسا الاعتراف بالجزائر كدولة</td>
                            </tr>
                            <tr>
                                <td><strong>نويي سور سين</strong></td>
                                <td>20-28 فبراير 1961</td>
                                <td>• الفرنسيون: جوكس، بورجيس مونوري<br>• الجزائريون: بن طوبال، سعد دحلب</td>
                                <td>فشلت بسبب قضية الصحراء وقضية الأقلية الأوروبية</td>
                            </tr>
                            <tr>
                                <td><strong>إيفيان الأولى</strong></td>
                                <td>20 ماي - 13 جوان 1961</td>
                                <td>• الفرنسيون: جوكس<br>• الجزائريون: كريم بلقاسم</td>
                                <td>توقفت بسبب الانتخابات الرئاسية الفرنسية</td>
                            </tr>
                            <tr>
                                <td><strong>لوغران</strong></td>
                                <td>20-28 يوليو 1961</td>
                                <td>• الفرنسيون: جوكس<br>• الجزائريون: كريم بلقاسم</td>
                                <td>تقدمت لكن لم تحسم القضايا العالقة</td>
                            </tr>
                            <tr>
                                <td><strong>إيفيان الثانية</strong></td>
                                <td>7-18 مارس 1962</td>
                                <td>• الفرنسيون: جوكس<br>• الجزائريون: كريم بلقاسم</td>
                                <td>نجحت وأدت إلى توقيع الاتفاقيات</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">2. الاتفاقيات النهائية (18 مارس 1962):</h4>
                        <div class="callout info">
                            <strong>مكان التوقيع:</strong> إيفيان لي بان (Évian-les-Bains) في فرنسا
                            <br><strong>الممثلون:</strong>
                            <br>• <strong>الجانب الفرنسي:</strong> لويس جوكس
                            <br>• <strong>الجانب الجزائري:</strong> كريم بلقاسم
                            <br><strong>نصوص الاتفاقيات:</strong> 93 صفحة تحتوي على:
                            <br>1. اتفاق وقف إطلاق النار
                            <br>2. إعلان المبادئ العامة
                            <br>3. الاتفاقيات التنفيذية
                        </div>
                        
                        <h3 class="doc-h3">بنود اتفاقيات إيفيان:</h3>
                        
                        <h4 class="doc-h4">1. المبادئ الأساسية:</h4>
                        <ul class="doc-ul">
                            <li><strong>الاعتراف:</strong> باستقلال الجزائر وسيادتها على كامل التراب</li>
                            <li><strong>الوحدة الترابية:</strong> وحدة التراب الجزائري بما فيه الصحراء</li>
                            <li><strong>التعاون:</strong> تعاون وثيق بين الجزائر وفرنسا</li>
                            <li><strong>ضمانات:</strong> للأقلية الأوروبية في الجزائر</li>
                        </ul>
                        
                        <h4 class="doc-h4">2. وقف إطلاق النار:</h4>
                        <div class="callout important">
                            <strong>التاريخ:</strong> 19 مارس 1962 على الساعة 12 ظهرًا
                            <br><strong>الشروط:</strong>
                            <br>• توقف كل الأعمال العسكرية
                            <br>• تحرير المعتقلين السياسيين
                            <br>• عودة اللاجئين إلى ديارهم
                            <br>• إجراء استفتاء حول تقرير المصير
                        </div>
                        
                        <h4 class="doc-h4">3. قضية الصحراء:</h4>
                        <ul class="doc-ul">
                            <li><strong>الجزء الفرنسي:</strong> رغبة في الاحتفاظ بالصحراء لغناها النفطي</li>
                            <li><strong>الموقف الجزائري:</strong> رفض أي تقسيم للتراب الوطني</li>
                            <li><strong>الحل:</strong> ضمانات للشركات الفرنسية العاملة في الصحراء</li>
                            <li><strong>النتيجة:</strong> بقاء الصحراء جزءًا من الجزائر المستقلة</li>
                        </ul>
                        
                        <h4 class="doc-h4">4. قضية الأقلية الأوروبية (البيد نوير):</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>الضمانات</th>
                                <th>التفاصيل</th>
                                <th>الواقع</th>
                            </tr>
                            <tr>
                                <td><strong>الجنسية</strong></td>
                                <td>يمكنهم الاحتفاظ بالجنسية الفرنسية أو اكتساب الجنسية الجزائرية</td>
                                <td>اختار معظمهم العودة إلى فرنسا</td>
                            </tr>
                            <tr>
                                <td><strong>الممتلكات</strong></td>
                                <td>ضمان حقوقهم في ممتلكاتهم</td>
                                <td>هربوا وتركوا ممتلكاتهم</td>
                            </tr>
                            <tr>
                                <td><strong>المشاركة السياسية</strong></td>
                                <td>تمثيل في المؤسسات الجزائرية</td>
                                <td>لم يطبق بسبب هروبهم</td>
                            </tr>
                            <tr>
                                <td><strong>الثقافة</strong></td>
                                <td>حرية ممارسة ثقافتهم ولغتهم</td>
                                <td>لم يطبق بسبب هروبهم</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">5. التعاون بين البلدين:</h4>
                        <div class="callout info">
                            <strong>المجالات:</strong>
                            <br>1. <strong>الاقتصادي:</strong> استمرار الشركات الفرنسية في العمل
                            <br>2. <strong>الثقافي:</strong> تعاون في مجال التعليم والثقافة
                            <br>3. <strong>العسكري:</strong> تأجير قاعدة مرسى الكبير لوهران (15 سنة)
                            <br>4. <strong>المالي:</strong> مساعدات مالية فرنسية للجزائر
                            <br>5. <strong>البترول:</strong> شراكة في مجال البترول والغاز
                        </div>
                        
                        <h3 class="doc-h3">الاستفتاء والاستقلال:</h3>
                        
                        <h4 class="doc-h4">استفتاء تقرير المصير (1 يوليو 1962):</h4>
                        <ul class="doc-ul">
                            <li><strong>السؤال:</strong> "هل تريد أن تصبح الجزائر دولة مستقلة متعاونة مع فرنسا؟"</li>
                            <li><strong>المشاركة:</strong> 91.88% من المسجلين</li>
                            <li><strong>النتائج:</strong> 99.72% صوتوا بنعم للاستقلال</li>
                            <li><strong>التصويت:</strong> كان حرًا ونزيهًا تحت إشراف دولي</li>
                            <li><strong>الدلالة:</strong> تأكيد إرادة الشعب الجزائري في الاستقلال</li>
                        </ul>
                        
                        <h4 class="doc-h4">إعلان الاستقلال (5 يوليو 1962):</h4>
                        <div class="callout important">
                            <strong>التاريخ:</strong> 5 يوليو 1962 (في ذكرى دخول الفرنسيين إلى الجزائر 1830)
                            <br><strong>المكان:</strong> قصر الأمم بالجزائر العاصمة
                            <br><strong>المعلن:</strong> فرحات عباس رئيس الحكومة المؤقتة
                            <br><strong>النص:</strong> "باسم الشعب الجزائري، أعلن استقلال الجزائر"
                            <br><strong>الاحتفالات:</strong> في كل المدن والقرى الجزائرية
                            <br><strong>الرمزية:</strong> نهاية 132 سنة من الاستعمار الفرنسي
                        </div>
                        
                        <h4 class="doc-h4">حصيلة الحرب:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>الجانب</th>
                                <th>التكلفة البشرية</th>
                                <th>التكلفة المادية</th>
                                <th>الملاحظات</th>
                            </tr>
                            <tr>
                                <td><strong>الجزائريون</strong></td>
                                <td>• 1.5 مليون شهيد<br>• مئات الآلاف من الجرحى<br>• آلاف المفقودين<br>• 2 مليون نازح</td>
                                <td>• تدمير 8000 قرية<br>• تدمير البنية التحتية<br>• خسائر اقتصادية هائلة</td>
                                <td>تضحيات جسيمة من أجل الحرية</td>
                            </tr>
                            <tr>
                                <td><strong>الفرنسيون</strong></td>
                                <td>• 25000 قتيل<br>• 65000 جريح<br>• آلاف المفقودين</td>
                                <td>• نفقات حربية باهظة<br>• خسائر اقتصادية<br>• أزمة سياسية واجتماعية</td>
                                <td>حرب غير شعبية في فرنسا</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">تقييم اتفاقيات إيفيان:</h3>
                        
                        <h4 class="doc-h4">الإيجابيات:</h4>
                        <div class="callout info">
                            <strong>1. تحقيق الاستقلال:</strong> نهاية الاستعمار الفرنسي
                            <br><strong>2. الوحدة الترابية:</strong> الحفاظ على وحدة التراب الجزائري
                            <br><strong>3. الاعتراف الدولي:</strong> اعتراف فرنسا والدول الأخرى بالجزائر المستقلة
                            <br><strong>4. التعاون:</strong> إطار للتعاون المستقبلي مع فرنسا
                            <br><strong>5. السلم:</strong> إنهاء الحرب والدمار
                        </div>
                        
                        <h4 class="doc-h4">السلبيات والانتقادات:</h4>
                        <ul class="doc-ul">
                            <li><strong>التبعية الاقتصادية:</strong> استمرار النفوذ الاقتصادي الفرنسي</li>
                            <li><strong>الامتيازات:</strong> منح امتيازات كبيرة للشركات الفرنسية</li>
                            <li><strong>القواعد العسكرية:</strong> بقاء القواعد الفرنسية في الجزائر</li>
                            <li><strong>عدم اكتمال السيادة:</strong> بعض القيود على السيادة الوطنية</li>
                            <li><strong>الخلافات الداخلية:</strong> ساهمت في صراعات داخل قيادة الثورة</li>
                        </ul>
                        
                        <h4 class="doc-h4">الأهمية التاريخية:</h4>
                        <div class="callout important">
                            <strong>نموذج:</strong> لحركات التحرر في العالم
                            <br><strong>إثبات:</strong> إمكانية انتصار شعب أعزل على قوة عظمى
                            <br><strong>الإرث:</strong> أصبحت الثورة الجزائرية رمزًا للنضال من أجل الحرية
                            <br><strong>الدرس:</strong> أن الإرادة الشعبية أقوى من أعتى الجيوش
                            <br><strong>الذكرى:</strong> يخلد الجزائريون ذكرى الاستقلال في 5 يوليو من كل عام
                        </div>
                    `
                }
            ],

            3: [
                { header: true, title: "الفصل الثالث: حركات التحرر في العالم الثالث" },
                {
                    title: "1. نماذج حركات التحرر",
                    content: `
                        <h2 class="doc-h2">تنوع أساليب النضال من أجل الاستقلال</h2>
                        
                        <h3 class="doc-h3">أسباب ظهور حركات التحرر:</h3>
                        <div class="callout important">
                            <strong>1. الاستعمار:</strong> السيطرة الأجنبية على الشعوب
                            <br><strong>2. الاستغلال الاقتصادي:</strong> نهب ثروات المستعمرات
                            <br><strong>3. القمع السياسي:</strong> حرمان الشعوب من حقوقها
                            <br><strong>4. التمييز العنصري:</strong> معاملة السكان الأصليين كمواطنين من الدرجة الثانية
                            <br><strong>5. اليقظة الوطنية:</strong> انتشار الوعي الوطني بين النخب
                            <br><strong>6. التأثير الدولي:</strong> ميثاق الأطلسي، الأمم المتحدة، الحرب الباردة
                            <br><strong>7. تضامن شعبي:</strong> التضامن بين حركات التحرر
                        </div>
                        
                        <h3 class="doc-h3">النموذج الهندي: المقاومة السلمية</h3>
                        
                        <h4 class="doc-h4">المهاتما غاندي (1869-1948):</h4>
                        <ul class="doc-ul">
                            <li><strong>الاسم الحقيقي:</strong> موهانداس كرمشاند غاندي</li>
                            <li><strong>اللقب:</strong> المهاتما (الروح العظيمة)</li>
                            <li><strong>فلسفته:</strong> اللاعنف (أهيمسا) والمقاومة السلمية (ساتياغراها)</li>
                            <li><strong>المبادئ:</strong> الحقيقة، اللاعنف، الصبر، الاعتماد على الذات</li>
                            <li><strong>الاستشهاد:</strong> اغتيال عام 1948 على يد متطرف هندوسي</li>
                        </ul>
                        
                        <h4 class="doc-h4">أساليب النضال عند غاندي:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>الأسلوب</th>
                                <th>التطبيق</th>
                                <th>النتائج</th>
                            </tr>
                            <tr>
                                <td><strong>العصيان المدني</strong></td>
                                <td>رفض القوانين الجائرة، عدم دفع الضرائب</td>
                                <td>شل الجهاز الإداري البريطاني</td>
                            </tr>
                            <tr>
                                <td><strong>المقاطعة</strong></td>
                                <td>مقاطعة البضائع البريطانية</td>
                                <td>إضعاف الاقتصاد البريطاني</td>
                            </tr>
                            <tr>
                                <td><strong>الصيام</strong></td>
                                <td>الإضراب عن الطعام كوسيلة ضغط</td>
                                <td>استمالة الرأي العام العالمي</td>
                            </tr>
                            <tr>
                                <td><strong>المسيرات</strong></td>
                                <td>مسيرة الملح (1930) من أحمد آباد إلى داندي</td>
                                <td>تحدي قانون احتكار الملح</td>
                            </tr>
                            <tr>
                                <td><strong>الاعتماد على الذات</strong></td>
                                <td>تشجيع الصناعة المحلية، غزل القطن</td>
                                <td>تقليل الاعتماد على البريطانيين</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">أهم الحملات:</h4>
                        <div class="callout info">
                            <strong>1. حملة عدم التعاون (1920-1922):</strong>
                            <br>• مقاطعة المدارس والمحاكم البريطانية
                            <br>• مقاطعة الانتخابات
                            <br>• تشجيع التعليم الوطني
                            <br><br>
                            <strong>2. مسيرة الملح (1930):</strong>
                            <br>• مسيرة 400 كم من أحمد آباد إلى ساحل داندي
                            <br>• تحدي احتكار البريطانيين لإنتاج وبيع الملح
                            <br>• مشاركة عشرات الآلاف من الهنود
                            <br><br>
                            <strong>3. حملة اتركوا الهند (1942):</strong>
                            <br>• مطلب بالاستقلال الفوري
                            <br>• قمع بريطاني وحشي
                            <br>• اعتقال غاندي وقادة المؤتمر الوطني
                        </div>
                        
                        <h4 class="doc-h4">الاستقلال وتقسيم الهند:</h4>
                        <ul class="doc-ul">
                            <li><strong>الاستقلال:</strong> 15 أغسطس 1947</li>
                            <li><strong>التقسيم:</strong> إلى دولتين: الهند (هندوسية) وباكستان (إسلامية)</li>
                            <li><strong>العنف الطائفي:</strong> مئات الآلاف من القتلى في أعمال عنف طائفية</li>
                            <li><strong>معارضة غاندي:</strong> عارض التقسيم ودعا إلى الوحدة بين الهندوس والمسلمين</li>
                            <li><strong>الاغتيال:</strong> اغتيال غاندي عام 1948 على يد متطرف هندوسي</li>
                        </ul>
                        
                        <h3 class="doc-h3">النموذج الفيتنامي: الكفاح المسلح</h3>
                        
                        <h4 class="doc-h4">هو تشي منه (1890-1969):</h4>
                        <div class="callout important">
                            <strong>الاسم الحقيقي:</strong> نجوين سينه كونغ
                            <br><strong>اللقب:</strong> العم هو، أبو الأمة الفيتنامية
                            <br><strong>التكوين:</strong> سافر إلى فرنسا وعرف الأفكار الاشتراكية
                            <br><strong>التأسيس:</strong> الحزب الشيوعي الفيتنامي (1930)، فيت مينه (1941)
                            <br><strong>الرئاسة:</strong> أول رئيس لجمهورية فيتنام الديمقراطية (1945-1969)
                            <br><strong>الشعار:</strong> "لا شيء ثمين أكثر من الاستقلال والحرية"
                        </div>
                        
                        <h4 class="doc-h4">مراحل النضال الفيتنامي:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>المرحلة</th>
                                <th>الفترة</th>
                                <th>الخصائص</th>
                                <th>النتائج</th>
                            </tr>
                            <tr>
                                <td><strong>الكفاح ضد فرنسا</strong></td>
                                <td>1945-1954</td>
                                <td>• حرب عصابات<br>• دعم شعبي واسع<br>• حرب استنزاف</td>
                                <td>• انتصار ديان بيان فو (1954)<br>• مؤتمر جنيف<br>• تقسيم فيتنام</td>
                            </tr>
                            <tr>
                                <td><strong>الكفاح ضد أمريكا</strong></td>
                                <td>1955-1975</td>
                                <td>• حرب شاملة<br>• دعم سوفييتي وصيني<br>• تضحيات جسيمة</td>
                                <td>• سقوط سايغون (1975)<br>• توحيد فيتنام<br>• انسحاب أمريكي</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4>">معركة ديان بيان فو (1954):</h4>
                        <div class="callout info">
                            <strong>الموقع:</strong> وادي ديان بيان فو شمال فيتنام
                            <br><strong>القوات:</strong>
                            <br>• <strong>الفرنسيون:</strong> 15000 جندي محصنين في معسكر حصين
                            <br>• <strong>الفيتناميون:</strong> 50000 جندي بقيادة الجنرال جياب
                            <br><strong>الاستراتيجية:</strong> حصار المعسكر الفرنسي وتجويعه
                            <br><strong>المدة:</strong> 55 يومًا (13 مارس - 7 مايو 1954)
                            <br><strong>النتيجة:</strong> استسلام الجيش الفرنسي، 2000 قتيل و11000 أسير
                            <br><strong>الدلالة:</strong> أول هزيمة عسكرية لقوة أوروبية في آسيا، نهاية الاستعمار الفرنسي في الهند الصينية
                        </div>
                        
                        <h4 class="doc-h4">الحرب الفيتنامية ضد أمريكا:</h4>
                        <ul class="doc-ul">
                            <li><strong>السياق:</strong> تقسيم فيتنام إلى شمال شيوعي وجنوب موال لأمريكا</li>
                            <li><strong>التصعيد:</strong> تدخل أمريكي عسكري مباشر (1965)</li>
                            <li><strong>الاستراتيجية الفيتنامية:</strong> حرب شعبية، حرب عصابات، حرب استنزاف</li>
                            <li><strong>التكتيكات:</strong> الأنفاق، الكمائن، الحرب النفسية</li>
                            <li><strong>الضحايا:</strong> 3 ملايين فيتنامي، 58000 جندي أمريكي</li>
                            <li><strong>النهاية:</strong> اتفاقية باريس للسلام (1973)، سقوط سايغون (30 أبريل 1975)</li>
                            <li><strong>النتيجة:</strong> توحيد فيتنام تحت الحكم الشيوعي</li>
                        </ul>
                        
                        <h3 class="doc-h3">النموذج الكوبي: الثورة الشعبية المسلحة</h3>
                        
                        <h4 class="doc-h4">فيدل كاسترو (1926-2016):</h4>
                        <div class="callout important">
                            <strong>النشأة:</strong> من عائلة غنية، درس القانون
                            <br><strong>النضال المبكر:</strong> محاولة اقتحام ثكنة مونكادا (1953)
                            <br><strong>السجن والنفي:</strong> سجن ثم نفي إلى المكسيك
                            <br><strong>الثورة:</strong> عودة على ظهر اليخت غرانما مع 81 رجلاً (1956)
                            <br><strong>الكفاح:</strong> حرب عصابات من جبال السييرا مايسترا
                            <br><strong>الانتصار:</strong> دخول هافانا (1 يناير 1959)
                            <br><strong>الحكم:</strong> رئيس وزراء (1959-1976)، رئيس مجلس الدولة (1976-2008)
                        </div>
                        
                        <h4 class="doc-h4">تشي جيفارا (1928-1967):</h4>
                        <ul class="doc-ul">
                            <li><strong>الاسم الكامل:</strong> إرنستو تشي جيفارا</li>
                            <li><strong>الجنسية:</strong> أرجنتيني المولد، كوبي بالتجنيس</li>
                            <li><strong>اللقب:</strong> التشي (الصديق)</li>
                            <li><strong>الدور:</strong> قائد عسكري، منظّر ثوري، وزير الصناعة</li>
                            <li><strong>الفكر:</strong> الاشتراكية، الأممية الثورية</li>
                            <li><strong>الاستشهاد:</strong> إعدام في بوليفيا (1967)</li>
                            <li><strong>الرمزية:</strong> أيقونة الثورة العالمية</li>
                        </ul>
                        
                        <h4 class="doc-h4">مراحل الثورة الكوبية:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>المرحلة</th>
                                <th>الفترة</th>
                                <th>الأحداث</th>
                                <th>النتائج</th>
                            </tr>
                            <tr>
                                <td><strong>الإعداد</strong></td>
                                <td>1953-1956</td>
                                <td>• هجوم مونكادا<br>• بيان "التاريخ سوف يبررني"<br>• النفي إلى المكسيك</td>
                                <td>• تشكيل نواة الثوار<br>• اكتساب الخبرة<br>• التحضير للعودة</td>
                            </tr>
                            <tr>
                                <td><strong>الكفاح المسلح</strong></td>
                                <td>1956-1958</td>
                                <td>• عودة غرانما<br>• حرب عصابات في الجبال<br>• توسيع القاعدة الشعبية</td>
                                <td>• سقوط النظام الباتيستي<br>• دخول هافانا<br>• انتصار الثورة</td>
                            </tr>
                            <tr>
                                <td><strong>تأسيس النظام</strong></td>
                                <td>1959-1965</td>
                                <td>• إصلاح زراعي<br>• تأميم الشركات<br>• محاولة غزو خليج الخنازير<br>• أزمة الصواريخ</td>
                                <td>• بناء الدولة الاشتراكية<br>• مواجهة مع أمريكا<br>• تحالف مع الاتحاد السوفييتي</td>
                            </tr>
                        </table>
                        
                        <h4 class="doc-h4">خصائص الثورة الكوبية:</h4>
                        <div class="callout info">
                            <strong>1. الثورة الشعبية:</strong> مشاركة واسعة من الفلاحين والعمال
                            <br><strong>2. القيادة الكاريزمية:</strong> فيدل كاسترو كقائد ملهم
                            <br><strong>3. الإيديولوجية:</strong> الاشتراكية والأممية
                            <br><strong>4. التأثير الدولي:</strong> دعم حركات التحرر في أمريكا اللاتينية وإفريقيا
                            <br><strong>5. المواجهة مع أمريكا:</strong> تحدي الهيمنة الأمريكية في نصف الكرة الغربي
                            <br><strong>6. الإنجازات الاجتماعية:</strong> محو الأمية، الرعاية الصحية المجانية، التعليم المجاني
                        </div>
                        
                        <h3 class="doc-h3">مقارنة بين النماذج:</h3>
                        <table class="detailed-table">
                            <tr>
                                <th>المعيار</th>
                                <th>الهند (غاندي)</th>
                                <th>فيتنام (هو تشي منه)</th>
                                <th>كوبا (كاسترو)</th>
                            </tr>
                            <tr>
                                <td><strong>الأسلوب</strong></td>
                                <td>سلمي (اللاعنف)</td>
                                <td>عسكري (حرب عصابات)</td>
                                <td>ثوري مسلح (حرب عصابات)</td>
                            </tr>
                            <tr>
                                <td><strong>الإيديولوجية</strong></td>
                                <td>قومية، دينية، إنسانية</td>
                                <td>شيوعية، وطنية</td>
                                <td>اشتراكية، أممية</td>
                            </tr>
                            <tr>
                                <td><strong>الدور الدولي</strong></td>
                                <td>حركة عدم الانحياز</td>
                                <td>المعسكر الشرقي</td>
                                <td>المعسكر الشرقي، حركة عدم الانحياز</td>
                            </tr>
                            <tr>
                                <td><strong>النتائج</strong></td>
                                <td>استقلال مع تقسيم</td>
                                <td>استقلال وتوحيد</td>
                                <td>استقلال وثورة اجتماعية</td>
                            </tr>
                            <tr>
                                <td><strong>التأثير</strong></td>
                                <td>حركات اللاعنف في العالم</td>
                                <td>حركات التحرر المسلحة</td>
                                <td>الثورات في أمريكا اللاتينية</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "2. القضية الفلسطينية",
                    content: `
                        <h2 class="doc-h2>">الصراع العربي الإسرائيلي: جذوره وتطوراته</h2>
                        
                        <h3 class="doc-h3">الجذور التاريخية للقضية:</h3>
                        
                        <h4 class="doc-h4">الحركة الصهيونية:</h4>
                        <div class="callout important">
                            <strong>التأسيس:</strong> مؤتمر بازل بسويسرا (1897) بقيادة تيودور هرتزل
                            <br><strong>الأفكار:</strong>
                            <br>1. اليهود شعب واحد له حق في وطن قومي
                            <br>2. فلسطين هي الوطن التاريخي لليهود
                            <br>3. ضرورة الهجرة الجماعية لليهود إلى فلسطين
                            <br>4. إقامة دولة يهودية في فلسطين
                            <br><strong>الوسائل:</strong>
                            <br>• الهجرة المنظمة • شراء الأراضي • الضغط الدولي • العمل العسكري
                        </div>
                        
                        <h4 class="doc-h4">وعد بلفور (2 نوفمبر 1917):</h4>
                        <ul class="doc-ul">
                            <li><strong>المرسل:</strong> آرثر بلفور، وزير خارجية بريطانيا</li>
                            <li><strong>المستلم:</strong> اللورد روتشيلد، زعيم الطائفة اليهودية في بريطانيا</li>
                            <li><strong>المحتوى:</strong> "تنظر حكومة جلالته بعين العطف إلى تأسيس وطن قومي للشعب اليهودي في فلسطين"</li>
                            <li><strong>الشروط:</strong> "مع عدم الإضرار بحقوق الطوائف غير اليهودية الموجودة في فلسطين"</li>
                            <li><strong>التناقض:</strong> مع وعود بريطانيا للعرب بالاستقلال (مراسلات حسين-مكماهون)</li>
                        </ul>
                        
                        <h4 class="doc-h4">الانتداب البريطاني على فلسطين (1920-1948):</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>الفترة</th>
                                <th>الأحداث</th>
                                <th>النتائج</th>
                            </tr>
                            <tr>
                                <td><strong>1920-1930</strong></td>
                                <td>• هجرة يهودية محدودة<br>• شراء الأراضي<br>• تأسيس المستوطنات</td>
                                <td>• زيادة الوجود اليهودي<br>• استياء الفلسطينيين</td>
                            </tr>
                            <tr>
                                <td><strong>1930-1939</strong></td>
                                <td>• هجرة يهودية كبيرة (بعد صعود النازية)<br>• ثورات فلسطينية (1936-1939)<br>• الكتاب الأبيض (1939)</td>
                                <td>• تصاعد الصراع<br>• تقسيم فلسطين إلى مناطق يهودية وعربية</td>
                            </tr>
                            <tr>
                                <td><strong>1939-1948</strong></td>
                                <td>• الحرب العالمية الثانية<br>• الهجرة السرية<br>• الإرهاب الصهيوني (شتيرن، إرجون)<br>• قرار التقسيم 1947</td>
                                <td>• تهيئة الظروف لإعلان الدولة</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">قرار التقسيم 1947 والحرب العربية الإسرائيلية 1948:</h3>
                        
                        <h4 class="doc-h4">قرار التقسيم (29 نوفمبر 1947):</h4>
                        <div class="callout info">
                            <strong>الجهة:</strong> الجمعية العامة للأمم المتحدة (القرار 181)
                            <br><strong>التقسيم:</strong>
                            <br>• <strong>الدولة اليهودية:</strong> 56% من أرض فلسطين (مع أن اليهود كانوا يملكون 7% فقط)
                            <br>• <strong>الدولة العربية:</strong> 43% من أرض فلسطين
                            <br>• <strong>القدس:</strong> منطقة دولية تحت إدارة الأمم المتحدة
                            <br><strong>التصويت:</strong> 33 مع، 13 ضد، 10 ممتنع
                            <br><strong>الردود:</strong>
                            <br>• <strong>الصهاينة:</strong> قبلوا بالقرار
                            <br>• <strong>الفلسطينيون والعرب:</strong> رفضوا القرار
                        </div>
                        
                        <h4 class="doc-h4">النكبة (1948):</h4>
                        <ul class="doc-ul">
                            <li><strong>إعلان الدولة:</strong> ديفيد بن غوريون يعلن قيام دولة إسرائيل (14 مايو 1948)</li>
                            <li><strong>الحرب:</strong> دخول الجيوش العربية (مصر، الأردن، سوريا، العراق، لبنان)</li>
                            <li><strong>النتيجة:</strong> هزيمة الجيوش العربية، توسع إسرائيل إلى 78% من فلسطين</li>
                            <li><strong>اللاجئون:</strong> تهجير 750 ألف فلسطيني من ديارهم (النكبة)</li>
                            <li><strong>التقسيم:</strong>
                                <ul>
                                    <li>إسرائيل: 78% من فلسطين</li>
                                    <li>الأردن: الضفة الغربية</li>
                                    <li>مصر: قطاع غزة</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <h3 class="doc-h3">حرب 1967 (النكسة):</h3>
                        <div class="callout important">
                            <strong>التاريخ:</strong> 5-10 يونيو 1967 (حرب الأيام الستة)
                            <br><strong>الأسباب:</strong>
                            <br>• تصاعد التوتر على الحدود السورية الإسرائيلية
                            <br>• طلب مصر سحب قوات الطوارئ الدولية
                            <br>• إغلاق مصر لمضائق تيران (إغلاق خليج العقبة أمام السفن الإسرائيلية)
                            <br><strong>الهجوم الإسرائيلي:</strong> مفاجئ وشامل على الجبهات الثلاث (مصر، الأردن، سوريا)
                            <br><strong>النتائج:</strong>
                            <br>• احتلال إسرائيل لسيناء وقطاع غزة (من مصر)
                            <br>• احتلال الضفة الغربية والقدس الشرقية (من الأردن)
                            <br>• احتلال هضبة الجولان (من سوريا)
                            <br>• تضاعف مساحة إسرائيل 3 مرات
                            <br>• مزيد من اللاجئين الفلسطينيين
                        </div>
                        
                        <h3 class="doc-h3">حرب 1973 (حرب أكتوبر أو رمضان):</h3>
                        
                        <h4 class="doc-h4">الاستعدادات:</h4>
                        <ul class="doc-ul">
                            <li><strong>الهدف:</strong> تحرير الأراضي المحتلة عام 1967 واستعادة الكرامة العربية</li>
                            <li><strong>التحالف:</strong> مصر وسوريا بالتنسيق مع الملك فيصل ملك السعودية (سلاح النفط)</li>
                            <li><strong>المفاجأة:</strong> الهجوم في يوم عيد الغفران اليهودي (6 أكتوبر 1973)</li>
                            <li><strong>الخطة:</strong> عبور قناة السويس وتحطيم خط بارليف</li>
                        </ul>
                        
                        <h4 class="doc-h4">المجريات والنتائج:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>الجبهة</th>
                                <th>الإنجازات</th>
                                <th>النتائج</th>
                            </tr>
                            <tr>
                                <td><strong>الجبهة المصرية</strong></td>
                                <td>• عبور قناة السويس<br>• اختراق خط بارليف<br>• تحرير شريط ضيق شرق القناة</td>
                                <td>• انتصار معنوي وسياسي<br>• فتح باب المفاوضات<br>• اتفاقية فض الاشتباك</td>
                            </tr>
                            <tr>
                                <td><strong>الجبهة السورية</strong></td>
                                <td>• تحرير جزء من هضبة الجولان<br>• تقدم نحو بحيرة طبريا</td>
                                <td>• استعادة جزء من الأرض<br>• اتفاقية فض الاشتباك</td>
                            </tr>
                            <tr>
                                <td><strong>الجبهة الدولية</strong></td>
                                <td>• استخدام سلاح النفط (الحظر النفطي)</td>
                                <td>• أزمة طاقة عالمية<br>• ضغط على الدول الغربية</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">الانتفاضة الفلسطينية:</h3>
                        
                        <h4 class="doc-h4">الانتفاضة الأولى (1987-1993):</h4>
                        <div class="callout info">
                            <strong>السبب المباشر:</strong> حادثة دهس شاحنة إسرائيلية لعمال فلسطينيين (8 ديسمبر 1987)
                            <br><strong>الطابع:</strong> شعبية، عفوية، شارك فيها كل الشعب
                            <br><strong>الأشكال:</strong>
                            <br>• المظاهرات والإضرابات
                            <br>• المواجهات مع الجيش الإسرائيلي
                            <br>• العصيان المدني
                            <br>• رمي الحجارة (أطفال الحجارة)
                            <br><strong>النتائج:</strong>
                            <br>• بروز منظمة التحرير الفلسطينية كممثل شرعي
                            <br>• اعتراف دولي متزايد بالحقوق الفلسطينية
                            <br>• بداية مفاوضات السلام
                            <br>• تأسيس حركة حماس (1987)
                        </div>
                        
                        <h4 class="doc-h4">الانتفاضة الثانية (2000-2005):</h4>
                        <ul class="doc-ul">
                            <li><strong>السبب:</strong> زيارة أرييل شارون للمسجد الأقصى (28 سبتمبر 2000)</li>
                            <li><strong>الطابع:</strong> أكثر عنفًا من الأولى، استخدام للأسلحة النارية</li>
                            <li><strong>الأشكال:</strong> عمليات استشهادية، مواجهات مسلحة، اعتقالات جماعية</li>
                            <li><strong>النتائج:</strong>
                                <ul>
                                    <li>آلاف الشهداء والجرحى</li>
                                    <li>تدمير البنية التحتية الفلسطينية</li>
                                    <li>بناء جدار الفصل العنصري</li>
                                    <li>تدهور الأوضاع الاقتصادية</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <h3 class="doc-h3">مفاوضات السلام:</h3>
                        
                        <h4 class="doc-h4">اتفاقية أوسلو (1993):</h4>
                        <div class="callout important">
                            <strong>المكان:</strong> واشنطن (بعد مفاوضات سرية في أوسلو)
                            <br><strong>الممثلون:</strong>
                            <br>• <strong>إسرائيل:</strong> إسحاق رابين
                            <br>• <strong>منظمة التحرير:</strong> ياسر عرفات
                            <br>• <strong>الوسيط:</strong> بيل كلينتون (رئيس أمريكا)
                            <br><strong>المحتوى:</strong>
                            <br>1. اعتراف منظمة التحرير بدولة إسرائيل
                            <br>2. اعتراف إسرائيل بمنظمة التحرير كممثل للشعب الفلسطيني
                            <br>3. إنشاء سلطة حكم ذاتي فلسطيني مؤقت
                            <br>4. التفاوض على القضايا العالقة (القدس، اللاجئون، المستوطنات، الحدود)
                            <br><strong>النتائج:</strong>
                            <br>• عودة ياسر عرفات إلى فلسطين
                            <br>• تأسيس السلطة الوطنية الفلسطينية
                            <br>• اغتيال إسحاق رابين (1995)
                            <br>• تجميد عملية السلام
                        </div>
                        
                        <h4 class="doc-h4">مبادرات السلام اللاحقة:</h4>
                        <table class="detailed-table">
                            <tr>
                                <th>المبادرة</th>
                                <th>التاريخ</th>
                                <th>المحتوى</th>
                                <th>النتيجة</th>
                            </tr>
                            <tr>
                                <td><strong>كامب ديفيد الثانية</strong></td>
                                <td>2000</td>
                                <td>بين إيهود باراك وياسر عرفات، عرض دولة فلسطينية على جزء من الأراضي</td>
                                <td>فشلت بسبب الخلاف على القدس وحق العودة</td>
                            </tr>
                            <tr>
                                <td><strong>خارطة الطريق</strong></td>
                                <td>2003</td>
                                <td>مبادرة الرباعية (أمم متحدة، أمريكا، الاتحاد الأوروبي، روسيا)</td>
                                <td>توقفت بسبب العنف المستمر</td>
                            </tr>
                            <tr>
                                <td><strong>مبادرة السلام العربية</strong></td>
                                <td>2002 (تجددت 2007، 2017)</td>
                                <td>تقدمها السعودية: السلام مع إسرائيل مقابل الانسحاب من الأراضي المحتلة 1967 وحل عادل لمشكلة اللاجئين</td>
                                <td>رفضتها إسرائيل</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">الوضع الراهن:</h3>
                        
                        <h4 class="doc-h4">التحديات الحالية:</h4>
                        <div class="callout info">
                            <strong>1. الاستيطان:</strong> توسع المستوطنات الإسرائيلية في الضفة الغربية والقدس الشرقية
                            <br><strong>2. جدار الفصل:</strong> بناء جدار عازل يضم المستوطنات ويعزل القرى الفلسطينية
                            <br><strong>3. القدس:</strong> تهويد المدينة ومحاولة تغيير طابعها العربي والإسلامي
                            <br><strong>4. اللاجئون:</strong> استمرار معاناة 5 ملايين لاجئ فلسطيني
                            <br><strong>5. الانقسام الفلسطيني:</strong> انقسام بين فتح في الضفة وحماس في غزة
                            <br><strong>6. الحصار:</strong> حصار إسرائيلي مشدد على قطاع غزة منذ 2007
                        </div>
                        
                        <h4 class="doc-h4">المقاومة الفلسطينية:</h4>
                        <ul class="doc-ul">
                            <li><strong>منظمة التحرير الفلسطينية:</strong> الممثل الشرعي للشعب الفلسطيني (اعتراف دولي)</li>
                            <li><strong>حركة فتح:</strong> أكبر فصائل منظمة التحرير، تأسست 1965</li>
                            <li><strong>حركة حماس:</strong> حركة المقاومة الإسلامية، تأسست 1987، ترفض الاعتراف بإسرائيل</li>
                            <li><strong>الجهاد الإسلامي:</strong> حركة مقاومة إسلامية، تأسست 1981</li>
                            <li><strong>الجبهة الشعبية:</strong> حركة قومية يسارية، تأسست 1967</li>
                        </ul>
                        
                        <h4 class="doc-h4">الحقوق الفلسطينية غير القابلة للتصرف:</h4>
                        <div class="callout important">
                            <strong>1. حق تقرير المصير:</strong> إقامة الدولة الفلسطينية المستقلة
                            <br><strong>2. حق العودة:</strong> للاجئين الفلسطينيين إلى ديارهم (القرار 194)
                            <br><strong>3. القدس عاصمة:</strong> للدولة الفلسطينية
                            <br><strong>4. إزالة المستوطنات:</strong> غير الشرعية حسب القانون الدولي
                            <br><strong>5. السيادة:</strong> على الأرض والمياه والحدود
                            <br><strong>6. الاعتراف:</strong> بدولة فلسطين كعضو كامل في الأمم المتحدة
                        </div>
                    `
                }
            ]
        }
    },
    // =================================================================
    // 4. GEOGRAPHY - مكتمل بالتفصيل الممل
    // =================================================================
    geography: {
        title: "الجغرافيا",
        rtl: true,
        trimesters: {
            1: [
                { header: true, title: "الوحدة 1: الواقع الاقتصادي العالمي (نظام الشمال والجنوب)" },
                { 
                    title: "1. مفهوم التقدم والتخلف الاقتصادي", 
                    content: `
                        <h2 class="doc-h2">التعريفات والمقاييس الأساسية</h2>
                        <p class="doc-p"><strong>التقدم الاقتصادي:</strong> حالة اقتصادية تتميز بمستوى عال من الإنتاجية، الدخل الفردي، التصنيع، الخدمات، الابتكار التكنولوجي، وجودة الحياة. غالباً ما يرتبط بالدول الصناعية المتقدمة.</p>
                        
                        <p class="doc-p"><strong>التخلف الاقتصادي:</strong> حالة اقتصادية تتميز بانخفاض مستوى الدخل الفردي، ضعف الإنتاجية، الهيمنة الزراعية، الاعتماد على تصدير المواد الأولية، ارتفاع معدلات النمو السكاني، مشاكل البطالة والفقر.</p>
                        
                        <h3 class="doc-h3">المؤشرات الكمية للتقدم والتخلف:</h3>
                        <table class="simple-table">
                            <tr><th>المؤشر</th><th>الدول المتقدمة</th><th>الدول النامية</th></tr>
                            <tr><td><strong>الناتج المحلي الإجمالي للفرد</strong></td><td>أكثر من 20,000 دولار</td><td>أقل من 5,000 دولار</td></tr>
                            <tr><td><strong>معدل النمو السكاني</strong></td><td>أقل من 1% سنوياً</td><td>أكثر من 2% سنوياً</td></tr>
                            <tr><td><strong>معدل الأمية</strong></td><td>أقل من 5%</td><td>أكثر من 30%</td></tr>
                            <tr><td><strong>نسبة سكان الريف</strong></td><td>أقل من 20%</td><td>أكثر من 60%</td></tr>
                            <tr><td><strong>معدل وفيات الأطفال</strong></td><td>أقل من 10 لكل 1000</td><td>أكثر من 50 لكل 1000</td></tr>
                            <tr><td><strong>مؤشر التنمية البشرية (HDI)</strong></td><td>أكثر من 0.800 (مرتفع)</td><td>أقل من 0.550 (منخفض)</td></tr>
                        </table>
                        
                        <h3 class="doc-h3">العوامل المفسرة للتباين:</h3>
                        <div class="callout">
                            <strong>1. العوامل التاريخية:</strong>
                            <ul>
                                <li>الاستعمار وآثاره (نهب الثروات، تركيز الاستثمارات في قطاعات محددة)</li>
                                <li>المسار التنموي المختلف بعد الاستقلال</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. العوامل الاقتصادية:</strong>
                            <ul>
                                <li>تفاوت في تراكم رأس المال</li>
                                <li>التبعية التكنولوجية للدول النامية</li>
                                <li>عدم العدالة في التبادل التجاري الدولي</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>3. العوامل السياسية والاجتماعية:</strong>
                            <ul>
                                <li>عدم الاستقرار السياسي في بعض الدول النامية</li>
                                <li>ضعف المؤسسات والديمقراطية</li>
                                <li>ارتفاع معدلات الفساد في بعض الحالات</li>
                            </ul>
                        </div>
                        
                        <h3 class="doc-h3">التصنيفات الجديدة:</h3>
                        <p class="doc-p"><strong>الدول الصناعية الجديدة (النمور الآسيوية):</strong> كوريا الجنوبية، تايوان، سنغافورة، هونغ كونغ - حققت قفزة تنموية سريعة.</p>
                        <p class="doc-p"><strong>الدول البترولية:</strong> تتمتع بدخل مرتفع لكن هيكل اقتصادي أحادي الجانب.</p>
                        <p class="doc-p"><strong>الدول الأقل نمواً:</strong> معظمها في إفريقيا جنوب الصحراء.</p>
                    `
                },
                { 
                    title: "2. المبادلات التجارية العالمية (التجارة الدولية)", 
                    content: `
                        <h2 class="doc-h2">الهيكل والتوزيع الجغرافي للمبادلات</h2>
                        
                        <h3 class="doc-h3">1. تدفقات التجارة العالمية:</h3>
                        <p class="doc-p"><strong>أ. التجارة بين الدول المتقدمة:</strong> تمثل حوالي 60% من التجارة العالمية (مثل التجارة بين أوروبا وأمريكا الشمالية).</p>
                        <p class="doc-p"><strong>ب. التجارة بين الشمال والجنوب:</strong> حوالي 30% من التجارة العالمية.</p>
                        <p class="doc-p"><strong>ج. التجارة بين دول الجنوب:</strong> لا تتجاوز 10% من التجارة العالمية.</p>
                        
                        <h3 class="doc-h3">2. السلع الأساسية في التجارة العالمية:</h3>
                        <table class="simple-table">
                            <tr><th>المجال</th><th>السلع الرئيسية</th><th>الدول المنتجة الرئيسية</th><th>خصائص السوق</th></tr>
                            <tr>
                                <td><strong>الطاقة (البترول)</strong></td>
                                <td>النفط الخام، الغاز الطبيعي، المنتجات البترولية</td>
                                <td>منظمة أوبك (السعودية، العراق، الإمارات، الجزائر)<br>روسيا، الولايات المتحدة</td>
                                <td>تقلبات أسعار حادة، أهمية جيوسياسية، احتياطيات محدودة</td>
                            </tr>
                            <tr>
                                <td><strong>الزراعة (القمح)</strong></td>
                                <td>القمح، الذرة، الأرز، فول الصويا</td>
                                <td>الولايات المتحدة، كندا، الاتحاد الأوروبي، روسيا، أوكرانيا، الأرجنتين</td>
                                <td>تقلبات حسب الظروف المناخية، استخدام كسلاح سياسي ("السلاح الأخضر")</td>
                            </tr>
                            <tr>
                                <td><strong>المعادن</strong></td>
                                <td>الحديد، النحاس، البوكسيت، الذهب</td>
                                <td>تشيلي (نحاس)، أستراليا (حديد)، غينيا (بوكسيت)</td>
                                <td>اعتماد الصناعة العالمية عليها، احتياطيات متفاوتة</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">3. الأسواق المالية العالمية:</h3>
                        <div class="callout">
                            <strong>أ. البورصات الرئيسية:</strong>
                            <ul>
                                <li><strong>وول ستريت (نيويورك):</strong> أكبر بورصة في العالم (ناسداك، NYSE)</li>
                                <li><strong>بورصة طوكيو:</strong> ثاني أكبر بورصة في آسيا</li>
                                <li><strong>بورصة لندن:</strong> أهم بورصة في أوروبا</li>
                                <li><strong>بورصة شنغهاي:</strong> أسرع البورصات نمواً</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>ب. التدفقات المالية:</strong>
                            <ul>
                                <li><strong>الاستثمار الأجنبي المباشر:</strong> يتركز 70% منه بين الدول المتقدمة</li>
                                <li><strong>الاستثمار في المحافظ المالية:</strong> شديد التقلب والحركة</li>
                                <li><strong>تحويلات المهاجرين:</strong> مصدر مهم للعملة الصعبة للدول النامية</li>
                            </ul>
                        </div>
                        
                        <h3 class="doc-h3">4. المشاكل والتحديات:</h3>
                        <p class="doc-p"><strong>عدم التكافؤ في المبادلات:</strong> الدول النامية تصدر مواد خام بأسعار منخفضة وتستورد سلع مصنعة بأسعار مرتفعة.</p>
                        <p class="doc-p"><strong>التقلبات الأسعار:</strong> خاصة في أسواق المواد الأولية.</p>
                        <p class="doc-p"><strong>المنافسة غير المتكافئة:</strong> دعم الدول المتقدمة لقطاعاتها الزراعية يؤثر على صادرات الدول النامية.</p>
                    `
                },
                { 
                    title: "3. التكتلات الاقتصادية الإقليمية", 
                    content: `
                        <h2 class="doc-h2">أشكال وأهداف التكامل الاقتصادي</h2>
                        
                        <h3 class="doc-h3">1. مراحل التكامل الاقتصادي (من الأدنى إلى الأعلى):</h3>
                        <table class="simple-table">
                            <tr><th>المرحلة</th><th>التعريف</th><th>أمثلة</th></tr>
                            <tr>
                                <td><strong>منطقة تجارة حرة</strong></td>
                                <td>إلغاء الحواجز الجمركية بين الأعضاء، مع احتفاظ كل دولة بسياستها الجمركية تجاه الدول الخارجية</td>
                                <td>النافتا (أمريكا الشمالية)، الآسيان</td>
                            </tr>
                            <tr>
                                <td><strong>الاتحاد الجمركي</strong></td>
                                <td>منطقة تجارة حرة + سياسة جمركية موحدة تجاه الدول الخارجية</td>
                                <td>السوق المشتركة لدول الجنوب (MERCOSUR)</td>
                            </tr>
                            <tr>
                                <td><strong>السوق المشتركة</strong></td>
                                <td>اتحاد جمركي + حرية حركة عوامل الإنتاج (العمل، رأس المال)</td>
                                <td>السوق الأوروبية المشتركة (1957-1993)</td>
                            </tr>
                            <tr>
                                <td><strong>الاتحاد الاقتصادي</strong></td>
                                <td>سوق مشتركة + تنسيق السياسات الاقتصادية (نقدية، مالية، اجتماعية)</td>
                                <td>الاتحاد الأوروبي (مرحلة ما قبل اليورو)</td>
                            </tr>
                            <tr>
                                <td><strong>الاندماج الاقتصادي الكامل</strong></td>
                                <td>اتحاد اقتصادي + عملة موحدة + سياسات موحدة في جميع المجالات</td>
                                <td>منطقة اليورو في الاتحاد الأوروبي</td>
                            </tr>
                        </table>
                    `
                }
            ],

            2: [
                { header: true, title: "الوحدة 2: القوى الاقتصادية الكبرى في العالم" },
                { 
                    title: "1. الولايات المتحدة الأمريكية: القوة الاقتصادية الأولى", 
                    content: `
                        <h2 class="doc-h2">أسس وعوامل القوة الأمريكية</h2>
                        
                        <h3 class="doc-h3">أ. المقومات الطبيعية والبشرية:</h3>
                        <div class="callout">
                            <strong>1. المقومات الطبيعية:</strong>
                            <ul>
                                <li><strong>المساحة الشاسعة:</strong> 9.8 مليون كم² (رابع أكبر دولة)</li>
                                <li><strong>تنوع المناخ والتربة:</strong> يسمح بتنوع زراعي كبير</li>
                                <li><strong>الثروات الطبيعية:</strong> بترول، غاز، فحم، معادن مختلفة</li>
                                <li><strong>الشبكة المائية:</strong> أنهار مهمة (ميسيسيبي، ميسوري، كولورادو)</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. المقومات البشرية:</strong>
                            <ul>
                                <li><strong>عدد السكان:</strong> حوالي 330 مليون نسمة</li>
                                <li><strong>القوة العاملة:</strong> مؤهلة وذات إنتاجية عالية</li>
                                <li><strong>الهجرة:</strong> مصدر دائم للطاقات البشرية والإبداعية</li>
                                <li><strong>مستوى تعليمي مرتفع:</strong> جامعات عالمية (هارفارد، ستانفورد، MIT)</li>
                            </ul>
                        </div>
                        
                        <h3 class="doc-h3">ب. الهيكل الاقتصادي:</h3>
                        <p class="doc-p"><strong>1. القطاع الزراعي:</strong> يمثل 1% من الناتج المحلي لكنه متطور جداً:</p>
                        <ul>
                            <li><strong>الإنتاج الضخم:</strong> أول منتج عالمي للذرة، فول الصويا، اللحوم</li>
                            <li><strong>الزراعة العلمية:</strong> استخدام مكثف للتكنولوجيا والبحث العلمي</li>
                            <li><strong>التخصص الإقليمي:</strong> حزام الذرة، حزام القمح، حزام القطن سابقاً</li>
                        </ul>
                        
                        <p class="doc-p"><strong>2. القطاع الصناعي:</strong> متنوع ومتطور:</p>
                        <table class="simple-table">
                            <tr><th>الصناعة</th><th>المناطق الرئيسية</th><th>الشركات العالمية</th></tr>
                            <tr><td>الصناعات التقليدية</td><td>المنطقة الصناعية الشمالية الشرقية (الشريط الصناعي)</td><td>شركات السيارات (فورد، جنرال موتورز)</td></tr>
                            <tr><td>الصناعات العالية التكنولوجيا</td><td>سيليكون فالي (كاليفورنيا)، طريق 128 (بوسطن)</td><td>أبل، مايكروسوفت، غوغل، أمازون</td></tr>
                            <tr><td>الصناعات العسكرية</td><td>كاليفورنيا، تكساس، فلوريدا</td><td>لوكهيد مارتن، بوينغ، نورثروب غرومان</td></tr>
                        </table>
                        
                        <p class="doc-p"><strong>3. قطاع الخدمات:</strong> يمثل 80% من الناتج المحلي:</p>
                        <ul>
                            <li><strong>الخدمات المالية:</strong> وول ستريت، البنوك الكبرى</li>
                            <li><strong>التجارة:</strong> أكبر سوق استهلاكي في العالم</li>
                            <li><strong>النقل والاتصالات:</strong> شبكة طرق واتصالات متطورة</li>
                            <li><strong>التعليم والصحة:</strong> مراكز بحثية ومستشفيات عالمية</li>
                        </ul>
                        
                        <h3 class="doc-h3">ج. النفوذ الاقتصادي العالمي:</h3>
                        <div class="callout">
                            <strong>1. التجارة الدولية:</strong>
                            <ul>
                                <li>أول مستورد في العالم</li>
                                <li>ثاني مصدر في العالم بعد الصين</li>
                                <li>العجز التجاري مع الصين مشكلة هيكلية</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. الاستثمارات الخارجية:</strong>
                            <ul>
                                <li>أول مصدر للاستثمار الأجنبي المباشر</li>
                                <li>الشركات المتعددة الجنسيات الأمريكية تنتشر في جميع أنحاء العالم</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>3. النظام النقدي الدولي:</strong>
                            <ul>
                                <li>الدولار هو العملة الأولى في الاحتياطيات الدولية</li>
                                <li>الدولار هو العملة الأساسية في التجارة الدولية (البترودولار)</li>
                                <li>صندوق النقد الدولي والبنك الدولي مقرهما واشنطن</li>
                            </ul>
                        </div>
                        
                        <h3 class="doc-h3">د. المشاكل والتحديات:</h3>
                        <p class="doc-p"><strong>1. التحديات الاقتصادية:</strong></p>
                        <ul>
                            <li>العجز التجاري المزمن (خاصة مع الصين)</li>
                            <li>المديونية العامة المرتفعة (تجاوزت 30 تريليون دولار)</li>
                            <li>التفاوت الاجتماعي الكبير (1% يملكون 40% من الثروة)</li>
                        </ul>
                        
                        <p class="doc-p"><strong>2. التحديات الخارجية:</strong></p>
                        <ul>
                            <li>منافسة الصين والاتحاد الأوروبي</li>
                            <li>ظهور تكتلات اقتصادية منافسة</li>
                            <li>محاولات بعض الدول التخلي عن الدولار في التجارة الدولية</li>
                        </ul>
                    `
                },
                { 
                    title: "2. الاتحاد الأوروبي: نموذج التكامل الإقليمي", 
                    content: `
                        <h2 class="doc-h2">التطور التاريخي والهيكل الاقتصادي</h2>
                        
                        <h3 class="doc-h3">أ. المراحل التاريخية للتأسيس:</h3>
                        <table class="simple-table">
                            <tr><th>التاريخ</th><th>المرحلة/المؤسسة</th><th>الدول الأعضاء</th><th>الأهداف</th></tr>
                            <tr>
                                <td>1951</td>
                                <td>المجموعة الأوروبية للفحم والصلب (ECSC)</td>
                                <td>فرنسا، ألمانيا، إيطاليا، بلجيكا، هولندا، لوكسمبورغ</td>
                                <td>وضع إنتاج الفحم والصلب تحت إدارة مشتركة لمنع الحروب</td>
                            </tr>
                            <tr>
                                <td>1957</td>
                                <td>معاهدات روما: تأسيس السوق الأوروبية المشتركة (EEC) والجماعة الأوروبية للطاقة الذرية (EURATOM)</td>
                                <td>الستة المؤسسين</td>
                                <td>إنشاء سوق مشتركة تضمن حرية حركة السلع، الأشخاص، الخدمات، رؤوس الأموال</td>
                            </tr>
                            <tr>
                                <td>1992</td>
                                <td>معاهدة ماستريخت: تأسيس الاتحاد الأوروبي</td>
                                <td>12 دولة</td>
                                <td>إنشاء اتحاد اقتصادي ونقدي، تعزيز التعاون السياسي</td>
                            </tr>
                            <tr>
                                <td>2002</td>
                                <td>إدخال اليورو كعملة ورقية ومعدنية</td>
                                <td>12 دولة (منطقة اليورو)</td>
                                <td>استكمال الاتحاد الاقتصادي والنقدي</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">ب. الهيكل المؤسسي للاتحاد الأوروبي:</h3>
                        <div class="callout">
                            <strong>1. المفوضية الأوروبية:</strong>
                            <ul>
                                <li>مقرها: بروكسل</li>
                                <li>الوظيفة: اقتراح القوانين، تنفيذ السياسات، التمثيل الخارجي</li>
                                <li>التكوين: مفوض من كل دولة (27 مفوضاً)</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. البرلمان الأوروبي:</strong>
                            <ul>
                                <li>مقره: ستراسبورغ</li>
                                <li>الوظيفة: التشريع، الرقابة على المفوضية، المصادقة على الميزانية</li>
                                <li>التكوين: 705 نائباً ينتخبون مباشرة من المواطنين</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>3. مجلس الاتحاد الأوروبي (مجلس الوزراء):</strong>
                            <ul>
                                <li>مقره: بروكسل</li>
                                <li>الوظيفة: التصويت على القوانين مع البرلمان</li>
                                <li>التكوين: وزراء من الدول الأعضاء حسب الموضوع (اقتصاد، زراعة، الخ)</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>4. محكمة العدل الأوروبية:</strong>
                            <ul>
                                <li>مقرها: لوكسمبورغ</li>
                                <li>الوظيفة: تفسير وتطبيق القوانين الأوروبية</li>
                                <li>ضمان احترام الدول الأعضاء للقوانين المشتركة</li>
                            </ul>
                        </div>
                    `
                },
                { 
                    title: "3. اليابان ودول شرق آسيا: النمور الآسيوية", 
                    content: `
                        <h2 class="doc-h2">نموذج التنمية الآسيوية</h2>
                        
                        <h3 class="doc-h3">أ. اليابان: العملاق التكنولوجي:</h3>
                        <p class="doc-p"><strong>العوامل الطبيعية:</strong></p>
                        <ul>
                            <li>أرخبيل جبلي (80% من المساحة جبال)</li>
                            <li>قلة الموارد الطبيعية (تعتمد على الاستيراد)</li>
                            <li>كوارث طبيعية متكررة (زلازل، أعاصير)</li>
                        </ul>
                        
                        <p class="doc-p"><strong>النموذج التنموي الياباني:</strong></p>
                        <div class="callout">
                            <strong>1. فترة ما بعد الحرب:</strong>
                            <ul>
                                <li>الدمار الشامل بعد الحرب العالمية الثانية</li>
                                <li>المساعدات الأمريكية (خطة مارشال للشرق الأقصى)</li>
                                <li>إصلاحات سياسية واقتصادية (دستور 1947)</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. المعجزة الاقتصادية (1950-1973):</strong>
                            <ul>
                                <li>معدل نمو سنوي متوسط 10%</li>
                                <li>تركيز على الصناعات الثقيلة (صلب، كيماويات، بناء سفن)</li>
                                <li>تطور صناعة السيارات والإلكترونيات</li>
                            </ul>
                        </div>
                    `
                }
            ],

            3: [
                { header: true, title: "الوحدة 3: الاقتصاد والتنمية (نماذج مختارة)" },
                { 
                    title: "1. الاقتصاد الجزائري: الواقع والتحديات", 
                    content: `
                        <h2 class="doc-h2">التحولات الهيكلية والاعتماد على المحروقات</h2>
                        
                        <h3 class="doc-h3">أ. المقومات الطبيعية والبشرية:</h3>
                        <div class="callout">
                            <strong>1. المقومات الطبيعية:</strong>
                            <ul>
                                <li><strong>المساحة:</strong> 2.38 مليون كم² (أكبر دولة عربية وإفريقية)</li>
                                <li><strong>الموقع:</strong> متوسطي من الشمال، إفريقي من الجنوب</li>
                                <li><strong>الثروات الطبيعية:</strong>
                                    <ul>
                                        <li><strong>المحروقات:</strong> 12 مليار طن بترول مكافئ (10 عالمياً)</li>
                                        <li><strong>الغاز:</strong> 4.5 تريليون م³ (10 عالمياً)</li>
                                        <li><strong>المعادن:</strong> حديد، فوسفات، زنك، ذهب</li>
                                        <li><strong>الأراضي الزراعية:</strong> 8.5 مليون هكتار صالحة للزراعة</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. المقومات البشرية:</strong>
                            <ul>
                                <li><strong>عدد السكان:</strong> حوالي 45 مليون نسمة (2023)</li>
                                <li><strong>البنية العمرية:</strong> مجتمع فتي (60% أقل من 30 سنة)</li>
                                <li><strong>التوزيع الجغرافي:</strong> تركيز على الشريط الساحلي (90% في الشمال)</li>
                                <li><strong>القوى العاملة:</strong> حوالي 12 مليون نشيط</li>
                            </ul>
                        </div>
                        
                        <h3 class="doc-h3">ب. الهيكل الاقتصادي والتطور التاريخي:</h3>
                        <p class="doc-p"><strong>1. فترة ما بعد الاستقلال (1962-1979):</strong></p>
                        <ul>
                            <li>تأميم الثروات الطبيعية (المحروقات 1971)</li>
                            <li>سياسات التصنيع (الصناعات المصنعة، الصناعة الثقيلة)</li>
                            <li>إصلاح زراعي وتجربة التعاونيات</li>
                        </ul>
                        
                        <p class="doc-p"><strong>2. أزمة الثمانينات والإصلاحات (1980-1999):</strong></p>
                        <ul>
                            <li>انخفاض أسعار البترول (أزمة 1986)</li>
                            <li>برنامج التقويم الهيكلي (1989)</li>
                            <li>التحول نحو اقتصاد السوق</li>
                        </ul>
                    `
                },
                { 
                    title: "2. البرازيل: العملاق الاقتصادي لأمريكا اللاتينية", 
                    content: `
                        <h2 class="doc-h2">التناقضات التنموية في بلاد التنوع</h2>
                        
                        <h3 class="doc-h3">أ. المقومات الطبيعية الاستثنائية:</h3>
                        <div class="callout">
                            <strong>1. المجال الجغرافي:</strong>
                            <ul>
                                <li><strong>المساحة:</strong> 8.5 مليون كم² (خامس أكبر دولة في العالم)</li>
                                <li><strong>الموقع:</strong> تحتل 47% من مساحة أمريكا الجنوبية</li>
                                <li><strong>الحدود:</strong> مع جميع دول أمريكا الجنوبية ما عدا تشيلي والإكوادور</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. الموارد الطبيعية:</strong>
                            <ul>
                                <li><strong>غابة الأمازون:</strong> أكبر غابة استوائية في العالم (5.5 مليون كم²)</li>
                                <li><strong>التربة:</strong> تربة خصبة في الهضبة الوسطى (سيرادو)</li>
                                <li><strong>المعادن:</strong> حديد (ثاني مخزون عالمي)، منغنيز، بوكسيت، ذهب</li>
                                <li><strong>المياه:</strong> شبكة نهرية هائلة (نهر الأمازون أكبر نهر في العالم)</li>
                            </ul>
                        </div>
                    `
                }
            ]
        }
    },

    // =================================================================
    // 5. ISLAMIC SCIENCES - مكتمل بالتفصيل الممل
    // =================================================================
    islamic: {
        title: "العلوم الإسلامية",
        rtl: true,
        trimesters: {
            1: [
                { header: true, title: "العقيدة والفكر الإسلامي: الأسس النظرية" },
                { 
                    title: "1. العقيدة الإسلامية: المفهوم والأثر", 
                    content: `
                        <h2 class="doc-h2">التعريف الشامل للعقيدة وأبعادها</h2>
                        
                        <h3 class="doc-h3">أ. التعريف اللغوي والاصطلاحي:</h3>
                        <p class="doc-p"><strong>اللغة:</strong> من العَقْد، وهو الربط والإحكام والتوثيق. والعقيدة: ما يعتقده الإنسان ويصدق به.</p>
                        <p class="doc-p"><strong>اصطلاحاً:</strong> مجموعة الأصول الإيمانية الثابتة بالدليل القطعي من القرآن والسنة، والتي يجب على المسلم الاعتقاد الجازم بها دون شك أو ريبة.</p>
                        
                        <h3 class="doc-h3">ب. أركان العقيدة الإسلامية:</h3>
                        <div class="callout">
                            <strong>1. الإيمان بالله تعالى:</strong>
                            <ul>
                                <li><strong>الإيمان بوجوده:</strong> بدليل الفطرة والعقل والنقل</li>
                                <li><strong>الإيمان بربوبيته:</strong> أنه الخالق الرازق المحيي المميت</li>
                                <li><strong>الإيمان بألوهيته:</strong> أنه المستحق للعبادة وحده</li>
                                <li><strong>الإيمان بأسمائه وصفاته:</strong> كما وردت في الكتاب والسنة دون تحريف ولا تعطيل ولا تكييف ولا تمثيل</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. الإيمان بالملائكة:</strong>
                            <ul>
                                <li>مخلوقات نورانية، لا يأكلون ولا يشربون، لا يوصفون بذكورة ولا أنوثة</li>
                                <li>عقيدة المسلم فيهم: الإيمان بوجودهم، وعدم التشبه بهم، والاعتقاد بأنهم عباد مكرمون</li>
                                <li>أسماء بعضهم: جبريل (الوحي)، ميكائيل (الرزق)، إسرافيل (النفخ في الصور)، ملك الموت (قبض الأرواح)</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>3. الإيمان بالكتب السماوية:</strong>
                            <ul>
                                <li>الإيمان إجمالاً بأن الله أنزل كتباً على رسله</li>
                                <li>الإيمان تفصيلاً بما ذكر منها: الصحف (إبراهيم)، التوراة (موسى)، الزبور (داود)، الإنجيل (عيسى)، القرآن (محمد صلى الله عليه وسلم)</li>
                                <li>القرآن هو المهيمن على ما سبقه، والمحفوظ من التحريف</li>
                            </ul>
                        </div>
                        
                        <h3 class="doc-h3">ج. آثار العقيدة على الفرد:</h3>
                        <table class="simple-table">
                            <tr><th>المجال</th><th>الأثر الإيجابي</th><th>الدليل الشرعي</th></tr>
                            <tr>
                                <td><strong>النفسية</strong></td>
                                <td>الطمأنينة، الرضا، الثبات، التفاؤل</td>
                                <td>﴿الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ﴾ [الرعد: 28]</td>
                            </tr>
                            <tr>
                                <td><strong>السلوكية</strong></td>
                                <td>الاستقامة، الصبر، الأمانة، الإخلاص</td>
                                <td>﴿إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ﴾ [فصلت: 30]</td>
                            </tr>
                            <tr>
                                <td><strong>الاجتماعية</strong></td>
                                <td>التعاون، التواضع، البر، صلة الرحم</td>
                                <td>﴿وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ﴾ [المائدة: 2]</td>
                            </tr>
                            <tr>
                                <td><strong>المعرفية</strong></td>
                                <td>طلب العلم، التفكر، التأمل، الإبداع</td>
                                <td>﴿قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ﴾ [الزمر: 9]</td>
                            </tr>
                        </table>
                    `
                },
                { 
                    title: "2. وسائل القرآن الكريم في تقرير العقيدة", 
                    content: `
                        <h2 class="doc-h2">المنهج القرآني في بناء المعتقدات</h2>
                        
                        <h3 class="doc-h3">أ. أسلوب التذكير والموعظة:</h3>
                        <div class="callout">
                            <strong>1. تذكير الإنسان بأصله ومصيره:</strong>
                            <ul>
                                <li>﴿يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ﴾ [النساء: 1]</li>
                                <li>﴿كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ﴾ [آل عمران: 185]</li>
                                <li>﴿وَأَنَّ إِلَى رَبِّكَ الْمُنْتَهَى﴾ [النجم: 42]</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. عرض قصص السابقين للعبرة:</strong>
                            <ul>
                                <li>قصة آدم وإبليس: الصراع بين الحق والباطل</li>
                                <li>قصة نوح: الصبر في الدعوة</li>
                                <li>قصة إبراهيم: التوحيد الخالص</li>
                                <li>قصة موسى: الصراع مع الطغيان</li>
                                <li>قصة عيسى: المعجزات الإلهية</li>
                            </ul>
                        </div>
                        
                        <h3 class="doc-h3">ب. أسلوب إثارة العقل والتفكر:</h3>
                        <p class="doc-p"><strong>1. التفكر في الكون:</strong> أكثر من 750 آية تحض على التفكر والتدبر</p>
                        <table class="simple-table">
                            <tr><th>مجال التفكر</th><th>نماذج من الآيات</th><th>الهدف العقائدي</th></tr>
                            <tr>
                                <td>التفكر في خلق السماوات والأرض</td>
                                <td>﴿إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ﴾ [آل عمران: 190]</td>
                                <td>إثبات وجود الخالق ووحدانيته</td>
                            </tr>
                            <tr>
                                <td>التفكر في خلق الإنسان</td>
                                <td>﴿وَفِي أَنْفُسِكُمْ أَفَلَا تُبْصِرُونَ﴾ [الذاريات: 21]</td>
                                <td>إثبات الحكمة والقدرة الإلهية</td>
                            </tr>
                            <tr>
                                <td>التفكر في الحيوانات</td>
                                <td>﴿وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً﴾ [النحل: 66]</td>
                                <td>إثبات الرزق والتدبير الإلهي</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">ج. أسلوب الحوار والمناقشة:</h3>
                        <div class="callout">
                            <strong>نماذج الحوار القرآني:</strong>
                            <ul>
                                <li><strong>حوار إبراهيم مع أبيه:</strong> ﴿يَا أَبَتِ لِمَ تَعْبُدُ مَا لَا يَسْمَعُ وَلَا يُبْصِرُ﴾ [مريم: 42]</li>
                                <li><strong>حوار إبراهيم مع النمرود:</strong> ﴿رَبِّيَ الَّذِي يُحْيِي وَيُمِيتُ﴾ [البقرة: 258]</li>
                                <li><strong>حوار موسى مع فرعون:</strong> ﴿قَالَ رَبُّنَا الَّذِي أَعْطَى كُلَّ شَيْءٍ خَلْقَهُ﴾ [طه: 50]</li>
                            </ul>
                        </div>
                    `
                },
                { 
                    title: "3. وحدة الرسالات السماوية", 
                    content: `
                        <h2 class="doc-h2">التكامل والانسجام بين الشرائع الإلهية</h2>
                        
                        <h3 class="doc-h3">أ. الأسس المشتركة بين الرسالات:</h3>
                        <table class="simple-table">
                            <tr><th>الأصل المشترك</th><th>دليل من القرآن</th><th>تطبيقه في الشرائع</th></tr>
                            <tr>
                                <td><strong>التوحيد</strong></td>
                                <td>﴿وَمَا أَرْسَلْنَا مِنْ قَبْلِكَ مِنْ رَسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَهَ إِلَّا أَنَا فَاعْبُدُونِ﴾ [الأنبياء: 25]</td>
                                <td>أساس كل الرسالات: نوح، إبراهيم، موسى، عيسى، محمد</td>
                            </tr>
                            <tr>
                                <td><strong>الإيمان باليوم الآخر</strong></td>
                                <td>﴿إِنَّ الَّذِينَ آمَنُوا وَالَّذِينَ هَادُوا وَالنَّصَارَى وَالصَّابِئِينَ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ﴾ [البقرة: 62]</td>
                                <td>ثوابت في التوراة والإنجيل والقرآن</td>
                            </tr>
                            <tr>
                                <td><strong>القيم الأخلاقية</strong></td>
                                <td>﴿قُلْ تَعَالَوْا أَتْلُ مَا حَرَّمَ رَبُّكُمْ عَلَيْكُمْ﴾ [الأنعام: 151]</td>
                                <td>الوصايا العشر وغيرها من القيم المشتركة</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">ب. خصائص الشريعة الإسلامية كخاتمة الشرائع:</h3>
                        <div class="callout">
                            <strong>1. الشمول والكمال:</strong>
                            <ul>
                                <li>﴿الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ﴾ [المائدة: 3]</li>
                                <li>شملت جميع جوانب الحياة: عقيدة، عبادة، معاملة، أخلاق</li>
                                <li>صلاحية لكل زمان ومكان</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. الوسطية والاعتدال:</strong>
                            <ul>
                                <li>﴿وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا﴾ [البقرة: 143]</li>
                                <li>الاعتدال في العبادة: لا رهبانية ولا انحلال</li>
                                <li>الاعتدال في المال: لا إسراف ولا تقتير</li>
                            </ul>
                        </div>
                    `
                }
            ],

            2: [
                { header: true, title: "الفقه وأصوله: التشريع الإسلامي وتطبيقاته" },
                { 
                    title: "1. مقاصد الشريعة الإسلامية", 
                    content: `
                        <h2 class="doc-h2">الحكمة التشريعية وغاياتها العليا</h2>
                        
                        <h3 class="doc-h3">أ. تعريف المقاصد ومراتبها:</h3>
                        <p class="doc-p"><strong>التعريف:</strong> المقاصد هي الحِكَم والغايات التي راعاها الشارع في التشريع، والتي تتحقق بمقتضاها مصالح العباد في الدنيا والآخرة.</p>
                        
                        <table class="simple-table">
                            <tr><th>المرتبة</th><th>التعريف</th><th>الأمثلة</th><th>الوضع الشرعي</th></tr>
                            <tr>
                                <td><strong>الضروريات</strong></td>
                                <td>ما لا قيام للحياة بدونه، ويفوت بفواته نظام الحياة</td>
                                <td>حفظ الدين، النفس، العقل، النسل، المال</td>
                                <td>أصل الوجود، واجب الحماية</td>
                            </tr>
                            <tr>
                                <td><strong>الحاجيات</strong></td>
                                <td>ما يحتاج إليه لتوسعة الحياة ورفع الضيق، لا للضرورة</td>
                                <td>الرخص الشرعية (الفطر في السفر، الجمع والقصر)</td>
                                <td>تحقيق المنفعة، دفع المشقة</td>
                            </tr>
                            <tr>
                                <td><strong>التحسينيات</strong></td>
                                <td>ما يرجع إلى محاسن العادات ومكارم الأخلاق</td>
                                <td>آداب الأكل والشرب، الطهارة، اللباس</td>
                                <td>تحسين الحياة، اكتمال المروءة</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">ب. الضروريات الخمس (الكليات الخمس):</h3>
                        <div class="callout">
                            <strong>1. حفظ الدين:</strong>
                            <ul>
                                <li><strong>التعريف:</strong> حماية العقيدة والشريعة من الانحراف</li>
                                <li><strong>وسائل الحفظ:</strong> إقامة الشعائر، الدعوة، الجهاد</li>
                                <li><strong>التشريعات:</strong> فرض الصلاة، الزكاة، الحج، الأمر بالمعروف والنهي عن المنكر</li>
                                <li><strong>مخاطر الإهمال:</strong> الضلال، الشرك، الانحلال الأخلاقي</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. حفظ النفس:</strong>
                            <ul>
                                <li><strong>التعريف:</strong> صيانة حياة الإنسان من الاعتداء</li>
                                <li><strong>وسائل الحفظ:</strong> تحريم القتل، فرض القصاص، الدية</li>
                                <li><strong>التشريعات:</strong> ﴿وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ﴾ [الأنعام: 151]</li>
                                <li><strong>مخاطر الإهمال:</strong> الفوضى، انعدام الأمن، انتشار الجريمة</li>
                            </ul>
                        </div>
                        
                        <h3 class="doc-h3">ج. تطبيقات المقاصد في القضايا المعاصرة:</h3>
                        <p class="doc-p"><strong>1. في المجال الاقتصادي:</strong></p>
                        <ul>
                            <li>تحريم الربا: لحفظ المال من الاستغلال</li>
                            <li>فرض الزكاة: لحفظ التوازن الاجتماعي</li>
                            <li>تشجيع الوقف: لتحقيق التنمية المستدامة</li>
                        </ul>
                    `
                },
                { 
                    title: "2. مصادر التشريع الإسلامي التبعية", 
                    content: `
                        <h2 class="doc-h2">الأدلة الشرعية الفرعية وضوابط الاستنباط</h2>
                        
                        <h3 class="doc-h3">أ. الإجماع: تعريفه وأنواعه:</h3>
                        <div class="callout">
                            <strong>التعريف:</strong> اتفاق مجتهدي أمة محمد صلى الله عليه وسلم بعد وفاته في عصر من العصور على حكم شرعي.
                        </div>
                        
                        <table class="simple-table">
                            <tr><th>نوع الإجماع</th><th>التعريف</th><th>مثال</th><th>قوته الدليلية</th></tr>
                            <tr>
                                <td><strong>الإجماع الصريح</strong></td>
                                <td>أن يصدر عن كل مجتهد قول صريح أو فعل يدل على الموافقة</td>
                                <td>إجماع الصحابة على جمع القرآن</td>
                                <td>قطعي، لا يجوز مخالفته</td>
                            </tr>
                            <tr>
                                <td><strong>الإجماع السكوتي</strong></td>
                                <td>أن يصرح بعض المجتهدين بحكم وسكت الباقون</td>
                                <td>سكوت الصحابة على تقديم أبي بكر للصلاة</td>
                                <td>ظني، محل خلاف بين العلماء</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">ب. القياس: أركانه وشروطه:</h3>
                        <p class="doc-p"><strong>التعريف:</strong> مساواة فرع بأصل في الحكم لاشتراكهما في العلة.</p>
                        
                        <div class="callout">
                            <strong>أركان القياس الأربعة:</strong>
                            <ol>
                                <li><strong>الأصل:</strong> المسألة المنصوص على حكمها (مثل: تحريم الخمر)</li>
                                <li><strong>الفرع:</strong> المسألة المراد معرفة حكمها (مثل: المخدرات)</li>
                                <li><strong>العلة:</strong> الوصف الجامع بين الأصل والفرع (الإسكار)</li>
                                <li><strong>الحكم:</strong> ما ثبت في الأصل وينتقل إلى الفرع (التحريم)</li>
                            </ol>
                        </div>
                    `
                },
                { 
                    title: "3. الوقف الإسلامي: مفهومه وآثاره", 
                    content: `
                        <h2 class="doc-h2">النظام الوقفي ودوره في التنمية المجتمعية</h2>
                        
                        <h3 class="doc-h3">أ. التعريف والأحكام:</h3>
                        <p class="doc-p"><strong>اللغة:</strong> الحبس والمنع.</p>
                        <p class="doc-p"><strong>اصطلاحاً:</strong> تحبيس الأصل وتسبيل المنفعة. أي: حبس المال عن التملك والتداول، وتوجيه منافعه إلى وجوه البر.</p>
                        
                        <div class="callout">
                            <strong>شروط الوقف:</strong>
                            <ul>
                                <li><strong>الواقف:</strong> أن يكون مالكاً، رشيداً، مختاراً</li>
                                <li><strong>الموقوف:</strong> أن يكون مالاً متقوماً، معيناً، مملوكاً</li>
                                <li><strong>الموقوف عليه:</strong> أن يكون جهة بر قربة إلى الله</li>
                                <li><strong>الصيغة:</strong> كل لفظ يدل على الحبس والتسبيل</li>
                            </ul>
                        </div>
                        
                        <h3 class="doc-h3">ب. أنواع الوقف:</h3>
                        <table class="simple-table">
                            <tr><th>النوع</th><th>التعريف</th><th>الأمثلة</th></tr>
                            <tr>
                                <td><strong>الوقف الذري (الأهلي)</strong></td>
                                <td>ما جعل ريعه للواقف ثم لذريته ثم للفقراء</td>
                                <td>وقف عمر بن الخطاب على ذريته ثم المساكين</td>
                            </tr>
                            <tr>
                                <td><strong>الوقف الخيري</strong></td>
                                <td>ما خصص ريعه للجهات الخيرية مباشرة</td>
                                <td>المساجد، المدارس، المستشفيات</td>
                            </tr>
                            <tr>
                                <td><strong>الوقف المشترك</strong></td>
                                <td>ما جمع بين النوعين</td>
                                <td>ريعه جزء للذريه وجزء للفقراء</td>
                            </tr>
                        </table>
                    `
                }
            ],

            3: [
                { header: true, title: "القيم والمعاملات: المنظور الإسلامي" },
                { 
                    title: "1. القيم في القرآن الكريم: تصنيف وتطبيق", 
                    content: `
                        <h2 class="doc-h2">المنظومة القيمية الإسلامية الشاملة</h2>
                        
                        <h3 class="doc-h3">أ. القيم الفردية:</h3>
                        <table class="simple-table">
                            <tr><th>القيمة</th><th>التعريف</th><th>الدليل القرآني</th><th>التطبيقات</th></tr>
                            <tr>
                                <td><strong>الإخلاص</strong></td>
                                <td>تصفية العمل من شوائب الرياء</td>
                                <td>﴿وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ﴾ [البينة: 5]</td>
                                <td>إخلاص النية، تجنب الرياء، مراقبة الله</td>
                            </tr>
                            <tr>
                                <td><strong>الصدق</strong></td>
                                <td>مطابقة القول للواقع والاعتقاد</td>
                                <td>﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ﴾ [التوبة: 119]</td>
                                <td>الصدق في الحديث، الوعود، المعاملات</td>
                            </tr>
                            <tr>
                                <td><strong>الصبر</strong></td>
                                <td>حبس النفس على ما تكره طاعة لله</td>
                                <td>﴿وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ﴾ [البقرة: 45]</td>
                                <td>الصبر على الطاعة، المعصية، البلاء</td>
                            </tr>
                            <tr>
                                <td><strong>التوكل</strong></td>
                                <td>اعتماد القلب على الله مع الأخذ بالأسباب</td>
                                <td>﴿وَعَلَى اللَّهِ فَتَوَكَّلُوا إِنْ كُنْتُمْ مُؤْمِنِينَ﴾ [المائدة: 23]</td>
                                <td>الجمع بين الأخذ بالأسباب والاعتماد على الله</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">ب. القيم الأسرية:</h3>
                        <div class="callout">
                            <strong>1. البر بالوالدين:</strong>
                            <ul>
                                <li>﴿وَقَضَى رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا﴾ [الإسراء: 23]</li>
                                <li><strong>مظاهر البر:</strong> الطاعة في غير المعصية، الإحسان، الدعاء</li>
                                <li><strong>ضوابط:</strong> لا طاعة في معصية الخالق</li>
                            </ul>
                        </div>
                    `
                },
                { 
                    title: "2. الحرية الشخصية في الإسلام: المفهوم والضوابط", 
                    content: `
                        <h2 class="doc-h2">التوازن بين الحرية والمسؤولية</h2>
                        
                        <h3 class="doc-h3">أ. مفهوم الحرية في الإسلام:</h3>
                        <p class="doc-p"><strong>الحرية في التصور الإسلامي:</strong> ليست انفلاتاً ولا تحرراً من كل القيود، ولكنها تحرر من عبودية غير الله، وانضباط بشريعة الله.</p>
                        
                        <div class="callout">
                            <strong>مقاصد الحرية في الإسلام:</strong>
                            <ol>
                                <li><strong>تحقيق العبودية لله:</strong> الحرية الحقيقية هي التحرر من عبودية الهوى والشهوات</li>
                                <li><strong>تحقيق الكرامة الإنسانية:</strong> ﴿وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ﴾ [الإسراء: 70]</li>
                                <li><strong>تحقيق المسؤولية:</strong> الحرية مقرونة بالمسؤولية والجزاء</li>
                                <li><strong>تحقيق الاختيار:</strong> ﴿فَمَنْ شَاءَ فَلْيُؤْمِنْ وَمَنْ شَاءَ فَلْيَكْفُرْ﴾ [الكهف: 29]</li>
                            </ol>
                        </div>
                        
                        <h3 class="doc-h3">ب. ضوابط الحرية في الإسلام:</h3>
                        <table class="simple-table">
                            <tr><th>الضابط</th><th>التعريف</th><th>التطبيق</th><th>الدليل</th></tr>
                            <tr>
                                <td><strong>عدم الإضرار</strong></td>
                                <td>لا حرية في الإضرار بالنفس أو بالغير</td>
                                <td>تحريم الانتحار، المخدرات، الاعتداء على الآخرين</td>
                                <td>قاعدة: "لا ضرر ولا ضرار"</td>
                            </tr>
                            <tr>
                                <td><strong>عدم التعارض مع النصوص</strong></td>
                                <td>الحرية مقيدة بالثوابت الشرعية</td>
                                <td>لا حرية في ترك الصلاة، شرب الخمر</td>
                                <td>﴿وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا﴾ [الأحزاب: 36]</td>
                            </tr>
                            <tr>
                                <td><strong>مراعاة النظام العام</strong></td>
                                <td>الحرية لا تبيح الإخلال بالنظام العام</td>
                                <td>ضوابط المظاهرات، حرية التعبير</td>
                                <td>قاعدة: "تصرف الإمام على الرعية منوط بالمصلحة"</td>
                            </tr>
                            <tr>
                                <td><strong>احترام حقوق الآخرين</strong></td>
                                <td>حرية الفرد تنتهي حيث تبدأ حرية الآخرين</td>
                                <td>ضوابط حرية الملكية، حرية الرأي</td>
                                <td>﴿وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى﴾ [المائدة: 2]</td>
                            </tr>
                        </table>
                    `
                },
                { 
                    title: "3. خطبة الوداع: التحليل والمضامين", 
                    content: `
                        <h2 class="doc-h2">الوثيقة التأسيسية للحقوق في الإسلام</h2>
                        
                        <h3 class="doc-h3">أ. الظروف التاريخية للخطبة:</h3>
                        <div class="callout">
                            <strong>1. الزمان والمكان:</strong>
                            <ul>
                                <li><strong>التاريخ:</strong> 9 ذو الحجة سنة 10 هـ</li>
                                <li><strong>المكان:</strong> عرفة، في حجة الوداع</li>
                                <li><strong>المناسبة:</strong> آخر حجة للنبي صلى الله عليه وسلم</li>
                                <li><strong>الحضور:</strong> أكثر من 100 ألف من الصحابة</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. الأهداف العامة:</strong>
                            <ul>
                                <li>تثبيت مبادئ الإسلام الأساسية</li>
                                <li>بيان كمال الدين</li>
                                <li>توصية الأمة بالتمسك بالقرآن والسنة</li>
                                <li>توضيح الحقوق والواجبات</li>
                            </ul>
                        </div>
                        
                        <h3 class="doc-h3">ب. المضامين الأساسية للخطبة:</h3>
                        <table class="simple-table">
                            <tr><th>المحور</th><th>النص من الخطبة</th><th>المضامين</th><th>التطبيقات المعاصرة</th></tr>
                            <tr>
                                <td><strong>الحقوق المالية</strong></td>
                                <td>"إن دماءكم وأموالكم وأعراضكم عليكم حرام"</td>
                                <td>حرمة الاعتداء على المال، تحريم السرقة، الغش، الربا</td>
                                <td>قوانين حماية الملكية، مكافحة الفساد المالي</td>
                            </tr>
                            <tr>
                                <td><strong>حقوق المرأة</strong></td>
                                <td>"استوصوا بالنساء خيراً"</td>
                                <td>الرفق بالنساء، العدل بين الزوجات، النفقة، المهر</td>
                                <td>قوانين حماية المرأة، مناهضة العنف الأسري</td>
                            </tr>
                            <tr>
                                <td><strong>المساواة الإنسانية</strong></td>
                                <td>"لا فضل لعربي على أعجمي إلا بالتقوى"</td>
                                <td>إلغاء العصبية، تكافؤ الفرص، العدالة الاجتماعية</td>
                                <td>مكافحة التمييز العنصري، تكافؤ الفرص في العمل</td>
                            </tr>
                        </table>
                        
                        <h3 class="doc-h3">ج. القيم المستفادة من الخطبة:</h3>
                        <div class="callout">
                            <strong>1. قيمة العدل:</strong>
                            <ul>
                                <li>العدل في القضاء</li>
                                <li>العدل بين الأولاد</li>
                                <li>العدل بين الزوجات</li>
                                <li>العدل في المعاملات</li>
                            </ul>
                        </div>
                        
                        <div class="callout">
                            <strong>2. قيمة الرحمة:</strong>
                            <ul>
                                <li>الرحمة بالنساء</li>
                                <li>الرحمة بالأطفال</li>
                                <li>الرحمة بالخدم</li>
                                <li>الرحمة بالحيوان</li>
                            </ul>
                        </div>
                    `
                }
            ]
        }
    },
    
    math: {
        title: "الرياضيات",
        trimesters: {
            1: [
                { 
                    header: true, 
                    title: "المحور الأول: الدوال العددية (النهايات والاشتقاقية)" 
                },
                { 
                    title: "1. النهايات والاستمرارية", 
                    content: `
                    <h3 style="color:#818cf8;">النهايات والاستمرارية - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أولاً: مفهوم النهاية (LIMIT) - شرح من الصفر:</h4>
                    <p>عندما نقول "نهاية الدالة f(x) عندما تؤول x إلى a" نعني: ما هي القيمة التي تقترب منها f(x) عندما نقترب بـ x من القيمة a (من اليمين أو اليسار أو الاثنين معاً).</p>
                    <p><strong>رسمياً:</strong> نقول أن lim f(x) = L عندما x → a إذا كان بإمكاننا جعل f(x) قريبة من L بقدر ما نريد بمجرد أخذ x قريبة بما يكفي من a.</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أنواع النهايات:</h4>
                    <p>1. <strong>نهاية منتهية:</strong> lim f(x) = L (حيث L عدد حقيقي محدد)</p>
                    <p>2. <strong>نهاية لا منتهية:</strong> lim f(x) = ∞ أو -∞</p>
                    <p>3. <strong>نهاية من اليمين:</strong> lim f(x) عندما x → a⁺</p>
                    <p>4. <strong>نهاية من اليسار:</strong> lim f(x) عندما x → a⁻</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>خواص النهايات (أهمية كبرى):</h4>
                    <p>إذا كانت lim f(x) = L و lim g(x) = M عندما x → a فإن:</p>
                    <p>1. lim [f(x) + g(x)] = L + M</p>
                    <p>2. lim [f(x) - g(x)] = L - M</p>
                    <p>3. lim [f(x) × g(x)] = L × M</p>
                    <p>4. lim [f(x) / g(x)] = L / M (بشرط M ≠ 0)</p>
                    <p>5. lim [k × f(x)] = k × L (حيث k ثابت)</p>
                    <p>6. lim [f(x)]ⁿ = Lⁿ (حيث n عدد صحيح موجب)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>النهايات الشهيرة التي يجب حفظها عن ظهر قلب:</h4>
                    <p>1. lim (sin x)/x = 1 عندما x → 0</p>
                    <p>2. lim (1 + 1/x)ˣ = e عندما x → ∞</p>
                    <p>3. lim (eˣ - 1)/x = 1 عندما x → 0</p>
                    <p>4. lim (ln(1+x))/x = 1 عندما x → 0</p>
                    <p>5. lim (1 - cos x)/x² = 1/2 عندما x → 0</p>
                    <p>6. lim (aˣ - 1)/x = ln a عندما x → 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال تطبيقي رقم 1 (مبسط جداً):</h4>
                    <p>احسب: lim (x² - 4)/(x - 2) عندما x → 2</p>
                    <p><strong>الحل خطوة بخطوة:</strong></p>
                    <p>الخطوة 1: التعويض المباشر يعطي 0/0 (صفر على صفر) وهذا شكل غير محدد</p>
                    <p>الخطوة 2: نحلل البسط: x² - 4 = (x - 2)(x + 2)</p>
                    <p>الخطوة 3: نبسط: (x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2) = x + 2 (لـ x ≠ 2)</p>
                    <p>الخطوة 4: نحسب النهاية: lim (x + 2) = 2 + 2 = 4</p>
                    <p><strong>الإجابة النهائية: 4</strong></p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال تطبيقي رقم 2 (أصعب قليلاً):</h4>
                    <p>احسب: lim (√(x+1) - 1)/x عندما x → 0</p>
                    <p><strong>الحل:</strong></p>
                    <p>الخطوة 1: التعويض المباشر يعطي 0/0</p>
                    <p>الخطوة 2: نضرب في مرافق البسط: [(√(x+1) - 1)/x] × [(√(x+1) + 1)/(√(x+1) + 1)]</p>
                    <p>الخطوة 3: نحصل على: (x+1 - 1)/[x(√(x+1) + 1)] = x/[x(√(x+1) + 1)]</p>
                    <p>الخطوة 4: نبسط x مع x: 1/(√(x+1) + 1)</p>
                    <p>الخطوة 5: نحسب النهاية: 1/(√(0+1) + 1) = 1/(1+1) = 1/2</p>
                    <p><strong>الإجابة: 1/2</strong></p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الاستمرارية (CONTINUITY) - شرح مفصل:</h4>
                    <p>دالة f مستمرة عند النقطة a إذا تحققت الشروط الثلاثة التالية:</p>
                    <p>1. f(a) معرفة (أي أن a تنتمي لمجال تعريف الدالة)</p>
                    <p>2. lim f(x) موجودة عندما x → a</p>
                    <p>3. lim f(x) = f(a) عندما x → a</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أنواع عدم الاستمرارية:</h4>
                    <p>1. <strong>عدم استمرارية قابلة للإزالة:</strong> عندما توجد النهاية لكنها لا تساوي f(a)</p>
                    <p>2. <strong>عدم استمرارية قفزية:</strong> عندما تكون النهايتان من اليمين واليسار مختلفتين</p>
                    <p>3. <strong>عدم استمرارية لا نهائية:</strong> عندما تكون إحدى النهايتين لا منتهية</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مبرهنة القيمة المتوسطة:</h4>
                    <p>إذا كانت f مستمرة على [a, b] وكانت f(a) و f(b) إشارتاهما متعاكستين (أي f(a) × f(b) < 0) فإنه يوجد على الأقل نقطة c في ]a, b[ حيث f(c) = 0</p>
                    <p><strong>مثال تطبيقي:</strong></p>
                    <p>الدالة f(x) = x³ - x - 1، أثبت أن لها جذر في المجال [1, 2]</p>
                    <p><strong>الحل:</strong></p>
                    <p>f(1) = 1³ - 1 - 1 = -1 (سالب)</p>
                    <p>f(2) = 2³ - 2 - 1 = 5 (موجب)</p>
                    <p>بما أن f مستمرة على [1, 2] و f(1) × f(2) = -5 < 0، إذن يوجد c في ]1, 2[ حيث f(c) = 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمرين إضافي للطالب مع الحل:</h4>
                    <p><strong>التمرين:</strong> ادرس استمرارية الدالة f المعرفة كالتالي:</p>
                    <p>f(x) = (x² - 1)/(x - 1) إذا كان x ≠ 1</p>
                    <p>f(x) = 3 إذا كان x = 1</p>
                    <p><strong>الحل:</strong></p>
                    <p>1. f(1) = 3 (معرفة)</p>
                    <p>2. lim f(x) عندما x → 1: lim (x² - 1)/(x - 1) = lim (x-1)(x+1)/(x-1) = lim (x+1) = 2</p>
                    <p>3. بما أن lim f(x) = 2 ≠ f(1) = 3، إذن f غير مستمرة عند 1 (عدم استمرارية قابلة للإزالة)</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: النهايات هي أساس التفاضل والتكامل، لا تتسرع في حلها، اكتب كل الخطوات حتى لا تخطئ.</span>
                    `
                },
                { 
                    title: "2. الاشتقاقية", 
                    content: `
                    <h3 style="color:#818cf8;">الاشتقاقية - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مقدمة: لماذا ندرس الاشتقاق؟</h4>
                    <p>الاشتقاق يعني إيجاد معدل التغير اللحظي للدالة. إذا كانت الدالة تمثل مسافة بالنسبة للزمن، فإن مشتقتها تمثل السرعة اللحظية. إذا كانت تمثل السرعة، فإن مشتقتها تمثل التسارع.</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التعريف الرياضي الدقيق للعدد المشتق:</h4>
                    <p>العدد المشتق للدالة f عند النقطة x₀ هو: f'(x₀) = lim [f(x) - f(x₀)]/(x - x₀) عندما x → x₀</p>
                    <p>أو بشكل آخر: f'(x₀) = lim [f(x₀ + h) - f(x₀)]/h عندما h → 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال مبسط جداً لفهم التعريف:</h4>
                    <p>لنفترض f(x) = x²، نريد إيجاد f'(3)</p>
                    <p>f'(3) = lim [f(3+h) - f(3)]/h عندما h → 0</p>
                    <p>f(3+h) = (3+h)² = 9 + 6h + h²</p>
                    <p>f(3) = 9</p>
                    <p>f(3+h) - f(3) = (9 + 6h + h²) - 9 = 6h + h²</p>
                    <p>[f(3+h) - f(3)]/h = (6h + h²)/h = 6 + h</p>
                    <p>lim (6 + h) عندما h → 0 = 6</p>
                    <p><strong>إذن f'(3) = 6</strong></p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المشتقات الأساسية التي يجب حفظها:</h4>
                    <p>1. إذا كانت f(x) = c (ثابت) فإن f'(x) = 0</p>
                    <p>2. إذا كانت f(x) = x فإن f'(x) = 1</p>
                    <p>3. إذا كانت f(x) = xⁿ فإن f'(x) = n × xⁿ⁻¹</p>
                    <p>4. إذا كانت f(x) = √x فإن f'(x) = 1/(2√x)</p>
                    <p>5. إذا كانت f(x) = 1/x فإن f'(x) = -1/x²</p>
                    <p>6. إذا كانت f(x) = sin x فإن f'(x) = cos x</p>
                    <p>7. إذا كانت f(x) = cos x فإن f'(x) = -sin x</p>
                    <p>8. إذا كانت f(x) = eˣ فإن f'(x) = eˣ</p>
                    <p>9. إذا كانت f(x) = ln x فإن f'(x) = 1/x</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>قواعد الاشتقاق (الأهم على الإطلاق):</h4>
                    <p><strong>1. قاعدة المجموع والفرق:</strong> (u ± v)' = u' ± v'</p>
                    <p><strong>2. قاعدة الضرب في ثابت:</strong> (k × u)' = k × u'</p>
                    <p><strong>3. قاعدة جداء دالتين:</strong> (u × v)' = u' × v + u × v'</p>
                    <p><strong>4. قاعدة قسمة دالتين:</strong> (u/v)' = (u' × v - u × v')/v²</p>
                    <p><strong>5. قاعدة السلسلة (مشتقة دالة مركبة):</strong> [f(g(x))]' = f'(g(x)) × g'(x)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال تطبيقي شامل لكل القواعد:</h4>
                    <p>أوجد مشتقة: f(x) = (3x² + 2x) × eˣ</p>
                    <p><strong>الحل خطوة بخطوة:</strong></p>
                    <p>نفرض: u(x) = 3x² + 2x و v(x) = eˣ</p>
                    <p>u'(x) = 6x + 2</p>
                    <p>v'(x) = eˣ</p>
                    <p>باستخدام قاعدة جداء دالتين: f'(x) = u' × v + u × v'</p>
                    <p>f'(x) = (6x + 2) × eˣ + (3x² + 2x) × eˣ</p>
                    <p>نخرج العامل المشترك eˣ: f'(x) = eˣ × [(6x + 2) + (3x² + 2x)]</p>
                    <p>f'(x) = eˣ × (3x² + 8x + 2)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التفسير الهندسي: المماس (TANGENT)</h4>
                    <p>ميل المماس للمنحنى y = f(x) عند النقطة (x₀, f(x₀)) هو f'(x₀)</p>
                    <p><strong>معادلة المماس:</strong> y - f(x₀) = f'(x₀) × (x - x₀)</p>
                    <p><strong>مثال:</strong> أوجد معادلة المماس للمنحنى f(x) = x² عند النقطة (2, 4)</p>
                    <p>f'(x) = 2x، إذن f'(2) = 4</p>
                    <p>معادلة المماس: y - 4 = 4 × (x - 2)</p>
                    <p>أي: y = 4x - 8 + 4 = 4x - 4</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الدالة المشتقة واتجاه تغير الدالة:</h4>
                    <p>1. إذا كانت f'(x) > 0 على مجال I فإن f تزايدية على I</p>
                    <p>2. إذا كانت f'(x) < 0 على مجال I فإن f تناقصية على I</p>
                    <p>3. إذا كانت f'(x) = 0 عند x₀ فإن النقطة (x₀, f(x₀)) نقطة حرجة (نهاية محلية أو صغرى محلية أو نقطة انقلاب)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مشتقة من الرتبة الثانية ونقطة الانعطاف:</h4>
                    <p>مشتقة من الرتبة الثانية: f''(x) = مشتقة f'(x)</p>
                    <p><strong>دلالة المشتقة الثانية:</strong></p>
                    <p>1. إذا كانت f''(x) > 0 فإن المنحنى مقعر لأعلى (محدب)</p>
                    <p>2. إذا كانت f''(x) < 0 فإن المنحنى مقعر لأسفل (مقعر)</p>
                    <p>3. <strong>نقطة الانعطاف:</strong> النقطة التي تتغير فيها تقعرية المنحنى (تغير إشارة f''(x))</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمرين شامل للطالب:</h4>
                    <p><strong>التمرين:</strong> ليكن f(x) = x³ - 3x² + 2</p>
                    <p>1. أحسب f'(x) و f''(x)</p>
                    <p>2. حدد فترات التزايد والتناقص</p>
                    <p>3. أوجد النقاط الحرجة</p>
                    <p>4. حدد فترات التقعر والتحدب</p>
                    <p>5. أوجد نقطة الانعطاف إن وجدت</p>
                    <p><strong>الحل:</strong></p>
                    <p>1. f'(x) = 3x² - 6x، f''(x) = 6x - 6</p>
                    <p>2. f'(x) = 3x(x - 2)</p>
                    <p>   f'(x) > 0 عندما x ∈ ]-∞, 0[ ∪ ]2, ∞[ (تزايدية)</p>
                    <p>   f'(x) < 0 عندما x ∈ ]0, 2[ (تناقصية)</p>
                    <p>3. النقاط الحرجة: f'(x) = 0 ⇒ x = 0 أو x = 2</p>
                    <p>   f(0) = 2 ⇒ النقطة (0, 2) عظمى محلية</p>
                    <p>   f(2) = 8 - 12 + 2 = -2 ⇒ النقطة (2, -2) صغرى محلية</p>
                    <p>4. f''(x) = 6(x - 1)</p>
                    <p>   f''(x) > 0 عندما x > 1 (مقعر لأعلى)</p>
                    <p>   f''(x) < 0 عندما x < 1 (مقعر لأسفل)</p>
                    <p>5. نقطة الانعطاف عند x = 1 حيث f''(1) = 0 وتتغير إشارة f''(x)</p>
                    <p>   f(1) = 1 - 3 + 2 = 0 ⇒ النقطة (1, 0) نقطة انعطاف</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: الاشتقاق هو أداة قوية لدراسة الدوال، تأكد من فهمك للتعريف قبل الانتقال للتطبيقات.</span>
                    `
                },
                { 
                    header: true, 
                    title: "المحور الثاني: الدوال الأسية واللوغاريتمية" 
                },
                { 
                    title: "1. الدالة الأسية (Expo)", 
                    content: `
                    <h3 style="color:#818cf8;">الدالة الأسية - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التعريف الأساسي:</h4>
                    <p>الدالة الأسية للأساس e (عدد نيبير) هي: f(x) = eˣ حيث e ≈ 2.718281828...</p>
                    <p>خصائص العدد e: lim (1 + 1/n)ⁿ = e عندما n → ∞</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الخواص الجبرية للدالة الأسية:</h4>
                    <p>1. e⁰ = 1</p>
                    <p>2. eˣ × eʸ = eˣ⁺ʸ</p>
                    <p>3. eˣ / eʸ = eˣ⁻ʸ</p>
                    <p>4. (eˣ)ⁿ = eⁿˣ</p>
                    <p>5. e⁻ˣ = 1/eˣ</p>
                    <p>6. eˣ > 0 لكل x حقيقي</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الخواص التحليلية:</h4>
                    <p>1. مجال تعريفها: ℝ (جميع الأعداد الحقيقية)</p>
                    <p>2. مجال صورها: ]0, ∞[ (موجبة دوماً)</p>
                    <p>3. مستمرة وقابلة للاشتقاق على ℝ</p>
                    <p>4. مشتقتها: (eˣ)' = eˣ</p>
                    <p>5. تزايدية قطعاً على ℝ (مشتقتها موجبة دوماً)</p>
                    <p>6. مقعرة لأعلى على ℝ (مشتقتها الثانية موجبة دوماً)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>النهايات الشهيرة للدالة الأسية:</h4>
                    <p>1. lim eˣ = +∞ عندما x → +∞</p>
                    <p>2. lim eˣ = 0 عندما x → -∞</p>
                    <p>3. lim (eˣ - 1)/x = 1 عندما x → 0</p>
                    <p>4. lim (1 + x)^(1/x) = e عندما x → 0</p>
                    <p>5. lim (eˣ)/xⁿ = +∞ عندما x → +∞ (لأي n طبيعي)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الدالة الأسية للأساس a (حيث a > 0, a ≠ 1):</h4>
                    <p>aˣ = eˣˡⁿ⁽ᵃ⁾</p>
                    <p><strong>خصائص:</strong></p>
                    <p>1. إذا كان a > 1: الدالة تزايدية، lim aˣ = +∞ عندما x → +∞، lim aˣ = 0 عندما x → -∞</p>
                    <p>2. إذا كان 0 < a < 1: الدالة تناقصية، lim aˣ = 0 عندما x → +∞، lim aˣ = +∞ عندما x → -∞</p>
                    <p>3. مشتقتها: (aˣ)' = ln(a) × aˣ</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المعادلات الأسية (شرح مفصل مع أمثلة):</h4>
                    <p><strong>المبدأ الأساسي:</strong> إذا كان aˣ = aʸ فإن x = y (لـ a > 0, a ≠ 1)</p>
                    <p><strong>مثال 1:</strong> حل المعادلة: 2ˣ = 8</p>
                    <p>الحل: 2ˣ = 2³ ⇒ x = 3</p>
                    <p><strong>مثال 2:</strong> حل المعادلة: 3ˣ⁺¹ = 27ˣ⁻¹</p>
                    <p>الحل: 3ˣ⁺¹ = (3³)ˣ⁻¹ = 3³⁽ˣ⁻¹⁾</p>
                    <p>إذن: x + 1 = 3(x - 1)</p>
                    <p>x + 1 = 3x - 3</p>
                    <p>1 + 3 = 3x - x</p>
                    <p>4 = 2x ⇒ x = 2</p>
                    <p><strong>مثال 3:</strong> حل المعادلة: e²ˣ - 3eˣ + 2 = 0</p>
                    <p>الحل: نضع u = eˣ ⇒ u² - 3u + 2 = 0</p>
                    <p>نحل المعادلة: (u - 1)(u - 2) = 0 ⇒ u = 1 أو u = 2</p>
                    <p>إذن: eˣ = 1 ⇒ x = 0</p>
                    <p>أو: eˣ = 2 ⇒ x = ln(2)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المتراجحات الأسية:</h4>
                    <p><strong>المبدأ:</strong> إذا كان a > 1 فإن: aˣ > aʸ ⇔ x > y</p>
                    <p>إذا كان 0 < a < 1 فإن: aˣ > aʸ ⇔ x < y</p>
                    <p><strong>مثال:</strong> حل المتراجحة: 2ˣ⁺¹ ≤ 8</p>
                    <p>الحل: 2ˣ⁺¹ ≤ 2³</p>
                    <p>بما أن الأساس 2 > 1 فإن: x + 1 ≤ 3</p>
                    <p>x ≤ 2</p>
                    <p>مجموعة الحل: ]-∞, 2]</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التمثيل البياني للدالة الأسية:</h4>
                    <p>1. يمر من النقطة (0, 1) لأن e⁰ = 1</p>
                    <p>2. محور الأفاصيل (y = 0) خط مقارب عندما x → -∞</p>
                    <p>3. الدالة موجبة دوماً</p>
                    <p>4. تزايدية سريعة جداً عندما x → +∞</p>
                    <p>5. تقترب من الصفر ببطء عندما x → -∞</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين تطبيقية شاملة:</h4>
                    <p><strong>التمرين 1:</strong> بسط العبارة: (e²ˣ × e³ˣ⁺¹)/(eˣ⁻²)</p>
                    <p><strong>الحل:</strong> = e²ˣ⁺³ˣ⁺¹⁻⁽ˣ⁻²⁾ = e²ˣ⁺³ˣ⁺¹⁻ˣ⁺² = e⁴ˣ⁺³</p>
                    <p><strong>التمرين 2:</strong> حل المعادلة: 4ˣ - 2ˣ⁺¹ - 8 = 0</p>
                    <p><strong>الحل:</strong> نضع u = 2ˣ ⇒ u² - 2u - 8 = 0</p>
                    <p>المميز: Δ = 4 + 32 = 36</p>
                    <p>u = (2 ± 6)/2 = 4 أو -2</p>
                    <p>u = 2ˣ = 4 ⇒ x = 2</p>
                    <p>u = -2 مرفوض لأن 2ˣ > 0 دوماً</p>
                    <p><strong>التمرين 3:</strong> ادرس تغيرات الدالة: f(x) = x × e⁻ˣ</p>
                    <p><strong>الحل:</strong></p>
                    <p>f'(x) = e⁻ˣ - x × e⁻ˣ = e⁻ˣ(1 - x)</p>
                    <p>f'(x) = 0 ⇒ x = 1</p>
                    <p>f'(x) > 0 عندما x < 1 (تزايدية)</p>
                    <p>f'(x) < 0 عندما x > 1 (تناقصية)</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: الدالة الأسية هي الدالة الوحيدة التي تساوي مشتقتها، هذه خاصية فريدة ومهمة جداً.</span>
                    `
                },
                { 
                    title: "2. الدالة اللوغاريتمية (Ln)", 
                    content: `
                    <h3 style="color:#818cf8;">الدالة اللوغاريتمية - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التعريف والتاريخ:</h4>
                    <p>الدالة اللوغاريتمية هي الدالة العكسية للدالة الأسية. إذا كان y = eˣ فإن x = ln(y)</p>
                    <p><strong>تعريف رسمي:</strong> ln(x) هو العدد الحقيقي y الذي يحقق: eʸ = x</p>
                    <p>بمعنى آخر: ln(x) = y ⇔ eʸ = x</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>شروط الوجود (مجال التعريف):</h4>
                    <p>ln(x) معرفة فقط إذا كان x > 0</p>
                    <p><strong>مجال تعريف ln:</strong> ]0, +∞[</p>
                    <p><strong>مجال صورها:</strong> ℝ (جميع الأعداد الحقيقية)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الخواص الأساسية (يجب حفظها عن ظهر قلب):</h4>
                    <p>1. ln(1) = 0</p>
                    <p>2. ln(e) = 1</p>
                    <p>3. ln(eˣ) = x لكل x حقيقي</p>
                    <p>4. eˡⁿ⁽ˣ⁾ = x لكل x > 0</p>
                    <p>5. ln(a × b) = ln(a) + ln(b) لـ a > 0, b > 0</p>
                    <p>6. ln(a/b) = ln(a) - ln(b) لـ a > 0, b > 0</p>
                    <p>7. ln(aⁿ) = n × ln(a) لـ a > 0, n ∈ ℝ</p>
                    <p>8. ln(1/a) = -ln(a) لـ a > 0</p>
                    <p>9. ln(√a) = (1/2) × ln(a) لـ a > 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>إثبات بعض الخواص (لفهم أعمق):</h4>
                    <p><strong>إثبات الخاصية 5:</strong> ln(a × b) = ln(a) + ln(b)</p>
                    <p>نفرض: x = ln(a) ⇒ eˣ = a</p>
                    <p>نفرض: y = ln(b) ⇒ eʸ = b</p>
                    <p>إذن: a × b = eˣ × eʸ = eˣ⁺ʸ</p>
                    <p>بأخذ ln للطرفين: ln(a × b) = ln(eˣ⁺ʸ) = x + y = ln(a) + ln(b)</p>
                    <p><strong>إثبات الخاصية 7:</strong> ln(aⁿ) = n × ln(a)</p>
                    <p>نفرض: x = ln(a) ⇒ eˣ = a</p>
                    <p>إذن: aⁿ = (eˣ)ⁿ = eⁿˣ</p>
                    <p>بأخذ ln للطرفين: ln(aⁿ) = ln(eⁿˣ) = n × x = n × ln(a)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>النهايات الشهيرة للدالة اللوغاريتمية:</h4>
                    <p>1. lim ln(x) = +∞ عندما x → +∞</p>
                    <p>2. lim ln(x) = -∞ عندما x → 0⁺</p>
                    <p>3. lim (ln(1+x))/x = 1 عندما x → 0</p>
                    <p>4. lim (ln(x))/xⁿ = 0 عندما x → +∞ (لأي n > 0)</p>
                    <p>5. lim xⁿ × ln(x) = 0 عندما x → 0⁺ (لأي n > 0)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الاشتقاق والتغيرات:</h4>
                    <p>مشتقة ln: (ln(x))' = 1/x لـ x > 0</p>
                    <p>مشتقة ln|u|: (ln|u|)' = u'/u</p>
                    <p>الدالة ln تزايدية قطعاً على ]0, +∞[ لأن مشتقتها موجبة دوماً</p>
                    <p>مقعرة لأسفل على ]0, +∞[ لأن مشتقتها الثانية سالبة: (1/x)' = -1/x² < 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>دراسة الدالة: f(x) = ln(x)</h4>
                    <p><strong>1. المجال:</strong> ]0, +∞[</p>
                    <p><strong>2. المشتقة:</strong> f'(x) = 1/x > 0 لكل x > 0</p>
                    <p><strong>3. التغيرات:</strong> تزايدية قطعاً</p>
                    <p><strong>4. النهايات:</strong></p>
                    <p>   - عند 0⁺: lim ln(x) = -∞ (محور التراتيب خط مقارب)</p>
                    <p>   - عند +∞: lim ln(x) = +∞</p>
                    <p><strong>5. القيمة المنعدمة:</strong> ln(x) = 0 ⇒ x = 1</p>
                    <p><strong>6. التمثيل البياني:</strong> يمر من (1, 0) و (e, 1)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>اللوغاريتم العشري (log):</h4>
                    <p>log₁₀(x) = ln(x)/ln(10) ≈ ln(x)/2.302585</p>
                    <p>log(x) معرفة لـ x > 0</p>
                    <p>الخواص نفس خواص ln ولكن بالأساس 10</p>
                    <p>log(10) = 1، log(100) = 2، log(1000) = 3، إلخ</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المعادلات اللوغاريتمية (أمثلة مفصلة):</h4>
                    <p><strong>المبدأ:</strong> إذا كان ln(a) = ln(b) فإن a = b (لـ a > 0, b > 0)</p>
                    <p><strong>مثال 1:</strong> حل المعادلة: ln(x-1) = ln(3)</p>
                    <p>الحل: x - 1 = 3 ⇒ x = 4</p>
                    <p>نتحقق: x = 4 > 1 ⇒ مقبول</p>
                    <p><strong>مثال 2:</strong> حل المعادلة: ln(x+1) + ln(x-1) = ln(8)</p>
                    <p>الحل: ln[(x+1)(x-1)] = ln(8)</p>
                    <p>(x+1)(x-1) = 8</p>
                    <p>x² - 1 = 8 ⇒ x² = 9 ⇒ x = 3 أو x = -3</p>
                    <p>نتحقق: x = 3 ⇒ x+1=4>0 و x-1=2>0 ⇒ مقبول</p>
                    <p>x = -3 ⇒ x+1=-2<0 ⇒ مرفوض</p>
                    <p><strong>مثال 3:</strong> حل المعادلة: ln(x² - 3) = 1</p>
                    <p>الحل: x² - 3 = e¹ = e</p>
                    <p>x² = e + 3</p>
                    <p>x = √(e+3) أو x = -√(e+3)</p>
                    <p>نتحقق: e+3 ≈ 5.718 > 0 ⇒ كلا القيمتين مقبولتان</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المتراجحات اللوغاريتمية:</h4>
                    <p><strong>المبدأ:</strong> بما أن ln تزايدية قطعاً فإن:</p>
                    <p>ln(a) < ln(b) ⇔ a < b (لـ a > 0, b > 0)</p>
                    <p><strong>مثال:</strong> حل المتراجحة: ln(2x-1) > 0</p>
                    <p>الحل: ln(2x-1) > ln(1)</p>
                    <p>2x - 1 > 1</p>
                    <p>2x > 2 ⇒ x > 1</p>
                    <p>بالإضافة إلى شرط الوجود: 2x - 1 > 0 ⇒ x > 1/2</p>
                    <p>مجموعة الحل: ]1, +∞[</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> بسط العبارة: A = ln(8) - 2ln(2) + ln(√e)</p>
                    <p><strong>الحل:</strong> A = ln(8) - ln(2²) + ln(e^(1/2))</p>
                    <p>= ln(8) - ln(4) + (1/2)ln(e)</p>
                    <p>= ln(8/4) + 1/2 = ln(2) + 1/2</p>
                    <p><strong>التمرين 2:</strong> حل المعادلة: 2ln(x) - ln(x+1) = ln(4)</p>
                    <p><strong>الحل:</strong> ln(x²) - ln(x+1) = ln(4)</p>
                    <p>ln[x²/(x+1)] = ln(4)</p>
                    <p>x²/(x+1) = 4</p>
                    <p>x² = 4x + 4</p>
                    <p>x² - 4x - 4 = 0</p>
                    <p>Δ = 16 + 16 = 32</p>
                    <p>x = (4 ± √32)/2 = (4 ± 4√2)/2 = 2 ± 2√2</p>
                    <p>نتحقق: x = 2 + 2√2 > 0 ⇒ مقبول</p>
                    <p>x = 2 - 2√2 ≈ -0.828 < 0 ⇒ مرفوض</p>
                    <p><strong>التمرين 3:</strong> ادرس تغيرات الدالة: f(x) = x² × ln(x)</p>
                    <p><strong>الحل:</strong> f'(x) = 2x × ln(x) + x² × (1/x) = 2x × ln(x) + x = x[2ln(x) + 1]</p>
                    <p>f'(x) = 0 ⇒ x = 0 (مرفوض ليس في المجال) أو 2ln(x) + 1 = 0</p>
                    <p>ln(x) = -1/2 ⇒ x = e^(-1/2) = 1/√e</p>
                    <p>f'(x) < 0 عندما 0 < x < 1/√e</p>
                    <p>f'(x) > 0 عندما x > 1/√e</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: الدالة اللوغاريتمية تنمو ببطء شديد مقارنة بالدالة الأسية، وهذه نقطة مهمة في التزايد المقارن.</span>
                    `
                },
                { 
                    title: "3. التزايد المقارن", 
                    content: `
                    <h3 style="color:#818cf8;">التزايد المقارن - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مقدمة: لماذا ندرس التزايد المقارن؟</h4>
                    <p>عندما ندرس نهايات الدوال عند اللانهاية، نريد معرفة أي الدوال تنمو أسرع من الأخرى. هذا المفهوم مهم في:</p>
                    <p>1. حساب النهايات غير المعينة (∞/∞، ∞-∞)</p>
                    <p>2. دراسة سرعة نمو الخوارزميات في المعلوماتية</p>
                    <p>3. نمذجة الظواهر الطبيعية</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>ترتيب الدوال حسب سرعة النمو عند +∞:</h4>
                    <p><strong>من الأبطأ إلى الأسرع:</strong></p>
                    <p>1. الدوال الثابتة (مثل: 5، π، √2)</p>
                    <p>2. الدوال اللوغاريتمية (ln(x)، log(x))</p>
                    <p>3. الدوال الجذرية (√x، ∛x، x^(1/n))</p>
                    <p>4. الدوال متعددة الحدود (x، x²، x³، ...)</p>
                    <p>5. الدوال الأسية (eˣ، 2ˣ، 10ˣ)</p>
                    <p>6. الدوال الأسية للأساس أكبر من 1 (eˣ، e²ˣ، 10ˣ)</p>
                    <p>7. مضروب n (n!) - لكن هذا خارج منهج الثانوي</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>النظريات الأساسية (يجب حفظها):</h4>
                    <p><strong>النظرية 1:</strong> lim (ln(x))/xⁿ = 0 عندما x → +∞ (لأي n > 0)</p>
                    <p>مثال: lim (ln(x))/√x = 0، lim (ln(x))/x^0.1 = 0</p>
                    <p><strong>النظرية 2:</strong> lim (xⁿ)/eˣ = 0 عندما x → +∞ (لأي n طبيعي)</p>
                    <p>مثال: lim (x¹⁰⁰)/eˣ = 0، lim (x¹⁰⁰⁰⁰⁰)/eˣ = 0</p>
                    <p><strong>النظرية 3:</strong> lim (eˣ)/xⁿ = +∞ عندما x → +∞ (لأي n طبيعي)</p>
                    <p>مثال: lim eˣ/x¹⁰⁰ = +∞</p>
                    <p><strong>النتيجة:</strong> eˣ تنمو أسرع من أي قوة لـ x، وln(x) تنمو أبطأ من أي قوة لـ x</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>نهايات مقارنة عند +∞ (أمثلة مفصلة):</h4>
                    <p><strong>مثال 1:</strong> lim (x² + 3x + ln(x))/(2x² - x + 5)</p>
                    <p>الحل: نأخذ أعلى قوة في البسط والمقام (x²)</p>
                    <p>= lim [x²(1 + 3/x + ln(x)/x²)]/[x²(2 - 1/x + 5/x²)]</p>
                    <p>= lim (1 + 3/x + ln(x)/x²)/(2 - 1/x + 5/x²) عندما x → +∞</p>
                    <p>بما أن lim ln(x)/x² = 0 (نظرية 1) و lim 3/x = 0 و lim 1/x = 0 و lim 5/x² = 0</p>
                    <p>إذن النهاية = (1 + 0 + 0)/(2 - 0 + 0) = 1/2</p>
                    
                    <p><strong>مثال 2:</strong> lim (eˣ + x¹⁰⁰)/(2eˣ - x²⁰⁰)</p>
                    <p>الحل: نأخذ eˣ عامل مشترك</p>
                    <p>= lim [eˣ(1 + x¹⁰⁰/eˣ)]/[eˣ(2 - x²⁰⁰/eˣ)]</p>
                    <p>= lim (1 + x¹⁰⁰/eˣ)/(2 - x²⁰⁰/eˣ) عندما x → +∞</p>
                    <p>بما أن lim x¹⁰⁰/eˣ = 0 و lim x²⁰⁰/eˣ = 0 (نظرية 2)</p>
                    <p>إذن النهاية = (1 + 0)/(2 - 0) = 1/2</p>
                    
                    <p><strong>مثال 3:</strong> lim (ln(x))³/√x</p>
                    <p>الحل: نعلم أن ln(x) ينمو أبطأ من أي قوة موجبة لـ x</p>
                    <p>نضع u = ln(x) ⇒ عندما x → +∞ فإن u → +∞</p>
                    <p>لكن √x = e^(½ ln(x)) = e^(u/2)</p>
                    <p>إذن: (ln(x))³/√x = u³/e^(u/2)</p>
                    <p>بما أن الدالة الأسية تنمو أسرع من أي قوة</p>
                    <p>lim u³/e^(u/2) = 0 عندما u → +∞</p>
                    <p>إذن النهاية = 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>نهايات مقارنة عند 0⁺:</h4>
                    <p><strong>النظرية:</strong> lim xⁿ × ln(x) = 0 عندما x → 0⁺ (لأي n > 0)</p>
                    <p><strong>مثال 1:</strong> lim x² × ln(x) عندما x → 0⁺</p>
                    <p>الحل: = 0 (طبقاً للنظرية)</p>
                    <p><strong>مثال 2:</strong> lim √x × ln(x) عندما x → 0⁺</p>
                    <p>الحل: = 0</p>
                    <p><strong>مثال 3:</strong> lim (ln(1+x))/x عندما x → 0</p>
                    <p>الحل: هذه نهاية شهيرة = 1</p>
                    <p>يمكن إثباتها باستعمال قاعدة لوبيتال أو باستخدام المتسلسلات</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الأشكال غير المعينة وطرق حلها:</h4>
                    <p><strong>1. الشكل ∞/∞:</strong> نأخذ العامل المشترك الأسرع نمواً</p>
                    <p><strong>مثال:</strong> lim (eˣ + x¹⁰⁰)/(eˣ + ln(x))</p>
                    <p>الحل: نأخذ eˣ عامل مشترك = lim [eˣ(1 + x¹⁰⁰/eˣ)]/[eˣ(1 + ln(x)/eˣ)] = (1+0)/(1+0) = 1</p>
                    
                    <p><strong>2. الشكل ∞-∞:</strong> نضرب ونقسم في المرافق أو نخرج عامل مشترك</p>
                    <p><strong>مثال:</strong> lim (√(x²+1) - x) عندما x → +∞</p>
                    <p>الحل: نضرب في المرافق = lim [(x²+1) - x²]/[√(x²+1) + x] = lim 1/[√(x²+1) + x] = 0</p>
                    
                    <p><strong>3. الشكل 0×∞:</strong> نحوله إلى شكل ∞/∞ أو 0/0</p>
                    <p><strong>مثال:</strong> lim x × ln(x) عندما x → 0⁺</p>
                    <p>الحل: نكتب x = 1/(1/x) ⇒ lim ln(x)/(1/x) (شكل ∞/∞)</p>
                    <p>باستخدام لوبيتال: = lim (1/x)/(-1/x²) = lim (-x) = 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>قاعدة لوبيتال (L'Hôpital's Rule):</h4>
                    <p>إذا كان lim f(x)/g(x) يعطي 0/0 أو ∞/∞ فإن:</p>
                    <p>lim f(x)/g(x) = lim f'(x)/g'(x) (بشرط وجود النهاية الثانية)</p>
                    <p><strong>مثال 1:</strong> lim (eˣ - 1)/x عندما x → 0</p>
                    <p>التعويض يعطي 0/0 ⇒ نطبق لوبيتال</p>
                    <p>= lim (eˣ)/1 = e⁰ = 1</p>
                    <p><strong>مثال 2:</strong> lim (ln(x))/x عندما x → +∞</p>
                    <p>التعويض يعطي ∞/∞ ⇒ نطبق لوبيتال</p>
                    <p>= lim (1/x)/1 = lim 1/x = 0</p>
                    <p><strong>مثال 3:</strong> lim (x - sin(x))/x³ عندما x → 0</p>
                    <p>التعويض يعطي 0/0 ⇒ نطبق لوبيتال مرة أولى:</p>
                    <p>= lim (1 - cos(x))/(3x²) ← 0/0 أيضاً</p>
                    <p>نطبق لوبيتال مرة ثانية: = lim sin(x)/(6x) ← 0/0</p>
                    <p>نطبق لوبيتال مرة ثالثة: = lim cos(x)/6 = 1/6</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>جدول الملخص (يجب حفظه):</h4>
                    <table style="width:100%; border-collapse:collapse; color:white;">
                    <tr style="background:#3f3f46"><th>النهاية</th><th>القيمة</th><th>السبب</th></tr>
                    <tr><td>lim ln(x)/xⁿ</td><td>0</td><td>لأي n>0</td></tr>
                    <tr><td>lim xⁿ/eˣ</td><td>0</td><td>لأي n طبيعي</td></tr>
                    <tr><td>lim eˣ/xⁿ</td><td>+∞</td><td>لأي n طبيعي</td></tr>
                    <tr><td>lim xⁿ × ln(x)</td><td>0</td><td>عند x→0⁺، لأي n>0</td></tr>
                    <tr><td>lim (1 + 1/x)ˣ</td><td>e</td><td>عند x→+∞</td></tr>
                    <tr><td>lim (1 + x)^(1/x)</td><td>e</td><td>عند x→0</td></tr>
                    </table>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> احسب: lim (x³ + 2x² + ln(x))/(5x³ - x + eˣ)</p>
                    <p><strong>الحل:</strong> eˣ هي الأسرع نمواً ⇒ نأخذ eˣ عامل مشترك في المقام</p>
                    <p>= lim (x³ + 2x² + ln(x))/[eˣ(5x³/eˣ - x/eˣ + 1)]</p>
                    <p>البسط → +∞ (بسبب x³) والمقام → +∞ (بسبب eˣ)</p>
                    <p>لكن eˣ تنمو أسرع من x³ ⇒ النهاية = 0</p>
                    
                    <p><strong>التمرين 2:</strong> احسب: lim [√(x² + x) - x] عندما x → +∞</p>
                    <p><strong>الحل:</strong> شكل ∞-∞ ⇒ نضرب في المرافق</p>
                    <p>= lim [(x²+x) - x²]/[√(x²+x) + x] = lim x/[√(x²+x) + x]</p>
                    <p>نأخذ x عامل مشترك: = lim x/[x(√(1+1/x) + 1)]</p>
                    <p>= lim 1/[√(1+1/x) + 1] = 1/(1+1) = 1/2</p>
                    
                    <p><strong>التمرين 3:</strong> احسب: lim x² × e^(-x) عندما x → +∞</p>
                    <p><strong>الحل:</strong> = lim x²/eˣ = 0 (لأن eˣ ينمو أسرع من x²)</p>
                    
                    <p><strong>التمرين 4:</strong> احسب: lim (ln(x))¹⁰⁰/x^0.01 عندما x → +∞</p>
                    <p><strong>الحل:</strong> = 0 (لأن أي قوة موجبة لـ x تنمو أسرع من أي قوة لـ ln(x))</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: في التزايد المقارن، تذكر دائماً أن eˣ تنمو أسرع من xⁿ التي تنمو أسرع من ln(x). هذا هو المبدأ الأساسي.</span>
                    `
                }
            ],
            2: [
                {
                    header: true,
                    title: "المحور الثالث: المتتاليات العددية"
                },
                {
                    title: "1. عموميات والبرهان بالتراجع",
                    content: `
                    <h3 style="color:#818cf8;">المتتاليات العددية والبرهان بالتراجع - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مقدمة: ما هي المتتالية؟</h4>
                    <p>المتتالية هي دالة معرفة على ℕ (أو جزء منه) في ℝ. نرمز لها عادة بـ (uₙ) حيث n ∈ ℕ</p>
                    <p>u₀: الحد الأول، u₁: الحد الثاني، ...، uₙ: الحد العام أو الحد من الرتبة n</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>طرق تعريف المتتالية:</h4>
                    <p><strong>1. تعريف صريح:</strong> uₙ = f(n) حيث f دالة معرفة على ℕ</p>
                    <p>مثال: uₙ = 2n + 1 ⇒ u₀=1, u₁=3, u₂=5, u₃=7, ...</p>
                    <p><strong>2. تعريف بالتراجع (تعريف عودي):</strong> نعطي الحد الأول وعلاقة بين الحدود</p>
                    <p>مثال: u₀ = 1، uₙ₊₁ = 2uₙ + 3</p>
                    <p><strong>3. تعريف بمجموع:</strong> uₙ = مجموع لحدود متتالية أخرى</p>
                    <p>مثال: uₙ = Σ (من k=1 إلى n) 1/k</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مبدأ البرهان بالتراجع (أهم أداة في دراسة المتتاليات):</h4>
                    <p>لنبين أن خاصية P(n) صحيحة لكل n ∈ ℕ، نتبع الخطوات التالية:</p>
                    <p><strong>الخطوة 1 (تهيئة البرهان):</strong> نثبت أن P(0) صحيحة</p>
                    <p><strong>الخطوة 2 (التراجع):</strong> نثبت أن: إذا كانت P(k) صحيحة (فرضية التراجع) فإن P(k+1) صحيحة</p>
                    <p><strong>الخطوة 3 (الاستنتاج):</strong> بالتراجع، P(n) صحيحة لكل n ∈ ℕ</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال تطبيقي على البرهان بالتراجع:</h4>
                    <p><strong>المطلوب:</strong> أثبت بالتراجع أن: 1 + 2 + 3 + ... + n = n(n+1)/2 لكل n ∈ ℕ</p>
                    <p><strong>الحل:</strong></p>
                    <p><strong>الخطوة 1 (لـ n=0):</strong> الطرف الأيسر = 0، الطرف الأيمن = 0×1/2 = 0 ✓</p>
                    <p><strong>الخطوة 2:</strong> نفرض صحة العلاقة لـ n = k: 1+2+...+k = k(k+1)/2 (فرضية التراجع)</p>
                    <p>نثبتها لـ n = k+1:</p>
                    <p>1+2+...+k+(k+1) = [1+2+...+k] + (k+1)</p>
                    <p>= k(k+1)/2 + (k+1) (باستعمال فرضية التراجع)</p>
                    <p>= (k+1)[k/2 + 1] = (k+1)[(k+2)/2] = (k+1)(k+2)/2 ✓</p>
                    <p><strong>الخطوة 3:</strong> بالتراجع، العلاقة صحيحة لكل n ∈ ℕ</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال آخر أكثر تعقيداً:</h4>
                    <p><strong>المطلوب:</strong> ليكن (uₙ) معرفة بـ: u₀ = 1، uₙ₊₁ = √(2 + uₙ)</p>
                    <p>أثبت بالتراجع أن: 0 < uₙ < 2 لكل n ∈ ℕ</p>
                    <p><strong>الحل:</strong></p>
                    <p><strong>لـ n=0:</strong> u₀ = 1 ⇒ 0 < 1 < 2 ✓</p>
                    <p><strong>التراجع:</strong> نفرض 0 < uₖ < 2، نثبت 0 < uₖ₊₁ < 2</p>
                    <p>uₖ₊₁ = √(2 + uₖ)</p>
                    <p>من فرضية التراجع: 0 < uₖ < 2 ⇒ 2 < 2+uₖ < 4</p>
                    <p>⇒ √2 < √(2+uₖ) < √4 ⇒ √2 < uₖ₊₁ < 2</p>
                    <p>وبما أن √2 ≈ 1.414 > 0 ⇒ 0 < uₖ₊₁ < 2 ✓</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>اتجاه تغير المتتالية:</h4>
                    <p>نقول أن (uₙ) <strong>تزايدية</strong> إذا كان: uₙ₊₁ ≥ uₙ لكل n</p>
                    <p>نقول أن (uₙ) <strong>تناقصية</strong> إذا كان: uₙ₊₁ ≤ uₙ لكل n</p>
                    <p>نقول أن (uₙ) <strong>ثابتة</strong> إذا كان: uₙ₊₁ = uₙ لكل n</p>
                    <p><strong>طريقة الدراسة:</strong> ندرس إشارة uₙ₊₁ - uₙ</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المتتالية المحدودة:</h4>
                    <p>نقول أن (uₙ) <strong>محدودة من أعلى</strong> إذا وجد M حقيقي حيث uₙ ≤ M لكل n</p>
                    <p>نقول أن (uₙ) <strong>محدودة من أسفل</strong> إذا وجد m حقيقي حيث uₙ ≥ m لكل n</p>
                    <p>نقول أن (uₙ) <strong>محدودة</strong> إذا كانت محدودة من أعلى ومن أسفل</p>
                    <p>أي: ∃ m, M ∈ ℝ بحيث m ≤ uₙ ≤ M لكل n</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال شامل لدراسة متتالية:</h4>
                    <p><strong>المتتالية:</strong> uₙ = (n+1)/(n+2)</p>
                    <p><strong>1. اتجاه التغير:</strong></p>
                    <p>uₙ₊₁ - uₙ = [(n+2)/(n+3)] - [(n+1)/(n+2)]</p>
                    <p>= [(n+2)² - (n+1)(n+3)]/[(n+3)(n+2)]</p>
                    <p>= [(n²+4n+4) - (n²+4n+3)]/[(n+3)(n+2)]</p>
                    <p>= 1/[(n+3)(n+2)] > 0 لكل n ∈ ℕ</p>
                    <p>إذن (uₙ) تزايدية قطعاً</p>
                    <p><strong>2. المحدودية:</strong></p>
                    <p>uₙ = (n+1)/(n+2) = 1 - 1/(n+2)</p>
                    <p>بما أن 1/(n+2) > 0 ⇒ uₙ < 1 لكل n</p>
                    <p>وبما أن 1/(n+2) ≤ 1/2 (عند n=0) ⇒ uₙ ≥ 1 - 1/2 = 1/2</p>
                    <p>إذن: 1/2 ≤ uₙ < 1 ⇒ المتتالية محدودة</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين إضافية مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> ليكن (uₙ) معرفة بـ: u₀ = 2، uₙ₊₁ = (uₙ + 3)/2</p>
                    <p>أثبت بالتراجع أن uₙ = 3 - (1/2)ⁿ لكل n ∈ ℕ</p>
                    <p><strong>الحل:</strong></p>
                    <p>لـ n=0: u₀ = 3 - (1/2)⁰ = 3 - 1 = 2 ✓</p>
                    <p>نفرض uₖ = 3 - (1/2)ᵏ</p>
                    <p>uₖ₊₁ = (uₖ + 3)/2 = [3 - (1/2)ᵏ + 3]/2 = [6 - (1/2)ᵏ]/2</p>
                    <p>= 3 - (1/2)ᵏ⁺¹ ✓</p>
                    
                    <p><strong>التمرين 2:</strong> ادرس اتجاه تغير المتتالية: uₙ = n² - 3n + 2</p>
                    <p><strong>الحل:</strong></p>
                    <p>uₙ₊₁ - uₙ = [(n+1)² - 3(n+1) + 2] - [n² - 3n + 2]</p>
                    <p>= [n²+2n+1 -3n-3+2] - [n²-3n+2]</p>
                    <p>= [n² - n] - [n² - 3n + 2] = 2n - 2 = 2(n-1)</p>
                    <p>uₙ₊₁ - uₙ ≥ 0 عندما n ≥ 1</p>
                    <p>إذن (uₙ) تزايدية من الرتبة 1 فما فوق</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: البرهان بالتراجع هو أداة قوية، تأكد من كتابة الخطوات الثلاث بوضوح: التهيئة، التراجع، الاستنتاج.</span>
                    `
                },
                {
                    title: "2. المتتاليات الحسابية والهندسية",
                    content: `
                    <h3 style="color:#818cf8;">المتتاليات الحسابية والهندسية - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المتتالية الحسابية (المتوالية الحسابية):</h4>
                    <p><strong>التعريف:</strong> متتالية (uₙ) تسمى حسابية إذا كان الفرق بين حدين متتاليين ثابتاً</p>
                    <p>أي: uₙ₊₁ - uₙ = r (ثابت) لكل n ∈ ℕ</p>
                    <p>العدد r يسمى <strong>أساس</strong> المتتالية الحسابية</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الصيغة العامة لحدود المتتالية الحسابية:</h4>
                    <p>إذا كانت (uₙ) حسابية بأساس r فإن:</p>
                    <p>u₁ = u₀ + r</p>
                    <p>u₂ = u₀ + 2r</p>
                    <p>u₃ = u₀ + 3r</p>
                    <p>...</p>
                    <p><strong>وبشكل عام:</strong> uₙ = u₀ + n × r</p>
                    <p>أو: uₙ = uₚ + (n-p) × r (لأي p ≤ n)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مجموع حدود المتتالية الحسابية:</h4>
                    <p>مجموع n+1 حداً أولاً من متتالية حسابية هو:</p>
                    <p>Sₙ = u₀ + u₁ + u₂ + ... + uₙ = (عدد الحدود) × (متوسط الحدين الأول والأخير)</p>
                    <p><strong>أي:</strong> Sₙ = (n+1) × (u₀ + uₙ)/2</p>
                    <p><strong>أو:</strong> Sₙ = (n+1) × [2u₀ + n×r]/2</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>إثبات صيغة المجموع (بطريقتين):</h4>
                    <p><strong>الطريقة الأولى:</strong> نكتب المجموع مرتين بالعكس:</p>
                    <p>S = u₀ + u₁ + u₂ + ... + uₙ</p>
                    <p>S = uₙ + uₙ₋₁ + uₙ₋₂ + ... + u₀</p>
                    <p>نجمع المعادلتين: 2S = (u₀+uₙ) + (u₁+uₙ₋₁) + ... + (uₙ+u₀)</p>
                    <p>لكل زوج: uₖ + uₙ₋ₖ = (u₀+k×r) + (u₀+(n-k)×r) = 2u₀ + n×r = u₀ + uₙ</p>
                    <p>إذن: 2S = (n+1)(u₀+uₙ) ⇒ S = (n+1)(u₀+uₙ)/2</p>
                    <p><strong>الطريقة الثانية (بالتراجع):</strong> نثبت بالتراجع أن Sₙ = (n+1)(u₀+uₙ)/2</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة على المتتالية الحسابية:</h4>
                    <p><strong>مثال 1:</strong> متتالية حسابية حيث u₀ = 3، r = 2</p>
                    <p>uₙ = 3 + 2n</p>
                    <p>u₀=3, u₁=5, u₂=7, u₃=9, ...</p>
                    <p>مجموع 4 حدود أولى: S₃ = 4×(3+9)/2 = 4×12/2 = 24</p>
                    <p>تحقق: 3+5+7+9 = 24 ✓</p>
                    
                    <p><strong>مثال 2:</strong> متتالية حسابية حيث u₃ = 10، u₇ = 22</p>
                    <p>المطلوب: إيجاد u₀ و r</p>
                    <p>u₇ = u₃ + (7-3)×r ⇒ 22 = 10 + 4r ⇒ 4r = 12 ⇒ r = 3</p>
                    <p>u₃ = u₀ + 3×r ⇒ 10 = u₀ + 9 ⇒ u₀ = 1</p>
                    <p>إذن: uₙ = 1 + 3n</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المتتالية الهندسية (المتوالية الهندسية):</h4>
                    <p><strong>التعريف:</strong> متتالية (vₙ) تسمى هندسية إذا كان خارج قسمة حدين متتاليين ثابتاً</p>
                    <p>أي: vₙ₊₁ / vₙ = q (ثابت) لكل n ∈ ℕ (بشرط vₙ ≠ 0)</p>
                    <p>العدد q يسمى <strong>أساس</strong> المتتالية الهندسية</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الصيغة العامة لحدود المتتالية الهندسية:</h4>
                    <p>إذا كانت (vₙ) هندسية بأساس q فإن:</p>
                    <p>v₁ = v₀ × q</p>
                    <p>v₂ = v₀ × q²</p>
                    <p>v₃ = v₀ × q³</p>
                    <p>...</p>
                    <p><strong>وبشكل عام:</strong> vₙ = v₀ × qⁿ</p>
                    <p>أو: vₙ = vₚ × qⁿ⁻ᵖ (لأي p ≤ n)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مجموع حدود المتتالية الهندسية:</h4>
                    <p>1. <strong>إذا كان q ≠ 1:</strong></p>
                    <p>Sₙ = v₀ + v₁ + v₂ + ... + vₙ = v₀ × (1 - qⁿ⁺¹)/(1 - q)</p>
                    <p>2. <strong>إذا كان q = 1:</strong> vₙ = v₀ لكل n ⇒ Sₙ = (n+1) × v₀</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>إثبات صيغة المجموع (عندما q ≠ 1):</h4>
                    <p>Sₙ = v₀ + v₀×q + v₀×q² + ... + v₀×qⁿ</p>
                    <p>نضرب في q: q×Sₙ = v₀×q + v₀×q² + ... + v₀×qⁿ + v₀×qⁿ⁺¹</p>
                    <p>نطرح المعادلة الثانية من الأولى:</p>
                    <p>Sₙ - q×Sₙ = v₀ - v₀×qⁿ⁺¹</p>
                    <p>Sₙ(1 - q) = v₀(1 - qⁿ⁺¹)</p>
                    <p>إذن: Sₙ = v₀(1 - qⁿ⁺¹)/(1 - q)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة على المتتالية الهندسية:</h4>
                    <p><strong>مثال 1:</strong> متتالية هندسية حيث v₀ = 2، q = 3</p>
                    <p>vₙ = 2 × 3ⁿ</p>
                    <p>v₀=2, v₁=6, v₂=18, v₃=54, ...</p>
                    <p>مجموع 4 حدود أولى: S₃ = 2×(1-3⁴)/(1-3) = 2×(1-81)/(-2) = 2×(-80)/(-2) = 80</p>
                    <p>تحقق: 2+6+18+54 = 80 ✓</p>
                    
                    <p><strong>مثال 2:</strong> متتالية هندسية حيث v₂ = 12، v₄ = 108</p>
                    <p>المطلوب: إيجاد v₀ و q</p>
                    <p>v₄ = v₂ × q² ⇒ 108 = 12 × q² ⇒ q² = 9 ⇒ q = 3 أو q = -3</p>
                    <p>v₂ = v₀ × q² ⇒ 12 = v₀ × 9 ⇒ v₀ = 12/9 = 4/3</p>
                    <p>الحلان مقبولان: (v₀=4/3, q=3) أو (v₀=4/3, q=-3)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مجموع متسلسلة هندسية لا نهائية (عندما |q| < 1):</h4>
                    <p>إذا كان |q| < 1 فإن lim qⁿ = 0 عندما n → ∞</p>
                    <p>إذن: lim Sₙ = v₀/(1 - q) عندما n → ∞</p>
                    <p>نكتب: Σ (من n=0 إلى ∞) v₀×qⁿ = v₀/(1-q) لـ |q| < 1</p>
                    <p><strong>مثال:</strong> مجموع المتسلسلة: 1 + 1/2 + 1/4 + 1/8 + ...</p>
                    <p>هنا v₀ = 1، q = 1/2</p>
                    <p>المجموع = 1/(1 - 1/2) = 1/(1/2) = 2</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تطبيقات حياتية:</h4>
                    <p><strong>1. الفائدة المركبة:</strong> إذا أودعت مبلغ P بفائدة r% سنوياً</p>
                    <p>المبلغ بعد n سنة: Pₙ = P × (1 + r/100)ⁿ (متتالية هندسية)</p>
                    <p><strong>2. الانحلال الإشعاعي:</strong> كمية المادة المتبقية بعد n فترة:</p>
                    <p>Qₙ = Q₀ × (1/2)^(n/T) حيث T نصف العمر</p>
                    <p><strong>3. حساب عدد المرات في شجرة العائلة:</strong></p>
                    <p>عدد الأجداد من الجيل n: 2ⁿ (متتالية هندسية)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> متتالية حسابية حيث u₅ = 17، u₉ = 33</p>
                    <p>أوجد u₀، r، ثم احسب S₂₀ (مجموع 21 حداً أولاً)</p>
                    <p><strong>الحل:</strong></p>
                    <p>u₉ = u₅ + 4r ⇒ 33 = 17 + 4r ⇒ 4r = 16 ⇒ r = 4</p>
                    <p>u₅ = u₀ + 5r ⇒ 17 = u₀ + 20 ⇒ u₀ = -3</p>
                    <p>u₂₀ = u₀ + 20r = -3 + 80 = 77</p>
                    <p>S₂₀ = 21×(u₀+u₂₀)/2 = 21×(-3+77)/2 = 21×74/2 = 21×37 = 777</p>
                    
                    <p><strong>التمرين 2:</strong> متتالية هندسية موجبة حيث v₂ = 6، v₄ = 54</p>
                    <p>أوجد v₀، q، ثم احسب مجموع الحدود العشرة الأولى</p>
                    <p><strong>الحل:</strong></p>
                    <p>v₄ = v₂ × q² ⇒ 54 = 6 × q² ⇒ q² = 9 ⇒ q = 3 (لأن المتتالية موجبة)</p>
                    <p>v₂ = v₀ × q² ⇒ 6 = v₀ × 9 ⇒ v₀ = 6/9 = 2/3</p>
                    <p>S₉ = v₀×(1-q¹⁰)/(1-q) = (2/3)×(1-3¹⁰)/(1-3)</p>
                    <p>= (2/3)×(1-59049)/(-2) = (2/3)×(-59048)/(-2)</p>
                    <p>= (2/3)×29524 = 59048/3 = 19682.666...</p>
                    
                    <p><strong>التمرين 3:</strong> ثلاث أعداد تكون متتالية حسابية إذا كان مجموعها 15 وحاصل ضربها 80</p>
                    <p>أوجد هذه الأعداد</p>
                    <p><strong>الحل:</strong> نرمز للأعداد بـ: a-r, a, a+r</p>
                    <p>المجموع: (a-r) + a + (a+r) = 3a = 15 ⇒ a = 5</p>
                    <p>حاصل الضرب: (5-r)×5×(5+r) = 80</p>
                    <p>5×(25-r²) = 80 ⇒ 125 - 5r² = 80 ⇒ 5r² = 45 ⇒ r² = 9 ⇒ r = 3 أو r = -3</p>
                    <p>الأعداد: 2, 5, 8 أو 8, 5, 2 (نفس الأعداد بترتيب معكوس)</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: المتتالية الهندسية ذات الأساس بين -1 و1 تتقارب إلى الصفر، وهذا مهم في حساب المجاميع اللانهائية.</span>
                    `
                },
                {
                    title: "3. تقارب متتالية",
                    content: `
                    <h3 style="color:#818cf8;">تقارب المتتاليات - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مقدمة: ما معنى تقارب متتالية؟</h4>
                    <p>نقول أن المتتالية (uₙ) تتقارب إلى العدد الحقيقي L إذا اقتربت قيم uₙ من L عندما يكبر n بلا حدود</p>
                    <p>ونكتب: lim uₙ = L عندما n → +∞</p>
                    <p>إذا لم تتقارب المتتالية إلى أي عدد حقيقي، نقول أنها <strong>متباعدة</strong></p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التعريف الرياضي الدقيق للتقارب (تعريف ε-N):</h4>
                    <p>lim uₙ = L يعني: لكل ε > 0، يوجد N ∈ ℕ بحيث لكل n ≥ N، يكون |uₙ - L| < ε</p>
                    <p><strong>شرح مبسط:</strong> مهما كانت المسافة ε التي نختارها (ولو كانت صغيرة جداً)، نستطيع إيجاد رتبة N بحيث من بعدها، كل حدود المتتالية تقع في المجال ]L-ε, L+ε[</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة على متتاليات متقاربة:</h4>
                    <p><strong>مثال 1:</strong> uₙ = 1/n</p>
                    <p>lim uₙ = 0 عندما n → +∞</p>
                    <p><strong>مثال 2:</strong> uₙ = (n+1)/(n+2)</p>
                    <p>uₙ = 1 - 1/(n+2) ⇒ lim uₙ = 1</p>
                    <p><strong>مثال 3:</strong> uₙ = (-1)ⁿ/n</p>
                    <p>|uₙ| = 1/n ⇒ lim uₙ = 0</p>
                    <p><strong>مثال 4:</strong> uₙ = (2n²+3n+1)/(3n²-2)</p>
                    <p>نقسم البسط والمقام على n²: = (2 + 3/n + 1/n²)/(3 - 2/n²)</p>
                    <p>lim uₙ = 2/3</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة على متتاليات متباعدة:</h4>
                    <p><strong>مثال 1:</strong> uₙ = n² (تؤول إلى +∞)</p>
                    <p><strong>مثال 2:</strong> uₙ = (-1)ⁿ (متذبذبة: 1, -1, 1, -1, ...)</p>
                    <p><strong>مثال 3:</strong> uₙ = n × sin(n) (غير محدودة ولا تؤول إلى ∞)</p>
                    <p><strong>مثال 4:</strong> uₙ = ln(n) (تؤول إلى +∞)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>خواص النهايات (مهمة جداً):</h4>
                    <p>إذا كانت lim uₙ = L و lim vₙ = M، فإن:</p>
                    <p>1. lim (uₙ + vₙ) = L + M</p>
                    <p>2. lim (uₙ - vₙ) = L - M</p>
                    <p>3. lim (uₙ × vₙ) = L × M</p>
                    <p>4. lim (uₙ / vₙ) = L / M (بشرط M ≠ 0)</p>
                    <p>5. lim (k × uₙ) = k × L (حيث k ثابت)</p>
                    <p>6. lim |uₙ| = |L|</p>
                    <p>7. إذا كانت uₙ ≤ vₙ لكل n (من رتبة معينة) فإن L ≤ M</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مبرهنة التقابل (مبرهنة الشرطة أو الساندويش):</h4>
                    <p>إذا كانت: vₙ ≤ uₙ ≤ wₙ لكل n (من رتبة معينة)</p>
                    <p>وكان: lim vₙ = lim wₙ = L</p>
                    <p>فإن: lim uₙ = L</p>
                    <p><strong>مثال:</strong> أثبت أن lim (sin n)/n = 0</p>
                    <p>الحل: -1 ≤ sin n ≤ 1 لكل n</p>
                    <p>⇒ -1/n ≤ (sin n)/n ≤ 1/n</p>
                    <p>وبما أن lim (-1/n) = 0 و lim (1/n) = 0</p>
                    <p>فإن lim (sin n)/n = 0 (بمبرهنة التقابل)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مبرهنات التقارب الأساسية:</h4>
                    <p><strong>المبرهنة 1:</strong> كل متتالية تزايدية ومحدودة من أعلى تكون متقاربة</p>
                    <p><strong>المبرهنة 2:</strong> كل متتالية تناقصية ومحدودة من أسفل تكون متقاربة</p>
                    <p><strong>نتيجة:</strong> متتالية تزايدية (أو تناقصية) ومحدودة تكون متقاربة</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>متتالية جزئية:</h4>
                    <p>إذا أخذنا من متتالية (uₙ) بعض حدودها مع حفظ الترتيب، نحصل على متتالية جزئية</p>
                    <p>مثال: من المتتالية uₙ = n²: 1, 4, 9, 16, 25, ...</p>
                    <p>المتتالية الجزئية للرتب الزوجية: u₂ₙ = 4n²: 0, 4, 16, 36, ...</p>
                    <p>المتتالية الجزئية للرتب الفردية: u₂ₙ₊₁ = (2n+1)²: 1, 9, 25, 49, ...</p>
                    <p><strong>مبرهنة:</strong> إذا كانت (uₙ) متقاربة إلى L، فإن كل متتالية جزئية منها تتقارب إلى L</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>متتاليات شهيرة ومتباعدة إلى اللانهاية:</h4>
                    <p>1. lim nᵏ = +∞ عندما n → +∞ (لكل k > 0)</p>
                    <p>2. lim qⁿ = +∞ عندما n → +∞ (إذا كان q > 1)</p>
                    <p>3. lim ln(n) = +∞ عندما n → +∞</p>
                    <p>4. lim √n = +∞ عندما n → +∞</p>
                    <p>5. lim n! = +∞ عندما n → +∞</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>متتاليات شهيرة ومتقاربة إلى الصفر:</h4>
                    <p>1. lim 1/nᵏ = 0 عندما n → +∞ (لكل k > 0)</p>
                    <p>2. lim qⁿ = 0 عندما n → +∞ (إذا كان |q| < 1)</p>
                    <p>3. lim (ln n)/n = 0 عندما n → +∞</p>
                    <p>4. lim nᵏ × qⁿ = 0 عندما n → +∞ (لـ |q| < 1 و k أي عدد حقيقي)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>طريقة دراسة تقارب متتالية معرفة بالتراجع:</h4>
                    <p><strong>الخطوات:</strong></p>
                    <p>1. نثبت بالتراجع أنها محدودة (من أعلى إذا كانت تزايدية، أو من أسفل إذا كانت تناقصية)</p>
                    <p>2. ندرس اتجاه تغيرها (تزايدية أم تناقصية)</p>
                    <p>3. نطبق مبرهنة التقارب: تزايدية + محدودة من أعلى ⇒ متقاربة، أو تناقصية + محدودة من أسفل ⇒ متقاربة</p>
                    <p>4. لإيجاد النهاية L، نستخدم: إذا كانت lim uₙ = L فإن lim uₙ₊₁ = L أيضاً</p>
                    <p>5. نعوض في علاقة التراجع: L = f(L) ونحل المعادلة</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال تطبيقي شامل:</h4>
                    <p><strong>المتتالية:</strong> u₀ = 1، uₙ₊₁ = √(2 + uₙ)</p>
                    <p><strong>1. المحدودية:</strong> أثبتنا سابقاً بالتراجع أن 0 < uₙ < 2 لكل n</p>
                    <p><strong>2. اتجاه التغير:</strong> uₙ₊₁ - uₙ = √(2+uₙ) - uₙ</p>
                    <p>ندرس إشارة f(x) = √(2+x) - x على [0,2]</p>
                    <p>f'(x) = 1/(2√(2+x)) - 1</p>
                    <p>f'(x) = 0 ⇒ 1/(2√(2+x)) = 1 ⇒ 2√(2+x) = 1 ⇒ √(2+x) = 1/2 ⇒ 2+x = 1/4 ⇒ x = -7/4 (خارج المجال)</p>
                    <p>f(0) = √2 > 0، f(2) = √4 - 2 = 0</p>
                    <p>إذن f(x) ≥ 0 على [0,2] ⇒ uₙ₊₁ ≥ uₙ ⇒ المتتالية تزايدية</p>
                    <p><strong>3. التقارب:</strong> تزايدية + محدودة من أعلى ⇒ متقاربة</p>
                    <p><strong>4. إيجاد النهاية L:</strong> lim uₙ = L ⇒ lim uₙ₊₁ = L</p>
                    <p>من علاقة التراجع: L = √(2+L)</p>
                    <p>بتربيع الطرفين: L² = 2 + L ⇒ L² - L - 2 = 0</p>
                    <p>Δ = 1 + 8 = 9 ⇒ L = (1 ± 3)/2 = 2 أو -1</p>
                    <p>بما أن uₙ > 0 ⇒ L ≥ 0 ⇒ L = 2</p>
                    <p><strong>النتيجة:</strong> lim uₙ = 2</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> بين أن المتتالية uₙ = (n × sin(n))/(n²+1) متقاربة وأوجد نهايتها</p>
                    <p><strong>الحل:</strong> |uₙ| = |n × sin(n)|/(n²+1) ≤ n/(n²+1) ≤ n/n² = 1/n</p>
                    <p>بما أن lim 1/n = 0 ⇒ lim |uₙ| = 0 ⇒ lim uₙ = 0</p>
                    
                    <p><strong>التمرين 2:</strong> ليكن (uₙ) معرفة بـ: u₀ = 0، uₙ₊₁ = (uₙ + 2)/3</p>
                    <p>بين أنها متقاربة وأوجد نهايتها</p>
                    <p><strong>الحل:</strong></p>
                    <p>1. بالتراجع: 0 ≤ uₙ ≤ 1 لكل n (محدودة)</p>
                    <p>2. uₙ₊₁ - uₙ = (uₙ + 2)/3 - uₙ = (2 - 2uₙ)/3 = 2(1-uₙ)/3 ≥ 0 ⇒ تزايدية</p>
                    <p>3. إذن متقاربة</p>
                    <p>4. lim uₙ = L ⇒ L = (L+2)/3 ⇒ 3L = L+2 ⇒ 2L = 2 ⇒ L = 1</p>
                    
                    <p><strong>التمرين 3:</strong> ادرس تقارب المتتالية: uₙ = (2ⁿ + 3ⁿ)/(2ⁿ⁺¹ + 3ⁿ⁺¹)</p>
                    <p><strong>الحل:</strong> نقسم البسط والمقام على 3ⁿ:</p>
                    <p>uₙ = [(2/3)ⁿ + 1]/[2×(2/3)ⁿ + 3]</p>
                    <p>بما أن lim (2/3)ⁿ = 0 ⇒ lim uₙ = (0+1)/(0+3) = 1/3</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: مبرهنة التقابل (الشرطة) هي أداة قوية لحساب نهايات متتاليات معقدة، تعلم استخدامها جيداً.</span>
                    `
                },
                { 
                    header: true, 
                    title: "المحور الرابع: الدوال الأصلية والحساب التكاملي" 
                },
                { 
                    title: "1. الدوال الأصلية", 
                    content: `
                    <h3 style="color:#818cf8;">الدوال الأصلية - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التعريف الأساسي:</h4>
                    <p>لتكن f دالة معرفة على مجال I. نقول أن الدالة F هي دالة أصلية للدالة f على I إذا كانت:</p>
                    <p>1. F قابلة للاشتقاق على I</p>
                    <p>2. F'(x) = f(x) لكل x ∈ I</p>
                    <p><strong>مثال:</strong> الدالة F(x) = x² هي دالة أصلية للدالة f(x) = 2x لأن: F'(x) = 2x = f(x)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>ملاحظات مهمة:</h4>
                    <p>1. إذا كانت F دالة أصلية للدالة f على I، فإن F + C (حيث C ثابت) هي أيضاً دالة أصلية للدالة f على I</p>
                    <p>2. جميع الدوال الأصلية للدالة f على I تكتب على الشكل: F + C حيث C ثابت</p>
                    <p>3. نرمز لمجموع الدوال الأصلية للدالة f بالرمز ∫f(x)dx وتقرأ "تكامل f(x) dx"</p>
                    <p>4. ∫f(x)dx = F(x) + C حيث F دالة أصلية للدالة f</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>جدول الدوال الأصلية الأساسية (يجب حفظه):</h4>
                    <table style="width:100%; border-collapse:collapse; color:white;">
                    <tr style="background:#3f3f46"><th>الدالة f(x)</th><th>دالة أصلية F(x)</th><th>مجال التعريف</th></tr>
                    <tr><td>0</td><td>C (ثابت)</td><td>ℝ</td></tr>
                    <tr><td>1</td><td>x + C</td><td>ℝ</td></tr>
                    <tr><td>x</td><td>(1/2)x² + C</td><td>ℝ</td></tr>
                    <tr><td>xⁿ (n ≠ -1)</td><td>xⁿ⁺¹/(n+1) + C</td><td>ℝ (إذا n طبيعي)</td></tr>
                    <tr><td>1/x</td><td>ln|x| + C</td><td>ℝ*</td></tr>
                    <tr><td>eˣ</td><td>eˣ + C</td><td>ℝ</td></tr>
                    <tr><td>cos x</td><td>sin x + C</td><td>ℝ</td></tr>
                    <tr><td>sin x</td><td>-cos x + C</td><td>ℝ</td></tr>
                    <tr><td>1/cos²x</td><td>tan x + C</td><td>غير π/2 + kπ</td></tr>
                    <tr><td>1/√(1-x²)</td><td>arcsin x + C</td><td>]-1,1[</td></tr>
                    <tr><td>1/(1+x²)</td><td>arctan x + C</td><td>ℝ</td></tr>
                    </table>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>خواص الدوال الأصلية:</h4>
                    <p>1. <strong>الخطية:</strong> إذا كانت F دالة أصلية للدالة f و G دالة أصلية للدالة g على I، فإن:</p>
                    <p>   - F + G دالة أصلية للدالة f + g</p>
                    <p>   - kF دالة أصلية للدالة kf (حيث k ثابت)</p>
                    <p>2. <strong>التسلسل:</strong> إذا كانت F دالة أصلية للدالة f على I وكانت G دالة أصلية للدالة g على J بحيث g(J) ⊂ I، فإن:</p>
                    <p>   G ∘ F دالة أصلية للدالة (g ∘ F) × F' على J</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة تطبيقية:</h4>
                    <p><strong>مثال 1:</strong> أوجد دوالاً أصلية للدالة: f(x) = 3x² + 2x - 1</p>
                    <p><strong>الحل:</strong></p>
                    <p>∫(3x² + 2x - 1)dx = 3∫x²dx + 2∫xdx - ∫1dx</p>
                    <p>= 3×(x³/3) + 2×(x²/2) - x + C</p>
                    <p>= x³ + x² - x + C</p>
                    
                    <p><strong>مثال 2:</strong> أوجد دوالاً أصلية للدالة: f(x) = eˣ + 1/x</p>
                    <p><strong>الحل:</strong></p>
                    <p>∫(eˣ + 1/x)dx = ∫eˣdx + ∫(1/x)dx = eˣ + ln|x| + C</p>
                    
                    <p><strong>مثال 3:</strong> أوجد دوالاً أصلية للدالة: f(x) = cos(x) - sin(x)</p>
                    <p><strong>الحل:</strong></p>
                    <p>∫(cos x - sin x)dx = ∫cos x dx - ∫sin x dx = sin x - (-cos x) + C = sin x + cos x + C</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>إيجاد الدالة الأصلية بشرط ابتدائي:</h4>
                    <p><strong>مثال:</strong> أوجد الدالة الأصلية F للدالة f(x) = 2x + 3 التي تحقق: F(1) = 4</p>
                    <p><strong>الحل:</strong></p>
                    <p>1. نوجد جميع الدوال الأصلية: ∫(2x+3)dx = x² + 3x + C</p>
                    <p>2. نطبق الشرط: F(1) = 4 ⇒ 1² + 3×1 + C = 4 ⇒ 1 + 3 + C = 4 ⇒ 4 + C = 4 ⇒ C = 0</p>
                    <p>3. إذن: F(x) = x² + 3x</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> أوجد دوالاً أصلية للدوال التالية:</p>
                    <p>أ) f(x) = 4x³ - 2x + 5</p>
                    <p>ب) f(x) = 1/(x²) + √x</p>
                    <p>ج) f(x) = 3eˣ + 2cos x</p>
                    <p><strong>الحل:</strong></p>
                    <p>أ) ∫(4x³ - 2x + 5)dx = 4∫x³dx - 2∫xdx + 5∫dx = x⁴ - x² + 5x + C</p>
                    <p>ب) 1/x² = x⁻² ⇒ ∫(x⁻² + x^(1/2))dx = x⁻¹/(-1) + x^(3/2)/(3/2) + C = -1/x + (2/3)x^(3/2) + C</p>
                    <p>ج) ∫(3eˣ + 2cos x)dx = 3eˣ + 2sin x + C</p>
                    
                    <p><strong>التمرين 2:</strong> أوجد الدالة الأصلية F للدالة f(x) = 6x² - 4x + 1 التي تحقق: F(0) = 2</p>
                    <p><strong>الحل:</strong> ∫(6x² - 4x + 1)dx = 2x³ - 2x² + x + C</p>
                    <p>F(0) = 2 ⇒ 0 - 0 + 0 + C = 2 ⇒ C = 2</p>
                    <p>F(x) = 2x³ - 2x² + x + 2</p>
                    
                    <p><strong>التمرين 3:</strong> بين أن الدالة F(x) = ln|x| هي دالة أصلية للدالة f(x) = 1/x على ℝ*</p>
                    <p><strong>الحل:</strong></p>
                    <p>إذا كانت x > 0: F(x) = ln x ⇒ F'(x) = 1/x = f(x)</p>
                    <p>إذا كانت x < 0: F(x) = ln(-x) ⇒ F'(x) = [1/(-x)] × (-1) = 1/x = f(x)</p>
                    <p>إذن F دالة أصلية للدالة f على ℝ*</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: دوال أصلية للدالة f هي جميع الدوال التي مشتقتها تساوي f، أي أنها "عملية عكسية للاشتقاق".</span>
                    `
                },
                { 
                    title: "2. الحساب التكاملي", 
                    content: `
                    <h3 style="color:#818cf8;">الحساب التكاملي - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تعريف التكامل المحدد (تكامل ريمان):</h4>
                    <p>لتكن f دالة مستمرة على المجال [a, b]. التكامل المحدد للدالة f من a إلى b هو العدد الحقيقي:</p>
                    <p>∫[من a إلى b] f(x)dx = F(b) - F(a) حيث F دالة أصلية للدالة f</p>
                    <p>ونرمز له أيضاً: ∫[a→b] f(x)dx = [F(x)][من a إلى b] = F(b) - F(a)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التفسير الهندسي للتكامل:</h4>
                    <p>إذا كانت f دالة موجبة على [a, b]، فإن ∫[a→b] f(x)dx تمثل المساحة المحصورة بين:</p>
                    <p>1. المنحنى الممثل للدالة f</p>
                    <p>2. محور الأفاصيل (المحور x)</p>
                    <p>3. المستقيمين x = a و x = b</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>خواص التكامل المحدد:</h4>
                    <p>1. <strong>الخطية:</strong> ∫[a→b] [αf(x) + βg(x)]dx = α∫[a→b] f(x)dx + β∫[a→b] g(x)dx</p>
                    <p>2. <strong>التجزئة:</strong> ∫[a→b] f(x)dx = ∫[a→c] f(x)dx + ∫[c→b] f(x)dx (حيث a ≤ c ≤ b)</p>
                    <p>3. <strong>عكس الحدود:</strong> ∫[a→b] f(x)dx = -∫[b→a] f(x)dx</p>
                    <p>4. <strong>تكامل الدالة الثابتة:</strong> ∫[a→b] k dx = k(b - a)</p>
                    <p>5. <strong>إذا كانت f ≤ g على [a, b] فإن:</strong> ∫[a→b] f(x)dx ≤ ∫[a→b] g(x)dx</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مبرهنة القيمة المتوسطة للتكامل:</h4>
                    <p>إذا كانت f دالة مستمرة على [a, b]، فإنه يوجد c ∈ [a, b] بحيث:</p>
                    <p>∫[a→b] f(x)dx = f(c) × (b - a)</p>
                    <p><strong>التفسير الهندسي:</strong> يوجد مستطيل قاعدته (b-a) وارتفاعه f(c) مساحته تساوي المساحة تحت المنحنى</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>علاقة شال (Chasles):</h4>
                    <p>لتكن f دالة مستمرة على I، ولتكن a, b, c ∈ I، فإن:</p>
                    <p>∫[a→b] f(x)dx = ∫[a→c] f(x)dx + ∫[c→b] f(x)dx</p>
                    <p><strong>ملاحظة:</strong> هذه الخاصية صحيحة حتى إذا لم يكن c بين a و b</p>
                    <p><strong>مثال:</strong> احسب ∫[1→3] f(x)dx إذا علمت أن ∫[1→2] f(x)dx = 4 و ∫[2→3] f(x)dx = 5</p>
                    <p>الحل: ∫[1→3] f(x)dx = ∫[1→2] f(x)dx + ∫[2→3] f(x)dx = 4 + 5 = 9</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة حسابية للتكاملات المحددة:</h4>
                    <p><strong>مثال 1:</strong> احسب ∫[0→2] (3x² - 2x + 1)dx</p>
                    <p><strong>الحل:</strong></p>
                    <p>الدالة الأصلية: F(x) = x³ - x² + x</p>
                    <p>∫[0→2] (3x² - 2x + 1)dx = [x³ - x² + x][0→2]</p>
                    <p>= (2³ - 2² + 2) - (0³ - 0² + 0)</p>
                    <p>= (8 - 4 + 2) - 0 = 6</p>
                    
                    <p><strong>مثال 2:</strong> احسب ∫[1→e] (1/x)dx</p>
                    <p><strong>الحل:</strong></p>
                    <p>الدالة الأصلية: F(x) = ln|x|</p>
                    <p>∫[1→e] (1/x)dx = [ln|x|][1→e] = ln(e) - ln(1) = 1 - 0 = 1</p>
                    
                    <p><strong>مثال 3:</strong> احسب ∫[0→π/2] cos x dx</p>
                    <p><strong>الحل:</strong></p>
                    <p>الدالة الأصلية: F(x) = sin x</p>
                    <p>∫[0→π/2] cos x dx = [sin x][0→π/2] = sin(π/2) - sin(0) = 1 - 0 = 1</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الدالة التكاملية:</h4>
                    <p>لتكن f دالة مستمرة على I، ولتكن a ∈ I. نعرف الدالة التكاملية F على I بـ:</p>
                    <p>F(x) = ∫[a→x] f(t)dt</p>
                    <p><strong>خصائص الدالة التكاملية:</strong></p>
                    <p>1. F دالة قابلة للاشتقاق على I</p>
                    <p>2. F'(x) = f(x) لكل x ∈ I (أي أن F دالة أصلية للدالة f)</p>
                    <p>3. F(a) = 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تكامل دالة مركبة (تغيير المتغير):</h4>
                    <p>إذا كانت F دالة أصلية للدالة f على I، وكانت u دالة قابلة للاشتقاق على J بحيث u(J) ⊂ I، فإن:</p>
                    <p>∫ f(u(x)) × u'(x) dx = F(u(x)) + C</p>
                    <p><strong>مثال:</strong> احسب ∫ 2x × e^(x²) dx</p>
                    <p><strong>الحل:</strong> نلاحظ أن مشتقة x² هي 2x</p>
                    <p>نضع u = x² ⇒ u' = 2x</p>
                    <p>إذن: ∫ 2x × e^(x²) dx = ∫ e^u × u' dx = ∫ e^u du = e^u + C = e^(x²) + C</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> احسب التكاملات التالية:</p>
                    <p>أ) ∫[0→1] (x³ + 2x - 1)dx</p>
                    <p>ب) ∫[1→4] (√x + 1/x)dx</p>
                    <p>ج) ∫[-1→1] (eˣ + x²)dx</p>
                    <p><strong>الحل:</strong></p>
                    <p>أ) الدالة الأصلية: F(x) = x⁴/4 + x² - x</p>
                    <p>∫[0→1] (x³ + 2x - 1)dx = [x⁴/4 + x² - x][0→1] = (1/4 + 1 - 1) - 0 = 1/4</p>
                    <p>ب) √x = x^(1/2) ⇒ الدالة الأصلية: F(x) = (2/3)x^(3/2) + ln|x|</p>
                    <p>∫[1→4] (√x + 1/x)dx = [(2/3)x^(3/2) + ln|x|][1→4]</p>
                    <p>= [(2/3)×8 + ln4] - [(2/3)×1 + ln1] = (16/3 + ln4) - (2/3 + 0) = 14/3 + ln4</p>
                    <p>ج) ∫[-1→1] (eˣ + x²)dx = [eˣ + x³/3][-1→1] = (e¹ + 1/3) - (e⁻¹ - 1/3) = e + 1/3 - 1/e + 1/3 = e - 1/e + 2/3</p>
                    
                    <p><strong>التمرين 2:</strong> إذا كان ∫[0→2] f(x)dx = 5 و ∫[2→4] f(x)dx = 3، احسب ∫[0→4] f(x)dx</p>
                    <p><strong>الحل:</strong> ∫[0→4] f(x)dx = ∫[0→2] f(x)dx + ∫[2→4] f(x)dx = 5 + 3 = 8</p>
                    
                    <p><strong>التمرين 3:</strong> احسب ∫ cos(2x) dx</p>
                    <p><strong>الحل:</strong> نلاحظ أن مشتقة sin(2x) هي 2cos(2x)</p>
                    <p>إذن: ∫ cos(2x) dx = (1/2)∫ 2cos(2x) dx = (1/2)sin(2x) + C</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: التكامل المحدد يعطي عدداً حقيقياً (مساحة)، بينما التكامل غير المحدد يعطي دالة (دالة أصلية).</span>
                    `
                },
                { 
                    title: "3. تقنيات التكامل وحساب المساحات", 
                    content: `
                    <h3 style="color:#818cf8;">تقنيات التكامل وحساب المساحات - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التكامل بالتجزئة (Integration by Parts):</h4>
                    <p>إذا كانت u و v دالتين قابلة للاشتقاق على مجال I، فإن:</p>
                    <p>∫ u(x) × v'(x) dx = u(x) × v(x) - ∫ u'(x) × v(x) dx</p>
                    <p>أو بشكل مختصر: ∫ u dv = uv - ∫ v du</p>
                    <p><strong>الفكرة:</strong> نحول تكامل جداء إلى تكامل أسهل</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال على التكامل بالتجزئة:</h4>
                    <p><strong>مثال 1:</strong> احسب ∫ x × eˣ dx</p>
                    <p><strong>الحل:</strong> نضع: u = x ⇒ du = dx</p>
                    <p>dv = eˣ dx ⇒ v = eˣ</p>
                    <p>∫ x × eˣ dx = x × eˣ - ∫ eˣ dx = x × eˣ - eˣ + C = eˣ(x - 1) + C</p>
                    
                    <p><strong>مثال 2:</strong> احسب ∫ ln(x) dx</p>
                    <p><strong>الحل:</strong> نكتب: ∫ ln(x) × 1 dx</p>
                    <p>نضع: u = ln(x) ⇒ du = (1/x) dx</p>
                    <p>dv = dx ⇒ v = x</p>
                    <p>∫ ln(x) dx = x × ln(x) - ∫ x × (1/x) dx = x × ln(x) - ∫ 1 dx = x × ln(x) - x + C = x(ln x - 1) + C</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تكامل الدوال الكسرية البسيطة:</h4>
                    <p><strong>1. ∫ (1/(ax+b)) dx = (1/a) ln|ax+b| + C</strong></p>
                    <p><strong>2. ∫ (1/(ax+b)ⁿ) dx = (1/a) × (ax+b)¹⁻ⁿ/(1-n) + C (لـ n ≠ 1)</strong></p>
                    <p><strong>3. ∫ (px+q)/(ax²+bx+c) dx:</strong> نحول البسط إلى مشتقة المقام + ثابت</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>حساب مساحة حيز مستو:</h4>
                    <p><strong>الحالة 1: الدالة موجبة على [a, b]:</strong></p>
                    <p>المساحة = ∫[a→b] f(x) dx</p>
                    <p><strong>الحالة 2: الدالة سالبة على [a, b]:</strong></p>
                    <p>المساحة = -∫[a→b] f(x) dx</p>
                    <p><strong>الحالة 3: الدالة تغير إشارتها على [a, b]:</strong></p>
                    <p>المساحة = ∫[a→b] |f(x)| dx = مجموع التكاملات على المجالات التي تحافظ فيها f على إشارتها</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال شامل لحساب مساحة:</h4>
                    <p><strong>المثال:</strong> احسب مساحة الحيز المحصور بين المنحنى y = x² - 1 ومحور الأفاصيل على المجال [0, 2]</p>
                    <p><strong>الحل:</strong></p>
                    <p>1. نجد نقاط تقاطع المنحنى مع محور الأفاصيل: x² - 1 = 0 ⇒ x = 1 أو x = -1</p>
                    <p>في المجال [0, 2]: النقطة x = 1 هي نقطة تقاطع</p>
                    <p>2. ندرس إشارة f(x) = x² - 1:</p>
                    <p>   - على [0, 1]: f(x) ≤ 0 (سالب أو صفر)</p>
                    <p>   - على [1, 2]: f(x) ≥ 0 (موجب أو صفر)</p>
                    <p>3. المساحة = ∫[0→1] |x²-1| dx + ∫[1→2] |x²-1| dx</p>
                    <p>   = ∫[0→1] (1 - x²) dx + ∫[1→2] (x² - 1) dx</p>
                    <p>   = [x - x³/3][0→1] + [x³/3 - x][1→2]</p>
                    <p>   = [(1 - 1/3) - 0] + [(8/3 - 2) - (1/3 - 1)]</p>
                    <p>   = (2/3) + [(8/3 - 6/3) - (1/3 - 3/3)] = 2/3 + [2/3 - (-2/3)]</p>
                    <p>   = 2/3 + 4/3 = 6/3 = 2</p>
                    <p><strong>المساحة = 2 وحدة مربعة</strong></p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>حساب حجم جسم دوران:</h4>
                    <p>إذا دار منحنى الدالة f (الموجبة) حول محور الأفاصيل على المجال [a, b]، فإن حجم الجسم الناتج هو:</p>
                    <p>V = π ∫[a→b] [f(x)]² dx</p>
                    <p><strong>مثال:</strong> احسب حجم الجسم الناتج عن دوران المنحنى y = √x حول محور الأفاصيل على المجال [0, 4]</p>
                    <p><strong>الحل:</strong> V = π ∫[0→4] (√x)² dx = π ∫[0→4] x dx = π [x²/2][0→4] = π × (16/2 - 0) = 8π</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>حساب مساحة بين منحنيين:</h4>
                    <p>إذا كانت f(x) ≥ g(x) على [a, b]، فإن المساحة المحصورة بين المنحنيين هي:</p>
                    <p>المساحة = ∫[a→b] [f(x) - g(x)] dx</p>
                    <p><strong>مثال:</strong> احسب المساحة المحصورة بين المنحنيين y = x² و y = x على [0, 1]</p>
                    <p><strong>الحل:</strong> على [0, 1]: x ≥ x²</p>
                    <p>المساحة = ∫[0→1] (x - x²) dx = [x²/2 - x³/3][0→1] = (1/2 - 1/3) - 0 = 1/6</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>طرق تكامل خاصة:</h4>
                    <p><strong>1. تكامل الدوال المثلثية:</strong></p>
                    <p>∫ sin²x dx = (1/2)(x - sin x cos x) + C</p>
                    <p>∫ cos²x dx = (1/2)(x + sin x cos x) + C</p>
                    <p><strong>2. تكامل بالتعويض المثلثي:</strong> لـ ∫ √(a² - x²) dx نضع x = a sin θ</p>
                    <p><strong>3. تكامل الدوال الكسرية: </strong>نحلل إلى كسور جزئية</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> احسب ∫ x × sin x dx</p>
                    <p><strong>الحل:</strong> بالتجزئة: نضع u = x ⇒ du = dx، dv = sin x dx ⇒ v = -cos x</p>
                    <p>∫ x sin x dx = -x cos x - ∫ (-cos x) dx = -x cos x + ∫ cos x dx = -x cos x + sin x + C</p>
                    
                    <p><strong>التمرين 2:</strong> احسب المساحة المحصورة بين المنحنى y = x³ ومحور الأفاصيل على [-1, 1]</p>
                    <p><strong>الحل:</strong> f(x) = x³</p>
                    <p>نقطة التقاطع مع محور الأفاصيل: x = 0</p>
                    <p>إشارة f: سالب على [-1, 0]، موجب على [0, 1]</p>
                    <p>المساحة = ∫[-1→0] |x³| dx + ∫[0→1] |x³| dx = ∫[-1→0] (-x³) dx + ∫[0→1] x³ dx</p>
                    <p>= [-x⁴/4][-1→0] + [x⁴/4][0→1] = [0 - (-1/4)] + [1/4 - 0] = 1/4 + 1/4 = 1/2</p>
                    
                    <p><strong>التمرين 3:</strong> احسب ∫ eˣ sin x dx</p>
                    <p><strong>الحل:</strong> بالتجزئة مرتين:</p>
                    <p>نضع أولاً: u = eˣ ⇒ du = eˣ dx، dv = sin x dx ⇒ v = -cos x</p>
                    <p>I = ∫ eˣ sin x dx = -eˣ cos x + ∫ eˣ cos x dx</p>
                    <p>نطبق التجزئة على ∫ eˣ cos x dx: u = eˣ ⇒ du = eˣ dx، dv = cos x dx ⇒ v = sin x</p>
                    <p>∫ eˣ cos x dx = eˣ sin x - ∫ eˣ sin x dx = eˣ sin x - I</p>
                    <p>إذن: I = -eˣ cos x + eˣ sin x - I</p>
                    <p>2I = eˣ (sin x - cos x) ⇒ I = (1/2)eˣ (sin x - cos x) + C</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: عند حساب مساحة، يجب الانتباه لإشارة الدالة، فالمساحة دائماً موجبة بينما التكامل قد يكون سالباً.</span>
                    `
                },
                { 
                    header: true, 
                    title: "المحور الخامس: الأعداد المركبة (الجزء 1)" 
                },
                { 
                    title: "1. الحساب في مجموعة الأعداد المركبة", 
                    content: `
                    <h3 style="color:#818cf8;">الأعداد المركبة - الجزء الأول - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مقدمة: لماذا الأعداد المركبة؟</h4>
                    <p>المعادلة x² + 1 = 0 ليس لها حل في ℝ لأن x² = -1 مستحيل في ℝ</p>
                    <p>نحتاج إلى توسيع مجموعة الأعداد الحقيقية لنتمكن من حل مثل هذه المعادلات</p>
                    <p>نعرف العدد التخيلي i بحيث: i² = -1</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تعريف العدد المركب:</h4>
                    <p>عدد مركب z هو عدد يكتب على الشكل: z = a + ib حيث:</p>
                    <p>- a و b عددان حقيقيان</p>
                    <p>- i هو العدد التخيلي الأساسي حيث i² = -1</p>
                    <p>- a يسمى الجزء الحقيقي للعدد المركب، ويرمز له Re(z) = a</p>
                    <p>- b يسمى الجزء التخيلي للعدد المركب، ويرمز له Im(z) = b</p>
                    <p><strong>ملاحظة:</strong> إذا كان b = 0 فإن z = a عدد حقيقي</p>
                    <p>إذا كان a = 0 فإن z = ib يسمى عدداً تخيلياً محضاً</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مجموعة الأعداد المركبة:</h4>
                    <p>مجموعة الأعداد المركبة ترمز بـ ℂ</p>
                    <p>ℝ ⊂ ℂ (كل عدد حقيقي هو عدد مركب جزؤه التخيلي صفر)</p>
                    <p>الشكل الجبري: z = a + ib هو التمثيل الجبري للعدد المركب</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المساواة بين عددين مركبين:</h4>
                    <p>z₁ = a + ib و z₂ = c + id متساويان إذا وفقط إذا:</p>
                    <p>a = c و b = d</p>
                    <p>أي: Re(z₁) = Re(z₂) و Im(z₁) = Im(z₂)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المرافق (Conjugate):</h4>
                    <p>مرافق العدد المركب z = a + ib هو العدد المركب:</p>
                    <p>z̄ = a - ib</p>
                    <p><strong>خصائص المرافق:</strong></p>
                    <p>1. z₁ + z₂ = z̄₁ + z̄₂</p>
                    <p>2. z₁ × z₂ = z̄₁ × z̄₂</p>
                    <p>3. (zⁿ) = (z̄)ⁿ</p>
                    <p>4. z + z̄ = 2Re(z)</p>
                    <p>5. z - z̄ = 2i Im(z)</p>
                    <p>6. z × z̄ = a² + b² (عدد حقيقي موجب)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>العمليات على الأعداد المركبة:</h4>
                    <p><strong>1. الجمع:</strong> (a+ib) + (c+id) = (a+c) + i(b+d)</p>
                    <p><strong>2. الطرح:</strong> (a+ib) - (c+id) = (a-c) + i(b-d)</p>
                    <p><strong>3. الضرب:</strong> (a+ib) × (c+id) = ac + iad + ibc + i²bd = (ac - bd) + i(ad + bc)</p>
                    <p><strong>4. القسمة:</strong> لتكن z₁ = a+ib، z₂ = c+id ≠ 0</p>
                    <p>z₁/z₂ = (a+ib)/(c+id) = [(a+ib)(c-id)]/[(c+id)(c-id)] = [(ac+bd) + i(bc-ad)]/(c²+d²)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المثال الأول (الجمع والضرب):</h4>
                    <p>لتكن z₁ = 2 + 3i، z₂ = 1 - 2i</p>
                    <p>z₁ + z₂ = (2+1) + i(3-2) = 3 + i</p>
                    <p>z₁ - z₂ = (2-1) + i(3-(-2)) = 1 + 5i</p>
                    <p>z₁ × z₂ = (2×1 - 3×(-2)) + i(2×(-2) + 3×1) = (2+6) + i(-4+3) = 8 - i</p>
                    <p>مرافق z₁: z̄₁ = 2 - 3i</p>
                    <p>مرافق z₂: z̄₂ = 1 + 2i</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال على القسمة:</h4>
                    <p>احسب: (3+4i)/(1+2i)</p>
                    <p><strong>الحل:</strong></p>
                    <p>(3+4i)/(1+2i) = [(3+4i)(1-2i)]/[(1+2i)(1-2i)]</p>
                    <p>البسط: (3+4i)(1-2i) = 3×1 + 3×(-2i) + 4i×1 + 4i×(-2i)</p>
                    <p>= 3 - 6i + 4i - 8i² = 3 - 2i - 8×(-1) = 3 - 2i + 8 = 11 - 2i</p>
                    <p>المقام: (1+2i)(1-2i) = 1² - (2i)² = 1 - 4i² = 1 - 4×(-1) = 1 + 4 = 5</p>
                    <p>إذن: (3+4i)/(1+2i) = (11-2i)/5 = 11/5 - (2/5)i</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>معكوس عدد مركب:</h4>
                    <p>معكوس العدد المركب z = a+ib (حيث z ≠ 0) هو:</p>
                    <p>1/z = z̄/(z×z̄) = (a-ib)/(a²+b²)</p>
                    <p><strong>مثال:</strong> أوجد معكوس z = 3+4i</p>
                    <p>1/z = (3-4i)/(3²+4²) = (3-4i)/(9+16) = (3-4i)/25 = 3/25 - (4/25)i</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الطويلة (Module) أو المعيار:</h4>
                    <p>طويلة العدد المركب z = a+ib هي العدد الحقيقي الموجب:</p>
                    <p>|z| = √(a² + b²)</p>
                    <p><strong>خصائص الطويلة:</strong></p>
                    <p>1. |z| ≥ 0 و |z| = 0 ⇔ z = 0</p>
                    <p>2. |z| = |z̄|</p>
                    <p>3. |z₁ × z₂| = |z₁| × |z₂|</p>
                    <p>4. |z₁/z₂| = |z₁|/|z₂| (لـ z₂ ≠ 0)</p>
                    <p>5. |z₁ + z₂| ≤ |z₁| + |z₂| (متفاوتة مثلثية)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> بسط العبارة: (1+i)³</p>
                    <p><strong>الحل:</strong> (1+i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i</p>
                    <p>(1+i)³ = (1+i)² × (1+i) = 2i × (1+i) = 2i + 2i² = 2i - 2 = -2 + 2i</p>
                    
                    <p><strong>التمرين 2:</strong> احسب طويلة العدد المركب z = 3-4i</p>
                    <p><strong>الحل:</strong> |z| = √(3² + (-4)²) = √(9+16) = √25 = 5</p>
                    
                    <p><strong>التمرين 3:</strong> أوجد العدد المركب z الذي يحقق: (1+2i)z = 3-i</p>
                    <p><strong>الحل:</strong> z = (3-i)/(1+2i) = [(3-i)(1-2i)]/[(1+2i)(1-2i)]</p>
                    <p>= [3×1 + 3×(-2i) + (-i)×1 + (-i)×(-2i)]/(1+4)</p>
                    <p>= [3 - 6i - i + 2i²]/5 = [3 - 7i - 2]/5 = (1 - 7i)/5 = 1/5 - (7/5)i</p>
                    
                    <p><strong>التمرين 4:</strong> بين أن: |(2+3i)/(1-i)| = √(13/2)</p>
                    <p><strong>الحل:</strong> |2+3i| = √(4+9) = √13</p>
                    <p>|1-i| = √(1+1) = √2</p>
                    <p>إذن: |(2+3i)/(1-i)| = |2+3i|/|1-i| = √13/√2 = √(13/2)</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: عند ضرب عدد مركب في مرافقه، نحصل على عدد حقيقي موجب (مجموع مربعي جزئيه الحقيقي والتخيلي).</span>
                    `
                },
                { 
                    title: "2. الشكل المثلثي والآسي", 
                    content: `
                    <h3 style="color:#818cf8;">الشكل المثلثي والآسي للأعداد المركبة - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التمثيل الهندسي للعدد المركب:</h4>
                    <p>نمثل العدد المركب z = a+ib في المستوى العقدي (مستوى أوغند) بالنقطة M التي إحداثياتها (a, b)</p>
                    <p>المحور الأفقي: محور الأجزاء الحقيقية (Re)</p>
                    <p>المحور العمودي: محور الأجزاء التخيلية (Im)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الإحداثيات القطبية:</h4>
                    <p>لكل نقطة M في المستوى (غير الأصل) نربط:</p>
                    <p>1. <strong>طويلة (Module):</strong> r = OM = √(a²+b²) = |z|</p>
                    <p>2. <strong>عمدة (Argument):</strong> θ = (Ox, OM) مقاسة بالراديان</p>
                    <p>العمدة معرفة modulo 2π: إذا كانت θ عمدة لـ z، فإن θ + 2kπ (حيث k ∈ ℤ) هي أيضاً عمدة لـ z</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>العلاقة بين الإحداثيات الديكارتية والقطبية:</h4>
                    <p>إذا كانت للنقطة M إحداثيات ديكارتية (a, b) وإحداثيات قطبية (r, θ)، فإن:</p>
                    <p>a = r cos θ</p>
                    <p>b = r sin θ</p>
                    <p>وبالتالي: z = a+ib = r(cos θ + i sin θ)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الشكل المثلثي للعدد المركب:</h4>
                    <p>z = r(cos θ + i sin θ) حيث:</p>
                    <p>- r = |z| ≥ 0 (الطويلة)</p>
                    <p>- θ عمدة لـ z (تقاس بالراديان)</p>
                    <p>نكتب أحياناً: z = [r, θ] للدلالة على الشكل المثلثي</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال: كتابة عدد مركب بالشكل المثلثي</h4>
                    <p><strong>المثال:</strong> اكتب العدد المركب z = 1 + i√3 بالشكل المثلثي</p>
                    <p><strong>الحل:</strong></p>
                    <p>1. الطويلة: r = √(1² + (√3)²) = √(1+3) = √4 = 2</p>
                    <p>2. العمدة: cos θ = a/r = 1/2، sin θ = b/r = √3/2</p>
                    <p>من الجدول: cos θ = 1/2 و sin θ = √3/2 ⇒ θ = π/3 + 2kπ</p>
                    <p>3. الشكل المثلثي: z = 2[cos(π/3) + i sin(π/3)]</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>حساب العمدة:</h4>
                    <p>للعثور على عمدة العدد المركب z = a+ib:</p>
                    <p>1. نحدد الربع الذي تقع فيه النقطة (a, b)</p>
                    <p>2. نحسب: tan θ = b/a</p>
                    <p>3. نوجد θ المناسبة للربع:</p>
                    <p>   - الربع الأول: θ = arctan(b/a)</p>
                    <p>   - الربع الثاني: θ = π + arctan(b/a)</p>
                    <p>   - الربع الثالث: θ = π + arctan(b/a)</p>
                    <p>   - الربع الرابع: θ = 2π + arctan(b/a)</p>
                    <p>4. إذا كان a=0 (على المحور التخيلي):</p>
                    <p>   - b>0: θ = π/2</p>
                    <p>   - b<0: θ = 3π/2 أو -π/2</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>ضرب وقسمة الأعداد المركبة بالشكل المثلثي:</h4>
                    <p>لتكن z₁ = r₁(cos θ₁ + i sin θ₁) و z₂ = r₂(cos θ₂ + i sin θ₂)</p>
                    <p><strong>1. الضرب:</strong> z₁ × z₂ = r₁r₂ [cos(θ₁+θ₂) + i sin(θ₁+θ₂)]</p>
                    <p>الطويلة تضرب، العمدة تجمع</p>
                    <p><strong>2. القسمة:</strong> z₁/z₂ = (r₁/r₂) [cos(θ₁-θ₂) + i sin(θ₁-θ₂)] (لـ z₂ ≠ 0)</p>
                    <p>الطويلة تقسم، العمدة تطرح</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>صيغة موافر (De Moivre):</h4>
                    <p>لأي عدد صحيح نسبي n ولأي عدد حقيقي θ:</p>
                    <p>[cos θ + i sin θ]ⁿ = cos(nθ) + i sin(nθ)</p>
                    <p><strong>إثبات:</strong> بالتراجع على n</p>
                    <p><strong>نتيجة:</strong> إذا كان z = r(cos θ + i sin θ) فإن: zⁿ = rⁿ [cos(nθ) + i sin(nθ)]</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الشكل الأسي (صيغة أويلر):</h4>
                    <p>من تعريف الدالة الأسية المركبة:</p>
                    <p>e^(iθ) = cos θ + i sin θ</p>
                    <p>وبالتالي: z = r(cos θ + i sin θ) = r × e^(iθ)</p>
                    <p>هذا هو <strong>الشكل الأسي</strong> للعدد المركب</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>خصائص الشكل الأسي:</h4>
                    <p>1. e^(iθ₁) × e^(iθ₂) = e^(i(θ₁+θ₂))</p>
                    <p>2. e^(iθ₁) / e^(iθ₂) = e^(i(θ₁-θ₂))</p>
                    <p>3. [e^(iθ)]ⁿ = e^(inθ) (صيغة موافر)</p>
                    <p>4. e^(iπ) = -1 (صيغة أويلر الجميلة)</p>
                    <p>5. |e^(iθ)| = 1</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة تطبيقية:</h4>
                    <p><strong>مثال 1:</strong> احسب (1+i)¹⁰ باستخدام الشكل المثلثي</p>
                    <p><strong>الحل:</strong></p>
                    <p>1+i = √2[cos(π/4) + i sin(π/4)]</p>
                    <p>(1+i)¹⁰ = (√2)¹⁰ [cos(10π/4) + i sin(10π/4)]</p>
                    <p>= 2⁵ [cos(5π/2) + i sin(5π/2)] = 32[cos(π/2) + i sin(π/2)] = 32(0+i) = 32i</p>
                    
                    <p><strong>مثال 2:</strong> اكتب e^(iπ/3) بالشكل الجبري</p>
                    <p><strong>الحل:</strong> e^(iπ/3) = cos(π/3) + i sin(π/3) = 1/2 + i(√3/2)</p>
                    
                    <p><strong>مثال 3:</strong> احسب ناتج ضرب: 2e^(iπ/4) × 3e^(iπ/6)</p>
                    <p><strong>الحل:</strong> = (2×3)e^(i(π/4+π/6)) = 6e^(i(3π/12+2π/12)) = 6e^(i5π/12)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> اكتب z = √3 - i بالشكل المثلثي</p>
                    <p><strong>الحل:</strong></p>
                    <p>r = √((√3)²+(-1)²) = √(3+1) = 2</p>
                    <p>cos θ = √3/2، sin θ = -1/2 ⇒ θ = -π/6 أو 11π/6</p>
                    <p>z = 2[cos(-π/6) + i sin(-π/6)] = 2[cos(11π/6) + i sin(11π/6)]</p>
                    
                    <p><strong>التمرين 2:</strong> باستخدام صيغة موافر، احسب cos(3θ) و sin(3θ) بدلالة cos θ و sin θ</p>
                    <p><strong>الحل:</strong></p>
                    <p>[cos θ + i sin θ]³ = cos(3θ) + i sin(3θ)</p>
                    <p>نطور الطرف الأيسر: (cos θ + i sin θ)³ = cos³θ + 3i cos²θ sin θ + 3i² cos θ sin²θ + i³ sin³θ</p>
                    <p>= cos³θ - 3cos θ sin²θ + i(3cos²θ sin θ - sin³θ)</p>
                    <p>بمطابقة الجزأين الحقيقي والتخيلي:</p>
                    <p>cos(3θ) = cos³θ - 3cos θ sin²θ = 4cos³θ - 3cos θ</p>
                    <p>sin(3θ) = 3cos²θ sin θ - sin³θ = 3sin θ - 4sin³θ</p>
                    
                    <p><strong>التمرين 3:</strong> بين أن: (1+i√3)/(1-i) = √2 e^(i7π/12)</p>
                    <p><strong>الحل:</strong></p>
                    <p>1+i√3 = 2[cos(π/3) + i sin(π/3)] = 2e^(iπ/3)</p>
                    <p>1-i = √2[cos(-π/4) + i sin(-π/4)] = √2 e^(-iπ/4)</p>
                    <p>(1+i√3)/(1-i) = (2e^(iπ/3))/(√2 e^(-iπ/4)) = √2 e^(iπ/3 + iπ/4) = √2 e^(i7π/12)</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: الشكل المثلثي والأسي مفيدان جداً في ضرب وقسمة وقوى الأعداد المركبة، حيث يحول هذه العمليات إلى عمليات بسيطة على الطويلة والعمدة.</span>
                    `
                },
                { 
                    title: "3. حل المعادلات في ℂ", 
                    content: `
                    <h3 style="color:#818cf8;">حل المعادلات في مجموعة الأعداد المركبة - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مقدمة: ميزة ℂ عن ℝ</h4>
                    <p>في مجموعة الأعداد المركبة، كل معادلة حدودية من الدرجة n لها n حلاً (عد الجذور مع تكرارها)</p>
                    <p>هذه هي <strong>مبرهنة الأساس الجبرية</strong></p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المعادلة من الدرجة الأولى: az + b = 0</h4>
                    <p>حيث a, b ∈ ℂ و a ≠ 0</p>
                    <p>الحل: z = -b/a</p>
                    <p><strong>مثال:</strong> حل المعادلة: (1+i)z + 2-3i = 0</p>
                    <p><strong>الحل:</strong> z = -(2-3i)/(1+i) = (-2+3i)/(1+i)</p>
                    <p>= [(-2+3i)(1-i)]/[(1+i)(1-i)] = [(-2+2i+3i-3i²)]/(1+1)</p>
                    <p>= [(-2+5i+3)]/2 = (1+5i)/2 = 1/2 + (5/2)i</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المعادلة من الدرجة الثانية: az² + bz + c = 0</h4>
                    <p>حيث a, b, c ∈ ℂ و a ≠ 0</p>
                    <p><strong>خطوات الحل:</strong></p>
                    <p>1. نحسب المميز: Δ = b² - 4ac</p>
                    <p>2. نوجد δ بحيث δ² = Δ (جذر تربيعي مركب لـ Δ)</p>
                    <p>3. الحلول: z₁ = (-b + δ)/(2a)، z₂ = (-b - δ)/(2a)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>حالات خاصة:</h4>
                    <p><strong>الحالة 1: معادلة من الشكل: z² = α حيث α ∈ ℂ</strong></p>
                    <p>نكتب α بالشكل المثلثي: α = r(cos θ + i sin θ)</p>
                    <p>الحلول: z = √r [cos(θ/2 + kπ) + i sin(θ/2 + kπ)]، k = 0,1</p>
                    <p>أو: z = ±√r [cos(θ/2) + i sin(θ/2)]</p>
                    
                    <p><strong>الحالة 2: معادلة من الشكل: az² + bz + c = 0 حيث a,b,c ∈ ℝ</strong></p>
                    <p>- إذا كان Δ ≥ 0: الحلول حقيقية</p>
                    <p>- إذا كان Δ < 0: الحلان مركبان مترافقان</p>
                    <p>z₁ = (-b + i√|Δ|)/(2a)، z₂ = (-b - i√|Δ|)/(2a) = z̄₁</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال 1: حل معادلة بمميز سالب في ℝ</h4>
                    <p>حل المعادلة: z² - 2z + 5 = 0</p>
                    <p><strong>الحل:</strong> Δ = (-2)² - 4×1×5 = 4 - 20 = -16</p>
                    <p>√Δ = √(-16) = 4i (أو -4i)</p>
                    <p>z₁ = (2 + 4i)/2 = 1 + 2i</p>
                    <p>z₂ = (2 - 4i)/2 = 1 - 2i</p>
                    <p>ملاحظة: الحلان مترافقان</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال 2: حل معادلة بمعاملات مركبة</h4>
                    <p>حل المعادلة: z² - (1+2i)z - 1 + i = 0</p>
                    <p><strong>الحل:</strong></p>
                    <p>Δ = [-(1+2i)]² - 4×1×(-1+i) = (1+2i)² + 4 - 4i</p>
                    <p>= 1 + 4i + 4i² + 4 - 4i = 1 + 4i - 4 + 4 - 4i = 1</p>
                    <p>إذن √Δ = 1 أو -1</p>
                    <p>الحلول: z₁ = [(1+2i) + 1]/2 = (2+2i)/2 = 1 + i</p>
                    <p>z₂ = [(1+2i) - 1]/2 = (0+2i)/2 = i</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المعادلة: z² = α (حيث α مركب)</h4>
                    <p><strong>مثال:</strong> حل المعادلة: z² = 3 + 4i</p>
                    <p><strong>الحل بطريقتين:</strong></p>
                    <p><strong>الطريقة الأولى (الشكل المثلثي):</strong></p>
                    <p>3+4i = 5[cos θ + i sin θ] حيث cos θ = 3/5، sin θ = 4/5 ⇒ θ = arctan(4/3)</p>
                    <p>الحلول: z = √5 [cos(θ/2 + kπ) + i sin(θ/2 + kπ)]، k=0,1</p>
                    <p><strong>الطريقة الثانية (الطريقة الجبرية):</strong></p>
                    <p>نفرض z = x+iy ⇒ (x+iy)² = 3+4i</p>
                    <p>x² - y² + 2ixy = 3 + 4i</p>
                    <p>نطابق الجزأين الحقيقي والتخيلي:</p>
                    <p>1) x² - y² = 3</p>
                    <p>2) 2xy = 4 ⇒ xy = 2</p>
                    <p>من 2: y = 2/x، نعوض في 1: x² - (4/x²) = 3 ⇒ x⁴ - 3x² - 4 = 0</p>
                    <p>نضع u = x² ⇒ u² - 3u - 4 = 0 ⇒ u = 4 أو u = -1 (مرفوض)</p>
                    <p>x² = 4 ⇒ x = 2 أو x = -2</p>
                    <p>إذا كان x=2 ⇒ y=1 ⇒ z=2+i</p>
                    <p>إذا كان x=-2 ⇒ y=-1 ⇒ z=-2-i</p>
                    <p>الحلان: 2+i و -2-i</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المعادلات التي تؤول إلى معادلة من الدرجة الثانية:</h4>
                    <p><strong>مثال:</strong> حل المعادلة: z⁴ - 1 = 0</p>
                    <p><strong>الحل:</strong> z⁴ = 1 ⇒ (z²)² = 1 ⇒ z² = 1 أو z² = -1</p>
                    <p>من z² = 1 ⇒ z = 1 أو z = -1</p>
                    <p>من z² = -1 ⇒ z = i أو z = -i</p>
                    <p>الحلول الأربعة: 1، -1، i، -i</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>جذور الوحدة:</h4>
                    <p>جذور المعادلة zⁿ = 1 تسمى <strong>جذور الوحدة من الرتبة n</strong></p>
                    <p>الحلول: zₖ = e^(i2kπ/n)، k = 0, 1, 2, ..., n-1</p>
                    <p><strong>خاصية:</strong> مجموع جذور الوحدة من الرتبة n يساوي 0 (إذا كانت n > 1)</p>
                    <p><strong>مثال:</strong> جذور z³ = 1</p>
                    <p>zₖ = e^(i2kπ/3)، k=0,1,2</p>
                    <p>z₀ = e⁰ = 1</p>
                    <p>z₁ = e^(i2π/3) = cos(2π/3) + i sin(2π/3) = -1/2 + i√3/2</p>
                    <p>z₂ = e^(i4π/3) = cos(4π/3) + i sin(4π/3) = -1/2 - i√3/2</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>العلاقة بين الجذور والمعاملات (لمعادلة من الدرجة الثانية):</h4>
                    <p>إذا كانت z₁ و z₂ جذري المعادلة az² + bz + c = 0 (حيث a ≠ 0)، فإن:</p>
                    <p>1. z₁ + z₂ = -b/a</p>
                    <p>2. z₁ × z₂ = c/a</p>
                    <p><strong>مثال:</strong> إذا كان z₁=1+i و z₂=1-i جذري معادلة من الدرجة الثانية، فما هي هذه المعادلة؟</p>
                    <p><strong>الحل:</strong> z₁+z₂ = (1+i)+(1-i)=2 ⇒ -b/a = 2</p>
                    <p>z₁×z₂ = (1+i)(1-i) = 1 - i² = 1+1=2 ⇒ c/a = 2</p>
                    <p>نختار a=1 ⇒ b=-2، c=2</p>
                    <p>المعادلة: z² - 2z + 2 = 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> حل المعادلة: z² + 2z + 2 = 0</p>
                    <p><strong>الحل:</strong> Δ = 4 - 8 = -4</p>
                    <p>√Δ = 2i</p>
                    <p>z₁ = (-2+2i)/2 = -1+i، z₂ = (-2-2i)/2 = -1-i</p>
                    
                    <p><strong>التمرين 2:</strong> حل المعادلة: z² = -i</p>
                    <p><strong>الحل:</strong> -i = 1[cos(3π/2) + i sin(3π/2)]</p>
                    <p>z = ±[cos(3π/4) + i sin(3π/4)] = ±(-√2/2 + i√2/2)</p>
                    <p>الحلان: √2/2(-1+i) و √2/2(1-i)</p>
                    
                    <p><strong>التمرين 3:</strong> حل المعادلة: z³ = 8i</p>
                    <p><strong>الحل:</strong> 8i = 8[cos(π/2) + i sin(π/2)]</p>
                    <p>zₖ = 2[cos(π/6 + 2kπ/3) + i sin(π/6 + 2kπ/3)]، k=0,1,2</p>
                    <p>z₀ = 2[cos(π/6) + i sin(π/6)] = 2(√3/2 + i/2) = √3 + i</p>
                    <p>z₁ = 2[cos(5π/6) + i sin(5π/6)] = 2(-√3/2 + i/2) = -√3 + i</p>
                    <p>z₂ = 2[cos(3π/2) + i sin(3π/2)] = 2(0 - i) = -2i</p>
                    
                    <p><strong>التمرين 4:</strong> أوجد عددين مركبين مجموعهما 4 وحاصل ضربهما 8</p>
                    <p><strong>الحل:</strong> هما جذرا المعادلة: z² - 4z + 8 = 0</p>
                    <p>Δ = 16 - 32 = -16</p>
                    <p>z₁ = (4+4i)/2 = 2+2i، z₂ = (4-4i)/2 = 2-2i</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: عندما يكون مميز المعادلة التربيعية بالسالب (في ℝ)، فإن الحلين يكونان مترافقين في ℂ.</span>
                    `
                }
            ],
            3: [
                { 
                    header: true, 
                    title: "المحور السادس: الأعداد المركبة (تطبيقات هندسية)" 
                },
                { 
                    title: "1. التحويلات النقطية", 
                    content: `
                    <h3 style="color:#818cf8;">التحويلات النقطية في المستوى العقدي - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مقدمة: التمثيل الهندسي للأعداد المركبة</h4>
                    <p>كل عدد مركب z = x+iy يمثل بنقطة M(x,y) في المستوى المنسوب إلى معلم متعامد</p>
                    <p>نرمز لهذه النقطة بـ M(z) أو ببساطة z</p>
                    <p>المتجهة OM→ تمثل العدد المركب z</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>1. التحاكي (التمدد/التقليص) - Homothety:</h4>
                    <p>التحاكي بمركز Ω(ω) ونسبة k (حقيقي ≠ 0) يحول النقطة M(z) إلى النقطة M'(z') حيث:</p>
                    <p>z' - ω = k(z - ω)</p>
                    <p>أو: z' = kz + ω(1 - k)</p>
                    <p><strong>تفسير:</strong> إذا كان |k| > 1: تمدد، إذا كان |k| < 1: تقليص</p>
                    <p>إذا كان k < 0: التحاكي مع انعكاس</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال على التحاكي:</h4>
                    <p><strong>مثال:</strong> التحاكي بمركز Ω(1+i) ونسبة 2 يحول M(z) إلى M'(z') حيث:</p>
                    <p>z' - (1+i) = 2[z - (1+i)] ⇒ z' = 2z - (1+i)</p>
                    <p>لتكن النقطة A(2+3i)، صورة A بالتحاكي هي:</p>
                    <p>A' = 2(2+3i) - (1+i) = (4+6i) - (1+i) = 3+5i</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>2. الدوران - Rotation:</h4>
                    <p>الدوران بمركز Ω(ω) وزاوية θ يحول النقطة M(z) إلى النقطة M'(z') حيث:</p>
                    <p>z' - ω = e^(iθ)(z - ω)</p>
                    <p>أو: z' = e^(iθ)z + ω(1 - e^(iθ))</p>
                    <p><strong>ملاحظة:</strong> إذا كان المركز هو الأصل (ω=0): z' = e^(iθ)z</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة على الدوران:</h4>
                    <p><strong>مثال 1:</strong> الدوران بمركز الأصل وزاوية π/2:</p>
                    <p>e^(iπ/2) = i ⇒ z' = iz</p>
                    <p>النقطة A(2+3i) تتحول إلى: A' = i(2+3i) = 2i + 3i² = 2i - 3 = -3+2i</p>
                    
                    <p><strong>مثال 2:</strong> الدوران بمركز Ω(1) وزاوية π:</p>
                    <p>e^(iπ) = -1</p>
                    <p>z' - 1 = -1(z - 1) ⇒ z' = -z + 2</p>
                    <p>النقطة A(3) تتحول إلى: A' = -3+2 = -1</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>3. الانعكاس - Reflection:</h4>
                    <p>الانعكاس بالنسبة لمحور الأفاصيل يحول z = x+iy إلى z' = x-iy = z̄</p>
                    <p>الانعكاس بالنسبة لمحور التراتيب يحول z = x+iy إلى z' = -x+iy = -z̄</p>
                    <p>الانعكاس بالنسبة لمحور التراتيب يحول z = x+iy إلى z' = -x+iy = -z̄</p>
                    <p>الانعكاس بالنسبة لأي مستقيم يعبر الأصل يصعب كتابته إلا في حالات خاصة</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>4. التشابه المباشر - Direct Similarity:</h4>
                    <p>تشابه مباشر بمركز Ω(ω) ونسبة k وزاوية θ يحول M(z) إلى M'(z') حيث:</p>
                    <p>z' - ω = k e^(iθ)(z - ω)</p>
                    <p>أو: z' = k e^(iθ)z + ω(1 - k e^(iθ))</p>
                    <p><strong>ملاحظة:</strong> هذا التحويل هو تركيب تحاكي ودوران لهما نفس المركز</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التحويلات الخطية: z' = az + b</h4>
                    <p>حيث a, b ∈ ℂ و a ≠ 0</p>
                    <p><strong>تحليل هذا التحويل:</strong></p>
                    <p>1. نكتب a بالشكل القطبي: a = ρ e^(iθ) حيث ρ = |a|، θ = arg(a)</p>
                    <p>2. z' = ρ e^(iθ)z + b</p>
                    <p>3. هذا التحويل هو تركيب:</p>
                    <p>   - دوران بزاوية θ حول الأصل</p>
                    <p>   - تحاكي مركزه الأصل ونسبة ρ</p>
                    <p>   - إزاحة بمتجهة تمثلها b</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال شامل:</h4>
                    <p><strong>التحويل:</strong> z' = (1+i)z + 2</p>
                    <p>1. نكتب 1+i بالشكل القطبي: 1+i = √2 e^(iπ/4)</p>
                    <p>2. إذن: z' = √2 e^(iπ/4)z + 2</p>
                    <p>3. هذا التحويل هو تركيب:</p>
                    <p>   - دوران بزاوية π/4 حول الأصل</p>
                    <p>   - تحاكي مركزه الأصل ونسبة √2</p>
                    <p>   - إزاحة بمتجهة تمثلها العدد 2 (أي 2 على محور الأفاصيل)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>النقطة الثابتة لتحويل:</h4>
                    <p>النقطة M(z) تسمى ثابتة للتحويل f إذا كانت f(z) = z</p>
                    <p><strong>مثال:</strong> نجد النقطة الثابتة للتحويل z' = (1+i)z + 2</p>
                    <p>نحل المعادلة: z = (1+i)z + 2</p>
                    <p>z - (1+i)z = 2 ⇒ z(1 - 1 - i) = 2 ⇒ -iz = 2 ⇒ z = 2/(-i) = 2i</p>
                    <p>إذن النقطة الثابتة هي 2i</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> عين صورة النقطة A(1+2i) بالدوران بمركز O وزاوية π/3</p>
                    <p><strong>الحل:</strong> e^(iπ/3) = cos(π/3) + i sin(π/3) = 1/2 + i√3/2</p>
                    <p>z' = e^(iπ/3) × (1+2i) = (1/2 + i√3/2)(1+2i)</p>
                    <p>= 1/2 + i + i√3/2 + i²√3 = 1/2 + i + i√3/2 - √3</p>
                    <p>= (1/2 - √3) + i(1 + √3/2)</p>
                    
                    <p><strong>التمرين 2:</strong> عين النقطة A إذا علمت أن صورتها بالتحاكي بمركز Ω(1-i) ونسبة 3 هي A'(4+2i)</p>
                    <p><strong>الحل:</strong> z' - ω = k(z - ω) ⇒ (4+2i) - (1-i) = 3[z - (1-i)]</p>
                    <p>3+3i = 3[z - 1 + i] ⇒ z - 1 + i = 1+i ⇒ z = 2</p>
                    <p>إذن A هي النقطة 2</p>
                    
                    <p><strong>التمرين 3:</strong> بين أن التحويل z' = iz + 1 هو تشابه مباشر، وعين مركزه ونسبته وزاويته</p>
                    <p><strong>الحل:</strong> i = 1 × e^(iπ/2) ⇒ نسبة التشابه = 1، زاويته = π/2</p>
                    <p>نوجد المركز (النقطة الثابتة): z = iz + 1 ⇒ z - iz = 1 ⇒ z(1-i) = 1</p>
                    <p>z = 1/(1-i) = (1+i)/(1²+1²) = (1+i)/2</p>
                    <p>المركز هو Ω((1+i)/2)</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: كل تحويل من الشكل z' = az + b (حيث a ≠ 0) هو تشابه مباشر مركزه النقطة الثابتة للتحويل.</span>
                    `
                },
                { 
                    title: "2. مجموعة النقط", 
                    content: `
                    <h3 style="color:#818cf8;">مجموعات النقط في المستوى العقدي - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مقدمة: تمثيل علاقات على الأعداد المركبة</h4>
                    <p>مجموعة النقط M(z) في المستوى العقدي التي تحقق علاقة معينة تسمى مجموعة نقط</p>
                    <p>الهدف: تحديد شكل هذه المجموعة (مستقيم، دائرة، نصف مستوي، إلخ)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الطريقة العامة:</h4>
                    <p><strong>الخطوة 1:</strong> نضع z = x+iy حيث x,y ∈ ℝ</p>
                    <p><strong>الخطوة 2:</strong> نعوض في العلاقة المعطاة</p>
                    <p><strong>الخطوة 3:</strong> نبسط ونحصل على علاقة بين x و y</p>
                    <p><strong>الخطوة 4:</strong> نتعرف على نوع المنحنى (دائرة، مستقيم، إلخ)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>1. معادلة مستقيم:</h4>
                    <p><strong>الصيغة العامة:</strong> αz + ᾱz̄ + β = 0 حيث α ∈ ℂ* و β ∈ ℝ</p>
                    <p><strong>إثبات:</strong> نضع α = a+ib، z = x+iy</p>
                    <p>αz + ᾱz̄ = (a+ib)(x+iy) + (a-ib)(x-iy)</p>
                    <p>= (ax - by) + i(ay+bx) + (ax - by) - i(ay+bx) = 2(ax - by)</p>
                    <p>إذن: 2(ax - by) + β = 0 ⇒ ax - by + β/2 = 0 (معادلة مستقيم)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>2. دائرة مركزها Ω(ω) ونصف قطرها R:</h4>
                    <p><strong>الصيغة 1:</strong> |z - ω| = R</p>
                    <p><strong>الصيغة 2:</strong> zz̄ - ωz̄ - ω̄z + (|ω|² - R²) = 0</p>
                    <p><strong>الصيغة العامة للدائرة:</strong> αzz̄ + βz + β̄z̄ + γ = 0 حيث α,γ ∈ ℝ، α ≠ 0، β ∈ ℂ</p>
                    <p>بشرط: |β|² - αγ > 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة على مجموعات نقط:</h4>
                    <p><strong>مثال 1:</strong> عين مجموعة النقط M(z) التي تحقق: |z - 1 + i| = 2</p>
                    <p><strong>الحل:</strong> هذه دائرة مركزها النقطة ω = 1-i ونصف قطرها R = 2</p>
                    
                    <p><strong>مثال 2:</strong> عين مجموعة النقط M(z) التي تحقق: |z - 2| = |z + i|</p>
                    <p><strong>الحل:</strong> نضع z = x+iy</p>
                    <p>|x+iy-2| = |x+iy+i| ⇒ √[(x-2)² + y²] = √[x² + (y+1)²]</p>
                    <p>نربع الطرفين: (x-2)² + y² = x² + (y+1)²</p>
                    <p>x² - 4x + 4 + y² = x² + y² + 2y + 1</p>
                    <p>-4x + 4 = 2y + 1 ⇒ 2y = -4x + 3 ⇒ y = -2x + 3/2</p>
                    <p>هذا مستقيم (منصف عمودي للقطعة [AB] حيث A(2) و B(-i))</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>3. الزاوية الموجهة:</h4>
                    <p>arg((z - z_A)/(z - z_B)) = θ [π]</p>
                    <p>يمثل قوساً من دائرة (أو مستقيم إذا كانت θ = 0 [π])</p>
                    <p><strong>خاصية:</strong> إذا كانت A و B نقطتين مختلفتين، فإن مجموعة النقط M التي تحقق:</p>
                    <p>arg((z - z_A)/(z - z_B)) = θ [π] هي قوس من دائرة يرى القطعة [AB] تحت الزاوية θ</p>
                    <p>إذا كان θ = 0 [π]، فإن M تقع على المستقيم (AB) دون النقطة الوسطى بين A و B</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>4. أنصاف المستويات:</h4>
                    <p>Re(z) > 0: نصف المستوى الأيمن (الذي يحوي محور التراتيب الموجب)</p>
                    <p>Im(z) < 0: نصف المستوى السفلي</p>
                    <p>Re(z - a) > 0: نصف مستوي محدد بالمستقيم العمودي على محور الأفاصيل في x = Re(a)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال شامل:</h4>
                    <p><strong>عين مجموعة النقط M(z) التي تحقق:</strong> |z - 1| = |z - i|</p>
                    <p><strong>الحل:</strong> هذه المساواة تعني أن M تبعد بعدين متساويين عن النقطتين A(1) و B(i)</p>
                    <p>إذن M تنتمي إلى المنصف العمودي للقطعة [AB]</p>
                    <p>بالحساب: نضع z = x+iy</p>
                    <p>|x+iy-1| = |x+iy-i| ⇒ √[(x-1)² + y²] = √[x² + (y-1)²]</p>
                    <p>(x-1)² + y² = x² + (y-1)²</p>
                    <p>x² - 2x + 1 + y² = x² + y² - 2y + 1</p>
                    <p>-2x = -2y ⇒ x = y</p>
                    <p>المستقيم y = x (المنصف الأول للمستوى)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>5. مجموعات نقط خاصة:</h4>
                    <p><strong>أ) المستقيم الأفقي:</strong> Im(z) = k (ثابت)</p>
                    <p><strong>ب) المستقيم العمودي:</strong> Re(z) = k (ثابت)</p>
                    <p><strong>ج) المستقيم المائل:</strong> Im(z) = a Re(z) + b</p>
                    <p><strong>د) الدائرة المتمركزة في الأصل:</strong> |z| = R</p>
                    <p><strong>هـ) القرص المغلق:</strong> |z - ω| ≤ R</p>
                    <p><strong>و) حلقة:</strong> R₁ ≤ |z - ω| ≤ R₂</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> عين مجموعة النقط M(z) التي تحقق: |z - 2 + 3i| = 1</p>
                    <p><strong>الحل:</strong> دائرة مركزها ω = 2-3i، نصف قطرها 1</p>
                    
                    <p><strong>التمرين 2:</strong> عين مجموعة النقط M(z) التي تحقق: Re(z) = 2</p>
                    <p><strong>الحل:</strong> المستقيم العمودي الذي معادلته x = 2</p>
                    
                    <p><strong>التمرين 3:</strong> عين مجموعة النقط M(z) التي تحقق: |z - i| = |z + 1|</p>
                    <p><strong>الحل:</strong> نضع z = x+iy</p>
                    <p>|x+iy-i| = |x+iy+1| ⇒ √[x² + (y-1)²] = √[(x+1)² + y²]</p>
                    <p>x² + y² - 2y + 1 = x² + 2x + 1 + y²</p>
                    <p>-2y = 2x ⇒ y = -x</p>
                    <p>المستقيم y = -x (المنصف الثاني)</p>
                    
                    <p><strong>التمرين 4:</strong> عين مجموعة النقط M(z) التي تحقق: |z| = |z - 4|</p>
                    <p><strong>الحل:</strong> |z| = |z-4| ⇒ √(x²+y²) = √[(x-4)²+y²]</p>
                    <p>x²+y² = (x-4)²+y² = x² - 8x + 16 + y²</p>
                    <p>0 = -8x + 16 ⇒ x = 2</p>
                    <p>المستقيم العمودي x = 2</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: العلاقة |z - a| = |z - b| تمثل المنصف العمودي للقطعة [AB] حيث A(a) و B(b).</span>
                    `
                },
                { 
                    header: true, 
                    title: "المحور السابع: الهندسة في الفضاء" 
                },
                { 
                    title: "1. الجداء السلمي والمستقيمات", 
                    content: `
                    <h3 style="color:#818cf8;">الهندسة في الفضاء: الجداء السلمي والمستقيمات - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المعلم في الفضاء:</h4>
                    <p>نعمل في الفضاء المنسوب إلى معلم متعامد وممنظم (O, i, j, k)</p>
                    <p>كل نقطة M تمثل بثلاثة إحداثيات (x, y, z)</p>
                    <p>نكتب: M(x, y, z) أو OM→ = x i + y j + z k</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الجداء السلمي (الجداء القياسي):</h4>
                    <p>لتكن u→(x, y, z) و v→(x', y', z') متجهتين</p>
                    <p>الجداء السلمي لـ u→ و v→ هو العدد الحقيقي:</p>
                    <p>u→·v→ = xx' + yy' + zz'</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>خواص الجداء السلمي:</h4>
                    <p>1. <strong>تماثل:</strong> u→·v→ = v→·u→</p>
                    <p>2. <strong>ثنائي الخطية:</strong> (u→+v→)·w→ = u→·w→ + v→·w→</p>
                    <p>3. <strong>تجانس:</strong> (λu→)·v→ = λ(u→·v→)</p>
                    <p>4. <strong>موجبية:</strong> u→·u→ = ||u→||² ≥ 0</p>
                    <p>5. <strong>u→·u→ = 0 ⇔ u→ = 0→</strong></p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>طول متجهة (المعماري):</h4>
                    <p>طول المتجهة u→(x, y, z) هو:</p>
                    <p>||u→|| = √(u→·u→) = √(x² + y² + z²)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الزاوية بين متجهتين:</h4>
                    <p>إذا كانت u→ و v→ متجهتين غير منعدمتين، فإن:</p>
                    <p>u→·v→ = ||u→|| × ||v→|| × cos(θ) حيث θ = (u→, v→)</p>
                    <p>وبالتالي: cos(θ) = (u→·v→)/(||u→|| × ||v→||)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التعامد:</h4>
                    <p>المتجهتان u→ و v→ متعامدتان إذا وفقط إذا كان u→·v→ = 0</p>
                    <p><strong>ملاحظة:</strong> المتجهة المنعدمة تعتبر متعامدة مع كل المتجهات</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المستقيم في الفضاء:</h4>
                    <p><strong>1. التمثيل الوسيطي (المعلمي):</strong></p>
                    <p>المستقيم المار من النقطة A(x₀, y₀, z₀) وموجه بالمتجهة u→(a, b, c) حيث (a,b,c) ≠ (0,0,0):</p>
                    <p>M(x, y, z) ∈ D ⇔ ∃ t ∈ ℝ، OM→ = OA→ + t u→</p>
                    <p>أو: x = x₀ + ta، y = y₀ + tb، z = z₀ + tc</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>2. التمثيل بمستويين:</h4>
                    <p>المستقيم يمكن تمثيله كتقاطع مستويين:</p>
                    <p>D: { a₁x + b₁y + c₁z + d₁ = 0</p>
                    <p>    { a₂x + b₂y + c₂z + d₂ = 0</p>
                    <p>بشرط أن لا تكون معاملات المعادلتين متناسبة</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الأوضاع النسبية لمستقيمين:</h4>
                    <p>لتكن D و D' مستقيمين في الفضاء</p>
                    <p><strong>1. متوازيان:</strong> متجهتاهما الموجهتان متوازيتان</p>
                    <p><strong>2. متقاطعان:</strong> يلتقيان في نقطة واحدة</p>
                    <p><strong>3. متخالفان:</strong> لا يلتقيان وليسا متوازيين</p>
                    <p><strong>4. متطابقان:</strong> نفس المستقيم</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>شرط التوازي:</h4>
                    <p>المستقيمان D و D' متوازيان إذا وفقط إذا كانت متجهتاهما الموجهتان u→ و u'→ متوازيتان</p>
                    <p>أي: ∃ λ ∈ ℝ بحيث u'→ = λ u→</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>زاوية مستقيمين:</h4>
                    <p>زاوية مستقيمين هي الزاوية بين متجهتيهما الموجهتين</p>
                    <p>إذا كانت u→(a,b,c) و v→(a',b',c') متجهتي توجيه D و D'، فإن:</p>
                    <p>cos(θ) = |u→·v→|/(||u→|| × ||v→||) حيث θ هي الزاوية الحادة بين المستقيمين</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>شرط التعامد:</h4>
                    <p>المستقيمان D و D' متعامدان إذا وفقط إذا كانت متجهتاهما الموجهتان متعامدتان</p>
                    <p>أي: u→·v→ = 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة تطبيقية:</h4>
                    <p><strong>مثال 1:</strong> المستقيم المار من A(1,2,3) وموجه بـ u→(2,-1,1)</p>
                    <p>تمثيله الوسيطي: x = 1+2t، y = 2-t، z = 3+t، t ∈ ℝ</p>
                    
                    <p><strong>مثال 2:</strong> المستقيم المعطى بالمعادلتين: { x+y-z+1=0، 2x-y+3z-2=0 }</p>
                    <p>نوجد متجهة توجيهه: u→ = n₁→ ∧ n₂→ حيث n₁→(1,1,-1)، n₂→(2,-1,3)</p>
                    <p>u→ = (1×3 - (-1)×(-1), -1×2 - (-1)×3, 1×(-1) - 1×2) = (3-1, -2+3, -1-2) = (2, 1, -3)</p>
                    
                    <p><strong>مثال 3:</strong> نجد نقطة تقاطع المستقيم D: x=1+t, y=2-t, z=3+2t مع المستوي P: x+y+z-6=0</p>
                    <p>نعوض معادلات D في معادلة P: (1+t)+(2-t)+(3+2t)-6=0 ⇒ 6+2t-6=0 ⇒ 2t=0 ⇒ t=0</p>
                    <p>نعوض t=0 في معادلات D: x=1, y=2, z=3</p>
                    <p>نقطة التقاطع: (1,2,3)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> أوجد معادلة وسيطية للمستقيم المار من النقطتين A(1,0,2) و B(3,1,-1)</p>
                    <p><strong>الحل:</strong> متجهة التوجيه: AB→(3-1, 1-0, -1-2) = (2,1,-3)</p>
                    <p>المعادلات الوسيطية: x=1+2t, y=0+t, z=2-3t، t ∈ ℝ</p>
                    
                    <p><strong>التمرين 2:</strong> بين أن المتجهتين u→(1,2,3) و v→(2,1,-4) متعامدتان</p>
                    <p><strong>الحل:</strong> u→·v→ = 1×2 + 2×1 + 3×(-4) = 2+2-12 = -8 ≠ 0</p>
                    <p>إذن غير متعامدتين</p>
                    
                    <p><strong>التمرين 3:</strong> أوجد الزاوية بين المستقيمين:</p>
                    <p>D: x=1+t, y=2-t, z=3 و D': x=2s, y=1+s, z=4-s</p>
                    <p><strong>الحل:</strong> متجهتا التوجيه: u→(1,-1,0) و v→(2,1,-1)</p>
                    <p>u→·v→ = 1×2 + (-1)×1 + 0×(-1) = 2-1+0=1</p>
                    <p>||u→|| = √(1+1+0)=√2، ||v→|| = √(4+1+1)=√6</p>
                    <p>cos(θ) = 1/(√2×√6)=1/√12=1/(2√3)=√3/6</p>
                    <p>θ = arccos(√3/6) ≈ 73.22°</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: متجهة توجيه مستقيم هي أي متجهة موازية له، وعادة نأخذ أبسط متجهة (بدون كسور).</span>
                    `
                },
                { 
                    title: "2. المستوي في الفضاء", 
                    content: `
                    <h3 style="color:#818cf8;">المستوي في الفضاء - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تعريف المستوي:</h4>
                    <p>المستوي في الفضاء يمكن تعريفه بعدة طرق:</p>
                    <p>1. بثلاث نقط غير مستقيمية</p>
                    <p>2. بنقطة ومتجهتين غير متوازيتين</p>
                    <p>3. بنقطة ومتجهة عمودية (المتجهة العادية)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المعادلة الديكارتية للمستوي:</h4>
                    <p>كل مستوي في الفضاء يمكن تمثيله بمعادلة من الشكل:</p>
                    <p>ax + by + cz + d = 0 حيث (a,b,c) ≠ (0,0,0)</p>
                    <p>المتجهة n→(a, b, c) تسمى <strong>المتجهة العادية</strong> للمستوي</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>إيجاد معادلة مستوي بثلاث نقط:</h4>
                    <p>لتكن A(x₁,y₁,z₁)، B(x₂,y₂,z₂)، C(x₃,y₃,z₃) ثلاث نقط غير مستقيمية</p>
                    <p><strong>الطريقة:</strong></p>
                    <p>1. نكون المتجهتين AB→ و AC→</p>
                    <p>2. المتجهة العادية n→ = AB→ ∧ AC→ (جداء متجهي)</p>
                    <p>3. معادلة المستوي: n→·AM→ = 0 حيث M(x,y,z) نقطة من المستوي</p>
                    <p>4. نعوض بإحداثيات A (أو B أو C) لإيجاد d</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال على إيجاد معادلة مستوي:</h4>
                    <p><strong>المثال:</strong> أوجد معادلة المستوي المار من النقط A(1,0,1)، B(2,1,0)، C(0,1,2)</p>
                    <p><strong>الحل:</strong></p>
                    <p>AB→(1,1,-1)، AC→(-1,1,1)</p>
                    <p>n→ = AB→ ∧ AC→ = (1×1 - (-1)×1, -1×(-1) - 1×1, 1×1 - 1×(-1))</p>
                    <p>= (1+1, 1-1, 1+1) = (2,0,2) = 2(1,0,1)</p>
                    <p>نأخذ n→(1,0,1) (بعد التبسيط)</p>
                    <p>معادلة المستوي: 1×(x-1) + 0×(y-0) + 1×(z-1) = 0</p>
                    <p>⇒ x - 1 + z - 1 = 0 ⇒ x + z - 2 = 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المستوي المار من نقطة وعمودي على مستقيم:</h4>
                    <p>إذا كان المستوي عمودياً على المستقيم D الذي متجهة توجيهه u→(a,b,c) ويمر من النقطة A(x₀,y₀,z₀)، فإن:</p>
                    <p>معادلته: a(x-x₀) + b(y-y₀) + c(z-z₀) = 0</p>
                    <p>لأن u→ تكون هي المتجهة العادية للمستوي</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الأوضاع النسبية لمستويين:</h4>
                    <p>لتكن P: ax+by+cz+d=0 و P': a'x+b'y+c'z+d'=0 مستويين</p>
                    <p><strong>1. متوازيان:</strong> إذا كانت n→ و n'→ متوازيتان</p>
                    <p>أي: (a,b,c) و (a',b',c') متناسبتان</p>
                    <p><strong>2. متقاطعان:</strong> إذا لم يكونا متوازيين، يتقاطعان في مستقيم</p>
                    <p><strong>3. متطابقان:</strong> إذا كانت (a,b,c,d) و (a',b',c',d') متناسبتان</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الزاوية بين مستويين:</h4>
                    <p>زاوية بين مستويين هي الزاوية بين متجهتيهما العاديتين</p>
                    <p>إذا كانت n→(a,b,c) و n'→(a',b',c') متجهتينا عاديتين لـ P و P'، فإن:</p>
                    <p>cos(θ) = |n→·n'→|/(||n→|| × ||n'→||)</p>
                    <p>حيث θ هي الزاوية الحادة بين المستويين</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>شرط التعامد:</h4>
                    <p>المستويان P و P' متعامدان إذا وفقط إذا كانت متجهتاهما العاديتان متعامدتان</p>
                    <p>أي: n→·n'→ = 0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الأوضاع النسبية لمستقيم ومستوي:</h4>
                    <p>لتكن D مستقيم و P مستوي</p>
                    <p><strong>1. D موازٍ لـ P:</strong> إذا كانت متجهة توجيه D متعامدة مع المتجهة العادية لـ P</p>
                    <p>أي: u→·n→ = 0 و D ليس محتواً في P</p>
                    <p><strong>2. D عمودي على P:</strong> إذا كانت متجهة توجيه D موازية للمتجهة العادية لـ P</p>
                    <p>أي: u→ و n→ متوازيتان</p>
                    <p><strong>3. D يقطع P:</strong> إذا لم يكن موازياً ولا عمودياً (يقطعه في نقطة)</p>
                    <p><strong>4. D محتوى في P:</strong> إذا كانت u→·n→ = 0 وكل نقطة من D تنتمي إلى P</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تقاطع مستقيم ومستوي:</h4>
                    <p>لإيجاد نقطة تقاطع مستقيم D مع مستوي P:</p>
                    <p>1. نكتب معادلات D الوسيطية: x=x₀+ta، y=y₀+tb، z=z₀+tc</p>
                    <p>2. نعوض في معادلة P: a(x₀+ta) + b(y₀+tb) + c(z₀+tc) + d = 0</p>
                    <p>3. نحل المعادلة الناتجة من أجل t</p>
                    <p>4. نعوض قيمة t في معادلات D للحصول على إحداثيات نقطة التقاطع</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>حزمة المستويات:</h4>
                    <p>حزمة المستويات المارة بمستقيم D هي مجموعة جميع المستويات التي تحتوي D</p>
                    <p>إذا كان D هو تقاطع المستويين: P₁: a₁x+b₁y+c₁z+d₁=0 و P₂: a₂x+b₂y+c₂z+d₂=0</p>
                    <p>فإن معادلة حزمة المستويات المارة بـ D هي:</p>
                    <p>α(a₁x+b₁y+c₁z+d₁) + β(a₂x+b₂y+c₂z+d₂) = 0 حيث (α,β) ≠ (0,0)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> أوجد معادلة المستوي المار من A(1,2,3) وعمودي على المستقيم D: x=1+t, y=2-t, z=3+2t</p>
                    <p><strong>الحل:</strong> متجهة توجيه D: u→(1,-1,2) هي المتجهة العادية للمستوي</p>
                    <p>المعادلة: 1×(x-1) + (-1)×(y-2) + 2×(z-3) = 0</p>
                    <p>⇒ x-1 -y+2 +2z-6 = 0 ⇒ x - y + 2z - 5 = 0</p>
                    
                    <p><strong>التمرين 2:</strong> بين أن المستويين P: 2x-y+3z-1=0 و P': 4x-2y+6z+5=0 متوازيان</p>
                    <p><strong>الحل:</strong> معاملات P' هي ضعف معاملات P باستثناء الحد المطلق</p>
                    <p>(4,-2,6) = 2×(2,-1,3) ⇒ المتجهتان العاديتان متوازيتان</p>
                    <p>الحد المطلق: -1 و 5 ليسا متناسبين مع 2 و 4 ⇒ المستويان متوازيان وليسا متطابقين</p>
                    
                    <p><strong>التمرين 3:</strong> أوجد نقطة تقاطع المستقيم D: x=2t, y=1-t, z=3+t مع المستوي P: x+y-z+1=0</p>
                    <p><strong>الحل:</strong> نعوض في P: (2t) + (1-t) - (3+t) + 1 = 0</p>
                    <p>2t + 1 - t - 3 - t + 1 = 0 ⇒ 0t - 1 = 0 ⇒ -1 = 0 مستحيل</p>
                    <p>إذن المستقيم موازٍ للمستوي (لا تقاطع)</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: المتجهة العادية للمستوي عمودية على كل مستقيم موجود في المستوي أو مواز له.</span>
                    `
                },
                { 
                    title: "3. حساب المسافات والحجوم", 
                    content: `
                    <h3 style="color:#818cf8;">حساب المسافات والحجوم في الفضاء - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مسافة بين نقطتين:</h4>
                    <p>مسافة بين النقطتين A(x₁,y₁,z₁) و B(x₂,y₂,z₂) هي:</p>
                    <p>AB = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]</p>
                    <p><strong>مثال:</strong> المسافة بين A(1,2,3) و B(4,6,9):</p>
                    <p>AB = √[(4-1)²+(6-2)²+(9-3)²] = √[9+16+36] = √61</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مسافة نقطة عن مستوي:</h4>
                    <p>مسافة النقطة M₀(x₀,y₀,z₀) عن المستوي P: ax+by+cz+d=0 هي:</p>
                    <p>d(M₀,P) = |ax₀+by₀+cz₀+d|/√(a²+b²+c²)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>إثبات صيغة مسافة نقطة عن مستوي:</h4>
                    <p>لتكن M₀(x₀,y₀,z₀) و P: ax+by+cz+d=0</p>
                    <p>نأخذ نقطة A من المستوي، وليكن n→(a,b,c) المتجهة العادية للمستوي</p>
                    <p>المسافة = |المسقط العمودي لـ AM₀→ على n→|</p>
                    <p>= |AM₀→·(n→/||n→||)| = |(AM₀→·n→)|/||n→||</p>
                    <p>= |a(x₀-x_A)+b(y₀-y_A)+c(z₀-z_A)|/√(a²+b²+c²)</p>
                    <p>وبما أن A ∈ P ⇒ ax_A+by_A+cz_A = -d</p>
                    <p>إذن: = |ax₀+by₀+cz₀+d|/√(a²+b²+c²)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال: مسافة نقطة عن مستوي</h4>
                    <p><strong>مثال:</strong> مسافة النقطة M(1,2,3) عن المستوي P: 2x-y+3z-4=0</p>
                    <p>d(M,P) = |2×1 - 1×2 + 3×3 - 4|/√(2²+(-1)²+3²)</p>
                    <p>= |2-2+9-4|/√(4+1+9) = |5|/√14 = 5/√14</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مسافة نقطة عن مستقيم:</h4>
                    <p>مسافة النقطة M عن المستقيم D المار من A وموجه بـ u→ هي:</p>
                    <p>d(M,D) = ||AM→ ∧ u→||/||u→||</p>
                    <p>حيث ∧ ترمز للجداء المتجهي</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الجداء المتجهي (لحساب المسافة):</h4>
                    <p>الجداء المتجهي لـ u→(x,y,z) و v→(x',y',z') هو المتجهة:</p>
                    <p>u→ ∧ v→ = (yz' - zy', zx' - xz', xy' - yx')</p>
                    <p>طول هذه المتجهة = ||u→|| × ||v→|| × |sin(θ)| حيث θ زاوية بين u→ و v→</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مسافة بين مستقيمين متخالفين:</h4>
                    <p>مسافة بين المستقيمين المتخالفين D و D' المارين من A و A' والموجهين بـ u→ و u'→ هي:</p>
                    <p>d(D,D') = |(AA'→)·(u→ ∧ u'→)|/||u→ ∧ u'→||</p>
                    <p>حيث · هو الجداء السلمي و ∧ هو الجداء المتجهي</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المسافة بين مستويين متوازيين:</h4>
                    <p>مسافة بين المستويين المتوازيين P: ax+by+cz+d=0 و P': ax+by+cz+d'=0 هي:</p>
                    <p>d(P,P') = |d'-d|/√(a²+b²+c²)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الكرة في الفضاء:</h4>
                    <p>الكرة مركزها Ω(x₀,y₀,z₀) ونصف قطرها R هي مجموعة النقط M(x,y,z) التي تحقق:</p>
                    <p>(x-x₀)² + (y-y₀)² + (z-z₀)² = R²</p>
                    <p><strong>المعادلة العامة:</strong> x²+y²+z²+αx+βy+γz+δ=0 بشرط α²+β²+γ²-4δ>0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تقاطع كرة ومستوي:</h4>
                    <p>لتكن الكرة S: (x-a)²+(y-b)²+(z-c)²=R² والمستوي P: αx+βy+γz+δ=0</p>
                    <p><strong>1. المستوي يقطع الكرة:</strong> إذا كانت مسافة المركز عن المستوي < R</p>
                    <p>التقاطع دائرة</p>
                    <p><strong>2. المستوي ماس للكرة:</strong> إذا كانت المسافة = R</p>
                    <p>التقاطع نقطة واحدة</p>
                    <p><strong>3. المستوي لا يقطع الكرة:</strong> إذا كانت المسافة > R</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>حجوم المجسمات:</h4>
                    <p><strong>1. متوازي المستطيلات:</strong> الحجم = الطول × العرض × الارتفاع</p>
                    <p><strong>2. متوازي السطوح:</strong> الحجم = |(u→ ∧ v→)·w→| حيث u→, v→, w→ متجهات حواف من رأس واحد</p>
                    <p><strong>3. الهرم:</strong> الحجم = (1/3) × مساحة القاعدة × الارتفاع</p>
                    <p><strong>4. الأسطوانة:</strong> الحجم = مساحة القاعدة × الارتفاع = πr²h</p>
                    <p><strong>5. المخروط:</strong> الحجم = (1/3)πr²h</p>
                    <p><strong>6. الكرة:</strong> الحجم = (4/3)πR³</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال: حجم متوازي السطوح</h4>
                    <p><strong>مثال:</strong> احجم متوازي السطوح المحدد بالمتجهات u→(1,0,0)، v→(0,2,0)، w→(0,0,3)</p>
                    <p><strong>الحل:</strong> u→ ∧ v→ = (0,0,2)</p>
                    <p>(u→ ∧ v→)·w→ = (0,0,2)·(0,0,3) = 6</p>
                    <p>الحجم = |6| = 6</p>
                    <p>(وهذا صحيح لأن هذا متوازي مستطيلات أبعاده 1، 2، 3 ⇒ الحجم = 1×2×3=6)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مساحة سطح الكرة:</h4>
                    <p>مساحة سطح الكرة = 4πR²</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> احسب مسافة النقطة M(1,2,3) عن المستوي P: 3x-4y+5z-10=0</p>
                    <p><strong>الحل:</strong> d = |3×1 -4×2 +5×3 -10|/√(9+16+25)</p>
                    <p>= |3-8+15-10|/√50 = |0|/√50 = 0</p>
                    <p>إذن M ∈ P</p>
                    
                    <p><strong>التمرين 2:</strong> أوجد مسافة المستقيم D: x=1+t, y=2-t, z=3+2t عن النقطة A(0,0,0)</p>
                    <p><strong>الحل:</strong> نأخذ نقطة من D: عندما t=0 ⇒ B(1,2,3)</p>
                    <p>متجهة التوجيه: u→(1,-1,2)</p>
                    <p>AB→(1,2,3)</p>
                    <p>AB→ ∧ u→ = (2×2 - 3×(-1), 3×1 - 1×2, 1×(-1) - 2×1) = (4+3, 3-2, -1-2) = (7,1,-3)</p>
                    <p>||AB→ ∧ u→|| = √(49+1+9) = √59</p>
                    <p>||u→|| = √(1+1+4) = √6</p>
                    <p>d = √59/√6 = √(59/6)</p>
                    
                    <p><strong>التمرين 3:</strong> كرة مركزها Ω(1,2,3) وتمر من النقطة A(4,6,9)، أحسب نصف قطرها</p>
                    <p><strong>الحل:</strong> R = ΩA = √[(4-1)²+(6-2)²+(9-3)²] = √[9+16+36] = √61</p>
                    
                    <p><strong>التمرين 4:</strong> احسب حجم الكرة التي معادلتها: x²+y²+z²-2x+4y-6z-11=0</p>
                    <p><strong>الحل:</strong> نكمل المربعات: (x²-2x)+(y²+4y)+(z²-6z)=11</p>
                    <p>(x-1)²-1 + (y+2)²-4 + (z-3)²-9 = 11</p>
                    <p>(x-1)²+(y+2)²+(z-3)² = 25 ⇒ R=5</p>
                    <p>حجم الكرة = (4/3)π×5³ = (4/3)π×125 = 500π/3</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: مسافة نقطة عن مستوي تحسب بالقيمة المطلقة للتعبير، فالنتيجة دائماً موجبة أو صفر.</span>
                    `
                },
                { 
                    header: true, 
                    title: "المحور الثامن: الاحتمالات" 
                },
                { 
                    title: "1. التحليل التوفيقي (العد)", 
                    content: `
                    <h3 style="color:#818cf8;">التحليل التوفيقي (علم العد) - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مقدمة: لماذا التحليل التوفيقي؟</h4>
                    <p>التحليل التوفيقي هو فرع من الرياضيات يهتم بعد الطرق الممكنة لترتيب أو اختيار عناصر من مجموعة</p>
                    <p>يستخدم في حساب الاحتمالات، الإحصاء، وعلوم الحاسوب</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مبدأ الجمع:</h4>
                    <p>إذا كان بإمكاننا اختيار عنصر بطريقتين لا يمكن حدوثهما معاً:</p>
                    <p>1. الطريقة A: m طريقة</p>
                    <p>2. الطريقة B: n طريقة</p>
                    <p>فإن عدد الطرق الإجمالي = m + n</p>
                    <p><strong>مثال:</strong> إذا كان لدينا 3 كتب رياضيات و 4 كتب فيزياء، فإن عدد الطرق لاختيار كتاب واحد = 3+4=7</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مبدأ الضرب:</h4>
                    <p>إذا كان علينا اتخاذ قرارين متتاليين:</p>
                    <p>1. القرار الأول: m طريقة</p>
                    <p>2. القرار الثاني: n طريقة (بغض النظر عن القرار الأول)</p>
                    <p>فإن عدد الطرق الإجمالي = m × n</p>
                    <p><strong>مثال:</strong> إذا كان لدينا 3 قمصان و 4 بناطيل، فإن عدد الأزياء الممكنة = 3×4=12</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الترتيبات (التباديل بدون تكرار):</h4>
                    <p>عدد طرق ترتيب k عنصر مختلف مختارة من n عنصر (مع مراعاة الترتيب وبدون تكرار) هو:</p>
                    <p>Aₙᵏ = n × (n-1) × (n-2) × ... × (n-k+1) = n!/(n-k)!</p>
                    <p><strong>شروط:</strong> 0 ≤ k ≤ n</p>
                    <p><strong>مثال:</strong> عدد طرق اختيار رئيس ونائب رئيس من 5 أشخاص:</p>
                    <p>A₅² = 5 × 4 = 20</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التباديل (Permutations):</h4>
                    <p>عدد طرق ترتيب n عنصر مختلف (جميع العناصر):</p>
                    <p>Pₙ = n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1</p>
                    <p><strong>تعريف:</strong> 0! = 1، 1! = 1</p>
                    <p><strong>مثال:</strong> عدد طرق ترتيب 4 كتب على رف:</p>
                    <p>4! = 4×3×2×1 = 24</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التوفيقات (التركيبات):</h4>
                    <p>عدد طرق اختيار k عنصر من n عنصر (دون مراعاة الترتيب وبدون تكرار) هو:</p>
                    <p>Cₙᵏ = Aₙᵏ/k! = n!/[k!(n-k)!]</p>
                    <p>وتقرأ "n فوق k" أو "تركيبات n من k"</p>
                    <p><strong>شروط:</strong> 0 ≤ k ≤ n</p>
                    <p><strong>مثال:</strong> عدد طرق اختيار فريق من 3 أشخاص من مجموعة من 5:</p>
                    <p>C₅³ = 5!/(3!2!) = (5×4×3×2×1)/(3×2×1×2×1) = 120/(6×2) = 120/12 = 10</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>خصائص التوفيقات:</h4>
                    <p>1. <strong>تماثل:</strong> Cₙᵏ = Cₙⁿ⁻ᵏ</p>
                    <p>2. <strong>علاقة باسكال:</strong> Cₙᵏ = Cₙ₋₁ᵏ + Cₙ₋₁ᵏ⁻¹</p>
                    <p>3. <strong>مجموع:</strong> Cₙ⁰ + Cₙ¹ + Cₙ² + ... + Cₙⁿ = 2ⁿ</p>
                    <p>4. <strong>قاعدة: </strong>Cₙ⁰ = Cₙⁿ = 1، Cₙ¹ = Cₙⁿ⁻¹ = n</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثلث باسكال:</h4>
                    <p>نموذج هندسي لمعاملات ذات الحدين:</p>
                    <pre style="color:white; text-align:center">
                    1          n=0
                   1 1         n=1
                  1 2 1        n=2
                 1 3 3 1       n=3
                1 4 6 4 1      n=4
               1 5 10 10 5 1   n=5
                    </pre>
                    <p>كل عدد هو مجموع العددين الموجودين فوقه</p>
                    <p>الصف n يعطينا Cₙ⁰, Cₙ¹, ..., Cₙⁿ</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الترتيبات مع التكرار:</h4>
                    <p>عدد طرق ترتيب n عنصر بينهم تكرارات:</p>
                    <p>إذا كان لدينا n عنصر، منهم:</p>
                    <p>n₁ من النوع الأول، n₂ من النوع الثاني، ...، nₖ من النوع الأخير (حيث n₁+n₂+...+nₖ = n)</p>
                    <p>فإن عدد الترتيبات = n!/(n₁! × n₂! × ... × nₖ!)</p>
                    <p><strong>مثال:</strong> عدد الكلمات التي يمكن تشكيلها من حروف كلمة "MAMA":</p>
                    <p>عدد الحروف = 4، M تكرر مرتين، A تكرر مرتين</p>
                    <p>عدد الترتيبات = 4!/(2!×2!) = 24/(2×2) = 24/4 = 6</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التوفيقات مع التكرار:</h4>
                    <p>عدد طرق اختيار k عنصر من n نوع مع السماح بالتكرار هو:</p>
                    <p>Cₙ₊ₖ₋₁ᵏ = Cₙ₊ₖ₋₁ⁿ⁻¹</p>
                    <p><strong>مثال:</strong> في متجر به 3 أنواع من الحلوى، نريد شراء 5 قطع</p>
                    <p>عدد الطرق = C₃₊₅₋₁⁵ = C₇⁵ = C₇² = 7!/(5!2!) = (7×6)/2 = 21</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> في فصل به 10 طلاب، كم عدد الطرق لاختيار رئيس ونائب رئيس وأمين سر؟</p>
                    <p><strong>الحل:</strong> A₁₀³ = 10×9×8 = 720</p>
                    
                    <p><strong>التمرين 2:</strong> كم عدد الأقطار في مضلع ذي n ضلعاً؟</p>
                    <p><strong>الحل:</strong> عدد القطع المستقيمة بين الرؤوس = Cₙ² = n(n-1)/2</p>
                    <p>نطرح عدد الأضلاع n ⇒ عدد الأقطار = n(n-1)/2 - n = n(n-3)/2</p>
                    
                    <p><strong>التمرين 3:</strong> كم عدد الكلمات المكونة من 5 حروف يمكن تكوينها من حروف كلمة "MATHS"؟</p>
                    <p><strong>الحل:</strong> جميع الحروف مختلفة ⇒ عدد الكلمات = 5! = 120</p>
                    
                    <p><strong>التمرين 4:</strong> احسب C₈³، C₈⁵، وتحقق من خاصية التماثل</p>
                    <p><strong>الحل:</strong> C₈³ = 8!/(3!5!) = (8×7×6)/(3×2×1) = 56</p>
                    <p>C₈⁵ = 8!/(5!3!) = نفس الحساب = 56 ✓</p>
                    
                    <p><strong>التمرين 5:</strong> كم عدد الطرق لتوزيع 5 كتب مختلفة على 3 طلاب؟</p>
                    <p><strong>الحل:</strong> كل كتاب يمكن إعطاؤه لأي من الطلاب الثلاثة ⇒ 3⁵ = 243 طريقة</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: الفرق بين الترتيبات والتوفيقات هو في مراعاة الترتيب: الترتيبات تهتم بالترتيب، التوفيقات لا تهتم.</span>
                    `
                },
                { 
                    title: "2. حساب الاحتمالات", 
                    content: `
                    <h3 style="color:#818cf8;">حساب الاحتمالات - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مقدمة: ما هو الاحتمال؟</h4>
                    <p>الاحتمال هو قياس إمكانية وقوع حدث ما، ويتراوح بين 0 (استحالة) و 1 (يقين)</p>
                    <p>نشأ علم الاحتمالات من ألعاب الحظ في القرن السابع عشر</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التجربة العشوائية:</h4>
                    <p>هي تجربة يمكن تكرارها تحت نفس الظروف، ولا يمكن التنبؤ بنتيجتها مقدماً</p>
                    <p><strong>مثال:</strong> رمي حجر النرد، سحب كرة من صندوق، إلخ</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>فضاء العينات (Ω):</h4>
                    <p>هو مجموعة جميع النتائج الممكنة للتجربة</p>
                    <p><strong>مثال:</strong> عند رمي حجر نرد: Ω = {1, 2, 3, 4, 5, 6}</p>
                    <p>عند رمي قطعة نقد: Ω = {صورة, كتابة} أو {P, F}</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الحدث (Event):</h4>
                    <p>هو جزء من فضاء العينات (مجموعة جزئية من Ω)</p>
                    <p><strong>أنواع الأحداث:</strong></p>
                    <p>1. <strong>الحدث المستحيل:</strong> ∅ (المجموعة الخالية)</p>
                    <p>2. <strong>الحدث الأكيد:</strong> Ω</p>
                    <p>3. <strong>الحدث البسيط:</strong> حدث يحتوي على نتيجة واحدة فقط</p>
                    <p>4. <strong>الحدث المركب:</strong> حدث يحتوي على أكثر من نتيجة</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>العمليات على الأحداث:</h4>
                    <p>لتكن A و B حدثين في Ω</p>
                    <p>1. <strong>الاتحاد:</strong> A ∪ B = حدث وقوع A أو B أو كليهما</p>
                    <p>2. <strong>التقاطع:</strong> A ∩ B = حدث وقوع A و B معاً</p>
                    <p>3. <strong>المتمم:</strong> Ā أو Aᶜ = حدث عدم وقوع A</p>
                    <p>4. <strong>الفرق:</strong> A - B = حدث وقوع A دون وقوع B</p>
                    <p>5. <strong>الأحداث المتنافية:</strong> A ∩ B = ∅ (لا يمكن وقوعهما معاً)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تعريف لابلاس للاحتمال:</h4>
                    <p>إذا كانت جميع نتائج التجربة متساوية الاحتمال (محتملة بنفس الدرجة)، فإن:</p>
                    <p>P(A) = عدد الحالات الملائمة لـ A / عدد الحالات الممكنة = |A|/|Ω|</p>
                    <p><strong>شروط:</strong> فضاء Ω منتهي، جميع النتائج متساوية الاحتمال</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>خواص الاحتمال:</h4>
                    <p>1. <strong>0 ≤ P(A) ≤ 1</strong> لكل حدث A</p>
                    <p>2. <strong>P(Ω) = 1</strong></p>
                    <p>3. <strong>P(∅) = 0</strong></p>
                    <p>4. <strong>إذا كانت A ⊂ B فإن P(A) ≤ P(B)</strong></p>
                    <p>5. <strong>P(Ā) = 1 - P(A)</strong></p>
                    <p>6. <strong>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</strong></p>
                    <p>7. <strong>إذا كانت A و B متنافيتين: P(A ∪ B) = P(A) + P(B)</strong></p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أمثلة على حساب الاحتمالات:</h4>
                    <p><strong>مثال 1:</strong> احتمال الحصول على عدد زوجي عند رمي حجر نرد</p>
                    <p>A = {2, 4, 6} ⇒ |A| = 3</p>
                    <p>Ω = {1,2,3,4,5,6} ⇒ |Ω| = 6</p>
                    <p>P(A) = 3/6 = 1/2</p>
                    
                    <p><strong>مثال 2:</strong> سحب كرتين من صندوق به 3 كرات حمراء و 2 كرات زرقاء (بدون إرجاع)</p>
                    <p>احتمال سحب كرتين حمراوين</p>
                    <p>عدد الحالات الممكنة: C₅² = 10</p>
                    <p>عدد الحالات الملائمة: C₃² = 3</p>
                    <p>P = 3/10 = 0.3</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الاحتمال الشرطي:</h4>
                    <p>احتمال وقوع A بشرط وقوع B (حيث P(B) > 0) هو:</p>
                    <p>P(A|B) = P(A ∩ B)/P(B)</p>
                    <p><strong>تفسير:</strong> نقتصر على فضاء العينات المحدود بـ B</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال على الاحتمال الشرطي:</h4>
                    <p><strong>مثال:</strong> عند رمي حجر نرد، إذا علمنا أن العدد الظاهر أكبر من 3، فما احتمال أن يكون زوجياً؟</p>
                    <p>B = {4,5,6}، A = {2,4,6}</p>
                    <p>A ∩ B = {4,6}</p>
                    <p>P(A|B) = P(A ∩ B)/P(B) = (2/6)/(3/6) = 2/3</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مبرهنة الضرب:</h4>
                    <p>احتمال وقوع حدثين A و B معاً:</p>
                    <p>P(A ∩ B) = P(A) × P(B|A) = P(B) × P(A|B)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الأحداث المستقلة:</h4>
                    <p>الحدثان A و B مستقلان إذا كان وقوع أحدهما لا يؤثر على احتمال وقوع الآخر</p>
                    <p>الشروط المكافئة للاستقلال:</p>
                    <p>1. P(A ∩ B) = P(A) × P(B)</p>
                    <p>2. P(A|B) = P(A) (إذا كان P(B) > 0)</p>
                    <p>3. P(B|A) = P(B) (إذا كان P(A) > 0)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مبرهنة الاحتمال الكلي:</h4>
                    <p>إذا كانت B₁, B₂, ..., Bₙ تشكل تجزيئاً لـ Ω (أي: Bᵢ ∩ Bⱼ = ∅ و ∪Bᵢ = Ω)، فإن:</p>
                    <p>لأي حدث A: P(A) = Σᵢ P(Bᵢ) × P(A|Bᵢ)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مبرهنة بايز:</h4>
                    <p>إذا كانت B₁, B₂, ..., Bₙ تشكل تجزيئاً لـ Ω، فإن:</p>
                    <p>P(Bᵢ|A) = [P(Bᵢ) × P(A|Bᵢ)] / [Σⱼ P(Bⱼ) × P(A|Bⱼ)]</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> عند رمي حجر نرد، ما احتمال الحصول على عدد أولي؟</p>
                    <p><strong>الحل:</strong> الأعداد الأولية ≤ 6: 2,3,5 ⇒ P = 3/6 = 1/2</p>
                    
                    <p><strong>التمرين 2:</strong> صندوق يحتوي على 5 كرات حمراء و 3 كرات زرقاء، نسحب كرتين (بدون إرجاع). ما احتمال أن تكون الكرتان من نفس اللون؟</p>
                    <p><strong>الحل:</strong> P(حمراوين) = (5/8)×(4/7) = 20/56 = 5/14</p>
                    <p>P(زرقاوين) = (3/8)×(2/7) = 6/56 = 3/28</p>
                    <p>P(نفس اللون) = 5/14 + 3/28 = 10/28 + 3/28 = 13/28</p>
                    
                    <p><strong>التمرين 3:</strong> رمي قطعتين نقد، ما احتمال ظهور صورة على الأقل في واحدة منهما؟</p>
                    <p><strong>الحل:</strong> Ω = {(P,P), (P,F), (F,P), (F,F)} حيث P=صورة، F=كتابة</p>
                    <p>A = ظهور صورة على الأقل مرة = {(P,P), (P,F), (F,P)} ⇒ |A|=3، |Ω|=4</p>
                    <p>P(A) = 3/4</p>
                    
                    <p><strong>التمرين 4:</strong> مصنع به 3 آلات: A تنتج 50% من الإنتاج، B تنتج 30%، C تنتج 20%</p>
                    <p>نسبة المنتجات المعيبة: من A 2%، من B 3%، من C 5%</p>
                    <p>إذا اخترنا منتجاً عشوائياً، ما احتمال أن يكون معيباً؟</p>
                    <p><strong>الحل:</strong> P(معيب) = P(A)×P(معيب|A) + P(B)×P(معيب|B) + P(C)×P(معيب|C)</p>
                    <p>= 0.5×0.02 + 0.3×0.03 + 0.2×0.05 = 0.01 + 0.009 + 0.01 = 0.029 = 2.9%</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: عند حساب الاحتمال، تأكد من أن فضاء العينات متساوي الاحتمالات قبل تطبيق قاعدة لابلاس.</span>
                    `
                },
                { 
                    title: "3. المتغير العشوائي", 
                    content: `
                    <h3 style="color:#818cf8;">المتغير العشوائي - شرح مفصل جداً</h3>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تعريف المتغير العشوائي:</h4>
                    <p>متغير عشوائي X هو دالة تحول كل نتيجة في فضاء العينات Ω إلى عدد حقيقي</p>
                    <p>X: Ω → ℝ</p>
                    <p><strong>مثال:</strong> عند رمي قطعتين نقد، عدد الصور الظاهرة متغير عشوائي</p>
                    <p>Ω = {(P,P), (P,F), (F,P), (F,F)}، X = عدد الصور</p>
                    <p>X(P,P)=2، X(P,F)=1، X(F,P)=1، X(F,F)=0</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>أنواع المتغيرات العشوائية:</h4>
                    <p>1. <strong>متغير عشوائي منفصل:</strong> يأخذ قيماً منتهية أو قابلة للعد</p>
                    <p>2. <strong>متغير عشوائي متصل:</strong> يأخذ جميع القيم في فترة من ℝ</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>قانون الاحتمال (للمتغير المنفصل):</h4>
                    <p>نعطي لكل قيمة xᵢ للمتغير X احتمالها pᵢ = P(X = xᵢ)</p>
                    <p>الشروط: 0 ≤ pᵢ ≤ 1 و Σ pᵢ = 1</p>
                    <p>يقدم عادة في جدول:</p>
                    <table style="width:50%; border-collapse:collapse; color:white; margin:10px auto">
                    <tr style="background:#3f3f46"><th>xᵢ</th><th>x₁</th><th>x₂</th><th>...</th><th>xₙ</th></tr>
                    <tr><td>P(X=xᵢ)</td><td>p₁</td><td>p₂</td><td>...</td><td>pₙ</td></tr>
                    </table>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>دالة التوزيع التراكمي:</h4>
                    <p>F(x) = P(X ≤ x) لكل x ∈ ℝ</p>
                    <p><strong>خصائص:</strong></p>
                    <p>1. 0 ≤ F(x) ≤ 1</p>
                    <p>2. F غير تناقصية</p>
                    <p>3. lim F(x) = 0 عندما x → -∞</p>
                    <p>4. lim F(x) = 1 عندما x → +∞</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الأمل الرياضياتي (القيمة المتوقعة):</h4>
                    <p>للمتغير العشوائي المنفصل X:</p>
                    <p>E(X) = Σ xᵢ × P(X = xᵢ) = Σ xᵢ × pᵢ</p>
                    <p><strong>تفسير:</strong> متوسط القيم التي يأخذها X على المدى الطويل</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>خصائص الأمل الرياضياتي:</h4>
                    <p>1. <strong>خطي:</strong> E(aX + b) = aE(X) + b حيث a,b ثوابت</p>
                    <p>2. <strong>مجموع:</strong> E(X + Y) = E(X) + E(Y) (حتى لو لم يكونا مستقلين)</p>
                    <p>3. <strong>ضرب:</strong> إذا كان X و Y مستقلين: E(XY) = E(X) × E(Y)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التباين:</h4>
                    <p>V(X) = E[(X - E(X))²] = E(X²) - [E(X)]²</p>
                    <p><strong>تفسير:</strong> قياس تشتت القيم حول المتوسط</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>الانحراف المعياري:</h4>
                    <p>σ(X) = √V(X)</p>
                    <p>له نفس وحدة القياس الأصلية</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>خصائص التباين:</h4>
                    <p>1. V(X) ≥ 0</p>
                    <p>2. V(aX + b) = a²V(X) حيث a,b ثوابت</p>
                    <p>3. إذا كان X و Y مستقلين: V(X + Y) = V(X) + V(Y)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>التوزيعات الاحتمالية المشهورة:</h4>
                    <p><strong>1. التوزيع المنتظم المنفصل:</strong></p>
                    <p>X يأخذ القيم x₁, x₂, ..., xₙ باحتمالات متساوية: pᵢ = 1/n</p>
                    <p>E(X) = (Σ xᵢ)/n، V(X) = (Σ xᵢ²)/n - [E(X)]²</p>
                    
                    <p><strong>2. توزيع برنولي:</strong></p>
                    <p>تجربة لها نتيجتان: نجاح (احتماله p) أو فشل (احتماله q=1-p)</p>
                    <p>X = 1 إذا نجاح، X = 0 إذا فشل</p>
                    <p>E(X) = p، V(X) = p(1-p)</p>
                    
                    <p><strong>3. التوزيع ذو الحدين:</strong></p>
                    <p>تكرار تجربة برنولي n مرة بشكل مستقل</p>
                    <p>X = عدد مرات النجاح في n محاولة</p>
                    <p>P(X=k) = Cₙᵏ pᵏ (1-p)ⁿ⁻ᵏ، k=0,1,...,n</p>
                    <p>E(X) = np، V(X) = np(1-p)</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>مثال شامل:</h4>
                    <p>متغير عشوائي X يمثل عدد الصور عند رمي 3 قطع نقد</p>
                    <p><strong>1. نجد قانون الاحتمال:</strong></p>
                    <p>Ω = {PPP, PPF, PFP, FPP, PFF, FPF, FFP, FFF}</p>
                    <p>X: 3 (PPP)، 2 (PPF, PFP, FPP)، 1 (PFF, FPF, FFP)، 0 (FFF)</p>
                    <p>P(X=0) = 1/8، P(X=1) = 3/8، P(X=2) = 3/8، P(X=3) = 1/8</p>
                    <p><strong>2. نجد الأمل الرياضي:</strong></p>
                    <p>E(X) = 0×(1/8) + 1×(3/8) + 2×(3/8) + 3×(1/8) = (0+3+6+3)/8 = 12/8 = 1.5</p>
                    <p><strong>3. نجد التباين:</strong></p>
                    <p>E(X²) = 0²×(1/8)+1²×(3/8)+2²×(3/8)+3²×(1/8) = (0+3+12+9)/8 = 24/8 = 3</p>
                    <p>V(X) = E(X²) - [E(X)]² = 3 - (1.5)² = 3 - 2.25 = 0.75</p>
                    <p><strong>4. الانحراف المعياري:</strong> σ = √0.75 ≈ 0.866</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>المتغيرات العشوائية المستمرة (لمحة):</h4>
                    <p>للمتغير المستمر، نستخدم دالة الكثافة f(x) حيث:</p>
                    <p>1. f(x) ≥ 0 لكل x</p>
                    <p>2. ∫[-∞→∞] f(x)dx = 1</p>
                    <p>3. P(a ≤ X ≤ b) = ∫[a→b] f(x)dx</p>
                    <p><strong>مثال:</strong> التوزيع الطبيعي والمتساوي</p>
                    </div>
                    
                    <div style="border:1px solid #444; background:#18181b; padding:15px; border-radius:10px; margin:10px 0;">
                    <h4>تمارين شاملة مع الحلول:</h4>
                    <p><strong>التمرين 1:</strong> X عدد مرات ظهور الصورة عند رمي 4 قطع نقد</p>
                    <p>أوجد قانون الاحتمال، E(X)، V(X)</p>
                    <p><strong>الحل:</strong> X ~ B(4, 0.5) (توزيع ذو حدين)</p>
                    <p>P(X=k) = C₄ᵏ (0.5)ᵏ (0.5)⁴⁻ᵏ = C₄ᵏ (0.5)⁴ = C₄ᵏ/16</p>
                    <p>لـ k=0: C₄⁰/16=1/16، k=1: C₄¹/16=4/16=1/4، k=2: C₄²/16=6/16=3/8،</p>
                    <p>k=3: C₄³/16=4/16=1/4، k=4: C₄⁴/16=1/16</p>
                    <p>E(X) = np = 4×0.5 = 2</p>
                    <p>V(X) = np(1-p) = 4×0.5×0.5 = 1</p>
                    
                    <p><strong>التمرين 2:</strong> متغير عشوائي X له القانون:</p>
                    <p>P(X=1)=0.2، P(X=2)=0.3، P(X=3)=0.5</p>
                    <p>احسب E(X)، V(X)</p>
                    <p><strong>الحل:</strong> E(X) = 1×0.2 + 2×0.3 + 3×0.5 = 0.2+0.6+1.5 = 2.3</p>
                    <p>E(X²) = 1²×0.2 + 2²×0.3 + 3²×0.5 = 0.2+1.2+4.5 = 5.9</p>
                    <p>V(X) = 5.9 - (2.3)² = 5.9 - 5.29 = 0.61</p>
                    
                    <p><strong>التمرين 3:</strong> صندوق به 6 كرات: 2 حمراء، 3 زرقاء، 1 خضراء</p>
                    <p>نسحب 3 كرات بدون إرجاع، ليكن X عدد الكرات الحمراء المسحوبة</p>
                    <p>أوجد قانون الاحتمال لـ X</p>
                    <p><strong>الحل:</strong> Ω = اختيار 3 كرات من 6: |Ω| = C₆³ = 20</p>
                    <p>P(X=0) = اختيار 0 حمراء و 3 من الـ 4 الأخرى = C₂⁰×C₄³/C₆³ = 1×4/20 = 4/20 = 1/5</p>
                    <p>P(X=1) = C₂¹×C₄²/C₆³ = 2×6/20 = 12/20 = 3/5</p>
                    <p>P(X=2) = C₂²×C₄¹/C₆³ = 1×4/20 = 4/20 = 1/5</p>
                    <p>تحقق: 1/5+3/5+1/5=1 ✓</p>
                    </div>
                    
                    <span style="color:#ef4444">ملاحظة هامة: الأمل الرياضي هو متوسط القيم المتوقعة، التباين هو قياس تشتتها حول هذا المتوسط.</span>
                    `
                }
            ]
        }
    },
    physics: {
        title: "العلوم الفيزيائية (الفيزياء والكيمياء) - السنة الثالثة ثانوي",
        trimesters: {
            1: [
                {
                    header: true,
                    title: "الفصل الأول - الوحدة 1: المتابعة الزمنية لتحول كيميائي"
                },
                {
                    title: "1. مفهوم الأكسدة والإرجاع (أولاً: لفهم السرعات)",
                    content: `
                        <h3 style="color:#22d3ee">التمهيد البطيء جداً لمفهوم الأكسدة والإرجاع</h3>
                        <p>قبل أن نتحدث عن سرعة التفاعل، يجب أن نفهم أي نوع من التفاعل ندرس. في منهج السنة الثالثة ثانوي، نحن ندرس فقط التفاعلات الكيميائية التي تكون من نوع <strong>أكسدة-إرجاع</strong>. لماذا؟ لأنها تفاعلات يمكن تتبعها زمنياً بسهولة نسبية.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:10px; border-radius:8px; margin:10px 0;">
                            <strong>التعريف البيداغوجي الطويل للأكسدة والإرجاع:</strong><br>
                            1. <strong>الأكسدة</strong>: هي عملية <strong>فقدان الإلكترونات</strong> من قبل نوع كيميائي.<br>
                            2. <strong>الإرجاع</strong>: هي عملية <strong>اكتساب الإلكترونات</strong> من قبل نوع كيميائي.<br>
                            3. <strong>المؤكسد</strong>: هو النوع الكيميائي الذي <strong>يكتسب الإلكترونات</strong> وبالتالي <strong>يتُرجع</strong>.<br>
                            4. <strong>المرجع</strong>: هو النوع الكيميائي الذي <strong>يفقد الإلكترونات</strong> وبالتالي <strong>يتأكسد</strong>.<br>
                            <em>تذكر: المؤكسد يتُرجع، والمرجع يتأكسد. هذه جملة يجب حفظها كما هي.</em>
                        </div>
                        
                        <h4 style="color:#34d399">مثال تطبيقي بطيء جداً:</h4>
                        <p>لنأخذ التفاعل بين الزنك وأيونات النحاس الثنائي:</p>
                        <p>Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu</p>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:10px; border-radius:8px; margin:10px 0;">
                            <strong>التحليل خطوة بخطوة:</strong><br>
                            1. نكتب معادلات النصفية لكل نوع:<br>
                            &nbsp;&nbsp;• Zn → Zn<sup>2+</sup> + 2e<sup>-</sup> (فقد إلكترونين ← تأكسد ← الزنك هو المرجع)<br>
                            &nbsp;&nbsp;• Cu<sup>2+</sup> + 2e<sup>-</sup> → Cu (اكتسب إلكترونين ← إرجاع ← أيون النحاس هو المؤكسد)<br>
                            2. نلاحظ أن الإلكترونات المفقودة من الزنك تكتسبها أيونات النحاس.<br>
                            3. هذا يعني أن التفاعل يحدث بسرعة معينة. السؤال: ما هي هذه السرعة؟
                        </div>
                        
                        <h3 style="color:#22d3ee">مفهوم سرعة التفاعل الكيميائي (ليس كسرعة السيارة)</h3>
                        <p>سرعة التفاعل في الكيمياء لا تقاس بالكيلومتر في الساعة، بل تقاس بكمية المادة المتفاعلة أو الناتجة في وحدة الزمن. هناك تعريفان رئيسيان:</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:10px; border-radius:8px; margin:10px 0;">
                            <strong>التعريف 1: السرعة الحجمية المتوسطة (للفهم الأولي)</strong><br>
                            v<sub>moy</sub> = (1/V) × (Δx/Δt)<br>
                            حيث:<br>
                            • V: حجم المحلول (باللتر)<br>
                            • Δx: تغير تقدم التفاعل (بالمول)<br>
                            • Δt: الفترة الزمنية (بالثانية)<br>
                            • الوحدة: mol.L<sup>-1</sup>.s<sup>-1</sup><br><br>
                            
                            <strong>التعريف 2: السرعة الحجمية اللحظية (الأدق)</strong><br>
                            v(t) = (1/V) × (dx/dt)<br>
                            حيث dx/dt هو معدل تغير التقدم بمرور الزمن (مشتقة التقدم بالنسبة للزمن).
                        </div>
                        
                        <h4 style="color:#34d399">شرح المشتقة بطريقة بسيطة:</h4>
                        <p>إذا كان لدينا منحنى x = f(t) (التقدم بدلالة الزمن)، فإن السرعة اللحظية عند لحظة معينة تساوي ميل المماس للمنحنى عند تلك النقطة. هذا كل ما يجب أن تعرفه الآن عن المشتقة في هذا السياق.</p>
                        
                        <h3 style="color:#22d3ee">طرق تتبع التقدم الزمني للتفاعل</h3>
                        <p>كيف نعرف قيمة x في كل لحظة t؟ هناك عدة طرق:</p>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>1. الطريقة المعايرة اللونية (لتفاعلات تغير اللون):</strong><br>
                            <u>مثال: تفاعل أيونات البرمنغنات مع الأوكزاليك</u><br>
                            2MnO<sub>4</sub><sup>-</sup> + 5H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> + 6H<sup>+</sup> → 2Mn<sup>2+</sup> + 10CO<sub>2</sub> + 8H<sub>2</sub>O<br>
                            • البرمنغنات لونها بنفسجي<br>
                            • أيونات المنغنيز Mn<sup>2+</sup> شفافة (عديمة اللون تقريباً)<br>
                            • نتبع زوال اللون البنفسجي<br>
                            • نأخذ عينات على فترات ونعايرها<br>
                            • الأخطاء المتوقعة: صعوبة تحديد اللون بالضبط، خاصة مع تركيزات قليلة
                        </div>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>2. طريقة قياس الناقلية الكهربائية:</strong><br>
                            <u>مثال: تفاعل حمض-أساس</u><br>
                            H<sub>3</sub>O<sup>+</sup> + HO<sup>-</sup> → 2H<sub>2</sub>O<br>
                            • أيونات H<sub>3</sub>O<sup>+</sup> و HO<sup>-</sup> ناقلة للتيار<br>
                            • جزيئات H<sub>2</sub>O غير ناقلة (ناقليتها ضعيفة جداً)<br>
                            • الناقلية تتناسب مع تركيز الأيونات<br>
                            • مع تقدم التفاعل: تقل الناقلية<br>
                            • نرسم منحنى الناقلية بدلالة الزمن<br>
                            • الميزة: طريقة دقيقة، لحظية، لا نأخذ عينات
                        </div>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>3. طريقة قياس الضغط (لتفاعلات تنتج غاز):</strong><br>
                            <u>مثال: تفاعل الزنك مع حمض كلور الماء</u><br>
                            Zn + 2H<sub>3</sub>O<sup>+</sup> → Zn<sup>2+</sup> + H<sub>2</sub>↑ + 2H<sub>2</sub>O<br>
                            • نضع الجهاز في وعاء مغلق<br>
                            • نربط مقياس ضغط<br>
                            • كل مول من الهيدروجين المنتج يزيد الضغط<br>
                            • قانون الغاز المثالي: PV = nRT<br>
                            • عند T و V ثابتين: P يتناسب مع n(H<sub>2</sub>)<br>
                            • الضغط بدلالة الزمن يعطينا التقدم
                        </div>
                        
                        <p>ملاحظة مهمة: في كل هذه الطرق، نحول القياس (لون، ناقلية، ضغط) إلى تركيز، ثم إلى تقدم التفاعل x.</p>
                    `
                },
                {
                    title: "2. منحنى التقدم وزمن نصف التفاعل t<sub>1/2</sub>",
                    content: `
                        <h3 style="color:#22d3ee">المنحنى السحري: x = f(t)</h3>
                        <p>بعد أن قمنا بالتجربة ووضعنا النتائج في جدول، نرسم المنحنى x بدلالة t. هذا المنحنى له شكل مميز يعتمد على نوع التفاعل:</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>أشكال المنحنيات الممكنة:</strong><br>
                            <strong>1. منحنى مقعر:</strong> السرعة تتناقص مع الزمن (الأكثر شيوعاً)<br>
                            <strong>2. منحنى مستقيم:</strong> السرعة ثابتة (نادر)<br>
                            <strong>3. منحنى محدب:</strong> السرعة تزداد مع الزمن (تفاعلات تسريع ذاتي)
                        </div>
                        
                        <h4 style="color:#34d399">تحليل المنحنى المقعر (حالة التفاعل من الدرجة الأولى):</h4>
                        <p>لنفترض أن لدينا التفاعل: A → B</p>
                        <p>قانون السرعة: v = k × [A] (حيث k ثابت السرعة)</p>
                        <p>باستخدام الحساب التفاضلي: d[A]/dt = -k[A]</p>
                        <p>حل هذه المعادلة يعطي: [A] = [A]<sub>0</sub> × e<sup>-kt</sup></p>
                        <p>حيث [A]<sub>0</sub> هو التركيز الابتدائي.</p>
                        
                        <h3 style="color:#22d3ee">زمن نصف التفاعل t<sub>1/2</sub></h3>
                        <p>هذا هو المفهوم الأهم في الوحدة الأولى. تعريفه البسيط: هو الزمن اللازم لاستهلاك نصف كمية المادة المتفاعلة الابتدائية.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>تعريف رياضي دقيق:</strong><br>
                            t<sub>1/2</sub> هو الزمن t الذي عنده:<br>
                            • إما x = x<sub>max</sub>/2 (إذا كان التفاعل تام)<br>
                            • أو [A] = [A]<sub>0</sub>/2 (للتركيزات)<br>
                            حيث x<sub>max</sub> هو التقدم الأقصى (عند نهاية التفاعل).
                        </div>
                        
                        <h4 style="color:#34d399">طريقة تحديد t<sub>1/2</sub> بيانياً:</h4>
                        <p>1. نرسم المنحنى x = f(t)</p>
                        <p>2. نحدد x<sub>max</sub> (القيمة التي يقترب منها المنحنى ولا يتجاوزها)</p>
                        <p>3. نحسب x<sub>max</sub>/2</p>
                        <p>4. نرسم خط أفقي عند y = x<sub>max</sub>/2</p>
                        <p>5. نجد نقطة تقاطع هذا الخط مع المنحنى</p>
                        <p>6. نسقط عمودياً على محور الزمن</p>
                        <p>7. نقرأ قيمة t عند هذه النقطة ← هذه هي t<sub>1/2</sub></p>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>مثال رقمي مفصل:</strong><br>
                            نفترض تفاعلاً بين حمض وأساس. قياسات التقدم مع الزمن:<br>
                            t(min): 0, 5, 10, 15, 20, 30, 40<br>
                            x(mmol): 0, 0.8, 1.4, 1.8, 2.1, 2.4, 2.5<br><br>
                            
                            <strong>الحل خطوة خطوة:</strong><br>
                            1. نلاحظ أن x تقترب من 2.5 mmol (تقريباً)<br>
                            2. إذن x<sub>max</sub> ≈ 2.5 mmol<br>
                            3. نصف هذه القيمة = 1.25 mmol<br>
                            4. نرسم المنحنى (افتراضياً) ونرى متى يصل x إلى 1.25<br>
                            5. بالاستكمال البياني نجد t ≈ 6.5 دقيقة<br>
                            6. إذن t<sub>1/2</sub> ≈ 6.5 min
                        </div>
                        
                        <h3 style="color:#22d3ee">لماذا t<sub>1/2</sub> مهم جداً؟</h3>
                        <p>1. <strong>خاصية مميزة للتفاعل:</strong> t<sub>1/2</sub> ثابت للتفاعل عند درجة حرارة معينة، بغض النظر عن التركيز الابتدائي (لتفاعلات الدرجة الأولى).</p>
                        <p>2. <strong>توقع مدة التفاعل:</strong> إذا كان t<sub>1/2</sub> = 10 دقائق، فبعد 20 دقيقة (2 × t<sub>1/2</sub>) يتبقى ربع المادة الابتدائية.</p>
                        <p>3. <strong>التحكم في التفاعل:</strong> في الصناعة، نحتاج معرفة t<sub>1/2</sub> لتصميم المفاعلات الكيميائية.</p>
                    `
                },
                {
                    header: true,
                    title: "الوحدة 2: التحولات النووية"
                },
                {
                    title: "1. النظائر والنماذج النووية",
                    content: `
                        <h3 style="color:#22d3ee">من الذرة إلى النواة: تغيير في المقياس</h3>
                        <p>في الكيمياء، ندرس التفاعلات التي تحدث بين الإلكترونات (مستوى 10<sup>-10</sup> m). في الفيزياء النووية، ندرس ما يحدث داخل النواة (مستوى 10<sup>-15</sup> m). الفرق 100,000 مرة أصغر!</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>تعريف النواة الذرية:</strong><br>
                            النواة هي الجزء المركزي للذرة، وتشكل 99.97% من كتلتها، لكنها تشغل جزءاً ضئيلاً جداً من حجمها.<br><br>
                            
                            <strong>مكونات النواة:</strong><br>
                            1. <strong>البروتونات (p<sup>+</sup>):</strong> شحنتها +e، كتلتها m<sub>p</sub> = 1.6726 × 10<sup>-27</sup> kg<br>
                            2. <strong>النيوترونات (n<sup>0</sup>):</strong> شحنتها 0، كتلتها m<sub>n</sub> ≈ m<sub>p</sub><br><br>
                            
                            <strong>الرموز المستخدمة:</strong><br>
                            <sup>A</sup><sub>Z</sub>X<br>
                            • X: رمز العنصر (Fe, U, C,...)<br>
                            • Z: العدد الذري = عدد البروتونات<br>
                            • A: العدد الكتلي = عدد البروتونات + النيوترونات<br>
                            • N = A - Z: عدد النيوترونات
                        </div>
                        
                        <h3 style="color:#22d3ee">النظائر: أشقاء متشابهون لكن مختلفون</h3>
                        <p>النظائر هي ذرات لنفس العنصر (نفس Z) لكن لها أعداد كتلية مختلفة (A مختلف) بسبب اختلاف عدد النيوترونات.</p>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>أمثلة على النظائر:</strong><br>
                            <strong>1. الهيدروجين:</strong><br>
                            • <sup>1</sup><sub>1</sub>H: بروتون واحد، لا نيوترونات (99.98%)<br>
                            • <sup>2</sup><sub>1</sub>H (ديوتريوم): بروتون + نيوترون واحد (0.02%)<br>
                            • <sup>3</sup><sub>1</sub>H (تريتيوم): بروتون + نيوترونين (مشع، نادر جداً)<br><br>
                            
                            <strong>2. الكربون:</strong><br>
                            • <sup>12</sup><sub>6</sub>C: 6 بروتونات + 6 نيوترونات (98.9%)<br>
                            • <sup>13</sup><sub>6</sub>C: 6 بروتونات + 7 نيوترونات (1.1%)<br>
                            • <sup>14</sup><sub>6</sub>C: 6 بروتونات + 8 نيوترونات (مشع، يستخدم في التأريخ)
                        </div>
                        
                        <h3 style="color:#22d3ee">النشاط الإشعاعي الطبيعي</h3>
                        <p>بعض النوى غير مستقرة فتتحول تلقائياً إلى نوى أخرى مع انبعاث جسيمات. هذا الاكتشاف كان لهنري بيكريل عام 1896.</p>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>أنواع الاشعاعات الثلاثة:</strong><br>
                            <strong>1. أشعة ألفا (α):</strong><br>
                            • هي نوى الهيليوم: <sup>4</sup><sub>2</sub>He<sup>2+</sup><br>
                            • شحنتها: +2e<br>
                            • كتلتها: كبيرة نسبياً<br>
                            • قدرة اختراق: ضعيفة (ورقة توقفها)<br>
                            • خطر: عالي إذا دخلت الجسم<br><br>
                            
                            <strong>2. أشعة بيتا (β):</strong><br>
                            • نوعان: β<sup>-</sup> (إلكترونات) و β<sup>+</sup> (بوزيترونات)<br>
                            • شحنة β<sup>-</sup>: -e، شحنة β<sup>+</sup>: +e<br>
                            • كتلة: صغيرة جداً (1/1836 من كتلة البروتون)<br>
                            • قدرة اختراق: متوسطة (صفيحة ألمنيوم توقفها)<br><br>
                            
                            <strong>3. أشعة غاما (γ):</strong><br>
                            • هي فوتونات ذات طاقة عالية<br>
                            • ليس لها كتلة ولا شحنة<br>
                            • قدرة اختراق: عالية جداً (تحتاج إلى حاجز سميك من الرصاص)<br>
                            • خطر: عالي جداً من الخارج
                        </div>
                        
                        <h4 style="color:#34d399">معادلات التحلل الإشعاعي:</h4>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>1. تحلل ألفا:</strong><br>
                            <sup>A</sup><sub>Z</sub>X → <sup>A-4</sup><sub>Z-2</sub>Y + <sup>4</sup><sub>2</sub>He<br>
                            <em>مثال:</em> <sup>238</sup><sub>92</sub>U → <sup>234</sup><sub>90</sub>Th + <sup>4</sup><sub>2</sub>He
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>2. تحلل بيتا السالب (β<sup>-</sup>):</strong><br>
                            <sup>A</sup><sub>Z</sub>X → <sup>A</sup><sub>Z+1</sub>Y + <sup>0</sup><sub>-1</sub>e + <sup>0</sup><sub>0</sub>ν̅<sub>e</sub><br>
                            (ν̅<sub>e</sub> هو مضاد النيوترينو، نذكره للعلم فقط)<br>
                            <em>مثال:</em> <sup>14</sup><sub>6</sub>C → <sup>14</sup><sub>7</sub>N + <sup>0</sup><sub>-1</sub>e
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>3. تحلل بيتا الموجب (β<sup>+</sup>):</strong><br>
                            <sup>A</sup><sub>Z</sub>X → <sup>A</sup><sub>Z-1</sub>Y + <sup>0</sup><sub>+1</sub>e + <sup>0</sup><sub>0</sub>ν<sub>e</sub><br>
                            (ν<sub>e</sub> هو النيوترينو)<br>
                            <em>مثال:</em> <sup>22</sup><sub>11</sub>Na → <sup>22</sup><sub>10</sub>Ne + <sup>0</sup><sub>+1</sub>e
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>4. انبعاث غاما (γ):</strong><br>
                            <sup>A</sup><sub>Z</sub>X* → <sup>A</sup><sub>Z</sub>X + γ<br>
                            (النجمة * تعني النواة في حالة مثارة)<br>
                            <em>مهم:</em> انبعاث غاما لا يغير Z ولا A، فقط تطلق طاقة فائضة
                        </div>
                    `
                },
                {
                    title: "2. قانون التناقص الإشعاعي وقانون سودي",
                    content: `
                        <h3 style="color:#22d3ee">النشاط الإشعاعي: كم تتحلل في الثانية؟</h3>
                        <p>النشاط الإشعاعي A هو عدد الأنوية التي تتحلل في وحدة الزمن. يقاس بالبيكريل (Bq): 1 Bq = 1 تحلل/ثانية.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>قانون التناقص الإشعاعي:</strong><br>
                            A(t) = A<sub>0</sub> × e<sup>-λt</sup><br><br>
                            
                            <strong>حيث:</strong><br>
                            • A(t): النشاط عند الزمن t<br>
                            • A<sub>0</sub>: النشاط الابتدائي (عند t=0)<br>
                            • λ: ثابت التحلل (وحدته s<sup>-1</sup>)<br>
                            • t: الزمن (بالثانية)<br><br>
                            
                            <strong>العلاقة بين A و N (عدد الأنوية):</strong><br>
                            A = λ × N
                        </div>
                        
                        <h4 style="color:#34d399">شرح ثابت التحلل λ:</h4>
                        <p>λ هو احتمال تحلل نواة واحدة في وحدة الزمن. إذا كانت λ كبيرة، فالنواة غير مستقرة بشدة وتتحلل بسرعة.</p>
                        
                        <h3 style="color:#22d3ee">زمن نصف العمر T<sub>1/2</sub> (مشابه لـ t<sub>1/2</sub> في الكيمياء)</h3>
                        <p>هو الزمن اللازم لتناقص النشاط إلى النصف (أو عدد الأنوية إلى النصف).</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>العلاقة بين T<sub>1/2</sub> و λ:</strong><br>
                            T<sub>1/2</sub> = (ln 2) / λ ≈ 0.693 / λ<br><br>
                            
                            <strong>الدليل الرياضي:</strong><br>
                            عند t = T<sub>1/2</sub>، لدينا A = A<sub>0</sub>/2<br>
                            إذن: A<sub>0</sub>/2 = A<sub>0</sub> × e<sup>-λT<sub>1/2</sub></sup><br>
                            1/2 = e<sup>-λT<sub>1/2</sub></sup><br>
                            ln(1/2) = -λT<sub>1/2</sub><br>
                            -ln 2 = -λT<sub>1/2</sub><br>
                            T<sub>1/2</sub> = (ln 2)/λ
                        </div>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>أمثلة على أزمنة نصف العمر:</strong><br>
                            • اليورانيوم-238: T<sub>1/2</sub> = 4.5 مليار سنة (عمر الأرض تقريباً)<br>
                            • الكربون-14: T<sub>1/2</sub> = 5730 سنة (يستخدم في التأريخ)<br>
                            • اليود-131: T<sub>1/2</sub> = 8 أيام (يستخدم في الطب)<br>
                            • التكنيتيوم-99m: T<sub>1/2</sub> = 6 ساعات (تصوير طبي)<br>
                            • البولونيوم-214: T<sub>1/2</sub> = 0.00016 ثانية (سريع جداً!)
                        </div>
                        
                        <h3 style="color:#22d3ee">قانون سودي (سلسلة التحالل)</h3>
                        <p>عندما تتحلل نواة، قد تنتج نواة ابنة غير مستقرة أيضاً، فتتحلل بدورها، وهكذا.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>قانون سودي للحالة المستقرة:</strong><br>
                            عندما يكون النظام في حالة مستقرة (توازن إشعاعي):<br>
                            λ<sub>1</sub>N<sub>1</sub> = λ<sub>2</sub>N<sub>2</sub> = λ<sub>3</sub>N<sub>3</sub> = ...<br><br>
                            
                            <strong>أو بشكل مكافئ:</strong><br>
                            A<sub>1</sub> = A<sub>2</sub> = A<sub>3</sub> = ...<br><br>
                            
                            <strong>شرح بسيط:</strong> في السلسلة، معدل تكوّن النواة الابنة يساوي معدل تحللها.
                        </div>
                        
                        <h3 style="color:#22d3ee">الكتلة والطاقة: E = mc²</h3>
                        <p>أهم معادلة في الفيزياء الحديثة. اكتشفها أينشتاين عام 1905.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>محتوى المعادلة:</strong><br>
                            E = m × c²<br><br>
                            
                            <strong>حيث:</strong><br>
                            • E: الطاقة (جول)<br>
                            • m: الكتلة (كيلوغرام)<br>
                            • c: سرعة الضوء في الفراغ = 3 × 10<sup>8</sup> m/s<br><br>
                            
                            <strong>نتيجة مهمة:</strong> 1 كغ من المادة ≈ 9 × 10<sup>16</sup> جول<br>
                            هذه طاقة هائلة! تفجير 1 كغ من المادة يكافئ انفجار 21 مليون طن من TNT!
                        </div>
                        
                        <h4 style="color:#34d399">الكتلة الناقصة وطاقة الربط:</h4>
                        <p>عندما تتكون نواة من بروتونات ونيوترونات حرة، تكون كتلتها النهائية أقل من مجموع كتل مكوناتها!</p>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>حساب الكتلة الناقصة:</strong><br>
                            Δm = [Z × m<sub>p</sub> + (A-Z) × m<sub>n</sub>] - m<sub>noyau</sub><br><br>
                            
                            <strong>طاقة الربط:</strong><br>
                            E<sub>ℓ</sub> = Δm × c²<br><br>
                            
                            <strong>طاقة الربط لكل نوية:</strong><br>
                            E<sub>ℓ</sub> par nucléon = E<sub>ℓ</sub> / A
                        </div>
                        
                        <p>كلما زادت طاقة الربط لكل نوية، كانت النواة أكثر استقراراً.</p>
                    `
                },
                {
                    header: true,
                    title: "الوحدة 3: الظواهر الكهربائية (جزء 1 - ثنائي القطب RC)"
                },
                {
                    title: "1. المكثفة الكهربائية",
                    content: `
                        <h3 style="color:#22d3ee">ما هي المكثفة؟</h3>
                        <p>المكثفة هي عنصر كهربائي يخزن الطاقة على شكل مجال كهربائي. تتكون من صفيحتين موصلتين بينهما عازل (هواء، سيراميك، بلاستيك).</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>السعة الكهربائية C:</strong><br>
                            C = Q / U<br><br>
                            
                            <strong>حيث:</strong><br>
                            • C: السعة (بالفاراد F)<br>
                            • Q: الشحنة على إحدى الصفيحتين (كولون)<br>
                            • U: فرق الجهد بين الصفيحتين (فولت)<br><br>
                            
                            <strong>الوحدة:</strong> 1 فاراد = 1 كولون/فولت<br>
                            <em>ملاحظة: الفاراد وحدة كبيرة جداً، لذا نستخدم عادة:</em><br>
                            • ميكروفاراد (μF) = 10<sup>-6</sup> F<br>
                            • نانوفاراد (nF) = 10<sup>-9</sup> F<br>
                            • بيكوفاراد (pF) = 10<sup>-12</sup> F
                        </div>
                        
                        <h3 style="color:#22d3ee">دوائر RC: الشحن والتفريغ</h3>
                        <p>نربط مكثفة مع مقاومة على التوالي، ثم مع مصدر تيار مستمر.</p>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>مرحلة الشحن:</strong><br>
                            عند إغلاق الدائرة مع المصدر:<br>
                            1. في البداية (t=0): المكثفة فارغة، تتصرف كسلك (مقاومتها 0)<br>
                            2. التيار أقصى: i<sub>0</sub> = E/R<br>
                            3. مع مرور الزمن: تتراكم الشحنة على المكثفة<br>
                            4. يقل التيار تدريجياً<br>
                            5. عند النهاية (t→∞): المكثفة مشحونة بالكامل، التيار = 0<br>
                            6. فرق الجهد على المكثفة يصبح = E
                        </div>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>مرحلة التفريغ:</strong><br>
                            بعد شحن المكثفة، نعزل المصدر ونوصل المقاومة مع المكثفة فقط:<br>
                            1. في البداية: المكثفة مشحونة، U<sub>C</sub> = E<br>
                            2. التيار أقصى لكن معكوس الاتجاه<br>
                            3. مع مرور الزمن: تفرغ المكثفة<br>
                            4. يقل التيار تدريجياً<br>
                            5. عند النهاية: المكثفة فارغة، التيار = 0، U<sub>C</sub> = 0
                        </div>
                        
                        <h3 style="color:#22d3ee">المعادلة التفاضلية لدائرة RC</h3>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>قانون إضافة التوترات:</strong><br>
                            U<sub>R</sub> + U<sub>C</sub> = E (للدائرة المغلقة)<br><br>
                            
                            <strong>لكن:</strong><br>
                            U<sub>R</sub> = R × i<br>
                            U<sub>C</sub> = q/C<br>
                            i = dq/dt (التيار هو معدل تغير الشحنة)<br><br>
                            
                            <strong>إذن:</strong><br>
                            R × (dq/dt) + q/C = E<br>
                            أو: dq/dt + q/(RC) = E/R
                        </div>
                        
                        <h4 style="color:#34d399">حل المعادلة التفاضلية للشحن:</h4>
                        <p>الحل العام: q(t) = A × e<sup>-t/(RC)</sup> + B</p>
                        <p>باستخدام الشروط الابتدائية:</p>
                        <p>1. عند t=0: q=0 ⇒ 0 = A + B ⇒ B = -A</p>
                        <p>2. عند t→∞: q=CE ⇒ CE = B (لأن e<sup>-∞</sup>=0)</p>
                        <p>إذن: B = CE، A = -CE</p>
                        <p>الحل النهائي: q(t) = CE(1 - e<sup>-t/(RC)</sup>)</p>
                        
                        <h3 style="color:#22d3ee">ثابت الزمن τ (تاو)</h3>
                        <p>τ = R × C (وحدة: أوم × فاراد = ثانية)</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>الدلالة الفيزيائية لـ τ:</strong><br>
                            1. هو الزمن اللازم لشحن المكثفة إلى 63% من قيمتها النهائية<br>
                            2. أو لتفريغها إلى 37% من قيمتها الابتدائية<br>
                            3. بعد 5τ، يعتبر التفريغ أو الشحن مكتملاً (99.3%)<br><br>
                            
                            <strong>التحقق رياضيًا:</strong><br>
                            عند t = τ: q(τ) = CE(1 - e<sup>-1</sup>) = CE(1 - 0.3679) = 0.6321 × CE
                        </div>
                        
                        <h4 style="color:#34d399">تحديد τ بيانياً:</h4>
                        <p>1. طريقة المماس عند الأصل:</p>
                        <p>• نرسم المماس للمنحنى q(t) عند t=0</p>
                        <p>• نجد نقطة تقاطع هذا المماس مع الخط الأفقي q=CE</p>
                        <p>• فاصلة هذه النقطة = τ</p>
                        
                        <p>2. طريقة 63%:</p>
                        <p>• نرسم خط أفقي عند q = 0.63 × CE</p>
                        <p>• نجد نقطة تقاطعه مع المنحنى</p>
                        <p>• فاصلة هذه النقطة = τ</p>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>تمرين تطبيقي:</strong><br>
                            لدينا دائرة RC مع: R = 10 kΩ، C = 100 μF، E = 12 V<br>
                            <strong>المطلوب:</strong><br>
                            1. احسب τ<br>
                            2. احسب الشحنة القصوى على المكثفة<br>
                            3. احسب الشحنة بعد 2 ثانية من بدء الشحن<br>
                            4. احسب التيار الابتدائي<br><br>
                            
                            <strong>الحل:</strong><br>
                            1. τ = R×C = (10×10<sup>3</sup>) × (100×10<sup>-6</sup>) = 1 ثانية<br>
                            2. q<sub>max</sub> = C×E = (100×10<sup>-6</sup>) × 12 = 1.2×10<sup>-3</sup> C = 1.2 mC<br>
                            3. q(2) = 1.2×10<sup>-3</sup> × (1 - e<sup>-2/1</sup>) = 1.2×10<sup>-3</sup> × (1 - 0.1353) = 1.037×10<sup>-3</sup> C<br>
                            4. i<sub>0</sub> = E/R = 12/(10×10<sup>3</sup>) = 1.2×10<sup>-3</sup> A = 1.2 mA
                        </div>
                    `
                }
            ],
            2: [
                {
                    header: true,
                    title: "تكملة الوحدة 3: الظواهر الكهربائية (جزء 2 - ثنائي القطب RL)"
                },
                {
                    title: "1. الوشيعة (الملف الحثي)",
                    content: `
                        <h3 style="color:#22d3ee">ما هي الوشيعة؟</h3>
                        <p>الوشيعة (أو الملف الحثي) هي عنصر كهربائي يخزن الطاقة على شكل مجال مغناطيسي. تتكون من سلك ملتف على شكل لولبي.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>معامل الحث الذاتي L:</strong><br>
                            هو خاصية الوشيعة التي تعبر عن قدرتها على مقاومة تغير التيار المار فيها.<br>
                            <strong>الوحدة:</strong> الهنري (H)<br>
                            1 هنري = 1 فولت × ثانية / أمبير<br>
                            <em>ملاحظة: الهنري وحدة كبيرة، نستخدم عادة:</em><br>
                            • ملي هنري (mH) = 10<sup>-3</sup> H<br>
                            • ميكرو هنري (μH) = 10<sup>-6</sup> H
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>قانون فاراداي-لينز:</strong><br>
                            القوة المحركة الكهربائية المستحثة في وشيعة تتناسب مع معدل تغير التيار:<br>
                            e = -L × (di/dt)<br><br>
                            
                            <strong>علامة الناقص:</strong> تشير إلى أن التيار المستحث يعارض سبب إحداثه (قانون لينز).
                        </div>
                        
                        <h3 style="color:#22d3ee">دوائر RL: إغلاق وقطع الدائرة</h3>
                        <p>نربط وشيعة مع مقاومة على التوالي، ثم مع مصدر تيار مستمر.</p>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>مرحلة إغلاق الدائرة:</strong><br>
                            عند إغلاق الدائرة مع المصدر:<br>
                            1. في البداية (t=0): الوشيعة تعارض مرور التيار (تتصرف كمقاومة لا نهائية)<br>
                            2. التيار = 0<br>
                            3. مع مرور الزمن: يبدأ التيار بالزيادة<br>
                            4. فرق الجهد على الوشيعة يقل تدريجياً<br>
                            5. عند النهاية (t→∞): الوشيعة تتصبر كسلك (مقاومتها 0)<br>
                            6. التيار يصبح = E/R
                        </div>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>مرحلة قطع الدائرة:</strong><br>
                            عند فتح الدائرة فجأة:<br>
                            1. الوشيعة تحاول الحفاظ على التيار<br>
                            2. قد يظهر شرر أو فرق جهد عالٍ جداً<br>
                            3. هذا لأن di/dt كبير جداً (تقريباً لا نهائي)<br>
                            4. لذا نضع عادة ديود أو مكثفة للحماية
                        </div>
                        
                        <h3 style="color:#22d3ee">المعادلة التفاضلية لدائرة RL</h3>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>قانون إضافة التوترات:</strong><br>
                            U<sub>R</sub> + U<sub>L</sub> = E (للدائرة المغلقة)<br><br>
                            
                            <strong>لكن:</strong><br>
                            U<sub>R</sub> = R × i<br>
                            U<sub>L</sub> = L × (di/dt)<br><br>
                            
                            <strong>إذن:</strong><br>
                            R × i + L × (di/dt) = E<br>
                            أو: di/dt + (R/L) × i = E/L
                        </div>
                        
                        <h4 style="color:#34d399">حل المعادلة التفاضلية:</h4>
                        <p>الحل العام: i(t) = A × e<sup>-(R/L)t</sup> + B</p>
                        <p>باستخدام الشروط الابتدائية:</p>
                        <p>1. عند t=0: i=0 ⇒ 0 = A + B ⇒ B = -A</p>
                        <p>2. عند t→∞: i=E/R ⇒ E/R = B</p>
                        <p>إذن: B = E/R، A = -E/R</p>
                        <p>الحل النهائي: i(t) = (E/R) × (1 - e<sup>-(R/L)t</sup>)</p>
                        
                        <h3 style="color:#22d3ee">ثابت الزمن τ للدائرة RL</h3>
                        <p>τ = L / R (وحدة: هنري/أوم = ثانية)</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>الدلالة الفيزيائية لـ τ في RL:</strong><br>
                            1. هو الزمن اللازم لوصول التيار إلى 63% من قيمته النهائية<br>
                            2. بعد 5τ، يعتبر التيار قد وصل إلى قيمته النهائية (99.3%)<br><br>
                            
                            <strong>مقارنة بين RC و RL:</strong><br>
                            • في RC: τ = RC، المكثفة تبطئ تغير الجهد<br>
                            • في RL: τ = L/R، الوشيعة تبطئ تغير التيار
                        </div>
                    `
                },
                {
                    header: true,
                    title: "الوحدة 4: تطور جملة كيميائية نحو حالة التوازن"
                },
                {
                    title: "1. الأحماض والأسس (الحموضة والقاعدية)",
                    content: `
                        <h3 style="color:#22d3ee">تعريفات أساسية يجب حفظها</h3>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>تعريف برونستد-لوري (1923):</strong><br>
                            <strong>الحمض:</strong> هو نوع كيميائي قادر على منح بروتون H<sup>+</sup><br>
                            <strong>القاعدة:</strong> هو نوع كيميائي قادر على اكتساب بروتون H<sup>+</sup><br><br>
                            
                            <strong>أمثلة:</strong><br>
                            • HCl: حمض (يمنح H<sup>+</sup> ليكون Cl<sup>-</sup>)<br>
                            • NH<sub>3</sub>: قاعدة (يكتسب H<sup>+</sup> ليكون NH<sub>4</sub><sup>+</sup>)<br>
                            • H<sub>2</sub>O: مذبذب (يمكن أن يكون حمضاً أو قاعدة)
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>زوجان مترافقان:</strong><br>
                            حمض ⇌ قاعدة + H<sup>+</sup><br><br>
                            
                            <strong>أمثلة:</strong><br>
                            • CH<sub>3</sub>COOH/CH<sub>3</sub>COO<sup>-</sup><br>
                            • NH<sub>4</sub><sup>+</sup>/NH<sub>3</sub><br>
                            • H<sub>3</sub>O<sup>+</sup>/H<sub>2</sub>O<br>
                            • H<sub>2</sub>O/HO<sup>-</sup>
                        </div>
                        
                        <h3 style="color:#22d3ee">مفهوم الـ pH (1909)</h3>
                        <p>مقياس لدرجة حموضة أو قلوية المحلول. ابتكره الكيميائي الدنماركي سورينسن.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>التعريف الرياضي:</strong><br>
                            pH = -log[H<sub>3</sub>O<sup>+</sup>]<br><br>
                            
                            <strong>حيث:</strong><br>
                            [H<sub>3</sub>O<sup>+</sup>]: التركيز المولي لأيونات الهيدرونيوم (مول/لتر)<br><br>
                            
                            <strong>مقياس الـ pH:</strong><br>
                            • pH < 7: محلول حمضي<br>
                            • pH = 7: محلول معتدل (ماء نقي عند 25°C)<br>
                            • pH > 7: محلول قاعدي<br><br>
                            
                            <strong>ملاحظة:</strong> كل نقصان بمقدار 1 في pH يعني زيادة تركيز H<sub>3</sub>O<sup>+</sup> 10 أضعاف
                        </div>
                        
                        <h4 style="color:#34d399">حساب pH محلول حمض قوي:</h4>
                        <p>الحمض القوي يتفكك كلياً في الماء.</p>
                        <p><strong>مثال:</strong> محلول HCl بتركيز C = 0.01 mol/L</p>
                        <p>HCl + H<sub>2</sub>O → H<sub>3</sub>O<sup>+</sup> + Cl<sup>-</sup> (تفكك كلي)</p>
                        <p>[H<sub>3</sub>O<sup>+</sup>] = C = 0.01 mol/L</p>
                        <p>pH = -log(0.01) = -log(10<sup>-2</sup>) = 2</p>
                        
                        <h4 style="color:#34d399">حساب pH محلول قاعدة قوية:</h4>
                        <p><strong>مثال:</strong> محلول NaOH بتركيز C = 0.001 mol/L</p>
                        <p>NaOH → Na<sup>+</sup> + HO<sup>-</sup> (تفكك كلي)</p>
                        <p>[HO<sup>-</sup>] = C = 0.001 mol/L</p>
                        <p>العلاقة: [H<sub>3</sub>O<sup>+</sup>] × [HO<sup>-</sup>] = K<sub>e</sub> = 10<sup>-14</sup> (عند 25°C)</p>
                        <p>[H<sub>3</sub>O<sup>+</sup>] = 10<sup>-14</sup> / 0.001 = 10<sup>-11</sup> mol/L</p>
                        <p>pH = -log(10<sup>-11</sup>) = 11</p>
                    `
                },
                {
                    title: "2. التفاعلات الحمضية-القاعدية والمعايرة",
                    content: `
                        <h3 style="color:#22d3ee">تفاعل حمض-قاعدة</h3>
                        <p>هو تفاعل بين حمض وقاعدة ينقل فيه الحمض بروتوناً إلى القاعدة.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>معادلة عامة:</strong><br>
                            حمض<sub>1</sub> + قاعدة<sub>2</sub> ⇌ حمض<sub>2</sub> + قاعدة<sub>1</sub><br><br>
                            
                            <strong>مثال:</strong><br>
                            CH<sub>3</sub>COOH + HO<sup>-</sup> ⇌ CH<sub>3</sub>COO<sup>-</sup> + H<sub>2</sub>O<br>
                            حمض<sub>1</sub> &nbsp; &nbsp; + قاعدة<sub>2</sub> ⇌ قاعدة<sub>1</sub> &nbsp; &nbsp; + حمض<sub>2</sub>
                        </div>
                        
                        <h3 style="color:#22d3ee">ثابت التوازن K</h3>
                        <p>لتفاعل عام: aA + bB ⇌ cC + dD</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>تعريف K:</strong><br>
                            K = ([C]<sup>c</sup> × [D]<sup>d</sup>) / ([A]<sup>a</sup> × [B]<sup>b</sup>)<br><br>
                            
                            <strong>لتفاعل حمض-قاعدة:</strong><br>
                            K = ([قاعدة<sub>1</sub>] × [حمض<sub>2</sub>]) / ([حمض<sub>1</sub>] × [قاعدة<sub>2</sub>])<br><br>
                            
                            <strong>دلالة K:</strong><br>
                            • K كبير (K > 10<sup>4</sup>): التفاعل تام تقريباً<br>
                            • K صغير (K < 10<sup>-4</sup>): التفاعل محدود جداً<br>
                            • K متوسط: حالة توازن
                        </div>
                        
                        <h3 style="color:#22d3ee">المعايرة pH مترية</h3>
                        <p>هي تقنية لتحديد تركيز محلول مجهول (مُعَايَر) باستخدام محلول معلوم التركيز (مُعَايِر).</p>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>أدوات المعايرة:</strong><br>
                            1. pH متر (لقياس pH)<br>
                            2. سحاحة (تحتوي على المعاير)<br>
                            3. دورق مخروطي (يحتوي على المعاير)<br>
                            4. ممص (لقياس الحجوم بدقة)<br>
                            5. رافعة مغناطيسية (لتحريك المحلول)
                        </div>
                        
                        <h4 style="color:#34d399">خطوات المعايرة:</h4>
                        <p>1. نجهز المعاير (الحمض أو القاعدة المجهولة التركيز)</p>
                        <p>2. نضعه في الدورق المخروطي (حجم معروف V<sub>a</sub>)</p>
                        <p>3. نضيف بضع قطرات من كاشف لوني (فينولفثالين أو أزرق البروموثيمول)</p>
                        <p>4. نملأ السحاحة بالمعاير معلوم التركيز C<sub>b</sub></p>
                        <p>5. نضيف المعاير تدريجياً مع القياس المستمر للـ pH</p>
                        <p>6. نتوقف عند نقطة التكافؤ</p>
                        
                        <h3 style="color:#22d3ee">منحنى المعايرة</h3>
                        <p>هو منحنى pH بدلالة حجم المعاير المضاف V<sub>b</sub>.</p>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>خصائص منحنى المعايرة:</strong><br>
                            <strong>1. نقطة التكافؤ:</strong><br>
                            • هي النقطة التي تكون فيها كميات المادة المكافئة متساوية<br>
                            • n<sub>a</sub> = n<sub>b</sub> ⇒ C<sub>a</sub>V<sub>a</sub> = C<sub>b</sub>V<sub>bE</sub><br>
                            • عندها يكون ميل المنحنى أقصى ما يمكن<br>
                            • يمكن تحديدها بيانياً (منتصف الجزء شبه العمودي)<br><br>
                            
                            <strong>2. نقطة نصف التكافؤ:</strong><br>
                            • عندها يكون pH = pK<sub>a</sub> للحمض<br>
                            • مهمة لتحديد ثابت الحمضية
                        </div>
                        
                        <h4 style="color:#34d399">أنواع المعايرة:</h4>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>1. معايرة حمض قوي بقاعدة قوية:</strong><br>
                            • منحنى متناظر<br>
                            • نقطة التكافؤ عند pH = 7<br>
                            • تغير حاد في pH حول نقطة التكافؤ
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>2. معايرة حمض ضعيف بقاعدة قوية:</strong><br>
                            • منحنى غير متناظر<br>
                            • نقطة التكافؤ عند pH > 7 (قاعدية)<br>
                            • وجود منطقة تخميد قبل نقطة التكافؤ
                        </div>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>تمرين تطبيقي:</strong><br>
                            عند معايرة 20 mL من حمض كلور الماء HCl المجهول التركيز بمحلول هيدروكسيد الصوديوم NaOH تركيزه 0.1 mol/L، تم الحصول على نقطة التكافؤ عند إضافة 25 mL من NaOH.<br>
                            <strong>المطلوب:</strong><br>
                            1. احسب تركيز حمض كلور الماء<br>
                            2. احسب الـ pH عند بداية المعايرة (قبل إضافة NaOH)<br>
                            3. احسب الـ pH عند نقطة التكافؤ<br><br>
                            
                            <strong>الحل:</strong><br>
                            1. عند نقطة التكافؤ: C<sub>a</sub>V<sub>a</sub> = C<sub>b</sub>V<sub>bE</sub><br>
                            C<sub>a</sub> × 0.020 = 0.1 × 0.025<br>
                            C<sub>a</sub> = (0.1 × 0.025) / 0.020 = 0.125 mol/L<br><br>
                            
                            2. قبل الإضافة: حمض قوي ⇒ [H<sub>3</sub>O<sup>+</sup>] = C<sub>a</sub> = 0.125 M<br>
                            pH = -log(0.125) = -log(1.25×10<sup>-1</sup>) ≈ 0.903<br><br>
                            
                            3. عند نقطة التكافؤ: ملح متعادل (NaCl) في الماء النقي<br>
                            pH = 7 (عند 25°C)
                        </div>
                    `
                },
                {
                    header: true,
                    title: "الوحدة 5: تطور جملة ميكانيكية (بداية)"
                },
                {
                    title: "1. قوانين نيوتن للحركة",
                    content: `
                        <h3 style="color:#22d3ee">القوانين الثلاثة لنيوتن (1687)</h3>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>القانون الأول (قانون القصور الذاتي):</strong><br>
                            "يظل الجسم في حالة سكون أو حركة مستقيمة منتظمة ما لم تؤثر عليه قوة خارجية تغير من حالته"<br><br>
                            
                            <strong>ملاحظات:</strong><br>
                            • هذا القانون يعرف الأطر العطالية (التي لا تتسارع)<br>
                            • القصور الذاتي هو مقاومة الجسم لتغير سرعته<br>
                            • كتلة الجسم هي مقياس لقصوره الذاتي
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>القانون الثاني (القانون الأساسي للديناميكا):</strong><br>
                            "تسارع جسم ما يتناسب طردياً مع محصلة القوى المؤثرة عليه، وعكسياً مع كتلته"<br><br>
                            
                            <strong>صيغة رياضية:</strong><br>
                            ΣF⃗ = m × a⃗<br><br>
                            
                            <strong>حيث:</strong><br>
                            • ΣF⃗: محصلة القوى (نيوتن)<br>
                            • m: كتلة الجسم (كيلوغرام)<br>
                            • a⃗: التسارع (م/ث²)<br><br>
                            
                            <strong>وحدات:</strong> 1 N = 1 kg·m/s²
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>القانون الثالث (قانون الفعل ورد الفعل):</strong><br>
                            "لكل فعل رد فعل مساوٍ له في المقدار ومعاكس له في الاتجاه"<br><br>
                            
                            <strong>صيغة رياضية:</strong><br>
                            F⃗<sub>A→B</sub> = -F⃗<sub>B→A</sub><br><br>
                            
                            <strong>ملاحظات:</strong><br>
                            • القوتان تؤثران على جسمين مختلفين<br>
                            • لا تلغي كل منهما الأخرى (لأنها تؤثر على أجسام مختلفة)<br>
                            • مثال: عندما أدفع الحائط، يدفعني الحائط بنفس القوة
                        </div>
                        
                        <h3 style="color:#22d3ee">أنواع القوى في الميكانيكا</h3>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>1. وزن الجسم:</strong><br>
                            P⃗ = m × g⃗<br>
                            • اتجاهه: نحو مركز الأرض<br>
                            • g: تسارع الجاذبية ≈ 9.81 m/s² (في الجزائر)<br>
                            • الوزن يختلف عن الكتلة: الوزن قوة، الكتلة كمية مادة
                        </div>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>2. قوة الشد (في الخيط أو الحبل):</strong><br>
                            • تؤثر على طول الخيط<br>
                            • اتجاهها: على امتداد الخيط<br>
                            • خيط مثالي: كتلته مهملة، لا يمط ولا ينكسر
                        </div>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>3. قوة رد الفعل (من السطح):</strong><br>
                            • عمودية على السطح (إذا كان أملس)<br>
                            • تتكون من مركبتين إذا كان السطح خشنًا:<br>
                            &nbsp;&nbsp;• مركبة عمودية R<sub>N</sub><br>
                            &nbsp;&nbsp;• مركبة أفقية (قوة الاحتكاك) f
                        </div>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>4. قوة الاحتكاك:</strong><br>
                            • موازية للسطح<br>
                            • تعارض الحركة أو ميلها<br>
                            • نوعان:<br>
                            &nbsp;&nbsp;• احتكاك سكوني: يمنع الحركة (f<sub>s</sub> ≤ μ<sub>s</sub>R<sub>N</sub>)<br>
                            &nbsp;&nbsp;• احتكاك حركي: أثناء الحركة (f<sub>k</sub> = μ<sub>k</sub>R<sub>N</sub>)<br>
                            • μ<sub>s</sub> > μ<sub>k</sub> عادة
                        </div>
                    `
                },
                {
                    title: "2. حركة الكواكب والأقمار (قوانين كبلر)",
                    content: `
                        <h3 style="color:#22d3ee">قوانين كبلر للحركة الكوكبية (1609-1619)</h3>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>القانون الأول (قانون المدارات الإهليلجية):</strong><br>
                            "كل كوكب يدور في مدار إهليلجي (بيضاوي) تكون الشمس في إحدى بؤرتيه"<br><br>
                            
                            <strong>مصطلحات:</strong><br>
                            • الشمس في إحدى البؤرتين<br>
                            • الحضيض: أقرب نقطة للشمس<br>
                            • الأوج: أبعد نقطة عن الشمس<br>
                            • المحور الأكبر: طول القطر الأكبر للإهليلج
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>القانون الثاني (قlaw المساحات المتساوية):</strong><br>
                            "الخط الواصل بين الشمس والكوكب يمسح مساحات متساوية في أزمنة متساوية"<br><br>
                            
                            <img src="kepler-second-law.gif" alt="قانون كبلر الثاني" style="max-width:300px; display:block; margin:10px auto;"><br>
                            
                            <strong>تفسير:</strong> الكوكب يتحرك أسرع عندما يكون قريباً من الشمس (في الحضيض) وأبطأ عندما يكون بعيداً (في الأوج).
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>القانون الثالث (قانون الزمن الدوري):</strong><br>
                            "مربع الزمن الدوري لكوكب يتناسب مع مكعب نصف المحور الأكبر لمداره"<br><br>
                            
                            <strong>صيغة رياضية:</strong><br>
                            T² / a³ = ثابت (لجميع الكواكب)<br><br>
                            
                            <strong>حيث:</strong><br>
                            • T: الزمن الدوري (زمن دورة كاملة)<br>
                            • a: نصف المحور الأكبر للمدار<br><br>
                            
                            <strong>ملاحظة:</strong> الثابت يعتمد فقط على كتلة الشمس
                        </div>
                        
                        <h3 style="color:#22d3ee">قانون الجذب العام لنيوتن (1687)</h3>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>صيغة القانون:</strong><br>
                            F = G × (m₁ × m₂) / r²<br><br>
                            
                            <strong>حيث:</strong><br>
                            • F: قوة التجاذب بين الجسمين (نيوتن)<br>
                            • G: ثابت الجذب العام = 6.67 × 10<sup>-11</sup> N·m²/kg²<br>
                            • m₁, m₂: كتلتا الجسمين (كيلوغرام)<br>
                            • r: المسافة بين مركزي الجسمين (متر)<br><br>
                            
                            <strong>خصائص:</strong><br>
                            1. قوة تجاذب (دائماً)<br>
                            2. تتناسب عكسياً مع مربع المسافة<br>
                            3. تتناسب طردياً مع حاصل ضرب الكتلتين
                        </div>
                        
                        <h4 style="color:#34d399">اشتقاق قوانين كبلر من قانون نيوتن:</h4>
                        <p>نيوتن استطاع إثبات أن قوانين كبلر الثلاثة تنتج من قانون الجذب العام إذا:</p>
                        <p>1. كتلة الشمس >> كتلة الكواكب</p>
                        <p>2. لا توجد قوى أخرى مؤثرة</p>
                        <p>3. المدارات دائرية تقريباً (للتبسيط)</p>
                    `
                }
            ],
            3: [
                {
                    header: true,
                    title: "تكملة الوحدة 5: الميكانيك"
                },
                {
                    title: "1. السقوط الشاقولي والقذائف",
                    content: `
                        <h3 style="color:#22d3ee">السقوط الحر (دون احتكاك الهواء)</h3>
                        <p>حركة جسم تحت تأثير وزنه فقط (بدون قوى أخرى).</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>افتراضات السقوط الحر:</strong><br>
                            1. إهمال احتكاك الهواء<br>
                            2. تسارع الجاذبية g ثابت (قريب من سطح الأرض)<br>
                            3. الأرض إطار عطالي (لا تدور)<br>
                            4. الجسم نقطي (أبعاده مهملة)
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>المعادلات الأساسية:</strong><br>
                            لنظام إحداثي محوره y موجهاً للأعلى:<br><br>
                            
                            <strong>التسارع:</strong> a<sub>y</sub> = -g (ثابت)<br>
                            <strong>السرعة:</strong> v<sub>y</sub>(t) = v<sub>0y</sub> - gt<br>
                            <strong>الموقع:</strong> y(t) = y<sub>0</sub> + v<sub>0y</sub>t - ½gt²<br><br>
                            
                            <strong>معادلة السرعة-موقع:</strong><br>
                            v<sub>y</sub>² = v<sub>0y</sub>² - 2g(y - y<sub>0</sub>)
                        </div>
                        
                        <h4 style="color:#34d399">حالات خاصة:</h4>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>1. السقوط من السكون:</strong><br>
                            v<sub>0</sub> = 0، y<sub>0</sub> = h<br>
                            v(t) = -gt (لأسفل)<br>
                            y(t) = h - ½gt²<br>
                            زمن السقوط: t<sub>s</sub> = √(2h/g)<br>
                            سرعة الارتطام: v = √(2gh)
                        </div>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>2. القذف العمودي للأعلى:</strong><br>
                            v<sub>0</sub> > 0 (لأعلى)<br>
                            أقصى ارتفاع: h<sub>max</sub> = v<sub>0</sub>²/(2g)<br>
                            زمن الصعود: t<sub>up</sub> = v<sub>0</sub>/g<br>
                            زمن الرحلة الكلي: t<sub>total</sub> = 2v<sub>0</sub>/g
                        </div>
                        
                        <h3 style="color:#22d3ee">حركة المقذوفات (في مستوى)</h3>
                        <p>حركة جسم مقذوف بزاوية مع الأفق، تحت تأثير وزنه فقط.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>تحليل الحركة إلى مركبتين:</strong><br>
                            <strong>1. الحركة الأفقية:</strong><br>
                            • لا توجد قوة أفقية (إهمال الاحتكاك)<br>
                            • التسارع الأفقي = 0<br>
                            • السرعة الأفقية ثابتة: v<sub>x</sub> = v<sub>0</sub> cos θ<br>
                            • الموضع الأفقي: x(t) = v<sub>0</sub> cos θ × t<br><br>
                            
                            <strong>2. الحركة العمودية:</strong><br>
                            • القوة الوحيدة: الوزن<br>
                            • التسارع العمودي = -g<br>
                            • السرعة العمودية: v<sub>y</sub>(t) = v<sub>0</sub> sin θ - gt<br>
                            • الموضع العمودي: y(t) = v<sub>0</sub> sin θ × t - ½gt²
                        </div>
                        
                        <h4 style="color:#34d399">خصائص حركة المقذوف:</h4>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>1. أقصى ارتفاع:</strong><br>
                            عند v<sub>y</sub> = 0<br>
                            t<sub>hmax</sub> = (v<sub>0</sub> sin θ)/g<br>
                            h<sub>max</sub> = (v<sub>0</sub>² sin²θ)/(2g)
                        </div>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>2. المدى الأفقي:</strong><br>
                            المسافة الأفقية عند العودة لنفس المستوى (y=0)<br>
                            R = (v<sub>0</sub>² sin 2θ)/g<br><br>
                            
                            <strong>ملاحظة:</strong> المدى الأقصى عند θ = 45°<br>
                            R<sub>max</sub> = v<sub>0</sub>²/g
                        </div>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>3. زمن الرحلة الكلي:</strong><br>
                            زمن العودة إلى المستوى الابتدائي<br>
                            t<sub>total</sub> = (2v<sub>0</sub> sin θ)/g = 2t<sub>hmax</sub>
                        </div>
                    `
                },
                {
                    title: "2. المستوي المائل ومبدأ انحفاظ الطاقة",
                    content: `
                        <h3 style="color:#22d3ee">حركة جسم على مستوي مائل أملس</h3>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>تحليل القوى:</strong><br>
                            <img src="inclined-plane.png" alt="المستوي المائل" style="max-width:400px; display:block; margin:10px auto;"><br>
                            
                            <strong>1. الوزن P = mg:</strong><br>
                            • مركبة موازية للمستوي: mg sin α<br>
                            • مركبة عمودية على المستوي: mg cos α<br><br>
                            
                            <strong>2. رد الفعل R:</strong><br>
                            • عمودي على المستوي (لأنه أملس)<br>
                            • R = mg cos α (لأن الجسم لا يتحرك عمودياً)
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>التسارع على المستوي المائل:</strong><br>
                            محصلة القوى الموازية للمستوي: F = mg sin α<br>
                            من قانون نيوتن الثاني: ma = mg sin α<br>
                            إذن: a = g sin α (ثابت)<br><br>
                            
                            <strong>ملاحظات:</strong><br>
                            • التسارع يقل بزيادة α<br>
                            • عندما α = 90° (عمودي): a = g<br>
                            • عندما α = 0° (أفقي): a = 0
                        </div>
                        
                        <h4 style="color:#34d399">حركة جسم على مستوي مائل خشن:</h4>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>قوة الاحتكاك:</strong><br>
                            f = μ × R<sub>N</sub> = μ × mg cos α<br><br>
                            
                            <strong>التسارع على المستوي الخشن:</strong><br>
                            • إذا تحرك لأسفل: a = g(sin α - μ cos α)<br>
                            • إذا تحرك لأعلى: a = -g(sin α + μ cos α)
                        </div>
                        
                        <h3 style="color:#22d3ee">مبدأ انحفاظ الطاقة الميكانيكية</h3>
                        <p>في نظام معزول (بدون قوى غير محافظة كالاحتكاك)، الطاقة الميكانيكية الكلية تبقى ثابتة.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>الطاقة الميكانيكية:</strong><br>
                            E<sub>mec</sub> = E<sub>c</sub> + E<sub>pp</sub><br><br>
                            
                            <strong>حيث:</strong><br>
                            • E<sub>c</sub> = ½mv²: الطاقة الحركية<br>
                            • E<sub>pp</sub> = mgh: الطاقة الكامنة الثقالية (h ارتفاع عن مستوى مرجعي)<br><br>
                            
                            <strong>مبدأ الانحفاظ:</strong><br>
                            إذا كانت القوى محافظة فقط:<br>
                            E<sub>mec initial</sub> = E<sub>mec final</sub><br>
                            ½mv₁² + mgh₁ = ½mv₂² + mgh₂
                        </div>
                        
                        <h4 style="color:#34d399">تطبيق على المستوي المائل:</h4>
                        <p>جسم ينزلق من قمة مستوي مائل أملس بارتفاع h.</p>
                        
                        <div style="border:1px solid #8b5cf6; background:rgba(139,92,246,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>في القمة (1):</strong><br>
                            v₁ = 0، h₁ = h<br>
                            E<sub>mec1</sub> = 0 + mgh = mgh<br><br>
                            
                            <strong>في القاعدة (2):</strong><br>
                            h₂ = 0، v₂ = ?<br>
                            E<sub>mec2</sub> = ½mv₂² + 0 = ½mv₂²<br><br>
                            
                            <strong>من انحفاظ الطاقة:</strong><br>
                            mgh = ½mv₂²<br>
                            v₂ = √(2gh)<br><br>
                            
                            <strong>ملاحظة:</strong> هذه النتيجة لا تعتمد على زاوية المستوي!
                        </div>
                    `
                },
                {
                    header: true,
                    title: "الوحدة 6: مراقبة تطور جملة كيميائية (الأسترة والإماهة)"
                },
                {
                    title: "1. تفاعلات الأسترة والإماهة",
                    content: `
                        <h3 style="color:#22d3ee">تفاعل الأسترة (تكوين الإستر)</h3>
                        <p>تفاعل بين حمض كربوكسيلي وكحول لتكوين إستر وماء.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>معادلة عامة:</strong><br>
                            R-COOH + R'-OH ⇌ R-COO-R' + H<sub>2</sub>O<br>
                            حمض &nbsp; &nbsp; &nbsp; + كحول ⇌ إستر &nbsp; &nbsp; + ماء<br><br>
                            
                            <strong>مثال:</strong><br>
                            CH<sub>3</sub>COOH + CH<sub>3</sub>CH<sub>2</sub>OH ⇌ CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub> + H<sub>2</sub>O<br>
                            حمض خليكي &nbsp; + إيثانول &nbsp; ⇌ إيثانوات إيثيل &nbsp; + ماء
                        </div>
                        
                        <h3 style="color:#22d3ee">تفاعل الإماهة (تحلل الإستر)</h3>
                        <p>عكس الأسترة: تفكك الإستر بالماء إلى حمض وكحول.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>معادلة عامة:</strong><br>
                            R-COO-R' + H<sub>2</sub>O ⇌ R-COOH + R'-OH<br>
                            إستر &nbsp; &nbsp; + ماء ⇌ حمض &nbsp; &nbsp; &nbsp; + كحول
                        </div>
                        
                        <h3 style="color:#22d3ee">التوازن الكيميائي في الأسترة/الإماهة</h3>
                        <p>هذا التفاعل عكوس، ويصل إلى حالة توازن (وليس تاماً).</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>ثابت التوازن:</strong><br>
                            K = ([إستر]<sub>eq</sub> × [H<sub>2</sub>O]<sub>eq</sub>) / ([حمض]<sub>eq</sub> × [كحول]<sub>eq</sub>)<br><br>
                            
                            <strong>قيمة K:</strong><br>
                            • عادة K ≈ 4 (لمعظم تفاعلات الأسترة)<br>
                            • هذا يعني أن التفاعل لا يكون تاماً<br>
                            • في حالة التوازن، توجد جميع المواد معاً
                        </div>
                        
                        <h3 style="color:#22d3ee">العوامل المؤثرة على مردود الإستر</h3>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>1. إضافة فائض من أحد المتفاعلات:</strong><br>
                            حسب مبدأ لوشاتلييه، زيادة كمية أحد المتفاعلات تزيح التوازن نحو النواتج.<br>
                            <strong>ممارسة مخبرية:</strong> نضيف فائضاً من الكحول لزيادة مردود الإستر.
                        </div>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>2. إزالة أحد النواتج:</strong><br>
                            إزالة الإستر أو الماء تزيح التوازن نحو النواتج.<br>
                            <strong>طرق:</strong><br>
                            • تقطير الإستر (كثير منها له درجة غليان منخفضة)<br>
                            • استخدام مواد مجففة (لإزالة الماء)
                        </div>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>3. استخدام محفز:</strong><br>
                            • الحمض الكبريتيك المركز H<sub>2</sub>SO<sub>4</sub><br>
                            • دوره: يحفز التفاعل دون أن يستهلك<br>
                            • لا يغير ثابت التوازن K، لكن يسرع الوصول للتوازن
                        </div>
                        
                        <h3 style="color:#22d3ee">المردود النظري والفعلي</h3>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>تعريفات:</strong><br>
                            <strong>المردود النظري:</strong> كمية الإستر المتوقعة إذا كان التفاعل تاماً (100% تحول)<br>
                            <strong>المردود الفعلي:</strong> كمية الإستر التي نحصل عليها فعلياً من التجربة<br>
                            <strong>نسبة المردود:</strong> η = (المردود الفعلي / المردود النظري) × 100%<br><br>
                            
                            <strong>أسباب نقص المردود:</strong><br>
                            1. التفاعل عكوس (لا يكتمل)<br>
                            2. فقدان مواد أثناء النقل أو التقطير<br>
                            3. تفاعلات جانبية غير مرغوب فيها<br>
                            4. أخطاء في القياس
                        </div>
                    `
                },
                {
                    header: true,
                    title: "الوحدة 7: التطورات المهتزة (اختياري - الاهتزازات الميكانيكية)"
                },
                {
                    title: "1. النواس المرن والحركة التوافقية البسيطة",
                    content: `
                        <h3 style="color:#22d3ee">النواس المرن (كتلة-نابض)</h3>
                        <p>نظام يتكون من كتلة مربوطة بنابض، يمكنها الاهتزاز حول موضع التوازن.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>قوة النابض (قانون هوك):</strong><br>
                            F = -k × x<br><br>
                            
                            <strong>حيث:</strong><br>
                            • F: قوة النابض (نيوتن)<br>
                            • k: ثابت النابض (نيوتن/متر)<br>
                            • x: الإزاحة عن موضع التوازن (متر)<br>
                            • الإشارة السالبة: القوة دائماً معاكسة للإزاحة
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>المعادلة التفاضلية للحركة:</strong><br>
                            من قانون نيوتن الثاني: F = m × a<br>
                            ولكن: F = -k × x، و a = d²x/dt²<br>
                            إذن: m × d²x/dt² = -k × x<br>
                            أو: d²x/dt² + (k/m) × x = 0
                        </div>
                        
                        <h3 style="color:#22d3ee">حل المعادلة: الحركة التوافقية البسيطة</h3>
                        <p>حل المعادلة التفاضلية السابقة هو دالة جيبية.</p>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>معادلة الحركة:</strong><br>
                            x(t) = X<sub>m</sub> × cos(ω₀t + φ)<br><br>
                            
                            <strong>حيث:</strong><br>
                            • X<sub>m</sub>: السعة (أقصى إزاحة)<br>
                            • ω₀: التردد الزاوي الخاص = √(k/m) (راديان/ثانية)<br>
                            • φ: الطور الابتدائي (راديان)<br>
                            • t: الزمن (ثانية)
                        </div>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>السرعة والتسارع:</strong><br>
                            <strong>السرعة:</strong> v(t) = dx/dt = -X<sub>m</sub>ω₀ × sin(ω₀t + φ)<br>
                            <strong>السرعة القصوى:</strong> v<sub>max</sub> = X<sub>m</sub>ω₀<br><br>
                            
                            <strong>التسارع:</strong> a(t) = d²x/dt² = -X<sub>m</sub>ω₀² × cos(ω₀t + φ)<br>
                            <strong>التسارع القصوى:</strong> a<sub>max</sub> = X<sub>m</sub>ω₀²
                        </div>
                        
                        <h3 style="color:#22d3ee">الكميات الدورية</h3>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>الدورة T:</strong><br>
                            الزمن اللازم لإكمال اهتزازة كاملة<br>
                            T = 2π / ω₀ = 2π × √(m/k)
                        </div>
                        
                        <div style="border:1px solid #f59e0b; background:rgba(245,158,11,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>التردد f:</strong><br>
                            عدد الاهتزازات في الثانية<br>
                            f = 1/T = ω₀/(2π) = (1/(2π)) × √(k/m)<br>
                            الوحدة: هرتز (Hz) = اهتزازة/ثانية
                        </div>
                        
                        <h3 style="color:#22d3ee">انحفاظ الطاقة في النواس المرن</h3>
                        
                        <div style="border:1px solid #10b981; background:rgba(16,185,129,0.1); padding:15px; border-radius:8px; margin:10px 0;">
                            <strong>الطاقة الميكانيكية الكلية:</strong><br>
                            E<sub>mec</sub> = E<sub>c</sub> + E<sub>pe</sub><br><br>
                            
                            <strong>حيث:</strong><br>
                            • E<sub>c</sub> = ½mv²: الطاقة الحركية<br>
                            • E<sub>pe</sub> = ½kx²: الطاقة الكامنة المرونية<br><br>
                            
                            <strong>في الحركة التوافقية البسيطة:</strong><br>
                            E<sub>mec</sub> = ثابت = ½kX<sub>m</sub>²
                        </div>
                    `
                }
            ]
        }
    },
    science: {
        title: "علوم الطبيعة والحياة - 3 ثانوي شعبة علوم تجريبية",
        author: "وزارة التربية الوطنية - الجمهورية الجزائرية الديمقراطية الشعبية",
        version: "الموسوعة الرقمية الشاملة 2025",
        description: "موسوعة رقمية شاملة تغني الطالب عن الكراس والكتاب والمراجع الخارجية. شرح عميق على المستوى الجزيئي مع محاكاة رسومات وتحليل منحنيات.",
        
        trimesters: {
            1: [
                {
                    header: true,
                    title: "المجال 1: التخصص الوظيفي للبروتينات"
                },
                
                // الوحدة 1: تركيب البروتين
                {
                    id: "1.1",
                    title: "1. مقر تركيب البروتين والاستنساخ",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">مقر المعلومة الوراثية والاستنساخ</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> توجد المعلومة الوراثية في النواة عند حقيقيات النوى، محمولة على جزيئة <span style="color:#facc15">الحمض النووي الريبوزي منقوص الأكسجين (ADN)</span>. تعبر هذه المعلومة عن نفسها عبر عملية <span style="color:#facc15">التعبير الجيني</span> التي تتضمن مرحلتين أساسيتين: <span style="color:#facc15">الاستنساخ</span> و <span style="color:#facc15">الترجمة</span>.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. الموقع الخلوي للتعبير الجيني</h4>
                        <p><strong>التنظيم المكاني:</strong></p>
                        <ul>
                            <li><strong>النواة:</strong> مركز تخزين ومعالجة المعلومة الوراثية</li>
                            <li><strong>الهيولى:</strong> موقع تركيب البروتينات (على الريبوزومات)</li>
                            <li><strong>الشبكة الهيولية الداخلية:</strong> معالجة وتعبئة البروتينات</li>
                            <li><strong>جهاز غولجي:</strong> تعديل نهائي وتوجيه البروتينات</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">1.2. البنية الجزيئية للـ ADN</h4>
                        <p>جزيئة <span style="color:#facc15">ADN</span> عبارة عن بوليمر خطي مزدوج الطاق مكون من:</p>
                        <ul>
                            <li><strong>النيكليوتيدات:</strong> الوحدات الأساسية (ديزوكسي ريبوز + فوسفات + قاعدة آزوتية)</li>
                            <li><strong>الروابط الفوسفوديسترية:</strong> تربط النيكليوتيدات في نفس السلسلة (بين الكربون 3' والكربون 5')</li>
                            <li><strong>الروابط الهيدروجينية:</strong> تربط السلاسل المكملة (A=T برابطين هيدروجينيين، G≡C بثلاثة روابط)</li>
                            <li><strong>اتجاهية السلاسل:</strong> 5'→3' و 3'←5' (متوازيتان ومتعاكستان في الاتجاه)</li>
                        </ul>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مخطط البنية الثانوية للـ ADN:</strong><br><br>
                            5' -[P]-سكر-[P]-سكر-[P]-سكر- 3' ← السلسلة الأولى<br>
                              &nbsp;&nbsp;|A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|G&nbsp;&nbsp;<br>
                              &nbsp;&nbsp;|H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|H&nbsp;&nbsp;<br>
                              &nbsp;&nbsp;|B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|B&nbsp;&nbsp;<br>
                            3' -[P]-سكر-[P]-سكر-[P]-سكر- 5' ← السلسلة الثانية<br>
                              &nbsp;&nbsp;|T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|C&nbsp;&nbsp;<br>
                            <br>
                            P = مجموعة الفوسفات | H = روابط هيدروجينية | A,T,G,C = القواعد الآزوتية
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">آلية الاستنساخ (Transcription)</h3>
                        
                        <p>الاستنساخ هو عملية <span style="color:#facc15">تخليق جزيئة ARNm</span> انطلاقاً من سلسلة قالب من الـ ADN. تتم في النواة عند حقيقيات النوى.</p>
                        
                        <h4 style="color:#60a5fa">2.1. المتطلبات الجزيئية</h4>
                        <ul>
                            <li><strong>القالب:</strong> سلسلة واحدة من ADN (السلسلة الناسخة)</li>
                            <li><strong>الإنزيم الرئيسي:</strong> ARN بوليميراز (معقد بروتيني متعدد الوحدات)</li>
                            <li><strong>الركائز:</strong> النيكليوتيدات الريبية الحرة (ATP, UTP, GTP, CTP)</li>
                            <li><strong>العوامل المساعدة:</strong> عوامل النسخ (TF)، Mg²⁺ كعامل مرافق</li>
                            <li><strong>الطاقة:</strong> الطاقة المنطلقة من تحلل النيكليوتيدات الثلاثية الفوسفات</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.2. المراحل التفصيلية للاستنساخ</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مخطط عام للاستنساخ:</strong><br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← اتجاه قراءة القالب (3'→5')<br>
                            ADN: 3' - T A C G G T A T C - 5' (سلسلة القالب)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇ تكامل القواعد (A→U, T→A, G→C, C→G)<br>
                            ARNm: 5' - A U G C C A U A G - 3' (نسخة)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← اتجاه التخليق (5'→3')<br>
                            <br>
                            ═════════════════════════════════════════════<br>
                            [ADN] ═════ (مورثة) ══════<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇ ARN بوليميراز + عوامل النسخ<br>
                            [ARNm] ---- (متجه نحو النقرة النووية) ----<br>
                            ═════════════════════════════════════════════
                        </div>
                        
                        <p><strong>المرحلة 1: الانطلاق (Initiation)</strong></p>
                        <ul>
                            <li>ارتباط عوامل النسخ العامة (TFIID, TFIIB, TFIIF, TFIIE, TFIIH) بمنطقة المروج</li>
                            <li>تعرف TFIID على صندوق TATA (تسلسل TATAAT) في -25 إلى -30</li>
                            <li>جذب ARN بوليميراز II وتشكيل معقد الانطلاق</li>
                            <li>فك الالتفاف المحلي للـ ADN (فك حوالي 14 زوج قاعدي)</li>
                            <li>بدء التخليق عند نقطة بدء النسخ (+1)</li>
                        </ul>
                        
                        <p><strong>المرحلة 2: الاستطالة (Elongation)</strong></p>
                        <ul>
                            <li>تحرك ARN بوليميراز على طول القالب في الاتجاه 3'→5'</li>
                            <li>تخليق ARNm في الاتجاه 5'→3'</li>
                            <li>إضافة النيكليوتيدات حسب التكامل القاعدي: A→U, T→A, G→C, C→G</li>
                            <li>تشكل رابطة فوسفوديسترية بين النيكليوتيدات</li>
                            <li>تحرير البيروفوسفات (PPi) من النيكليوتيدات الداخلة</li>
                            <li>فك وإعادة لف الـ ADN خلف وبأمام الإنزيم</li>
                        </ul>
                        
                        <p><strong>المرحلة 3: النهاية (Termination)</strong></p>
                        <ul>
                            <li>وصول ARN بوليميراز إلى إشارات النهاية (تسلسل poly-A أو بنية دبوس الشعر في بدائيات النوى)</li>
                            <li>في حقيقيات النوى: انفصال النص الأولي (pre-mRNA) وتحريره</li>
                            <li>استمرار النسخ لمسافة بعد إشارة النهاية قبل الانفصال الكامل</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.3. المعالجة ما بعد الاستنساخ (في حقيقيات النوى)</h4>
                        <ul>
                            <li><strong>الإضافة الطرفية 5' (5' capping):</strong> إضافة 7-ميثيل غوانوزين مرتبط بثلاثة فوسفات</li>
                            <li><strong>الربط (Splicing):</strong> إزالة الإنترونات ووصل الإكسونات بواسطة الجسيم الملصق (spliceosome)</li>
                            <li><strong>الإضافة الطرفية 3' (Polyadenylation):</strong> إضافة 150-200 أدينين (ذيل poly-A)</li>
                            <li><strong>التصدير النووي:</strong> نقل ARNm الناضج إلى الهيولى عبر المسام النووية</li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية:</strong> معدل الخطأ في الاستنساخ (~10⁻⁴) أعلى منه في تضاعف ADN (~10⁻⁹) لأن ARN بوليميراز لا يملك نشاط تصحيح (proofreading). يتم تصحيح بعض الأخطاء عبر آليات مراقبة الجودة الخلوية.
                        </div>
                    `
                },
                
                {
                    id: "1.2",
                    title: "2. الشفرة الوراثية والترجمة",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الشفرة الوراثية وآلية الترجمة</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> <span style="color:#facc15">الترجمة</span> هي العملية الخلوية التي يتم فيها تحويل تسلسل النيكليوتيدات في ARNm إلى تسلسل أحماض أمينية في البروتين. تعتمد هذه العملية على <span style="color:#facc15">الشفرة الوراثية</span> التي تربط بين لغة النيكليوتيدات ولغة البروتينات.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. خصائص الشفرة الوراثية</h4>
                        <ul>
                            <li><strong>ثلاثية:</strong> كل ثلاثة نيكليوتيدات (رامزة) تشفر لحامض أميني واحد</li>
                            <li><strong>غير متداخلة:</strong> تقرأ الرامزات بشكل متتابع بدون تداخل</li>
                            <li><strong>لا فجوات:</strong> لا توجد فواصل بين الرامزات</li>
                            <li><strong>عمومية:</strong> نفس الشفرة في جميع الكائنات الحية (مع استثناءات قليلة في المتقدرة والعضيات الأخرى)</li>
                            <li><strong>انحلالية:</strong> أكثر من رامزة يمكن أن تشفر لنفس الحمض الأميني (64 رامزة لـ 20 حمض أميني)</li>
                            <li><strong>اتجاهية:</strong> تبدأ من رامزة البدء AUG وتنتهي برامزات الوقف UAA, UAG, UGA</li>
                        </ul>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>جدول الشفرة الوراثية (مثال مصغر):</strong><br><br>
                            <strong>الرامزة الأولى (5') → الحمض الأميني ← اتجاه الترجمة</strong><br>
                            ──────────────────────────────<br>
                            UUU, UUC → Phe (فينيل ألانين)<br>
                            UUA, UUG → Leu (ليوسين)<br>
                            CUU, CUC, CUA, CUG → Leu (ليوسين)<br>
                            AUU, AUC, AUA → Ile (إيزولوسين)<br>
                            AUG → Met (ميثيونين) [بدء]<br>
                            GUU, GUC, GUA, GUG → Val (فالين)<br>
                            UCU, UCC, UCA, UCG → Ser (سيرين)<br>
                            CCU, CCC, CCA, CCG → Pro (برولين)<br>
                            ACU, ACC, ACA, ACG → Thr (ثريونين)<br>
                            GCU, GCC, GCA, GCG → Ala (ألانين)<br>
                            ──────────────────────────────<br>
                            <strong>رامزات الوقف:</strong> UAA, UAG, UGA
                        </div>
                        
                        <h4 style="color:#60a5fa">1.2. المكونات الجزيئية للترجمة</h4>
                        
                        <p><strong>الريبوزوم:</strong> مركب ريبونوكليوبروتيني يتكون من:</p>
                        <ul>
                            <li><strong>وحدة صغيرة (30S/40S):</strong> تحتوي على موقع ربط ARNm</li>
                            <li><strong>وحدة كبيرة (50S/60S):</strong> تحتوي على مواقع A, P, E</li>
                            <li><strong>المواقع الوظيفية:</strong>
                                <ul>
                                    <li><strong>الموقع A (Aminoacyl):</strong> يرتبط بـ ARNt المحمل بالحمض الأميني الجديد</li>
                                    <li><strong>الموقع P (Peptidyl):</strong> يحتوي على سلسلة البيبتيد النامية المرتبطة بـ ARNt</li>
                                    <li><strong>الموقع E (Exit):</strong> يخرج منه ARNt غير المحمل</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <p><strong>ARN الناقل (ARNt):</strong></p>
                        <ul>
                            <li>بنية ثانوية على شكل ورقة نفل (cloverleaf)</li>
                            <li>بنية ثلاثية على شكل حرف L</li>
                            <li><strong>الذراع المقابل:</strong> يحمل الثلاثة المضاد (anticodon) التكميلي للرامزة</li>
                            <li><strong>الذراع المقبول:</strong> يحمل الحمض الأميني في نهايته 3'-OH</li>
                        </ul>
                        
                        <p><strong>إنزيمات ومكونات إضافية:</strong></p>
                        <ul>
                            <li><strong>الأمينوأسيل-ARNt سينثيتاز:</strong> ينشط الأحماض الأمينية ويربطها بـ ARNt المناسب</li>
                            <li><strong>عوامل البدء (IF1, IF2, IF3 في بدائيات النوى / eIFs في حقيقيات النوى)</strong></li>
                            <li><strong>عوامل الاستطالة (EF-Tu, EF-Ts, EF-G)</strong></li>
                            <li><strong>عوامل النهاية (RF1, RF2, RF3)</strong></li>
                            <li><strong>GTP:</strong> مصدر الطاقة للعديد من التفاعلات</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">مراحل الترجمة التفصيلية</h3>
                        
                        <h4 style="color:#60a5fa">2.1. مرحلة البدء (Initiation)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مخطط مرحلة البدء في حقيقيات النوى:</strong><br><br>
                            1. <strong>ربط الوحدة الصغيرة:</strong><br>
                            eIF1, eIF1A, eIF3 + 40S + Met-ARNt<sup>i</sup> + eIF2-GTP<br>
                            <br>
                            2. <strong>ربط ARNm:</strong><br>
                            eIF4F (eIF4E+4G+4A) + eIF4B → ربط الطرف 5' (القلنسوة)<br>
                            مسح للوصول إلى رامزة AUG<br>
                            <br>
                            3. <strong>تجمع الريبوزوم الكامل:</strong><br>
                            انضمام الوحدة 60S + تحلل GTP<br>
                            eIF5B-GTP يساعد على الانضمام<br>
                            <br>
                            [النتيجة]: الريبوزوم 80S جاهز على رامزة البدء AUG
                        </div>
                        
                        <p><strong>الخطوات الجزيئية:</strong></p>
                        <ol>
                            <li>تشكيل مركب البدء 43S (الوحدة 40S + عوامل بدء + Met-ARNt<sup>i</sup>)</li>
                            <li>ربط مركب البدء بطرف 5' لـ ARNm عبر عوامل eIF4</li>
                            <li>مسح ARNm للوصول إلى أول رامزة AUG (ظروف كوزاك)</li>
                            <li>انضمام الوحدة الكبيرة 60S مع تحلل GTP المرتبط بـ eIF2 و eIF5B</li>
                            <li>وضع Met-ARNt<sup>i</sup> في الموقع P، والموقع A شاغر للـ ARNt التالي</li>
                        </ol>
                        
                        <h4 style="color:#60a5fa">2.2. مرحلة الاستطالة (Elongation)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>دورة الاستطالة (ثلاث خطوات متكررة):</strong><br><br>
                            <strong>الخطوة 1: الارتباط (Binding)</strong><br>
                            ARNt-AA يدخل الموقع A (مع EF-Tu-GTP)<br>
                            ← تحقق من التكامل المضاد-رامزة<br>
                            ← تحلل GTP → EF-Tu-GDP ← إطلاق<br>
                            <br>
                            <strong>الخطوة 2: تكوين الرابطة البيبتيدية (Peptidyl Transfer)</strong><br>
                            مركز التحفيز في 23S/28S rRNA<br>
                            نقل سلسلة البيبتيد من ARNt في P إلى AA في A<br>
                            ← تفاعل تكثيف (إطلاق H₂O)<br>
                            ← تبادل المواقع: P → بيبتيديل-ARNt, A → deacyl-ARNt<br>
                            <br>
                            <strong>الخطوة 3: الانتقال (Translocation)</strong><br>
                            EF-G-GTP يدخل ← حركة الريبوزوم 3 قواعد<br>
                            ARNm يتحرك: A → P, P → E<br>
                            تحلل GTP ← إعادة ضبط الريبوزوم<br>
                        </div>
                        
                        <p><strong>التفاعلات الكيميائية:</strong></p>
                        <ul>
                            <li><strong>تفاعل نقل البيبتيديل:</strong> هجوم مجموعة NH₂ الحرة للحمض الأميني في الموقع A على مجموعة COOH المرتبطة بـ ARNt في الموقع P</li>
                            <li><strong>تشكل الرابطة البيبتيدية:</strong> تفاعل تكثيف مع إطلاق جزيء ماء</li>
                            <li><strong>التحفيز الريبوزيمي:</strong> يتم بواسطة الـ rRNA (ليس بواسطة البروتينات) - دليل على عالم الـ RNA</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.3. مرحلة النهاية (Termination)</h4>
                        
                        <ol>
                            <li>وصول رامزة وقف (UAA, UAG, UGA) إلى الموقع A</li>
                            <li>عدم وجود ARNt لهذه الرامزات</li>
                            <li>ارتباط عوامل النهاية (eRF1 في حقيقيات النوى) في الموقع A</li>
                            <li>تحفيز تحلل الرابطة بين البيبتيد النهائي وـ ARNt في الموقع P</li>
                            <li>إطلاق البروتين، ثم تفكك الريبوزوم إلى وحدتيه</li>
                            <li>إعادة تدوير عوامل الترجمة</li>
                        </ol>
                        
                        <h4 style="color:#60a5fa">2.4. التعديلات ما بعد الترجمة</h4>
                        <ul>
                            <li><strong>إزالة الميثيونين البدئي:</strong> بواسطة أمينوبيبتيداز الميثيونين</li>
                            <li><strong>الطي:</strong> مساعدة من chaperones (مثل Hsp70, Hsp60)</li>
                            <li><strong>التعديلات التساهمية:</strong> فسفرة، غلكزة، ميثيلة، أسيلة</li>
                            <li><strong>التشطير البروتيني:</strong> إزالة الببتيدات الإشارة أو تنشيط البروتين</li>
                            <li><strong>التجميع:</strong> تكوين المركبات متعددة الوحدات</li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية:</strong> معدل الترجمة في الخلية حقيقية النوى هو حوالي 5-6 أحماض أمينية في الثانية (أبطأ من بدائيات النوى التي تصل إلى 20 حمض أميني/ثانية). يتم ترجمة عدة ريبوزومات لنفس جزيء ARNm في نفس الوقت (بوليريبوزوم)، مما يزيد من كفاءة تخليق البروتين.
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الطاقة المستهلكة في الترجمة</h3>
                        
                        <p>تعتبر الترجمة من أكثر العمليات استهلاكاً للطاقة في الخلية:</p>
                        <ul>
                            <li><strong>تفعيل الحمض الأميني:</strong> ATP → AMP + PPi (2 روابط فوسفاتية عالية الطاقة)</li>
                            <li><strong>ربط ARNt-AA بالريبوزوم:</strong> تحلل GTP واحد (EF-Tu)</li>
                            <li><strong>الانتقال:</strong> تحلل GTP واحد (EF-G/eEF2)</li>
                            <li><strong>البدء والنهاية:</strong> تحلل GTP إضافية</li>
                        </ul>
                        
                        <p><strong>المجموع:</strong> ≈ 4 فوسفاتات عالية الطاقة لكل حمض أميني مضاف ≈ 1600 ATP لبروتين متوسط (400 حمض أميني).</p>
                    `
                },
                
                {
                    id: "1.3",
                    title: "3. الأحماض الأمينية والبنية الفراغية للبروتينات",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الأحماض الأمينية: الوحدات الأساسية للبروتينات</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> <span style="color:#facc15">الأحماض الأمينية</span> هي الوحدات البنائية للبروتينات. تحتوي على مجموعة أمين (NH₂) ومجموعة كربوكسيل (COOH) مرتبطة بذرة كربون مركزية (كربون α)، بالإضافة إلى سلسلة جانبية (R) تمنح كل حمض أميني خصائصه المميزة.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. التركيب العام والخصائص</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>الصيغة العامة للأحماض الأمينية:</strong><br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;H&nbsp;&nbsp;R<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|<br>
                            &nbsp;NH₂ - Cα - COOH<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;H<br>
                            <br>
                            <strong>الكربون α:</strong> مركز غير متماثل (كايرالي) في جميع الأحماض الأمينية ما عدا الجلايسين (R = H)<br>
                            <strong>التشكل:</strong> L-أحماض أمينية في البروتينات الطبيعية (نادراً D-)<br>
                            <strong>السلوك الأمفوتيري:</strong> يمكن أن يتصرف كحمض أو كقاعدة حسب pH الوسط
                        </div>
                        
                        <h4 style="color:#60a5fa">1.2. التصنيف حسب السلسلة الجانبية R</h4>
                        
                        <p><strong>1.2.1. أحماض أمينية غير قطبية (هيدروفوبية):</strong></p>
                        <ul>
                            <li><span style="color:#facc15">ألانين (Ala, A):</span> -CH₃، أبسط سلسلة جانبية بعد الجلايسين</li>
                            <li><span style="color:#facc15">فالين (Val, V):</span> -CH(CH₃)₂، متفرع، يساهم في البنية الثانوية</li>
                            <li><span style="color:#facc15">ليوسين (Leu, L) وإيزولوسين (Ile, I):</span> سلاسل كارهة للماء طويلة</li>
                            <li><span style="color:#facc15">برولين (Pro, P):</span> حلقة بيروليدين، يسبب انكساراً في البنية الثانوية</li>
                            <li><span style="color:#facc15">ميثيونين (Met, M):</span> يحتوي على كبريت، حمض أميني البداية</li>
                            <li><span style="color:#facc15">فينيل ألانين (Phe, F):</span> حلقة عطرية، ممتصة للأشعة فوق البنفسجية (λ_max = 258 nm)</li>
                            <li><span style="color:#facc15">تريبتوفان (Trp, W):</span> حلقة إندول، ممتصة قوية للأشعة فوق البنفسجية (λ_max = 280 nm)</li>
                        </ul>
                        
                        <p><strong>1.2.2. أحماض أمينية قطبية غير مشحونة:</strong></p>
                        <ul>
                            <li><span style="color:#facc15">جلايسين (Gly, G):</span> -H، غير كايرالي، يعطي مرونة للبروتين</li>
                            <li><span style="color:#facc15">سيرين (Ser, S):</span> -CH₂OH، يمكن أن يفسفر، موقع تفاعلي في الإنزيمات</li>
                            <li><span style="color:#facc15">ثريونين (Thr, T):</span> -CH(OH)CH₃، يمكن أن يفسفر</li>
                            <li><span style="color:#facc15">سيستئين (Cys, C):</span> -CH₂SH، يشكل جسور كبريتية (-S-S-)</li>
                            <li><span style="color:#facc15">تيروزين (Tyr, Y):</span> -CH₂-C₆H₄-OH، يمكن أن يفسفر، ممتص للأشعة فوق البنفسجية</li>
                            <li><span style="color:#facc15">أسباراجين (Asn, N) وجلوتامين (Gln, Q):</span> تحتوي على أميد، مشتركان في نقل الأمونيا</li>
                        </ul>
                        
                        <p><strong>1.2.3. أحماض أمينية مشحونة إيجابياً (قاعدية):</strong></p>
                        <ul>
                            <li><span style="color:#facc15">لايسين (Lys, K):</span> -(CH₂)₄-NH₃⁺، pKa ≈ 10.5، موقع للتعديلات (أسيلة)</li>
                            <li><span style="color:#facc15">أرجينين (Arg, R):</span> -(CH₂)₃-NH-C(NH₂)₂⁺، pKa ≈ 12.5، أكثر القواعد قوة</li>
                            <li><span style="color:#facc15">هيستيدين (His, H):</span> حلقة إيميدازول، pKa ≈ 6.0، يعمل كمنظم في التفاعلات الإنزيمية</li>
                        </ul>
                        
                        <p><strong>1.2.4. أحماض أمينية مشحونة سلبياً (حمضية):</strong></p>
                        <ul>
                            <li><span style="color:#facc15">أسبارتات (Asp, D):</span> -CH₂-COO⁻، pKa ≈ 3.9</li>
                            <li><span style="color:#facc15">جلوتامات (Glu, E):</span> -(CH₂)₂-COO⁻، pKa ≈ 4.3</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">السلوك الأمفوتيري وتأثير pH</h3>
                        
                        <h4 style="color:#60a5fa">2.1. ثوابت تفكك الأحماض الأمينية</h4>
                        
                        <p>يحتوي الحمض الأميني على مجموعتين قابلتين للتفكك على الأقل:</p>
                        <ul>
                            <li><strong>pKa₁:</strong> تفكك مجموعة الكربوكسيل (≈ 2.0-2.5)</li>
                            <li><strong>pKa₂:</strong> تفكك مجموعة الأمين (≈ 9.0-10.5)</li>
                            <li><strong>pKa₃:</strong> تفكك السلسلة الجانبية إن وجدت</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.2. تحليل منحنى المعايرة</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>منحنى معايرة الجلايسين (مثال):</strong><br><br>
                            pH ▲<br>
                            14 |<br>
                            12 |<br>
                            10 |─────────● pKa₂ = 9.6 (NH₃⁺ → NH₂)<br>
                            8&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
                            6&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[NH₂-CH₂-COO⁻] (أنيون)<br>
                            4&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
                            2&nbsp; |●───────── pKa₁ = 2.3 (COOH → COO⁻)<br>
                            0&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
                            &nbsp;&nbsp;&nbsp;└─────────────────▶ حجم القاعدة المضاف<br>
                            <br>
                            <strong>النقطة التساوي الكهربائية (pI):</strong> pH حيث الشحنة الصافية = 0<br>
                            <strong>لجلايسين:</strong> pI = (pKa₁ + pKa₂)/2 = (2.3 + 9.6)/2 = 5.95<br>
                            <br>
                            <strong>التوزيع حسب pH:</strong><br>
                            pH < pI: موجبة الشحنة (NH₃⁺-CH₂-COOH)<br>
                            pH = pI: ثنائية القطب (NH₃⁺-CH₂-COO⁻)<br>
                            pH > pI: سالبة الشحنة (NH₂-CH₂-COO⁻)
                        </div>
                        
                        <h4 style="color:#60a5fa">2.3. حساب النقطة التساوي الكهربائية (pI)</h4>
                        
                        <ul>
                            <li><strong>لأحماض أمينية بدون سلسلة جانبية مشحونة:</strong> pI = (pKa₁ + pKa₂)/2</li>
                            <li><strong>لأحماض أمينية حمضية (Asp, Glu):</strong> pI = (pKa₁ + pKa_R)/2</li>
                            <li><strong>لأحماض أمينية قاعدية (Lys, Arg, His):</strong> pI = (pKa₂ + pKa_R)/2</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الروابط في البروتينات</h3>
                        
                        <h4 style="color:#60a5fa">3.1. الروابط التساهمية</h4>
                        
                        <p><strong>الرابطة البيبتيدية:</strong></p>
                        <ul>
                            <li>رابطة أميدية بين مجموعة COOH لحمض أميني ومجموعة NH₂ لحمض أميني آخر</li>
                            <li>تفاعل تكثيف مع إطلاق جزيء ماء</li>
                            <li>طاقة الرابطة: ≈ -21 kJ/mol (أقل من روابط C-C أو C-H)</li>
                            <li><strong>الخصائص:</strong>
                                <ul>
                                    <li>ثنائية المستوي (planar) بسبب الرنين بين C-N</li>
                                    <li>طول الرابطة: 1.32 Å (أقصر من رابطة C-N العادية: 1.49 Å)</li>
                                    <li>زاوية الرابطة: ≈ 120°</li>
                                    <li>التشكل: غالباً trans (لمنع تصادم السلاسل الجانبية)</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <p><strong>جسور الكبريت (Disulfide Bridges):</strong></p>
                        <ul>
                            <li>رابطة S-S بين بقايا سيستئين</li>
                            <li>تثبيت البنية الثالثية والرابعة</li>
                            <li>يمكن أن تكون داخل السلسلة أو بين سلاسل مختلفة</li>
                            <li>تشكل في البيئات المؤكسدة (الشبكة الهيولية الداخلية، الفراغ خارج الخلوي)</li>
                            <li>يتم اختزالها في البيئات المختزلة (الهيولى)</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.2. الروابط غير التساهمية</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مقارنة الروابط غير التساهمية في تثبيت بنية البروتين:</strong><br><br>
                            <strong>الرابطة الهيدروجينية:</strong><br>
                            المسافة: 2.5-3.0 Å | الطاقة: 12-30 kJ/mol<br>
                            مثال: C=O∙∙∙H-N (في α-ملف) أو مع الماء<br>
                            <br>
                            <strong>التفاعلات الأيونية (الكهروستاتيكية):</strong><br>
                            المسافة: 2.8 Å | الطاقة: 20 kJ/mol (في الماء) → 200 kJ/mol (في وسط غير قطبي)<br>
                            مثال: NH₃⁺ (Lys) ∙∙∙ COO⁻ (Asp)<br>
                            <br>
                            <strong>قوى فان دير فالس:</strong><br>
                            المسافة: 3-4 Å | الطاقة: 0.4-4 kJ/mol (ضعيفة لكنها تراكمية)<br>
                            مثال: بين السلاسل الجانبية الكارهة للماء<br>
                            <br>
                            <strong>التفاعلات الكارهة للماء:</strong><br>
                            ليست قوى جذب بل نتيجة لاستبعاد الماء<br>
                            الطاقة: ≈ 4 kJ/mol لكل مجموعة CH₂<br>
                            مثال: تجمع السلاسل الجانبية الهيدروفوبية في الداخل
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">المستويات البنيوية للبروتينات</h3>
                        
                        <h4 style="color:#60a5fa">4.1. البنية الأولية (Primary Structure)</h4>
                        <ul>
                            <li>تسلسل الأحماض الأمينية في السلسلة البيبتيدية</li>
                            <li>تحدد بالرموز المكونة من 3 أو 1 حرف</li>
                            <li>المعلومات مشفرة في المورثة المقابلة</li>
                            <li>أي تغيير (طفرة) يمكن أن يغير البنية والوظيفة</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">4.2. البنية الثانوية (Secondary Structure)</h4>
                        
                        <p><strong>α-ملف (α-Helix):</strong></p>
                        <ul>
                            <li>بنية حلزونية يمينية (نادراً يسارية)</li>
                            <li>3.6 حمض أميني لكل دورة، ارتفاع الدورة = 5.4 Å</li>
                            <li>روابط هيدروجينية داخل السلسلة بين C=O للحمض i و N-H للحمض i+4</li>
                            <li>متوازية مع محور الحلزون</li>
                            <li>السلاسل الجانبية تتجه للخارج</li>
                            <li>تثبيت بواسطة Pro (يكسرها)، Gly (يعطي مرونة)</li>
                        </ul>
                        
                        <p><strong>الصفيحة β (β-Sheet):</strong></p>
                        <ul>
                            <li>بنية ممسوحة (extended)</li>
                            <li>روابط هيدروجينية بين سلاسل مختلفة أو أجزاء مختلفة من نفس السلسلة</li>
                            <li><strong>أنواع:</strong>
                                <ul>
                                    <li><strong>متوازية:</strong> نفس الاتجاه من N إلى C</li>
                                    <li><strong>عكسية التوازي:</strong> اتجاهات متعاكسة</li>
                                    <li><strong>مختلطة:</strong> مزيج من النوعين</li>
                                </ul>
                            </li>
                            <li>المسافة بين الأحماض الأمينية المتجاورة = 3.5 Å</li>
                            <li>السلاسل الجانبية تتناوب لأعلى ولأسفل</li>
                        </ul>
                        
                        <p><strong>المنعطفات β (β-Turns) والإنحناءات:</strong></p>
                        <ul>
                            <li>تغيير اتجاه السلسلة البيبتيدية (عادة 180°)</li>
                            <li>تحتوي عادة على 4 أحماض أمينية</li>
                            <li>رابطة هيدروجينية بين C=O للحمض i و N-H للحمض i+3</li>
                            <li>غالباً تحتوي على Pro في الموضع 2 و Gly في الموضع 3</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">4.3. البنية الثالثية (Tertiary Structure)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>خصائص البنية الثالثية:</strong><br><br>
                            <strong>التنظيم الفراغي ثلاثي الأبعاد</strong> للسلسلة البيبتيدية الواحدة<br>
                            <br>
                            <strong>التفاعلات المثبتة:</strong><br>
                            1. التفاعلات الكارهة للماء (تجمع الهيدروفوبيك)<br>
                            2. الروابط الهيدروجينية<br>
                            3. التفاعلات الأيونية<br>
                            4. جسور الكبريت (لكل سيستئين)<br>
                            5. قوى فان دير فالس<br>
                            <br>
                            <strong>المجالات (Domains):</strong> وحدات بنائية ووظيفية مستقلة<br>
                            <strong>اللب الهيدروفوبيك:</strong> مركز البروتين غالباً كاره للماء<br>
                            <strong>السطح:</strong> غالباً محب للماء للذوبان في الوسط المائي
                        </div>
                        
                        <h4 style="color:#60a5fa">4.4. البنية الرابعة (Quaternary Structure)</h4>
                        
                        <ul>
                            <li>تنظيم البروتينات متعددة الوحدات (oligomeric proteins)</li>
                            <li>التفاعلات بين الوحدات الفرعية (تشابه البنية الثالثية)</li>
                            <li><strong>أنواع الوحدات:</strong>
                                <ul>
                                    <li><strong>متجانسة (homomeric):</strong> وحدات متطابقة (مثل الهيموغلوبين α₂β₂)</li>
                                    <li><strong>غير متجانسة (heteromeric):</strong> وحدات مختلفة</li>
                                </ul>
                            </li>
                            <li><strong>المزايا:</strong>
                                <ul>
                                    <li>التعاونية (cooperativity) في الربط</li>
                                    <li>الاستقرار (تقليل نسبة السطح إلى الحجم)</li>
                                    <li>التنظيم متعدد المواقع (multisite regulation)</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية:</strong> مشكلة طي البروتين (Protein folding problem) هي من أكبر التحديات في البيولوجيا الجزيئية. تتطلب بعض البروتينات مساعدات جزيئية تسمى chaperones للطي الصحيح. الطي الخاطئ يؤدي إلى أمراض مثل Alzheimer (لويحات أميلويد) و Creutzfeldt-Jakob (بروتينات بريون).
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">طرق دراسة بنية البروتينات</h3>
                        
                        <ul>
                            <li><strong>تحديد التسلسل:</strong> تسلسل إدمان، تسلسل جيني</li>
                            <li><strong>البنية الثانوية:</strong> دائرية الاستقطاب (CD)، FTIR</li>
                            <li><strong>البنية الثالثية والرابعة:</strong> XRD (بلورات الأشعة السينية)، RMN، مجهر إلكتروني</li>
                            <li><strong>البنية في المحلول:</strong> SAXS، DLS</li>
                            <li><strong>التفاعلات:</strong> ITC، SPR، FRET</li>
                        </ul>
                    `
                },
                
                // ... بقية الدروس بنفس المستوى من التفصيل ...
                
                {
                    id: "1.9",
                    title: "9. فقدان المناعة المكتسبة (SIDA)",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">فيروس العوز المناعي البشري ومتلازمة العوز المناعي المكتسب</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> <span style="color:#facc15">فيروس العوز المناعي البشري (VIH)</span> هو فيروس رجعي يستهدف بشكل رئيسي الخلايا اللمفاوية التائية المساعدة (LT4 أو CD4⁺)، مما يؤدي إلى تدمير تدريجي للجهاز المناعي وبالتالي الإصابة بـ <span style="color:#facc15">متلازمة العوز المناعي المكتسب (SIDA)</span>.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. التصنيف والبنية</h4>
                        
                        <p><strong>التصنيف:</strong></p>
                        <ul>
                            <li><strong>العائلة:</strong> Retroviridae (فيروسات رجعية)</li>
                            <li><strong>تحت العائلة:</strong> Lentivirinae (فيروسات بطيئة)</li>
                            <li><strong>النوع:</strong> VIH-1 (الأكثر انتشاراً عالمياً) و VIH-2 (غالباً في غرب أفريقيا)</li>
                            <li><strong>المجموعات:</strong> M (الرئيسية)، O (الخارجية)، N (غير M/O)</li>
                        </ul>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>البنية الفيروسية لـ VIH:</strong><br><br>
                            <strong>النواة (Core):</strong><br>
                            • جينوم RNA مزدوج السلسلة (9.2 كيلو قاعدة)<br>
                            • إنزيمات: النسخ العكسي، الإنزيم الدامج، بروتياز<br>
                            • بروتين p24 (بروتين القفيصة)<br>
                            <br>
                            <strong>الغلاف الفيروسي (Envelope):</strong><br>
                            • غشاء دهني ثنائي الطبقة مأخوذ من الخلية المضيفة<br>
                            • بروتينات سكرية: gp120 (الارتباط) + gp41 (الاندماج)<br>
                            <br>
                            <strong>البروتينات الإضافية:</strong><br>
                            • p17 (بروتين المصفوفة)<br>
                            • عوامل تنظيمية: Tat, Rev, Nef, Vif, Vpr, Vpu<br>
                            <br>
                            ═════════════════════════════════════════════<br>
                            [غلاف]─[مصفوفة]─[قفيصة]─[RNA+إنزيمات]<br>
                            ═════════════════════════════════════════════
                        </div>
                        
                        <h4 style="color:#60a5fa">1.2. الجينوم والجينات</h4>
                        
                        <p><strong>الجينات التركيبية (Structural):</strong></p>
                        <ul>
                            <li><strong>gag:</strong> بروتينات القفيصة والمصفوفة (p24, p17)</li>
                            <li><strong>pol:</strong> الإنزيمات (النسخ العكسي، الإنزيم الدامج، البروتياز)</li>
                            <li><strong>env:</strong> بروتينات الغلاف (gp160 → gp120 + gp41)</li>
                        </ul>
                        
                        <p><strong>الجينات التنظيمية (Regulatory):</strong></p>
                        <ul>
                            <li><strong>tat:</strong> منشط نسخي (Trans-Activator of Transcription)</li>
                            <li><strong>rev:</strong> منظم تصدير الفيروسات (Regulator of Virion Expression)</li>
                        </ul>
                        
                        <p><strong>الجينات الإضافية (Accessory):</strong></p>
                        <ul>
                            <li><strong>nef:</strong> عامل سلبية (Negative Factor) - يخفض تعبير MHC-I</li>
                            <li><strong>vif:</strong> عامل عدوى الفيروس (Viral Infectivity Factor)</li>
                            <li><strong>vpr:</strong> بروتين R الفيروسي (Viral Protein R)</li>
                            <li><strong>vpu:</strong> بروتين U الفيروسي (Viral Protein U) - خاص بـ VIH-1</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">دورة حياة فيروس VIH</h3>
                        
                        <h4 style="color:#60a5fa">2.1. الارتباط والاختراق</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>آلية الارتباط بالخلية المضيفة:</strong><br><br>
                            1. <strong>الارتباط الأولي:</strong><br>
                            gp120 على VIH → CD4 على LT4 (تقارب عالي: Kd ≈ 4 nM)<br>
                            <br>
                            2. <strong>التغيرات التشكلية في gp120:</strong><br>
                            كشف مواقع الارتباط للمستقبلات الكيميائية<br>
                            <br>
                            3. <strong>الارتباط المشترك (Co-receptor Binding):</strong><br>
                            • غالباً: CCR5 (لسلالات M-tropic)<br>
                            • أو: CXCR4 (لسلالات T-tropic)<br>
                            <br>
                            4. <strong>اندماج الأغشية:</strong><br>
                            تغيرات في gp41 → تكوين hairpin structure<br>
                            تقريب الغشاء الفيروسي والهيولي ← اندماج<br>
                        </div>
                        
                        <h4 style="color:#60a5fa">2.2. النسخ العكسي والتكامل</h4>
                        
                        <p><strong>النسخ العكسي (Reverse Transcription):</strong></p>
                        <ol>
                            <li><strong>تخليق السلسلة (−)DNA:</strong> انطلاق من tRNA<sup>lys</sup> المرتبط بـ RNA الفيروسي</li>
                            <li><strong>تحلل RNA: </strong> نشاط RNase H لإنزيم النسخ العكسي</li>
                            <li><strong>قفزة السلسلة الأولى:</strong> انتقال DNA الناشئ إلى الطرف 3' من RNA</li>
                            <li><strong>تخليق السلسلة (+)DNA:</strong> تكوين DNA مزدوج السلسلة</li>
                            <li><strong>خصائص النسخ العكسي:</strong>
                                <ul>
                                    <li>لا نشاط تصحيح (معدل خطأ عال: 10⁻⁴ إلى 10⁻⁵)</li>
                                    <li>تعدد الأشكال الجيني السريع</li>
                                    <li>مقاومة للأدوية المضادة للفيروسات القهقرية</li>
                                </ul>
                            </li>
                        </ol>
                        
                        <p><strong>التكامل في الجينوم المضيف:</strong></p>
                        <ul>
                            <li>نقل مركب DNA الفيروسي/الإنزيم الدامج إلى النواة</li>
                            <li>يقوم الإنزيم الدامج بقص DNA المضيف وإدراج DNA الفيروسي</li>
                            <li>التكامل العشوائي (يفضل مناطق نشطة نسخياً)</li>
                            <li>يصبح DNA الفيروسي جزءاً دائماً من جينوم الخلية</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.3. التعبير والتجميع</h4>
                        
                        <ol>
                            <li><strong>النسخ:</strong> بواسطة RNA بوليميراز II للخلية المضيفة</li>
                            <li><strong>المعالجة:</strong> الربط، الإضافة الطرفية</li>
                            <li><strong>الترجمة:</strong> تخليق بروتينات فيروسية على ريبوزومات الخلية</li>
                            <li><strong>المعالجة البروتينية:</strong> تشطير عديد البروتين Gag-Pol بواسطة البروتياز الفيروسي</li>
                            <li><strong>التجميع:</strong> على الغشاء البلازمي حيث تتجمع المكونات</li>
                            <li><strongالتحرر:</strong> التبرعم (budding) من الخلية</li>
                            <li><strong>النضج:</strong> تشطير نهائي بواسطة البروتياز الفيروسي</li>
                        </ol>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">آليات تدمير الجهاز المناعي</h3>
                        
                        <h4 style="color:#60a5fa">3.1. الاستهداف المباشر لـ LT4</h4>
                        
                        <ul>
                            <li><strong>التكاثر الفيروسي داخل الخلية:</strong> يؤدي إلى تحلل الخلية</li>
                            <li><strong>تكوين سينسيتيا (syncytia):</strong> اندماج خلايا مصابة مع خلايا سليمة عبر gp120/gp41</li>
                            <li><strong>الموت المبرمج (Apoptosis):</strong>
                                <ul>
                                    <li>زيادة تعبير Fas ligand على الخلايا المصابة</li>
                                    <li>تنشيط مسارات إشارات الموت داخل الخلية</li>
                                    <li>تأثير بروتين Tat في تحفيز apoptosis</li>
                                </ul>
                            </li>
                            <li><strong>الهجوم المناعي:</strong> القضاء على الخلايا المصابة بواسطة LTc و NK</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.2. التأثيرات غير المباشرة</h4>
                        
                        <ul>
                            <li><strong>ضعف تنشيط الخلايا B:</strong> نقص المساعدة من LT4</li>
                            <li><strong>اضطراب في تنظيم الاستجابة:</strong> خلل في التوازن بين Th1 و Th2</li>
                            <li><strong>تأثير على الخلايا المتغصنة والبلعميات:</strong> نقص في تقديم المستضد</li>
                            <li><strong>استنفاذ الجهاز المناعي:</strong> التحفيز المستمر يؤدي إلى إعياء مناعي</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.3. الاستراتيجيات الهروبية للفيروس</h4>
                        
                        <ul>
                            <li><strong>التغير المستضدي السريع:</strong> بسبب معدل الطفرات العالي</li>
                            <li><strong>الإخفاء في الخلايا:</strong> العداوي الكامنة (مخزون فيروسية)</li>
                            <li><strong>الاختباء في الأعضاء المحمية:</strong> الجهاز العصبي المركزي، الخصيتين</li>
                            <li><strong>تثبيط تعبير MHC-I:</strong> بواسطة بروتين Nef → هروب من LTc</li>
                            <li><strong>تقليل تعبير CD4:</strong> لمنع العدوى الفائقة</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">مراحل الإصابة بفيروس VIH</h3>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>المنحنى البياني لتطور العدوى:</strong><br><br>
                            [محور Y: تركيز فيروسي / عدد LT4] ▲<br>
                            [محور X: الوقت بعد الإصابة] →<br>
                            <br>
                            <strong>المرحلة 1: الإصابة الحادة (أسبوع 2-4):</strong><br>
                            ████████████ VIH RNA (ذروة: 10⁶-10⁷ نسخة/مل)<br>
                            ████ LT4 (انخفاض سريع)<br>
                            <br>
                            <strong>المرحلة 2: الكمون السريري (سنوات 1-10):</strong><br>
                            ██ VIH RNA (مستقر: 10³-10⁵ نسخة/مل)<br>
                            ████████ LT4 (انخفاض بطيء: 50-100 خلية/مم³/سنة)<br>
                            <br>
                            <strong>المرحلة 3: SIDA (LT4 < 200 خلية/مم³):</strong><br>
                            █████████ VIH RNA (زيادة سريعة)<br>
                            █ LT4 (انخفاض حاد)<br>
                            <br>
                            ═════════════════════════════════════════════<br>
                            نقطة التحول: عادة عند LT4 < 500 خلية/مم³
                        </div>
                        
                        <h4 style="color:#60a5fa">4.1. المرحلة الحادة (Primary Infection)</h4>
                        
                        <ul>
                            <li><strong>المدة:</strong> 2-4 أسابيع بعد الإصابة</li>
                            <li><strong>الأعراض:</strong> تشبه الإنفلونزا (حمى، تعب، طفح، التهاب حلق، تورم عقد لمفاوية)</li>
                            <li><strong>الفيروسي:</strong> ذروة الحمل الفيروسي (10⁶-10⁷ نسخة RNA/مل)</li>
                            <li><strong>المناعي:</strong> انخفاض حاد في LT4، ظهور أجسام مضادة (مصلية)</li>
                            <li><strong>نافذة مصلية:</strong> الفترة بين الإصابة وإمكانية الكشف (3-8 أسابيع)</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">4.2. مرحلة الكمون السريري (Clinical Latency)</h4>
                        
                        <ul>
                            <li><strong>المدة:</strong> 1-10 سنوات (أطول مع العلاج)</li>
                            <li><strong>الأعراض:</strong> قليلة أو معدومة (حامل فيروسي بدون أعراض)</li>
                            <li><strong>الفيروسي:</strong> مستوى ثابت (steady state) يحدده التوازن بين التكاثر والإزالة</li>
                            <li><strong>المناعي:</strong> انخفاض بطيء في LT4 (50-100 خلية/مم³/سنة)</li>
                            <li><strong>التكاثر الفيروسي النشط:</strong> ≈ 10⁹ فيروس/يوم، ≈ 10⁷ خلية مصابة/يوم</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">4.3. مرحلة SIDA (متلازمة العوز المناعي المكتسب)</h4>
                        
                        <p><strong>معايير التشخيص (CDC):</strong></p>
                        <ul>
                            <li>عدد LT4 < 200 خلية/مم³ (المعيار الأساسي)</li>
                            <li>أو الإصابة بعدوى انتهازية محددة</li>
                            <li>أو الإصابة بأورام مرتبطة بـ VIH</li>
                        </ul>
                        
                        <p><strong>الأمراض الانتهازية:</strong></p>
                        <ul>
                            <li><strong>الفطرية:</strong> Pneumocystis jirovecii pneumonia (PCP)، داء المبيضات</li>
                            <li><strong>الفيروسية:</strong> CMV (شبكية)، HSV (مستعصية)، VZV</li>
                            <li><strong>البكتيرية:</strong> Mycobacterium avium complex (MAC)، السل</li>
                            <li><strong>الطفيلية:</strong> Toxoplasma gondii (داء المقوسات الدماغي)</li>
                            <li><strong>الأورام:</strong> ساركوما كابوزي، لمفوما</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">التشخيص والعلاج</h3>
                        
                        <h4 style="color:#60a5fa">5.1. الفحوصات التشخيصية</h4>
                        
                        <ul>
                            <li><strong>الفحوصات المصلية:</strong>
                                <ul>
                                    <li>ELISA: فحص مسحي حساس</li>
                                    <li>Western blot: فحص تأكيدي نوعي</li>
                                    <li>الاختبارات السريعة: نتائج في 20 دقيقة</li>
                                </ul>
                            </li>
                            <li><strong>فحوصات الحمض النووي:</strong>
                                <ul>
                                    <li>PCR الكمي: قياس الحمل الفيروسي</li>
                                    <li>PCR النوعي: كشف DNA فيروس متكامل</li>
                                </ul>
                            </li>
                            <li><strong>الفحوصات المناعية:</strong>
                                <ul>
                                    <li>عدد LT4 (CD4⁺): مؤشر تقدم المرض</li>
                                    <li>نسبة CD4/CD8: تنخفض مع تقدم المرض</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">5.2. الأدوية المضادة للفيروسات القهقرية (ARV)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>أنواع الأدوية وأهدافها:</strong><br><br>
                            <strong>1. مثبطات النسخ العكسي النوكليوزيدية (NRTIs):</strong><br>
                            • آلية: نظائر نوكليوزيدية ← إنهاء سلسلة DNA الناشئة<br>
                            • أمثلة: زيدوفودين (AZT)، لاميفودين (3TC)، تينوفوفير<br>
                            <br>
                            <strong>2. مثبطات النسخ العكسي غير النوكليوزيدية (NNRTIs):</strong><br>
                            • آلية: ارتباط غير تنافسي بالإنزيم ← تغيير تشكلي<br>
                            • أمثلة: نيفيرابين، إيفافيرينز<br>
                            <br>
                            <strong>3. مثبطات البروتياز (PIs):</strong><br>
                            • آلية: تثبيط نشاط البروتياز الفيروسي ← فيروسات غير ناضجة<br>
                            • أمثلة: إندينافير، ريتونافير<br>
                            <br>
                            <strong>4. مثبطات الدمج (Fusion Inhibitors):</strong><br>
                            • آلية: تثبيط اندماج الغشاء الفيروسي مع الهيولي<br>
                            • أمثال: إنفوفيرتيد (T-20)<br>
                            <br>
                            <strong>5. مثبطات الإنزيم الدامج (INSTIs):</strong><br>
                            • آلية: تثبيط تكامل DNA الفيروسي في جينوم المضيف<br>
                            • أمثلة: رالتغرافير<br>
                            <br>
                            <strong>6. مثبطات مستقبلات CCR5:</strong><br>
                            • آلية: منع ارتباط الفيروس بالمستقبل المشترك<br>
                            • أمثلة: مارافيروك
                        </div>
                        
                        <h4 style="color:#60a5fa">5.3. العلاج المركب (cART)</h4>
                        
                        <ul>
                            <li><strong>المبدأ:</strong> HAART (Highly Active Antiretroviral Therapy)</li>
                            <li><strong>الاستراتيجية:</strong> 3 أدوية على الأقل من فئتين مختلفتين</li>
                            <li><strong>الأهداف:</strong>
                                <ul>
                                    <li>خفض الحمل الفيروسي إلى مستوى غير قابل للكشف (<50 نسخة/مل)</li>
                                    <li>استعادة عدد LT4 والوظيفة المناعية</li>
                                    <li>منع تطور المقاومة الدوائية</li>
                                    <li>تحسين نوعية الحياة والبقاء على قيد الحياة</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">5.4. التحديات والاتجاهات المستقبلية</h4>
                        
                        <ul>
                            <li><strong>المقاومة الدوائية:</strong> بسبب معدل الطفرات العالي</li>
                            <li><strong>الآثار الجانبية:</strong> سمية، متلازمة أيضية، سمية متقدرية</li>
                            <li><strong>المخازن الفيروسية:</strong> الخلايا المصابة كامناً (لا تتأثر بالأدوية الحالية)</li>
                            <li><strong>الاتجاهات البحثية:</strong>
                                <ul>
                                    <li>لقاحات وقائية وعلاجية</li>
                                    <li>علاجات تعمل على استئصال الفيروس (العلاج الشافي)</li>
                                    <li>العلاج الجيني (مثل CCR5 Δ32)</li>
                                    <li>الأجسام المضادة واسعة المفعول</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>الوقاية والتثقيف:</strong> تعد الوقاية أساسية في مكافحة SIDA وتشمل: التثقيف الجنسي، استخدام الواقي الذكري، فحص الدم ومنتجاته، برامج تبادل الحقن، الوقاية الدوائية قبل التعرض (PrEP)، والوقاية الدوائية بعد التعرض (PEP).
                        </div>
                    `
                }
            ],
            2: [
                {
                    header: true,
                    title: "المجال 1 (تكملة) + المجال 2: التحولات الطاقوية"
                },
                
                {
                    id: "2.1",
                    title: "1. كمون الراحة وكمون العمل",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الاستقطاب الغشائي والإشارات الكهربائية في الخلايا العصبية</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> تعتمد القدرة على توليد ونقل الإشارات الكهربائية في الخلايا العصبية على <span style="color:#facc15">الاستقطاب الغشائي</span> الناتج عن التوزيع غير المتكافئ للأيونات عبر الغشاء البلازمي، والمحافظ عليه بواسطة مضخات أيونية وناقلات.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. التوزيع الشاردي عبر الغشاء العصبي</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>التركيزات الأيونية (عصبون الثدييات):</strong><br><br>
                            <strong>الداخل الخلوي:</strong><br>
                            K⁺: 140 mM (مرتفع)<br>
                            Na⁺: 10-15 mM (منخفض)<br>
                            Cl⁻: 4-30 mM (منخفض)<br>
                            A⁻: 100-150 mM (أنيونات عضوية)<br>
                            <br>
                            <strong>الخارج الخلوي:</strong><br>
                            K⁺: 3.5-5 mM (منخفض)<br>
                            Na⁺: 140-150 mM (مرتفع)<br>
                            Cl⁻: 110-120 mM (مرتفع)<br>
                            Ca²⁺: 1.2-2 mM (مرتفع)<br>
                            <br>
                            <strong>نسبة التركيز:</strong><br>
                            Na⁺: خارج/داخل ≈ 10:1<br>
                            K⁺: داخل/خارج ≈ 30:1<br>
                            Cl⁻: خارج/داخل ≈ 10:1
                        </div>
                        
                        <h4 style="color:#60a5fa">1.2. مضخة Na⁺/K⁺ ATPase</h4>
                        
                        <p><strong>البنية والوظيفة:</strong></p>
                        <ul>
                            <li><strong>التركيب:</strong> بروتين غشائي مكون من وحدتين α و β</li>
                            <li><strong>المجالات:</strong> مجال ارتباط ATP، مجال ارتباط أيونات</li>
                            <li><strong>آلية العمل:</strong> مضخة كهروجينية تنقل 3 Na⁺ للخارج و 2 K⁺ للداخل</li>
                            <li><strong>استهلاك الطاقة:</strong> تحلل ATP واحد لكل دورة (≈ 30% من طاقة الدماغ)</li>
                        </ul>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>دورة عمل مضخة Na⁺/K⁺ ATPase:</strong><br><br>
                            <strong>التشكل E1:</strong><br>
                            1. ارتباط 3 Na⁺ من الداخل<br>
                            2. ارتباط ATP ← فسفرة Asp (D369)<br>
                            3. تغيير تشكلي ← E1-P إلى E2-P<br>
                            <br>
                            <strong>التشكل E2:</strong><br>
                            4. إطلاق 3 Na⁺ للخارج<br>
                            5. ارتباط 2 K⁺ من الخارج<br>
                            6. نزع الفسفرة ← عودة إلى E1<br>
                            7. إطلاق 2 K⁺ للداخل<br>
                            <br>
                            ═════════════════════════════════<br>
                            <strong>صافي النقل:</strong> 3 Na⁺ خارج : 2 K⁺ داخل<br>
                            <strong>تأثير على الجهد:</strong> تجايهي (يصبح داخل الخلية أكثر سلبية)
                        </div>
                        
                        <h4 style="color:#60a5fa">1.3. كمون الراحة (Resting Membrane Potential)</h4>
                        
                        <p><strong>تعريف:</strong> الفرق في الجهد الكهربائي عبر الغشاء البلازمي عندما تكون الخلية في حالة راحة (لا توجد منبهات).</p>
                        
                        <p><strong>معادلة نرنست:</strong></p>
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            E<sub>X</sub> = (RT/zF) × ln([X]<sub>out</sub>/[X]<sub>in</sub>)<br><br>
                            <strong>حيث:</strong><br>
                            R = ثابت الغازات (8.314 J/mol·K)<br>
                            T = درجة الحرارة بالكلفن (310 K لجسم الإنسان)<br>
                            z = شحنة الأيون<br>
                            F = ثابت فاراداي (96485 C/mol)<br><br>
                            
                            <strong>عند 37°C:</strong><br>
                            E<sub>K</sub> = 61.5 × log([K⁺]<sub>out</sub>/[K⁺]<sub>in</sub>) ≈ -90 mV<br>
                            E<sub>Na</sub> = 61.5 × log([Na⁺]<sub>out</sub>/[Na⁺]<sub>in</sub>) ≈ +60 mV<br>
                            E<sub>Cl</sub> = -61.5 × log([Cl⁻]<sub>out</sub>/[Cl⁻]<sub>in</sub>) ≈ -70 mV
                        </div>
                        
                        <p><strong>معادلة غولدمان-هودجكين-كاتز:</strong></p>
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            V<sub>m</sub> = (RT/F) × ln( (P<sub>K</sub>[K⁺]<sub>o</sub> + P<sub>Na</sub>[Na⁺]<sub>o</sub> + P<sub>Cl</sub>[Cl⁻]<sub>i</sub>) / (P<sub>K</sub>[K⁺]<sub>i</sub> + P<sub>Na</sub>[Na⁺]<sub>i</sub> + P<sub>Cl</sub>[Cl⁻]<sub>o</sub>) )<br><br>
                            
                            <strong>للعصبون في الراحة:</strong><br>
                            P<sub>K</sub> : P<sub>Na</sub> : P<sub>Cl</sub> ≈ 1 : 0.04 : 0.45<br>
                            V<sub>m</sub> ≈ -65 إلى -70 mV
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">كمون العمل (Action Potential)</h3>
                        
                        <h4 style="color:#60a5fa">2.1. القنوات الأيونية الفولطية</h4>
                        
                        <p><strong>قنوات Na⁺ الفولطية:</strong></p>
                        <ul>
                            <li><strong>التركيب:</strong> بروتين غشائي واحد (α-وحدة) مع 4 مجالات (I-IV)</li>
                            <li><strong>البوابة:</strong> بوابة تنشيط (m) + بوابة تعطيل (h)</li>
                            <li><strong>الاستجابة:</strong> تنشيط سريع عند ≈ -55 mV (عتبة التنبيه)</li>
                            <li><strong>تعطيل:</strong> تلقائي بعد 1-2 مللي ثانية</li>
                        </ul>
                        
                        <p><strong>قنوات K⁺ الفولطية (متأخرة):</strong></p>
                        <ul>
                            <li><strong>التركيب:</strong> رباعية من الوحدات المتشابهة</li>
                            <li><strong>البوابة:</strong> بوابة تنشيط واحدة (n)</li>
                            <li><strong>الاستجابة:</strong> تنشيط أبطأ من قنوات Na⁺</li>
                            <li><strong>تعطيل:</strong> بطيء، يساهم في فرط الاستقطاب</li>
                        </ul>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>خصائص القنوات الفولطية:</strong><br><br>
                            <strong>قنوات Na⁺:</strong><br>
                            • التوصيلية: 15-20 pS<br>
                            • وقت التنشيط: 0.1-0.2 ms<br>
                            • وقت التعطيل: 1-2 ms<br>
                            • معدل التوصيل: 10⁷ أيون/ثانية<br>
                            <br>
                            <strong>قنوات K⁺ (المتأخرة):</strong><br>
                            • التوصيلية: 10-20 pS<br>
                            • وقت التنشيط: 1-2 ms<br>
                            • وقت التعطيل: 10-100 ms<br>
                            • معدل التوصيل: 10⁷-10⁸ أيون/ثانية
                        </div>
                        
                        <h4 style="color:#60a5fa">2.2. مراحل كمون العمل</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>منحنى كمون العمل:</strong><br><br>
                            الجهد (mV) ▲<br>
                            +40 ┤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀◉ (الذروة)<br>
                            &nbsp;&nbsp;0 ┤⠀⠀⠀⠀⠀⠀⠀⠀⠀◉╱╲◉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>
                            -55 ┤⠀⠀◉╱⠀⠀⠀⠀⠀⠀⠀╲◉⠀⠀⠀⠀⠀⠀<br>
                            -70 ┤◉╱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀╲◉⠀⠀⠀⠀<br>
                            -90 ┤⠀⠀╲⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀◉╱⠀⠀<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;└─────────────────────────────▶ الزمن (ms)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5<br><br>
                            
                            <strong>المحطات:</strong><br>
                            1. العتبة (-55 mV) ← 2. زوال الاستقطاب ← 3. الذروة (+40 mV)<br>
                            4. عودة الاستقطاب ← 5. فرط الاستقطاب ← 6. العودة للراحة
                        </div>
                        
                        <p><strong>المرحلة 1: زوال الاستقطاب (Depolarization)</strong></p>
                        <ul>
                            <li>وصول الجهد إلى العتبة (-55 mV)</li>
                            <li>فتح سريع لقنوات Na⁺ الفولطية</li>
                            <li>تدفق Na⁺ للداخل (تيار داخلي موجب)</li>
                            <li>تغير الجهد من -70 mV إلى +40 mV</li>
                            <li>استجابة كل شيء أو لا شيء (All-or-None)</li>
                        </ul>
                        
                        <p><strong>المرحلة 2: عودة الاستقطاب (Repolarization)</strong></p>
                        <ul>
                            <li>تعطيل تلقائي لقنوات Na⁺ (إغلاق بوابة h)</li>
                            <li>فتح متأخر لقنوات K⁺ الفولطية</li>
                            <li>تدفق K⁺ للخارج (تيار خارجي موجب)</li>
                            <li>عودة الجهد نحو قيم الراحة</li>
                        </ul>
                        
                        <p><strong>المرحلة 3: فرط الاستقطاب (Hyperpolarization)</strong></p>
                        <ul>
                            <li>بقاء بعض قنوات K⁺ مفتوحة</li>
                            <li>هبوط الجهد إلى -80 أو -90 mV</li>
                            <li>فترة مقاومة مطلقة (Absolute Refractory Period)</li>
                            <li>عدم إمكانية إحداث كمون عمل جديد</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.3. انتقال كمون العمل</h4>
                        
                        <p><strong>التوصيل المستمر (في الخلايا غير الميلينية):</strong></p>
                        <ul>
                            <li>كمون العمل يولد تيارات محلية</li>
                            <li>إزالة استقطاب المناطق المجاورة</li>
                            <li>وصولها إلى العتبة ← كمون عمل جديد</li>
                            <li>السرعة: 0.5-2 m/s (بطيئة)</li>
                        </ul>
                        
                        <p><strong>التوصيل القفزي (في الخلايا الميلينية):</strong></p>
                        <ul>
                            <li>غلاف ميليني يعزل المحوار (عقد رانفييه)</li>
                            <li>كمون العمل يقفز بين العقد</li>
                            <li>توفير في الطاقة (إعادة استقطاب مناطق أقل)</li>
                            <li>السرعة: 50-150 m/s (سريعة)</li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية:</strong> قانون هودجكين لأبعاد المحوار: لكي يكون التوصيل فعالاً، يجب أن تكون مقاومة المحوار الداخلية (rᵢ) منخفضة ومقاومة الغشاء (rₘ) عالية. لذلك، المحاور الكبيرة تنقل أسرع. في المحاور الميلينية، سمك الغلاف الميليني ونسبة المسافة بين العقد إلى قطر المحوار (≈100:1) محسوبان بدقة لتحسين السرعة.
                        </div>
                    `
                },
                
                {
                    id: "2.2",
                    title: "2. المشبك الكيميائي",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">انتقال الإشارة العصبية عبر المشابك الكيميائية</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> <span style="color:#facc15">المشبك الكيميائي</span> هو منطقة اتصال متخصصة بين خليتين عصبيتين (أو بين عصبون وخلية مستهدفة) حيث تتحول الإشارة الكهربائية إلى كيميائية ثم تعود إلى كهربائية، مما يسمح بنقل المعلومات باتجاه واحد مع إمكانية التعديل والتكامل.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. التركيب التشريحي للمشبك</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مكونات المشبك الكيميائي:</strong><br><br>
                            <strong>الطرف قبل المشبكي (Presynaptic Terminal):</strong><br>
                            • حويصلات مشبكية تحتوي على الناقل العصبي<br>
                            • مناطق نشطة (Active Zones) لتجميع الحويصلات<br>
                            • قنوات Ca²⁺ فولطية من نوع N/P/Q<br>
                            • ميتوكوندريا لتوفير ATP<br>
                            <br>
                            <strong>الفجوة المشبكية (Synaptic Cleft):</strong><br>
                            • عرض: 20-40 نانومتر<br>
                            • تحتوي على بروتينات مصفوفة خارج خلوية<br>
                            • إنزيمات تحطيم الناقل العصبي (مثل أستيل كولين إستراز)<br>
                            <br>
                            <strong>الغشاء بعد المشبكي (Postsynaptic Membrane):</strong><br>
                            • مستقبلات للناقل العصبي<br>
                            • كثافة بعد مشبكية (PSD) من البروتينات السقالية<br>
                            • قنوات أيونية معتمدة على الناقل
                        </div>
                        
                        <h4 style="color:#60a5fa">1.2. تصنيف المشابك حسب الناقل العصبي</h4>
                        
                        <ul>
                            <li><strong>كولينية:</strong> أستيل كولين (المشابك العصبية العضلية، مشابك الجهاز العصبي الذاتي)</li>
                            <li><strong>أمينية:</strong> دوبامين، نورأدرينالين، سيروتونين، هيستامين</li>
                            <li><strong>أحماض أمينية:</strong> غلوتامات (مثيرة)، GABA، جلايسين (مثبطة)</li>
                            <li><strong>ببتيدية:</strong> مادة P، إنكفالينات، إندورفينات</li>
                            <li><strong>غازية:</strong> أكسيد النيتريك (NO)، أول أكسيد الكربون (CO)</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">آلية النقل المشبكي</h3>
                        
                        <h4 style="color:#60a5fa">2.1. مرحلة ما قبل المشبكية</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>دورة الحويصلة المشبكية:</strong><br><br>
                            <strong>1. التحميل (Loading):</strong><br>
                            • تخليق الناقل في الهيولى<br>
                            • ضخه في الحويصلات بواسطة ناقلات VGAT/VGLUT/VAChT<br>
                            • استهلاك ATP (مضخة بروتونية تنشئ ΔpH و ΔΨ)<br>
                            <br>
                            <strong>2. الالتحام (Docking):</strong><br>
                            • Rab3/27 تسحب الحويصلة للمنطقة النشطة<br>
                            • مركب SNARE: syntaxin-1 + SNAP-25 على الغشاء<br>
                            • synaptobrevin (VAMP) على الحويصلة<br>
                            <br>
                            <strong>3. الإعداد للإفراز (Priming):</strong><br>
                            • تكوين مركب SNARE رباعي الحلزون<br>
                            • Munc13/18 تنظم العملية<br>
                            • الحويصلة جاهزة للإفراز السريع<br>
                            <br>
                            <strong>4. الإفراز (Exocytosis):</strong><br>
                            • دخول Ca²⁺ ← ارتباط synaptotagmin بالغشاء<br>
                            • اندماج الغشائي ← فتح مسام ← تحرير الناقل
                        </div>
                        
                        <h4 style="color:#60a5fa">2.2. دور الكالسيوم</h4>
                        
                        <p><strong>قنوات Ca²⁺ الفولطية:</strong></p>
                        <ul>
                            <li><strong>النوع:</strong> N, P/Q, R (عالية العتبة) في المشابك العصبية</li>
                            <li><strong>الموقع:</strong> قريبة من المناطق النشطة</li>
                            <li><strong>الاستجابة:</strong> تفتح عند وصول كمون العمل</li>
                            <li><strong>التركيز:</strong> [Ca²⁺] داخل الخلية يرتفع من 100 nM إلى 10-100 µM</li>
                        </ul>
                        
                        <p><strong>مستشعرات الكالسيوم:</strong></p>
                        <ul>
                            <li><strong>سينابتوتاغمين:</strong> مستشعر رئيسي (C2A, C2B مجالات)</li>
                            <li><strong>آلية العمل:</strong> ارتباط بـ Ca²⁺ ← تغير تشكلي ← سحب الحويصلة للغشاء</li>
                            <li><strong>الخصوصية:</strong> synaptotagmin-1 للأستيل كولين والغلوتامات</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.3. تحرير الناقل العصبي</h4>
                        
                        <ul>
                            <li><strong>كمية الناقل:</strong> 1000-10000 جزيء لكل حويصلة</li>
                            <li><strong>وقت الإفراز:</strong> أقل من 1 مللي ثانية بعد دخول Ca²⁺</li>
                            <li><strong>الاحتمالية:</strong> احتمال تحرير (Release Probability, Pr) يتراوح بين 0.1 و 0.9</li>
                            <li><strong>التنظيم:</strong> تعديل بعوامل قبل مشبكية (مثبطة، محفزة)</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الاستجابة بعد المشبكية</h3>
                        
                        <h4 style="color:#60a5fa">3.1. مستقبلات الأستيل كولين النيكوتينية</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>بنية ووظيفة مستقبل nAChR:</strong><br><br>
                            <strong>التركيب:</strong> خماسي من الوحدات (α₂βγδ في العضلات، α₄β₂ في الدماغ)<br>
                            <strong>القناة الأيونية:</strong> انتقائية للكاتيونات (Na⁺, K⁺, Ca²⁺)<br>
                            <strong>آلية العمل:</strong><br>
                            1. ارتباط جزيئي أستيل كولين (لكل α-وحدة)<br>
                            2. تغيير تشكلي ← فتح المسام<br>
                            3. تدفق Na⁺ للداخل (مهيمن) و K⁺ للخارج<br>
                            4. زوال استقطاب ← PPSE (Excitatory Postsynaptic Potential)<br>
                            <br>
                            <strong>الخصائص:</strong><br>
                            • التوصيلية: ≈ 40 pS<br>
                            • وقت الفتح: 1-2 مللي ثانية<br>
                            • العتبة: ≈ 10 µM أستيل كولين
                        </div>
                        
                        <h4 style="color:#60a5fa">3.2. مستقبلات GABA-A</h4>
                        
                        <ul>
                            <li><strong>التركيب:</strong> خماسي من الوحدات (مختلفة التركيبات: غالباً 2α, 2β, 1γ)</li>
                            <li><strong>القناة الأيونية:</strong> انتقائية للأنيونات (Cl⁻ بشكل رئيسي)</li>
                            <li><strong>آلية العمل:</strong> فتح القناة ← دخول Cl⁻ ← فرط استقطاب ← PPSI</li>
                            <li><strong>مواقع التنظيم:</strong> مواقع لبنزوديازيبينات، باربيتورات، كحول</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.3. PPSE و PPSI</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مقارنة بين PPSE و PPSI:</strong><br><br>
                            <strong>PPSE (Excitatory):</strong><br>
                            • الناقل: غلوتامات، أستيل كولين<br>
                            • المستقبل: AMPA، NMDA، nAChR<br>
                            • الأيونات: Na⁺, K⁺, Ca²⁺<br>
                            • تغير الجهد: زوال استقطاب (إلى -40 أو -30 mV)<br>
                            • المدة: 10-50 مللي ثانية<br>
                            • الهدف: تقريب الجهد من عتبة كمون العمل<br>
                            <br>
                            <strong>PPSI (Inhibitory):</strong><br>
                            • الناقل: GABA، جلايسين<br>
                            • المستقبل: GABA-A، جلايسين<br>
                            • الأيونات: Cl⁻ (أحياناً K⁺)<br>
                            • تغير الجهد: فرط استقطاب (إلى -80 أو -90 mV)<br>
                            • المدة: 50-200 مللي ثانية<br>
                            • الهدف: إبعاد الجهد عن عتبة كمون العمل
                        </div>
                        
                        <h4 style="color:#60a5fa">3.4. التكامل المشبكي</h4>
                        
                        <p><strong>التكامل المكاني (Spatial Summation):</strong></p>
                        <ul>
                            <li>دمج PPSEs من مشابك متعددة في نفس الوقت</li>
                            <li>يحدث عند التقاء المحاور على نفس الخلية بعد المشبكية</li>
                            <li>شرط: أن تكون المشابك قريبة مكانياً على الشجيرات</li>
                        </ul>
                        
                        <p><strong>التكامل الزماني (Temporal Summation):</strong></p>
                        <ul>
                            <li>دمج PPSEs متتابعة من نفس المشبك</li>
                            <li>شرط: أن تأتي في تتابع سريع قبل زوال الأول</li>
                            <li>يتطلب معدل إطلاق مرتفع من الخلية قبل المشبكية</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">إنهاء الفعل المشبكي</h3>
                        
                        <h4 style="color:#60a5fa">4.1. آليات إنهاء الإشارة</h4>
                        
                        <ul>
                            <li><strong>الانتشار (Diffusion):</strong> انتشار الناقل بعيداً عن المشبك</li>
                            <li><strong>التحطيم الإنزيمي:</strong>
                                <ul>
                                    <li><strong>أستيل كولين إستراز:</strong> يحلل أستيل كولين إلى كولين + أسيتات</li>
                                    <li><strong>MAO و COMT:</strong> تحطيم الأمينات (دوبامين، نورأدرينالين)</li>
                                </ul>
                            </li>
                            <li><strong>إعادة الامتصاص (Reuptake):</strong>
                                <ul>
                                    <li>ناقلات خاصة على الخلايا قبل المشبكية والخلايا الدبقية</li>
                                    <li>مثال: ناقلات الغلوتامات (EAAT1-5)، GABA (GAT1-4)</li>
                                    <li>تستهلك الطاقة (مقترنة بـ Na⁺)</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">4.2. التعديل المشبكي</h4>
                        
                        <p><strong>تعديل قبل مشبكي (Presynaptic Modulation):</strong></p>
                        <ul>
                            <li><strong>تلقيم راجع سلبي:</strong> ارتباط الناقل بمستقبلات قبل مشبكية</li>
                            <li><strong>تثبيط غير متجانس:</strong> من عصبونات أخرى عبر مشابك محورية محورية</li>
                            <li><strong>تسهيل:</strong> زيادة تحرير الناقل بعد كمونات عمل متتابعة</li>
                        </ul>
                        
                        <p><strong>تعديل بعد مشبكي (Postsynaptic Modulation):</strong></p>
                        <ul>
                            <li><strong>إزالة الحساسية (Desensitization):</strong> تناقص الاستجابة مع التعرض المستمر</li>
                            <li><strong>التعديل الكيميائي:</strong> فسفرة المستقبلات تغير استجابيتها</li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية: المشبك العصبي العضلي</strong><br>
                            هو نوع خاص من المشابك الكيميائية بين العصبون الحركي والألياف العضلية. يتميز بمناطق نشطة كثيرة، إفراز كميات كبيرة من أستيل كولين (≈ 300 حويصلة لكل كمون عمل)، وتوليد PPSE كبير (≈ 70 mV) يكفي دائماً لإحداث كمون عمل في العضلة. توجد مستقبلات nAChR بكثافة عالية (≈ 10⁴/µm²) على طيات بعد مشبكية لزيادة السطح.
                        </div>
                    `
                },
                
                {
                    id: "2.3",
                    title: "3. مقر التركيب الضوئي",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الصانعات الخضراء: مصانع الطاقة الضوئية</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> <span style="color:#facc15">الصانعات الخضراء</span> هي عضيات حقيقية النوى مسؤولة عن <span style="color:#facc15">التركيب الضوئي</span>، تحتوي على أنظمة ضوئية متخصصة تحول الطاقة الضوئية إلى طاقة كيميائية مخزنة في جزيئات ATP و NADPH.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. البنية العامة للصانعة الخضراء</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مكونات الصانعة الخضراء:</strong><br><br>
                            <strong>الغلاف المزدوج:</strong><br>
                            • الغشاء الخارجي: مسامي (porins) يسمح بمرور جزيئات حتى 10 kDa<br>
                            • الغشاء الداخلي: انتقائي، يحتوي على ناقلات متخصصة<br>
                            • الحيز بين الغشائي: مشابه للهيولى<br>
                            <br>
                            <strong>الستروما (Stroma):</strong><br>
                            • سائل داخل الصانعة (pH ≈ 8)<br>
                            • يحتوي على: إنزيمات حلقة كالفن، DNA صانعي، ريبوزومات<br>
                            • تركيزات عالية من Mg²⁺ (لتنشيط RuBisCO)<br>
                            <br>
                            <strong>الثايلاكويدات (Thylakoids):</strong><br>
                            • أكياس غشائية مسطحة (جرانا) أو أنابيب (لاميلات سترومية)<br>
                            • الحيز الثايلاكويدي (لومن): pH ≈ 4-5 أثناء النشاط الضوئي<br>
                            • تحتوي على أصباغ وأنظمة ضوئية
                        </div>
                        
                        <h4 style="color:#60a5fa">1.2. البنية فوق الجزيئية للثايلاكويد</h4>
                        
                        <p><strong>الجرانة (Granum):</strong></p>
                        <ul>
                            <li>كومة من 10-100 ثايلاكويد</li>
                            <li>قطر: 300-600 نانومتر</li>
                            <li>سمك: 200-400 نانومتر</li>
                            <li>الموقع: أنظمة ضوئية II بشكل رئيسي</li>
                        </ul>
                        
                        <p><strong>اللاميلات السترومية (Stromal Lamellae):</strong></p>
                        <ul>
                            <li>ثايلاكويدات مفردة تربط الجرانا</li>
                            <li>تحتوي على أنظمة ضوئية I والسلسلة التنفسية الضوئية</li>
                            <li>تسهل انتقال الإلكترونات بين PSII و PSI</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">1.3. الأصباغ الضوئية</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>أنواع الأصباغ الضوئية وخصائصها:</strong><br><br>
                            <strong>اليخضور أ (Chlorophyll a):</strong><br>
                            • الصيغة: C₅₅H₇₂O₅N₄Mg<br>
                            • الأطياف الامتصاصية: 430 nm (الأزرق)، 662 nm (الأحمر)<br>
                            • الوظيفة: أصباغ التفاعل في مراكز PSII و PSI<br>
                            • الموقع: في جميع النباتات ذات التركيب الضوئي الأكسجيني<br>
                            <br>
                            <strong>اليخضور ب (Chlorophyll b):</strong><br>
                            • الصيغة: C₅₅H₇₀O₆N₄Mg<br>
                            • الأطياف: 453 nm، 642 nm<br>
                            • الوظيفة: أصباغ هوائية، توسيع نطاق الامتصاص<br>
                            • الموقع: النباتات العليا، الطحالب الخضراء<br>
                            <br>
                            <strong>الكاروتينات (Carotenoids):</strong><br>
                            • أنواع: β-كاروتين، زانثوفيلات<br>
                            • الأطياف: 400-500 nm (الأزرق/الأخضر)<br>
                            • الوظيفة: هوائية، حماية من التسمم الضوئي<br>
                            <br>
                            <strong>الفيكوبيلينات (Phycobilins):</strong><br>
                            • في الطحالب الحمراء والسيانوبكتيريا<br>
                            • الأطياف: 500-650 nm (المناطق التي لا يمتصها اليخضور)
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الأنظمة الضوئية</h3>
                        
                        <h4 style="color:#60a5fa">2.1. تركيب النظام الضوئي II (PSII)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مركز تفاعل PSII (P680):</strong><br><br>
                            <strong>البروتينات الأساسية:</strong><br>
                            • D1 و D2: تحمل P680، فيوفيتين، QA، QB<br>
                            • CP43 و CP47: بروتينات هوائية تحمل اليخضور<br>
                            • بروتينات هوائية أخرى (Lhcb)<br>
                            <br>
                            <strong>مركز فصل الشحنة:</strong><br>
                            • P680: زوج من جزيئات اليخضور a (Chl a)<br>
                            • فيوفيتين (Pheo a): مستقبل أولي للإلكترون<br>
                            • QA: فيلوكينون مرتبط بالحديد (مستقر)<br>
                            • QB: فيلوكينون متحرك (يأخذ 2 إلكترون و 2 بروتون)<br>
                            <br>
                            <strong>مجمع تحلل الماء:</strong><br>
                            • Mn₄CaO₅ عنقود (مكعب منجنيز-كالسيوم)<br>
                            • TyrZ (تيروزين 161 على D1): ناقل إلكترون إلى P680⁺<br>
                            • Cl⁻ و Ca²⁺: عوامل مرافقة ضرورية
                        </div>
                        
                        <h4 style="color:#60a5fa">2.2. تركيب النظام الضوئي I (PSI)</h4>
                        
                        <ul>
                            <li><strong>مركز التفاعل:</strong> P700 (زوج Chl a)<br>
                                • طاقة الإثارة: 1.77 eV (أقل من P680: 1.82 eV)<br>
                                • طول موجة الامتصاص القصوى: 700 nm</li>
                            <li><strong>البروتينات الأساسية:</strong> PsaA و PsaB (مركز التفاعل)<br>
                                • PsaC: يحمل مراكز Fe-S [4Fe-4S]<br>
                                • PsaD و PsaE: ارتباط بفيريدوكسين</li>
                            <li><strong>مستقبلات الإلكترون:</strong> A₀ (Chl a)، A₁ (فيلوكينون)، F<sub>X</sub>، F<sub>A</sub>، F<sub>B</sub> (مراكز Fe-S)</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.3. مجمعات الهوائيات الضوئية</h4>
                        
                        <p><strong>مبدأ تجميع الضوء:</strong></p>
                        <ul>
                            <li>مئات جزيئات الصباغ لكل مركز تفاعل</li>
                            <li>نقل طاقة رنين فورستر (Förster Resonance Energy Transfer)</li>
                            <li>المسافة المثلى بين الصبغات: 1-2 نانومتر</li>
                            <li>الكفاءة: >95% من الفوتونات الممتصة تصل إلى مركز التفاعل</li>
                        </ul>
                        
                        <p><strong>أنواع مجمعات الهوائيات:</strong></p>
                        <ul>
                            <li><strong>LHCII:</strong> مجمع اليخضور الرئيسي في PSII (ثلاثي)</li>
                            <li><strong>LHCI:</strong> مرتبط بـ PSI (رباعي)</li>
                            <li><strong>مجمعات مكافحة للإجهاد:</strong> CP29، CP26، CP24</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">التنظيم الضوئي</h3>
                        
                        <h4 style="color:#60a5fa">3.1. الحركة الضوئية للجرانة</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>تعديل البنية حسب شدة الضوء:</strong><br><br>
                            <strong>حالة I (ضوء منخفض):</strong><br>
                            • جرانة غير مكدسة (أكثر اتصالاً)<br>
                            • توزيع أكثر تجانساً للأنظمة الضوئية<br>
                            • زيادة نسبة PSII/PSI (أفضل لامتصاص الضوء)<br>
                            • تشجع انتقال الإلكترونات الدوري حول PSI<br>
                            <br>
                            <strong>حالة II (ضوء مرتفع):</strong><br>
                            • جرانة مكدسة بشدة<br>
                            • فصل PSII (في الجرانة) عن PSI (في اللاميلات)<br>
                            • نقل الإلكترونات الخطي يسود<br>
                            • تحمي من التسمم الضوئي<br>
                            <br>
                            <strong>المحفزات:</strong> فسفرة بروتينات LHCII بواسطة كينازات<br>
                            <strong>التأثير:</strong> تغير شحنة السطح ← تنافر كهروستاتيكي
                        </div>
                        
                        <h4 style="color:#60a5fa">3.2. آليات الحماية من الضوء المفرط</h4>
                        
                        <p><strong>إشعاع الفلورة غير الضوئي (NPQ):</strong></p>
                        <ul>
                            <li>تبديد الطاقة الحرارية عبر زرقة الزانثوفيلات</li>
                            <li>دورة زانثوفيل: فيولاكسانثين ↔ زياكسانثين</li>
                            <li>تنشيط بواسطة انخفاض pH اللومن</li>
                            <li>يحمي PSII من التلف الضوئي</li>
                        </ul>
                        
                        <p><strong>إصلاح PSII:</strong></p>
                        <ul>
                            <li>استبدال دوري لبروتين D1 المتلف</li>
                            <li>المعدل: كل 20-30 دقيقة في الضوء القوي</li>
                            <li>يتطلب تفكيك وتجميع جزئي لـ PSII</li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية: نظرية المطبخ والمطعم (Kitchen and Restaurant)</strong><br>
                            تقترح هذه النظرية أن الجرانة (حيث يوجد PSII بكثافة) تعمل كمطبخ ينتج ATP و NADPH، بينما الستروما (حيث تنتشر أنزيمات حلقة كالفن) تعمل كمطعم يستهلك هذه المنتجات. الانتشار المحدود لـ ADP و NADP⁺ بين المناطق يخلق تدرجاً مكانياً يساعد على تنظيم تدفق الإلكترونات بين المسارين الخطي والدوري.
                        </div>
                    `
                },
                
                {
                    id: "2.4",
                    title: "4. المرحلة الكيموضوئية",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">تحويل الطاقة الضوئية إلى طاقة كيميائية</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> في <span style="color:#facc15">المرحلة الكيموضوئية</span> من التركيب الضوئي، تمتص الأصباغ الضوئية الطاقة الضوئية وتستخدمها لدفع نقل الإلكترونات عبر سلسلة من النواقل، مما يؤدي إلى إنتاج <span style="color:#facc15">ATP</span> (عبر الفسفرة الضوئية) و <span style="color:#facc15">NADPH</span> (عبر اختزال NADP⁺).
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. مبدأ Z-scheme</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مخطط Z لتدفق الإلكترونات:</strong><br><br>
                            <strong>PSII (P680):</strong> -0.8 eV → +1.2 eV (بعد الإثارة)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ (إلى فيوفيتين: -0.6 eV)<br>
                            H₂O (0.82 eV) → O₂ + 4H⁺ + 4e⁻ (أكسدة الماء)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑ (تعويض إلكترونات P680⁺)<br>
                            <br>
                            <strong>سلسلة النقل:</strong><br>
                            Pheo → QA → QB → بلاستوكينون (PQ) ← (مخزن بروتونات)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br>
                            Cyt b₆f ← (ضخ بروتونات)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br>
                            بلاستوسيانين (PC) ← (ناقل نحاسي)<br>
                            <br>
                            <strong>PSI (P700):</strong> +0.5 eV → -1.3 eV (بعد الإثارة)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br>
                            A₀ → A₁ → F<sub>X</sub> → F<sub>A</sub>/F<sub>B</sub> → فيريدوكسين (Fd)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br>
                            FNR → NADP⁺ → NADPH (+ اختزال)<br>
                            <br>
                            <strong>صافي الطاقة:</strong> 8 فوتونات (4 لـ PSII + 4 لـ PSI) لإنتاج O₂، 2 NADPH، ≈3 ATP
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">أكسدة الماء (Water Oxidation)</h3>
                        
                        <h4 style="color:#60a5fa">2.1. مجمع تحلل الماء (OEC)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>دورة S-states (Kok cycle):</strong><br><br>
                            <strong>S₀:</strong> Mn₄(III,III,IV,IV) – الأكثر اختزالاً<br>
                            +1e⁻ +1H⁺ (من TyrZ⁺)<br>
                            ↓<br>
                            <strong>S₁:</strong> Mn₄(III,IV,IV,IV) – الحالة المستقرة في الظلام<br>
                            +hν +1e⁻ ← P680⁺ يختزل TyrZ⁺<br>
                            ↓<br>
                            <strong>S₂:</strong> Mn₄(IV,IV,IV,IV) أو Mn₄(III,IV,IV,V)<br>
                            +hν +1e⁻<br>
                            ↓<br>
                            <strong>S₃:</strong> Mn₄(IV,IV,IV,V) مع رابطة O-O تتكون<br>
                            +hν +1e⁻<br>
                            ↓<br>
                            <strong>S₄:</strong> حالة انتقالية (غير مستقرة)<br>
                            → إطلاق O₂ + 4H⁺ إلى اللومن<br>
                            ↓<br>
                            العودة إلى S₀<br><br>
                            
                            <strong>التوازن الكلي:</strong><br>
                            2H₂O → O₂ + 4H⁺ + 4e⁻<br>
                            يتطلب: 4 كمات ضوء، 4 إلكترونات من TyrZ
                        </div>
                        
                        <h4 style="color:#60a5fa">2.2. الآثار الطاقوية</h4>
                        
                        <ul>
                            <li><strong>جهد التأكسد:</strong> P680⁺/P680: +1.2 إلى +1.3 V (أقوى مؤكسد بيولوجي)</li>
                            <li><strong>طاقة الرابطة O=O:</strong> 498 kJ/mol (تتطلب 4 كمات ضوء)</li>
                            <li><strong>إنتاج البروتونات:</strong> 4 H⁺/O₂ تضخ إلى اللومن (تساهم في ΔpH)</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">سلسلة النقل الضوئي</h3>
                        
                        <h4 style="color:#60a5fa">3.1. البلاستوكينون (Plastoquinone, PQ)</h4>
                        
                        <p><strong>الوظائف:</strong></p>
                        <ul>
                            <li>ناقل إلكترونات متحرك في الغشاء الثايلاكويدي</li>
                            <li>مخزن للإلكترونات والبروتونات</li>
                            <li>وسيط بين PSII و Cyt b₆f</li>
                        </ul>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>دورة PQ:</strong><br><br>
                            <strong>1. الاختزال في موقع QB:</strong><br>
                            PQ + e⁻ + H⁺ → PQ⁻ (شبه كينون)<br>
                            PQ⁻ + e⁻ + H⁺ → PQH₂ (بلاستوكينول)<br>
                            <br>
                            <strong>2. الانتشار في الغشاء:</strong><br>
                            PQH₂ ينتقل إلى Cyt b₆f (مقاومة منخفضة في الطبقة الدهنية)<br>
                            <br>
                            <strong>3. الأكسدة في Cyt b₆f:</strong><br>
                            PQH₂ → PQ + 2e⁻ + 2H⁺ (في اللومن)<br>
                            <br>
                            <strong>4. إعادة الانتشار:</strong><br>
                            PQ يعود إلى PSII (دورة كاملة في ≈ 20 مللي ثانية)
                        </div>
                        
                        <h4 style="color:#60a5fa">3.2. معقد السيتوكروم b₆f</h4>
                        
                        <ul>
                            <li><strong>التركيب:</strong> ثنائي مع 4 وحدات فرعية رئيسية لكل مونومر</li>
                            <li><strong>المكونات:</strong>
                                <ul>
                                    <li>Cyt f: يحمل الهيم c (جهد اختزال: +0.37 V)</li>
                                    <li>Cyt b₆: هيامين b منخفضة الإمكانيات (b₆<sub>L</sub>: -0.1 V, b₆<sub>H</sub>: +0.05 V)</li>
                                    <li>وحدة Rieske Fe-S: [2Fe-2S] (جهد: +0.29 V)</li>
                                    <li>وحدة بلاستوسيانين: موقع ارتباط</li>
                                </ul>
                            </li>
                            <li><strong>آلية Q-cycle:</strong> تزيد كفاءة ضخ البروتونات</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.3. دورة Q (Q-cycle)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>آلية Q-cycle (لكل PQH₂):</strong><br><br>
                            <strong>في الموقع Q<sub>o</sub> (ضد الستروما):</strong><br>
                            1. PQH₂ يرتبط، يمنح إلكترون إلى وحدة Rieske<br>
                            2. الإلكترون ينتقل عبر Cyt f إلى PC<br>
                            3. PQH₂⁺ (شبه كينون) يمنح الإلكترون الثاني إلى Cyt b₆<sub>L</sub><br>
                            4. PQ (أكسد) يتحرر، 2H⁺ تطلق في اللومن<br>
                            <br>
                            <strong>في الموقع Q<sub>i</sub> (على جانب الستروما):</strong><br>
                            5. الإلكترون ينتقل عبر Cyt b₆<sub>H</sub> إلى PQ في الموقع Q<sub>i</sub><br>
                            6. بعد 2 دورة، PQ يختزل إلى PQH₂ (بأخذ 2H⁺ من الستروما)<br>
                            <br>
                            <strong>الصافي لكل PQH₂:</strong><br>
                            • إلكترونان يمران عبر السلسلة<br>
                            • 4 H⁺ تضخ إلى اللومن (2 من أكسدة PQH₂ + 2 من Q-cycle)<br>
                            • زيادة كفاءة ضخ البروتونات من 2 إلى 4 H⁺/2e⁻
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الفسفرة الضوئية</h3>
                        
                        <h4 style="color:#60a5fa">4.1. توليد القوة الدافعة البروتونية</h4>
                        
                        <p><strong>مصادر البروتونات في اللومن:</strong></p>
                        <ul>
                            <li>أكسدة الماء: 4 H⁺/O₂ (أي 1 H⁺/إلكترون)</li>
                            <li>أكسدة PQH₂ في Cyt b₆f: 2 H⁺/إلكترون (بعد Q-cycle)</li>
                            <li>المجموع: 3 H⁺/إلكترون تضخ إلى اللومن</li>
                        </ul>
                        
                        <p><strong>مكونات القوة الدافعة البروتونية (Δp):</strong></p>
                        <ul>
                            <li><strong>ΔΨ (جهد غشائي):</strong> ≈ 0 mV (يلغى بتدفق Mg²⁺ و K⁺)</li>
                            <li><strong>ΔpH (تدرج pH):</strong> ≈ 3 وحدات (اللومن pH 4، الستروما pH 8)</li>
                            <li>Δp = ΔΨ - 2.3(RT/F)ΔpH ≈ -180 mV</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">4.2. ATP synthase الضوئي</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>بنية ووظيفة ATP synthase (CF₀CF₁):</strong><br><br>
                            <strong>الجزء CF₀ (في الغشاء):</strong><br>
                            • محرك بروتوني: a-subunit (قناة بروتون) + c-ring (10-14 وحدة c)<br>
                            • لكل بروتون يمر: يدور c-ring 360°/عدد وحدات c<br>
                            <br>
                            <strong>الجزء CF₁ (في الستروما):</strong><br>
                            • محفز ATP: α₃β₃γδε (مركب سداسي)<br>
                            • مواقع ارتباط: 3 مواقع (L, T, O) على الوحدات β<br>
                            • آلية التغيير التشكلي: يدور γ داخل α₃β₃<br>
                            <br>
                            <strong>التكافؤ:</strong><br>
                            • 3 ATP/دورة كاملة لـ γ<br>
                            • 10-14 بروتون/دورة لـ c-ring<br>
                            • الناتج: 3 ATP/10-14 H⁺ ≈ 0.2-0.3 ATP/H⁺
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">إنتاج NADPH</h3>
                        
                        <h4 style="color:#60a5fa">5.1. سلسلة اختزال NADP⁺</h4>
                        
                        <ul>
                            <li><strong>فيريدوكسين (Fd):</strong> بروتين حديد-كبريت [2Fe-2S]</li>
                            <li><strong>فيريدوكسين-NADP⁺ ريدوكتاز (FNR):</strong> إنزيم فلافوبروتين (FAD)</li>
                            <li><strong>آلية العمل:</strong>
                                <ol>
                                    <li>Fd<sub>red</sub> يرتبط بـ FNR (فيريدوكسين مختزل)</li>
                                    <li>نقل إلكترون إلى FAD (يتحول إلى FADH⁻)</li>
                                    <li>ارتباط NADP⁺ (في موقع ثاني)</li>
                                    <li>نقل الهيدريد (H⁻) من FADH⁻ إلى NADP⁺</li>
                                    <li>تكوين NADPH و Fd<sub>ox</sub> و FNR<sub>ox</sub></li>
                                </ol>
                            </li>
                            <li><strong>التوازن:</strong> 2Fd<sub>red</sub> + NADP⁺ + H⁺ → 2Fd<sub>ox</sub> + NADPH</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">5.2. المسارات البديلة لتدفق الإلكترونات</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>تدفق الإلكترونات الدوري حول PSI:</strong><br><br>
                            <strong>المسار:</strong><br>
                            Fd<sub>red</sub> → بلاستوكينون → Cyt b₆f → PC → PSI<br>
                            <br>
                            <strong>الوظائف:</strong><br>
                            1. إنتاج ATP بدون NADPH (تعديل نسبة ATP/NADPH)<br>
                            2. حماية من الضوء المفرط (تبديد الطاقة)<br>
                            3. تنشيط عند انخفاض NADP⁺<br>
                            <br>
                            <strong>المحفزات:</strong><br>
                            • انخفاض نسبة NADPH/NADP⁺<br>
                            • انخفاض pH الستروما (ضوء مرتفع)<br>
                            • نشاط ثيوريدوكسين (تنظيم إنزيمي)
                        </div>
                        
                        <p><strong>تدفق الإلكترونات الملتوي (Mehler reaction):</strong></p>
                        <ul>
                            <li>Fd<sub>red</sub> + O₂ → Fd<sub>ox</sub> + O₂⁻ (أنيون فائق الأكسيد)</li>
                            <li>يتبعها: O₂⁻ + O₂⁻ + 2H⁺ → H₂O₂ + O₂ (بواسطة SOD)</li>
                            <li>الحماية: تبديد الطاقة الزائدة، ولكن يولد أنواع أكسجين تفاعلية</li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية: الكفاءة الطاقوية للتركيب الضوئي</strong><br>
                            • طاقة الفوتون (700 nm): 1.77 eV = 171 kJ/einstein<br>
                            • الطاقة المخزنة في NADPH و ATP: ≈ 220 kJ/mol CO₂ ثابت<br>
                            • الكفاءة النظرية القصوى: 35% (220/(8×171)×100)<br>
                            • الكفاءة العملية: 1-2% في المحاصيل، تصل إلى 8% في ظروف مثالية<br>
                            • الخسائر: انعكاس الضوء، نقل الطاقة، إنزيمات غير كاملة، تنفس
                        </div>
                    `
                },
                
                {
                    id: "2.5",
                    title: "5. المرحلة الكيموحيوية (حلقة كالفن)",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">تثبيت الكربون وتخليق السكريات</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> <span style="color:#facc15">حلقة كالفن</span> (أو تفاعلات الظلام) هي المسار الكيموحيوي الذي يثبت ثاني أكسيد الكربون الجوي في جزيئات عضوية، مستخدماً ATP و NADPH المنتجين في المرحلة الكيموضوئية. تنتج الحلقة سكر ثلاثي الفوسفات (G3P) الذي يمكن تحويله إلى جلوكوز وسكريات أخرى.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. نظرة عامة على الحلقة</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>المعادلة الإجمالية لحلقة كالفن:</strong><br><br>
                            3 CO₂ + 9 ATP + 6 NADPH + 6 H⁺ + 5 H₂O →<br>
                            Glyceraldehyde-3-phosphate (G3P) + 9 ADP + 8 Pi + 6 NADP⁺<br><br>
                            
                            <strong>لإنتاج جزيء جلوكوز واحد (6 كربونات):</strong><br>
                            6 CO₂ + 18 ATP + 12 NADPH + 12 H⁺ →<br>
                            C₆H₁₂O₆ + 18 ADP + 18 Pi + 12 NADP⁺<br><br>
                            
                            <strong>المراحل الثلاث:</strong><br>
                            1. <strong>التثبيت:</strong> RuBP + CO₂ → 2 × 3-PGA<br>
                            2. <strong>الاختزال:</strong> 3-PGA → G3P (باستخدام ATP و NADPH)<br>
                            3. <strong>التجديد:</strong> G3P → RuBP (باستخدام ATP)
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">المرحلة 1: تثبيت الكربون</h3>
                        
                        <h4 style="color:#60a5fa">2.1. إنزيم RuBisCO</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>خصائص RuBisCO (ريبولوز-1,5-بيسفوسفات كربوكسيلاز/أوكسيجيناز):</strong><br><br>
                            <strong>البنية:</strong> L₈S₈ (8 وحدات كبيرة + 8 وحدات صغيرة)<br>
                            • الوحدة الكبيرة (L): 55 kDa، موقع تحفيزي<br>
                            • الوحدة الصغيرة (S): 15 kDa، دور تنظيمي<br>
                            <br>
                            <strong>الانتشار:</strong> أكثر بروتين وفرة على الأرض (≈ 50% من بروتين الورقة)<br>
                            <strong>الكفاءة:</strong> بطيء (3-10 تفاعلات/ثانية/موقع)<br>
                            <br>
                            <strong>التفعيل:</strong> يتطلب:<br>
                            1. ارتباط CO₂ (ليس الركيزة) إلى Lys201 ← كربامات<br>
                            2. ارتباط Mg²⁺ ← تشكيل معقد كربامات-مغنسيوم<br>
                            3. فسفرة بالروبيسكو أكتيفاز (في الضوء)<br>
                            <br>
                            <strong>المثبطات:</strong> سكرات مثل 2-كاربوكسي أرابينيتول-1-فوسفات (CA1P)
                        </div>
                        
                        <h4 style="color:#60a5fa">2.2. آلية تفاعل الكربوكسيلاز</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>آلية تفاعل RuBisCO الكربوكسيلاز:</strong><br><br>
                            <strong>الخطوة 1: إينولة RuBP:</strong><br>
                            RuBP (C5) → Enediolate (C5) (باستقرار بواسطة Mg²⁺)<br>
                            <br>
                            <strong>الخطوة 2: هجوم إينولات على CO₂:</strong><br>
                            Enediolate + CO₂ → 2-كاربوكسي-3-كيتو أرابينيتول-1,5-بيسفوسفات (CKABP)<br>
                            (مركب وسطي β-keto acid، 6 كربونات)<br>
                            <br>
                            <strong>الخطوة 3: التحلل المائي:</strong><br>
                            CKABP + H₂O → 2 جزيء من 3-فوسفوجليسيرات (3-PGA)<br>
                            (كسر بين C2 و C3، إنتاج حمضين C3)<br>
                            <br>
                            <strong>صافي التفاعل:</strong><br>
                            RuBP (5C) + CO₂ + H₂O → 2 × 3-PGA (3C)
                        </div>
                        
                        <h4 style="color:#60a5fa">2.3. نشاط الأوكسيجيناز (التنفس الضوئي)</h4>
                        
                        <p><strong>التفاعل التنافسي:</strong></p>
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            RuBP + O₂ → 3-PGA (1 جزيء) + 2-فوسفوجلايكولات (2C)<br><br>
                            <strong>النسب:</strong> Vc/Vo = (Vcmax[CO₂])/(Vomax[O₂]) × Specificity factor (τ)<br>
                            <strong>τ:</strong> ≈ 80 للنباتات C3، ≈ 50 للطحالب، ≈ 15 للبكتيريا<br>
                            <strong>العوامل المؤثرة:</strong><br>
                            • زيادة الحرارة ← تقليل τ (تفضيل الأوكسيجيناز)<br>
                            • زيادة CO₂ ← تفضيل الكربوكسيلاز<br>
                            • زيادة O₂ ← تفضيل الأوكسيجيناز
                        </div>
                        
                        <p><strong>نتائج التنفس الضوئي:</strong></p>
                        <ul>
                            <li>فقدان كربون (كميات CO₂ ثابتة تُفقَد)</li>
                            <li>استهلاك ATP و NADPH (لإعادة تدوير 2-فوسفوجلايكولات)</li>
                            <li>تخفيض كفاءة التركيب الضوئي بنسبة 20-50%</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">المرحلة 2: اختزال الكربون</h3>
                        
                        <h4 style="color:#60a5fa">3.1. فسفرة 3-PGA</h4>
                        
                        <ul>
                            <li><strong>الإنزيم:</strong> فوسفوجليسيرات كيناز (PGK)</li>
                            <li><strong>التفاعل:</strong> 3-PGA + ATP → 1,3-بيسفوسفوجليسيرات (1,3-BPG) + ADP</li>
                            <li><strong>الحركية:</strong> K<sub>m</sub> لـ ATP: 0.1-0.2 mM (يتطلب تركيزات عالية من ATP)</li>
                            <li><strong>التنظيم:</strong> يرتبط بـ G3P dehydrogenase في مركب متعدد الإنزيمات</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.2. اختزال 1,3-BPG إلى G3P</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>تفاعل G3P ديهيدروجيناز:</strong><br><br>
                            <strong>الإنزيم:</strong> غليسيرالدهيد-3-فوسفات ديهيدروجيناز (GAPDH)<br>
                            <strong>التفاعل:</strong><br>
                            1,3-BPG + NADPH + H⁺ → Glyceraldehyde-3-phosphate (G3P) + NADP⁺ + Pi<br>
                            <br>
                            <strong>آلية التحفيز:</strong><br>
                            1. ارتباط 1,3-BPG (مجموعة أسيل فوسفات عالية الطاقة)<br>
                            2. نقل هيدريد من NADPH إلى مجموعة الكربونيل<br>
                            3. إطلاق Pi غير العضوي<br>
                            4. إنتاج G3P (ألديهيد)<br>
                            <br>
                            <strong>التوازن:</strong> ΔG°' = -6.3 kJ/mol (قابل للانعكاس)<br>
                            <strong>التنظيم:</strong> يثبط بـ NADPH/NADP⁺ مرتفع، ATP/ADP منخفض
                        </div>
                        
                        <h4 style="color:#60a5fa">3.3. نظرة على الطاقة</h4>
                        
                        <p><strong>لكل CO₂ ثابت:</strong></p>
                        <ul>
                            <li>2 ATP (للفسفرة)</li>
                            <li>2 NADPH (للاختزال)</li>
                            <li>الإجمالي لمرحلة الاختزال: 6 ATP + 6 NADPH لكل 3 CO₂</li>
                        </ul>
                        
                        <p><strong>منتجات هذه المرحلة:</strong></p>
                        <ul>
                            <li>لكل 3 جزيئات CO₂: 6 جزيئات G3P</li>
                            <li>5 جزيئات G3P تستخدم لتجديد RuBP</li>
                            <li>1 جزيء G3P يصبح ناتجاً صافياً</li>
                            <li>3 دورات لإنتاج جزيء G3P صافي واحد (3 كربونات)</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">المرحلة 3: تجديد RuBP</h3>
                        
                        <h4 style="color:#60a5fa">4.1. المسار الكامل للتجديد</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>تحويل 5 G3P (15C) إلى 3 RuBP (15C):</strong><br><br>
                            <strong>1. أيزوميراز تريوز فوسفات:</strong><br>
                            G3P (ألديهيد) ⇌ ديهايدروكسي أسيتون فوسفات (DHAP) (كيتون)<br>
                            <br>
                            <strong>2. ألدولاز:</strong><br>
                            G3P + DHAP → فركتوز-1,6-بيسفوسفات (FBP) (6C)<br>
                            <br>
                            <strong>3. فوسفاتاز:</strong><br>
                            FBP + H₂O → فركتوز-6-فوسفات (F6P) + Pi<br>
                            <br>
                            <strong>4. نقل مجموعات:</strong><br>
                            F6P + G3P ↔ إريثروز-4-فوسفات (E4P) + زايلولوز-5-فوسفات (Xu5P)<br>
                            (بواسطة ترانسكيتولاز)<br>
                            <br>
                            <strong>5. أيزوميراز وإيبيميراز:</strong><br>
                            ريبيولوز-5-فوسفات (Ru5P) ← Xu5P وريبوز-5-فوسفات (R5P)<br>
                            <br>
                            <strong>6. فسفوكيناز:</strong><br>
                            Ru5P + ATP → RuBP + ADP (الخطوة المحددة)
                        </div>
                        
                        <h4 style="color:#60a5fa">4.2. الإنزيمات الرئيسية في التجديد</h4>
                        
                        <p><strong>ترانسكيتولاز:</strong></p>
                        <ul>
                            <li>ينقل وحدة كيتول (C2) من كيتوز سكري إلى ألدوز سكري</li>
                            <li>العامل المرافق: ثيامين بيروفوسفات (TPP)</li>
                            <li>مثال: Xu5P (C5) + R5P (C5) → G3P (C3) + سيدوهيبتولوز-7-فوسفات (C7)</li>
                        </ul>
                        
                        <p><strong>ألدولاز:</strong></p>
                        <ul>
                            <li>يحفز تكوين رابطة كربون-كربون بين مركب كربونيلي ومركب فيه مجموعة كربونيل</li>
                            <li>مثال: DHAP + G3P → FBP (تخليق)</li>
                            <li>FBP → DHAP + G3P (تحلل، في مسار تحلل الجلوكوز)</li>
                        </ul>
                        
                        <p><strong>ريبولوز-5-فوسفات كيناز (فوسفوريبولوكيناز):</strong></p>
                        <ul>
                            <li>يضيف مجموعة فوسفات ثانية إلى Ru5P</li>
                            <li>يتطلب ATP (3 ATP لكل 3 RuBP)</li>
                            <li>منظم رئيسي: يثبط بـ 3-PGA، ينشط بـ F6P و FBP</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">4.3. الطلب الطاقوي للتجديد</h4>
                        
                        <ul>
                            <li>لكل 3 CO₂: 3 ATP (لتخليق RuBP)</li>
                            <li>الإجمالي للحلقة: 9 ATP + 6 NADPH لكل 3 CO₂</li>
                            <li>الناتج الصافي: 1 G3P (3 كربونات)</li>
                            <li>لتخليق سكر سداسي: 6 دورات (18 ATP + 12 NADPH)</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">التنظيم الضوئي لحلقة كالفن</h3>
                        
                        <h4 style="color:#60a5fa">5.1. التنظيم بالضوء (Light Regulation)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>آليات التنظيم بالضوء:</strong><br><br>
                            <strong>1. التفعيل بالثيوريدوكسين:</strong><br>
                            • الضوء ← اختزال فيريدوكسين ← اختزال ثيوريدوكسين<br>
                            • ثيوريدوكسين المختزل ينشط الإنزيمات:<br>
                            &nbsp;&nbsp;- فروكتوز-1,6-بيسفوسفاتاز (FBPase)<br>
                            &nbsp;&nbsp;- سيدوهيبتولوز-1,7-بيسفوسفاتاز (SBPase)<br>
                            &nbsp;&nbsp;- ريبولوز-5-فوسفات كيناز<br>
                            &nbsp;&nbsp;- غليسيرالدهيد-3-فوسفات ديهيدروجيناز<br>
                            <br>
                            <strong>2. تغيير أيونات المغنيسيوم:</strong><br>
                            • ضخ H⁺ إلى اللومن ← إطلاق Mg²⁺ من الثايلاكويد<br>
                            • زيادة [Mg²⁺] في الستروما من 1 إلى 3-5 mM<br>
                            • Mg²⁺ ينشط RuBisCO (بعد تفعيله)<br>
                            <br>
                            <strong>3. تغير pH الستروما:</strong><br>
                            • الضوء ← ارتفاع pH الستروما من 7 إلى 8<br>
                            • pH مثالي لإنزيمات كالفن (خاصة RuBisCO)
                        </div>
                        
                        <h4 style="color:#60a5fa">5.2. التنظيم بالتغذية الراجعة</h4>
                        
                        <p><strong>التثبيط بالتغذية الراجعة:</strong></p>
                        <ul>
                            <li>تراكم G3P ← يثبط FBPase و SBPase</li>
                            <li>تراكم RuBP ← يبطئ RuBisCO (منافسة على المواقع)</li>
                            <li>نسبة ATP/ADP منخفضة ← تثبيط إنزيمات تحتاج ATP</li>
                        </ul>
                        
                        <p><strong>التنشيط بالتغذية الراجعة:</strong></p>
                        <ul>
                            <li>تراكم 3-PGA ← تنشيط ريبولوز-5-فوسفات كيناز</li>
                            <li>تراكم F6P و FBP ← تنشيط إنزيمات التجديد</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">5.3. التكامل مع المسارات الأخرى</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مصير G3P المنتج:</strong><br><br>
                            <strong>1. تخليق النشاء (في البلاستيدات):</strong><br>
                            • G3P → جلوكوز-1-فوسفات → ADP-جلوكوز → نشاء<br>
                            • النشاء: مخزن مؤقت خلال النهار، يتحلل ليلاً<br>
                            <br>
                            <strong>2. تصدير إلى السيتوسول:</strong><br>
                            • G3P ↔ DHAP عبر ناقل ثلاثي الفوسفات<br>
                            • في السيتوسول: تخليق سكروز (ناقل رئيسي في النبات)<br>
                            <br>
                            <strong>3. مسارات التخليق الحيوي:</strong><br>
                            • الأحماض الأمينية (عبر حمض البيروفيك)<br>
                            • الأحماض الدهنية (عبر أسيتيل-CoA)<br>
                            • الأيزوبرينويدات (عبر MEP pathway)<br>
                            • النيوكليوتيدات (عمن ريبوز-5-فوسفات)
                        </div>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية: آليات تثبيت الكربون البديلة</strong><br>
                            <strong>1. طريق C4:</strong> في الذرة وقصب السكر، يضيف CO₂ إلى فوسفوانول بيروفات (PEP) بواسطة PEP كربوكسيلاز (لا تنفس ضوئي)، ثم يطلق CO₂ في خلايا الغمد الوعائي لـ RuBisCO.<br>
                            <strong>2. أيض الحمض العضوي CAM:</strong> في النباتات العصارية، تفتح الثغور ليلاً لتثبيت CO₂ في حمض الماليك، وتغلقه نهاراً وتستخدم CO₂ المخزن.<br>
                            <strong>3. التكيفات:</strong> C4 و CAM تزيد من تركيز CO₂ حول RuBisCO، تقلل التنفس الضوئي، لكنها تستهلك طاقة إضافية (2 ATP إضافية لكل CO₂ في C4).
                        </div>
                    `
                }
            ],
            
            3: [
                {
                    header: true,
                    title: "المجال 2 (تكملة) + المجال 3: الجيولوجيا"
                },
                
                {
                    id: "3.1",
                    title: "1. التحلل السكري",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">تحلل الجلوكوز: المسار الأساسي لاستخلاص الطاقة</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> <span style="color:#facc15">التحلل السكري</span> هو مسار أيضي موجود في جميع الكائنات الحية، يحول جزيء جلوكوز واحد (6 كربونات) إلى جزيئين من حمض البيروفيك (3 كربونات)، مع إنتاج صافٍ لـ 2 ATP و 2 NADH.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. نظرة عامة على التحلل السكري</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>المعادلة الإجمالية للتحلل السكري (الهوائي):</strong><br><br>
                            الجلوكوز + 2 NAD⁺ + 2 ADP + 2 Pi →<br>
                            2 بيروفات + 2 NADH + 2 H⁺ + 2 ATP + 2 H₂O<br><br>
                            
                            <strong>المعادلة الإجمالية (اللاهوائي - التخمر):</strong><br>
                            الجلوكوز + 2 ADP + 2 Pi →<br>
                            2 لاكتات (أو 2 إيثانول + 2 CO₂) + 2 ATP + 2 H₂O<br><br>
                            
                            <strong>الموقع الخلوي:</strong> السيتوسول (الهيولى الأساسية)<br>
                            <strong>اتجاهية المسار:</strong> يمكن أن يعمل في كلا الاتجاهين (تخليق وتحلل)<br>
                            <strong>قابلية التنظيم:</strong> ثلاث إنزيمات تنظيمية رئيسية
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">مرحلة الاستثمار الطاقوي (الخطوات 1-5)</h3>
                        
                        <h4 style="color:#60a5fa">2.1. الفسفرة الأولية للجلوكوز</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>الخطوة 1: هكسوكيناز/غلوكوكيناز</strong><br><br>
                            <strong>التفاعل:</strong> الجلوكوز + ATP → جلوكوز-6-فوسفات (G6P) + ADP<br>
                            <strong>ΔG°':</strong> -16.7 kJ/mol (لا رجعة فيها)<br>
                            <strong>الإنزيم:</strong> هكسوكيناز (في معظم الخلايا) أو غلوكوكيناز (في الكبد)<br>
                            <br>
                            <strong>مقارنة:</strong><br>
                            <strong>هكسوكيناز:</strong><br>
                            • K<sub>m</sub> منخفض (0.1 mM) ← يعمل عند [جلوكوز] منخفضة<br>
                            • يثبط بـ G6P (تغذية راجعة)<br>
                            • موجود في معظم الأنسجة<br>
                            <br>
                            <strong>غلوكوكيناز:</strong><br>
                            • K<sub>m</sub> مرتفع (10 mM) ← يعمل عند [جلوكوز] مرتفعة<br>
                            • لا يثبط بـ G6P ← يستجيب لتغيرات الجلوكوز في الدم<br>
                            • موجود في الكبد وخلايا بيتا البنكرياس
                        </div>
                        
                        <h4 style="color:#60a5fa">2.2. أيزوميراز الفوسفوجلوكوز</h4>
                        
                        <ul>
                            <li><strong>الخطوة 2:</strong> G6P ⇌ فركتوز-6-فوسفات (F6P)</li>
                            <li><strong>الإنزيم:</strong> فوسفوجلوكوز أيزوميراز (PGI)</li>
                            <li><strong>ΔG°':</strong> +1.7 kJ/mol (قابل للانعكاس)</li>
                            <li><strong>الميكانيكية:</strong> تحويل ألدوهكسوز إلى كيتوهكسوز عبر إنول وسيط</li>
                            <li><strong>الأهمية:</strong> تحضير السكر للفسفرة في C1</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.3. الفسفرة الثانية</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>الخطوة 3: فسفوفروكتوكيناز-1 (PFK-1)</strong><br><br>
                            <strong>التفاعل:</strong> F6P + ATP → فركتوز-1,6-بيسفوسفات (FBP) + ADP<br>
                            <strong>ΔG°':</strong> -14.2 kJ/mol (لا رجعة فيها)<br>
                            <strong>الأهمية:</strong> أهم خطوة تنظيمية في التحلل السكري<br>
                            <br>
                            <strong>التنظيم الألوسيتيري:</strong><br>
                            <strong>المثبطات:</strong> ATP، سترات، H⁺ (الحماض)<br>
                            <strong>المنشطات:</strong> AMP، ADP، فركتوز-2,6-بيسفوسفات (F2,6BP)<br>
                            <br>
                            <strong>الحركية:</strong> منحنى سيني لـ [F6P] ← تنظيم اتحادي<br>
                            <strong>التأثير:</strong> ATP عالي ← يزيد K<sub>0.5</sub> لـ F6P ← يبطئ المسار
                        </div>
                        
                        <h4 style="color:#60a5fa">2.4. انقسام السكر السداسي</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>الخطوة 4: ألدولاز</strong><br><br>
                            <strong>التفاعل:</strong> FBP ⇌ دايهيدروكسي أسيتون فوسفات (DHAP) + غليسيرالدهيد-3-فوسفات (G3P)<br>
                            <strong>ΔG°':</strong> +23.8 kJ/mol (قابل للانعكاس)<br>
                            <strong>الآلية:</strong> تفاعل ألدول (تكوين رابطة كربون-كربون عكسي)<br>
                            <br>
                            <strong>الخطوة 5: تريوز فوسفات أيزوميراز</strong><br>
                            <strong>التفاعل:</strong> DHAP ⇌ G3P<br>
                            <strong>ΔG°':</strong> +7.5 kJ/mol (قابل للانعكاس)<br>
                            <strong>الأهمية:</strong> توازن سريع نحو DHAP (96%) ← يسحب التفاعل بتشكيل G3P<br>
                            <br>
                            <strong>صافي هذه المرحلة:</strong><br>
                            جلوكوز → 2 × G3P (لكل جلوكوز)<br>
                            استثمار: 2 ATP (في الخطوتين 1 و 3)
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">مرحلة إنتاج الطاقة (الخطوات 6-10)</h3>
                        
                        <h4 style="color:#60a5fa">3.1. الأكسدة وإنتاج NADH</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>الخطوة 6: غليسيرالدهيد-3-فوسفات ديهيدروجيناز (GAPDH)</strong><br><br>
                            <strong>التفاعل:</strong> G3P + Pi + NAD⁺ ⇌ 1,3-بيسفوسفوجليسيرات (1,3-BPG) + NADH + H⁺<br>
                            <strong>ΔG°':</strong> +6.3 kJ/mol (قابل للانعكاس)<br>
                            <br>
                            <strong>آلية التحفيز:</strong><br>
                            1. ارتباط G3P وتشكيل ثيوهيمي أسيتال مع Cys149<br>
                            2. أكسدة الألديهيد إلى حمض ثيوي باستخدام NAD⁺<br>
                            3. هجوم فوسفات غير عضوي على مجموعة الأسيل الثيوي<br>
                            4. إنتاج 1,3-BPG (مخلق فوسفات عالي الطاقة) و NADH<br>
                            <br>
                            <strong>التوازن:</strong> يفضل اتجاه عكسي في الظروف القياسية<br>
                            <strong>الدفع:</strong> الخطوة التالية (إنتاج ATP) تسحب التفاعل للأمام<br>
                            <strong>المردود:</strong> 2 NADH لكل جلوكوز
                        </div>
                        
                        <h4 style="color:#60a5fa">3.2. إنتاج ATP الأول (فسفرة على مستوى الركيزة)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>الخطوة 7: فوسفوجليسيرات كيناز (PGK)</strong><br><br>
                            <strong>التفاعل:</strong> 1,3-BPG + ADP ⇌ 3-فوسفوجليسيرات (3-PGA) + ATP<br>
                            <strong>ΔG°':</strong> -18.5 kJ/mol (قابل للانعكاس)<br>
                            <br>
                            <strong>الأهمية:</strong><br>
                            1. أول إنتاج لـ ATP في المسار (2 ATP/جلوكوز)<br>
                            2. تعويض لـ ATP المستثمر في البداية<br>
                            3. فسفرة على مستوى الركيزة (Substrate-level phosphorylation)<br>
                            <br>
                            <strong>الارتباط:</strong> يرتبط بـ GAPDH فيزيائياً ← نقل وسيط مباشر<br>
                            <strong>التوازن الكلي (الخطوتان 6+7):</strong><br>
                            G3P + ADP + Pi + NAD⁺ → 3-PGA + ATP + NADH + H⁺<br>
                            ΔG°' = -12.2 kJ/mol (يتقدم تلقائياً)
                        </div>
                        
                        <h4 style="color:#60a5fa">3.3. إعادة الترتيب التحضيرية</h4>
                        
                        <p><strong>الخطوة 8: فوسفوجليسيرات موتاز (PGM)</strong></p>
                        <ul>
                            <li><strong>التفاعل:</strong> 3-PGA ⇌ 2-فوسفوجليسيرات (2-PGA)</li>
                            <li><strong>الآلية:</strong> نقل مجموعة فوسفات داخل الجزيء عبر فسفوريل إنزيم وسطي</li>
                            <li><strong>الأهمية:</strong> إعداد مجموعة فوسفات لتصبح مجموعة فوسفوإنول</li>
                        </ul>
                        
                        <p><strong>الخطوة 9: إينولاز</strong></p>
                        <ul>
                            <li><strong>التفاعل:</strong> 2-PGA ⇌ فوسفوانول بيروفات (PEP) + H₂O</li>
                            <li><strong>ΔG°':</strong> +1.7 kJ/mol (قابل للانعكاس)</li>
                            <li><strong>العامل المرافق:</strong> Mg²⁺ أو Mn²⁺ (يرتبد بالمكان الفعال)</li>
                            <li><strong>التثبيط:</strong> بفلوريد (F⁻) ← يشكل معقد مع Mg²⁺ و Pi</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.4. إنتاج ATP الثاني</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>الخطوة 10: بيروفات كيناز (PK)</strong><br><br>
                            <strong>التفاعل:</strong> PEP + ADP → بيروفات + ATP<br>
                            <strong>ΔG°':</strong> -31.4 kJ/mol (لا رجعة فيها)<br>
                            <br>
                            <strong>الآلية:</strong> نقل مجموعة فوسفات من PEP إلى ADP<br>
                            <strong>استقرار PEP:</strong> الشكل الإنولي يتحول تلقائياً إلى كيتو (طارد للطاقة)<br>
                            <br>
                            <strong>الأهمية:</strong> ثاني إنتاج لـ ATP (2 ATP/جلوكوز)<br>
                            <strong>الصافي:</strong> 4 ATP منتجة - 2 ATP مستثمرة = 2 ATP صافي<br>
                            <br>
                            <strong>التنظيم:</strong><br>
                            • يثبط بـ ATP، ألانين، أحماض دهنية<br>
                            • ينشط بـ FBP (تغذية راجعة أمامية)<br>
                            • أشكال متساوية: M (العضلات)، L (الكبد)، R (كريات حمراء)<br>
                            • في الكبد: يفسفر (أقل نشاط) في حالة الجوع
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">مصير البيروفات</h3>
                        
                        <h4 style="color:#60a5fa">4.1. الظروف الهوائية</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>نقل البيروفات إلى الميتوكوندريا:</strong><br><br>
                            <strong>الناقل:</strong> ناقل بيروفات/هيدروكسيل (MPC)<br>
                            <strong>الآلية:</strong> تزامني مع H⁺ (أو OH⁻ في بعض الأنواع)<br>
                            <strong>في الميتوكوندريا:</strong><br>
                            <br>
                            <strong>1. نازعة هيدروجين البيروفات (PDH):</strong><br>
                            بيروفات + CoA + NAD⁺ → أسيتيل-CoA + CO₂ + NADH<br>
                            ΔG°' = -33.4 kJ/mol (لا رجعة فيه)<br>
                            <br>
                            <strong>2. دخول حلقة كريبس:</strong><br>
                            أكسدة كاملة لأسيتيل-CoA إلى CO₂<br>
                            إنتاج: 3 NADH، 1 FADH₂، 1 GTP (لكل أسيتيل-CoA)<br>
                            <br>
                            <strong>3. الفسفرة التأكسدية:</strong><br>
                            أكسدة NADH و FADH₂ ← إنتاج ATP
                        </div>
                        
                        <h4 style="color:#60a5fa">4.2. الظروف اللاهوائية (التخمر)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>تخمر اللاكتات (في العضلات وكريات الدم الحمراء):</strong><br><br>
                            <strong>الخطوة:</strong> لاكتات ديهيدروجيناز (LDH)<br>
                            بيروفات + NADH + H⁺ ⇌ لاكتات + NAD⁺<br>
                            ΔG°' = -25.1 kJ/mol<br>
                            <br>
                            <strong>الأهمية:</strong><br>
                            1. تجديد NAD⁺ لاستمرار التحلل السكري<br>
                            2. في العضلات: أثناء التمرين المكثف (نقص O₂)<br>
                            3. في كريات الدم الحمراء: لا ميتوكوندريا<br>
                            4. دورة كوري: لاكتات ينتقل إلى الكبد ← جلوكوز<br>
                            <br>
                            <strong>تخمر الإيثانول (في الخميرة وبعض البكتيريا):</strong><br>
                            <strong>الخطوة 1:</strong> بيروفات ديكربوكسيلاز (مع TPP)<br>
                            بيروفات → أسيتالدهيد + CO₂<br>
                            <strong>الخطوة 2:</strong> كحول ديهيدروجيناز<br>
                            أسيتالدهيد + NADH + H⁺ → إيثانول + NAD⁺<br>
                            <br>
                            <strong>الصافي في التخمر:</strong><br>
                            جلوكوز → 2 لاكتات (أو 2 إيثانول + 2 CO₂) + 2 ATP
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">التنظيم المتكامل للتحلل السكري</h3>
                        
                        <h4 style="color:#60a5fa">5.1. المنظمات الرئيسية</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>التنظيم الهرموني:</strong><br><br>
                            <strong>الأنسولين (بعد الوجبة - جلوكوز مرتفع):</strong><br>
                            • ينشط فسفوفروكتوكيناز-2 (PFK-2) ← إنتاج F2,6BP<br>
                            • F2,6BP ينشط PFK-1 ويثبط فركتوز-1,6-بيسفوسفاتاز<br>
                            • ينشط بيروفات كيناز (في الكبد)<br>
                            • يزيد عدد ناقلات الجلوكوز على الغشاء<br>
                            <br>
                            <strong>الجلوكاجون (جوع - جلوكوز منخفض):</strong><br>
                            • ينشط بروتين كيناز A (PKA) ← يفسفر PFK-2 (يثبطه)<br>
                            • نقص F2,6BP ← تثبيط PFK-1 وتنشيط الفوسفاتاز<br>
                            • يفسفر بيروفات كيناز (يثبطه)<br>
                            • يحفز استحداث السكر بدلاً من التحلل
                        </div>
                        
                        <h4 style="color:#60a5fa">5.2. نسبة الطاقة (Energy Charge)</h4>
                        
                        <p><strong>تعريف:</strong> Energy charge = ([ATP] + ½[ADP]) / ([ATP] + [ADP] + [AMP])</p>
                        
                        <ul>
                            <li><strong>مثالي:</strong> 0.85-0.95 في الخلايا النشطة</li>
                            <li><strong>منخفض (جوع طاقوي):</strong> AMP مرتفع ← تنشيط PFK-1 وتبادل المواد</li>
                            <li><strong>مرتفع (طاقة كافية):</strong> ATP مرتفع ← تثبيط PFK-1 وتبادل المواد</li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية: التحلل السكري في السرطان (تأثير واربورغ)</strong><br>
                            تفضل الخلايا السرطانية التحلل السكري اللاهوائي حتى في وجود أوكسجين (تأثير واربورغ). أسباب ذلك:<br>
                            1. توفير لبنات بناء سريعة (للتكاثر السريع)<br>
                            2. تجنب إنتاج أنواع أكسجين تفاعلية من الميتوكوندريا<br>
                            3. خلق بيئة حمضية (بسبب اللاكتات) تساعد على غزو الأنسجة<br>
                            4. طفرات في إنزيمات التحلل (مثل PKM2) تعزز المسار
                        </div>
                    `
                },
                
                {
                    id: "3.2",
                    title: "2. دور الميتوكوندريا (حلقة كريبس)",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">حلقة حمض الستريك: محطة استقلابية مركزية</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> <span style="color:#facc15">حلقة كريبس</span> (أو حلقة حمض الستريك أو حلقة TCA) هي مسار أيضي مركزي في الميتوكوندريا، تؤكسد فيها مجموعة الأسيتيل من أسيتيل-CoA بشكل كامل إلى CO₂، مع إنتاج NADH و FADH₂ و ATP/GTP.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. نظرة عامة على الحلقة</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>المعادلة الإجمالية لدورة واحدة:</strong><br><br>
                            أسيتيل-CoA + 3 NAD⁺ + FAD + GDP (أو ADP) + Pi + 2 H₂O →<br>
                            2 CO₂ + 3 NADH + 3 H⁺ + FADH₂ + GTP (أو ATP) + CoA-SH<br><br>
                            
                            <strong>لكل جلوكوز:</strong><br>
                            2 أسيتيل-CoA → 4 CO₂ + 6 NADH + 2 FADH₂ + 2 GTP<br><br>
                            
                            <strong>الأهمية:</strong><br>
                            1. أكسدة كاملة للكربون إلى CO₂<br>
                            2. إنتاج نواقل مرجعة (NADH, FADH₂) للفسفرة التأكسدية<br>
                            3. مصدر وسطاء لمسارات التخليق الحيوي<br>
                            4. تكامل بين استقلاب السكريات، الدهون، البروتينات
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الدخول إلى حلقة كريبس</h3>
                        
                        <h4 style="color:#60a5fa">2.1. معقد نازعة هيدروجين البيروفات (PDH)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>تركيب ووظيفة معقد PDH:</strong><br><br>
                            <strong>المكونات:</strong><br>
                            • E1: بيروفات ديهيدروجيناز (24 وحدة، TPP كعامل مرافق)<br>
                            • E2: ثنائي هيدروليبويل ترانس أسيتيلاز (24 وحدة، ليبواميد)<br>
                            • E3: ليبوأميد ديهيدروجيناز (12 وحدة، FAD, NAD⁺)<br>
                            <br>
                            <strong>آلية متعددة الخطوات:</strong><br>
                            1. <strong>نزع الكربوكسيل:</strong> E1-TPP تهاجم بيروفات ← هيدروكسي إيثيل-TPP + CO₂<br>
                            2. <strong>نقل الأسيتيل:</strong> هيدروكسي إيثيل-TPP إلى ليبواميد E2 ← أسيتيل ليبواميد<br>
                            3. <strong>تكوين أسيتيل-CoA:</strong> أسيتيل ليبواميد + CoA ← أسيتيل-CoA + ليبواميد مختزل<br>
                            4. <strong>إعادة أكسدة ليبواميد:</strong> ليبواميد<sub>red</sub> + E3-FAD ← ليبواميد<sub>ox</sub> + E3-FADH₂<br>
                            5. <strong>إنتاج NADH:</strong> E3-FADH₂ + NAD⁺ ← E3-FAD + NADH + H⁺<br>
                            <br>
                            <strong>التنظيم:</strong><br>
                            • يثبط: أسيتيل-CoA، NADH، ATP (تغذية راجعة)<br>
                            • ينشط: AMP، CoA، NAD⁺، Ca²⁺<br>
                            • تعديل تساهمي: فسفرة (يثبط)، نزع فسفرة (ينشط)
                        </div>
                        
                        <h4 style="color:#60a5fa">2.2. دخول الأحماض الدهنية والأحماض الأمينية</h4>
                        
                        <ul>
                            <li><strong>الدهون:</strong> β-أكسدة ← أسيتيل-CoA متعدد</li>
                            <li><strong>الأحماض الأمينية:</strong>
                                <ul>
                                    <li>جلوتامات ← α-كيتوغلوتارات</li>
                                    <li>أسبارات ← أوكسالوأستيت</li>
                                    <li>ألانين، سيرين، سيستئين ← بيروفات ← أسيتيل-CoA</li>
                                    <li>ليوسين، ليسين ← أسيتيل-CoA مباشرة</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">تفاعلات حلقة كريبس</h3>
                        
                        <h4 style="color:#60a5fa">3.1. التفاعل 1: تكوين السيترات</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>سيترات سينثاز:</strong><br><br>
                            <strong>التفاعل:</strong> أوكسالوأستيت + أسيتيل-CoA + H₂O → سيترات + CoA-SH<br>
                            <strong>ΔG°':</strong> -31.5 kJ/mol (لا رجعة فيها)<br>
                            <br>
                            <strong>آلية متسلسلة:</strong><br>
                            1. تكوين أنيون إينولات من أسيتيل-CoA (بإزالة بروتون)<br>
                            2. هجوم محب للنواة على كربونيل الأوكسالوأستيت<br>
                            3. تكوين سيترول-CoA (مركب وسطي)<br>
                            4. تحلل مائي لـ CoA ← إطلاق سيترات<br>
                            <br>
                            <strong>التنظيم:</strong><br>
                            • يثبط: ATP، NADH، سيترات، سوكسينيل-CoA<br>
                            • تحكم تدفق: خطوة محددة رئيسية في الحلقة
                        </div>
                        
                        <h4 style="color:#60a5fa">3.2. التفاعل 2: أيزوميراز الآكونيتات</h4>
                        
                        <ul>
                            <li><strong>التفاعل:</strong> سيترات ⇌ سي<em>س</em>-آكونيتات ⇌ أيزوسيترات</li>
                            <li><strong>الإنزيم:</strong> آكونيتاز (يحتوي على [4Fe-4S] عنقود)</li>
                            <li><strong>الآلية:</strong> إزالة وإضافة الماء (نزع وإضافة محبة للماء)</li>
                            <li><strong>الأهمية:</strong> تحويل سيترات (ثالثي) إلى أيزوسيترات (ثانوي) قابل للأكسدة</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.3. التفاعل 3: نازعة هيدروجين أيزوسيترات</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>أيزوسيترات ديهيدروجيناز (IDH):</strong><br><br>
                            <strong>التفاعل:</strong> أيزوسيترات + NAD⁺ ⇌ أوكسالوسكسينات + NADH + H⁺<br>
                            <strong>ΔG°':</strong> +8.4 kJ/mol (قابل للانعكاس)<br>
                            <br>
                            <strong>الأشكال:</strong><br>
                            • <strong>IDH3:</strong> يعتمد على NAD⁺، في الميتوكوندريا، منظم<br>
                            • <strong>IDH1/2:</strong> يعتمد على NADP⁺، في السيتوسول والميتوكوندريا<br>
                            <br>
                            <strong>التنظيم (لـ IDH3):</strong><br>
                            • يثبط: ATP، NADH (تغذية راجعة)<br>
                            • ينشط: ADP، Ca²⁺ (في العضلات)<br>
                            <br>
                            <strong>أهمية سرطانية:</strong> طفرات في IDH1/2 ← إنتاج 2-هيدروكسي غلوتارات (2-HG) ← تغيير مثيلة DNA
                        </div>
                        
                        <h4 style="color:#60a5fa">3.4. التفاعل 4: نازعة كربوكسيل α-كيتوغلوتارات</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>معقد α-كيتوغلوتارات ديهيدروجيناز (α-KGDH):</strong><br><br>
                            <strong>التفاعل:</strong> α-كيتوغلوتارات + NAD⁺ + CoA → سوكسينيل-CoA + CO₂ + NADH<br>
                            <strong>ΔG°':</strong> -33.5 kJ/mol (لا رجعة فيها)<br>
                            <br>
                            <strong>التشابه مع PDH:</strong> نفس المكونات (E1, E2, E3) ونفس الآلية<br>
                            ولكن: E1 مختلف (لـ α-كيتوغلوتارات بدلاً من بيروفات)<br>
                            <br>
                            <strong>التنظيم:</strong><br>
                            • يثبط: NADH، سوكسينيل-CoA (تغذية راجعة)<br>
                            • ينشط: Ca²⁺ (في العضلات)<br>
                            <br>
                            <strong>الأهمية:</strong> ثاني نزع كربوكسيل ← إنتاج أول CO₂ من أسيتيل-CoA الأصلي
                        </div>
                        
                        <h4 style="color:#60a5fa">3.5. التفاعل 5: إنتاج GTP</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>سوكسينيل-CoA سينثيتاز (أو سوكسينيك ثيوكناز):</strong><br><br>
                            <strong>التفاعل:</strong> سوكسينيل-CoA + GDP (أو ADP) + Pi ⇌ سوكسينات + GTP (أو ATP) + CoA<br>
                            <strong>ΔG°':</strong> -2.9 kJ/mol (قابل للانعكاس)<br>
                            <br>
                            <strong>آلية فسفرة على مستوى الركيزة:</strong><br>
                            1. سوكسينيل-CoA له رابطة ثيويستر عالية الطاقة<br>
                            2. فسفو-هيستيدين إنزيم يستقبل Pi ← فسفو-إنزيم<br>
                            3. فسفو-إنزيم ينقل الفوسفات إلى GDP ← GTP<br>
                            <br>
                            <strong>الأشكال:</strong><br>
                            • <strong>النوع A:</strong> ADP-specific (العضلات الهيكلية)<br>
                            • <strong>النوع G:</strong> GDP-specific (الكبد، الكلى)<br>
                            <br>
                            <strong>التوازن:</strong> قريب من التوازن ← ليس موقع تنظيم رئيسي
                        </div>
                        
                        <h4 style="color:#60a5fa">3.6. التفاعل 6: نازعة هيدروجين السوكسينات</h4>
                        
                        <ul>
                            <li><strong>التفاعل:</strong> سوكسينات + FAD ⇌ فومارات + FADH₂</li>
                            <li><strong>الإنزيم:</strong> سوكسينات ديهيدروجيناز (مرتبط بالغشاء الداخلي للميتوكوندريا)</li>
                            <li><strong>المكونات:</strong>
                                <ul>
                                    <li>وحدة محفزة تحتوي على FAD (مرتبط تساهمياً)</li>
                                    <li>3 مراكز [Fe-S] (2Fe-2S, 3Fe-4S, 4Fe-4S)</li>
                                    <li>وحدة ارتباط بالسيتوكروم b<sub>560</sub></li>
                                </ul>
                            </li>
                            <li><strong>التثبيط:</strong> بمالونات (مثيب تنافسي)، أوكسالأسيتات</li>
                            <li><strong>الأهمية:</strong> الوحيدة في الحلقة التي تنتج FADH₂ مباشرة</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.7. التفاعل 7: إضافة الماء</h4>
                        
                        <ul>
                            <li><strong>التفاعل:</strong> فومارات + H₂O ⇌ مالات</li>
                            <li><strong>الإنزيم:</strong> فوماراز (فومارات هيدراتاز)</li>
                            <li><strong>الآلية:</strong> إضافة محبة للماء عبر أيون كربانيون وسطي</li>
                            <li><strong>الستيريوكيمياء:</strong> إضافة مضادة (anti-addition) ← L-مالات فقط</li>
                            <li><strong>التوازن:</strong> ΔG°' = -3.8 kJ/mol (يتجه نحو المالات)</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.8. التفاعل 8: إعادة توليد الأوكسالوأستيت</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مالات ديهيدروجيناز:</strong><br><br>
                            <strong>التفاعل:</strong> مالات + NAD⁺ ⇌ أوكسالوأستيت + NADH + H⁺<br>
                            <strong>ΔG°':</strong> +29.7 kJ/mol (قابل للانعكاس بشدة)<br>
                            <br>
                            <strong>التوازن:</strong> يفضل بشدة اتجاه عكسي (نحو المالات)<br>
                            <strong>كيف تتقدم الحلقة؟</strong><br>
                            1. إزالة المنتجات: أوكسالوأستيت (بسيترات سينثيز)، NADH (بسلسلة تنفسية)<br>
                            2. تركيزات داخلية منخفضة جداً من أوكسالوأستيت (10⁻⁸ إلى 10⁻⁶ M)<br>
                            3. تفاعلات أخرى تسحب: سيترات سينثيز (ΔG°' = -31.5 kJ/mol)<br>
                            <br>
                            <strong>الدفع العام للحلقة:</strong> نزع كربوكسيل (CO₂) وإنتاج مواد غازية
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">وظائف إضافية للحلقة</h3>
                        
                        <h4 style="color:#60a5fa">4.1. دور التخليق الحيوي (Anaplerotic reactions)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>تفاعلات تعويضية تعيد ملء وسطاء الحلقة:</strong><br><br>
                            <strong>1. البيروفات كربوكسيلاز:</strong><br>
                            بيروفات + CO₂ + ATP → أوكسالوأستيت + ADP + Pi<br>
                            • يحفزها الأنسولين، الأسيتيل-CoA<br>
                            • مهم في استحداث السكر، تخليق الأحماض الدهنية<br>
                            <br>
                            <strong>2. PEP كربوكسيكيناز (في الميتوكوندريا):</strong><br>
                            PEP + CO₂ + GDP → أوكسالوأستيت + GTP<br>
                            <br>
                            <strong>3. انتقال حمض الأمينو:</strong><br>
                            أسبارات + α-كيتوغلوتارات ⇌ أوكسالوأستيت + جلوتامات<br>
                            <br>
                            <strong>4. إيزوسيترات ديهيدروجيناز (NADP⁺):</strong><br>
                            إنتاج α-كيتوغلوتارات لتخليق الجلوتامات
                        </div>
                        
                        <h4 style="color:#60a5fa">4.2. تخليق وسطاء للحموض الأمينية</h4>
                        
                        <ul>
                            <li><strong>أوكسالوأستيت →</strong> أسبارات، أسباراجين، ميثيونين، ثريونين، ليسين</li>
                            <li><strong>α-كيتوغلوتارات →</strong> جلوتامات، جلوتامين، برولين، أرجينين</li>
                            <li><strong>سوكسينيل-CoA →</strong> بورفيرينات (هيم)، كوليسترول</li>
                            <li><strong>أوكسالوأستيت →</strong> جلوكوز (عبر استحداث السكر)</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">4.3. التكامل الطاقوي</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>حصيلة الطاقة من أكسدة الجلوكوز الكاملة:</strong><br><br>
                            <strong>التحلل السكري (سيتوسول):</strong><br>
                            • الجلوكوز → 2 بيروفات<br>
                            • المنتجات: 2 ATP (صافي)، 2 NADH<br>
                            <br>
                            <strong>نقل بيروفات إلى الميتوكوندريا:</strong><br>
                            • 2 بيروفات → 2 أسيتيل-CoA<br>
                            • المنتجات: 2 NADH، 2 CO₂<br>
                            <br>
                            <strong>حلقة كريبس (لكل أسيتيل-CoA):</strong><br>
                            • المنتجات: 3 NADH، 1 FADH₂، 1 GTP، 2 CO₂<br>
                            • لكل جلوكوز: 6 NADH، 2 FADH₂، 2 GTP، 4 CO₂<br>
                            <br>
                            <strong>الإجمالي قبل الفسفرة التأكسدية:</strong><br>
                            • من الجلوكوز: 2 ATP + 2 GTP = 4 ATP مكافئ<br>
                            • نواقل مرجعة: 10 NADH (2 من تحلل، 2 من PDH، 6 من كريبس)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 2 FADH₂<br>
                            <br>
                            <strong>بعد الفسفرة التأكسدية (تقريباً):</strong><br>
                            • 10 NADH × 2.5 ATP = 25 ATP<br>
                            • 2 FADH₂ × 1.5 ATP = 3 ATP<br>
                            • الإجمالي: 4 + 25 + 3 = 32 ATP/جلوكوز
                        </div>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية: حلقة اليوريا وحلقة كريبس متصلة</strong><br>
                            تتداخل حلقة اليوريا مع حلقة كريبس عبر تفاعل "اليوريا-كريبس":<br>
                            1. فومارات المنتج في اليوريا يدخل حلقة كريبس (يضاف له الماء ← مالات)<br>
                            2. أوكسالوأستيت من حلقة كريبس يمكن تحويله إلى أسبارات لدخول اليوريا<br>
                            3. هذا التكامل يسمح بنقل الطاقة بين المسارين ويوفر مرونة استقلابية
                        </div>
                    `
                },
                
                {
                    id: "3.3",
                    title: "3. الفسفرة التأكسدية",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">السلسلة التنفسية: محرك إنتاج ATP</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> <span style="color:#facc15">الفسفرة التأكسدية</span> هي العملية التي يتم فيها تحويل الطاقة المخزنة في NADH و FADH₂ إلى طاقة في روابط الفوسفات العالية الطاقة في ATP، عبر سلسلة من نواقل الإلكترونات في الغشاء الداخلي للميتوكوندريا، مع استخدام القوة الدافعة البروتونية الناتجة.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. نظرة عامة على الفسفرة التأكسدية</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>المعادلة الإجمالية (لـ NADH):</strong><br><br>
                            NADH + H⁺ + ½ O₂ + 2.5 ADP + 2.5 Pi → NAD⁺ + H₂O + 2.5 ATP<br>
                            ΔG°' = -219 kJ/mol (لأكسدة NADH)<br><br>
                            
                            <strong>المعادلة (لـ FADH₂):</strong><br>
                            FADH₂ + ½ O₂ + 1.5 ADP + 1.5 Pi → FAD + H₂O + 1.5 ATP<br><br>
                            
                            <strong>الكفاءة الطاقوية:</strong><br>
                            • الطاقة في NADH: 219 kJ/mol<br>
                            • الطاقة في ATP (ΔG°' للتحلل): 30.5 kJ/mol<br>
                            • الكفاءة: (2.5 × 30.5)/219 × 100 = ≈ 35%<br>
                            • الباقي يتحول إلى حرارة أو يستخدم في النقل
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">بنية الغشاء الداخلي للميتوكوندريا</h3>
                        
                        <h4 style="color:#60a5fa">2.1. الطيات (Cristae)</h4>
                        
                        <ul>
                            <li><strong>التكوين:</strong> طيات متخصصة من الغشاء الداخلي</li>
                            <li><strong>وظيفة:</strong> زيادة مساحة السطح (10x أو أكثر)</li>
                            <li><strong>التوزيع:</strong> مجمعات سلسلة التنفس تتركز في قمم الطيات</li>
                            <li><strong>ATP سينثيز:</strong> يتركز في قواعد الطيات وعلى الأغشية المسطحة</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.2. المصفوفة مقابل الحيز بين الغشائي</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>خصائص أقسام الميتوكوندريا:</strong><br><br>
                            <strong>المصفوفة (Matrix):</strong><br>
                            • pH: ≈ 7.8 (قلوي)<br>
                            • يحتوي على: إنزيمات حلقة كريبس، β-أكسدة، DNA ميتوكوندري<br>
                            • تركيزات: ADP منخفض، ATP مرتفع (عند الراحة)<br>
                            • ناقلات: نظام نقل خاص للمواد عبر الغشاء الداخلي<br>
                            <br>
                            <strong>الحيز بين الغشائي (Intermembrane Space):</strong><br>
                            • pH: ≈ 7.2 (أكثر حامضية)<br>
                            • يشبه السيتوسول في تركيز الأيونات الصغيرة<br>
                            • يحتوي على: ناقلات كرياتين/فوسفوكرياتين (في العضلات)<br>
                            • إنزيمات: سوكسينات ديهيدروجيناز (مرتبط بالغشاء)<br>
                            <br>
                            <strong>الفرق في [بروتون]:</strong> 0.6 وحدة pH ← ΔpH ≈ 0.6
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">مركبات السلسلة التنفسية</h3>
                        
                        <h4 style="color:#60a5fa">3.1. المعقد I (NADH:ubiquinone oxidoreductase)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>بنية ووظيفة المعقد I:</strong><br><br>
                            <strong>الحجم:</strong> ≈ 1 MDa، أكبر معقد في السلسلة<br>
                            <strong>الشكل:</strong> على شكل حرف L (ذراع في المصفوفة، ذراع في الغشاء)<br>
                            <br>
                            <strong>المسار المحفز:</strong><br>
                            1. ارتباط NADH في المصفوفة ← أكسدته إلى NAD⁺<br>
                            2. نقل 2e⁻ عبر FMN ثم 7-8 مراكز [Fe-S]<br>
                            3. وصول الإلكترونات إلى موقع Q (يختزل ubiquinone إلى ubiquinol)<br>
                            4. نقل 4H⁺ من المصفوفة إلى الحيز بين الغشائي<br>
                            <br>
                            <strong>التفاعل:</strong> NADH + H⁺ + Q + 4H⁺<sub>matrix</sub> → NAD⁺ + QH₂ + 4H⁺<sub>IMS</sub><br>
                            <br>
                            <strong>التنظيم:</strong> يثبط بـ piericidin A، rotenone<br>
                            <strong>الكفاءة:</strong> نقل 4H⁺/2e⁻ (نسبة بروتون/إلكترون = 2)
                        </div>
                        
                        <h4 style="color:#60a5fa">3.2. المعقد II (سوكسينات ديهيدروجيناز)</h4>
                        
                        <ul>
                            <li><strong>الوظيفة:</strong> أكسدة سوكسينات إلى فومارات مع اختزال FAD إلى FADH₂</li>
                            <li><strong>التفاعل:</strong> سوكسينات + Q ⇌ فومارات + QH₂</li>
                            <li><strong>الميزة:</strong> لا يضخ بروتونات ← لا يساهم في Δp مباشرة</li>
                            <li><strong>الأهمية:</strong> يوصل حلقة كريبس بالسلسلة عبر FADH₂</li>
                            <li><strong>المثبطات:</strong> مالونات (تنافسي)، oxaloacetate</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.3. اليويكوينون (Q أو Coenzyme Q)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>خصائص اليويكوينون:</strong><br><br>
                            <strong>التركيب:</strong> بنزوكينون مع ذيل إيزوبرينويد طويل (10 وحدات في الإنسان)<br>
                            <strong>الحركة:</strong> ينتشر بحرية في الطبقة الدهنية للغشاء<br>
                            <strong>دورة الأكسدة والاختزال:</strong><br>
                            Q (أكسد) + e⁻ + H⁺ → Q•⁻ (شبه كينون)<br>
                            Q•⁻ + e⁻ + H⁺ → QH₂ (يويكوينول)<br>
                            <br>
                            <strong>وظائف:</strong><br>
                            1. يجمع الإلكترونات من المعقدات I و II<br>
                            2. ينقل الإلكترونات والبروتونات عبر الغشاء<br>
                            3. مخزن للإلكترونات (تجمع Q كبير)<br>
                            4. مضاد أكسدة (يقومع الجذور الحرة)<br>
                            <br>
                            <strong>التوازن:</strong> يتحول تلقائياً بين الأشكال حسب ΔE<sub>h</sub>
                        </div>
                        
                        <h4 style="color:#60a5fa">3.4. المعقد III (يويكوينول:سيتوكروم c oxidoreductase)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>بنية ووظيفة المعقد III (سيتوكروم bc₁ complex):</strong><br><br>
                            <strong>المكونات:</strong> ثنائي مع 11 وحدة فرعية لكل مونومر<br>
                            • Cyt b: هيامين b<sub>L</sub> (منخفض الإمكانيات) و b<sub>H</sub> (مرتفع الإمكانيات)<br>
                            • Cyt c₁: ينقل إلكترون إلى سيتوكروم c<br>
                            • وحدة Rieske Fe-S: [2Fe-2S] متحركة<br>
                            <br>
                            <strong>آلية Q-cycle (لكل QH₂):</strong><br>
                            <strong>في الموقع Q<sub>o</sub> (ضد المصفوفة):</strong><br>
                            1. QH₂ يرتبط ← يعطي e⁻ إلى وحدة Rieske ← Cyt c₁ ← Cyt c<br>
                            2. QH₂⁺ (شبه كينون) يعطي e⁻ الثاني إلى Cyt b<sub>L</sub> ← b<sub>H</sub><br>
                            3. Q يتحرر، 2H⁺ تطلق في IMS<br>
                            <br>
                            <strong>في الموقع Q<sub>i</sub> (على جانب المصفوفة):</strong><br>
                            4. e⁻ من Cyt b<sub>H</sub> يختزل Q إلى Q•⁻<br>
                            5. بعد دورة ثانية: Q•⁻ + e⁻ + 2H⁺<sub>matrix</sub> → QH₂<br>
                            <br>
                            <strong>الصافي:</strong> QH₂ + 2 Cyt c<sub>ox</sub> + 2H⁺<sub>matrix</sub> → Q + 2 Cyt c<sub>red</sub> + 4H⁺<sub>IMS</sub><br>
                            (4H⁺/2e⁻، 2 Cyt c مختزل/2e⁻)
                        </div>
                        
                        <h4 style="color:#60a5fa">3.5. سيتوكروم c</h4>
                        
                        <ul>
                            <li><strong>التركيب:</strong> بروتين صغير (12 kDa) مع هيم c</li>
                            <li><strong>الموقع:</strong> مرتبط بالغشاء على سطح IMS</li>
                            <li><strong>الحركة:</strong> ينتشر على السطح (غير قابل للذوبان في الدهون)</li>
                            <li><strong>وظيفة:</strong> ينقل إلكترون واحد من المعقد III إلى المعقد IV</li>
                            <li><strong>أهمية:</strong> وسطاء في استماتة الخلية (إطلاق من الميتوكوندريا)</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">3.6. المعقد IV (سيتوكروم c oxidase)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>بنية ووظيفة المعقد IV:</strong><br><br>
                            <strong>الحجم:</strong> ≈ 400 kDa، ثنائي وظيفي<br>
                            <strong>مراكز المعدن:</strong><br>
                            • Cu<sub>A</sub>: ثنائي النحاس (يقبل إلكترونات من Cyt c)<br>
                            • Heme a: ينقل إلكترون إلى مركز a<sub>3</sub>/Cu<sub>B</sub><br>
                            • Heme a<sub>3</sub>-Cu<sub>B</sub>: مركز ثنائي للنواة (موقع ارتباط O₂)<br>
                            <br>
                            <strong>آلية اختزال O₂:</strong><br>
                            1. 4 Cyt c<sub>red</sub> تعطي 4e⁻ عبر Cu<sub>A</sub> و Heme a<br>
                            2. ارتباط O₂ بين Fe (في Heme a<sub>3</sub>) و Cu<sub>B</sub><br>
                            3. إضافة 4e⁻ + 4H⁺ ← 2 H₂O<br>
                            4. ضخ 4H⁺ من المصفوفة إلى IMS<br>
                            <br>
                            <strong>التفاعل:</strong> 4 Cyt c<sub>red</sub> + 8H⁺<sub>matrix</sub> + O₂ → 4 Cyt c<sub>ox</sub> + 2 H₂O + 4H⁺<sub>IMS</sub><br>
                            <strong>الصافي:</strong> 2H⁺/2e⁻ ضخ + 2H⁺/2e⁻ استهلاك = 4H⁺/4e⁻ ضخ صافي
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">القوة الدافعة البروتونية</h3>
                        
                        <h4 style="color:#60a5fa">4.1. حساب Δp</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مكونات القوة الدافعة البروتونية (Proton Motive Force, Δp):</strong><br><br>
                            Δp = ΔΨ - (2.3RT/F)ΔpH<br>
                            <br>
                            <strong>حيث:</strong><br>
                            ΔΨ = جهد الغشاء (سالب داخل المصفوفة)<br>
                            ΔpH = فرق pH (pH<sub>matrix</sub> - pH<sub>IMS</sub>)<br>
                            R = ثابت الغازات، T = درجة الحرارة، F = ثابت فاراداي<br>
                            <br>
                            <strong>في الميتوكوندريا النشطة:</strong><br>
                            ΔΨ = -150 إلى -180 mV (داخل المصفوفة سالب)<br>
                            ΔpH = 0.5-1.0 وحدة (المصفوفة أكثر قلوية)<br>
                            (2.3RT/F) ≈ 60 mV عند 37°C<br>
                            <br>
                            <strong>المثال:</strong> إذا كان ΔΨ = -160 mV و ΔpH = 0.8:<br>
                            Δp = -160 - (60 × 0.8) = -160 - 48 = -208 mV
                        </div>
                        
                        <h4 style="color:#60a5fa">4.2. مصادر البروتونات</h4>
                        
                        <p><strong>لكل NADH مؤكسد:</strong></p>
                        <ul>
                            <li>المعقد I: 4 H⁺ (من المصفوفة إلى IMS)</li>
                            <li>المعقد III: 4 H⁺ (عبر Q-cycle)</li>
                            <li>المعقد IV: 2 H⁺ (صافي بعد حساب H⁺ المستخدمة في صنع الماء)</li>
                            <li><strong>المجموع:</strong> 10 H⁺/NADH</li>
                        </ul>
                        
                        <p><strong>لكل FADH₂ مؤكسد:</strong></p>
                        <ul>
                            <li>المعقد II: 0 H⁺ (لا يضخ)</li>
                            <li>المعقد III: 4 H⁺</li>
                            <li>المعقد IV: 2 H⁺</li>
                            <li><strong>المجموع:</strong> 6 H⁺/FADH₂</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">ATP سينثيز (المعقد V)</h3>
                        
                        <h4 style="color:#60a5fa">5.1. البنية والوظيفة</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>بنية ATP سينثيز (F₀F₁ ATPase):</strong><br><br>
                            <strong>الجزء F₀ (في الغشاء):</strong><br>
                            • a-subunit: قناة بروتونية (نصف قناة)<br>
                            • c-ring: 8-15 وحدة c (حسب النوع)، كل وحدة تحتوي على Asp/Glu<br>
                            • b<sub>2</sub> و δ: عمود ثابت يربط F₀ بـ F₁<br>
                            <br>
                            <strong>الجزء F₁ (في المصفوفة):</strong><br>
                            • α₃β₃γδε: مركب سداسي<br>
                            • مواقع ارتباط: 3 مواقع على β (L, T, O)<br>
                            • γ-subunit: عمود دوار داخل α₃β₃<br>
                            • ε: يساعد في ربط γ لـ c-ring<br>
                            <br>
                            <strong>الآلية:</strong> دوران c-ring ← دوران γ داخل α₃β₃ ← تغييرات تشكلية
                        </div>
                        
                        <h4 style="color:#60a5fa">5.2. آلية التغيير التشكلي (Binding Change Mechanism)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>دورة الثلاث خطوات (120° دوران لكل خطوة):</strong><br><br>
                            <strong>الموقع L (Loose):</strong> ADP + Pi مرتبطان بشكل ضعيف<br>
                            <strong>الموقع T (Tight):</strong> ATP مرتبط بشدة (تكوين الرابطة)<br>
                            <strong>الموقع O (Open):</strong> ATP مرتبط بشكل ضعيف (يطلق)<br>
                            <br>
                            <strong>الدورة:</strong><br>
                            1. دوران 120° ← L → T (يتحول ADP+Pi إلى ATP)<br>
                            2. دوران 120° ← T → O (يطلق ATP)<br>
                            3. دوران 120° ← O → L (يرتبط ADP+Pi جديدان)<br>
                            <br>
                            <strong>النتيجة:</strong> 1 ATP/120° دوران ← 3 ATP/دورة كاملة
                        </div>
                        
                        <h4 style="color:#60a5fa">5.3. التكافؤ البروتوني</h4>
                        
                        <ul>
                            <li><strong>عدد وحدات c في c-ring:</strong> يختلف حسب الكائن (8 في الإنسان، 10 في الخميرة، 14 في بكتيريا)</li>
                            <li><strong>لكل بروتون:</strong> يدور c-ring 360°/عدد وحدات c</li>
                            <li><strong>لكل دورة كاملة:</strong> عدد وحدات c H⁺ تدفع c-ring دورة واحدة</li>
                            <li><strong>نسبة ATP/H⁺:</strong> 3 ATP/عدد وحدات c H⁺</li>
                            <li><strong>في الإنسان (c<sub>8</sub>):</strong> 3 ATP/8 H⁺ = 0.375 ATP/H⁺</li>
                            <li><strong>لكل NADH (10 H⁺):</strong> 10 × 0.375 = 3.75 ATP (تقريباً 2.5 حسب الكفاءة)</li>
                            <li><strong>لكل FADH₂ (6 H⁺):</strong> 6 × 0.375 = 2.25 ATP (تقريباً 1.5)</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">التنظيم والتحكم</h3>
                        
                        <h4 style="color:#60a5fa">6.1. تحكم السلسلة التنفسية</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>مبدأ تحكم السلسلة التنفسية:</strong><br><br>
                            <strong>الحالة 1 (ADP مرتفع، احتياج للطاقة):</strong><br>
                            • ADP يدخل المصفوفة عبر ناقل ATP/ADP<br>
                            • ATP سينثيز نشط ← بروتونات تتدفق ← Δp ينخفض<br>
                            • السلسلة التنفسية تزيد نشاطها لتعويض Δp<br>
                            • أكسدة NADH و FADH₂ تزيد ← حلقة كريبس تسرع<br>
                            <br>
                            <strong>الحالة 2 (ADP منخفض، طاقة كافية):</strong><br>
                            • ATP سينثيز بطيء ← تدفق بروتونات قليل ← Δp مرتفع<br>
                            • Δp مرتفع يبطئ السلسلة التنفسية (تثبيط ارتجاعي)<br>
                            • NADH يتراكم ← يثبط حلقة كريبس وPDH<br>
                            <br>
                            <strong>التوازن:</strong> معدل التنفس يتناسب مع احتياجات ATP
                        </div>
                        
                        <h4 style="color:#60a5fa">6.2. ناقل ATP/ADP</h4>
                        
                        <ul>
                            <li><strong>الوظيفة:</strong> يتبادل ADP³⁻ (من IMS) مع ATP⁴⁻ (من المصفوفة)</li>
                            <li><strong>التأثير:</strong> يستورد 1 شحنة سالبة ← يساهم في ΔΨ</li>
                            <li><strong>التكلفة:</strong> ≈ 0.5 H⁺ لكل ATP مصدر (يحتسب في الكفاءة)</li>
                            <li><strong>التنظيم:</strong> يثبط بـ atractyloside و bongkrekic acid</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">6.3. التسريب البروتوني</h4>
                        
                        <ul>
                            <li><strong>المصادر:</strong> قنوات بروتونية، UCPs، تسريب عبر الغشاء</li>
                            <li><strong>UCP1 (في الدهون البنية):</strong> ناقل بروتوني يتجاوز ATP سينثيز ← إنتاج حرارة</li>
                            <li><strong>التأثير:</strong> يخفض كفاءة إنتاج ATP ← يولد حرارة</li>
                            <li><strong>في الإنسان:</strong> 20-30% من بروتونات السلسلة تتسرب (لا تنتج ATP)</li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية: نظرية التناضح الكيميائي</strong><br>
                            اقترحها بيتر ميتشل عام 1961، حصل على جائزة نوبل عام 1978. تقترح أن:<br>
                            1. نقل الإلكترونات عبر السلسلة يقترن بنقل بروتونات عبر الغشاء<br>
                            2. ينتج تدرج بروتونات (Δp) عبر الغشاء<br>
                            3. Δp يقود تخليق ATP عبر ATP سينثيز<br>
                            الأدلة: الميتوكوندريا المعزولة تنتج ATP عند تطبيق Δp صناعي، المواد التي تفكك Δp (مثل FCCP) تمنع إنتاج ATP.
                        </div>
                    `
                },
                
                {
                    id: "3.4",
                    title: "4. التكتونية العامة",
                    content: `
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">الصفائح التكتونية: محرك ديناميكية الأرض</h3>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>المفهوم الأساسي:</strong> <span style="color:#facc15">الصفائح التكتونية</span> هي نظرية علمية تصف الحركات الكبيرة للغلاف الصخري للأرض، حيث تتحرك الصفائح الصلبة نسبياً فوق طبقة الأثينوسفير اللدنة، مما يسبب الزلازل والبراكين وتشكل الجبال وتطور القارات.
                        </div>
                        
                        <h4 style="color:#60a5fa">1.1. البنية الداخلية للأرض</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>الطبقات الرئيسية للأرض:</strong><br><br>
                            <strong>القشرة (Crust):</strong> 5-70 km<br>
                            • <strong>قارية:</strong> 30-70 km، كثافة 2.7 g/cm³، غرانيتي<br>
                            • <strong>محية:</strong> 5-10 km، كثافة 3.0 g/cm³، بازلتي<br>
                            <br>
                            <strong>الوشاح (Mantle):</strong> حتى 2890 km<br>
                            • <strong>الوشاح العلوي:</strong> حتى 660 km، بيريدوتيت<br>
                            • <strong>الوشاح السفلي:</strong> 660-2890 km، أكثر كثافة<br>
                            • <strong>الأثينوسفير:</strong> 100-200 km، لدن جزئي (0.1%)<br>
                            <br>
                            <strong>اللب (Core):</strong> 2890-6371 km<br>
                            • <strong>اللب الخارجي:</strong> 2890-5150 km، سائل، Fe-Ni<br>
                            • <strong>اللب الداخلي:</strong> 5150-6371 km، صلب، Fe<br>
                            <br>
                            <strong>الغلاف الصخري (Lithosphere):</strong> قشرة + جزء علوي من الوشاح (صلب)
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">حدود الصفائح وأنواعها</h3>
                        
                        <h4 style="color:#60a5fa">2.1. الحدود المتباعدة (Divergent Boundaries)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>الظهرات المحيطية (Mid-Ocean Ridges):</strong><br><br>
                            <strong>المميزات:</strong><br>
                            • ارتفاع حراري مرتفع (Heat Flow)<br>
                            • بازلت وسطي المحيط (MORB)<br>
                            • زلازل ضحلة (< 30 km)<br>
                            • وجود وادي انهدام مركزي (Rift Valley)<br>
                            <br>
                            <strong>العمليات:</strong><br>
                            1. تيارات حمل في الوشاح تصعد تحت الظهرة<br>
                            2. انصهار بتخفيف الضغط (Decompression Melting)<br>
                            3. صهارة بازلتية ترتفع وتبرد ← قشرة محية جديدة<br>
                            4. تباعد مستمر ← توسع قاع البحر (Sea-floor Spreading)<br>
                            <br>
                            <strong>معدل التباعد:</strong><br>
                            • بطيء: 1-5 cm/year (محيط الأطلنطي)<br>
                            • سريع: 10-20 cm/year (محيط الهادي)<br>
                            <br>
                            <strong>مثال:</strong> ظهرة وسط الأطلنطي، ظهرة شرق الهادي
                        </div>
                        
                        <p><strong>الظهورات القارية (Continental Rifts):</strong></p>
                        <ul>
                            <li>مرحلة مبكرة من انقسام القارات</li>
                            <li>توسع ← بحيرات ووديان انهدام</li>
                            <li>مثال: الوادي المتصدع الكبير (شرق أفريقيا)</li>
                            <li>ممكن أن يتطور إلى بحر ثم محيط</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">2.2. الحدود المتقاربة (Convergent Boundaries)</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>الأنواع الثلاثة للتقارب:</strong><br><br>
                            <strong>1. محيطي-قاري (Oceanic-Continental):</strong><br>
                            • الصفيحة المحية تنغوص تحت القارية (أكثر كثافة)<br>
                            • تشكل خندق محيطي (Trench)<br>
                            • براكين أنديزية (غنية بالسيليكا)<br>
                            • زلازل على مستوى بينزو-واداتي (حتى 700 km)<br>
                            • مثال: ساحل أمريكا الجنوبية (نازكا تحت أمريكا الجنوبية)<br>
                            <br>
                            <strong>2. محيطي-محيطي (Oceanic-Oceanic):</strong><br>
                            • الصفيحة الأقدم/الأبرد تنغوص<br>
                            • أقواس جزر بركانية (Island Arcs)<br>
                            • مثال: جزر اليابان، جزر ألوشيان<br>
                            <br>
                            <strong>3. قاري-قاري (Continental-Continental):</strong><br>
                            • لا غوص (كثافة متشابهة منخفضة)<br>
                            • تصادم ← تكوين جبال (Orogeny)<br>
                            • مثال: هيمالايا (الهند تحت آسيا)، الألب
                        </div>
                        
                        <h4 style="color:#60a5fa">2.3. الحدود التحويلية (Transform Boundaries)</h4>
                        
                        <ul>
                            <li><strong>الوصف:</strong> حركة أفقية متوازية بين صفيحتين</li>
                            <li><strong>الموقع:</strong> غالباً على طول ظهرات محيطية (تحويلات محيطية)</li>
                            <li><strong>الزلازل:</strong> ضحلة، أفقية الحركة</li>
                            <li><strong>مثال:</strong> صدع سان أندرياس (باسيفيك تحت أمريكا الشمالية)</li>
                            <li><strong>حركة:</strong> يمينية (Dextral) أو يسارية (Sinistral)</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">آليات حركة الصفائح</h3>
                        
                        <h4 style="color:#60a5fa">3.1. القوى الدافعة</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>القوى المؤثرة على الصفائح:</strong><br><br>
                            <strong>قوى السحب (Slab Pull):</strong><br>
                            • أقوى قوة (50-90% من القوة الدافعة)<br>
                            • ناتجة عن كثافة الصفيحة الغائصة (باردة)<br>
                            • تؤثر عند حدود التقارب<br>
                            <br>
                            <strong>قوى الدفع (Ridge Push):</strong><br>
                            • ارتفاع الصفيحة عند الظهرة ← انحدار طوبوغرافي<br>
                            • الجاذبية تدفع الصفيحة بعيداً عن الظهرة<br>
                            • تساهم بنسبة 10-20%<br>
                            <br>
                            <strong>سحب القاع (Basal Drag):</strong><br>
                            • احتكاك بين الغلاف الصخري والأثينوسفير<br>
                            • يمكن أن يكون مساعداً أو معاكساً للحركة<br>
                            <br>
                            <strong>قوى مقاومة:</strong><br>
                            • مقاومة الغوص (Slab Resistance) عند الخنادق<br>
                            • قوى التحول (Transform Fault Resistance)<br>
                            • مقاومة الجذور القارية (Continental Drag)
                        </div>
                        
                        <h4 style="color:#60a5fa">3.2. تيارات الحمل في الوشاح</h4>
                        
                        <ul>
                            <li><strong>المبدأ:</strong> انتقال الحرارة عبر حركة المادة</li>
                            <li><strong>المصادر الحرارية:</strong> اضمحلال إشعاعي (80%)، حرارة أولية من التكوين (20%)</li>
                            <li><strong>أنماط الحمل:</strong>
                                <ul>
                                    <li><strong>حمل كلي (Whole-mantle):</strong> تيارات من اللب إلى القشرة</li>
                                    <li><strong>حمل طبقي (Layered):</strong> حد عند 660 km (انتقال طوري)</li>
                                    <li><strong>حمل هجين:</strong> معظمه كلي مع بعض العوائق</li>
                                </ul>
                            </li>
                            <li><strong>سرعة الحمل:</strong> 1-20 cm/year (بطيء بسبب لزوجة عالية)</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">البراكين وتوزيعها</h3>
                        
                        <h4 style="color:#60a5fa">4.1. البراكين عند الحدود المتقاربة</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>آلية تشكل الصهارة في مناطق الغوص:</strong><br><br>
                            <strong>1. إزالة الماء (Dehydration):</strong><br>
                            • صفيحة محية غائصة تحتوي على ماء في معادن (سربنتين، كلوريت)<br>
                            • مع زيادة العمق (70-150 km)، تحرر الماء عند 500-800°C<br>
                            • الماء يخفض درجة انصهار الصخور الوشاحية ← انصهار جزئي<br>
                            <br>
                            <strong>2. انصهار الصفيحة الغائصة:</strong><br>
                            • المواد المنصهرة: غنية بالسيليكا (أنديزية إلى ريوليتية)<br>
                            • لزوجة عالية ← ثورات متفجرة<br>
                            • تحتوي على نسبة ماء عالية (2-6%)<br>
                            <br>
                            <strong>3. تشكيل قوس بركاني:</strong><br>
                            • المسافة من الخندق تحدد بزاوية الغوص (Slab Dip)<br>
                            • الصيغة: Distance ≈ Depth × cot(θ)<br>
                            • مثال: زاوية 45° ← براكين على بعد 100-150 km من الخندق
                        </div>
                        
                        <h4 style="color:#60a5fa">4.2. البراكين عند النقاط الساخنة</h4>
                        
                        <ul>
                            <li><strong>التعريف:</strong> مناطق صهارة ثابتة نسبياً تحت الصفائح</li>
                            <li><strong>الأصل:</strong> عمود وشاحي (Mantle Plume) من حدود الوشاح-اللب</li>
                            <li><strong>التركيب:</strong> بازلت قاري (OIB) مختلف عن MORB</li>
                            <li><strong>الميزات:</strong>
                                <ul>
                                    <li>براكين درعية (Shield Volcanoes) مع انحدار خفيف</li>
                                    <li>لافا بازلتية سيولة عالية، ثورات غير متفجرة</li>
                                    <li>سلسلة من البراكين مع تقدم العمر في اتجاه حركة الصفيحة</li>
                                </ul>
                            </li>
                            <li><strong>أمثلة:</strong> هاواي، يلوستون، آيسلاند</li>
                        </ul>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">التحول الجيولوجي</h3>
                        
                        <h4 style="color:#60a5fa">5.1. عوامل التحول</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>العوامل المؤثرة في التحول الصخري:</strong><br><br>
                            <strong>1. الحرارة (الأهم):</strong><br>
                            • تزيد معدلات التفاعل (تضاعف كل 10°C)<br>
                            • تسبب إعادة البلورة (Recrystallization)<br>
                            • مجال: 200-800°C (أعلى ← انصهار)<br>
                            <br>
                            <strong>2. الضغط:</strong><br>
                            • ضغط كلي (Lithostatic): موحد في كل الاتجاهات<br>
                            • ضغط موجه (Differential): يسبب تورق (Foliation)<br>
                            • يفضل معادن أكثر كثافة (High-P minerals)<br>
                            <br>
                            <strong>3. السوائل:</strong><br>
                            • وسط لنقل الأيونات<br>
                            • تسريع التفاعلات الكيميائية<br>
                            • غالباً ماء مع أملاح مذابة<br>
                            <br>
                            <strong>4. الزمن:</strong><br>
                            • ملايين السنين للتحول الكامل<br>
                            • تحول ديناميكي (Dynamic Metamorphism) أسرع
                        </div>
                        
                        <h4 style="color:#60a5fa">5.2. أنواع التحول</h4>
                        
                        <ul>
                            <li><strong>تحول حراري (Contact):</strong> حول أجسام نارية، لا ضغط موجه</li>
                            <li><strong>تحول ديناميكي (Dynamic):</strong> على طول الصدوع، ضغط موجه عالي</li>
                            <li><strong>تحول إقليمي (Regional):</strong> مساحات واسعة، مرتفعات، تورق واضح</li>
                            <li><strong>تحول دفني (Burial):</strong> تحت رواسب سميكة، ضغط كلي عالي</li>
                            <li><strong>تحول تصادمي (Impact):</strong> نيزك، ضغط ودرجة حرارة مرتفعة جداً لفترة قصيرة</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">5.3. درجات التحول</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>سلسلة التحول للأحجار الطينية:</strong><br><br>
                            <strong>منخفض الدرجة (Low-grade):</strong><br>
                            • 200-400°C، ضغط منخفض إلى متوسط<br>
                            • معادن: كلوريت، مسكوفيت، كوارتز<br>
                            • صخور: أردواز (Slate) ← فيليت (Phyllite)<br>
                            <br>
                            <strong>متوسط الدرجة (Medium-grade):</strong><br>
                            • 400-600°C، ضغط متوسط<br>
                            • معادن: بيوتيت، غارنت (ألمندين)، ستوروليت<br>
                            • صخور: شيست (Schist)<br>
                            <br>
                            <strong>عالي الدرجة (High-grade):</strong><br>
                            • 600-800°C، ضغط متوسط إلى عالي<br>
                            • معادن: سيليمانيت، كيانيت، غارنت (بيروب)<br>
                            • صخور: نايس (Gneiss)<br>
                            <br>
                            <strong>تحول أزرق (Blueschist):</strong><br>
                            • ضغط عالي، درجة حرارة منخفضة<br>
                            • معادن: غلوكوفان، لوسونيت (HP/LT)<br>
                            • في مناطق غوص حديثة
                        </div>
                        
                        <h3 style="color:#4ade80; border-bottom:2px solid #4ade80; display:inline-block; padding-bottom:5px;">دليل الصفائح التكتونية</h3>
                        
                        <h4 style="color:#60a5fa">6.1. أدلة جيولوجية</h4>
                        
                        <ul>
                            <li><strong>تطابق القارات:</strong> تطابق سواحل أفريقيا وأمريكا الجنوبية</li>
                            <li><strong>سلسلة الجبال:</strong> تطابق جبال الأطلس وأبالاشيان</li>
                            <li><strong>الصخور والأحافير:</strong> تتابعات صخرية وأحافير متشابهة على قارات منفصلة</li>
                            <li><strong>التواء الجبال:</strong> أحزمة طي واسعة (الألب، الهيمالايا)</li>
                        </ul>
                        
                        <h4 style="color:#60a5fa">6.2. أدلة جيوفيزيائية</h4>
                        
                        <div style="border:2px dashed #666; background:#111; padding:20px; margin:15px 0; border-radius:10px; font-family:monospace; color:#a3e635; text-align:center;">
                            <strong>المغناطيسية القديمة (Paleomagnetism):</strong><br><br>
                            <strong>المبدأ:</strong><br>
                            • معادن مغناطيسية (ماغنتيت) تسجل اتجاه المجال المغناطيسي الأرضي عند التبريد<br>
                            • المجال ينعكس دورياً (كل 200,000-1,000,000 سنة)<br>
                            <br>
                            <strong>خطوط الشدة المغناطيسية:</strong><br>
                            • شرائط متوازية على جانبي الظهرات المحيطية<br>
                            • أنماط متناظرة: شريط طبيعي ← معكوس ← طبيعي<br>
                            • تقدم العمر مع الابتعاد عن الظهرة<br>
                            • دليل مباشر على توسع قاع البحر<br>
                            <br>
                            <strong>تحديد سرعة الانتشار:</strong><br>
                            • المسافة بين شرائط متشابهة ← الزمن بين انعكاسات<br>
                            • حساب: سرعة = مسافة ÷ زمن<br>
                            • مثال: شريطين متباعدين 100 km، عمر الفرق 5 ملايين سنة:<br>
                            &nbsp;&nbsp;السرعة = 100 km / 5 مليون سنة = 2 cm/year
                        </div>
                        
                        <h4 style="color:#60a5fa">6.3. أدلة من الزلازل</h4>
                        
                        <ul>
                            <li><strong>توزيع الزلازل:</strong> حدود صفائح واضحة على خرائط الزلازل</li>
                            <li><strong>نطاق بينزو-واداتي:</strong> مستوى مائل من زلازل يتبع الصفيحة الغائصة</li>
                            <li><strong>آلية التركيز:</strong> زلازل حدود متباعدة ← شد، حدود متقاربة ← ضغط</li>
                            <li><strong>GPS:</strong> قياسات مباشرة لحركة الصفائح (1-10 cm/year)</li>
                        </ul>
                        
                        <div style="background:rgba(59, 130, 246, 0.15); border-right:4px solid #3b82f6; padding:15px; margin:10px 0;">
                            <strong>معلومة إضافية: دورة ويلسون (Wilson Cycle)</strong><br>
                            تصف دورة حياة المحيطات:<br>
                            1. <strong>المرحلة الجنينية:</strong> وادي انهدام قاري (شرق أفريقيا)<br>
                            2. <strong>المرحلة اليافعة:</strong} بحر ضيق (البحر الأحمر)<br>
                            3. <strong>المرحلة الناضجة:</strong} محيط واسع (الأطلنطي)<br>
                            4. <strong>المرحلة الهرمة:</strong} بدء الغوص (الباسيفيك)<br>
                            5. <strong>المرحلة النهائية:</strong} تصادم قارات (البحر الأبيض المتوسط)<br>
                            6. <strong>المرحلة الندبة:</strong} سلسلة جبال (الهيمالايا)<br>
                            مدة الدورة: 200-500 مليون سنة.
                        </div>
                    `
                }
            ]
        }
    }
};