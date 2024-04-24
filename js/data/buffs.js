var buffs = [
   {
      id: 2457,
      spellid: true,
      name: "Battle Stance",
      iconname: "ability_warrior_offensivestance",
      group: "stance",
      stance: 'battle',
      minlevel: 1,
   },
   {
      id: 71,
      spellid: true,
      name: "Defensive Stance",
      iconname: "ability_warrior_defensivestance",
      group: "stance",
      stance: 'def',
      minlevel: 10,
   },
   {
      id: 2458,
      spellid: true,
      name: "Berserker Stance",
      iconname: "Ability_Racial_Avatar",
      group: "stance",
      stance: 'zerk',
      minlevel: 30,
   },
   {
      id: 413479,
      spellid: true,
      name: "Gladiator Stance",
      iconname: "achievement_featsofstrength_gladiator_08",
      dmgshield: 10,
      group: "stance",
      stance: 'glad',
      rune: true,
      minlevel: 1,
   },
   {
      id: 6673,
      spellid: true,
      name: "Battle Shout",
      iconname: "Ability_Warrior_BattleShout",
      group: "battleshout",
      ap: 15,
      lvlmod: 0.5,
      minlevel: 2,
      maxlevel: 11,
   },
   {
      id: 5242,
      spellid: true,
      name: "Battle Shout",
      iconname: "Ability_Warrior_BattleShout",
      group: "battleshout",
      ap: 35,
      lvlmod: 0.5,
      minlevel: 12,
      maxlevel: 21,
   },
   {
      id: 6192,
      spellid: true,
      name: "Battle Shout",
      iconname: "Ability_Warrior_BattleShout",
      group: "battleshout",
      ap: 55,
      lvlmod: 0.5,
      minlevel: 22,
      maxlevel: 31,
   },
   {
      id: 11549,
      spellid: true,
      name: "Battle Shout",
      iconname: "Ability_Warrior_BattleShout",
      group: "battleshout",
      ap: 85,
      lvlmod: 0.5,
      minlevel: 32,
      maxlevel: 41,
   },
   {
      id: 11550,
      spellid: true,
      name: "Battle Shout",
      iconname: "Ability_Warrior_BattleShout",
      group: "battleshout",
      ap: 130,
      lvlmod: 0.5,
      minlevel: 42,
      maxlevel: 51,
   },
   {
      id: 11551,
      spellid: true,
      name: "Battle Shout",
      iconname: "Ability_Warrior_BattleShout",
      group: "battleshout",
      ap: 185,
      lvlmod: 0.5,
      minlevel: 52,
      aq: false,
   },
   {
      id: 25289,
      spellid: true,
      name: "Battle Shout",
      iconname: "Ability_Warrior_BattleShout",
      group: "battleshout",
      ap: 232,
      minlevel: 60,
      aq: true,
   },
   {
      id: 22888,
      spellid: true,
      name: "Rallying Cry of the Dragonslayer",
      iconname: "inv_misc_head_dragon_01",
      group: "",
      ap: 140,
      crit: 5,
      spellcrit: 10,
      worldbuff: true,
   },
   {
      id: 24425,
      spellid: true,
      name: "Spirit of Zandalar",
      iconname: "ability_creature_poison_05",
      group: "",
      strmod: 15,
      agimod: 15,
      worldbuff: true,
   },
   {
      id: 23768,
      spellid: true,
      name: "Sayge's Dark Fortune of Damage",
      iconname: "inv_misc_orb_02",
      group: "darkfortune",
      dmgmod: 10,
      spelldmgmod: 10,
      worldbuff: true,
   },
   {
      id: 22817,
      spellid: true,
      name: "Fengus' Ferocity",
      iconname: "spell_nature_undyingstrength",
      group: "",
      ap: 200,
      minlevel: 50,
      worldbuff: true,
   },
   {
      id: 22820,
      spellid: true,
      name: "Slip'kik's Savvy",
      iconname: "spell_holy_lesserheal02",
      group: "",
      spellcrit: 3,
      minlevel: 50,
      worldbuff: true,
   },
   {
      id: 15366,
      spellid: true,
      name: "Songflower Serenade",
      iconname: "spell_holy_mindvision",
      group: "",
      crit: 5,
      str: 15,
      agi: 15,
      spellcrit: 5,
      minlevel: 50,
      worldbuff: true,
   },
   {
      id: 16609,
      spellid: true,
      name: "Warchief's Blessing",
      iconname: "spell_arcane_teleportorgrimmar",
      group: "",
      haste: 15,
      worldbuff: true,
   },
   {
      id: 17007,
      spellid: true,
      name: "Leader of the Pack",
      iconname: "spell_nature_unyeildingstamina",
      group: "",
      crit: 3,
      minlevel: 40,
   },
   {
      id: 5232,
      spellid: true,
      name: "Mark of the Wild",
      iconname: "spell_nature_regeneration",
      group: "motw",
      str: 2,
      agi: 2,
      int: 2,
      minlevel: 10,
      maxlevel: 19
   },
   {
      id: 6756,
      spellid: true,
      name: "Mark of the Wild",
      iconname: "spell_nature_regeneration",
      group: "motw",
      str: 4,
      agi: 4,
      int: 4,
      minlevel: 20,
      maxlevel: 29
   },
   {
      id: 5234,
      spellid: true,
      name: "Mark of the Wild",
      iconname: "spell_nature_regeneration",
      group: "motw",
      str: 6,
      agi: 6,
      int: 6,
      minlevel: 30,
      maxlevel: 39
   },
   {
      id: 8907,
      spellid: true,
      name: "Mark of the Wild",
      iconname: "spell_nature_regeneration",
      group: "motw",
      str: 8,
      agi: 8,
      int: 8,
      minlevel: 40,
      maxlevel: 49
   },
   {
      id: 9884,
      spellid: true,
      name: "Mark of the Wild",
      iconname: "spell_nature_regeneration",
      group: "motw",
      str: 10,
      agi: 10,
      int: 10,
      minlevel: 50,
      maxlevel: 59
   },
   {
      id: 9885,
      spellid: true,
      name: "Mark of the Wild",
      iconname: "spell_nature_regeneration",
      group: "motw",
      str: 12,
      agi: 12,
      int: 12,
      minlevel: 60
   },
   {
      id: 17055,
      spellid: true,
      name: "Improved Mark of the Wild",
      iconname: "spell_nature_regeneration",
      motwmod: 1.35,
      minlevel: 10
   },
   {
      id: 19506,
      spellid: true,
      name: "Trueshot Aura",
      iconname: "ability_trueshot",
      group: "trueshot",
      ap: 100,
      minlevel: 40,
      maxlevel: 49
   },
   {
      id: 20905,
      spellid: true,
      name: "Trueshot Aura",
      iconname: "ability_trueshot",
      group: "trueshot",
      ap: 150,
      minlevel: 50,
      maxlevel: 59
   },
   {
      id: 20906,
      spellid: true,
      name: "Trueshot Aura",
      iconname: "ability_trueshot",
      group: "trueshot",
      ap: 200,
      minlevel: 60
   },
   {
      id: 409580,
      spellid: true,
      name: "Aspect of the Lion",
      iconname: "ability_hunter_pet_cat",
      group: "kings",
      strmod: 10,
      agimod: 10,
      sod: true,
   },
   {
      id: 20217,
      spellid: true,
      name: "Blessing of Kings",
      iconname: "spell_magic_magearmor",
      group: "kings",
      strmod: 10,
      agimod: 10,
      minlevel: 20,
   },
   {
      id: 19740,
      spellid: true,
      name: "Blessing of Might",
      iconname: "spell_holy_fistofjustice",
      group: "blessingmight",
      ap: 20,
      minlevel: 4,
      maxlevel: 11
   },
   {
      id: 19834,
      spellid: true,
      name: "Blessing of Might",
      iconname: "spell_holy_fistofjustice",
      group: "blessingmight",
      ap: 35,
      minlevel: 12,
      maxlevel: 21
   },
   {
      id: 19835,
      spellid: true,
      name: "Blessing of Might",
      iconname: "spell_holy_fistofjustice",
      group: "blessingmight",
      ap: 55,
      minlevel: 22,
      maxlevel: 31
   },
   {
      id: 19836,
      spellid: true,
      name: "Blessing of Might",
      iconname: "spell_holy_fistofjustice",
      group: "blessingmight",
      ap: 85,
      minlevel: 32,
      maxlevel: 41
   },
   {
      id: 19837,
      spellid: true,
      name: "Blessing of Might",
      iconname: "spell_holy_fistofjustice",
      group: "blessingmight",
      ap: 115,
      minlevel: 42,
      maxlevel: 51
   },
   {
      id: 19838,
      spellid: true,
      name: "Blessing of Might",
      iconname: "spell_holy_fistofjustice",
      group: "blessingmight",
      ap: 155,
      minlevel: 52,
      aq: false,
   },
   {
      id: 25291,
      spellid: true,
      name: "Blessing of Might",
      iconname: "spell_holy_fistofjustice",
      group: "blessingmight",
      ap: 185,
      minlevel: 60,
      aq: true,
   },
   {
      id: 20048,
      spellid: true,
      name: "Improved Blessing of Might",
      iconname: "spell_holy_fistofjustice",
      mightmod: 1.2,
      minlevel: 4,
   },
   {
      id: 425600,
      spellid: true,
      name: "Horn of Lordaeron",
      iconname: "inv_misc_horn_03",
      group: "blessingmight",
      str: 45, //17 at lvl 25 - 26 at 40
      agi: 45,
      sod: true,
   },
   {
      id: 8512,
      spellid: true,
      name: "Windfury Totem",
      iconname: "spell_nature_windfury",
      group: "windfury",
      wfap: 122,
      minlevel: 32,
      maxlevel: 41,
   },
   {
      id: 10613,
      spellid: true,
      name: "Windfury Totem",
      iconname: "spell_nature_windfury",
      group: "windfury",
      wfap: 229,
      minlevel: 42,
      maxlevel: 51,
   },
   {
      id: 10614,
      spellid: true,
      name: "Windfury Totem",
      iconname: "spell_nature_windfury",
      group: "windfury",
      wfap: 315,
      minlevel: 52
   },
   {
      id: 8835,
      spellid: true,
      name: "Grace of Air Totem",
      iconname: "spell_nature_invisibilitytotem",
      group: "graceair",
      agi: 43,
      minlevel: 42,
      maxlevel: 55
   },
   {
      id: 10627,
      spellid: true,
      name: "Grace of Air Totem",
      iconname: "spell_nature_invisibilitytotem",
      group: "graceair",
      agi: 67,
      minlevel: 56,
      aq: false,
   },
   {
      id: 25359,
      spellid: true,
      name: "Grace of Air Totem",
      iconname: "spell_nature_invisibilitytotem",
      group: "graceair",
      agi: 77,
      minlevel: 60,
      aq: true,
   },
   {
      id: 8075,
      spellid: true,
      name: "Strength of Earth Totem",
      iconname: "spell_nature_earthbindtotem",
      group: "strengthearth",
      str: 10,
      minlevel: 10,
      maxlevel: 23
   },
   {
      id: 8160,
      spellid: true,
      name: "Strength of Earth Totem",
      iconname: "spell_nature_earthbindtotem",
      group: "strengthearth",
      str: 20,
      minlevel: 24,
      maxlevel: 37
   },
   {
      id: 8161,
      spellid: true,
      name: "Strength of Earth Totem",
      iconname: "spell_nature_earthbindtotem",
      group: "strengthearth",
      str: 36,
      minlevel: 38,
      maxlevel: 51
   },
   {
      id: 10442,
      spellid: true,
      name: "Strength of Earth Totem",
      iconname: "spell_nature_earthbindtotem",
      group: "strengthearth",
      str: 61,
      minlevel: 52,
      aq: false,
   },
   {
      id: 25361,
      spellid: true,
      name: "Strength of Earth Totem",
      iconname: "spell_nature_earthbindtotem",
      group: "strengthearth",
      str: 77,
      minlevel: 60,
      aq: true,
   },
   {
      id: 407975,
      spellid: true,
      name: "Wild Strikes",
      iconname: "ability_druid_swipe",
      group: "windfury",
      wfapperc: 20,
      sod: true,
   },
   {
      id: 407995,
      spellid: true,
      name: "Mangle",
      iconname: "ability_druid_mangle2",
      bleedmod: 1.3,
      sod: true,
   },

   

   // Consumes
   {
      id: 8410,
      name: "R.O.I.D.S.",
      iconname: "inv_stone_15",
      group: "blasted",
      str: 25,
      minlevel: 45,
      consume: true,
   },
   {
      id: 8412,
      name: "Ground Scorpok Assay",
      iconname: "inv_misc_dust_02",
      group: "blasted",
      agi: 25,
      minlevel: 45,
      consume: true,
   },
   {
      id: 221196,
      name: "Atal\'ai Mojo of War",
      iconname: "inv_alchemy_potion_02",
      group: "blasted",
      ap: 48,
      minlevel: 50,
      voodoofrenzy: true,
      consume: true,
      sod: true,
   },
   {
      id: 3390,
      name: "Elixir of Lesser Agility",
      iconname: "inv_potion_92",
      group: "elixir",
      agi: 8,
      minlevel: 18,
      maxlevel: 49,
      consume: true,
   },
   {
      id: 8949,
      name: "Elixir of Agility",
      iconname: "inv_potion_93",
      group: "elixir",
      agi: 15,
      minlevel: 27,
      maxlevel: 50,
      consume: true,
   },
   {
      id: 9187,
      name: "Elixir of Greater Agility",
      iconname: "inv_potion_94",
      group: "elixir",
      agi: 25,
      minlevel: 41,
      consume: true,
   },
   {
      id: 13452,
      name: "Elixir of the Mongoose",
      iconname: "inv_potion_32",
      group: "elixir",
      agi: 25,
      crit: 2,
      minlevel: 46,
      consume: true,
   },
   {
      id: 12451,
      name: "Juju Power",
      iconname: "inv_misc_monsterscales_11",
      group: "str",
      str: 30,
      minlevel: 55,
      consume: true,
   },
   {
      id: 2454,
      name: "Elixir of Lion's Strength",
      iconname: "inv_potion_56",
      group: "str",
      str: 4,
      minlevel: 1,
      maxlevel: 49,
      consume: true,
   },
   {
      id: 3391,
      name: "Elixir of Ogre's Strength",
      iconname: "inv_potion_57",
      group: "str",
      str: 8,
      minlevel: 20,
      consume: true,
   },
   {
      id: 6662,
      name: "Elixir of Giant Growth",
      iconname: "inv_potion_10",
      group: "str",
      str: 8,
      minlevel: 8,
      maxlevel: 49,
      consume: true,
   },
   {
      id: 4426,
      name: "Scroll of Strength III",
      iconname: "inv_scroll_02",
      group: "str",
      str: 13,
      minlevel: 40,
      maxlevel: 49,
      consume: true,
   },
   {
      id: 9206,
      name: "Elixir of Giants",
      iconname: "inv_potion_61",
      group: "str",
      str: 25,
      minlevel: 41,
      consume: true,
   },
   {
      id: 12460,
      name: "Juju Might",
      iconname: "inv_misc_monsterscales_07",
      group: "ap",
      ap: 40,
      minlevel: 55,
      consume: true,
   },
   {
      id: 12820,
      name: "Winterfall Firewater",
      iconname: "inv_potion_92",
      group: "ap",
      ap: 35,
      minlevel: 45,
      consume: true,
   },
   {
      id: 20452,
      name: "Smoked Desert Dumplings",
      iconname: "inv_misc_food_64",
      group: "food",
      str: 20,
      minlevel: 54,
      consume: true,
   },
   {
      id: 13928,
      name: "Grilled Squid",
      iconname: "inv_misc_fish_13",
      group: "food",
      agi: 10,
      minlevel: 41,
      consume: true,
   },
   {
      id: 13810,
      name: "Blessed Sunfruit",
      iconname: "inv_misc_food_41",
      group: "food",
      str: 10,
      minlevel: 45,
      consume: true,
   },
   {
      id: 23060,
      spellid: true,
      name: "Battle Squawk",
      iconname: "inv_misc_birdbeck_01",
      minlevel: 40,
      other: true,
      haste: 5
   },
   {
      id: 217308,
      name: "Enchanted Sigil: Innovation",
      iconname: "inv_sigil_mimiron",
      minlevel: 40,
      other: true,
      ap: 20,
      maxlevel: 49,
      sod: true,
   },
   {
      id: 221028,
      name: "Enchanted Sigil: Living Dreams",
      iconname: "inv_sigil_freya",
      minlevel: 50,
      other: true,
      ap: 50,
      sod: true,
   },
   {
      id: 221024,
      name: "Flask of Everlasting Nightmares",
      iconname: "inv_alchemy_endlessflask_01",
      ap: 45,
      minlevel: 50,
      other: true,
      sod: true,
   },
   {
      id: 12217,
      name: "Dragonbreath Chili",
      iconname: "inv_drink_17",
      group: "dragonbreath",
      minlevel: 35,
      other: true,
   },
   {
      id: 11371,
      name: "Gift of Arthas",
      spellid: true,
      iconname: "inv_potion_28",
      group: "",
      bonusdmg: 8,
      minlevel: 41,
      other: true,
   },
   {
      id: 210708,
      name: "Elixir of Coalesced Regret",
      iconname: "inv_potion_19",
      str: 1,
      agi: 1,
      sta: 1,
      minlevel: 20,
      other: true,
      sod: true,
   },
   {
      id: 5206,
      name: "Bogling Root",
      iconname: "inv_misc_herb_07",
      group: "",
      bonusdmg: 1,
      minlevel: 1,
      other: true,
   },
   {
      id: 22237,
      name: "Dark Desire",
      iconname: "inv_valentineschocolate04",
      group: "",
      hit: 2,
      other: true,
   },
   {
      id: 23327,
      name: "Fire-toasted Bun",
      iconname: "inv_misc_food_11",
      group: "",
      hit: 2,
      other: true,
   },
   {
      id: 23513,
      spellid: true,
      name: "Essence of the Red",
      iconname: "spell_fire_lavaspawn",
      group: "vaelbuff",
      minlevel: 60,
      other: true,
   },
   {
      id: 29338,
      spellid: true,
      name: "Fire Festival Fury",
      iconname: "inv_misc_summerfest_brazierorange",
      crit: 3,
      spellcrit: 3,
      other: true,
   },
   {
      id: 29232,
      spellid: true,
      name: "Fungal Bloom",
      iconname: "spell_nature_unyeildingstamina",
      crit: 50,
      spellcrit: 60,
      minlevel: 60,
      other: true,
   },
   

   // SoD Extras
   {
      id: 430947,
      spellid: true,
      name: "Boon of Blackfathom",
      iconname: "Achievement_boss_bazil_akumai",
      group: "",
      ap: 20,
      crit: 2,
      spellcrit: 2,
      maxlevel: 39,
      worldbuff: true,
      sod: true,
   },
   {
      id: 430352,
      spellid: true,
      name: "Ashenvale Rallying Cry",
      iconname: "spell_misc_warsongfocus",
      group: "",
      dmgmod: 5,
      spelldmgmod: 5,
      maxlevel: 39,
      worldbuff: true,
      sod: true,
   },
   {
      id: 438536,
      spellid: true,
      name: "Spark of Crazed Inspiration",
      iconname: "achievement_boss_mekgineer_thermaplugg-",
      group: "",
      haste: 10,
      spellcrit: 4,
      worldbuff: true,
      maxlevel: 49,
      sod: true,
   },
   {
      id: 446698,
      spellid: true,
      name: "Fervor of the Temple Explorer",
      iconname: "achievement_bg_killxenemies_generalsroom",
      group: "",
      crit: 5,
      strmod: 8,
      agimod: 8,
      worldbuff: true,
      maxlevel: 59,
      sod: true,
   },
   {
      id: 427143,
      spellid: true,
      name: "Curse of Vulnerability",
      iconname: "Ability_creature_cursed_02",
      maxlevel: 40,
      group: "",
      bonusdmg: 2,
      sod: true,
      other: true,
   },
   {
      id: 6532,
      name: "Bright Baubles",
      iconname: "inv_misc_gem_variety_02",
      group: "bauble",
      skill_7: 75,
      maxlevel: 49,
      other: true,
      sod: true,
   },
   {
      id: 6533,
      name: "Aquadynamic Fish Attractor",
      iconname: "inv_misc_food_26",
      group: "bauble",
      skill_7: 100,
      maxlevel: 49,
      other: true,
      sod: true,
   },
   {
      id: 7386,
      spellid: true,
      name: "Sunder Armor",
      iconname: "ability_warrior_sunder",
      group: "sunder",
      armor: 90*5,
      minlevel: 10,
      maxlevel: 21,
   },
   {
      id: 7405,
      spellid: true,
      name: "Sunder Armor",
      iconname: "ability_warrior_sunder",
      group: "sunder",
      armor: 180*5,
      minlevel: 22,
      maxlevel: 33,
   },
   {
      id: 8380,
      spellid: true,
      name: "Sunder Armor",
      iconname: "ability_warrior_sunder",
      group: "sunder",
      armor: 270*5,
      minlevel: 34,
      maxlevel: 45,
   },
   {
      id: 11596,
      spellid: true,
      name: "Sunder Armor",
      iconname: "ability_warrior_sunder",
      group: "sunder",
      armor: 360*5,
      minlevel: 46,
      maxlevel: 57,
   },
   {
      id: 11597,
      spellid: true,
      name: "Sunder Armor",
      iconname: "ability_warrior_sunder",
      group: "sunder",
      armor: 450*5,
      minlevel: 58,
   },
   {
      id: 402799,
      spellid: true,
      sod: true,
      name: "Homunculi",
      iconname: "spell_shadow_twistedfaith",
      group: "sunder",
      armor: 150,
      armorperlevel: 35,
      minlevel: 1,
   },
   {
      id: 8647,
      spellid: true,
      name: "Expose Armor",
      iconname: "ability_warrior_riposte",
      group: "sunder",
      armor: 400,
      minlevel: 14,
      maxlevel: 25
   },
   {
      id: 8649,
      spellid: true,
      name: "Expose Armor",
      iconname: "ability_warrior_riposte",
      group: "sunder",
      armor: 725,
      minlevel: 26,
      maxlevel: 35
   },
   {
      id: 8650,
      spellid: true,
      name: "Expose Armor",
      iconname: "ability_warrior_riposte",
      group: "sunder",
      armor: 1050,
      minlevel: 36,
      maxlevel: 45
   },
   {
      id: 11197,
      spellid: true,
      name: "Expose Armor",
      iconname: "ability_warrior_riposte",
      group: "sunder",
      armor: 1375,
      minlevel: 46,
      maxlevel: 55
   },
   {
      id: 11198,
      spellid: true,
      name: "Expose Armor",
      iconname: "ability_warrior_riposte",
      group: "sunder",
      armor: 1700,
      minlevel: 56,
   },
   {
      id: 14169,
      spellid: true,
      name: "Improved Expose Armor",
      iconname: "ability_warrior_riposte",
      improvedexposed: true,
      minlevel: 14,
   },
   {
      id: 770,
      spellid: true,
      name: "Faerie Fire",
      iconname: "spell_nature_faeriefire",
      group: "faerie",
      armor: 175,
      minlevel: 18,
      maxlevel: 29,
   },
   {
      id: 778,
      spellid: true,
      name: "Faerie Fire",
      iconname: "spell_nature_faeriefire",
      group: "faerie",
      armor: 285,
      minlevel: 30,
      maxlevel: 41,
   },
   {
      id: 9749,
      spellid: true,
      name: "Faerie Fire",
      iconname: "spell_nature_faeriefire",
      group: "faerie",
      armor: 395,
      minlevel: 42,
      maxlevel: 53,
   },
   {
      id: 9907,
      spellid: true,
      name: "Faerie Fire",
      iconname: "spell_nature_faeriefire",
      group: "faerie",
      armor: 505,
      minlevel: 54,
   },
   {
      id: 704,
      spellid: true,
      name: "Curse of Recklessness",
      iconname: "spell_shadow_unholystrength",
      group: "reck",
      armor: 140,
      minlevel: 14,
      maxlevel: 27
   },
   {
      id: 7658,
      spellid: true,
      name: "Curse of Recklessness",
      iconname: "spell_shadow_unholystrength",
      group: "reck",
      armor: 290,
      minlevel: 28,
      maxlevel: 41
   },
   {
      id: 7659,
      spellid: true,
      name: "Curse of Recklessness",
      iconname: "spell_shadow_unholystrength",
      group: "reck",
      armor: 465,
      minlevel: 42,
      maxlevel: 55
   },
   {
      id: 11717,
      spellid: true,
      name: "Curse of Recklessness",
      iconname: "spell_shadow_unholystrength",
      group: "reck",
      armor: 640,
      minlevel: 56,
   },
   {
      id: 7344,
      name: "Torch of Holy Flame",
      iconname: "inv_staff_05",
      armor: 50,
      minlevel: 20,
   },
   
   
   
];
