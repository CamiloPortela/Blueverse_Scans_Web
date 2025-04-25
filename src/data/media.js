const mangas = [
    {
      id: 1,
      title: "Isekai Samurai",
      image: new URL('../assets/isekai_samurai.jpg', import.meta.url).href,
      description: "La samurái más poderosa de la historia vaga por el mundo en busca de un buen lugar para morir, ¡hasta que, de repente, es transportada a otro mundo! ¡Una samurái invencible se abre paso a través de otro mundo! ¡Una fantasía samurái isekai creada por Keigo Saito con su estilo brillante y arrollador!",
      genre: "Isekai"
    },
    {
      id: 2,
      title: "Agharta",
      image: new URL('../assets/agharta08.jpg', import.meta.url).href,
      description: "Agharta narra la historia de Juju, un adolescente que pertenece a una de las bandas que prevalecen en un mundo desolado tras un cataclismo. El agua potable es escasa y preciada. Juju se encuentra con Rael, una chica que podría ser la clave para salvar a la humanidad, y juntos se embarcan en un viaje a través del desierto.",
      genre: "Ciencia ficción"
    },
    {
      id: 3,
      title: "Batman: La broma asesina",
      image: new URL('../assets/batman.jpg', import.meta.url).href,
      description: "La historia gira en torno a la relación entre Batman y el Joker, explorando su compleja dinámica y la delgada línea que separa la locura de la cordura. La obra es conocida por su narrativa oscura y su enfoque psicológico, así como por su icónica escena en la que el Joker intenta demostrar que cualquier persona puede volverse loca bajo las circunstancias adecuadas.",
      genre: "Acción"
    },
    {
      id: 4,
      title: "One Piece",
      image: new URL('../assets/onepiece.jpg', import.meta.url).href,
      description: "One Piece sigue las aventuras de Monkey D. Luffy, un joven pirata que busca el tesoro legendario conocido como 'One Piece' para convertirse en el Rey de los Piratas. A lo largo de su viaje, Luffy forma una tripulación diversa y enfrenta numerosos enemigos y desafíos en un mundo lleno de islas, criaturas fantásticas y poderes sobrenaturales.",
      genre: "Aventura"
    },
    {
      id: 5,
      title: "Shakara",
      image: new URL('../assets/shakara.jpg', import.meta.url).href,
      description: "Escrito por Robbie Morrison y dibujado por Henry Flint, Shakara sigue las aventuras del personaje a través de la galaxia como un agente de la venganza movido únicamente por el deseo de vengarse de las civilizaciones que destruyeron a la suya destruyendo la monarquía espacial y ganándose muchos enemigos en el camino Shakara descubre que la verdad detrás de la muerte de su especie y lo que la rodea no es lo que parece.",
      genre: "Ciencia ficción"
    },
    {
      id: 6,
      title: "Onani Master Kurosawa",
      image: new URL('../assets/onani.jpg', import.meta.url).href,
      description: "Onani Master Kurosawa sgue la historia de Kakeru Kurosawa que es un joven de secundaria bastante inteligente. Idea planes para ir al lavabo de chicas que hay en la tercera planta y poder masturbarse pensando en todo tipo de fantasías. Aunque alguien acaba por descubrir su secreto y le pedirá que le ayuda a vengarse de sus enemigos, utilizando sus desechos.",
      genre: "Comedia"
    },
    {
      id: 7,
      title: "Granblue Dreaming",
      image: new URL('../assets/granblue.jpg', import.meta.url).href,
      description: "Granblue Dreaming cuenta la historia de Iori Kitahara, un joven que se traslada a la península de Izu para comenzar su vida universitaria, alojándose en la habitación de arriba de la tienda de buceo de su tío, llamada 'Grand Blue'. Sin embargo, pronto se encuentra envuelto en las travesuras y fiestas de los miembros del Club de Buceo local, quienes pasan más tiempo bebiendo y divirtiéndose que buceando.",
      genre: "Comedia"
    },
    {
      id: 8,
      title: "Desire for a Reply!",
      image: new URL('../assets/desire.jpg', import.meta.url).href,
      description: "Sunaki es un jugador sustituto del equipo de baseball. Un día, finalmente encuentra el coraje para poner una carta de amor dentro del casillero de zapatos de la chica ídolo de su escuela, pero ¿hacia dónde lo llevarán sus acciones?",
      genre: "Romance"
    },
    {
      id: 9,
      title: "The Walking Dead",
      image: new URL('../assets/walking.jpg', import.meta.url).href,
      description: "The Walking Dead es una serie de cómics que sigue la historia de un grupo de sobrevivientes en un mundo post-apocalíptico infestado de zombis. La trama se centra en Rick Grimes, un exoficial de policía que despierta de un coma para descubrir que el mundo ha sido devastado por una epidemia que convierte a los muertos en caminantes. A medida que Rick intenta reunirse con su familia y encontrar un lugar seguro, se enfrenta a numerosos desafíos, tanto de los zombis como de otros sobrevivientes.",
      genre: "Zombies"
    },
    {
      id: 10,
      title: "Ranger Reject",
      image: new URL('../assets/ranger.jpg', import.meta.url).href,
      description: "¡Se desata una lucha a vida o muerte! Por un lado, los Guardianes del Dragón, Rangers que usan el poder de los Dioses Dragón para proteger a la humanidad. Por el otro, el Ejército del Mal, ¡invasores empeñados en la conquista mundial!... ¡Sí, claro, qué farsa! Los invasores del espacio exterior, sometidos a la fuerza durante el primer año de la guerra, se han convertido en tontos bailarines. ¡Existen solo para ser derrotados ante las masas cada domingo! Ya ni siquiera se les puede llamar 'villanos', viven sus días como esclavos. Pero un invasor solitario no lo tolerará más. ¡Se enfrentará a los invencibles Rangers y derribará el sistema! ¡Comienza la primera (y quizás última) serie de acción 'anti-Ranger'! ",
      genre: "Acción"
    },

    {
      id: 11,
      title: "Spiderman: Blue",
      image: new URL('../assets/spidermanblue.jpg', import.meta.url).href,
      description: "Spiderman: Blue es una historia que explora la relación entre Peter Parker y Gwen Stacy, su primer amor. A través de una narrativa nostálgica, Peter reflexiona sobre su pasado y los momentos compartidos con Gwen mientras enfrenta a sus enemigos como Spider",
      genre: "Acción"
    },
    {
      id: 12,
      title: "Dragon Ball",
      image: new URL('../assets/dragonball.jpg', import.meta.url).href,
      description: "Dragon Ball sigue las aventuras de Son Goku, un joven guerrero con una cola de mono que busca las legendarias Esferas del Dragón, que al reunirse pueden invocar a un dragón que concede deseos. A lo largo de la serie, Goku se convierte en un poderoso luchador y forma amistades con otros personajes mientras enfrenta a diversos enemigos y participa en torneos de artes marciales.",
      genre: "Aventura"
    },
    
    {
      id: 13,
      title: "Naruto",
      image: new URL('../assets/naruto.jpg', import.meta.url).href,
      description: "Naruto sigue la historia de Naruto Uzumaki, un joven ninja que sueña con convertirse en el Hokage, el líder de su aldea. A lo largo de la serie, Naruto enfrenta numerosos desafíos y enemigos mientras forma amistades y aprende sobre la importancia del trabajo en equipo y la perseverancia.",
      genre: "Aventura"
    },
    {
      id: 14,
      title: "Invincible",
      image: new URL('../assets/invencible.jpg', import.meta.url).href,
      description: " Invincible sigue la llegada a la edad adulta del superhéroe Mark Grayson/Invincible , un viltrumita e hijo primogénito de Omni-Man , el superhéroe más poderoso de la Tierra. Mark descubre que tiene superpoderes a los 17 años y comienza a luchar contra el crimen, pero pronto se da cuenta de que ser un superhéroe no es tan fácil como parece. La serie explora temas de responsabilidad, moralidad y la lucha entre el bien y el mal.",
      genre: "Acción"
    },
    {
      id: 15,
      title: "Death Note",
      image: new URL('../assets/deathnote.jpg', import.meta.url).href,
      description: "Death Note sigue la historia de Light Yagami, un estudiante brillante que encuentra un cuaderno sobrenatural que le permite matar a cualquier persona cuyo nombre escriba en él. Light decide usar el cuaderno para eliminar a criminales y crear un mundo perfecto, pero pronto se enfrenta a un astuto detective conocido como L, quien intenta detenerlo. La serie explora temas de moralidad, justicia y la lucha entre el bien y el mal.",
      genre: "Detective"
    },
    {
      id: 16,
      title: "Attack on Titan",
      image: new URL('../assets/aot.jpg', import.meta.url).href,
      description: "Attack on Titan sigue la historia de Eren Yeager, un joven que vive en un mundo donde la humanidad está al borde de la extinción debido a gigantes humano ides conocidos como Titanes. Después de que su ciudad natal es destruida por un Titán, Eren se une a la Legión de Reconocimiento para luchar contra los Titanes y descubrir la verdad detrás de su existencia. La serie explora temas de supervivencia, sacrificio y la lucha por la libertad.",
      genre: "Acción"
    },
    {
      id: 17,
      title: "Crossed",
      image: new URL('../assets/crossed.jpg', import.meta.url).href,
      description: "Crossed es una serie de cómics de terror post-apocalíptico creada por Garth Ennis. La historia se desarrolla en un mundo devastado por una epidemia que convierte a las personas en seres violentos y depravados conocidos como 'cruzados'. La trama sigue a un grupo de sobrevivientes que luchan por mantenerse con vida mientras enfrentan tanto a los cruzados como a otros humanos que han perdido su humanidad.",
      genre: "Terror"
    },
    {
      id: 18,
      title: "Tokyo Ghoul",
      image: new URL('../assets/tkg.jpg', import.meta.url).href,
      description: "Tokyo Ghoul sigue la historia de Ken Kaneki, un estudiante universitario que se convierte en mitad ghoul después de un encuentro con uno. Los ghouls son criaturas que se alimentan de carne humana y viven en las sombras de la sociedad. Kaneki lucha por adaptarse a su nueva vida mientras intenta mantener su humanidad y proteger a sus seres queridos.",
      genre: "Terror"
    },
    {
      id: 19,
      title: "Fullmetal Alchemist",
      image: new URL('../assets/fma.jpg', import.meta.url).href,
      description: "Fullmetal Alchemist sigue la historia de los hermanos Edward y Alphonse Elric, quienes intentan revivir a su madre fallecida utilizando la alquimia. Sin embargo, el experimento sale mal y Edward pierde una pierna mientras que Alphonse pierde todo su cuerpo. Edward se convierte en un alquimista estatal y busca la Piedra Filosofal para recuperar lo que han perdido.",
      genre: "Aventura"
    },
    {
      id: 20,
      title: "Sword Art Online",
      image: new URL('../assets/sao.jpg', import.meta.url).href,
      description: "Sword Art Online sigue la historia de Kirito, un jugador atrapado en un juego de realidad virtual llamado Sword Art Online. Los jugadores descubren que no pueden salir del juego a menos que completen todos los niveles, y si mueren en el juego, también mueren en la vida real. Kirito debe luchar para sobrevivir y encontrar una manera de escapar del juego.",
      genre: "Isekai"
    },


  ];

export default mangas;