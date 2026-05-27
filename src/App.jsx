import { useState, useEffect } from "react";

// TEMPORÁRIO - sem Supabase para testar
const supabase = { from: () => ({ select: () => ({ eq: () => ({ single: async () => ({ data: null }) }) }) }) };
