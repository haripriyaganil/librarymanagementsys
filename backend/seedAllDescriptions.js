const mongoose = require("mongoose");
const Book = require("./models/Book");

mongoose.connect("mongodb://127.0.0.1:27017/librarymanagementsystem");

const descriptions = {
    // ===== FANTASY =====
  "Harry Potter": {
    about:
      "Harry Potter lives with his abusive uncle and aunt, Vernon and Petunia Dursley, and their bullying son, Dudley, in the fictional English town of Little Whinging. On Harry's eleventh birthday, he learns that he is a wizard when a man named Rubeus Hagrid invites him to attend Hogwarts, a school of magic.",
    authorInfo:
"J.K. Rowling is a British author best known for writing the Harry Potter series, which became one of the most successful book franchises in history."
  },
  "The Hobbit": {
  about:
    "The Hobbit is set in Middle-earth and follows the home-loving Bilbo Baggins. Bilbo is unexpectedly drawn into an adventure by the wizard Gandalf and thirteen dwarves. Their quest is to reclaim the dwarves’ lost home and treasure from the dragon Smaug. Along the journey, Bilbo faces trolls, goblins, and other dangers. The story focuses on courage, friendship, and personal growth. It serves as the foundation for Tolkien’s larger Middle-earth legendarium.",
  authorInfo:
    "J.R.R. Tolkien was an English author and scholar best known for his fantasy works. He created the richly detailed world of Middle-earth. Tolkien’s writings have shaped modern fantasy literature."
},

"Lord of the Rings": {
  about:
    "The Lord of the Rings is an epic high fantasy novel set in Middle-earth. It follows the journey to destroy the One Ring, a powerful object that threatens the world. The story began as a sequel to The Hobbit but evolved into a much larger work. Themes of friendship, sacrifice, and the struggle between good and evil are central. Written between 1937 and 1949, the book became one of the best-selling novels of all time. It is regarded as a cornerstone of fantasy literature.",
  authorInfo:
    "J.R.R. Tolkien was a British author and academic with a passion for mythology and languages. His work on The Lord of the Rings defined the fantasy genre. Tolkien’s influence continues across books, films, and games."
},

"Percy Jackson": {
  about:
    "Percy Jackson is a twelve-year-old boy who discovers he is the son of a Greek god. When Zeus’ powerful lightning bolt is stolen, Percy is accused and must clear his name. Accompanied by a satyr and the daughter of Athena, he embarks on a dangerous journey across the United States. The quest exposes Percy to monsters, gods, and ancient myths. The story blends modern life with Greek mythology. It highlights bravery, loyalty, and self-discovery.",
  authorInfo:
    "Rick Riordan is an American author known for bringing mythology into modern storytelling. His Percy Jackson series made Greek myths accessible to young readers. Riordan’s books are popular worldwide."
},

"Narnia": {
  about:
    "The Chronicles of Narnia is a series of seven fantasy novels set in the magical land of Narnia. The world is filled with talking animals, mythical creatures, and powerful magic. The stories often follow children from our world who enter Narnia through magical portals. Themes of good versus evil, faith, and courage run throughout the series. Written between 1950 and 1956, the books have become timeless classics. Narnia remains one of the most beloved fantasy worlds ever created.",
  authorInfo:
    "C.S. Lewis was a British writer and academic. He is best known for The Chronicles of Narnia. Lewis’s works combine fantasy, philosophy, and moral themes."
},

"Eragon": {
  about:
    "Eragon tells the story of a farm boy who discovers a mysterious stone in the mountains. The stone turns out to be a dragon egg, from which a dragon named Saphira hatches. This discovery changes Eragon’s life forever. He becomes involved in a larger conflict involving magic, dragons, and an evil empire. The story follows his journey from a simple boy to a powerful Dragon Rider. It explores destiny, courage, and responsibility.",
  authorInfo:
    "Christopher Paolini is an American author who began writing Eragon as a teenager. His Inheritance Cycle gained massive popularity worldwide. Paolini is praised for creating an immersive fantasy world."
},

"Mistborn": {
  about:
    "Mistborn is an epic fantasy series set in a world ruled by a powerful tyrant. The story introduces a unique magic system based on metals. The first trilogy, known as Era One, follows a group of rebels attempting to overthrow the ruling empire. Themes of power, sacrifice, and trust are central to the series. The books were published between 2006 and 2008. Mistborn is known for its strong world-building and plot twists.",
  authorInfo:
    "Brandon Sanderson is an American fantasy author known for complex magic systems. He is one of the most influential modern fantasy writers. Sanderson’s works are praised for their depth and creativity."
},
"Stormlight Archive": {
  about:
    "The Stormlight Archive is an epic fantasy series set in the world of Roshar. The story revolves around ancient orders of knights, powerful magic, and devastating wars. Characters from different backgrounds are drawn together by destiny and shared struggles. The series explores themes of leadership, mental health, honor, and redemption. Its detailed magic system and world-building make it one of the most ambitious fantasy sagas ever written. Each book builds toward a larger conflict shaping the fate of the world.",
  authorInfo:
    "Brandon Sanderson is a bestselling American fantasy author. He is known for his detailed magic systems and expansive fictional universes. Sanderson is considered one of the leading voices in modern fantasy literature."
},

"The Witcher": {
  about:
    "The Witcher follows Geralt of Rivia, a monster hunter trained from childhood to fight supernatural creatures. Set in a morally complex fantasy world, the story blends folklore, magic, and political intrigue. Geralt struggles to find his place in a society that fears and misunderstands him. The series explores destiny, humanity, and the cost of neutrality. Its dark tone and mature themes set it apart from traditional fantasy. The books later inspired popular games and a television series.",
  authorInfo:
    "Andrzej Sapkowski is a Polish fantasy writer best known for The Witcher series. His work draws heavily from Slavic mythology and folklore. Sapkowski’s writing is praised for its wit, depth, and moral complexity."
},

"Good Omens": {
  about:
    "Good Omens is a humorous fantasy novel about the unlikely partnership between an angel and a demon. As the apocalypse approaches, both characters decide they would rather save the world than end it. The story follows their attempts to prevent the arrival of the Antichrist. Blending satire, fantasy, and theology, the book delivers sharp humor and clever storytelling. It explores free will, friendship, and the absurdity of destiny. Good Omens has become a cult classic loved for its wit.",
  authorInfo:
    "Neil Gaiman is an acclaimed British author known for fantasy and speculative fiction. His works often blend mythology with modern settings. Gaiman is celebrated for his imaginative storytelling and unique narrative voice."
},

  // FICTION
  "1984": {
    about: "Published in 1949, and written while Orwell was seriously ill with tuberculosis, 1984 is perhaps Orwell’s most famous work. The story of Winston Smith, who rewrites Times editorials at the Ministry of Truth to suit the Party’s version of events, 1984 introduced ‘Big Brother’, ‘thought police’, ‘Room 101’, ‘doublethink’ and ‘newspeak’ to the English language. A satire on totalitarianism, 1984 is a testament to the potential power of modern political systems, and the dark side of human nature: as O’Brien tells Winston, ‘the object of power is power’.",
    authorInfo: "Eric Arthur Blair was an English novelist, poet, essayist, journalist and critic who wrote under the pen name of George Orwell. His work is characterised by lucid prose, social criticism, opposition to all totalitarianism (both fascism and stalinism), and support of democratic socialism.."
  },
  "The Alchemist": {
    about: "The Alchemist is a novel by Brazilian author Paulo Coelho. The story follows Santiago, a young Andalusian shepherd who dreams of finding treasure in Egypt. Along his journey, he meets various mentors and learns about the importance of following one's personal legend. The book explores themes of destiny, perseverance, and the pursuit of dreams.",
    authorInfo: "Paulo Coelho is a Brazilian novelist best known for his allegorical novel The Alchemist. His works often blend spiritual themes with adventure narratives. Coelho is celebrated for his ability to convey profound truths through simple storytelling."
  },
  "The Kite Runner": {
    about: "The Kite Runner is a novel by Afghan-American author Khaled Hosseini. The story follows Amir, a young boy from Kabul, and his friendship with Hassan, a servant's son. The novel explores themes of betrayal, redemption, and the impact of war on personal relationships. It is set against the backdrop of Afghanistan's turbulent history.",
    authorInfo: "Khaled Hosseini is an Afghan-American novelist and physician. His debut novel The Kite Runner became a bestseller and was later adapted into a film. Hosseini's works often explore themes of family, friendship, and the impact of political upheaval."
  },
  "Life of Pi": {
    about: "Life of Pi is a novel by Yann Martel. The story follows Pi Patel, a young boy who survives a shipwreck and is stranded on a lifeboat in the Pacific Ocean with a Bengal tiger named Richard Parker. The novel explores themes of survival, faith, and the human spirit. It is known for its imaginative storytelling and philosophical undertones.",
    authorInfo: "Yann Martel is a Canadian author best known for his novel Life of Pi, which won the Man Booker Prize. Martel's works often explore themes of spirituality, survival, and the power of storytelling."
  },
  "The Book Thief": {
    about: "The Book Thief is a novel by Markus Zusak. The story is narrated by Death and follows Liesel Meminger, a young girl living in Nazi Germany. The novel explores themes of survival, the power of books, and the resilience of the human spirit during wartime.",
    authorInfo: "Markus Zusak is an Australian author best known for his novel The Book Thief. His works often blend historical fiction with philosophical themes. Zusak's writing is known for its emotional depth and unique narrative style."
  },
  "To Kill a Mockingbird": {
    about: "To Kill a Mockingbird is a novel by Harper Lee. The story is set in the 1930s in the fictional town of Maycomb, Alabama, and follows Scout Finch, her brother Jem, and their father Atticus, a lawyer who defends a black man accused of raping a white woman. The novel explores themes of racial injustice, moral growth, and the loss of innocence.",
    authorInfo: "Harper Lee was an American novelist best known for her 1960 novel To Kill a Mockingbird. The book won the Pulitzer Prize and has become a classic of modern American literature. Lee's work is celebrated for its exploration of themes of racial injustice and moral integrity."
  },
  "The Great Gatsby": {
    about: "The Great Gatsby is a novel by F. Scott Fitzgerald. The story is set in the Roaring Twenties and follows the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan. The novel explores themes of wealth, love, and the American Dream.",
    authorInfo: "F. Scott Fitzgerald was an American novelist and short story writer. He is widely regarded as one of the greatest American writers of the 20th century. Fitzgerald's works often explore themes of decadence, idealism, and social upheaval."  
  },
  "Gone Girl": {
    about: "Gone Girl is a gripping psychological thriller about a marriage under pressure when Amy goes missing on Nick's fifth wedding anniversary. A page-turning mystery for adults who love twisty suspense and sharp psychological insight, it compels readers to question what really happened and how well we know the people closest to us.",
    authorInfo: "Gillian Flynn is an American author known for her psychological thrillers. Her debut novel Sharp Objects was adapted into a successful television series. Flynn's writing is praised for its dark humor and complex characters."               
  },
  "The Night Circus": {
    about: "The Night Circus is a fantasy novel by Erin Morgenstern. The story revolves around a magical competition between two young illusionists, Celia and Marco, who are bound by a mysterious challenge. The novel is set in a fantastical circus that only operates at night and explores themes of love, destiny, and the power of imagination.",
    authorInfo: "Erin Morgenstern is an American author best known for her debut novel The Night Circus. Her writing is characterized by its lyrical prose and imaginative storytelling. Morgenstern's work has garnered critical acclaim for its unique blend of fantasy and romance."         
  },
  "Shutter Island": {                                                                                                                                                                                                                       
    about: "Shutter Island is a psychological thriller novel by Dennis Lehane. The story follows U.S. Marshal Teddy Daniels as he investigates the disappearance of a patient from a mental institution on Shutter Island. As Teddy delves deeper into the case, he uncovers shocking secrets and confronts his own traumatic past.",
    authorInfo: "Dennis Lehane is an American author known for his crime fiction and psychological thrillers. His works often explore themes of morality, identity, and the human psyche. Lehane's novels have been adapted into successful films, including Mystic River and Shutter Island."
  } 
};

async function updateBooks() {
  try {
    const books = await Book.find();

    for (let book of books) {
      const desc = descriptions[book.title];

      if (desc) {
        await Book.updateOne(
          { _id: book._id },
          {
            $set: {
              about: desc.about,
              authorInfo: desc.authorInfo,
              available: true
            }
          }
        );

        console.log("Updated:", book.title);
      } else {
        console.log("Skipped:", book.title);
      }
    }

    console.log("All books processed!");
    mongoose.connection.close();
  } catch (err) {
    console.log("Error:", err);
  }
}
updateBooks();