        $(document).ready(function(){
            $('#campo-telefone').mask('(00) 00000-0000' , {
                placeholder: '(__)_____-____'
        })
        $('#cpf').mask('000.000.000-00' , {
            placeholder: '___.___.___-__'
    })
        $('#cep').mask('00000-000' , {
            placeholder: '_____-___'
    })
            $('form').validate({
                rules: {
                    nome: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true
                    },
                    cpf: {
                        required: true
                    },
                    endereço: {
                        required: true
                    },
                    cep: {
                        required: true
                    },

                },
                messages: {
                    nome: 'Por favor, insira o seu nome'
                },
                submitHandler: function(form) {
                    console.log(form);
                },
                invalidHandler: function(evento, validador) {
                    let camposIncorretos = validador.numberOfInvalids();
                    if (camposIncorretos) {
                        alert(`Existem ${camposIncorretos} campos incorretos`);
                    }
                }
            });

            $('.lista-dos-veiculos li button').click(function(){
                const destino = $('#contato');
                const nomeVeiculo = $(this).parent().find('h3').text();
            
                $('#veiculo-interesse').val(nomeVeiculo);
            
                $('html').animate({
                    scrollTop: destino.offset().top
                },1000)
            })

            })
