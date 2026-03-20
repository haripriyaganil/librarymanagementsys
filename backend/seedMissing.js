const mongoose = require("mongoose");
const Book = require("./models/Book");

mongoose.connect("mongodb://127.0.0.1:27017/librarymanagementsystem");

const newDescriptions = {
  "The Alchemist": { about: "A magical story about an Andalusian shepherd boy who journeys to Egypt in search of a treasure...", authorInfo: "Paulo Coelho is a Brazilian lyricist and novelist, best known for his international bestselling novel." },
  "1984": { about: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.", authorInfo: "George Orwell was an English novelist, essayist, and critic known for his lucid prose." },
  "The Kite Runner": { about: "An unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father's servant in Afghanistan.", authorInfo: "Khaled Hosseini is an Afghan-American novelist and physician." },
  "Life of Pi": { about: "A fantasy adventure novel about a young Indian boy who survives 227 days after a shipwreck while stranded on a lifeboat in the Pacific Ocean with a Bengal tiger.", authorInfo: "Yann Martel is a Canadian author best known for this Man Booker Prize-winning novel." },
  "The Book Thief": { about: "Set in Nazi Germany, this is a story of a young girl's relationship with her foster parents, the other residents of their neighborhood, and a Jewish fist-fighter.", authorInfo: "Markus Zusak is an Australian writer with Austrian and German roots." },
  "To Kill a Mockingbird": { about: "A classic of modern American literature exploring themes of racial injustice and the loss of innocence in the Deep South.", authorInfo: "Harper Lee was an American novelist widely known for To Kill a Mockingbird." },
  "The Great Gatsby": { about: "Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby.", authorInfo: "F. Scott Fitzgerald was an American novelist and essayist, widely regarded as one of the greatest American writers of the 20th century." },
  "Gone Girl": { about: "A thriller novel that explores a marriage gone terribly wrong, focusing on the mysterious disappearance of Amy Dunne.", authorInfo: "Gillian Flynn is an American writer, comic book writer, and former television critic." },
  "The Night Circus": { about: "A phantasmagorical fairy tale set in a wandering magical circus that is open only from sunset to sunrise.", authorInfo: "Erin Morgenstern is an American multimedia artist and the author of two fantasy novels." },
  "Shutter Island": { about: "U.S. Marshal Teddy Daniels investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.", authorInfo: "Dennis Lehane is an American author who has published more than a dozen novels." },
  "Hamlet": { about: "A tragedy exploring themes of treachery, revenge, incest, and moral corruption.", authorInfo: "William Shakespeare was an English playwright, poet, and actor." },
  "Macbeth": { about: "A tragedy that dramatizes the damaging physical and psychological effects of political ambition.", authorInfo: "William Shakespeare was widely regarded as the greatest writer in the English language." },
  "Othello": { about: "A tragedy revolving around four central characters: Othello, a Moorish general, his wife Desdemona, his lieutenant Cassio, and his trusted but unfaithful ensign Iago.", authorInfo: "William Shakespeare, the Bard of Avon." },
  "King Lear": { about: "A tragedy depicting the gradual descent into madness of the title character.", authorInfo: "William Shakespeare." },
  "Pride and Prejudice": { about: "A romantic novel of manners that follows the character development of Elizabeth Bennet.", authorInfo: "Jane Austen was an English novelist known primarily for her six major novels." },
  "Jane Eyre": { about: "A novel following the emotions and experiences of its eponymous heroine, including her growth to adulthood.", authorInfo: "Charlotte Brontë was an English novelist and poet." },
  "Wuthering Heights": { about: "A novel encompassing the passionate and destructive love between Heathcliff and Catherine Earnshaw.", authorInfo: "Emily Brontë was an English novelist and poet." },
  "Great Expectations": { about: "A coming-of-age novel depicting the personal growth and personal development of an orphan nicknamed Pip.", authorInfo: "Charles Dickens was an English writer and social critic." },
  "Oliver Twist": { about: "The story of the orphan Oliver Twist, born in a workhouse and sold into apprenticeship with an undertaker.", authorInfo: "Charles Dickens created some of the world's best-known fictional characters." },
  "The Odyssey": { about: "An epic poem fundamentally concerning the Greek hero Odysseus and his journey home after the fall of Troy.", authorInfo: "Homer is the presumed author of the Iliad and the Odyssey." },
  "Zero to One": { about: "A book on startups, and how to build the future.", authorInfo: "Peter Thiel is an American billionaire entrepreneur and venture capitalist." },
  "The Lean Startup": { about: "A methodology for developing businesses and products that aims to shorten product development cycles.", authorInfo: "Eric Ries is an American entrepreneur, blogger, and author." },
  "Start With Why": { about: "A book exploring how great leaders inspire everyone to take action by starting with 'why'.", authorInfo: "Simon Sinek is an author and inspirational speaker." },
  "Good to Great": { about: "A management book that describes how companies transition from being good companies to great companies.", authorInfo: "Jim Collins is an American researcher, author, speaker and consultant." },
  "Blue Ocean Strategy": { about: "A book that asserts that the best way to achieve sustainable profitability is to create 'blue oceans' of uncontested market space.", authorInfo: "W. Chan Kim and Renée Mauborgne are professors at INSEAD." },
  "The $100 Startup": { about: "A guide on how to lead a life of adventure, meaning, and purpose without giving up a stable income.", authorInfo: "Chris Guillebeau is an American author, entrepreneur, and speaker." },
  "Rework": { about: "A book showcasing a better, faster, easier way to succeed in business.", authorInfo: "Jason Fried is the co-founder and president of 37signals (now Basecamp)." },
  "The Hard Thing About Hard Things": { about: "A book offering essential advice on building and running a startup.", authorInfo: "Ben Horowitz is an American businessman, investor, blogger, and author." },
  "Think and Grow Rich": { about: "A personal development and self-improvement book focusing on the psychology of success.", authorInfo: "Napoleon Hill was an American self-help author." },
  "Principles": { about: "A book detailing unconventional principles for success in life and business.", authorInfo: "Ray Dalio is an American billionaire investor and hedge fund manager." },
  "Clean Code": { about: "A handbook of agile software craftsmanship detailing principles and best practices for writing clean code.", authorInfo: "Robert C. Martin (Uncle Bob) is an American software engineer and author." },
  "Design Patterns": { about: "A seminal software engineering book describing 23 classic software design patterns.", authorInfo: "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides (the Gang of Four)." },
  "Refactoring": { about: "A guide on improving the design of existing code without altering its external behavior.", authorInfo: "Martin Fowler is a British software developer and author." },
  "You Don't Know JS": { about: "A book series diving deep into the core mechanisms of the JavaScript language.", authorInfo: "Kyle Simpson is a JavaScript enthusiast, author, and teacher." },
  "The Pragmatic Programmer": { about: "A classic software engineering book detailing best practices and practical advice for programmers.", authorInfo: "Andrew Hunt and David Thomas are progressive software developers." },
  "Introduction to Algorithms": { about: "A comprehensive textbook on algorithms used universally in universities worldwide.", authorInfo: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein." },
  "Code Complete": { about: "A practical handbook of software construction considered one of the best practical guides to programming.", authorInfo: "Steve McConnell is an author and software engineering expert." },
  "Cracking the Coding Interview": { about: "A comprehensive guide to coding interviews, featuring 189 programming questions and solutions.", authorInfo: "Gayle Laakmann McDowell is a software engineer and author." },
  "Structure and Interpretation": { about: "A classic computer science textbook teaching fundamental principles of programming using Scheme.", authorInfo: "Harold Abelson and Gerald Jay Sussman are professors at MIT." },
  "Operating System Concepts": { about: "A widely used textbook introducing the fundamental concepts of operating systems.", authorInfo: "Abraham Silberschatz, Peter Baer Galvin, and Greg Gagne." },
  "Atomic Habits": { about: "A comprehensive, practical guide on how to create good habits, break bad ones, and get 1 percent better every day.", authorInfo: "James Clear is a writer and speaker focused on habits and continuous improvement." },
  "7 Habits of Highly Effective People": { about: "A business and self-help book presenting an approach to being effective in attaining goals.", authorInfo: "Stephen R. Covey was an American educator, author, and businessman." },
  "Think Like a Monk": { about: "A guide detailing how to apply monastical wisdom to daily life for peace and purpose.", authorInfo: "Jay Shetty is an author, former monk, and purpose coach." },
  "Deep Work": { about: "A guide detailing rules for focused success in a distracted world.", authorInfo: "Cal Newport is a computer science professor and author." },
  "The Subtle Art of Not Giving a F*ck": { about: "A counterintuitive approach to living a good life by focusing only on what truly matters.", authorInfo: "Mark Manson is a self-help author and blogger." },
  "How to Win Friends": { about: "A self-help classic detailing principles on handling people, winning them over, and being a leader.", authorInfo: "Dale Carnegie was an American writer and lecturer on personal development." },
  "Ikigai": { about: "A book exploring the Japanese secret to a long and happy life.", authorInfo: "Héctor García and Francesc Miralles." },
  "Mindset": { about: "A book exploring the concept of the 'growth mindset' and how it influences success.", authorInfo: "Carol S. Dweck is a psychology professor at Stanford University." },
  "The Power of Now": { about: "A spiritual guide advising readers to live in the present moment to achieve happiness and enlightenment.", authorInfo: "Eckhart Tolle is a spiritual teacher and author." },
  "Can't Hurt Me": { about: "A memoir detailing the author's journey from poverty and abuse to becoming a Navy SEAL and ultra-endurance athlete.", authorInfo: "David Goggins is an American ultramarathon runner, author, and retired Navy SEAL." },
  "Sapiens": { about: "A brief history of humankind from the Stone Age to the twenty-first century.", authorInfo: "Yuval Noah Harari is an Israeli historian and professor." },
  "Guns, Germs, and Steel": { about: "A transdisciplinary non-fiction book exploring the fates of human societies.", authorInfo: "Jared Diamond is an American geographer, historian, and author." },
  "India After Gandhi": { about: "A comprehensive history of the world's largest democracy since its independence.", authorInfo: "Ramachandra Guha is an Indian historian and writer." },
  "The Silk Roads": { about: "A new history of the world viewed through the lens of the Eastern trading routes.", authorInfo: "Peter Frankopan is a British historian and professor." },
  "SPQR": { about: "A history of ancient Rome spanning its first millennium.", authorInfo: "Mary Beard is an English scholar of Ancient Roman civilization." },
  "Team of Rivals": { about: "A biographical portrait of U.S. President Abraham Lincoln and some of the men who served in his cabinet.", authorInfo: "Doris Kearns Goodwin is an American biographer and historian." },
  "The Cold War": { about: "A comprehensive overview of the global conflict that dominated the second half of the 20th century.", authorInfo: "John Lewis Gaddis is an American historian of the Cold War." },
  "The Crusades": { about: "An authoritative history of the religious wars fought in the Middle Ages.", authorInfo: "Thomas Asbridge is a historian and scholar." },
  "Postwar": { about: "A history of Europe since 1945.", authorInfo: "Tony Judt was a British-American historian and essayist." },
  "The Wright Brothers": { about: "A biography of the two brothers who invented the world's first successful motor-operated airplane.", authorInfo: "David McCullough was an American author, narrator, and historian." },
  "Wings of Fire": { about: "An autobiography of former President of India Dr. A. P. J. Abdul Kalam.", authorInfo: "A. P. J. Abdul Kalam was an Indian aerospace scientist and statesman." },
  "Steve Jobs": { about: "The exclusive, authorized biography of the Apple co-founder.", authorInfo: "Walter Isaacson is an American author and journalist." },
  "Becoming": { about: "A deeply personal memoir of the former First Lady of the United States.", authorInfo: "Michelle Obama is an American attorney and author." },
  "Long Walk to Freedom": { about: "An autobiography detailing the author's early life, coming of age, education, and 27 years in prison.", authorInfo: "Nelson Mandela was a South African anti-apartheid revolutionary and political leader." },
  "The Diary of a Young Girl": { about: "A diary kept by a Jewish girl hiding from the Nazis in Amsterdam during World War II.", authorInfo: "Anne Frank was a German-Dutch diarist of Jewish heritage." },
  "Einstein": { about: "A detailed biography of the theoretical physicist Albert Einstein.", authorInfo: "Walter Isaacson is an acclaimed biographer." },
  "Elon Musk": { about: "A look inside the life of the entrepreneur and innovator behind SpaceX and Tesla.", authorInfo: "Ashlee Vance is an American business columnist and author." },
  "Alexander Hamilton": { about: "A biography of one of the Founding Fathers of the United States.", authorInfo: "Ron Chernow is an American writer and historian." },
  "Benjamin Franklin": { about: "An exploration of the life of the quintessential American Founding Father.", authorInfo: "Walter Isaacson." },
  "The Story of My Life": { about: "The autobiography of the author, detailing her early life and experiences with her teacher Anne Sullivan.", authorInfo: "Helen Keller was an American author, disability rights advocate, and political activist." },
  "Meditations": { about: "A series of personal writings by the Roman Emperor setting forth his ideas on Stoic philosophy.", authorInfo: "Marcus Aurelius was a Roman emperor and Stoic philosopher." },
  "The Republic": { about: "A Socratic dialogue concerning justice, the order and character of the just city-state, and the just man.", authorInfo: "Plato was an Athenian philosopher during the Classical period in Ancient Greece." },
  "The Art of War": { about: "An ancient Chinese military treatise comprising 13 chapters on military strategy and tactics.", authorInfo: "Sun Tzu was a Chinese general, military strategist, and philosopher." },
  "Thus Spoke Zarathustra": { about: "A philosophical novel dealing with ideas such as the eternal recurrence and the Übermensch.", authorInfo: "Friedrich Nietzsche was a German philosopher and cultural critic." },
  "Beyond Good and Evil": { about: "A comprehensive overview of Nietzsche's philosophy condemning conventional morality.", authorInfo: "Friedrich Nietzsche." },
  "The Prince": { about: "A 16th-century political treatise offering a guide on how to acquire and maintain power.", authorInfo: "Niccolò Machiavelli was an Italian diplomat, philosopher, and historian." },
  "Sophie's World": { about: "A novel exploring the history of philosophy from the pre-Socratics to Jean-Paul Sartre.", authorInfo: "Jostein Gaarder is a Norwegian intellectual and author." },
  "Being and Nothingness": { about: "A philosophical treatise exploring human consciousness and free will.", authorInfo: "Jean-Paul Sartre was a French philosopher and leading figure in 20th-century French philosophy." },
  "Critique of Pure Reason": { about: "One of the most influential works in the history of philosophy exploring epistemology and metaphysics.", authorInfo: "Immanuel Kant was a central Enlightenment thinker." },
  "Discourses": { about: "A series of informal lectures recording the Stoic teachings of the philosopher Epictetus.", authorInfo: "Epictetus was a Greek Stoic philosopher." },
  "Thinking, Fast and Slow": { about: "A book summarizing decades of research into the two systems that drive the way we think.", authorInfo: "Daniel Kahneman was an Israeli-American psychologist and economist." },
  "Man's Search for Meaning": { about: "A book chronicling the author's experiences as a prisoner in Nazi concentration camps and describing his psychotherapeutic method.", authorInfo: "Viktor Frankl was an Austrian neurologist and psychiatrist." },
  "Emotional Intelligence": { about: "A book proposing that EQ can matter more than IQ for success and happiness.", authorInfo: "Daniel Goleman is an author and science journalist." },
  "Influence": { about: "A book exploring the psychology of why people say yes and how to apply these understandings.", authorInfo: "Robert B. Cialdini is a professor of psychology and marketing." },
  "Flow": { about: "An exploration of the positive psychological state of complete absorption in an activity.", authorInfo: "Mihaly Csikszentmihalyi was a Hungarian-American psychologist." },
  "Predictably Irrational": { about: "An examination of the hidden forces that shape our decisions.", authorInfo: "Dan Ariely is a professor of psychology and behavioral economics." },
  "The Power of Habit": { about: "A book exploring why habits exist and how they can be changed.", authorInfo: "Charles Duhigg is an American journalist and non-fiction author." },
  "Games People Play": { about: "A bestselling book proposing a model of human interaction based on transactional analysis.", authorInfo: "Eric Berne was a Canadian-born psychiatrist." },
  "Quiet": { about: "An exploration of the power of introverts in a world that can't stop talking.", authorInfo: "Susan Cain is an American writer and lecturer." },
  "Drive": { about: "A book asserting that the secret to high performance and satisfaction is the human need to direct our own lives.", authorInfo: "Daniel H. Pink is an American author of books on work, management, and behavioral science." },
  "A Brief History of Time": { about: "A popular science book exploring cosmology, black holes, and the Big Bang.", authorInfo: "Stephen Hawking was an English theoretical physicist, cosmologist, and author." },
  "Cosmos": { about: "A book exploring the evolution of the universe, science, and human civilization.", authorInfo: "Carl Sagan was an American astronomer, cosmologist, and science communicator." },
  "The Selfish Gene": { about: "A book on evolution popularizing the gene-centered view of evolution.", authorInfo: "Richard Dawkins is an English evolutionary biologist and author." },
  "The Elegant Universe": { about: "A book introducing string and superstring theory to the general public.", authorInfo: "Brian Greene is an American theoretical physicist, mathematician, and string theorist." },
  "Astrophysics for People in a Hurry": { about: "A succinct introduction to major concepts in astrophysics.", authorInfo: "Neil deGrasse Tyson is an American astrophysicist, planetary scientist, and science communicator." },
  "The Gene": { about: "An intimate history encompassing the science, history, and impact of genetics.", authorInfo: "Siddhartha Mukherjee is an Indian-American physician, biologist, and author." },
  "Silent Spring": { about: "An environmental science book documenting the adverse effects on the environment of the indiscriminate use of pesticides.", authorInfo: "Rachel Carson was an American marine biologist and conservationist." },
  "A Short History of Nearly Everything": { about: "A popular science book exploring various areas of science, using accessible language.", authorInfo: "Bill Bryson is an American-British author of books on travel, the English language, and science." },
  "The Immortal Life of Henrietta Lacks": { about: "A book exploring the intersection of science and ethics surrounding the HeLa cell line.", authorInfo: "Rebecca Skloot is an American science writer." },
  "Surely You're Joking, Mr. Feynman!": { about: "An edited collection of reminiscences by the Nobel Prize-winning physicist.", authorInfo: "Richard Feynman was an American theoretical physicist." },
  "Me Before You": { about: "A romance novel telling the story of Louisa Clark, who takes a job caring for Will Traynor, a wealthy young banker left paralyzed from an accident.", authorInfo: "Jojo Moyes is an English journalist and romance novelist." },
  "It Ends With Us": { about: "A poignant novel exploring domestic violence, love, and the difficult choices we face.", authorInfo: "Colleen Hoover is an American author of contemporary romance and young adult fiction." },
  "The Notebook": { about: "A romantic novel based on a true story about a young couple's enduring love despite the obstacles placed in their way.", authorInfo: "Nicholas Sparks is an American novelist and screenwriter." },
  "Love & Other Words": { about: "A romance novel following childhood sweethearts who reconnect and confront the mysteries of their past.", authorInfo: "Christina Lauren is the pen name for the writing duo Christina Hobbs and Lauren Billings." },
  "The Time Traveler's Wife": { about: "A romantic novel exploring the complexities of marriage when one partner involuntarily travels through time.", authorInfo: "Audrey Niffenegger is an American writer, artist, and academic." },
  "Call Me By Your Name": { about: "A coming-of-age romance novel chronicling a summer romance between a teenage boy and an older scholar.", authorInfo: "André Aciman is an Egyptian-Italian-American writer." },
  "Outlander": { about: "A historical romance novel following a 20th-century nurse who time-travels to 18th-century Scotland.", authorInfo: "Diana Gabaldon is an American author known for the Outlander series." },
  "The Fault in Our Stars": { about: "A young adult novel exploring the romance between two teenage cancer patients.", authorInfo: "John Green is an American author and YouTube content creator." },
  "Twilight": { about: "A young adult vampire romance novel following the relationship between human teenager Bella Swan and vampire Edward Cullen.", authorInfo: "Stephenie Meyer is an American novelist." },
  "The Girl with the Dragon Tattoo": { about: "A psychological thriller novel following journalist Mikael Blomkvist and hacker Lisbeth Salander.", authorInfo: "Stieg Larsson was a Swedish journalist and writer." },
  "The Da Vinci Code": { about: "A mystery thriller novel following symbologist Robert Langdon as he investigates a murder in the Louvre Museum.", authorInfo: "Dan Brown is an American author known for his thriller novels." },
  "Big Little Lies": { about: "A mystery novel following the interconnected lives of three women whose children attend the same preschool.", authorInfo: "Liane Moriarty is an Australian author." },
  "Sherlock Holmes": { about: "A collection of stories featuring the brilliant detective Sherlock Holmes and his companion Dr. Watson.", authorInfo: "Arthur Conan Doyle was a British writer and medical doctor." },
  "The Silent Patient": { about: "A psychological thriller novel about a woman's act of violence against her husband and the therapist obsessed with uncovering her motive.", authorInfo: "Alex Michaelides is a British-Cypriot author and screenwriter." },
  "In the Woods": { about: "A mystery novel following two detectives investigating a murder in a Dublin suburb that eerily echoes a cold case.", authorInfo: "Tana French is an Irish novelist and theatrical actress." },
  "The Woman in White": { about: "An epistolary novel generally considered to be among the first mystery novels.", authorInfo: "Wilkie Collins was an English novelist and playwright." },
  "The Hound of the Baskervilles": { about: "A crime novel featuring Sherlock Holmes investigating the legend of a fearsome, diabolical hound.", authorInfo: "Arthur Conan Doyle." },
  "The Reversal": { about: "A legal thriller featuring defense attorney Mickey Haller and LAPD detective Harry Bosch.", authorInfo: "Michael Connelly is an American author of detective novels." },
  "It": { about: "A horror novel following seven children as they are terrorized by an eponymous being that exploits their fears.", authorInfo: "Stephen King is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels." },
  "The Shining": { about: "A horror novel centering on a family serving as winter caretakers at the haunted Overlook Hotel.", authorInfo: "Stephen King." },
  "Dracula": { about: "A Gothic horror novel introducing the character of Count Dracula and establishing many conventions of subsequent vampire fantasy.", authorInfo: "Bram Stoker was an Irish author." },
  "Frankenstein": { about: "A Gothic novel exploring the story of a young scientist who creates a sapient creature in an unorthodox scientific experiment.", authorInfo: "Mary Shelley was an English novelist." },
  "The Exorcist": { about: "A horror novel dealing with the demonic possession of a young girl and the exorcism conducted to save her.", authorInfo: "William Peter Blatty was an American writer and filmmaker." },
  "Pet Sematary": { about: "A horror novel about a grieving father who discovers an ancient burial ground behind his home with the power to raise the dead.", authorInfo: "Stephen King." },
  "The Haunting of Hill House": { about: "A gothic horror novel detailing the experiences of four people investigating a purportedly haunted mansion.", authorInfo: "Shirley Jackson was an American writer." },
  "Bird Box": { about: "A post-apocalyptic horror novel following a woman who must navigate a world terrorized by unseen creatures that drive humans to suicide when looked at.", authorInfo: "Josh Malerman is an American author of novels and short stories." },
  "World War Z": { about: "An apocalyptic horror novel presented as a collection of individual accounts detailing a global zombie plague.", authorInfo: "Max Brooks is an American actor and author." },
  "House of Leaves": { about: "An unconventional horror novel focused on a fictional documentary about a family whose house is impossibly larger on the inside than the outside.", authorInfo: "Mark Z. Danielewski is an American fiction author." },
  "You Can Win": { about: "A practical, common sense guide that helps readers establish new goals, develop a new sense of purpose, and generate new ideas.", authorInfo: "Shiv Khera is an Indian author, activist, and motivational speaker." },
  "The Magic of Thinking Big": { about: "A self-help book proposing that to achieve greatness, people must learn to think big and believe in their success.", authorInfo: "David J. Schwartz was a motivational writer and coach." },
  "Awaken the Giant Within": { about: "A self-help book providing techniques and strategies for taking control of one's destiny.", authorInfo: "Tony Robbins is an American author, coach, speaker, and philanthropist." },
  "Do It Today": { about: "A book on overcoming procrastination, improving productivity, and achieving meaningful things.", authorInfo: "Darius Foroux is an entrepreneur, author, and podcaster." },
  "Make Your Bed": { about: "A book featuring small things that can change your life... and maybe the world.", authorInfo: "William H. McRaven is a retired United States Navy four-star admiral." },
  "Rich Dad Poor Dad": { about: "A book exploring the importance of financial independence and building wealth through investing.", authorInfo: "Robert Kiyosaki is an American entrepreneur, businessman, and author." },
  "The Psychology of Money": { about: "An exploration of how people think about money and how to teach them to make better financial decisions.", authorInfo: "Morgan Housel is a partner at Collaborative Fund and a former columnist at The Motley Fool." },
  "The Intelligent Investor": { about: "A widely acclaimed book on value investing, providing strategies for long-term investment success.", authorInfo: "Benjamin Graham was a British-born American economist, professor, and investor." },
  "I Will Teach You to Be Rich": { about: "A practical guide on personal finance, providing a step-by-step program for managing money.", authorInfo: "Ramit Sethi is an American personal finance advisor and entrepreneur." },
  "The Richest Man in Babylon": { about: "A collection of parables set in ancient Babylon providing financial advice.", authorInfo: "George S. Clason was an American author." },
  "Common Stocks and Uncommon Profits": { about: "A classic guide to investment focused on assessing the long-term prospects of a company.", authorInfo: "Philip Fisher was an American stock investor." },
  "Security Analysis": { about: "A comprehensive textbook detailing the fundamental analysis of securities and investments.", authorInfo: "Benjamin Graham and David Dodd." },
  "Money Master the Game": { about: "A 7-step blueprint for securing financial freedom.", authorInfo: "Tony Robbins." },
  "The Millionaire Next Door": { about: "An exploration of the common traits of people who have accumulated significant wealth.", authorInfo: "Thomas J. Stanley and William D. Danko." },
  "Unshakeable": { about: "A practical guide delivering a step-by-step playbook for financial success.", authorInfo: "Tony Robbins." },
  "Love and Other Brain Experiments": { about: "A contemporary romance novel exploring relationships, identity, and the complexities of human emotion.", authorInfo: "A modern author exploring the deep psychological layers behind human interactions." },
  "Racing Hearts": { about: "A fast-paced romance novel involving adrenaline, deep connections, and overcoming emotional walls.", authorInfo: "An acclaimed writer specializing in high-stakes contemporary romance and drama." }
};

async function seedMissing() {
  try {
    const books = await Book.find();
    let updatedCount = 0;

    for (let book of books) {
      const dbInfo = newDescriptions[book.title];
      
      // Update if the book is missing either field, and we have info for it OR if we definitely have info to overwrite empty ones
      if (dbInfo && (!book.about || !book.authorInfo || book.about.trim() === '')) {
        await Book.updateOne(
          { _id: book._id },
          {
            $set: {
              about: dbInfo.about,
              authorInfo: dbInfo.authorInfo
            }
          }
        );
        updatedCount++;
      } else if (!book.about && !dbInfo) {
        // Fallback generic info just in case
        await Book.updateOne(
          { _id: book._id },
          {
            $set: {
              about: `An amazing book titled ${book.title}.`,
              authorInfo: `The author of ${book.title}.`
            }
          }
        );
        updatedCount++;
      }
    }

    console.log(`Successfully updated ${updatedCount} books with new descriptions!`);
    mongoose.connection.close();
  } catch (err) {
    console.log("Error:", err);
    mongoose.connection.close();
  }
}

seedMissing();
