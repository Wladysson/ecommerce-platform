export const PRODUCT_SPECIFICATIONS = {
	Computadores: [
		{
			title: "Hardware",
			fields: [
				{
					key: "processor",
					label: "Processador",
					type: "text",
					required: true,
					placeholder: "Intel Core Ultra 9 285K",
				},
				{
					key: "graphicsCard",
					label: "Placa de Vídeo",
					type: "text",
					placeholder: "RTX 5090",
				},
				{
					key: "memory",
					label: "Memória RAM",
					type: "text",
					placeholder: "32GB DDR5",
				},
				{
					key: "storage",
					label: "Armazenamento",
					type: "text",
					placeholder: "2TB NVMe",
				},
				{
					key: "motherboard",
					label: "Placa-Mãe",
					type: "text",
				},
				{
					key: "powerSupply",
					label: "Fonte",
					type: "text",
				},
				{
					key: "operatingSystem",
					label: "Sistema Operacional",
					type: "text",
					placeholder: "Windows 11 Pro",
				},
			],
		},
		{
			title: "Gabinete",
			fields: [
				{
					key: "caseModel",
					label: "Modelo do Gabinete",
					type: "text",
				},
				{
					key: "fans",
					label: "Coolers Instalados",
					type: "text",
				},
				{
					key: "rgb",
					label: "Iluminação RGB",
					type: "checkbox",
					checkboxLabel: "Possui RGB",
				},
				{
					key: "sideGlass",
					label: "Lateral de Vidro",
					type: "checkbox",
					checkboxLabel: "Vidro Temperado",
				},
			],
		},
		{
			title: "Conectividade",
			fields: [
				{
					key: "wifi",
					label: "Wi-Fi",
					type: "text",
				},
				{
					key: "bluetooth",
					label: "Bluetooth",
					type: "text",
				},
				{
					key: "ethernet",
					label: "Ethernet",
					type: "text",
				},
				{
					key: "usb",
					label: "USB",
					type: "text",
				},
				{
					key: "usbC",
					label: "USB-C",
					type: "text",
				},
				{
					key: "hdmi",
					label: "HDMI",
					type: "text",
				},
				{
					key: "displayPort",
					label: "DisplayPort",
					type: "text",
				},
			],
		},
		{
			title: "Dimensões",
			fields: [
				{
					key: "weight",
					label: "Peso",
					type: "text",
				},
				{
					key: "dimensions",
					label: "Dimensões",
					type: "text",
				},
				{
					key: "color",
					label: "Cor",
					type: "text",
				},
				{
					key: "warranty",
					label: "Garantia",
					type: "text",
				},
			],
		},
	],

	Notebooks: [
		{
			title: "Hardware",
			fields: [
				{
					key: "processor",
					label: "Processador",
					type: "text",
					required: true,
					placeholder: "Intel Core Ultra 9",
				},
				{
					key: "graphicsCard",
					label: "Placa de Vídeo",
					type: "text",
				},
				{
					key: "memory",
					label: "Memória RAM",
					type: "text",
				},
				{
					key: "storage",
					label: "SSD",
					type: "text",
				},
				{
					key: "chipset",
					label: "Chipset",
					type: "text",
				},
				{
					key: "operatingSystem",
					label: "Sistema Operacional",
					type: "text",
				},
			],
		},
		{
			title: "Tela",
			fields: [
				{
					key: "screenSize",
					label: "Tamanho",
					type: "text",
				},
				{
					key: "resolution",
					label: "Resolução",
					type: "text",
				},
				{
					key: "panel",
					label: "Painel",
					type: "select",
					options: [
						"IPS",
						"OLED",
						"VA",
						"TN",
						"Mini LED",
					],
				},
				{
					key: "refreshRate",
					label: "Taxa de Atualização",
					type: "text",
				},
				{
					key: "brightness",
					label: "Brilho",
					type: "text",
				},
				{
					key: "touch",
					label: "Tela Touch",
					type: "checkbox",
					checkboxLabel: "Possui tela touch",
				},
			],
		},
		{
			title: "Conectividade",
			fields: [
				{
					key: "wifi",
					label: "Wi-Fi",
					type: "text",
				},
				{
					key: "bluetooth",
					label: "Bluetooth",
					type: "text",
				},
				{
					key: "usbA",
					label: "USB-A",
					type: "text",
				},
				{
					key: "usbC",
					label: "USB-C",
					type: "text",
				},
				{
					key: "hdmi",
					label: "HDMI",
					type: "text",
				},
				{
					key: "audio",
					label: "Entrada P2",
					type: "checkbox",
					checkboxLabel: "Possui entrada P2",
				},
			],
		},
		{
			title: "Energia",
			fields: [
				{
					key: "battery",
					label: "Bateria",
					type: "text",
				},
				{
					key: "charger",
					label: "Carregador",
					type: "text",
				},
				{
					key: "fastCharge",
					label: "Carregamento Rápido",
					type: "checkbox",
					checkboxLabel: "Suporta carregamento rápido",
				},
			],
		},
		{
			title: "Informações Gerais",
			fields: [
				{
					key: "weight",
					label: "Peso",
					type: "text",
				},
				{
					key: "dimensions",
					label: "Dimensões",
					type: "text",
				},
				{
					key: "color",
					label: "Cor",
					type: "text",
				},
				{
					key: "packageContents",
					label: "Conteúdo da Embalagem",
					type: "textarea",
				},
				{
					key: "warranty",
					label: "Garantia",
					type: "text",
				},
			],
		},
	],

	Monitores: [
		{
			title: "Tela",
			fields: [
				{
					key: "screenSize",
					label: "Tamanho da Tela",
					type: "text",
				},
				{
					key: "panel",
					label: "Painel",
					type: "select",
					options: [
						"IPS",
						"OLED",
						"VA",
						"TN",
					],
				},
				{
					key: "resolution",
					label: "Resolução",
					type: "text",
				},
				{
					key: "refreshRate",
					label: "Taxa de Atualização",
					type: "text",
				},
				{
					key: "responseTime",
					label: "Tempo de Resposta",
					type: "text",
				},
				{
					key: "brightness",
					label: "Brilho",
					type: "text",
				},
				{
					key: "contrast",
					label: "Contraste",
					type: "text",
				},
				{
					key: "hdr",
					label: "HDR",
					type: "checkbox",
					checkboxLabel: "Possui HDR",
				},
			],
		},
        		{
			title: "Conectividade",
			fields: [
				{
					key: "hdmi",
					label: "HDMI",
					type: "text",
				},
				{
					key: "displayPort",
					label: "DisplayPort",
					type: "text",
				},
				{
					key: "usbHub",
					label: "USB Hub",
					type: "checkbox",
					checkboxLabel: "Possui USB Hub",
				},
				{
					key: "audioOut",
					label: "Saída de Áudio",
					type: "checkbox",
					checkboxLabel: "Possui saída P2",
				},
			],
		},
		{
			title: "Estrutura",
			fields: [
				{
					key: "vesa",
					label: "Suporte VESA",
					type: "text",
				},
				{
					key: "heightAdjustment",
					label: "Ajuste de Altura",
					type: "checkbox",
					checkboxLabel: "Possui ajuste de altura",
				},
				{
					key: "pivot",
					label: "Pivot",
					type: "checkbox",
					checkboxLabel: "Suporta Pivot",
				},
				{
					key: "tilt",
					label: "Inclinação",
					type: "checkbox",
					checkboxLabel: "Permite inclinação",
				},
				{
					key: "weight",
					label: "Peso",
					type: "text",
				},
				{
					key: "warranty",
					label: "Garantia",
					type: "text",
				},
			],
		},
	],

	"Placas de Vídeo": [
		{
			title: "GPU",
			fields: [
				{
					key: "gpu",
					label: "Chip Gráfico",
					type: "text",
					required: true,
				},
				{
					key: "memory",
					label: "Memória de Vídeo",
					type: "text",
				},
				{
					key: "memoryType",
					label: "Tipo da Memória",
					type: "text",
				},
				{
					key: "cuda",
					label: "CUDA / Stream Processors",
					type: "text",
				},
				{
					key: "boostClock",
					label: "Boost Clock",
					type: "text",
				},
				{
					key: "baseClock",
					label: "Clock Base",
					type: "text",
				},
			],
		},
		{
			title: "Conectividade",
			fields: [
				{
					key: "hdmi",
					label: "HDMI",
					type: "text",
				},
				{
					key: "displayPort",
					label: "DisplayPort",
					type: "text",
				},
				{
					key: "powerConnector",
					label: "Conector de Energia",
					type: "text",
				},
				{
					key: "recommendedPsu",
					label: "Fonte Recomendada",
					type: "text",
				},
				{
					key: "pciExpress",
					label: "PCI Express",
					type: "text",
				},
			],
		},
		{
			title: "Construção",
			fields: [
				{
					key: "fans",
					label: "Quantidade de Fans",
					type: "number",
				},
				{
					key: "rgb",
					label: "RGB",
					type: "checkbox",
					checkboxLabel: "Possui RGB",
				},
				{
					key: "backplate",
					label: "Backplate",
					type: "checkbox",
					checkboxLabel: "Possui Backplate",
				},
				{
					key: "length",
					label: "Comprimento",
					type: "text",
				},
				{
					key: "weight",
					label: "Peso",
					type: "text",
				},
				{
					key: "warranty",
					label: "Garantia",
					type: "text",
				},
			],
		},
	],

	Memórias: [
		{
			title: "Especificações",
			fields: [
				{
					key: "capacity",
					label: "Capacidade",
					type: "text",
				},
				{
					key: "type",
					label: "Tipo",
					type: "select",
					options: [
						"DDR4",
						"DDR5",
					],
				},
				{
					key: "frequency",
					label: "Frequência",
					type: "text",
				},
				{
					key: "latency",
					label: "Latência",
					type: "text",
				},
				{
					key: "voltage",
					label: "Voltagem",
					type: "text",
				},
				{
					key: "rgb",
					label: "RGB",
					type: "checkbox",
					checkboxLabel: "Possui RGB",
				},
			],
		},
	],

	Armazenamento: [
		{
			title: "Especificações",
			fields: [
				{
					key: "capacity",
					label: "Capacidade",
					type: "text",
				},
				{
					key: "type",
					label: "Tipo",
					type: "select",
					options: [
						"SSD SATA",
						"SSD NVMe",
						"HD",
					],
				},
				{
					key: "interface",
					label: "Interface",
					type: "text",
				},
				{
					key: "readSpeed",
					label: "Leitura",
					type: "text",
				},
				{
					key: "writeSpeed",
					label: "Gravação",
					type: "text",
				},
				{
					key: "tbw",
					label: "TBW",
					type: "text",
				},
				{
					key: "formFactor",
					label: "Formato",
					type: "text",
				},
			],
		},
	],
    	Cadeiras: [
		{
			title: "Informações Técnicas",
			fields: [
				{ key: "type", label: "Tipo", type: "text" },
				{ key: "material", label: "Material", type: "text" },
				{ key: "maxWeight", label: "Peso Suportado", type: "text" },
				{ key: "color", label: "Cor", type: "text" },
			],
		},
		{
			title: "Características",
			fields: [
				{ key: "reclining", label: "Reclinável", type: "checkbox", checkboxLabel: "Possui Reclinação" },
				{ key: "armrest", label: "Apoio de Braço", type: "checkbox", checkboxLabel: "Possui Apoio de Braço" },
				{ key: "heightAdjustment", label: "Ajuste de Altura", type: "checkbox", checkboxLabel: "Possui Ajuste de Altura" },
			],
		},
	],

	Smartphones: [
		{
			title: "Informações Técnicas",
			fields: [
				{ key: "screen", label: "Tela", type: "text" },
				{ key: "processor", label: "Processador", type: "text" },
				{ key: "memory", label: "Memória RAM", type: "text" },
				{ key: "storage", label: "Armazenamento", type: "text" },
			],
		},
		{
			title: "Características",
			fields: [
				{ key: "camera", label: "Câmera Principal", type: "text" },
				{ key: "battery", label: "Bateria", type: "text" },
				{ key: "os", label: "Sistema Operacional", type: "text" },
			],
		},
		{
			title: "Conectividade",
			fields: [
				{ key: "wifi", label: "Wi-Fi", type: "checkbox", checkboxLabel: "Possui Wi-Fi" },
				{ key: "bluetooth", label: "Bluetooth", type: "checkbox", checkboxLabel: "Possui Bluetooth" },
				{ key: "nfc", label: "NFC", type: "checkbox", checkboxLabel: "Possui NFC" },
				{ key: "fiveG", label: "5G", type: "checkbox", checkboxLabel: "Compatível com 5G" },
			],
		},
	],
    	Impressoras: [
		{
			title: "Informações Técnicas",
			fields: [
				{ key: "type", label: "Tipo", type: "text" },
				{ key: "technology", label: "Tecnologia", type: "text" },
				{ key: "resolution", label: "Resolução", type: "text" },
				{ key: "speed", label: "Velocidade de Impressão", type: "text" },
			],
		},
		{
			title: "Características",
			fields: [
				{ key: "scanner", label: "Scanner", type: "checkbox", checkboxLabel: "Possui Scanner" },
				{ key: "duplex", label: "Impressão Duplex", type: "checkbox", checkboxLabel: "Impressão Frente e Verso" },
				{ key: "colorPrint", label: "Colorida", type: "checkbox", checkboxLabel: "Impressão Colorida" },
			],
		},
		{
			title: "Conectividade",
			fields: [
				{ key: "usb", label: "USB", type: "checkbox", checkboxLabel: "Conexão USB" },
				{ key: "wifi", label: "Wi-Fi", type: "checkbox", checkboxLabel: "Conexão Wi-Fi" },
				{ key: "ethernet", label: "Ethernet", type: "checkbox", checkboxLabel: "Conexão Ethernet" },
			],
		},
	],

	Roteadores: [
		{
			title: "Informações Técnicas",
			fields: [
				{ key: "standard", label: "Padrão Wi-Fi", type: "text" },
				{ key: "frequency", label: "Frequência", type: "text" },
				{ key: "speed", label: "Velocidade", type: "text" },
				{ key: "antennas", label: "Quantidade de Antenas", type: "number" },
			],
		},
		{
			title: "Características",
			fields: [
				{ key: "mesh", label: "Mesh", type: "checkbox", checkboxLabel: "Suporte Mesh" },
				{ key: "ipv6", label: "IPv6", type: "checkbox", checkboxLabel: "Suporte IPv6" },
				{ key: "parentalControl", label: "Controle dos Pais", type: "checkbox", checkboxLabel: "Possui Controle dos Pais" },
			],
		},
		{
			title: "Conectividade",
			fields: [
				{ key: "wan", label: "Porta WAN", type: "text" },
				{ key: "lan", label: "Portas LAN", type: "text" },
				{ key: "usb", label: "USB", type: "checkbox", checkboxLabel: "Possui Porta USB" },
			],
		},
	],
    	Webcams: [
		{
			title: "Informações Técnicas",
			fields: [
				{ key: "resolution", label: "Resolução", type: "text" },
				{ key: "fps", label: "FPS", type: "text" },
				{ key: "sensor", label: "Sensor", type: "text" },
				{ key: "fieldOfView", label: "Campo de Visão", type: "text" },
			],
		},
		{
			title: "Características",
			fields: [
				{
					key: "microphone",
					label: "Microfone",
					type: "checkbox",
					checkboxLabel: "Microfone Integrado",
				},
				{
					key: "autofocus",
					label: "Autofoco",
					type: "checkbox",
					checkboxLabel: "Possui Autofoco",
				},
				{
					key: "privacyCover",
					label: "Tampa de Privacidade",
					type: "checkbox",
					checkboxLabel: "Possui Tampa de Privacidade",
				},
			],
		},
		{
			title: "Conectividade",
			fields: [
				{ key: "connection", label: "Tipo de Conexão", type: "text" },
				{ key: "cableLength", label: "Comprimento do Cabo", type: "text" },
				{
					key: "plugAndPlay",
					label: "Plug and Play",
					type: "checkbox",
					checkboxLabel: "Compatível com Plug and Play",
				},
			],
		},
	],
};