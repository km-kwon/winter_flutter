import 'package:dart_practice/dart_practice.dart' as dart_practice;

void main() { 
  final String nico;
  print(nico);

  /*
  late는 초기화를 뒤로 미루지만 개발자가 null을 실수로 상용하는 것을 막아준다
  예를 들어 null이면 안되는 값을 아직 값을 할당 안해주었다고
  ?를 사용해서 nullable하게 
  설정해주면 다른 사람이 봤을때는 null또한 한 변수의 값으로 사용되는 것처럼
  오해할 수 있음
  */

  /*String? su = 'nico';
  su = null;
  su?.isNotEmpty;
  // ?를 사용하는 것으로 null safety 달성 
  */

  /*dynamic su = 1;
  su = 'rnka';
  if(su is String){
    //와 개신기 하네 저렇게 if 설정한다는게 신기함
    //dynamic은 if문 설정이 신기하네. 영어 구문 같음
  }
  if(su is int){
  }*/
}