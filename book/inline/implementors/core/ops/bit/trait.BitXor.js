(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;O, V, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;O, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"bitvec/view/trait.BitView.html\" title=\"trait bitvec::view::BitView\">BitView</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;O, V::<a class=\"type\" href=\"bitvec/view/trait.BitView.html#associatedtype.Store\" title=\"type bitvec::view::BitView::Store\">Store</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXorAssign.html\" title=\"trait core::ops::bit::BitXorAssign\">BitXorAssign</a>&lt;Rhs&gt;,&nbsp;</span>","synthetic":false,"types":["bitvec::array::BitArray"]},{"text":"impl&lt;O, T, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;O, T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXorAssign.html\" title=\"trait core::ops::bit::BitXorAssign\">BitXorAssign</a>&lt;Rhs&gt;,&nbsp;</span>","synthetic":false,"types":["bitvec::boxed::BitBox"]},{"text":"impl&lt;O, T, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;O, T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXorAssign.html\" title=\"trait core::ops::bit::BitXorAssign\">BitXorAssign</a>&lt;Rhs&gt;,&nbsp;</span>","synthetic":false,"types":["bitvec::vec::BitVec"]}];
implementors["dusk_bls12_381"] = [{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'b <a class=\"struct\" href=\"dusk_bls12_381/struct.BlsScalar.html\" title=\"struct dusk_bls12_381::BlsScalar\">Scalar</a>&gt; for &amp;'a <a class=\"struct\" href=\"dusk_bls12_381/struct.BlsScalar.html\" title=\"struct dusk_bls12_381::BlsScalar\">Scalar</a>","synthetic":false,"types":["dusk_bls12_381::scalar::Scalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"dusk_bls12_381/struct.BlsScalar.html\" title=\"struct dusk_bls12_381::BlsScalar\">Scalar</a>&gt; for <a class=\"struct\" href=\"dusk_bls12_381/struct.BlsScalar.html\" title=\"struct dusk_bls12_381::BlsScalar\">Scalar</a>","synthetic":false,"types":["dusk_bls12_381::scalar::Scalar"]}];
implementors["frame_support"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"frame_support/traits/struct.WithdrawReasons.html\" title=\"struct frame_support::traits::WithdrawReasons\">WithdrawReasons</a>&gt; for <a class=\"struct\" href=\"frame_support/traits/struct.WithdrawReasons.html\" title=\"struct frame_support::traits::WithdrawReasons\">WithdrawReasons</a>","synthetic":false,"types":["frame_support::traits::WithdrawReasons"]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'_ <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, Global&gt;&gt; for &amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["num_bigint"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt; for &amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'b <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt; for &amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","synthetic":false,"types":["num_bigint::biguint::BigUint"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt; for &amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","synthetic":false,"types":["num_bigint::biguint::BigUint"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'b <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt; for &amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","synthetic":false,"types":["num_bigint::biguint::BigUint"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","synthetic":false,"types":["num_bigint::biguint::BigUint"]}];
implementors["parity_subtle"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"parity_subtle/struct.Choice.html\" title=\"struct parity_subtle::Choice\">Choice</a>&gt; for <a class=\"struct\" href=\"parity_subtle/struct.Choice.html\" title=\"struct parity_subtle::Choice\">Choice</a>","synthetic":false,"types":["parity_subtle::Choice"]}];
implementors["plonk_bls12_381"] = [{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'b <a class=\"struct\" href=\"plonk_bls12_381/struct.BlsScalar.html\" title=\"struct plonk_bls12_381::BlsScalar\">Scalar</a>&gt; for &amp;'a <a class=\"struct\" href=\"plonk_bls12_381/struct.BlsScalar.html\" title=\"struct plonk_bls12_381::BlsScalar\">Scalar</a>","synthetic":false,"types":["plonk_bls12_381::scalar::Scalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"plonk_bls12_381/struct.BlsScalar.html\" title=\"struct plonk_bls12_381::BlsScalar\">Scalar</a>&gt; for <a class=\"struct\" href=\"plonk_bls12_381/struct.BlsScalar.html\" title=\"struct plonk_bls12_381::BlsScalar\">Scalar</a>","synthetic":false,"types":["plonk_bls12_381::scalar::Scalar"]}];
implementors["primitive_types"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"primitive_types/struct.U128.html\" title=\"struct primitive_types::U128\">U128</a>&gt; for <a class=\"struct\" href=\"primitive_types/struct.U128.html\" title=\"struct primitive_types::U128\">U128</a>","synthetic":false,"types":["primitive_types::U128"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"primitive_types/struct.U256.html\" title=\"struct primitive_types::U256\">U256</a>&gt; for <a class=\"struct\" href=\"primitive_types/struct.U256.html\" title=\"struct primitive_types::U256\">U256</a>","synthetic":false,"types":["primitive_types::U256"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"primitive_types/struct.U512.html\" title=\"struct primitive_types::U512\">U512</a>&gt; for <a class=\"struct\" href=\"primitive_types/struct.U512.html\" title=\"struct primitive_types::U512\">U512</a>","synthetic":false,"types":["primitive_types::U512"]},{"text":"impl&lt;'l, 'r&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'r <a class=\"struct\" href=\"primitive_types/struct.H128.html\" title=\"struct primitive_types::H128\">H128</a>&gt; for &amp;'l <a class=\"struct\" href=\"primitive_types/struct.H128.html\" title=\"struct primitive_types::H128\">H128</a>","synthetic":false,"types":["primitive_types::H128"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"primitive_types/struct.H128.html\" title=\"struct primitive_types::H128\">H128</a>&gt; for <a class=\"struct\" href=\"primitive_types/struct.H128.html\" title=\"struct primitive_types::H128\">H128</a>","synthetic":false,"types":["primitive_types::H128"]},{"text":"impl&lt;'l, 'r&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'r <a class=\"struct\" href=\"primitive_types/struct.H160.html\" title=\"struct primitive_types::H160\">H160</a>&gt; for &amp;'l <a class=\"struct\" href=\"primitive_types/struct.H160.html\" title=\"struct primitive_types::H160\">H160</a>","synthetic":false,"types":["primitive_types::H160"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"primitive_types/struct.H160.html\" title=\"struct primitive_types::H160\">H160</a>&gt; for <a class=\"struct\" href=\"primitive_types/struct.H160.html\" title=\"struct primitive_types::H160\">H160</a>","synthetic":false,"types":["primitive_types::H160"]},{"text":"impl&lt;'l, 'r&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'r <a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a>&gt; for &amp;'l <a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a>","synthetic":false,"types":["primitive_types::H256"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a>&gt; for <a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a>","synthetic":false,"types":["primitive_types::H256"]},{"text":"impl&lt;'l, 'r&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'r <a class=\"struct\" href=\"primitive_types/struct.H512.html\" title=\"struct primitive_types::H512\">H512</a>&gt; for &amp;'l <a class=\"struct\" href=\"primitive_types/struct.H512.html\" title=\"struct primitive_types::H512\">H512</a>","synthetic":false,"types":["primitive_types::H512"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"primitive_types/struct.H512.html\" title=\"struct primitive_types::H512\">H512</a>&gt; for <a class=\"struct\" href=\"primitive_types/struct.H512.html\" title=\"struct primitive_types::H512\">H512</a>","synthetic":false,"types":["primitive_types::H512"]}];
implementors["subtle"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"subtle/struct.Choice.html\" title=\"struct subtle::Choice\">Choice</a>&gt; for <a class=\"struct\" href=\"subtle/struct.Choice.html\" title=\"struct subtle::Choice\">Choice</a>","synthetic":false,"types":["subtle::Choice"]}];
implementors["tracing_subscriber"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"tracing_subscriber/fmt/format/struct.FmtSpan.html\" title=\"struct tracing_subscriber::fmt::format::FmtSpan\">FmtSpan</a>&gt; for <a class=\"struct\" href=\"tracing_subscriber/fmt/format/struct.FmtSpan.html\" title=\"struct tracing_subscriber::fmt::format::FmtSpan\">FmtSpan</a>","synthetic":false,"types":["tracing_subscriber::fmt::format::FmtSpan"]}];
implementors["typenum"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>","synthetic":false,"types":["typenum::bit::B0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>","synthetic":false,"types":["typenum::bit::B1"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>","synthetic":false,"types":["typenum::bit::B0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>","synthetic":false,"types":["typenum::bit::B1"]},{"text":"impl&lt;Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;Ur&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":false,"types":["typenum::uint::UTerm"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Bl:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;Ur&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;: PrivateXor&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;PrivateXorOut&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;, Ur&gt;: Trim,&nbsp;</span>","synthetic":false,"types":["typenum::uint::UInt"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()